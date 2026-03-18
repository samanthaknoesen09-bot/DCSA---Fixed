import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: NextRequest) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
  let transferSaved = false

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

    console.log("[v0] Processing transfer request", { submissionId, userId: user.id })

    // Create admin client for DB insert (bypasses RLS)
    const supabaseAdmin = createAdminClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Save to database using admin client
    const { data: transfer, error: dbError } = await supabaseAdmin
      .from("transfer_requests")
      .insert({
        client_id: user.id,
        first_name: formData.firstName,
        last_name: formData.lastName,
        id_number: formData.idNumber,
        email: formData.email,
        phone: formData.phone,
        current_dc_name: formData.currentDCName,
        current_dc_registration_number: formData.currentDCRegistrationNumber || null,
        current_dc_contact_number: formData.currentDCContactNumber || null,
        current_dc_email: formData.currentDCEmail || null,
        debt_review_start_date: formData.debtReviewStartDate || null,
        current_monthly_payment: parseFloat(formData.currentMonthlyPayment) || 0,
        number_of_creditors: parseInt(formData.numberOfCreditors) || null,
        reason_for_transfer: formData.reasonForTransfer,
        issues_with_current_dc: formData.issuesWithCurrentDC || null,
        authorize_contact_current_dc: formData.authorizeContactCurrentDC,
        authorize_transfer_of_records: formData.authorizeTransferOfRecords,
        understand_transfer_process: formData.understandTransferProcess,
        consent_to_process_personal_info: formData.consentToProcessPersonalInfo,
        status: "submitted",
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Transfer DB insert error:", dbError)
      return NextResponse.json(
        { 
          ok: false,
          code: "SAVE_FAILED",
          submissionId,
          saved: false,
          message: "Failed to save transfer request to database.",
        },
        { status: 500 }
      )
    }

    transferSaved = true
    console.log("[v0] Transfer request saved:", { submissionId, transferId: transfer.id })

    // Send notification emails using strict dual delivery
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Debt Review Transfer Request</h2>
        
        <h3 style="color: #4DB6AC;">Client Information:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.firstName} ${formData.lastName}</li>
          <li><strong>ID Number:</strong> ${formData.idNumber}</li>
          <li><strong>Email:</strong> ${formData.email}</li>
          <li><strong>Phone:</strong> ${formData.phone}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Current Debt Counsellor:</h3>
        <ul>
          <li><strong>Name:</strong> ${formData.currentDCName}</li>
          <li><strong>NCR Number:</strong> ${formData.currentDCRegistrationNumber || "Not provided"}</li>
          <li><strong>Contact:</strong> ${formData.currentDCContactNumber || "Not provided"}</li>
          <li><strong>Email:</strong> ${formData.currentDCEmail || "Not provided"}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Debt Review Details:</h3>
        <ul>
          <li><strong>Start Date:</strong> ${formData.debtReviewStartDate || "Not provided"}</li>
          <li><strong>Current Monthly Payment:</strong> R${formData.currentMonthlyPayment}</li>
          <li><strong>Number of Creditors:</strong> ${formData.numberOfCreditors || "Not provided"}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Reason for Transfer:</h3>
        <p>${formData.reasonForTransfer}</p>
        ${formData.issuesWithCurrentDC ? `<h3 style="color: #4DB6AC;">Issues with Current DC:</h3><p>${formData.issuesWithCurrentDC}</p>` : ''}
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}<br/>
            <strong>Transfer ID:</strong> ${transfer.id}<br/>
            <strong>Submitted:</strong> ${submittedTime}
          </p>
        </div>
        
        <p>Please begin the transfer process by contacting ${formData.currentDCName}.</p>
      </div>
    `

    try {
      await sendDualEmail({
        subject: `New Transfer Request - ${formData.firstName} ${formData.lastName}`,
        html: emailTemplate,
        submissionId,
        type: "transfer",
        replyTo: formData.email,
      })
      console.log("[v0] Transfer dual emails sent successfully:", { submissionId })
    } catch (emailError) {
      console.error("[v0] Transfer email failed after save:", {
        submissionId,
        transferId: transfer.id,
        error: emailError instanceof Error ? emailError.message : String(emailError),
      })
      // Transfer saved but email failed
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          submissionId,
          saved: true,
          transferId: transfer.id,
          message: "Transfer request saved but email notification failed.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      ok: true,
      saved: true,
      submissionId,
      transferId: transfer.id,
      message: "Transfer request submitted successfully",
    })
  } catch (error) {
    console.error("[v0] Transfer submission error:", {
      submissionId,
      transferSaved,
      error: error instanceof Error ? error.message : String(error),
    })
    return NextResponse.json(
      { 
        ok: false,
        code: "SUBMISSION_ERROR",
        submissionId,
        saved: transferSaved,
        message: "Failed to submit transfer request. Please try again.",
      },
      { status: 500 }
    )
  }
}
