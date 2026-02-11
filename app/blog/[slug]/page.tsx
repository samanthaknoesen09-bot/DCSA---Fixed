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
      title: "Post Not Found | DCSA Blog",
      description: "The blog post you're looking for could not be found.",
    }
  }

  const baseUrl = "https://www.dcsam.co.za"
  const postUrl = `${baseUrl}/blog/${post.slug}`
  
  return {
    title: `${post.title} | DCSA Blog - Debt Counselling South Africa`,
    description: post.excerpt,
    keywords: [
      post.category,
      "debt counselling",
      "debt review",
      "credit repair",
      "financial advice",
      "DCSA",
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
      siteName: "DCSA - Debt Clear South Africa",
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
  
  return <BlogPostClient post={post} />
}
