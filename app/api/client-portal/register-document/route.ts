import { NextResponse } from "next/server"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import { sendDualEmail } from "@/lib/emailDispatcher"

export const runtime = "nodejs" // Document handling needs Node runtime

export async function POST(request: Request) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })

  try {
    const supabase = createServerComponentClient({ cookies })

    // Check authentication
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession()

    if (sessionError || !session) {
      return NextResponse.json(
        { ok: false, code: "UNAUTHORIZED" },
        { status: 401 }
      )
    }

    const body = await request.json()
    const { fileName, fileSize, fileType, fileUrl } = body

    // Validate required fields
    if (!fileName || fileSize === undefined || !fileType || !fileUrl) {
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", submissionId },
        { status: 400 }
      )
    }

    // Validate file size (50MB max)
    if (fileSize > 50 * 1024 * 1024) {
      return NextResponse.json(
        { ok: false, code: "FILE_TOO_LARGE", submissionId },
        { status: 413 }
      )
    }

    // Validate file type
    const allowedTypes = ["application/pdf", "image/jpeg", "image/png", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"]
    if (!allowedTypes.includes(fileType)) {
      return NextResponse.json(
        { ok: false, code: "INVALID_FILE_TYPE", submissionId },
        { status: 400 }
      )
    }

    // Insert metadata into documents table
    const { error: dbError } = await supabase.from("documents").insert([
      {
        user_id: session.user.id,
        file_name: fileName,
        file_size: fileSize,
        file_type: fileType,
        file_url: fileUrl,
        submitted_at: new Date().toISOString(),
      },
    ])

    if (dbError) {
      throw new Error(`Database insert failed: ${dbError.message}`)
    }

    // Send notification emails — strict enforcement (Fix #2)
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Client Document Submitted</h2>

        <h3 style="color: #4DB6AC;">Document Details:</h3>
        <ul>
          <li><strong>Client ID:</strong> ${session.user.id}</li>
          <li><strong>File Name:</strong> ${fileName}</li>
          <li><strong>File Size:</strong> ${(fileSize / 1024 / 1024).toFixed(2)} MB</li>
          <li><strong>File Type:</strong> ${fileType}</li>
          <li><strong>Submitted:</strong> ${submittedTime}</li>
          <li><strong>Reference ID:</strong> ${submissionId}</li>
        </ul>

        <p>The document has been successfully uploaded to our secure storage.</p>
      </div>
    `

    try {
      await sendDualEmail({
        subject: `New Document Uploaded - ${fileName}`,
        html: emailTemplate,
        submissionId,
        type: "document",
      })
    } catch (err) {
      console.error("[document] email failed", {
        submissionId,
        error: err instanceof Error ? err.message : String(err),
      })
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          saved: true,
          submissionId,
          message:
            "Your document is uploaded and saved, but our notification email failed. If urgent, please WhatsApp us with this reference ID.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({ ok: true, saved: true, submissionId })
  } catch (error) {
    console.error("[document] registration failed", {
      submissionId,
      error: error instanceof Error ? error.message : String(error),
    })
    return NextResponse.json(
      {
        ok: false,
        code: "SAVE_FAILED",
        saved: false,
        submissionId,
        message: "Failed to register document. Please try again.",
      },
      { status: 500 }
    )
  }
}
