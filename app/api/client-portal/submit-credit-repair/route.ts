import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: NextRequest) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
  let applicationSaved = false

  try {
    const supabase = await createClient()
    
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json(
        { 
          ok: false, 
          code: "UNAUTHORIZED",
          submissionId,
          message: "Authentication required. Please log in.",
        },
        { status: 401 }
      )
    }

    const formData = await request.json()

    console.log("[v0] Processing credit repair application", { submissionId, userId: user.id })

    // Create admin client for DB insert (bypasses RLS)
    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Save to database using admin client
    const { data: application, error: dbError } = await supabaseAdmin
      .from("credit_repair_applications")
      .insert({
        submission_id: submissionId,
        client_id: user.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        id_number: formData.idNumber,
        email: formData.email,
        phone: formData.phone,
        credit_score: formData.creditScore || null,
        credit_bureaus: formData.creditBureaus,
        specific_issues: formData.specificIssues,
        issue_description: formData.issueDescription || null,
        dispute_accounts: formData.disputeAccounts || null,
        dispute_reasons: formData.disputeReasons || null,
        desired_outcome: formData.desiredOutcome,
        timeframe: formData.timeframe || null,
        poa_agreement: formData.poaAgreement,
        consent_to_dispute_on_behalf: formData.consentToDisputeOnBehalf,
        consent_to_contact_bureaus: formData.consentToContactBureaus,
        consent_to_process_personal_info: formData.consentToProcessPersonalInfo,
        understand_credit_repair_process: formData.understandCreditRepairProcess,
        status: "submitted",
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Credit repair DB insert error:", dbError)
      return NextResponse.json(
        { 
          ok: false,
          code: "SAVE_FAILED",
          submissionId,
          saved: false,
          message: "Failed to save credit repair application to database.",
        },
        { status: 500 }
      )
    }

    applicationSaved = true
    console.log("[v0] Credit repair application saved:", { submissionId, applicationId: application.id })

    // Send notification emails using strict dual delivery
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Credit Repair Application</h2>
        
        <h3 style="color: #4DB6AC;">Client Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
          <li><strong>ID Number:</strong> ${formData.idNumber}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
          <li><strong>Current Credit Score:</strong> ${formData.creditScore || "Not provided"}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Credit Issues:</h3>
        <ul>
          <li><strong>Credit Bureaus Checked:</strong> ${formData.creditBureaus.join(", ")}</li>
          <li><strong>Specific Issues:</strong> ${formData.specificIssues.join(", ")}</li>
        </ul>
        
        ${formData.issueDescription ? `<h3 style="color: #4DB6AC;">Issue Description:</h3><p>${formData.issueDescription}</p>` : ''}
        ${formData.disputeAccounts ? `<h3 style="color: #4DB6AC;">Accounts to Dispute:</h3><p>${formData.disputeAccounts}</p>` : ''}
        ${formData.disputeReasons ? `<h3 style="color: #4DB6AC;">Dispute Reasons:</h3><p>${formData.disputeReasons}</p>` : ''}
        
        <h3 style="color: #4DB6AC;">Goals:</h3>
        <p><strong>Desired Outcome:</strong> ${formData.desiredOutcome}</p>
        ${formData.timeframe ? `<p><strong>Timeframe:</strong> ${formData.timeframe}</p>` : ''}
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}<br/>
            <strong>Application ID:</strong> ${application.id}<br/>
            <strong>Submitted:</strong> ${submittedTime}
          </p>
        </div>
      </div>
    `

    try {
      await sendDualEmail({
        subject: `New Credit Repair Application - ${formData.firstName} ${formData.lastName}`,
        html: emailTemplate,
        submissionId,
        type: "credit_repair",
        replyTo: formData.email,
      })
      console.log("[v0] Credit repair dual emails sent successfully:", { submissionId })
    } catch (emailError) {
      console.error("[v0] Credit repair email failed after save:", {
        submissionId,
        applicationId: application.id,
        error: emailError instanceof Error ? emailError.message : String(emailError),
      })
      // Application saved but email failed
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          submissionId,
          saved: true,
          applicationId: application.id,
          message: "Credit repair application saved but email notification failed.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      ok: true,
      saved: true,
      submissionId,
      applicationId: application.id,
      message: "Application submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Credit repair submission error:", {
      submissionId,
      applicationSaved,
      error: error instanceof Error ? error.message : String(error),
    })
    return NextResponse.json(
      { 
        ok: false,
        code: "SUBMISSION_ERROR",
        submissionId,
        saved: applicationSaved,
        message: "Failed to submit application. Please try again.",
      },
      { status: 500 }
    )
  }
}
