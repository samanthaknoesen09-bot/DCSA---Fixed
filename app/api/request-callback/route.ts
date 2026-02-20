import { NextResponse } from "next/server"
import { sendDualEmail } from "@/lib/emailDispatcher"

export async function POST(request: Request) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

  try {
    const body = await request.json()

    // Validate required fields
    if (!body.name || !body.phone || !body.email) {
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", submissionId },
        { status: 400 }
      )
    }

    // Email template
    const emailTemplate = `
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
        <li><strong>Submitted:</strong> ${submittedTime}</li>
        <li><strong>Reference ID:</strong> ${submissionId}</li>
      </ul>
      <p>Please call this client back as soon as possible.</p>
    `

    // Send dual emails - if either fails, throws and we return 500
    await sendDualEmail({
      subject: `Callback Request - ${body.name}`,
      html: emailTemplate,
      submissionId,
      type: "callback",
      replyTo: body.email,
    })

    return NextResponse.json({
      ok: true,
      submissionId,
    })
  } catch (error) {
    console.error("[v0] Callback submission failed", {
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
