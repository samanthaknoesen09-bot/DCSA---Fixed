import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import { sendDualEmail } from "@/lib/emailDispatcher"

const MAX_FILE_SIZE = 50 * 1024 * 1024 // 50MB

export async function POST(request: NextRequest) {
  const submissionId = crypto.randomUUID()
  const submittedTime = new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })
  let documentSaved = false

  try {
    const supabase = await createClient()

    // Verify user is authenticated
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      return NextResponse.json({ 
        ok: false, 
        code: "UNAUTHORIZED",
        submissionId,
        message: "Authentication required. Please log in.",
      }, { status: 401 })
    }

    const formData = await request.formData()
    const file = formData.get("file") as File
    const documentType = formData.get("documentType") as string

    if (!file) {
      return NextResponse.json({ 
        ok: false,
        code: "VALIDATION_ERROR", 
        submissionId,
        message: "No file provided",
      }, { status: 400 })
    }

    if (!documentType) {
      return NextResponse.json({ 
        ok: false,
        code: "VALIDATION_ERROR", 
        submissionId,
        message: "Document type is required",
      }, { status: 400 })
    }

    // Validate file size (max 50MB)
    if (file.size > MAX_FILE_SIZE) {
      return NextResponse.json(
        { 
          ok: false,
          code: "FILE_TOO_LARGE",
          submissionId,
          message: "File too large. Maximum allowed size is 50MB.",
          maxSize: MAX_FILE_SIZE,
          fileSize: file.size
        }, 
        { status: 413 }
      )
    }

    // Create admin client for Storage + DB operations (bypasses all policies)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      console.error("[v0] Missing Supabase credentials:", { 
        hasUrl: !!supabaseUrl, 
        hasKey: !!serviceRoleKey 
      })
      return NextResponse.json(
        {
          ok: false,
          code: "CONFIG_ERROR",
          submissionId,
          saved: false,
          message: "Server configuration error. Please contact support.",
        },
        { status: 500 }
      )
    }

    const supabaseAdmin = createAdminClient(supabaseUrl, serviceRoleKey)
    console.log("[v0] Admin client created for upload:", { userId: user.id, submissionId })

    // Generate path: userId/YYYY-MM/submissionId-safeFileName
    const now = new Date()
    const yearMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`
    const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const storagePath = `${user.id}/${yearMonth}/${submissionId}-${sanitizedFilename}`

    // Convert file to buffer for Supabase Storage
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to bucket "client-documents" using ADMIN client (bypasses storage policies)
    const { data: uploadData, error: uploadError } = await supabaseAdmin.storage
      .from("client-documents")
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      console.error("[v0] Storage upload error:", uploadError)
      // Check if error is related to file size
      if (uploadError.message?.includes("413") || uploadError.message?.includes("entity too large")) {
        return NextResponse.json(
          { 
            ok: false,
            code: "FILE_TOO_LARGE",
            submissionId,
            message: "File too large. Maximum allowed size is 50MB.",
          },
          { status: 413 }
        )
      }
      return NextResponse.json(
        { 
          ok: false,
          code: "UPLOAD_FAILED",
          submissionId,
          saved: false,
          message: "Failed to upload file to storage. Please try again.",
        },
        { status: 500 }
      )
    }

    // Generate signed URL for 7 days (for email link)
    const { data: signedUrlData, error: signedUrlError } = await supabaseAdmin.storage
      .from("client-documents")
      .createSignedUrl(storagePath, 60 * 60 * 24 * 7) // 7 days in seconds

    const fileUrl = signedUrlData?.signedUrl || storagePath

    if (signedUrlError) {
      console.warn("[v0] Failed to generate signed URL, using path:", signedUrlError.message)
    }

    // Save document record to database using admin client (already created above)
    const { data: document, error: dbError } = await supabaseAdmin
      .from("documents")
      .insert({
        client_id: user.id,
        document_type: documentType,
        file_name: file.name,
        file_url: storagePath,
        file_size: file.size,
        mime_type: file.type,
        submission_id: submissionId,
        status: "uploaded",
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Database insert error:", dbError)
      return NextResponse.json(
        { 
          ok: false,
          code: "SAVE_FAILED",
          submissionId,
          saved: false,
          message: "Failed to save document record to database.",
        },
        { status: 500 }
      )
    }

    documentSaved = true

    // Get user details for email
    const userName = user.user_metadata?.first_name
      ? `${user.user_metadata.first_name} ${user.user_metadata.last_name || ""}`
      : user.email

    // Send email notification using strict dual delivery
    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Document Uploaded</h2>
        
        <h3 style="color: #4DB6AC;">Client Information:</h3>
        <ul>
          <li><strong>Client:</strong> ${userName}</li>
          <li><strong>Email:</strong> ${user.email}</li>
          <li><strong>Client ID:</strong> ${user.id}</li>
        </ul>
        
        <h3 style="color: #4DB6AC;">Document Details:</h3>
        <ul>
          <li><strong>Document Type:</strong> ${documentType}</li>
          <li><strong>File Name:</strong> ${file.name}</li>
          <li><strong>File Size:</strong> ${(file.size / 1024 / 1024).toFixed(2)} MB</li>
          <li><strong>Storage Path:</strong> ${storagePath}</li>
          <li><strong>Uploaded:</strong> ${submittedTime}</li>
        </ul>
        
        <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
          <p style="margin: 0; font-size: 12px; color: #666;">
            <strong>Reference ID:</strong> ${submissionId}
          </p>
        </div>
        
        <p>You can download this document using the secure link below (valid for 7 days):</p>
        <p><a href="${fileUrl}" style="display: inline-block; padding: 12px 24px; background: #4DB6AC; color: white; text-decoration: none; border-radius: 4px; font-weight: bold;">Download Document</a></p>
      </div>
    `

    try {
      await sendDualEmail({
        subject: `New Document Upload - ${userName} (${documentType})`,
        html: emailTemplate,
        submissionId,
        type: "document",
      })
    } catch (emailError) {
      console.error("[v0] Document upload email failed after save:", {
        submissionId,
        documentId: document.id,
        error: emailError instanceof Error ? emailError.message : String(emailError),
      })
      // Document is saved but email failed
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          submissionId,
          saved: true,
          documentId: document.id,
          message: "Document uploaded but email notification failed.",
        },
        { status: 500 }
      )
    }

    return NextResponse.json({
      ok: true,
      saved: true,
      submissionId,
      document,
      message: "Document uploaded successfully",
    })
  } catch (error) {
    console.error("[v0] Document upload error:", {
      submissionId,
      documentSaved,
      error: error instanceof Error ? error.message : String(error),
    })
    return NextResponse.json(
      { 
        ok: false,
        code: "UPLOAD_ERROR",
        submissionId,
        saved: documentSaved,
        message: "Upload failed. Please try again.",
      },
      { status: 500 }
    )
  }
}
