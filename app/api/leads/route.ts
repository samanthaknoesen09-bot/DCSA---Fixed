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
      console.error("[v0] Lead validation failed - missing required fields")
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

    console.log("[v0] Processing lead from:", body.name)

    // Email template
    const emailTemplate = `
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
    `

    let emailsSent = 0
    let emailsFailed = 0

    // Send emails to BOTH addresses (MANDATORY PER MASTER AUDIT)
    if (process.env.RESEND_API_KEY) {
      try {
        const resend = getResend()
        if (!resend) throw new Error("Resend not configured")

        console.log("[v0] Attempting to send lead emails via Resend...")
        
        // Send to info@dcsam.co.za
        try {
          await resend.emails.send({
            from: "DCSA Website <noreply@dcsam.co.za>",
            to: "info@dcsam.co.za",
            subject: `New Lead - ${body.name} | ${body.source || "Contact Form"}`,
            html: emailTemplate,
          })
          console.log("[v0] Lead email sent to info@dcsam.co.za")
          emailsSent++
        } catch (e) {
          console.error("[v0] Failed to send lead email to info@dcsam.co.za:", e)
          emailsFailed++
        }

        // Send to samantha.knoesen09@gmail.com
        try {
          await resend.emails.send({
            from: "DCSA Website <noreply@dcsam.co.za>",
            to: "samantha.knoesen09@gmail.com",
            subject: `New Lead - ${body.name} | ${body.source || "Contact Form"}`,
            html: emailTemplate,
          })
          console.log("[v0] Lead email sent to samantha.knoesen09@gmail.com")
          emailsSent++
        } catch (e) {
          console.error("[v0] Failed to send lead email to samantha.knoesen09@gmail.com:", e)
          emailsFailed++
        }
      } catch (emailError) {
        console.error("[v0] Resend initialization error:", emailError)
        emailsFailed = 2
      }
    } else {
      console.warn("[v0] RESEND_API_KEY not configured")
    }

    // Send to Zapier webhook if configured
    let zapierSent = false
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
        console.log("[v0] Lead sent to Zapier webhook")
        zapierSent = true
      } catch (zapierError) {
        console.warn("[v0] Zapier webhook error:", zapierError)
      }
    }

    // Structured logging for monitoring
    console.log("[v0] LEAD SUBMISSION COMPLETED", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      source: body.source || "Website Contact Form",
      submittedAt: formattedDate,
      emailsSentTo: ["info@dcsam.co.za", "samantha.knoesen09@gmail.com"],
      emailsSentCount: emailsSent,
      emailsFailedCount: emailsFailed,
      zapierSent,
    })

    // Return success if at least one email was sent OR Zapier succeeded
    if (emailsSent > 0 || zapierSent) {
      return NextResponse.json({
        success: true,
        message: "Thank you! We'll be in touch soon.",
      })
    } else {
      console.error("[v0] Lead submission failed - no delivery method succeeded")
      return NextResponse.json(
        { error: "Failed to submit. Please try again or call us directly." },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[v0] Lead submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit. Please try again or call us directly." },
      { status: 500 }
    )
  }
}
