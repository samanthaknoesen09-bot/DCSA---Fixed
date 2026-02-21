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
      explanation: "You're not alone — most people think that. Debt review is actually for anyone over-indebted, not a mark of failure. It's help, not shame."
    },
    { 
      id: 2, 
      statement: "Debt review gives legal protection from creditors.", 
      answer: true,
      explanation: "That one's true. It's one reason people often feel breathing space during debt review."
    },
    { 
      id: 3, 
      statement: "Debt review means you'll never get credit again.", 
      answer: false,
      explanation: "Myth! Once you complete debt review and get clearance, you can apply for credit again."
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
      explanation: "Absolutely. The earlier you reach out, the more paths are open to you. Don't wait."
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
      <main className="flex-1">
        {/* HERO SECTION */}
        <section className="relative py-16 md:py-28 px-4" style={{ 
          background: `linear-gradient(135deg, ${colors.warmBeige} 0%, ${colors.softPeach}30 100%)`
        }}>
          <div className="container mx-auto max-w-3xl space-y-6 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty leading-tight" style={{ color: colors.charcoal }}>
              Money stress is heavy. Let's fix it properly.
            </h1>
            <p className="text-lg md:text-xl text-pretty" style={{ color: colors.warmGrey }}>
              We help you understand your money, fix debt problems, and rebuild credit — clearly, calmly, without shame or confusion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
                style={{ backgroundColor: colors.maroon }}
                asChild
              >
                <Link href={WHATSAPP_URL + "?text=Hi%20DCSA!%20I'd%20like%20to%20chat%20about%20my%20options"}>
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Message Me – Free Chat
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="rounded-lg font-semibold"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
                asChild
              >
                <Link href="#calculators">
                  Quick Money Check
                </Link>
              </Button>
            </div>
            <p className="text-sm pt-2" style={{ color: colors.warmGrey }}>
              ↓ No pressure, just clarity. Next: Try a quick check below.
            </p>
          </div>
        </section>

        {/* CALCULATORS SECTION - "Your Money Reality Check" */}
        <section className="py-16 md:py-20 px-4" id="calculators" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Your Money Reality Check
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Stressed about money? These simple tools help you get clarity—no sign-up, private. Start small, breathe easy.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Money Map Renamed */}
              <Card className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeft: `4px solid ${colors.mintCalm}` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <PiggyBank className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: colors.mintCalm }} />
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>Your Money Reality Check</h3>
                      <p className="text-sm mt-2" style={{ color: colors.warmGrey }}>
                        Plug in your income, bills, and those sneaky spends (coffee runs, extra groceries). See exactly where your cash goes. Helps spot leaks before they become big debt holes.
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full rounded-lg"
                    style={{ backgroundColor: colors.mintCalm, color: colors.charcoal }}
                    asChild
                  >
                    <Link href="/calculator">Start Check</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Interest Calculator Renamed */}
              <Card className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeft: `4px solid ${colors.softPeach}` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: colors.softPeach }} />
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>Interest Trap Checker</h3>
                      <p className="text-sm mt-2" style={{ color: colors.warmGrey }}>
                        Enter your loan details and watch how interest piles on over time. It's eye-opening: That R5k borrow could cost R2k extra. Understand why quick loans hurt long-term.
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href="/calculator">Check Interest</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Savings Calculator Renamed */}
              <Card className="rounded-xl border-0 shadow-sm hover:shadow-md transition-shadow" style={{ borderLeft: `4px solid ${colors.maroon}` }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                    <div>
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>Debt Cut Preview</h3>
                      <p className="text-sm mt-2" style={{ color: colors.warmGrey }}>
                        See what you'd save by combining debts under review. No fancy math—just real numbers showing lower payments and faster freedom.
                      </p>
                    </div>
                  </div>
                  <Button 
                    size="sm" 
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href="/calculator">See Savings</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <p className="text-center mt-8 text-sm" style={{ color: colors.warmGrey }}>
              Spot something? <Link href={WHATSAPP_URL} className="font-semibold underline" style={{ color: colors.maroon }}>Message me for a personalized plan.</Link>
            </p>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="py-16 md:py-20 px-4" id="education" style={{ backgroundColor: colors.mintCalm + "20" }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Your Money, Made Simple
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Real-talk money education without the jargon or shame.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  id: "starting-zero",
                  title: "Starting From Zero",
                  content: "Never managed money formally? That's okay. Start with: open a savings account, save R50/week, understand what interest is. Small steps. Progress builds.",
                  tips: ["Save in a separate account (it works)", "Start with R50/week—don't overthink it", "Track spending for one month—see patterns"]
                },
                {
                  id: "everyday-tips",
                  title: "Everyday Money Tips",
                  content: "Quick wins that stick: pack lunch instead of buying, reduce data use, shop with a list. Small leaks become big holes. Find yours.",
                  tips: ["Packed lunch: R200/month saved", "Brew coffee at home: R150/month saved", "Compare phone plans: often find better deals"]
                },
                {
                  id: "small-income-wins",
                  title: "Small Income Wins",
                  content: "Budget tight? We get it. Prioritize: rent/food first. Then tackle debt step by step. Use our calculator to see exactly where R1 goes.",
                  tips: ["List essentials first—everything else is secondary", "Debt doesn't grow overnight; solve it step by step", "Ask creditors about payment holidays (many agree)"]
                },
                {
                  id: "know-before-borrow",
                  title: "Know Before You Borrow",
                  content: "Before taking a loan or using credit, understand: interest rates, fees, and repayment terms. They hugely impact your money. Get clear first.",
                  tips: ["Interest adds up fast—compare rates always", "Fees matter: R50/month = R600/year", "Read the fine print; ask questions—no shame"]
                },
              ].map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full text-left p-4 rounded-lg border-2 transition-all hover:bg-opacity-5 cursor-pointer"
                    style={{ 
                      backgroundColor: expandedAccordion === section.id ? colors.white : "transparent",
                      borderColor: colors.sandLight
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                        {section.title}
                      </h3>
                      {expandedAccordion === section.id ? (
                        <ChevronUp className="w-5 h-5" style={{ color: colors.maroon }} />
                      ) : (
                        <ChevronDown className="w-5 h-5" style={{ color: colors.maroon }} />
                      )}
                    </div>
                  </button>
                  {expandedAccordion === section.id && (
                    <div className="p-6 bg-white rounded-b-lg border-2 border-t-0" style={{ borderColor: colors.sandLight }}>
                      <p className="text-base mb-4" style={{ color: colors.charcoal }}>
                        {section.content}
                      </p>
                      <div className="space-y-2">
                        {section.tips.map((tip, idx) => (
                          <div key={idx} className="flex gap-3">
                            <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                            <p className="text-sm" style={{ color: colors.charcoal }}>
                              {tip}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DEBT HELP SECTION */}
        <section className="py-16 md:py-20 px-4" id="debt-options" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Debt Review Explained Simply
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                What it is, how it works, and if it's right for you—without the confusion.
              </p>
            </div>

            <div className="space-y-4 mb-12">
              {[
                {
                  id: "what-is-debt-review",
                  title: "What Is Debt Review?",
                  content: "Debt review is a formal South African process where a registered counsellor helps over-indebted people restructure debts into affordable payments. It's protection under law, not shame."
                },
                {
                  id: "how-it-works",
                  title: "How It Works",
                  content: "First, we assess your situation—income, debts, bills. Then we negotiate with creditors to lower your monthly payment (often by 30-40%). You make one payment to us; we distribute it. You get breathing space; creditors get paid."
                },
                {
                  id: "is-it-for-you",
                  title: "Is It For You?",
                  content: "If you're over-indebted (can't pay debts in full), debt review protects you legally from creditors. It's not instant—typically 5-6 years—but it works. Message me to assess your situation."
                },
              ].map((section) => (
                <div key={section.id}>
                  <button
                    onClick={() => toggleAccordion(section.id)}
                    className="w-full text-left p-4 rounded-lg border-2 transition-all hover:bg-opacity-5 cursor-pointer"
                    style={{ 
                      backgroundColor: expandedAccordion === section.id ? colors.white : "transparent",
                      borderColor: colors.sandLight
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                        {section.title}
                      </h3>
                      {expandedAccordion === section.id ? (
                        <ChevronUp className="w-5 h-5" style={{ color: colors.maroon }} />
                      ) : (
                        <ChevronDown className="w-5 h-5" style={{ color: colors.maroon }} />
                      )}
                    </div>
                  </button>
                  {expandedAccordion === section.id && (
                    <div className="p-6 bg-white rounded-b-lg border-2 border-t-0" style={{ borderColor: colors.sandLight }}>
                      <p className="text-base" style={{ color: colors.charcoal }}>
                        {section.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Debt Review Comparison Table */}
            <DebtReviewComparison />

            <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: colors.mintCalm + "20" }}>
              <p className="text-center mb-4" style={{ color: colors.charcoal }}>
                <strong>Affiliations:</strong> We work with major insurance partners and creditors across South Africa to make this work for you.
              </p>
              <div className="flex justify-center gap-6 flex-wrap">
                <a href="https://www.firstforwomen.co.za" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FFW_Horizontal_Logo.png-4iWA5aRAI4E5D4yawATMO5nUy0dg1Q.jpeg"
                    alt="First for Women Insurance"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </a>
                <a href="https://www.autoandgeneral.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-75 transition-opacity">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auto-general-new-logo%20%281%29-vYRMIPexeVI34Dm8wDBMeHo4HHGp3P.png"
                    alt="Auto & General Insurance"
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PODCAST SECTION */}
        <section className="py-16 md:py-20 px-4" id="podcast" style={{ backgroundColor: colors.warmBeige }}>
          <PodcastSection />
        </section>

        {/* TEAM SECTION */}
        <section className="py-16 md:py-20 px-4" id="team" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Who You're Talking To
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Real people, honest conversations, from our calm office in Gqeberha.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-xl border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div style={{ backgroundColor: colors.softPeach + "40", height: "200px" }} />
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>Samantha</h3>
                  <p className="text-sm mb-4" style={{ color: colors.warmGrey }}>
                    Since 2014, honest talks from home. I've helped hundreds find calm again.
                  </p>
                  <p className="text-xs font-semibold" style={{ color: colors.maroon }}>Founder, Debt Counsellor</p>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div style={{ backgroundColor: colors.mintCalm + "40", height: "200px" }} />
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>Kadene</h3>
                  <p className="text-sm mb-4" style={{ color: colors.warmGrey }}>
                    I help people understand their options without the jargon.
                  </p>
                  <p className="text-xs font-semibold" style={{ color: colors.maroon }}>Financial Educator</p>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-0 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div style={{ backgroundColor: colors.maroon + "20", height: "200px" }} />
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>Cindy</h3>
                  <p className="text-sm mb-4" style={{ color: colors.warmGrey }}>
                    I make sure every conversation feels safe and every outcome is real.
                  </p>
                  <p className="text-xs font-semibold" style={{ color: colors.maroon }}>Client Advocate</p>
                </CardContent>
              </Card>
            </div>


          </div>
        </section>

        {/* REVIEWS SECTION */}
        <section className="py-16 md:py-20 px-4" id="stories" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Real People, Real Hope
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Stories from people who found their way forward.
              </p>
            </div>
            <ReviewsCarousel />
            <div className="mt-12 text-center">
              <p className="mb-6" style={{ color: colors.charcoal }}>
                Share your story? Help others find hope.
              </p>
              <ReviewSubmission />
            </div>
          </div>
        </section>

        {/* QUIZ SECTION */}
        <section className="py-16 md:py-20 px-4" id="quiz" style={{ backgroundColor: colors.mintCalm + "20" }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Know Your Money: Quick Quiz
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Five questions. No judgment. Just clarity about debt and money.
              </p>
            </div>

            {!quizComplete ? (
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-semibold" style={{ color: colors.warmGrey }}>
                        Question {currentQuestionIndex + 1} of {quizQuestions.length}
                      </span>
                      <div className="w-32 h-2 rounded-full bg-gray-200">
                        <div 
                          className="h-full rounded-full transition-all"
                          style={{ 
                            width: `${((currentQuestionIndex + 1) / quizQuestions.length) * 100}%`,
                            backgroundColor: colors.maroon
                          }}
                        />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-center mb-8" style={{ color: colors.charcoal }}>
                      {currentQuestion.statement}
                    </h3>
                  </div>

                  {!showExplanation ? (
                    <div className="flex gap-4 justify-center">
                      <Button 
                        size="lg"
                        className="rounded-lg text-white hover:opacity-90"
                        style={{ backgroundColor: colors.maroon }}
                        onClick={() => handleQuizAnswer(true)}
                      >
                        True
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline"
                        className="rounded-lg"
                        style={{ borderColor: colors.maroon, color: colors.maroon }}
                        onClick={() => handleQuizAnswer(false)}
                      >
                        False
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div 
                        className="p-4 rounded-lg"
                        style={{ 
                          backgroundColor: quizAnswers[currentQuestionIndex] ? colors.mintCalm + "20" : colors.softPeach + "40"
                        }}
                      >
                        <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                          {quizAnswers[currentQuestionIndex] ? "You got it! ✓" : "Not quite. Here's the truth:"}
                        </p>
                        <p style={{ color: colors.charcoal }}>
                          {currentQuestion.explanation}
                        </p>
                      </div>
                      <Button 
                        size="lg"
                        className="w-full rounded-lg text-white hover:opacity-90"
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
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-8 text-center space-y-6">
                  <div>
                    <p className="text-5xl font-bold mb-2" style={{ color: colors.maroon }}>
                      {correctAnswers}/{quizQuestions.length}
                    </p>
                    <p className="text-xl font-semibold mb-4" style={{ color: colors.charcoal }}>
                      {correctAnswers === 5 ? "Perfect! You know your stuff." : correctAnswers >= 3 ? "Good grasp on it." : "Getting clearer now?"}
                    </p>
                    <p style={{ color: colors.warmGrey }}>
                      {correctAnswers === 5 
                        ? "You've got solid understanding of debt and money. Now put it to work."
                        : "This is what we help with—making it clear and real."}
                    </p>
                  </div>
                  <Button 
                    size="lg"
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    onClick={() => {
                      setCurrentQuestionIndex(0)
                      setQuizAnswers([])
                      setShowExplanation(false)
                      setQuizComplete(false)
                    }}
                  >
                    Try Again
                  </Button>
                  <div className="border-t pt-6" style={{ borderColor: colors.sandLight }}>
                    <p className="mb-4" style={{ color: colors.charcoal }}>
                      Ready to go deeper?
                    </p>
                    <Button 
                      variant="outline"
                      className="w-full rounded-lg"
                      style={{ borderColor: colors.maroon, color: colors.maroon }}
                      asChild
                    >
                      <Link href={WHATSAPP_URL + "?text=I%20did%20the%20quiz%20and%20want%20to%20talk%20about%20my%20situation"}>
                        Message Me
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-16 md:py-20 px-4" id="faq" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Questions We Hear
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Real concerns, straight answers.
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What if I'm scared?",
                  a: "That's normal. Most people start scared. We talk you through it calmly, step by step. No pressure, just real answers."
                },
                {
                  q: "How long does debt review take?",
                  a: "Usually 5-6 years. It's not instant, but you're protected the whole time—no creditor threats, just steady progress toward freedom."
                },
                {
                  q: "Can I get credit again after debt review?",
                  a: "Yes. Once you complete debt review and get clearance, you can apply for credit again. It's not permanent; it's a path forward."
                },
                {
                  q: "What's the cost?",
                  a: "We charge a small monthly fee (built into your new payment plan). No surprises, no hidden fees. We discuss it upfront."
                },
                {
                  q: "What if I miss a payment?",
                  a: "Life happens. Talk to us first. We work with you to catch up. One missed payment doesn't break the whole plan."
                },
              ].map((faq, idx) => (
                <div key={idx}>
                  <button
                    onClick={() => toggleAccordion(`faq-${idx}`)}
                    className="w-full text-left p-4 rounded-lg border-2 transition-all hover:bg-opacity-5 cursor-pointer"
                    style={{ 
                      backgroundColor: expandedAccordion === `faq-${idx}` ? colors.white : "transparent",
                      borderColor: colors.sandLight
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                        {faq.q}
                      </h3>
                      {expandedAccordion === `faq-${idx}` ? (
                        <ChevronUp className="w-5 h-5" style={{ color: colors.maroon }} />
                      ) : (
                        <ChevronDown className="w-5 h-5" style={{ color: colors.maroon }} />
                      )}
                    </div>
                  </button>
                  {expandedAccordion === `faq-${idx}` && (
                    <div className="p-6 bg-white rounded-b-lg border-2 border-t-0" style={{ borderColor: colors.sandLight }}>
                      <p style={{ color: colors.charcoal }}>
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CLIENT PORTAL SECTION */}
        <section className="py-16 md:py-20 px-4" id="client-portal" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Client Portal
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Access your account, track progress, and manage your debt review online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>Already a Client?</h3>
                    <p className="text-sm" style={{ color: colors.warmGrey }}>Sign in to your account to view your progress, payments, and documents.</p>
                  </div>
                  <Button 
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href="/client-portal/auth/login">Sign In</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>New Client?</h3>
                    <p className="text-sm" style={{ color: colors.warmGrey }}>Create an account to start your journey or track your application.</p>
                  </div>
                  <Button 
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href="/client-portal/auth/register">Create Account</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 p-6 rounded-lg text-center" style={{ backgroundColor: colors.warmBeige }}>
              <p style={{ color: colors.charcoal }}>
                Need help? <a href={WHATSAPP_URL} className="font-bold hover:underline" style={{ color: colors.maroon }}>Message me on WhatsApp</a>
              </p>
            </div>
          </div>
        </section>

        {/* REFER A FRIEND SECTION */}
        <section className="py-16 md:py-20 px-4" id="refer" style={{ backgroundColor: colors.softPeach + "20" }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Refer a Friend
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Know someone struggling with debt? Share the help that changed your life.
              </p>
            </div>

            <Card className="rounded-xl border-0 shadow-md">
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-3" style={{ color: colors.charcoal }}>How It Works</h3>
                  <ul className="space-y-3 text-sm" style={{ color: colors.charcoal }}>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: colors.maroon }}>1.</span>
                      <span>Share your referral link with someone you know</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: colors.maroon }}>2.</span>
                      <span>They get a free consultation to explore options</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="font-bold" style={{ color: colors.maroon }}>3.</span>
                      <span>When they take action, you both get rewarded</span>
                    </li>
                  </ul>
                </div>

                <div className="border-t pt-6" style={{ borderColor: colors.sandLight }}>
                  <p className="text-sm mb-4" style={{ color: colors.warmGrey }}>
                    Share your unique referral link below or submit a friend's details.
                  </p>
                  <Button 
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <a href="https://dcsam.activecampaign.com/refer" target="_blank" rel="noopener noreferrer">
                      Get Your Referral Link
                    </a>
                  </Button>
                </div>

                <div className="bg-white p-4 rounded-lg text-center text-sm" style={{ borderLeft: `4px solid ${colors.maroon}` }}>
                  <p style={{ color: colors.charcoal }}>
                    Every friend you help is someone finding their way to financial peace. No pressure—just good karma.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="py-16 md:py-20 px-4" id="contact" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-3xl text-center space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Ready to Talk?
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                No pressure. No judgment. Just a real conversation about your options.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <MessageCircle className="w-8 h-8 mx-auto" style={{ color: colors.maroon }} />
                  <h3 className="font-bold" style={{ color: colors.charcoal }}>Message Me</h3>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>Quick reply, real answers</p>
                  <Button 
                    size="sm"
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <Link href={WHATSAPP_URL}>WhatsApp</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <Phone className="w-8 h-8 mx-auto" style={{ color: colors.maroon }} />
                  <h3 className="font-bold" style={{ color: colors.charcoal }}>Call Me</h3>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>071 900 6298</p>
                  <Button 
                    size="sm"
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <a href="tel:+27719006298">Call Now</a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="rounded-xl border-0 shadow-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <Mail className="w-8 h-8 mx-auto" style={{ color: colors.maroon }} />
                  <h3 className="font-bold" style={{ color: colors.charcoal }}>Email Me</h3>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>info@dcsam.co.za</p>
                  <Button 
                    size="sm"
                    className="w-full rounded-lg text-white hover:opacity-90"
                    style={{ backgroundColor: colors.maroon }}
                    asChild
                  >
                    <a href="mailto:info@dcsam.co.za">Email</a>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="pt-8 border-t" style={{ borderColor: colors.sandLight }}>
              <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                Office: Gqeberha, South Africa
              </p>
              <p style={{ color: colors.warmGrey }}>
                We serve nationwide. Remote or in-person, we meet you where you are.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* BACK TO TOP BUTTON */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:opacity-90 z-40"
          style={{ backgroundColor: colors.maroon, color: colors.white }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
