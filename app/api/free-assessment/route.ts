import { type NextRequest, NextResponse } from "next/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: NextRequest) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.surname || !body.contactNumber || !body.idNumber || !body.agreeToCredit) {
      console.error("[v0] Free assessment validation failed", { submissionId })
      return NextResponse.json(
        { 
          ok: false, 
          code: "VALIDATION_ERROR", 
          submissionId,
          message: "Please complete all required fields.",
        },
        { status: 400 }
      )
    }

    // Email template for internal team
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Free Assessment Request</h2>
        
        <h3 style="color: #4DB6AC;">Client Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Name:</strong></td><td style="padding: 8px;">${body.name} ${body.surname}</td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Phone:</strong></td><td style="padding: 8px;"><a href="tel:${body.contactNumber}">${body.contactNumber}</a></td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>ID Number:</strong></td><td style="padding: 8px;">${body.idNumber}</td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Credit Check Consent:</strong></td><td style="padding: 8px;">✓ Agreed</td></tr>
        </table>

        <h3 style="color: #4DB6AC; margin-top: 20px;">Potential Savings Analysis</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Current Total Debt Payment:</strong></td><td style="padding: 8px;">R${(body.currentDebt || 0).toFixed(2)}</td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Potential Monthly Savings:</strong></td><td style="padding: 8px;"><strong style="color: #4DB6AC;">R${(body.potentialSavings || 0).toFixed(2)}</strong></td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Potential Yearly Savings:</strong></td><td style="padding: 8px;"><strong style="color: #4DB6AC;">R${((body.potentialSavings || 0) * 12).toFixed(2)}</strong></td></tr>
        </table>

        <div style="margin-top: 20px; padding: 15px; background: #4DB6AC/10; border-left: 4px solid #4DB6AC; border-radius: 4px;">
          <p style="margin: 0; font-size: 14px;"><strong>Action Required:</strong> Contact this client on WhatsApp at ${body.contactNumber} to discuss their free assessment and potential debt review options.</p>
        </div>

        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}<br/>
            <strong>Submitted:</strong> ${submittedTime}
          </p>
        </div>
      </div>
    `

    // Send dual emails - if either fails, throws and we return 500
    await sendDualEmail({
      subject: `New Free Assessment Request - ${body.name} ${body.surname}`,
      html: emailTemplate,
      submissionId,
      type: "lead",
      replyTo: body.contactNumber,
    })

    return NextResponse.json({
      ok: true,
      submissionId,
      saved: true,
    })
  } catch (error) {
    console.error("[v0] Free assessment submission failed", {
      submissionId,
      error: error instanceof Error ? error.message : String(error),
    })

    return NextResponse.json(
      {
        ok: false,
        code: "DELIVERY_FAILED",
        submissionId,
        message: "Failed to deliver submission. Please try again or contact us directly.",
      },
      { status: 500 }
    )
  }
}
