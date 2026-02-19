"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReassuranceBanner } from "@/components/reassurance-banner"
import { BookingCalendar } from "@/components/booking-calendar"

import { SocialMediaFeed } from "@/components/social-media-feed"
import { LiveSuccessCounter } from "@/components/live-success-counter"
import { VideoTestimonials } from "@/components/video-testimonials"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { ExitIntentPopup } from "@/components/exit-intent-popup"
import { GetInTouchForm } from "@/components/get-in-touch-form"
import { HowItWorks } from "@/components/how-it-works"
import { MeetTheTeam } from "@/components/meet-the-team"
import { VideoIntroduction } from "@/components/video-introduction"
import { SuccessStories } from "@/components/success-stories"
import { SavingsCalculator } from "@/components/savings-calculator"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { CalculatorsShowcase } from "@/components/calculators-showcase"
import { POPIComplianceBanner } from "@/components/popi-compliance-banner"
import { PodcastSection } from "@/components/podcast-section"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { WhatsAppWidget } from "@/components/whatsapp-widget" // Import WhatsAppWidget here
import { 
  CheckCircle, 
  TrendingDown, 
  Shield, 
  Users, 
  Calculator,
  Calendar,
  ArrowRight,
  Star,
  Award,
  Phone,
  Mail,
  MessageCircle,
  FileCheck,
  Heart
} from "lucide-react"

export function HomeClient() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [selectedService, setSelectedService] = useState("")

  const openBooking = (service: string) => {
    setSelectedService(service)
    setIsBookingOpen(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero + Trust Combined Section */}
        <section className="relative py-20 px-4 overflow-hidden bg-gradient-to-br from-[#FFE5D9]/30 via-[#FFD93D]/10 to-[#4DB6AC]/5">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-[#FFD93D]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#4DB6AC]/10 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto max-w-6xl relative z-10">
            {/* Main Hero */}
            <div className="text-center space-y-8 mb-16">
              <Badge className="mx-auto bg-gradient-to-r from-[#FFD93D] to-[#FFD93D]/80 text-[#0D3B66] px-6 py-2.5 text-sm font-bold hover:shadow-lg transition-all border border-[#FFD93D]/30">
                NCR Registered • NCRDC3995
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance text-[#0D3B66]">
                Debt Doesn{"'"}t Define You. Let{"'"}s Fix This Together.
              </h1>
              
              <p className="text-lg md:text-xl text-[#0D3B66]/70 max-w-3xl mx-auto text-pretty leading-relaxed">
                You{"'"}re not broken. You{"'"}re not bad with money. You just need someone in your corner. <strong className="text-[#0D3B66]">Your turn.</strong>
              </p>
              
              <div className="flex flex-col items-center gap-6 pt-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white text-lg px-10 h-16 rounded-2xl shadow-2xl font-bold transition-all hover:scale-105 group" asChild>
                    <Link href="/calculator" className="flex items-center gap-3">
                      <Calculator className="h-6 w-6 group-hover:scale-110 transition-transform" />
                      Free Calculator - See Where You Stand
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="text-foreground border-3 border-foreground text-lg px-12 h-16 rounded-2xl shadow-xl bg-white/80 backdrop-blur-sm hover:bg-foreground hover:text-white transition-all hover:scale-105" 
                    onClick={() => openBooking("Request Callback")}
                  >
                    Call Me Back
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  FREE calculator · No sign-up needed · Instant results · 100% private
                </p>
              </div>
            </div>

            {/* Trust Benefits - Part of Hero Now */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 pt-8 border-t border-[#4DB6AC]/20">
              <div className="text-center space-y-2 py-4">
                <div className="flex flex-col items-center">
                  <svg className="h-8 w-8 text-[#4DB6AC] mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm md:text-base font-semibold text-[#0D3B66]">NCR Regulated</div>
                </div>
                <div className="text-xs md:text-sm text-[#0D3B66]/70 font-medium">
                  NCRDC3995
                </div>
              </div>
              
              <div className="text-center space-y-2 py-4">
                <div className="flex flex-col items-center">
                  <svg className="h-8 w-8 text-[#4DB6AC] mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                  </svg>
                  <div className="text-sm md:text-base font-semibold text-[#0D3B66]">Personalized</div>
                </div>
                <div className="text-xs md:text-sm text-[#0D3B66]/70 font-medium">
                  Debt Solutions
                </div>
              </div>
              
              <div className="text-center space-y-2 py-4">
                <div className="flex flex-col items-center">
                  <svg className="h-8 w-8 text-[#4DB6AC] mb-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  <div className="text-sm md:text-base font-semibold text-[#0D3B66]">No Judgement</div>
                </div>
                <div className="text-xs md:text-sm text-[#0D3B66]/70 font-medium">
                  Just Support
                </div>
              </div>

              <div className="text-center space-y-2 py-4">
                <div className="flex flex-col items-center">
                  <div className="text-3xl md:text-2xl font-bold text-[#4DB6AC] mb-1">✓</div>
                  <div className="text-sm md:text-base font-semibold text-[#0D3B66]">Protection</div>
                </div>
                <div className="text-xs md:text-sm text-[#0D3B66]/70 font-medium">
                  One Plan, Less Stress
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Live Success Counter - Moved Up Near Top */}
        <LiveSuccessCounter />

        {/* Debt Review Comparison - Moved Up */}
        <DebtReviewComparison />

        {/* Calculators Showcase - High Priority */}
        <CalculatorsShowcase />

        {/* Potential Savings Calculator - Moved Up */}
        <SavingsCalculator />

        {/* Primary Service - Debt Review */}
        <section id="services" className="py-24 px-4 scroll-mt-20">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 border-[#4DB6AC] hover:shadow-2xl transition-shadow">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-16 w-16 rounded-xl bg-[#4DB6AC]/10 flex items-center justify-center">
                    <TrendingDown className="h-8 w-8 text-[#4DB6AC]" />
                  </div>
                  <div>
                    <Badge className="mb-2 bg-[#4DB6AC] text-white">Our Primary Service</Badge>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66]">
                      Debt Review — One Payment, One Plan, One Less Thing to Worry About
                    </h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-lg text-[#0D3B66]/80 leading-relaxed">
                  <p>
                    Picture this: one monthly payment instead of ten. Creditors legally off your back. Your car and home safe. That{"'"}s Debt Review — it{"'"}s not bankruptcy, it{"'"}s a proper plan backed by the National Credit Act. Think of it as a financial reset button (we all need one sometimes).
                  </p>
                  <p>
                    You keep your assets, your dignity, and you gain something priceless — breathing room. We{"'"}ll handle the creditors, the paperwork, and the legal stuff. All you need to do is pick up the phone.
                  </p>
                  <p className="font-medium text-foreground">
                    Fun fact: the hardest part is the first call. After that, most clients say {'"'}why didn{"'"}t I do this sooner?{'"'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button 
                    size="lg"
                    className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-semibold"
                    asChild
                  >
                    <Link href="/client-portal/auth/sign-up">
                      Get Started
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5 font-semibold bg-transparent"
                    onClick={() => openBooking("Request Callback")}
                  >
                    Request Callback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Secondary Service - Credit Repair */}
        <section className="py-24 px-4 bg-muted/30">
          <div className="container mx-auto max-w-5xl">
            <Card className="border-2 hover:shadow-xl transition-shadow">
              <CardContent className="p-8 md:p-12 space-y-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="h-7 w-7 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold">Credit Repair — Because Your Score Doesn{"'"}t Tell Your Whole Story</h2>
                  </div>
                </div>
                
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    That credit score? It{"'"}s a number, not a verdict. And you{"'"}d be surprised how often there are errors dragging it down that aren{"'"}t even your fault. We{"'"}ll go through your report together, challenge the dodgy stuff, and explain everything in plain English — no finance degree required.
                  </p>
                  <p>
                    No lectures, no {'"'}you should have{'"'} — just practical help and a plan. Watching someone realise they have way more power over their finances than they thought? That{"'"}s the best part of our job.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-6">
                  <Button 
                    size="lg"
                    className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white font-semibold"
                    asChild
                  >
                    <Link href="/client-portal/auth/sign-up">
                      Get Started
                    </Link>
                  </Button>
                  
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5 font-semibold bg-transparent"
                    onClick={() => openBooking("Request Callback")}
                  >
                    Request Callback
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Guides & Helpful Tips */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Helpful Reads (No Jargon, We Promise)</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Money stuff explained like a friend would — over coffee, not in a courtroom.
              </p>
              <p className="text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-4 mt-4 max-w-2xl mx-auto text-left">
                These guides offer general info to help you understand your options — not personalised financial advice. For tailored help, reach out to us directly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Debt Review 101 — The Basics</h3>
                  <p className="text-muted-foreground">
                    What it is, who it helps, and why it{"'"}s not as scary as it sounds. Clearly explained, no fine print drama.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/blog">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Your Credit Score, Decoded</h3>
                  <p className="text-muted-foreground">
                    What that number actually means, why it matters, and how to nudge it in the right direction — even when it feels hopeless.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/blog">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Budgeting Without the Boring</h3>
                  <p className="text-muted-foreground">
                    Real-life money tips for real-life people. Small tweaks, big relief — no spreadsheet obsession required.
                  </p>
                  <Button variant="link" className="p-0 h-auto" asChild>
                    <Link href="/blog">
                      Read Guide
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <VideoTestimonials />

        {/* Success Stories */}
        <SuccessStories />

        {/* Meet the Team */}
        <MeetTheTeam />

        {/* Testimonials */}
        <section className="py-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-balance">Don{"'"}t Just Take Our Word For It</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
                Real Google reviews from real people who were exactly where you are right now.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0 Rating</span>
                <span>•</span>
                <span>Verified Google Reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Image src="/images/google-icon.svg" alt="Google" width={20} height={20} className="opacity-50" />
                  </div>
                  <p className="text-muted-foreground">
                    "Absolutely outstanding service! The team was not only highly professional but also incredibly kind and understanding throughout the entire process. They made a difficult situation feel manageable and treated me with genuine care and respect. I couldn't recommend them enough for anyone seeking compassionate and expert debt counselling."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Damian Ellington</div>
                    <div className="text-xs text-muted-foreground">13 weeks ago • Google Review</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Image src="/images/google-icon.svg" alt="Google" width={20} height={20} className="opacity-50" />
                  </div>
                  <p className="text-muted-foreground">
                    "I had an amazing experience working with DCSA. They were professional, understanding, and took the time to explain every step of the process. They helped me create a realistic repayment plan that truly fits my budget. Thanks to their guidance, I feel more confident about managing my finances and staying debt-free. I highly recommend them to anyone struggling with debt and they really care about their clients."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Lizelle Jonker</div>
                    <div className="text-xs text-muted-foreground">13 weeks ago • Google Review</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Image src="/images/google-icon.svg" alt="Google" width={20} height={20} className="opacity-50" />
                  </div>
                  <p className="text-muted-foreground">
                    "Samantha Knoesen helped me so much in getting my financial life back, always ready to answer, and because I trusted her so much I got her 2 referrals and they are as happy as I am. Great work Samantha."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Juanita Scott</div>
                    <div className="text-xs text-muted-foreground">13 weeks ago • Google Review</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Image src="/images/google-icon.svg" alt="Google" width={20} height={20} className="opacity-50" />
                  </div>
                  <p className="text-muted-foreground">
                    "Thanks DCSA for helping me clear my name, now I have a credit card because of you."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Asanda Jamani</div>
                    <div className="text-xs text-muted-foreground">13 weeks ago • Google Review</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 bg-[#4DB6AC]/5">
                <CardContent className="p-6 flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#4DB6AC]/20 flex items-center justify-center">
                    <Star className="w-8 h-8 text-[#4DB6AC]" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-[#0D3B66] mb-2">Leave Us a Review</div>
                    <p className="text-sm text-muted-foreground mb-4">
                      Share your experience with DCSA
                    </p>
                    <Button 
                      variant="outline" 
                      className="bg-white"
                      onClick={() => window.open('https://search.google.com/local/writereview?placeid=ChIJYWZqZm-i1R4RdkB4qJ3mZ0M', '_blank')}
                    >
                      Write a Google Review
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Podcast Section */}
        <PodcastSection />

        {/* Affiliate Insurance Offers */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#FFE5D9]/10 to-[#4DB6AC]/5">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-3">Partner Offers</h2>
              <p className="text-lg text-[#0D3B66]/70">
                Trusted insurance partners helping you save on essential coverage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 1st for Women Insurance */}
              <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0D3B66]">Car & Home Insurance Savings</h3>
                      <p className="text-sm text-primary font-semibold mt-1">1st for Women</p>
                    </div>
                  </div>
                  
                  <p className="text-[#0D3B66]/80 mb-6">
                    Combine your car and home insurance to save 10% on your premiums. Get a tailored quote from 1st for Women today.
                  </p>
                  
                  <Button 
                    asChild
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                  >
                    <a
                      href="http://tracking.affcoza.com/aff_c?offer_id=2311&aff_id=26397"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                    >
                      Get Your 1st for Women Quote
                    </a>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Partner offer • Opens in new tab
                  </p>
                </CardContent>
              </Card>

              {/* Auto & General Insurance */}
              <Card className="border-2 border-[#4DB6AC]/30 hover:border-[#4DB6AC] transition-all hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#4DB6AC]/10 flex items-center justify-center flex-shrink-0">
                      <Shield className="h-6 w-6 text-[#4DB6AC]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-[#0D3B66]">Fast Claim Payouts & Coverage</h3>
                      <p className="text-sm text-[#4DB6AC] font-semibold mt-1">Auto & General</p>
                    </div>
                  </div>
                  
                  <p className="text-[#0D3B66]/80 mb-6">
                    Count on Auto & General for swift 100% claim payouts and comprehensive insurance coverage tailored to your needs.
                  </p>
                  
                  <Button 
                    asChild
                    className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white font-semibold"
                  >
                    <a
                      href="http://tracking.affcoza.com/aff_c?offer_id=1539&aff_id=26397"
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                    >
                      Get Your Auto & General Quote
                    </a>
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center mt-3">
                    Partner offer • Opens in new tab
                  </p>
                </CardContent>
              </Card>
            </div>

            <p className="text-center text-xs text-muted-foreground mt-6 italic">
              These are affiliate partnership offers. Clicking these links helps support DCSA's mission to help South Africans find financial relief.
            </p>
          </div>
        </section>

        {/* Refer a Friend - Responsive Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#FFD93D]/20 via-background to-[#4DB6AC]/10">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-[#FFD93D]/50 hover:border-[#FFD93D] transition-all">
              <CardContent className="p-6 md:p-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FFD93D]/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-[#FFD93D]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-[#0D3B66] mb-2">
                      Know Someone Who Needs Help?
                    </h3>
                    <p className="text-[#0D3B66]/70">
                      Refer a friend and earn <strong>R350</strong> when we successfully help them with debt counselling. Paid directly to your bank account — no limits on referrals.
                    </p>
                  </div>
                </div>

                <div className="bg-white/50 rounded-lg p-4 border border-[#FFD93D]/20">
                  <p className="text-sm text-[#0D3B66]/70">
                    Fill in a quick form, share your friend's info, and we{"'"}ll handle the rest. When they sign up for our services, you get paid. It{"'"}s that simple.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    size="lg"
                    className="bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66] font-semibold"
                    asChild
                  >
                    <Link href="/refer-a-friend" className="flex items-center gap-2">
                      <Heart className="w-5 h-5" />
                      Refer a Friend
                    </Link>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-[#FFD93D] text-[#0D3B66] hover:bg-[#FFD93D]/10"
                  >
                    <a href={`https://wa.me/27661937596?text=${encodeURIComponent("Hi DCSA! I'd like to learn more about your referral program. Can you share the details?")}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <MessageCircle className="w-5 h-5" />
                      Ask via WhatsApp
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Get in Touch Form */}
        <section className="py-16 px-4 bg-[#FFE5D9]/20">
          <div className="container mx-auto max-w-2xl">
            <GetInTouchForm />
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#4DB6AC]/10 to-background">
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] text-balance">
              Still Here? Good. That Means You{"'"}re Ready.
            </h2>
            <p className="text-lg text-[#0D3B66]/70 max-w-xl mx-auto text-pretty">
              Whether you want to chat, calculate, or just quietly read — we{"'"}re here. No pressure. No sales pitch. Just real help when you{"'"}re ready for it.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button 
                size="lg" 
                className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white text-lg px-10 h-14"
                asChild
              >
                <Link href="/get-started">
                  Get Started Now
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-[#0D3B66] border-2 border-[#0D3B66] text-lg px-8 h-14 bg-transparent hover:bg-[#0D3B66]/5" 
                asChild

              >
                <Link href="/calculator">
                  Try Free Tools
                  <Calculator className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Buttons for Mobile */}
      <FloatingActionButtons />
    </div>
  )
}
