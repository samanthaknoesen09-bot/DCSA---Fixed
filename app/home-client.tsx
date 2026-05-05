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

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id)
  }

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.background }}>
      <MobileHelpBar />

      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryDark} 100%)` }}
      >
        <div className="container mx-auto px-4 py-20 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <ClarityBanner />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {brandCopy.hero.headline}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              {brandCopy.hero.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                size="lg"
                className="text-lg px-8 py-6"
                style={{ backgroundColor: colors.accent, color: colors.primary }}
                asChild
              >
                <Link href={WHATSAPP_URL} target="_blank">
                  {brandCopy.hero.cta}
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="#how-it-works">
                  Learn How It Works
                </Link>
              </Button>
            </div>
            <TrustBadges />
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

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 p-3 rounded-full shadow-lg z-50 transition-all"
          style={{ backgroundColor: colors.primary, color: "white" }}
        >
          <ArrowUp size={20} />
        </button>
      )}
    </main>
  )
}
