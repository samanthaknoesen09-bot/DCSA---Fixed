"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { PodcastSection } from "@/components/podcast-section"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { ReviewSubmission } from "@/components/review-submission"
import { EmotionalMirrorSection } from "@/components/emotional-mirror-section"
import { HowThisWorksStrip } from "@/components/how-this-works-strip"
import { FAQReassuranceSection } from "@/components/faq-reassurance-section"
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
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  
  const topRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    topRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  const quizQuestions = [
    { 
      id: 1, 
      statement: "Debt review is only for people who failed.", 
      answer: false,
      explanation: "You're not alone - most people think that. Debt review is actually for anyone over-indebted, not a mark of failure. It's help, not shame."
    },
    { 
      id: 2, 
      statement: "Debt review gives legal protection from creditors.", 
      answer: true,
      explanation: "That one's true. It's one reason people often feel breathing space during debt review. No more scary phone calls at dinner time."
    },
    { 
      id: 3, 
      statement: "Debt review means you'll never get credit again.", 
      answer: false,
      explanation: "Myth! Once you complete debt review and get clearance, you can apply for credit again. It's a reset button, not a life sentence."
    },
    { 
      id: 4, 
      statement: "Interest can stretch repayments for months or years.", 
      answer: true,
      explanation: "Yes. Interest rates make a huge difference to how long you'll be repaying. That's why understanding them matters."
    },
    { 
      id: 5, 
      statement: "Asking for help early usually gives you more options.", 
      answer: true,
      explanation: "Absolutely. The earlier you reach out, the more paths are open to you. Don't wait until the debt starts charging you rent."
    },
  ]

  const handleQuizAnswer = (userAnswer: boolean) => {
    const isCorrect = userAnswer === quizQuestions[currentQuestionIndex].answer
    setQuizAnswers([...quizAnswers, isCorrect])
    setShowExplanation(true)
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
      setShowExplanation(false)
    } else {
      setQuizComplete(true)
    }
  }

  const toggleAccordion = (id: string) => {
    setExpandedAccordion(expandedAccordion === id ? null : id)
  }

  const correctAnswers = quizAnswers.filter((answer) => answer).length
  const currentQuestion = quizQuestions[currentQuestionIndex]

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.warmCream }} ref={topRef}>
      <main className="flex-1 pb-20 md:pb-0">
        {/* HERO SECTION */}
        <section className="relative py-16 md:py-28 px-4" style={{ 
          background: `linear-gradient(135deg, ${colors.warmBeige} 0%, ${colors.softPeach}30 100%)`
        }}>
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              {/* Left: Copy */}
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight text-balance" style={{ color: colors.charcoal }}>
                  When your salary disappears before month-end.
                </h1>
                
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                    If you're juggling school fees, groceries, and another round of debit orders while stress keeps you up at night - you're not bad with money. The system just takes first.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button 
                    size="lg" 
                    className="rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href="https://www.dcsam.co.za/calculator">
                      Check My Debt Situation
                    </Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-lg font-semibold"
                    style={{ borderColor: colors.maroon, color: colors.maroon }}
                    asChild
                  >
                    <Link href={WHATSAPP_URL}>
                      WhatsApp Sam
                    </Link>
                  </Button>
                </div>

                <TrustBadges variant="light" />

                <p className="text-xs pt-2" style={{ color: colors.warmGrey }}>
                  No judgement. No pressure. Just clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* IDENTITY STRIP - "Who we usually help" */}
        <IdentityStrip />

        {/* EMOTIONAL MIRROR SECTION */}
        <EmotionalMirrorSection />

        {/* CALCULATORS SECTION - "Your Money Reality Check" */}
        <section id="money-reality-check" className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
                Your Money Reality Check
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Three free tools. No sign-up. No judgment. Just clarity.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Money Map */}
              <Card 
                className="border-2 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderColor: colors.sandLight }}
              >
                <Link href="https://www.dcsam.co.za/calculator" className="block">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: colors.softPeach }}>
                      <PiggyBank className="w-8 h-8" style={{ color: colors.maroon }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Money Map</h3>
                    <p className="text-sm" style={{ color: colors.warmGrey }}>
                      See where your money really goes each month
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-lg"
                      style={{ borderColor: colors.maroon, color: colors.maroon }}
                    >
                      Start Mapping
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              {/* Interest Trap Checker */}
              <Card 
                className="border-2 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderColor: colors.sandLight }}
              >
                <Link href="https://www.dcsam.co.za/calculator" className="block">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: colors.mintCalm + "30" }}>
                      <TrendingUp className="w-8 h-8" style={{ color: colors.mintCalm }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Interest Trap Checker</h3>
                    <p className="text-sm" style={{ color: colors.warmGrey }}>
                      Find out how much interest is really costing you
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-lg"
                      style={{ borderColor: colors.maroon, color: colors.maroon }}
                    >
                      Check Interest
                    </Button>
                  </CardContent>
                </Link>
              </Card>

              {/* Debt Reset Preview */}
              <Card 
                className="border-2 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                style={{ borderColor: colors.sandLight }}
              >
                <Link href="https://www.dcsam.co.za/calculator" className="block">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: colors.warmBeige }}>
                      <Lightbulb className="w-8 h-8" style={{ color: colors.charcoal }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Debt Reset Preview</h3>
                    <p className="text-sm" style={{ color: colors.warmGrey }}>
                      See what a restructured plan could look like
                    </p>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full rounded-lg"
                      style={{ borderColor: colors.maroon, color: colors.maroon }}
                    >
                      Preview Reset
                    </Button>
                  </CardContent>
                </Link>
              </Card>
            </div>
            
            <p className="text-center mt-8 text-sm" style={{ color: colors.warmGrey }}>
              No personal details saved. These tools are for guidance only.
            </p>
          </div>
        </section>

        {/* FREE 15-MINUTE CLARITY BANNER */}
        <ClarityBanner />

        {/* TRANSITION BLOCK */}
        <section className="py-12 px-4" style={{ backgroundColor: colors.warmCream }}>
          <div className="container mx-auto max-w-2xl text-center space-y-4">
            <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: colors.warmGrey }}>
              Now let's look at the pattern.
            </p>
            <p className="text-lg" style={{ color: colors.charcoal }}>
              Most people aren't bad with money - the system just takes first. Here's what usually happens, and how debt review changes it.
            </p>
          </div>
        </section>

        {/* SALARY COMPARISON SECTION */}
        <SalaryComparisonSection />

        {/* HOW THIS WORKS SECTION */}
        <HowThisWorksStrip />

        {/* DEBT REVIEW COMPARISON */}
        <DebtReviewComparison />

        {/* FAQ REASSURANCE SECTION */}
        <FAQReassuranceSection />

        {/* REVIEWS CAROUSEL */}
        <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.warmCream }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
                What Others Say
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Real experiences from real people who've been where you are.
              </p>
            </div>
            <ReviewsCarousel />
            <ReviewSubmission />
          </div>
        </section>

        {/* PODCAST SECTION */}
        <PodcastSection />

        {/* KNOW YOUR MONEY QUIZ */}
        <section id="quiz" className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
                Know Your Money: Quick Quiz
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Test what you know about debt, interest, and debt review. Five questions. No judgment.
              </p>
            </div>

            {!quizComplete ? (
              <Card className="border-2 rounded-2xl overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <CardContent className="p-8">
                  <div className="mb-6">
                    <p className="text-sm font-semibold mb-2" style={{ color: colors.warmGrey }}>
                      Question {currentQuestionIndex + 1} of {quizQuestions.length}
                    </p>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: colors.sandLight }}>
                      <div 
                        className="h-2 rounded-full transition-all duration-300"
                        style={{ 
                          backgroundColor: colors.maroon,
                          width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`
                        }}
                      />
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xl font-semibold mb-2" style={{ color: colors.charcoal }}>
                      True or False:
                    </p>
                    <p className="text-lg" style={{ color: colors.charcoal }}>
                      "{currentQuestion.statement}"
                    </p>
                  </div>

                  {!showExplanation ? (
                    <div className="flex gap-4 justify-center">
                      <Button
                        size="lg"
                        className="rounded-lg font-semibold px-8"
                        style={{ backgroundColor: colors.mintCalm, color: colors.charcoal }}
                        onClick={() => handleQuizAnswer(true)}
                      >
                        True
                      </Button>
                      <Button
                        size="lg"
                        className="rounded-lg font-semibold px-8"
                        style={{ backgroundColor: colors.softPeach, color: colors.charcoal }}
                        onClick={() => handleQuizAnswer(false)}
                      >
                        False
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div 
                        className="p-4 rounded-lg"
                        style={{ 
                          backgroundColor: quizAnswers[quizAnswers.length - 1] ? colors.mintCalm + "20" : colors.softPeach + "40"
                        }}
                      >
                        <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                          {quizAnswers[quizAnswers.length - 1] ? "Correct!" : "Not quite."}
                        </p>
                        <p style={{ color: colors.charcoal }}>
                          {currentQuestion.explanation}
                        </p>
                      </div>
                      <Button
                        size="lg"
                        className="w-full rounded-lg font-semibold text-white"
                        style={{ backgroundColor: colors.maroon }}
                        onClick={handleNextQuestion}
                      >
                        {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See Results"}
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 rounded-2xl overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <p className="text-5xl font-bold mb-2" style={{ color: colors.maroon }}>
                      {correctAnswers}/{quizQuestions.length}
                    </p>
                    <p className="text-lg" style={{ color: colors.warmGrey }}>
                      {correctAnswers >= 4 ? "Impressive! You know your stuff." : 
                       correctAnswers >= 2 ? "Good start. There's always more to learn." :
                       "No worries - that's what we're here for."}
                    </p>
                  </div>
                  <div className="space-y-4">
                    <p style={{ color: colors.charcoal }}>
                      Understanding these basics is the first step. Ready to see what your options look like?
                    </p>
                    <Button
                      size="lg"
                      className="rounded-lg font-semibold text-white"
                      style={{ backgroundColor: colors.maroon }}
                      asChild
                    >
                      <Link href="https://www.dcsam.co.za/calculator">
                        Check My Situation
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* MEET THE TEAM */}
        <MeetTheTeam />

        {/* FINAL CTA */}
        <FinalCTASection />

        {/* FAQ SECTION */}
        <FAQSection />

        {/* WHATSAPP CHECKLIST - Lead Magnet */}
        <WhatsappChecklist />
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 z-50 p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
          style={{ backgroundColor: colors.maroon }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  )
}
