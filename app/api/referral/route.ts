import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.referrerName || !body.referrerEmail || !body.referrerPhone || !body.friendName || !body.friendPhone) {
      return NextResponse.json(
        { error: "Please fill in all required fields.", code: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    const referralId = `REF-${Date.now()}`

    // Send email notification via Resend
    try {
      if (process.env.RESEND_API_KEY) {
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "DCSA Website <noreply@dcsam.co.za>",
            to: [process.env.DCSA_EMAIL || "info@dcsam.co.za"],
            replyTo: body.referrerEmail,
            subject: `New Referral Submission - ${body.referrerName} referred ${body.friendName}`,
            html: `
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
                    <strong>Referral ID:</strong> ${referralId}<br/>
                    <strong>Submitted:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
                  </p>
                </div>
              </div>
            `,
          }),
        })

        if (!resendResponse.ok) {
          console.error("Resend API error:", await resendResponse.text())
        }
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
    }

    // Also send to Zapier if configured
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "Client Referral",
            referrerName: body.referrerName,
            referrerEmail: body.referrerEmail,
            referrerPhone: body.referrerPhone,
            friendName: body.friendName,
            friendPhone: body.friendPhone,
            friendEmail: body.friendEmail || "",
            referralFee: "R350",
            submittedAt: new Date().toISOString(),
            source: "DCSA Website - Referral Form",
          }),
        })
      } catch {
        // Silent fail for Zapier
      }
    }

    return NextResponse.json({
      success: true,
      ok: true,
      referralId,
      message: "Referral submitted successfully! We've received it and will be in touch.",
    })
  } catch (error) {
    console.error("Referral submission error:", error)
    return NextResponse.json(
      { 
        error: "Something went wrong. Please try again or call us directly.",
        code: "SUBMISSION_ERROR",
        ok: false
      },
      { status: 500 }
    )
  }
}
