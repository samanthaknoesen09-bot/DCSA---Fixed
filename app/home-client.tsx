"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { ReviewSubmission } from "@/components/review-submission"
import { EmotionalMirrorSection } from "@/components/emotional-mirror-section"
import { MeetTheTeam } from "@/components/meet-the-team"
import { SalaryComparisonSection } from "@/components/salary-comparison-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { IdentityStrip } from "@/components/identity-strip"
import { MobileHelpBar } from "@/components/mobile-help-bar"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { brandCopy } from "@/lib/brandCopy"
import { ProcessSection } from "@/components/process-section"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { ArrowUp } from "lucide-react"

export function HomeClient() {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <MobileHelpBar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full overflow-hidden" style={{ minHeight: "90vh" }}>
        {/* Background image */}
        <Image
          src="/images/hero-banner.jpg"
          alt="Stressed about debt? I can help - Ask for Sam"
          fill
          priority
          className="object-cover object-center"
        />
        {/* Dark overlay for readability */}
        <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />

        {/* Content - left aligned to match banner style */}
        <div className="relative z-10 container mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-center h-full" style={{ minHeight: "90vh", paddingBottom: "4rem", paddingTop: "6rem" }}>
          <div className="max-w-lg">

            {/* Headline - stacked like the banner */}
            <div className="mb-4">
              <h1 className="font-extrabold text-white leading-none tracking-tight uppercase" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                Payday &rarr;<br />
                Debit orders &rarr;<br />
                <span style={{ color: colors.coralAccent }}>Nothing left.</span>
              </h1>
            </div>

            {/* Divider */}
            <div className="w-16 h-1 mb-5" style={{ backgroundColor: colors.coralAccent }} />

            {/* Emotional line */}
            <p className="text-white text-xl md:text-2xl font-semibold mb-1">
              That&apos;s not living.
            </p>
            <p className="text-xl md:text-2xl font-bold mb-6" style={{ color: colors.coralAccent }}>
              That&apos;s surviving.
            </p>

            {/* Body */}
            <div className="text-white/90 text-sm md:text-base leading-relaxed space-y-2 mb-6">
              <p>After everything goes off, there&apos;s nothing left.</p>
              <p>Not for food. Not for petrol. Not for life.</p>
              <p>Then it&apos;s credit cards, loans, or borrowing just to get through the month. And the cycle keeps repeating.</p>
            </div>

            {/* Hope */}
            <p className="font-bold text-lg md:text-xl mb-1" style={{ color: colors.coralAccent }}>
              Let&apos;s change that.
            </p>
            <p className="text-white/90 text-sm md:text-base mb-8">
              We&apos;ll help you create a plan that gives you room to breathe again.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="text-sm md:text-base px-6 py-5 font-bold rounded-xl"
                style={{ backgroundColor: colors.coralAccent, color: colors.maroon }}
                asChild
              >
                <Link href="#quiz">
                  👉 Check My Debt Situation
                </Link>
              </Button>
              <Button
                size="lg"
                className="text-sm md:text-base px-6 py-5 font-semibold rounded-xl border-2"
                style={{ borderColor: colors.white, color: colors.white, backgroundColor: "transparent" }}
                asChild
              >
                <Link href={WHATSAPP_URL} target="_blank">
                  💬 WhatsApp Sam – 062 788 4609
                </Link>
              </Button>
            </div>
          </div>

          {/* Trust badges bottom */}
          <div className="mt-10">
            <TrustBadges variant="light" />
          </div>
        </div>
      </section>

      <IdentityStrip />
      <ProcessSection />
      <EmotionalMirrorSection />
      <DebtReviewComparison />
      <SalaryComparisonSection />
      <MeetTheTeam />
      <ReviewsCarousel />
      <ReviewSubmission />
      <FAQSection />
      <FinalCTASection />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all"
          style={{ backgroundColor: colors.maroon, color: colors.white }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  )
}
