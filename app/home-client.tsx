"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { ReviewSubmission } from "@/components/review-submission"
import { EmotionalMirrorSection } from "@/components/emotional-mirror-section"
import { HowThisWorksStrip } from "@/components/how-this-works-strip"
import { MeetTheTeam } from "@/components/meet-the-team"
import { SalaryComparisonSection } from "@/components/salary-comparison-section"
import { FinalCTASection } from "@/components/final-cta-section"
import { IdentityStrip } from "@/components/identity-strip"
import { ClarityBanner } from "@/components/clarity-banner"
import { WhatsappChecklist } from "@/components/whatsapp-checklist"
import { MobileHelpBar } from "@/components/mobile-help-bar"
import { TrustBadges } from "@/components/trust-badges"
import { FAQSection } from "@/components/faq-section"
import { brandCopy } from "@/lib/brandCopy"
import { ReviewsSection } from "@/components/reviews-section"
import { ProcessSection } from "@/components/process-section"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import {
  ChevronDown,
  ChevronUp,
  Lightbulb,
  PiggyBank,
  TrendingUp,
  HelpCircle,
  ArrowUp,
  MessageCircle,
  Mail,
  Phone,
  AlertCircle,
  Check,
} from "lucide-react"

export function HomeClient() {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("money-reality")
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showQuizResult, setShowQuizResult] = useState(false)
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

  const quizQuestions = [
    "Are you struggling to make minimum payments?",
    "Is debt stress affecting your daily life?",
    "Do you have multiple creditors calling you?",
    "Are you using credit to pay for basic needs?",
    "Do you feel trapped by your debt situation?",
  ]

  const handleQuizAnswer = (index: number, answer: boolean) => {
    const newAnswers = [...quizAnswers]
    newAnswers[index] = answer
    setQuizAnswers(newAnswers)
    if (newAnswers.filter(Boolean).length >= 3) {
      setShowQuizResult(true)
    }
  }

  const handleNextQuestion = (index: number) => {
    // placeholder
  }

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <MobileHelpBar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative py-16 md:py-28 px-4"
        style={{ background: `linear-gradient(135deg, ${colors.warmBeige} 0%, ${colors.softPeach}30 100%)` }}
      >
        <div className="container mx-auto max-w-4xl">
          <div className="text-center space-y-8">
            <ClarityBanner />
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              style={{ color: colors.maroon }}
            >
              When your salary disappears before month-end.
            </h1>
            <p
              className="text-lg md:text-xl max-w-2xl mx-auto"
              style={{ color: colors.warmGrey }}
            >
              If you&apos;re juggling school fees, groceries, and another round of debit orders that hit before payday &mdash; you&apos;re not bad with money. You&apos;re just carrying too much debt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                style={{ backgroundColor: colors.maroon, color: colors.white }}
                asChild
              >
                <Link href="#quiz">
                  Check My Debt Situation
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
                asChild
              >
                <Link href={WHATSAPP_URL} target="_blank">
                  WhatsApp Sam
                </Link>
              </Button>
            </div>
            <TrustBadges variant="light" />
            <p className="text-sm" style={{ color: colors.warmGrey }}>
              No judgement. No pressure. Just clarity.
            </p>
          </div>
        </div>
      </section>

      <IdentityStrip />
      <HowThisWorksStrip />
      <ProcessSection />
      <ReviewsSection />
      <WhatsappChecklist />
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
