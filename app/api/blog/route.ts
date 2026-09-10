import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"
import { createClient } from "@/lib/supabase/server"
import { createClient as createAdminClient } from "@supabase/supabase-js"
import { postToGoogleBusiness } from "@/app/api/google-business/route"

// Simple auth check
function isAuthenticated(request: NextRequest): boolean {
  const authHeader = request.headers.get("authorization")
  if (!authHeader) return false

  const encoded = authHeader.replace("Basic ", "")
  const decoded = Buffer.from(encoded, "base64").toString()
  const [username, password] = decoded.split(":")

  return username === "dcsam.admin" && password === "sam@august"
}

// Get admin client for write operations
function getAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceRoleKey) {
    throw new Error("Supabase credentials not configured")
  }

  return createAdminClient(supabaseUrl, serviceRoleKey)
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
    const message = `${title}\n\n${excerpt}\n\nRead more: ${blogUrl}\n\n#DCSA (Debt Clear SA (Pty) Ltd) #DebtCounselling #DebtReview #FinancialFreedom #CreditRepair #DebtHelp`

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
    const supabase = await createClient()
    const now = new Date().toISOString()

    // Fetch published posts (includes scheduled posts that are now past their publish time)
    const { data: posts, error } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("status", "published")
      .or(`scheduled_for.is.null,scheduled_for.lte.${now}`)
      .order("published_at", { ascending: false })

    if (error) {
      console.error("[v0] Blog GET error:", error)
      return NextResponse.json({ posts: [] })
    }

    return NextResponse.json({ posts: posts || [] })
  } catch (error) {
    console.error("[v0] Blog GET error:", error)
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
    const supabaseAdmin = getAdminClient()
    const body = await request.json()
    const { title, content, excerpt, category, featuredImage, scheduledFor } = body

    if (!title || !content) {
      return NextResponse.json(
        { error: "Title and content are required", ok: false, code: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    // Generate slug
    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")

    // Extract plain text for excerpt
    const plainTextContent = content
      .replace(/<[^>]*>/g, " ")
      .replace(/\s+/g, " ")
      .trim()

    const now = new Date().toISOString()
    const isPublishNow = !scheduledFor || new Date(scheduledFor) <= new Date()

    // Insert into blog_posts table
    const { data: post, error: dbError } = await supabaseAdmin
      .from("blog_posts")
      .insert({
        slug,
        title,
        content,
        excerpt: excerpt || `${plainTextContent.substring(0, 200)}...`,
        category: category || "General",
        author: "DCSA (Debt Clear SA (Pty) Ltd) Team",
        featured_image: featuredImage || null,
        status: "published",
        scheduled_for: scheduledFor || null,
        published_at: isPublishNow ? now : null,
        created_by: "dcsam.admin",
      })
      .select()
      .single()

    if (dbError) {
      console.error("[v0] Blog POST DB error:", dbError)
      return NextResponse.json(
        { error: "Failed to create blog post", ok: false, code: "DB_ERROR" },
        { status: 500 }
      )
    }

    let message = "Blog post created successfully."
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcsam.co.za"
    const blogUrl = `${baseUrl}/blog/${slug}`

    // Post to Facebook and Google Business if publishing now
    if (isPublishNow) {
      const fbResult = await postToFacebook(
        title,
        post.excerpt,
        blogUrl,
        featuredImage
      )

      if (fbResult.success) {
        message += " Posted to Facebook."
      } else {
        message += ` Facebook posting failed: ${fbResult.error}`
      }

      // Post to Google Business Profile
      try {
        const gbResult = await postToGoogleBusiness({
          title,
          summary: `${post.excerpt}\n\nRead more on our blog for helpful debt counselling tips and financial advice.`,
          url: blogUrl,
          imageUrl: featuredImage,
          callToAction: "LEARN_MORE",
        })

        if (gbResult.success) {
          message += " Posted to Google Business Profile."
        } else {
          message += ` Google Business posting skipped: ${gbResult.error}`
        }
      } catch {
        message += " (Google Business posting failed)"
      }

      // Submit to search engines
      try {
        const searchEngineResponse = await fetch(
          `${baseUrl}/api/submit-to-search-engines`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: blogUrl, type: "blog" }),
          }
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
      ok: true,
      post,
      message,
    })
  } catch (error) {
    console.error("[v0] Blog POST error:", error)
    return NextResponse.json(
      { error: "Failed to create blog post", ok: false, code: "SUBMISSION_ERROR" },
      { status: 500 }
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
    const supabaseAdmin = getAdminClient()
    const { searchParams } = new URL(request.url)
    const id = searchParams.get("id")
    const slug = searchParams.get("slug")

    if (!id && !slug) {
      return NextResponse.json(
        { error: "Post ID or slug is required", ok: false, code: "VALIDATION_ERROR" },
        { status: 400 }
      )
    }

    // Delete by ID or slug
    const query = supabaseAdmin.from("blog_posts").delete()
    
    if (id) {
      query.eq("id", id)
    } else if (slug) {
      query.eq("slug", slug)
    }

    const { error } = await query

    if (error) {
      console.error("[v0] Blog DELETE error:", error)
      return NextResponse.json(
        { error: "Failed to delete blog post", ok: false, code: "DB_ERROR" },
        { status: 500 }
      )
    }

    return NextResponse.json({ 
      success: true, 
      ok: true,
      message: "Blog post deleted successfully" 
    })
  } catch (error) {
    console.error("[v0] Blog DELETE error:", error)
    return NextResponse.json(
      { error: "Failed to delete blog post", ok: false, code: "SUBMISSION_ERROR" },
      { status: 500 }
    )
  }
}
