import { NextResponse } from "next/server"
import { Resend } from "resend"

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const timestamp = new Date().toISOString()
    const formattedDate = new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg",
      dateStyle: "full",
      timeStyle: "short",
    })

    // Send to Zapier webhook if configured
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "Callback Request",
            taskType: "Lead - Callback",
            status: "New",
            priority: "Normal",
            clientName: body.name,
            email: body.email,
            phone: body.phone,
            preferredTime: body.preferredTime || "Anytime",
            reason: body.reason || "General Inquiry",
            submittedAt: timestamp,
            source: "DCSA Website - Callback Request",
          }),
        })
      } catch (zapierError) {
        console.error("Zapier webhook error:", zapierError)
      }
    }

    // Send email notification to info@dcsam.co.za
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = getResend()
        if (!resend) throw new Error("Resend not configured")
        await resend.emails.send({
          from: "DCSA Website <noreply@dcsam.co.za>",
          to: "info@dcsam.co.za",
          subject: `Callback Request - ${body.name}`,
          html: `
            <h2>New Callback Request</h2>
            <h3>Contact Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${body.name}</li>
              <li><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></li>
              <li><strong>Phone:</strong> <a href="tel:${body.phone}">${body.phone}</a></li>
            </ul>
            <h3>Request Details:</h3>
            <ul>
              <li><strong>Preferred Time:</strong> ${body.preferredTime || "Anytime"}</li>
              <li><strong>Reason:</strong> ${body.reason || "General Inquiry"}</li>
            </ul>
            <h3>Metadata:</h3>
            <ul>
              <li><strong>Submitted:</strong> ${formattedDate}</li>
              <li><strong>Source:</strong> Website Callback Form</li>
            </ul>
            <p>Please call this client back as soon as possible.</p>
          `,
        })
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Callback request submitted successfully",
    })
  } catch (error) {
    console.error("Callback request error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
