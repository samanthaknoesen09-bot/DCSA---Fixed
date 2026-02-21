"use client"

import { useState } from "react"
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
  Lightbulb,
  PiggyBank,
  TrendingUp,
  HelpCircle,
  Star,
  Check,
  AlertCircle,
  Coffee,
  MessageCircle,
  Mail,
  Phone,
} from "lucide-react"

export function HomeClient() {
  const [expandedAccordion, setExpandedAccordion] = useState<string | null>("starting-zero")
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null)
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)

  const quizQuestions = [
    { 
      id: 1, 
      statement: "Debt review is only for people who failed.", 
      answer: false,
      explanation: "You're not alone — most people think that. Debt review is actually for anyone over-indebted, not a mark of failure."
    },
    { 
      id: 2, 
      statement: "Debt review gives legal protection from creditors.", 
      answer: true,
      explanation: "That one's true, and it's why debt review can feel like breathing space."
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
      explanation: "Absolutely true — interest rates make a huge difference to how long you'll be repaying."
    },
    { 
      id: 5, 
      statement: "Asking for help early usually gives you more options.", 
      answer: true,
      explanation: "Yes! The earlier you reach out, the more paths are open to you."
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

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.warmCream }}>
      <main className="flex-1">
        {/* HERO SECTION - EDUCATION FOCUS */}
        <section className="relative py-16 md:py-24 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-4xl text-center space-y-6">
            <div className="inline-block text-3xl mb-2">☕</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-pretty leading-tight" style={{ color: colors.charcoal }}>
              Financial Education Made Simple
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
              You're not broken. You're just starting – no judgment, just plain facts to bridge the gaps.
            </p>
            <Button
              size="lg"
              className="mt-4 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="#education-pathways">
                Explore Free Guides
              </Link>
            </Button>
            <div className="pt-4 text-sm" style={{ color: colors.warmGrey }}>
              <p>→ For rural areas, low income brackets, or anyone starting from zero</p>
            </div>
          </div>
        </section>

        {/* EDUCATION PATHWAYS - WHERE DO YOU START? */}
        <section id="education-pathways" className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>
                Where Do You Start?
              </h2>
              <p style={{ color: colors.warmGrey }}>Choose your path. We'll guide you from there.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Pathway 1: Save Like You Mean It */}
              <Card className="border-2 border-transparent hover:shadow-lg transition-all" style={{ borderColor: colors.softPeach }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.softPeach }}>
                      <PiggyBank className="h-6 w-6" style={{ color: colors.maroon }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Save Like You Mean It</h3>
                  </div>
                  <p style={{ color: colors.warmGrey }}>Start small – saving isn't just for the rich. R50/week tips for rural & low-income.</p>
                  <Button variant="outline" className="border-2 w-full" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                    <Link href="#money-smarts">Explore</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pathway 2: Money Myths Busted */}
              <Card className="border-2 border-transparent hover:shadow-lg transition-all" style={{ borderColor: colors.softPeach }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.softPeach }}>
                      <Lightbulb className="h-6 w-6" style={{ color: colors.maroon }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Money Myths Busted</h3>
                  </div>
                  <p style={{ color: colors.warmGrey }}>Finance basics without jargon – debunking myths for beginners.</p>
                  <Button variant="outline" className="border-2 w-full" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                    <Link href="#money-smarts">Explore</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pathway 3: Understanding Debt */}
              <Card className="border-2 border-transparent hover:shadow-lg transition-all" style={{ borderColor: colors.softPeach }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.softPeach }}>
                      <TrendingUp className="h-6 w-6" style={{ color: colors.maroon }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Understanding Debt</h3>
                  </div>
                  <p style={{ color: colors.warmGrey }}>What it really means, in plain English – is it for you?</p>
                  <Button variant="outline" className="border-2 w-full" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                    <Link href="#debt-101">Explore</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Pathway 4: Quick Navigator */}
              <Card className="border-2 border-transparent hover:shadow-lg transition-all" style={{ borderColor: colors.softPeach }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: colors.softPeach }}>
                      <HelpCircle className="h-6 w-6" style={{ color: colors.maroon }} />
                    </div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Your Situation?</h3>
                  </div>
                  <p style={{ color: colors.warmGrey }}>Pick your path. New to saving? Rural budget help? Need tools?</p>
                  <div className="space-y-2">
                    <Button variant="outline" size="sm" className="w-full text-xs" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                      <Link href="#money-smarts">New to Saving</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-xs" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                      <Link href="#money-smarts">Rural Budget</Link>
                    </Button>
                    <Button variant="outline" size="sm" className="w-full text-xs" style={{ borderColor: colors.maroon, color: colors.maroon }} asChild>
                      <Link href="#tools">Free Tools</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FEATURED CONTENT - QUICK MONEY SMARTS */}
        <section className="py-16 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>Quick Money Smarts</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {/* Tip 1 */}
              <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: colors.softPeach, borderColor: colors.coralAccent }}>
                <h3 className="font-bold mb-2" style={{ color: colors.charcoal }}>1-Minute Tip: Save on Subscriptions</h3>
                <p className="text-sm mb-3" style={{ color: colors.charcoal }}>That R149 streaming service? R50 saved per month = R600/year. Start there.</p>
                <p className="text-xs font-semibold" style={{ color: colors.maroon }}>→ R600 invested at 8% = R648 next year</p>
              </div>

              {/* Myth 1 */}
              <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: colors.softPeach, borderColor: colors.coralAccent }}>
                <h3 className="font-bold mb-2" style={{ color: colors.charcoal }}>Myth of the Week</h3>
                <p className="text-sm mb-3" style={{ color: colors.charcoal }}>"You need big money to start saving."</p>
                <p className="text-xs" style={{ color: colors.charcoal }}><strong>Truth:</strong> R50/week = R2,600/year. That's real wealth building.</p>
              </div>

              {/* Stat 1 */}
              <div className="p-6 rounded-lg border-l-4" style={{ backgroundColor: colors.softPeach, borderColor: colors.coralAccent }}>
                <h3 className="font-bold mb-2" style={{ color: colors.charcoal }}>Did You Know?</h3>
                <p className="text-sm mb-3" style={{ color: colors.charcoal }}>70% of South Africans <strong>can</strong> save – they just don't know how to start.</p>
                <p className="text-xs font-semibold" style={{ color: colors.maroon }}>You can be in that 70%. Let's start.</p>
              </div>
            </div>
          </div>
        </section>

        {/* MONEY SMARTS CORNER - EDUCATION HUBS */}
        <section id="money-smarts" className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>Your Money, Made Simple</h2>
              <p style={{ color: colors.warmGrey }}>Accordion tabs for easy learning – click to explore.</p>
            </div>

            <div className="space-y-3">
              {/* Accordion 1: Starting From Zero */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("starting-zero")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "starting-zero" ? colors.mintCalm + "15" : "transparent" }}
                >
                  <span className="font-bold text-left" style={{ color: colors.charcoal }}>Starting From Zero</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "starting-zero" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "starting-zero" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.mintCalm + "05", borderColor: colors.sandLight }}>
                    <p className="text-sm" style={{ color: colors.charcoal }}><strong>For beginners:</strong> Opening a bank account, saving your first R100, understanding interest.</p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>Real example:</p>
                    <p className="text-xs" style={{ color: colors.charcoal }}>Save R100/month → R1,200/year. At 5% interest = R1,260. That's R60 you didn't work for.</p>
                    <div className="bg-white p-3 rounded text-xs mt-3" style={{ backgroundColor: colors.white }}>
                      <p className="font-semibold mb-1" style={{ color: colors.maroon }}>Jargon Glossary:</p>
                      <p><strong>"Interest"</strong> = Money the bank pays you for letting them use your money</p>
                      <p><strong>"Principal"</strong> = Your original R100 saved</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 2: Rural & Remote Guide */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("rural")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "rural" ? colors.mintCalm + "15" : "transparent" }}
                >
                  <span className="font-bold text-left" style={{ color: colors.charcoal }}>Rural & Remote Guide</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "rural" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "rural" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.mintCalm + "05", borderColor: colors.sandLight }}>
                    <p className="text-sm" style={{ color: colors.charcoal }}><strong>Cash-based economy tips:</strong> Managing money without debit orders, when to use stokvels, handling seasonal income.</p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>Real scenario:</p>
                    <p className="text-xs" style={{ color: colors.charcoal }}>You earn R300 from selling vegetables. Put R50 in a stokvel = shared savings safety net. Your R250 covers food.</p>
                    <div className="bg-white p-3 rounded text-xs mt-3" style={{ backgroundColor: colors.white }}>
                      <p className="font-semibold mb-1" style={{ color: colors.maroon }}>What's a Stokvel?</p>
                      <p>Group savings where everyone contributes R50/week, and one person gets the full pot each month. Your turn = R2,400 cash boost.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Small Income Solutions */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("small-income")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "small-income" ? colors.mintCalm + "15" : "transparent" }}
                >
                  <span className="font-bold text-left" style={{ color: colors.charcoal }}>Small Income Solutions</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "small-income" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "small-income" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.mintCalm + "05", borderColor: colors.sandLight }}>
                    <p className="text-sm" style={{ color: colors.charcoal }}><strong>Budget on R3-5k/month:</strong> Avoiding predatory lending, managing debt on low income, the system is hard but here's how.</p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>Monthly budget breakdown (R5,000):</p>
                    <p className="text-xs" style={{ color: colors.charcoal }}>Rent R2,000 | Food R1,500 | Transport R500 | Savings R250 | Buffer R250 = Planned, not panicked.</p>
                    <div className="bg-white p-3 rounded text-xs mt-3" style={{ backgroundColor: colors.white }}>
                      <p className="font-semibold mb-1" style={{ color: colors.maroon }}>Avoid These Traps:</p>
                      <p>❌ Payday loans (100%+ interest) | ❌ Buy-now-pay-later on food | ❌ Loan sharks</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 4: Know Before You Owe */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("know-before")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "know-before" ? colors.mintCalm + "15" : "transparent" }}
                >
                  <span className="font-bold text-left" style={{ color: colors.charcoal }}>Know Before You Owe</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "know-before" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "know-before" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.mintCalm + "05", borderColor: colors.sandLight }}>
                    <p className="text-sm" style={{ color: colors.charcoal }}><strong>Credit basics:</strong> When borrowing makes sense, what a credit score actually means, prevention is easier than recovery.</p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>Good reason to borrow:</p>
                    <p className="text-xs" style={{ color: colors.charcoal }}>✓ School fees for skills training (you'll earn it back) | ✓ Emergency medical (non-negotiable)</p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>Bad reason to borrow:</p>
                    <p className="text-xs" style={{ color: colors.charcoal }}>✗ Subscription services | ✗ Matching others' spending | ✗ "Expecting a bonus"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* FREE TOOLS - LEARNING TOOLS */}
        <section id="tools" className="py-16 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>Try These Learning Tools</h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Tool 1 */}
              <Card className="border-2 hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-6 w-6" style={{ color: colors.mintCalm }} />
                    <h3 className="font-bold" style={{ color: colors.charcoal }}>Savings Growth Calculator</h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>See how R50/week grows. Reality check: R2,600 → R2,912 at 8%.</p>
                  <Button size="sm" style={{ backgroundColor: colors.maroon, color: colors.white }} asChild>
                    <Link href="/calculator">Try It</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Tool 2 */}
              <Card className="border-2 hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6" style={{ color: colors.mintCalm }} />
                    <h3 className="font-bold" style={{ color: colors.charcoal }}>Debt Review Comparison</h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>Compare consolidation vs debt review. See which saves you more.</p>
                  <Button size="sm" style={{ backgroundColor: colors.maroon, color: colors.white }} asChild>
                    <Link href="/calculator">Compare</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Tool 3 */}
              <Card className="border-2 hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <PiggyBank className="h-6 w-6" style={{ color: colors.mintCalm }} />
                    <h3 className="font-bold" style={{ color: colors.charcoal }}>Money Map</h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>Track where your money goes. Simple, honest breakdown.</p>
                  <Button size="sm" style={{ backgroundColor: colors.maroon, color: colors.white }} asChild>
                    <Link href="/calculator">Track Now</Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Tool 4 */}
              <Card className="border-2 hover:shadow-lg transition-all cursor-pointer" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <Lightbulb className="h-6 w-6" style={{ color: colors.mintCalm }} />
                    <h3 className="font-bold" style={{ color: colors.charcoal }}>Financial Health Quiz</h3>
                  </div>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>5 quick questions. Get your starting point + personalized tips.</p>
                  <Button size="sm" style={{ backgroundColor: colors.maroon, color: colors.white }} asChild>
                    <Link href="#quiz">Start Quiz</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* DEBT REVIEW 101 - EDUCATIONAL SECTION */}
        <section id="debt-101" className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>Debt Review Explained Simply</h2>
              <p style={{ color: colors.warmGrey }}>No sales pitch. Just facts.</p>
            </div>

            <div className="space-y-3 mb-8">
              {/* Accordion 1: What It Is */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("what-is")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "what-is" ? colors.softPeach + "50" : "transparent" }}
                >
                  <span className="font-bold" style={{ color: colors.charcoal }}>What Is Debt Review?</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "what-is" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "what-is" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.softPeach + "20", borderColor: colors.sandLight }}>
                    <p style={{ color: colors.charcoal }}>A legal process where a registered counsellor reviews your debts, negotiates with creditors, and restructures your payments so you can actually afford them.</p>
                    <p className="text-sm font-semibold" style={{ color: colors.maroon }}>It's not:</p>
                    <ul className="text-sm space-y-1" style={{ color: colors.charcoal }}>
                      <li>❌ Bankruptcy</li>
                      <li>❌ Debt erasure ("forgiveness")</li>
                      <li>❌ A sign you're a failure</li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Accordion 2: How It Works */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("how-works")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "how-works" ? colors.softPeach + "50" : "transparent" }}
                >
                  <span className="font-bold" style={{ color: colors.charcoal }}>How It Works (Step by Step)</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "how-works" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "how-works" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.softPeach + "20", borderColor: colors.sandLight }}>
                    <div className="space-y-2">
                      <p className="text-sm"><strong>1. Assessment:</strong> We review your debts, income, expenses.</p>
                      <p className="text-sm"><strong>2. Application:</strong> Submit to the court (free, legal process).</p>
                      <p className="text-sm"><strong>3. Negotiation:</strong> We negotiate lower payments with creditors.</p>
                      <p className="text-sm"><strong>4. Restructuring:</strong> New, affordable payment plan created.</p>
                      <p className="text-sm"><strong>5. Payment:</strong> You pay 1 affordable monthly amount (we distribute).</p>
                      <p className="text-sm"><strong>6. Clearance:</strong> 3-6 years later, you're debt-free + credit-ready.</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Accordion 3: Is It For You? */}
              <div className="border rounded-lg overflow-hidden" style={{ borderColor: colors.sandLight }}>
                <button
                  onClick={() => toggleAccordion("is-for-you")}
                  className="w-full flex items-center justify-between p-4 hover:bg-opacity-5 transition-all"
                  style={{ backgroundColor: expandedAccordion === "is-for-you" ? colors.softPeach + "50" : "transparent" }}
                >
                  <span className="font-bold" style={{ color: colors.charcoal }}>Is It Right For You?</span>
                  <ChevronDown className="h-5 w-5" style={{ color: colors.maroon, transform: expandedAccordion === "is-for-you" ? "rotate(180deg)" : "rotate(0deg)", transition: "transform 0.3s" }} />
                </button>
                {expandedAccordion === "is-for-you" && (
                  <div className="p-4 border-t space-y-3" style={{ backgroundColor: colors.softPeach + "20", borderColor: colors.sandLight }}>
                    <p className="text-sm font-semibold" style={{ color: colors.maroon }}>You might benefit if:</p>
                    <ul className="text-sm space-y-1 mb-3" style={{ color: colors.charcoal }}>
                      <li>✓ You owe R3,000+</li>
                      <li>✓ You're struggling to pay all debts</li>
                      <li>✓ Creditors are calling/threatening</li>
                      <li>✓ You want structured, manageable payments</li>
                    </ul>
                    <p className="text-sm font-semibold" style={{ color: colors.maroon }}>You might NOT need it if:</p>
                    <ul className="text-sm space-y-1" style={{ color: colors.charcoal }}>
                      <li>✗ You can afford all payments comfortably</li>
                      <li>✗ Your debts are under R3,000</li>
                      <li>✗ You just need budgeting help</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Comparison Table */}
            <div className="mt-12">
              <h3 className="font-bold text-lg mb-4" style={{ color: colors.charcoal }}>Debt Review vs Other Options</h3>
              <DebtReviewComparison />
            </div>
          </div>
        </section>

        {/* QUIZ SECTION */}
        <section id="quiz" className="py-16 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>Financial Health Quiz</h2>
              <p style={{ color: colors.warmGrey }}>5 quick questions. No judgment. Just knowledge.</p>
            </div>

            {!quizComplete ? (
              <Card className="border-2" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold" style={{ color: colors.warmGrey }}>
                      Question {currentQuestionIndex + 1} of {quizQuestions.length}
                    </span>
                    <div className="flex gap-1">
                      {quizQuestions.map((_, i) => (
                        <div
                          key={i}
                          className="h-2 w-2 rounded-full"
                          style={{ backgroundColor: i < currentQuestionIndex + 1 ? colors.maroon : colors.sandLight }}
                        />
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-center" style={{ color: colors.charcoal }}>
                    {currentQuestion.statement}
                  </h3>

                  {!showExplanation ? (
                    <div className="flex gap-4 justify-center pt-4">
                      <Button
                        onClick={() => handleQuizAnswer(true)}
                        className="text-white font-semibold"
                        style={{ backgroundColor: colors.maroon }}
                      >
                        True
                      </Button>
                      <Button
                        onClick={() => handleQuizAnswer(false)}
                        variant="outline"
                        className="border-2"
                        style={{ borderColor: colors.maroon, color: colors.maroon }}
                      >
                        False
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg" style={{ backgroundColor: colors.softPeach }}>
                        <p className="text-sm mb-2" style={{ color: colors.charcoal }}>
                          <strong>{quizAnswers[currentQuestionIndex] ? "✓ Correct!" : "✗ Not quite, but now you know:"}</strong>
                        </p>
                        <p style={{ color: colors.charcoal }}>{currentQuestion.explanation}</p>
                      </div>

                      {currentQuestionIndex < quizQuestions.length - 1 && (
                        <Button
                          onClick={handleNextQuestion}
                          className="w-full text-white font-semibold"
                          style={{ backgroundColor: colors.maroon }}
                        >
                          Next Question
                        </Button>
                      )}
                      {currentQuestionIndex === quizQuestions.length - 1 && (
                        <Button
                          onClick={handleNextQuestion}
                          className="w-full text-white font-semibold"
                          style={{ backgroundColor: colors.maroon }}
                        >
                          See Results
                        </Button>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2" style={{ borderColor: colors.mintCalm }}>
                <CardContent className="p-8 space-y-6 text-center">
                  <div className="text-5xl font-bold" style={{ color: colors.maroon }}>
                    {correctAnswers}/{quizQuestions.length}
                  </div>
                  <p className="text-lg" style={{ color: colors.charcoal }}>
                    {correctAnswers === quizQuestions.length
                      ? "Perfect! You're already thinking like a finance pro."
                      : correctAnswers >= 3
                      ? "Great effort! You know more than you thought."
                      : "No worries! That's exactly why we built this site."}
                  </p>
                  <p style={{ color: colors.warmGrey }}>
                    Ready for more? Explore the guides above to deepen your knowledge.
                  </p>
                  <Button
                    onClick={() => {
                      setCurrentQuestionIndex(0)
                      setQuizAnswers([])
                      setShowExplanation(false)
                      setQuizComplete(false)
                    }}
                    className="text-white font-semibold"
                    style={{ backgroundColor: colors.maroon }}
                  >
                    Retake Quiz
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* SUCCESS STORIES - REAL REVIEWS */}
        <section id="reviews" className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>Real People, Real Wins</h2>
              <p style={{ color: colors.warmGrey }}>This is what happens when someone reaches out.</p>
            </div>

            <ReviewsCarousel />

            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-2"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
                asChild
              >
                <Link href="#reviews">
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Your Story
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* PODCAST SECTION */}
        <section id="podcast" className="py-16 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-6xl">
            <PodcastSection />
          </div>
        </section>

        {/* TEAM SECTION */}
        <section id="team" className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>Meet the Team</h2>
              <p style={{ color: colors.warmGrey }}>Real people helping real people. That's it.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 overflow-hidden hover:shadow-lg transition-all" style={{ borderColor: colors.sandLight }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.maroon}, ${colors.softPeach})` }} />
                  <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Samantha Knoesen</h3>
                  <p style={{ color: colors.warmGrey }}>NCR Registered Debt Counsellor | NCRDC3995</p>
                  <p className="text-sm" style={{ color: colors.charcoal }}>Helping South Africans understand money and debt since 2015. Coffee ☕ and honest conversations are my tools.</p>
                  <p className="text-xs font-semibold" style={{ color: colors.maroon }}>Nationwide from Gqeberha – Remote & in-person consultations available</p>
                </CardContent>
              </Card>

              <Card className="border-2 overflow-hidden hover:shadow-lg transition-all" style={{ borderColor: colors.sandLight }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-full h-48 bg-gradient-to-br rounded-lg" style={{ background: `linear-gradient(135deg, ${colors.mintCalm}, ${colors.coralAccent})` }} />
                  <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>You Might Be Here</h3>
                  <p style={{ color: colors.warmGrey }}>Growing Team</p>
                  <p className="text-sm" style={{ color: colors.charcoal }}>We're building a team of financial educators who genuinely care about bridging the financial literacy gap for rural and low-income South Africans.</p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-2"
                    style={{ borderColor: colors.maroon, color: colors.maroon }}
                    asChild
                  >
                    <Link href="/careers">Join Us</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* QUICK CONTACT STRIP */}
        <section id="quick-contact" className="py-12 px-4" style={{ backgroundColor: colors.softPeach }}>
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-2" style={{ color: colors.charcoal }}>Ready to Chat?</h2>
              <p style={{ color: colors.charcoal }}>No pressure. Just a conversation.</p>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
              <Button
                size="lg"
                className="text-white font-semibold w-full md:w-auto"
                style={{ backgroundColor: colors.maroon }}
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 w-full md:w-auto"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
                asChild
              >
                <a href="tel:+27719006298">
                  <Phone className="mr-2 h-5 w-5" />
                  Call 071 900 6298
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-2 w-full md:w-auto"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
                asChild
              >
                <a href="mailto:info@dcsam.co.za">
                  <Mail className="mr-2 h-5 w-5" />
                  Email
                </a>
              </Button>
            </div>

            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.maroon }}>
                  <Check className="w-5 h-5 text-white" />
                </div>
                <span className="text-sm" style={{ color: colors.charcoal }}>NCR Registered • NCRDC3995</span>
              </div>

              {/* Insurance Partners */}
              <div className="flex items-center justify-center gap-4 pt-3">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FFW_Horizontal_Logo.png-4iWA5aRAI4E5D4yawATMO5nUy0dg1Q.jpeg" alt="First for Women" className="h-6 w-auto" />
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auto-general-new-logo%20%281%29-vYRMIPexeVI34Dm8wDBMeHo4HHGp3P.png" alt="Auto & General" className="h-6 w-auto" />
              </div>

              <p className="text-xs mt-4" style={{ color: colors.charcoal }}>
                📍 81 6th Avenue, Newton Park, Gqeberha | Nationwide • Remote & In-Person Consultations Available
              </p>

              <p className="text-xs font-semibold" style={{ color: colors.maroon }}>💡 Did you know? Save R10/day = R3,650/year. Start today.</p>
            </div>
          </div>
        </section>

        {/* REVIEW SUBMISSION */}
        <section className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <ReviewSubmission />
          </div>
        </section>
      </main>
    </div>
  )
}

// Import Star icon that's missing
import { Share2, Calculator } from "lucide-react"
