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

    console.log("[v0] Processing referral submission:", { referralId, referrerName: body.referrerName })

    // Send email notification via Resend to Samantha
    try {
      if (process.env.RESEND_API_KEY) {
        console.log("[v0] Sending referral email via Resend...")
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
                    <strong>Submitted:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
                  </p>
                </div>
              </div>
            `,
          }),
        })

        if (!resendResponse.ok) {
          const errorText = await resendResponse.text()
          console.error("[v0] Resend API error:", errorText)
        } else {
          console.log("[v0] Email sent successfully to samantha.knoesen09@gmail.com")
        }
      } else {
        console.warn("[v0] RESEND_API_KEY not configured")
      }
    } catch (emailError) {
      console.error("[v0] Email sending error:", emailError)
    }

    // Send WhatsApp message notification via WhatsApp API (if configured)
    try {
      if (process.env.WHATSAPP_API_KEY && process.env.WHATSAPP_PHONE_ID) {
        console.log("[v0] Sending WhatsApp notification...")
        const whatsappMessage = `New Referral Received!\n\nReferrer: ${body.referrerName}\nPhone: ${body.referrerPhone}\nFriend: ${body.friendName}\nFriend's Phone: ${body.friendPhone}\n\nReferral ID: ${referralId}`
        
        await fetch("https://graph.instagram.com/v18.0/" + process.env.WHATSAPP_PHONE_ID + "/messages", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${process.env.WHATSAPP_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            messaging_product: "whatsapp",
            to: "27661937596",
            type: "text",
            text: { body: whatsappMessage },
          }),
        })
        console.log("[v0] WhatsApp notification sent")
      }
    } catch (whatsappError) {
      console.warn("[v0] WhatsApp notification failed (non-critical):", whatsappError)
    }

    // Also send to Zapier if configured
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        console.log("[v0] Sending to Zapier webhook...")
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
        console.log("[v0] Zapier webhook sent")
      } catch (zapierError) {
        console.warn("[v0] Zapier webhook failed (non-critical):", zapierError)
      }
    }

    console.log("[v0] Referral submission completed successfully")

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
