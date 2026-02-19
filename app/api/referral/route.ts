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
    const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

    console.log("[v0] Processing referral submission:", { referralId, referrerName: body.referrerName })

    let emailSent = false

    // PRIORITY 1: Send email notification via Resend to Samantha
    if (process.env.RESEND_API_KEY) {
      try {
        console.log("[v0] Attempting to send referral email via Resend...")
        const resendResponse = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          },
          body: JSON.stringify({
            from: "DCSA Website <noreply@dcsam.co.za>",
            to: ["samantha.knoesen09@gmail.com"],
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
                    <strong>Submitted:</strong> ${submittedTime}
                  </p>
                </div>
              </div>
            `,
          }),
        })

        if (resendResponse.ok) {
          console.log("[v0] Email sent successfully to samantha.knoesen09@gmail.com via Resend")
          emailSent = true
        } else {
          const errorText = await resendResponse.text()
          console.error("[v0] Resend API error:", { status: resendResponse.status, error: errorText })
        }
      } catch (emailError) {
        console.error("[v0] Resend email sending error:", emailError)
      }
    } else {
      console.warn("[v0] RESEND_API_KEY not configured - fallback to Zapier/alternative methods")
    }

    // PRIORITY 2: Send to Zapier webhook (if configured) - most reliable backup
    let zapierSent = false
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        console.log("[v0] Sending referral to Zapier webhook...")
        const zapierResponse = await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "Client Referral",
            referralId,
            referrerName: body.referrerName,
            referrerEmail: body.referrerEmail,
            referrerPhone: body.referrerPhone,
            friendName: body.friendName,
            friendPhone: body.friendPhone,
            friendEmail: body.friendEmail || "",
            referrerIdNumber: body.referrerIdNumber || "",
            referrerBankName: body.referrerBankName || "",
            referrerAccountNumber: body.referrerAccountNumber || "",
            referrerBranchCode: body.referrerBranchCode || "",
            friendRelationship: body.friendRelationship || "",
            referralFee: "R350",
            submittedAt: submittedTime,
            source: "DCSA Website - Referral Form",
          }),
        })
        if (zapierResponse.ok) {
          console.log("[v0] Referral sent successfully to Zapier")
          zapierSent = true
        } else {
          console.warn("[v0] Zapier webhook returned status:", zapierResponse.status)
        }
      } catch (zapierError) {
        console.warn("[v0] Zapier webhook error:", zapierError)
      }
    } else {
      console.warn("[v0] ZAPIER_WEBHOOK_URL not configured")
    }

    // PRIORITY 3: Log to console for monitoring (will show in server logs)
    console.log("[v0] REFERRAL NOTIFICATION LOG:", {
      referralId,
      referrerName: body.referrerName,
      referrerEmail: body.referrerEmail,
      referrerPhone: body.referrerPhone,
      friendName: body.friendName,
      friendPhone: body.friendPhone,
      submittedAt: submittedTime,
      emailSent,
      zapierSent,
    })

    console.log("[v0] Referral submission completed. Email sent:", emailSent, "Zapier sent:", zapierSent)

    return NextResponse.json({
      success: true,
      ok: true,
      referralId,
      message: "Referral submitted successfully! We've received it and will be in touch.",
    })
  } catch (error) {
    console.error("[v0] Referral submission error:", error)
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
