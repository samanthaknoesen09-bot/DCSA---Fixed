import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: Request) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
  let applicationSaved = false

  try {
    const body = await request.json()
    const supabase = await createClient()

    // Validate required fields
    if (!body.personalInfo?.firstName || !body.personalInfo?.surname || !body.personalInfo?.email || !body.personalInfo?.cellphone) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          submissionId,
        },
        { status: 400 }
      )
    }

    const clientName = `${body.personalInfo.firstName} ${body.personalInfo.surname}`.trim()

    // Save to Supabase form16_applications table
    const { error: dbError } = await supabase.from("form16_applications").insert({
      submission_id: submissionId,
      first_name: body.personalInfo?.firstName || null,
      last_name: body.personalInfo?.surname || null,
      id_number: body.personalInfo?.idNumber || null,
      email: body.personalInfo?.email || null,
      phone: body.personalInfo?.cellphone || body.personalInfo?.telephone || null,
      employer: body.personalInfo?.employer || null,
      street_address: body.personalInfo?.streetAddress || null,
      suburb: body.personalInfo?.suburb || null,
      city: body.personalInfo?.city || null,
      postal_code: body.personalInfo?.postalCode || null,
      monthly_income: body.income?.totalGross ? parseFloat(String(body.income.totalGross)) : 0,
      total_monthly_debt_payment: body.monthlyCommitments?.totalCommitments ? parseFloat(String(body.monthlyCommitments.totalCommitments)) : 0,
      reason_for_debt_review: body.additionalInfo?.reasonForDebtReview || null,
      current_financial_difficulties: body.additionalInfo?.currentFinancialDifficulties || null,
      poa_agreement: body.consent?.poaAgreement || false,
      consent_to_contact_creditors: body.consent?.consentToContactCreditors || false,
      consent_to_process_personal_info: body.consent?.consentToProcessPersonalInfo || false,
      understand_debt_review_process: body.consent?.understandDebtReviewProcess || false,
      full_application: body,
      status: "submitted",
    })

    if (dbError) {
      console.error("[v0] Form16 database insert failed:", dbError.message)
      throw new Error(`Database save failed: ${dbError.message}`)
    }

    applicationSaved = true
    console.log("[v0] Form16 application saved to Supabase:", { submissionId, clientName })

    // Build email template
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Debt Review Application Received</h2>
        <p><strong>Submitted:</strong> ${submittedTime}</p>
        
        <h3 style="color: #4DB6AC;">Client Information</h3>
        <ul>
          <li><strong>Name:</strong> ${clientName}</li>
          <li><strong>ID Number:</strong> ${body.personalInfo?.idNumber || "Not provided"}</li>
          <li><strong>Email:</strong> ${body.personalInfo?.email || "Not provided"}</li>
          <li><strong>Phone:</strong> ${body.personalInfo?.cellphone || body.personalInfo?.telephone || "Not provided"}</li>
          <li><strong>Address:</strong> ${[body.personalInfo?.streetAddress, body.personalInfo?.suburb, body.personalInfo?.city, body.personalInfo?.postalCode].filter(Boolean).join(", ") || "Not provided"}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Employment Details</h3>
        <ul>
          <li><strong>Employer:</strong> ${body.personalInfo?.employer || "Not provided"}</li>
          <li><strong>Occupation:</strong> ${body.personalInfo?.occupation || "Not provided"}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Financial Summary</h3>
        <ul>
          <li><strong>Gross Income:</strong> R${body.income?.totalGross ? parseFloat(String(body.income.totalGross)).toLocaleString() : "0"}</li>
          <li><strong>Total Deductions:</strong> R${body.deductions?.totalDeductions ? parseFloat(String(body.deductions.totalDeductions)).toLocaleString() : "0"}</li>
          <li><strong>Net Income:</strong> R${body.income?.netIncome ? parseFloat(String(body.income.netIncome)).toLocaleString() : "0"}</li>
          <li><strong>Monthly Commitments:</strong> R${body.monthlyCommitments?.totalCommitments ? parseFloat(String(body.monthlyCommitments.totalCommitments)).toLocaleString() : "0"}</li>
          <li><strong>Total Debt Obligations:</strong> R${body.debtObligations?.totalDebt ? parseFloat(String(body.debtObligations.totalDebt)).toLocaleString() : "0"}</li>
        </ul>
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}
          </p>
        </div>
      </div>
    `

    // Send dual emails - STRICT: if either fails, throw and return 500
    try {
      await sendDualEmail({
        subject: `New Form 16 Application - ${clientName}`,
        html: emailTemplate,
        submissionId,
        type: "form16",
        replyTo: body.personalInfo?.email,
      })
      console.log("[v0] Form16 dual emails sent successfully:", { submissionId })
    } catch (emailError) {
      console.error("[v0] Form16 dual email delivery FAILED:", {
        submissionId,
        error: emailError instanceof Error ? emailError.message : String(emailError),
      })
      // Email failed after DB save - return 500 with saved:true
      throw emailError
    }

    return NextResponse.json(
      {
        ok: true,
        submissionId,
        saved: true,
      },
      { status: 200 }
    )
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Form16 submission error:", {
      submissionId,
      applicationSaved,
      error: errorMessage,
    })

    // Distinguish between email failure and other errors
    if (error instanceof Error && error.message.includes("email") && applicationSaved) {
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          submissionId,
          saved: true,
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        ok: false,
        code: "SUBMISSION_ERROR",
        submissionId,
      },
      { status: 500 }
    )
  }
}
