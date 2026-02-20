import { type NextRequest, NextResponse } from "next/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export const runtime = "edge"

export async function POST(request: NextRequest) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

  try {
    const body = await request.json()

    // Validate required fields
    if (!body.referrerName || !body.referrerEmail || !body.referrerPhone || !body.friendName || !body.friendPhone) {
      console.error("[v0] Referral validation failed", { submissionId })
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", submissionId },
        { status: 400 }
      )
    }

    // Email template
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Client Referral</h2>
        
        <h3 style="color: #4DB6AC;">Referrer Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Name:</strong></td><td style="padding: 8px;">${body.referrerName}</td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Email:</strong></td><td style="padding: 8px;"><a href="mailto:${body.referrerEmail}">${body.referrerEmail}</a></td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Phone:</strong></td><td style="padding: 8px;"><a href="tel:${body.referrerPhone}">${body.referrerPhone}</a></td></tr>
          ${body.referrerIdNumber ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>ID Number:</strong></td><td style="padding: 8px;">${body.referrerIdNumber}</td></tr>` : ""}
          ${body.referrerBankName ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Bank:</strong></td><td style="padding: 8px;">${body.referrerBankName}</td></tr>` : ""}
          ${body.referrerAccountNumber ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Account No:</strong></td><td style="padding: 8px;">${body.referrerAccountNumber}</td></tr>` : ""}
          ${body.referrerBranchCode ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Branch Code:</strong></td><td style="padding: 8px;">${body.referrerBranchCode}</td></tr>` : ""}
        </table>

        <h3 style="color: #4DB6AC; margin-top: 20px;">Referred Friend Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Name:</strong></td><td style="padding: 8px;">${body.friendName}</td></tr>
          <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Phone:</strong></td><td style="padding: 8px;"><a href="tel:${body.friendPhone}">${body.friendPhone}</a></td></tr>
          ${body.friendEmail ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Email:</strong></td><td style="padding: 8px;"><a href="mailto:${body.friendEmail}">${body.friendEmail}</a></td></tr>` : ""}
          ${body.friendRelationship ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Relationship:</strong></td><td style="padding: 8px;">${body.friendRelationship}</td></tr>` : ""}
        </table>

        <div style="margin-top: 20px; padding: 15px; background: #FFF3CD; border-left: 4px solid #FFD93D; border-radius: 4px;">
          <p style="margin: 0;"><strong>Referral Fee:</strong> R350.00 (payable once the friend successfully signs up for debt counselling)</p>
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
      subject: `New Referral Submission - ${body.referrerName} referred ${body.friendName}`,
      html: emailTemplate,
      submissionId,
      type: "referral",
      replyTo: body.referrerEmail,
    })

    return NextResponse.json({
      ok: true,
      submissionId,
    })
  } catch (error) {
    console.error("[v0] Referral submission failed", {
      submissionId,
      error: error instanceof Error ? error.message : String(error),
    })

    return NextResponse.json(
      {
        ok: false,
        code: "DELIVERY_FAILED",
        submissionId,
      },
      { status: 500 }
    )
  }
}
