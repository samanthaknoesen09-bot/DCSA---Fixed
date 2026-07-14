import { NextResponse } from "next/server"

interface BlogPost {
  id: string
  slug: string
  title: string
  content: string
  excerpt: string
  category: string
  author: string
  createdAt: string
  updatedAt: string
  featuredImage?: string
}

/**
 * JSON Feed - Modern alternative to RSS
 * Better for AI crawlers and modern feed readers
 * Spec: https://www.jsonfeed.org/
 */
export async function GET() {
  const baseUrl = "https://www.dcsam.co.za"
  
  // Fetch blog posts
  let posts: BlogPost[] = []
  try {
    const response = await fetch(`${baseUrl}/api/blog`, { 
      next: { revalidate: 3600 } 
    })
    if (response.ok) {
      const data = await response.json()
      posts = data.posts || []
    }
  } catch {
    // Continue with empty posts
  }

  const feedItems = posts.slice(0, 20).map((post) => ({
    id: `${baseUrl}/blog/${post.slug}`,
    url: `${baseUrl}/blog/${post.slug}`,
    title: post.title,
    content_text: post.content.replace(/<[^>]*>/g, ""),
    content_html: post.content,
    summary: post.excerpt,
    date_published: post.createdAt,
    date_modified: post.updatedAt,
    authors: [
      {
        name: post.author,
        url: baseUrl,
      },
    ],
    tags: [post.category, "debt counselling", "financial advice", "South Africa"],
    image: post.featuredImage || `${baseUrl}/images/dcsa-og-logo.png`,
    language: "en-ZA",
  }))

  const jsonFeed = {
    version: "https://jsonfeed.org/version/1.1",
    title: "DC Sam Blog - Financial Education & Debt Counselling",
    home_page_url: `${baseUrl}/blog`,
    feed_url: `${baseUrl}/feed.json`,
    description: "Real talk about money, debt management, and financial freedom from DC Sam - South Africa's caring debt counsellors.",
    icon: `${baseUrl}/images/dcsa-logo.jpg`,
    favicon: `${baseUrl}/favicon.png`,
    authors: [
      {
        name: "DC Sam Team",
        url: baseUrl,
        avatar: `${baseUrl}/images/samantha-knoesen.jpeg`,
      },
      {
        name: "Samantha Knoesen",
        url: baseUrl,
        avatar: `${baseUrl}/images/samantha-knoesen.jpeg`,
      },
    ],
    language: "en-ZA",
    items: feedItems,
  }

  return NextResponse.json(jsonFeed, {
    headers: {
      "Content-Type": "application/feed+json; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  })
}
