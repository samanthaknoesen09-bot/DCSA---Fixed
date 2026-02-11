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
    if (!body.name || !body.email || !body.phone) {
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
            name: body.name,
            email: body.email,
            phone: body.phone,
            message: body.message || "",
            timestamp,
            source: body.source || "Website Contact Form",
            formattedDate,
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
          subject: `New Lead - ${body.name} | ${body.source || "Contact Form"}`,
          html: `
            <h2>New Website Lead</h2>
            <h3>Contact Details:</h3>
            <ul>
              <li><strong>Name:</strong> ${body.name}</li>
              <li><strong>Email:</strong> <a href="mailto:${body.email}">${body.email}</a></li>
              <li><strong>Phone:</strong> <a href="tel:${body.phone}">${body.phone}</a></li>
            </ul>
            ${body.message ? `<h3>Message:</h3><p>${body.message}</p>` : ""}
            <h3>Metadata:</h3>
            <ul>
              <li><strong>Source:</strong> ${body.source || "Website Contact Form"}</li>
              <li><strong>Submitted:</strong> ${formattedDate}</li>
            </ul>
            <p>Please follow up with this lead as soon as possible.</p>
          `,
        })
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError)
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! We'll be in touch soon.",
    })
  } catch (error) {
    console.error("Lead submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit. Please try again or call us directly." },
      { status: 500 }
    )
  }
}
