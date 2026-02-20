import { NextResponse } from "next/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: Request) {
  const submissionId = crypto.randomUUID()

  try {
    const body = await request.json()

    const submittedAt = new Date().toISOString()
    const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

    // Prepare structured data for ClickUp via Zapier
    const clickUpData = {
      type: "Form 16 - Debt Review Application",
      clientType: "New Client",
      status: "New Application",
      submissionId,
      submittedAt,
      
      // Client Details
      clientName: `${body.personalInfo?.firstName || ""} ${body.personalInfo?.surname || ""}`.trim(),
      email: body.personalInfo?.email || "",
      phone: body.personalInfo?.cellphone || body.personalInfo?.telephone || "",
      idNumber: body.personalInfo?.idNumber || "",
      
      // Address
      address: `${body.personalInfo?.streetAddress || ""}, ${body.personalInfo?.suburb || ""}, ${body.personalInfo?.city || ""}, ${body.personalInfo?.postalCode || ""}`.trim(),
      
      // Employment
      employer: body.personalInfo?.employer || "",
      occupation: body.personalInfo?.occupation || "",
      employmentStartDate: body.personalInfo?.employmentStartDate || "",
      
      // Financial Summary
      totalGrossIncome: body.income?.totalGross || 0,
      totalDeductions: body.deductions?.totalDeductions || 0,
      netIncome: body.income?.netIncome || 0,
      totalMonthlyCommitments: body.monthlyCommitments?.totalCommitments || 0,
      totalDebtObligations: body.debtObligations?.totalDebt || 0,
      
      // Full Application Data
      fullApplication: body,
      
      // Metadata for routing
      source: "DCSA Website - Form 16",
      priority: "High",
    }

    // Send to Zapier webhook (which will create task in ClickUp)
    let clickUpDelivered = false
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL

    if (zapierWebhookUrl) {
      try {
        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(clickUpData),
        })

        if (!zapierResponse.ok) {
          console.warn("[v0] Zapier webhook returned status:", zapierResponse.status)
        } else {
          console.log("[v0] Form 16 sent to Zapier/ClickUp successfully")
          clickUpDelivered = true
        }
      } catch (zapierError) {
        console.warn("[v0] Failed to send to Zapier:", zapierError instanceof Error ? zapierError.message : String(zapierError))
      }
    }

    // Send email notification to both addresses
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Debt Review Application Received</h2>
        <p><strong>Submitted:</strong> ${submittedTime}</p>
        
        <h3 style="color: #4DB6AC;">Client Information</h3>
        <ul>
          <li><strong>Name:</strong> ${clickUpData.clientName}</li>
          <li><strong>ID Number:</strong> ${clickUpData.idNumber}</li>
          <li><strong>Email:</strong> ${clickUpData.email}</li>
          <li><strong>Phone:</strong> ${clickUpData.phone}</li>
          <li><strong>Address:</strong> ${clickUpData.address}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Employment Details</h3>
        <ul>
          <li><strong>Employer:</strong> ${clickUpData.employer}</li>
          <li><strong>Occupation:</strong> ${clickUpData.occupation}</li>
          <li><strong>Employment Start:</strong> ${clickUpData.employmentStartDate}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Financial Summary</h3>
        <ul>
          <li><strong>Gross Income:</strong> R${clickUpData.totalGrossIncome.toLocaleString()}</li>
          <li><strong>Total Deductions:</strong> R${clickUpData.totalDeductions.toLocaleString()}</li>
          <li><strong>Net Income:</strong> R${clickUpData.netIncome.toLocaleString()}</li>
          <li><strong>Monthly Commitments:</strong> R${clickUpData.totalMonthlyCommitments.toLocaleString()}</li>
          <li><strong>Total Debt:</strong> R${clickUpData.totalDebtObligations.toLocaleString()}</li>
        </ul>
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}
          </p>
        </div>
        <p><em>Full application details have been sent to your ClickUp workspace.</em></p>
      </div>
    `

    // Try to send dual emails, but don't fail request if they fail (ClickUp via Zapier is the critical path)
    try {
      await sendDualEmail({
        subject: `New Form 16 Application - ${clickUpData.clientName}`,
        html: emailTemplate,
        submissionId,
        type: "referral", // Use referral type for consistency
      })
      console.log("[v0] Form 16 notification emails sent")
    } catch (emailError) {
      console.warn("[v0] Failed to send notification emails:", emailError instanceof Error ? emailError.message : String(emailError))
      // Don't fail the request if email fails - ClickUp delivery is what matters
    }

    return NextResponse.json({ 
      ok: true,
      success: true,
      submissionId,
      clickUpDelivered,
      message: "Application submitted successfully" 
    })

  } catch (error) {
    console.error("[v0] Form 16 submission error:", {
      submissionId,
      error: error instanceof Error ? error.message : String(error),
    })
    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    )
  }
}
