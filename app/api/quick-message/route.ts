import { NextResponse } from "next/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: Request) {
  const submissionId = `msg-${Date.now()}`
  
  try {
    const body = await request.json()
    const { name, mobile, message, consent } = body

    // Validation
    if (!name || !mobile || !message) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          submissionId,
          message: "Please fill in all fields.",
        },
        { status: 400 }
      )
    }

    if (!consent) {
      return NextResponse.json(
        {
          ok: false,
          code: "CONSENT_REQUIRED",
          submissionId,
          message: "Please consent to us contacting you.",
        },
        { status: 400 }
      )
    }

    const submittedTime = new Date().toLocaleString("en-ZA", {
      timeZone: "Africa/Johannesburg",
      dateStyle: "medium",
      timeStyle: "short",
    })

    // Send notification email
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #800020; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">Quick Message Received ☕</h2>
        
        <h3 style="color: #4DB6AC;">Contact Details:</h3>
        <ul>
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Mobile:</strong> ${mobile}</li>
          <li><strong>Received:</strong> ${submittedTime}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Message:</h3>
        <p style="background: #f8f9fa; padding: 15px; border-radius: 4px; white-space: pre-wrap;">
          ${message}
        </p>
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}
          </p>
        </div>
        
        <p style="margin-top: 20px; font-size: 14px; color: #666;">
          <em>Please respond to this person as soon as possible.</em>
        </p>
      </div>
    `

    const plainText = `
Quick Message Received ☕

Contact Details:
- Name: ${name}
- Mobile: ${mobile}
- Received: ${submittedTime}

Message:
${message}

Reference ID: ${submissionId}

Please respond to this person as soon as possible.
    `

    const emailResult = await sendDualEmail({
      subject: `Quick Message from ${name} ☕`,
      html: emailTemplate,
      text: plainText,
    })

    if (!emailResult.success) {
      console.error("[v0] Quick message email failed:", emailResult.error)
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          saved: false,
          submissionId,
          message: "Your message couldn't be sent. Please try WhatsApp or call us directly.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      ok: true,
      saved: true,
      submissionId,
      message: "You did the hard part. We'll get back to you ASAP.",
    })
  } catch (error) {
    console.error("[v0] Quick message error:", error)
    return NextResponse.json(
      {
        ok: false,
        code: "SUBMISSION_ERROR",
        saved: false,
        submissionId,
        message: "Something went wrong. Please try WhatsApp or call us directly.",
      },
      { status: 500 }
    )
  }
}
