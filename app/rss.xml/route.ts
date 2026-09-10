import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const baseUrl = "https://www.dcsam.co.za"

  try {
    // Fetch blog posts from the API route
    const response = await fetch(`${baseUrl}/api/blog`, { 
      next: { revalidate: 3600 },
      headers: { "Content-Type": "application/json" }
    })
    
    if (!response.ok) {
      throw new Error("Failed to fetch blog posts")
    }

    const { posts = [] } = await response.json()

    // Filter published posts
    const publishedPosts = (posts || []).filter((post: any) => {
      if (post.scheduledFor && new Date(post.scheduledFor) > new Date()) return false
      return true
    })

    // Generate RSS feed
    const rssItems = publishedPosts
      .map((post: any) => {
        const slug = post.slug
        const title = post.title || "Untitled Post"
        const description = post.excerpt || post.content?.substring(0, 200) || ""
        const pubDate = new Date(post.createdAt || post.publishedAt || new Date()).toUTCString()
        const link = `${baseUrl}/blog/${slug}`

        return `
    <item>
      <title>${escapeXml(title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <description>${escapeXml(description)}</description>
      <pubDate>${pubDate}</pubDate>
      <category>Debt Counselling</category>
      <category>Financial Help</category>
    </item>`
      })
      .join("")

    const rssContent = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>DCSA (Debt Clear SA (Pty) Ltd) Blog - Debt Counselling & Financial Help</title>
    <link>${baseUrl}</link>
    <description>Read our latest articles on debt counselling, credit repair, and financial help for South Africans.</description>
    <language>en-za</language>
    <copyright>Copyright 2024 DCSA (Debt Clear SA (Pty) Ltd) Debt Counsellors. All rights reserved.</copyright>
    <managingEditor>info@dcsam.co.za</managingEditor>
    <webMaster>info@dcsam.co.za</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <ttl>3600</ttl>
    ${rssItems}
  </channel>
</rss>`

    return new NextResponse(rssContent, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
        "Cache-Control": "public, s-maxage=3600, stale-while-revalidate",
      },
    })
  } catch (error) {
    console.error("RSS feed error:", error)
    
    // Return a minimal valid RSS feed on error
    const fallbackRss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>DCSA (Debt Clear SA (Pty) Ltd) Blog</title>
    <link>https://www.dcsam.co.za</link>
    <description>Debt Counselling & Financial Help</description>
    <language>en-za</language>
  </channel>
</rss>`

    return new NextResponse(fallbackRss, {
      headers: {
        "Content-Type": "application/rss+xml; charset=utf-8",
      },
    })
  }
}

function escapeXml(str: string): string {
  if (!str) return ""
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
