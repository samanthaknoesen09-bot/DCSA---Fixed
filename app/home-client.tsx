"use client"

import { useState, useRef, useEffect } from "react"
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
import { ClarityBanner } from "@/components/clarity-banner"
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
      <section
        ref={heroRef}
        className="relative px-4 py-20 md:py-28"
        style={{ background: `linear-gradient(160deg, ${colors.maroon} 0%, #0d1a30 100%)` }}
      >
        <div className="container mx-auto max-w-4xl text-center">

          {/* Headline - single line on all screens */}
          <h1
            className="font-extrabold text-white leading-none mb-4 tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(1.1rem, 4.5vw, 3.5rem)" }}
          >
            Payday &rarr; Debit orders &rarr; Nothing left.
          </h1>

          {/* Emotional line */}
          <p className="text-xl md:text-2xl font-semibold mb-8" style={{ color: colors.coralAccent }}>
            That&apos;s not living. That&apos;s surviving.
          </p>

          {/* Body */}
          <div className="text-white/85 text-base md:text-lg leading-relaxed space-y-2 mb-8 max-w-2xl mx-auto">
            <p>After everything goes off, there&apos;s nothing left.</p>
            <p>Not for food. Not for petrol. Not for life.</p>
            <p>
              So you rely on credit cards, loans, or borrowing just to get through the month&hellip;
              and the cycle just keeps repeating.
            </p>
          </div>

          {/* Hope */}
          <div
            className="rounded-2xl px-6 py-5 mb-10 max-w-xl mx-auto text-left"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", borderLeft: `4px solid ${colors.coralAccent}` }}
          >
            <p className="text-white font-semibold text-base md:text-lg mb-1">
              It doesn&apos;t have to stay this way.
            </p>
            <p className="text-white/80 text-sm md:text-base">
              We&apos;ll help you reduce the pressure and create a plan that gives you room to breathe again.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 font-bold rounded-xl"
              style={{ backgroundColor: colors.coralAccent, color: colors.maroon }}
              asChild
            >
              <Link href="#quiz">
                👉 Check My Debt Situation
              </Link>
            </Button>
            <Button
              size="lg"
              className="text-base md:text-lg px-8 py-6 font-semibold rounded-xl border-2"
              style={{ borderColor: colors.white, color: colors.white, backgroundColor: "transparent" }}
              asChild
            >
              <Link href={WHATSAPP_URL} target="_blank">
                💬 WhatsApp Sam – 062 788 4609
              </Link>
            </Button>
          </div>

          <div className="mt-8">
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
