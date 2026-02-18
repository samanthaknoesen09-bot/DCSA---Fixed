import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

// Dynamic import to avoid build-time crash when BLOB_READ_WRITE_TOKEN is missing
async function getBlobModule() {
  if (!process.env.BLOB_READ_WRITE_TOKEN) return null
  return await import("@vercel/blob")
}

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
  try {
    const blob = await getBlobModule()
    if (!blob) return NextResponse.json({ posts: [] })

    const { blobs } = await blob.list({ prefix: "blogs/" })
    const now = new Date()

    const posts = await Promise.all(
      blobs
        .filter((b) => b.pathname.endsWith(".json"))
        .map(async (b) => {
          const response = await fetch(b.url)
          const post = await response.json()
          return { ...post, blobUrl: b.url, pathname: b.pathname }
        }),
    )

    const publishedPosts = posts.filter((post) => {
      if (!post.scheduledFor) return true
      return new Date(post.scheduledFor) <= now
    })

    publishedPosts.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )

    return NextResponse.json({ posts: publishedPosts })
  } catch {
    return NextResponse.json({ posts: [] })
  }
}

// POST - Create a new blog post
export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized", ok: false, code: "UNAUTHORIZED" },
      { status: 401 }
    )
  }

  try {
    const blobMod = await getBlobModule()
    if (!blobMod) {
      return NextResponse.json(
        { error: "Blog storage not configured. Set BLOB_READ_WRITE_TOKEN.", ok: false, code: "STORAGE_ERROR" },
        { status: 500 },
      )
    }

    const body = await request.json()
    const { title, content, excerpt, category, featuredImage, scheduledFor } =
      body

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 },
      )
    }

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    const plainTextContent = content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()

    const now = new Date().toISOString()

    const post = {
      id: `post-${Date.now()}`,
      slug,
      title,
      content,
      excerpt: excerpt || `${plainTextContent.substring(0, 200)}...`,
      category: category || "General",
      author: "DCSA Team",
      featuredImage: featuredImage || "",
      scheduledFor: scheduledFor || null,
      createdAt: now,
      updatedAt: now,
      publishedAt: !scheduledFor ? now : null,
    }

    const filename = `blogs/${slug}-${Date.now()}.json`
    const blobResult = await blobMod.put(filename, JSON.stringify(post), {
      access: "public",
      contentType: "application/json",
    })

    let message = "Blog post created successfully."
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcsam.co.za"
    const blogUrl = `${baseUrl}/blog/${slug}`

    if (!scheduledFor || new Date(scheduledFor) <= new Date()) {
      const fbResult = await postToFacebook(
        title,
        post.excerpt,
        blogUrl,
        featuredImage,
      )

      if (fbResult.success) {
        message += " Posted to Facebook."
      } else {
        message += ` Facebook posting failed: ${fbResult.error}`
      }

      try {
        const searchEngineResponse = await fetch(
          `${baseUrl}/api/submit-to-search-engines`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: blogUrl, type: "blog" }),
          },
        )

        if (searchEngineResponse.ok) {
          message += " Submitted to search engines for indexing."
        }
      } catch {
        message += " (Search engine submission failed)"
      }
    } else {
      message += ` Scheduled for ${new Date(scheduledFor).toLocaleString("en-ZA")}`
    }

    return NextResponse.json({
      success: true,
      post: { ...post, blobUrl: blobResult.url },
      message,
    })
  } catch (error) {
    console.error("Error creating blog post:", error)
    return NextResponse.json(
      { error: "Failed to create blog post" },
      { status: 500 },
    )
  }
}

// DELETE - Delete a blog post
export async function DELETE(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json(
      { error: "Unauthorized", ok: false, code: "UNAUTHORIZED" },
      { status: 401 }
    )
  }

  try {
    const blobMod = await getBlobModule()
    if (!blobMod) {
      return NextResponse.json(
        { error: "Blog storage not configured", ok: false, code: "STORAGE_ERROR" },
        { status: 500 },
      )
    }

    const { searchParams } = new URL(request.url)
    const url = searchParams.get("url")

    if (!url) {
      return NextResponse.json(
        { error: "URL is required" },
        { status: 400 },
      )
    }

    await blobMod.del(url)

    return NextResponse.json({ success: true, message: "Blog post deleted" })
  } catch (error) {
    console.error("Error deleting blog post:", error)
    return NextResponse.json(
      { error: "Failed to delete blog post" },
      { status: 500 },
    )
  }
}
