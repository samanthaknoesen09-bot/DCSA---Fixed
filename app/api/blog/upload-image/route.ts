import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

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

  // Blog image upload disabled - Vercel Blob removed due to free tier limits
  // Migrate to Supabase Storage if blog functionality is needed
  return NextResponse.json(
    { 
      error: "Blog image upload is currently disabled. Please use Supabase Storage for blog images.", 
      ok: false, 
      code: "FEATURE_DISABLED" 
    },
    { status: 503 }
  )
}
