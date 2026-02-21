import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"

// Simple auth check
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  if (!authHeader) return false

  const encoded = authHeader.replace("Basic ", "")
  const decoded = Buffer.from(encoded, "base64").toString()
  const [username, password] = decoded.split(":")

  return username === "dcsam.admin" && password === "sam@august"
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized", ok: false, code: "UNAUTHORIZED" },
      { status: 401 }
    )
  }

  try {
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (!supabaseUrl || !serviceRoleKey) {
      return NextResponse.json(
        { error: "Supabase credentials not configured", ok: false, code: "CONFIG_ERROR" },
        { status: 500 }
      )
    }

    const supabaseAdmin = createAdminClient(supabaseUrl, serviceRoleKey)

    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json(
        { error: "No file provided", ok: false, code: "NO_FILE" },
        { status: 400 }
      )
    }

    // Validate file type
    const validTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json(
        { error: "Invalid file type. Please upload an image (JPEG, PNG, GIF, or WebP).", ok: false, code: "INVALID_TYPE" },
        { status: 400 }
      )
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: "File too large. Maximum size is 5MB.", ok: false, code: "FILE_TOO_LARGE" },
        { status: 413 }
      )
    }

    // Generate filename
    const timestamp = Date.now()
    const sanitizedFilename = file.name.replace(/[^a-zA-Z0-9.-]/g, "_")
    const storagePath = `blog-images/${timestamp}-${sanitizedFilename}`

    // Convert to buffer
    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    // Upload to Supabase Storage bucket "blog-assets"
    const { error: uploadError } = await supabaseAdmin.storage
      .from("blog-assets")
      .upload(storagePath, buffer, {
        contentType: file.type,
        upsert: false,
      })

    if (uploadError) {
      console.error("[v0] Blog image upload error:", uploadError)
      return NextResponse.json(
        { error: "Failed to upload image", ok: false, code: "UPLOAD_FAILED" },
        { status: 500 }
      )
    }

    // Get public URL
    const { data: publicUrlData } = supabaseAdmin.storage
      .from("blog-assets")
      .getPublicUrl(storagePath)

    return NextResponse.json({
      success: true,
      ok: true,
      url: publicUrlData.publicUrl,
      filename: storagePath,
    })
  } catch (error) {
    console.error("[v0] Blog image upload error:", error)
    return NextResponse.json(
      { error: "Failed to upload image", ok: false, code: "UPLOAD_ERROR" },
      { status: 500 }
    )
  }
}
