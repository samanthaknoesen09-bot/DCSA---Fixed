"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight, ExternalLink, Rss } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { colors } from "@/lib/colors"
import Image from "next/image"

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
  blobUrl?: string
  featuredImage?: string
}

const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-consumer-rights",
    title: "Understanding Your Consumer Rights in South Africa",
    content: "Understanding your rights as a consumer is the first step towards financial freedom. At DC Sam, we believe knowledge empowers you to make better financial decisions. The National Credit Act protects you from unfair lending practices and gives you the right to apply for debt review if you're struggling to pay your debts.",
    excerpt: "Understanding your rights as a consumer is the first step towards financial freedom...",
    category: "Consumer Rights",
    author: "DC Sam Team",
    createdAt: "2024-01-15T10:00:00Z",
    updatedAt: "2024-01-15T10:00:00Z",
  },
  {
    id: "2",
    slug: "struggling-with-debt",
    title: "Struggling with Debt? You Are Not Alone",
    content: "Struggling with debt? You're not alone. Our certified debt counsellors are here to help you navigate through tough financial times with compassion and expertise. We understand that life happens - unexpected expenses, job loss, or medical emergencies can put anyone in a difficult financial position. Contact us for a free consultation.",
    excerpt: "Our certified debt counsellors are here to help you navigate through tough financial times...",
    category: "Debt Review",
    author: "DC Sam Team",
    createdAt: "2024-01-10T14:30:00Z",
    updatedAt: "2024-01-10T14:30:00Z",
  },
  {
    id: "3",
    slug: "debt-review-benefits",
    title: "Did You Know? Debt Review Can Reduce Your Payments by Up to 45%",
    content: "Did you know that debt review can reduce your monthly payments by up to 45%? It's a legal process that protects you from creditors while you get back on your feet. During debt review, you make one affordable monthly payment, and we distribute it to your creditors on your behalf. Learn more about how DC Sam can help you regain financial freedom.",
    excerpt: "Debt review can reduce your monthly payments by up to 45% - a legal process that protects you...",
    category: "Debt Review",
    author: "DC Sam Team",
    createdAt: "2024-01-05T09:15:00Z",
    updatedAt: "2024-01-05T09:15:00Z",
  },
]

export default function BlogClientPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/blog")
      const data = await response.json()
      
      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts)
      } else {
        setPosts(fallbackPosts)
      }
    } catch (error) {
      console.error("Error fetching blog posts:", error)
      setPosts(fallbackPosts)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-ZA", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getReadTime = (content: string) => {
    const words = content.split(" ").length
    const readTime = Math.ceil(words / 200)
    return `${readTime} min read`
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <Header />

      <main className="pb-16 lg:pb-24">
        {/* Hero Section - Matching Homepage Style */}
        <section className="py-16 md:py-20 px-4" style={{ 
          background: `linear-gradient(135deg, ${colors.warmBeige} 0%, ${colors.softPeach}30 100%)`
        }}>
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Rss className="w-4 h-4" style={{ color: colors.maroon }} />
              <span className="text-sm font-semibold" style={{ color: colors.maroon }}>DC Sam Blog</span>
            </div>
            
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-balance" style={{ color: colors.charcoal }}>
              Real Talk About Money
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-pretty" style={{ color: colors.warmGrey }}>
              Hey friend! Welcome to our blog where we share honest financial advice without the boring jargon. Think of it as money conversations over coffee with your supportive debt counsellor friends.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                className="bg-[#1877F2] hover:bg-[#166FE5] text-white"
                onClick={() => window.open("https://www.facebook.com/DebtClearDCSA", "_blank")}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Follow Us on Facebook
              </Button>
              <Button
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open("/feed.xml", "_blank")}
              >
                <Rss className="w-4 h-4 mr-2" />
                Subscribe to RSS
              </Button>
            </div>

            {/* Author Card */}
            <div className="mt-10 inline-flex items-center gap-4 bg-white/80 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-sm">
              <div className="relative w-14 h-14 rounded-full overflow-hidden">
                <Image
                  src="/images/team/sam.jpg"
                  alt="Samantha Knoesen"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-left">
                <p className="font-semibold" style={{ color: colors.charcoal }}>Written by Sam &amp; the DC Sam Team</p>
                <p className="text-sm" style={{ color: colors.warmGrey }}>NCR Registered Debt Counsellors</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-12">

          <div className="space-y-8">
            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-muted-foreground">Loading latest posts...</p>
              </div>
            ) : (
              posts.map((post) => (
                <a key={post.id} href={`/blog/${post.slug}`} className="block group">
                  <Card 
                    className="border-2 hover:shadow-xl transition-all overflow-hidden cursor-pointer"
                    style={{ borderColor: colors.sandLight, backgroundColor: colors.white }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-4 text-sm mb-3" style={{ color: colors.warmGrey }}>
                            <Badge 
                              className="border-0"
                              style={{ backgroundColor: colors.softPeach, color: colors.charcoal }}
                            >
                              {post.category}
                            </Badge>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              <span>{formatDate(post.createdAt)}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              <span>{getReadTime(post.content)}</span>
                            </div>
                          </div>
                          <h2 
                            className="text-2xl font-bold group-hover:text-primary transition-colors mb-2"
                            style={{ color: colors.charcoal }}
                          >
                            {post.title}
                          </h2>
                          <p className="line-clamp-2" style={{ color: colors.warmGrey }}>
                            {post.excerpt}
                          </p>
                        </div>
                        <ArrowRight 
                          className="w-6 h-6 group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" 
                          style={{ color: colors.maroon }}
                        />
                      </div>
                    </CardContent>
                  </Card>
                </a>
              ))
            )}
          </div>

          <div className="mt-16 text-center">
            <Card 
              className="border-2 max-w-2xl mx-auto"
              style={{ borderColor: colors.maroon + "30", backgroundColor: colors.softPeach + "20" }}
            >
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>
                  Ready for That Conversation We Mentioned?
                </h3>
                <p className="mb-6" style={{ color: colors.warmGrey }}>
                  Reading is great (thanks for being here!), but sometimes you just need to talk to an actual human who gets it. Our female-led team is here - no judgment, just genuine support and real solutions tailored to YOUR life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    className="text-white"
                    style={{ backgroundColor: colors.maroon }}
                    onClick={() =>
                      (window.location.href =
                        "mailto:info@dcsam.co.za?subject=Free Consultation Request&body=Hi DC Sam team, I would like to schedule a free consultation to discuss my debt situation.")
                    }
                  >
                    Email for Free Consultation
                  </Button>
                  <Button
                    variant="outline"
                    className="bg-green-600 hover:bg-green-700 text-white border-0"
                    onClick={() =>
                      window.open("https://wa.me/27719006298?text=Hi, I need help with debt counselling", "_blank")
                    }
                  >
                    WhatsApp Us Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
