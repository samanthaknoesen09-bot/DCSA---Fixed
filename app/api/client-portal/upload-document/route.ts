import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { Resend } from "resend"

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

function getResend() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ error: "Unauthorized", code: "UNAUTHORIZED" }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    const documentType = formData.get("document_type") as string

    if (!file) {
      return NextResponse.json({ error: "No file provided", code: "NO_FILE" }, { status: 400 })
    }

    if (!documentType) {
      return NextResponse.json({ error: "Document type is required", code: "NO_TYPE" }, { status: 400 })
    }

    // Validate file size (max 50MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { 
          error: "File too large. Maximum allowed size is 50MB.",
          code: "FILE_TOO_LARGE",
          maxSize: MAX_FILE_SIZE,
          fileSize: file.size
        }, 
        { status: 413 }
      )
    }

    // Generate a unique filename with user ID prefix
    const timestamp = Date.now()
    const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const storagePath = `${user.id}/${timestamp}-${sanitizedFilename}`

    // Convert file to buffer for Supabase Storage
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Supabase Storage
    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("client-documents")
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      console.error("Storage upload error:", uploadError)
      // Check if error is related to file size
      if (uploadError.message?.includes("413") || uploadError.message?.includes("entity too large")) {
        return NextResponse.json(
          { 
            error: "File too large. Maximum allowed size is 50MB.",
            code: "FILE_TOO_LARGE"
          },
          { status: 413 }
        )
      }
      return NextResponse.json(
        { error: "Failed to upload file. Please try again.", code: "UPLOAD_FAILED" },
        { status: 500 }
      )
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage
      .from("client-documents")
      .getPublicUrl(storagePath)

    const fileUrl = publicUrlData?.publicUrl || storagePath

    // Save document record to database
    const { data: document, error: dbError } = await supabase
      .from("documents")
      .insert({
        client_id: user.id,
        document_type: documentType,
        file_name: file.name,
        file_url: fileUrl,
        file_size: file.size,
        mime_type: file.type,
      })
      .select()
      .single()

    if (dbError) {
      console.error("Database error:", dbError)
      return NextResponse.json(
        { error: "Failed to save document record", code: "DB_ERROR" },
        { status: 500 }
      )
    }

    // Get user details for email
    const userName = user.user_metadata?.first_name
      ? `${user.user_metadata.first_name} ${user.user_metadata.last_name || ""}`
      : user.email

    // Send email notification to DCSA
    try {
      if (process.env.RESEND_API_KEY) {
        const resend = getResend()
        if (!resend) throw new Error("Resend not configured")
        await resend.emails.send({
          from: "DCSA Client Portal <noreply@dcsam.co.za>",
          to: "info@dcsam.co.za",
          subject: `New Document Upload - ${userName} (${documentType})`,
          html: `
            <h2>New Document Uploaded</h2>
            <h3>Client Information:</h3>
            <ul>
              <li><strong>Client:</strong> ${userName}</li>
              <li><strong>Email:</strong> ${user.email}</li>
            </ul>
            <h3>Document Details:</h3>
            <ul>
              <li><strong>Document Type:</strong> ${documentType}</li>
              <li><strong>File Name:</strong> ${file.name}</li>
              <li><strong>File Size:</strong> ${(file.size / 1024).toFixed(1)} KB</li>
              <li><strong>Uploaded At:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}</li>
            </ul>
            <p>Please review this document in the client portal admin panel.</p>
            <p><a href="${fileUrl}">Download Document</a></p>
          `,
        })
      }
    } catch (emailError) {
      console.error("Email notification error:", emailError)
      // Don't fail upload if email fails
    }

    return NextResponse.json({
      document,
      message: "Document uploaded successfully",
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json(
      { error: "Upload failed. Please try again.", code: "UNKNOWN_ERROR" },
      { status: 500 }
    )
  }
}
