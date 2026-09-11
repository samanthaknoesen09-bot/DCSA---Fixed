import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogPostClient from "./blog-post-client"

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

async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcsam.co.za"
    const response = await fetch(`${baseUrl}/api/blog`, { next: { revalidate: 60 } })
    if (!response.ok) return null
    const { posts } = await response.json()
    return posts.find((p: BlogPost) => p.slug === slug) || null
  } catch {
    return null
  }
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    return {
      title: "Post Not Found | DCSA (Debt Clear SA (Pty) Ltd) Blog",
      description: "The blog post you're looking for could not be found.",
    }
  }

  const baseUrl = "https://www.dcsam.co.za"
  const postUrl = `${baseUrl}/blog/${post.slug}`
  
  return {
    title: `${post.title} | DCSA (Debt Clear SA (Pty) Ltd) Blog - Debt Counselling South Africa`,
    description: post.excerpt,
    keywords: [
      post.category,
      "debt counselling",
      "debt review",
      "credit repair",
      "financial advice",
      "DCSA (Debt Clear SA (Pty) Ltd)",
      "South Africa",
    ],
    authors: [{ name: post.author }],
    alternates: {
      canonical: postUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      type: "article",
      publishedTime: post.createdAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: post.featuredImage ? [post.featuredImage] : [],
      siteName: "DCSA (Debt Clear SA (Pty) Ltd) - Debt Clear South Africa",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.featuredImage ? [post.featuredImage] : [],
    },
  }
}

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.dcsam.co.za"
    const response = await fetch(`${baseUrl}/api/blog`)
    if (!response.ok) return []
    const { posts } = await response.json()
    return posts
      .filter((p: BlogPost) => p.slug && typeof p.slug === "string")
      .map((p: BlogPost) => ({ slug: p.slug }))
  } catch {
    return []
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = await getBlogPost(params.slug)
  
  if (!post) {
    notFound()
  }
  
  const baseUrl = "https://www.dcsam.co.za"
  const postUrl = `${baseUrl}/blog/${post.slug}`
  
  // JSON-LD Structured Data for BlogPosting
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.featuredImage || `${baseUrl}/images/dcsa-og-logo.png`,
    datePublished: post.createdAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "DCSA (Debt Clear SA (Pty) Ltd) Debt Counsellors",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/images/dcsa-logo.jpg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    keywords: [
      post.category,
      "debt counselling",
      "debt review",
      "credit repair",
      "financial advice",
      "South Africa",
    ],
    articleSection: post.category,
    wordCount: post.content?.split(" ").length || 0,
  }
  
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dcsam.co.za" },
              { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.dcsam.co.za/blog" },
              { "@type": "ListItem", position: 3, name: post.title, item: postUrl },
            ],
          }),
        }}
      />
      <BlogPostClient post={post} />
    </>
  )
}
