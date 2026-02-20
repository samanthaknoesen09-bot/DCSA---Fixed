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

// Post to Facebook Page
async function postToFacebook(
  title: string,
  excerpt: string,
  blogUrl: string,
  imageUrl?: string,
): Promise<{ success: boolean; postId?: string; error?: string }> {
  const pageId = process.env.FACEBOOK_PAGE_ID
  const accessToken = process.env.FACEBOOK_PAGE_ACCESS_TOKEN

  if (!pageId || !accessToken) {
    return { success: false, error: "Facebook credentials not configured" }
  }

  try {
    const message = `${title}\n\n${excerpt}\n\nRead more: ${blogUrl}\n\n#DCSA #DebtCounselling #DebtReview #FinancialFreedom #CreditRepair #DebtHelp`

    let endpoint = `https://graph.facebook.com/v18.0/${pageId}/feed`
    const params: Record<string, string> = {
      message,
      link: blogUrl,
      access_token: accessToken,
    }

    if (imageUrl) {
      endpoint = `https://graph.facebook.com/v18.0/${pageId}/photos`
      params.url = imageUrl
      params.caption = message
      delete params.link
      delete params.message
    }

    const response = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(params).toString(),
    })

    const data = await response.json()

    if (data.error) {
      return { success: false, error: data.error.message }
    }

    return { success: true, postId: data.id || data.post_id }
  } catch {
    return { success: false, error: "Failed to post to Facebook" }
  }
}

// GET - List all blog posts
export async function GET() {
  // Blog feature disabled - Vercel Blob removed due to free tier limits
  // Migrate to Supabase Storage if blog functionality is needed
  return NextResponse.json({ posts: [] })
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized", ok: false, code: "UNAUTHORIZED" },
      { status: 401 }
    )
  }

  // Blog feature disabled - Vercel Blob removed due to free tier limits
  // Migrate to Supabase Storage if blog functionality is needed
  return NextResponse.json(
    { 
      error: "Blog feature is currently disabled. Please use Supabase Storage for blog content.", 
      ok: false, 
      code: "FEATURE_DISABLED" 
    },
    { status: 503 }
  )
}

// DELETE - Delete a blog post
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized", ok: false, code: "UNAUTHORIZED" },
      { status: 401 }
    )
  }

  // Blog feature disabled - Vercel Blob removed due to free tier limits
  // Migrate to Supabase Storage if blog functionality is needed
  return NextResponse.json(
    { 
      error: "Blog feature is currently disabled. Please use Supabase Storage for blog content.", 
      ok: false, 
      code: "FEATURE_DISABLED" 
    },
    { status: 503 }
  )
}
