"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { CalculatorsShowcase } from "@/components/calculators-showcase"
import { PodcastSection } from "@/components/podcast-section"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { 
  Calculator,
  ArrowRight,
  Star,
  Shield,
  Heart,
  CheckCircle,
  TrendingDown,
  Users,
  Phone
} from "lucide-react"

export function HomeClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-24 px-4 overflow-hidden bg-white">
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center space-y-8">
              {/* DCSA Branding */}
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold" style={{ color: "#800020" }}>DC</span>
                <span className="text-5xl md:text-6xl font-bold text-black">SA</span>
              </div>
              
              <Badge className="mx-auto bg-[#0D3B66]/10 text-[#0D3B66] px-6 py-2.5 text-sm font-semibold border border-[#0D3B66]/20">
                NCR Registered Debt Counsellor — NCRDC3995
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-balance text-[#0D3B66]">
                Debt struggles are real.<br />So is the way out.
              </h1>
              
              <p className="text-xl md:text-2xl text-[#0D3B66]/80 max-w-3xl mx-auto leading-relaxed font-medium">
                Real plans. Calm process. Honest guidance — without judgment.
              </p>

              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto text-pretty leading-relaxed">
                At DCSA Debt Counselling & Credit Repair, we help South Africans understand their options properly. Debt is stressful — but sorting it out doesn't have to feel overwhelming.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white text-lg px-10 h-14 rounded-xl font-semibold"
                  asChild
                >
                  <Link href="/calculator" className="flex items-center gap-2">
                    <Calculator className="h-5 w-5" />
                    See Your Numbers — Free & Private
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5 text-lg px-10 h-14 rounded-xl font-semibold"
                  asChild
                >
                  <Link href="/contact" className="flex items-center gap-2">
                    <Phone className="h-5 w-5" />
                    Book a Free Consultation
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Understand Your Options */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Understand Your Options Before You Decide
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                No pressure. No shame. Just clear information so you can choose what's best for your situation.
              </p>
            </div>

            <DebtReviewComparison />
          </div>
        </section>

        {/* Start With Clarity - Calculators */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Start With Clarity
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                You don't need pressure. You need numbers that make sense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DB6AC]/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-[#4DB6AC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66]">Interest Calculator</h3>
                  <p className="text-[#0D3B66]/70">
                    See how interest quietly stretches your repayment and increases the total you pay back. Even small percentage changes can add months — sometimes years.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                    asChild
                  >
                    <Link href="/calculator/interest">
                      Open Interest Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DB6AC]/10 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-[#4DB6AC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66]">Potential Savings Calculator</h3>
                  <p className="text-[#0D3B66]/70">
                    Get a rough estimate of what your repayments could look like under a structured plan. It's an estimate — not a promise — but it helps you plan with less stress.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                    asChild
                  >
                    <Link href="/calculator/savings">
                      Estimate My Potential Savings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DB6AC]/10 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-[#4DB6AC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66]">Money Map</h3>
                  <p className="text-[#0D3B66]/70">
                    Find where your money is "disappearing" — subscriptions, debit orders and small spends that add up. Awareness first, no guilt.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                    asChild
                  >
                    <Link href="/calculator/money-map">
                      Use the Money Map
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Learn Before You Commit - Podcast */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Learn Before You Commit
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                Not ready to speak to someone yet? Start here. Plain language, real examples, no judgment.
              </p>
            </div>

            <PodcastSection />
          </div>
        </section>

        {/* Compare Insurance Quotes */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Compare Insurance Quotes (Optional)
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                If you're reviewing monthly costs, insurance is a smart place to check. Request quotes and compare options — no pressure.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-2 border-[#4DB6AC]/30 hover:border-[#4DB6AC] transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-[#4DB6AC]/10 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-[#4DB6AC]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0D3B66] mb-2">Auto & General</h3>
                      <p className="text-[#0D3B66]/70 text-sm mb-4">
                        Fast claim payouts and comprehensive coverage
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white font-semibold"
                      asChild
                    >
                      <Link href="/insurance-quotes/auto-and-general">
                        Request Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#0D3B66] mb-2">1st for Women</h3>
                      <p className="text-[#0D3B66]/70 text-sm mb-4">
                        Car and home insurance savings — combine and save 10%
                      </p>
                    </div>
                    <Button 
                      className="w-full bg-primary hover:bg-primary/90 text-white font-semibold"
                      asChild
                    >
                      <Link href="/insurance-quotes/first-for-women">
                        Request Quote
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Let's Talk Before You Decide */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FFE5D9]/30 to-[#4DB6AC]/10">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-[#0D3B66]/20">
              <CardContent className="p-10 md:p-12">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-balance">
                  Let's Talk Before You Decide
                </h2>
                
                <div className="space-y-4 text-lg text-[#0D3B66]/80 leading-relaxed mb-8">
                  <p>You don't need to sign anything today.</p>
                  <p>You don't need to commit to a process.</p>
                  <p>
                    Sometimes you just need to sit down, unpack the numbers, and understand your options properly.
                  </p>
                  <p className="font-medium text-[#0D3B66]">
                    If you're in Port Elizabeth, let's have a coffee. If you're elsewhere, we'll meet online.
                  </p>
                  <p className="text-xl font-semibold text-[#0D3B66]">
                    Calm conversation. Clear plan. No judgment.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg"
                    className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold"
                    asChild
                  >
                    <Link href="/contact">
                      Book a Free Consultation
                    </Link>
                  </Button>
                  <Button 
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5"
                    asChild
                  >
                    <a href="tel:+27719006298">
                      Call +27 71 900 6298
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Real Client Experiences - Google Reviews Only */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Real Client Experiences
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                Verified Google reviews from real people
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-[#0D3B66]/60 mt-4">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="font-semibold">5.0 Rating</span>
                <span>•</span>
                <span>Google Reviews</span>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
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
                  <p className="text-[#0D3B66]/70">
                    "Absolutely outstanding service! The team was not only highly professional but also incredibly kind and understanding throughout the entire process."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Damian Ellington</div>
                    <div className="text-xs text-[#0D3B66]/50">Google Review</div>
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
                  <p className="text-[#0D3B66]/70">
                    "I had an amazing experience working with DCSA. They helped me create a realistic repayment plan that truly fits my budget. I highly recommend them."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Lizelle Jonker</div>
                    <div className="text-xs text-[#0D3B66]/50">Google Review</div>
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
                  <p className="text-[#0D3B66]/70">
                    "Samantha Knoesen helped me so much in getting my financial life back, always ready to answer. Great work Samantha."
                  </p>
                  <div>
                    <div className="font-semibold text-[#0D3B66]">Juanita Scott</div>
                    <div className="text-xs text-[#0D3B66]/50">Google Review</div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Refer a Friend - Exact Copy */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FFD93D]/20 to-white">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-[#FFD93D]/40 hover:border-[#FFD93D] transition-all">
              <CardContent className="p-10 md:p-12">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-[#FFD93D]/20 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-7 h-7 text-[#FFD93D]" />
                  </div>
                  <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                      Refer Someone Who Might Need Help
                    </h2>
                  </div>
                </div>

                <div className="space-y-4 text-lg text-[#0D3B66]/80 leading-relaxed mb-8">
                  <p className="font-medium text-[#0D3B66]">Debt struggles are real.</p>
                  <p className="font-medium text-[#0D3B66]">And most people won't say it out loud.</p>
                  <p>If someone popped into your mind while reading that…</p>
                  <p>maybe they just need the right conversation.</p>
                  <p>
                    At DCSA Debt Counselling & Credit Repair, we help people fix what feels overwhelming — properly, legally, and without judgement.
                  </p>
                  <p>
                    If you refer someone who signs up successfully,<br />
                    we'll thank you with <strong className="text-[#0D3B66]">R350</strong>.
                  </p>
                  <p>Not because it's about the money.</p>
                  <p>But because pointing someone toward help matters.</p>
                  <p className="text-xl font-semibold text-[#0D3B66]">
                    You help them take the first step.<br />
                    We handle the rest.
                  </p>
                </div>

                <Button 
                  size="lg"
                  className="w-full bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66] font-semibold text-lg h-14"
                  asChild
                >
                  <Link href="/refer-a-friend" className="flex items-center justify-center gap-2">
                    <Heart className="w-5 h-5" />
                    Refer a Friend — Earn R350
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <Footer />
      
      {/* Floating Action Buttons */}
      <FloatingActionButtons />
    </div>
  )
}
