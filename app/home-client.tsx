"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DebtReviewComparison } from "@/components/debt-review-comparison"
import { PodcastSection } from "@/components/podcast-section"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { brandCopy } from "@/lib/brandCopy"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { 
  Calculator,
  ArrowRight,
  Star,
  Shield,
  Heart,
  CheckCircle,
  TrendingDown,
  Coffee,
  MessageCircle,
  Mail,
  Share2,
  Check,
  X,
  ChevronRight
} from "lucide-react"

export function HomeClient() {
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([])
  const [showExplanation, setShowExplanation] = useState(false)
  const [quizComplete, setQuizComplete] = useState(false)
  const [shareMessage, setShareMessage] = useState("")

  // Quick message form state
  const [formData, setFormData] = useState({ name: "", mobile: "", message: "", consent: false })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSuccess, setFormSuccess] = useState(false)
  const [formError, setFormError] = useState("")

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

  const currentQuestion = quizQuestions[currentQuestionIndex]

  const handleQuizAnswer = (userAnswer: boolean) => {
    const isCorrect = userAnswer === currentQuestion.answer
    setQuizAnswers([...quizAnswers, isCorrect])
    setShowExplanation(true)
  }

  const handleNext = () => {
    setShowExplanation(false)
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1)
    } else {
      setQuizComplete(true)
    }
  }

  const calculateScore = () => {
    return quizAnswers.filter(Boolean).length
  }

  const getScoreMessage = (score: number) => {
    if (score <= 2) return "No stress — everyone starts somewhere. Let's chat about what's actually true."
    if (score === 3 || score === 4) return "You're getting it! A few truths can change everything."
    return "Look at you — basically honorary debt counsellor. ☕"
  }

  const handleShare = async () => {
    const score = calculateScore()
    const message = `I scored ${score}/5 on DCSA's Myth Buster ☕ — turns out I didn't know this about debt review... https://www.dcsam.co.za?score=${score}`
    
    if (navigator.share) {
      try {
        await navigator.share({ text: message })
      } catch (err) {
        // Fallback to clipboard
        navigator.clipboard.writeText(message)
        setShareMessage("Copied to clipboard!")
        setTimeout(() => setShareMessage(""), 2000)
      }
    } else {
      navigator.clipboard.writeText(message)
      setShareMessage("Copied to clipboard!")
      setTimeout(() => setShareMessage(""), 2000)
    }
  }

  const handleQuickMessageSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormError("")
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/quick-message", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (!response.ok) {
        setFormError(result.message || "Something went wrong. Please try WhatsApp.")
        setIsSubmitting(false)
        return
      }

      setFormSuccess(true)
    } catch {
      setFormError("Connection error. Please try WhatsApp or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.warmCream }}>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance" style={{ color: colors.charcoal }}>
                Debt struggles are real.<br />So is the way out.
              </h1>
              
              <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed" style={{ color: colors.warmGrey }}>
                Calm support. Clear options. Zero judgment.
              </p>

              <p className="text-lg max-w-2xl mx-auto text-pretty leading-relaxed" style={{ color: colors.warmGrey }}>
                Debt can feel heavy — and it's not just the numbers. At DCSA Debt Counselling & Credit Repair, we help you understand your options properly and choose what fits your life. No lectures. No pressure. Just real help.
              </p>

              <p className="text-base italic pt-2" style={{ color: colors.warmGrey }}>
                "Pop the kettle on — we'll figure this out together."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="text-white text-base px-8 h-14 font-semibold shadow-lg hover:shadow-xl transition-all items-center gap-2"
                  style={{ backgroundColor: colors.whatsapp, borderRadius: "14px" }}
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    <Coffee className="h-5 w-5" />
                    WhatsApp Us (Coffee optional ☕)
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-base px-8 h-14 font-semibold border-2 shadow-md hover:shadow-lg transition-all"
                  style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "14px" }}
                  asChild
                >
                  <Link href="#quick-message">
                    Send a Quick Message
                  </Link>
                </Button>
              </div>

              <p className="text-sm pt-4" style={{ color: colors.warmGrey }}>
                No pressure. Tell us what's going on — we'll reply as soon as we can.
              </p>

              <p className="text-xs pt-2" style={{ color: colors.warmGrey }}>
                {brandCopy.reassurance.firstStepHardest}
              </p>
            </div>
          </div>

          {/* Subtle decorative blob */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none" style={{ background: `radial-gradient(circle, ${colors.softPeach} 0%, transparent 70%)` }}></div>
        </section>

        {/* Quick Message Form */}
        <section className="py-16 px-4" id="quick-message" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-2xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Send a Quick Message
              </h2>
              <p className="text-lg" style={{ color: colors.warmGrey }}>
                Not ready to call? No problem. Drop us a message and we'll get back to you.
              </p>
            </div>

            {!formSuccess ? (
              <Card className="border-2 shadow-lg" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-8">
                  <form onSubmit={handleQuickMessageSubmit} className="space-y-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: colors.charcoal }}>Your Name</label>
                      <Input
                        type="text"
                        placeholder="e.g. Sarah"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: colors.charcoal }}>Your Mobile</label>
                      <Input
                        type="tel"
                        placeholder="e.g. 071 234 5678"
                        value={formData.mobile}
                        onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
                        required
                        style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block" style={{ color: colors.charcoal }}>What's on your mind?</label>
                      <Textarea
                        placeholder="Tell us briefly what's going on — we'll take it from there."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                      />
                    </div>

                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => setFormData({ ...formData, consent: checked === true })}
                        required
                      />
                      <label htmlFor="consent" className="text-sm leading-relaxed" style={{ color: colors.warmGrey }}>
                        I consent to DCSA contacting me via phone or WhatsApp to discuss my options. (We won't spam you.)
                      </label>
                    </div>

                    {formError && (
                      <div className="text-sm p-3 rounded-lg" style={{ backgroundColor: colors.softPeach, color: colors.charcoal }}>
                        {formError}
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting || !formData.consent}
                      className="w-full h-14 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                      style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 shadow-lg" style={{ borderColor: colors.mintCalm, borderRadius: "16px" }}>
                <CardContent className="p-12 text-center space-y-4">
                  <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center" style={{ backgroundColor: colors.mintCalm }}>
                    <Check className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold" style={{ color: colors.charcoal }}>
                    You did the hard part.
                  </h3>
                  <p className="text-lg" style={{ color: colors.warmGrey }}>
                    We'll get back to you ASAP. Usually within a few hours during business hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4"
                    style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "10px" }}
                    asChild
                  >
                    <Link href="/">Back to Home</Link>
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Debt Review vs Other Options */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                No pressure — here's how to think about your options
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                Every situation is different. Here's what typically fits where.
              </p>
            </div>

            <DebtReviewComparison />

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="border-2 shadow-md" style={{ borderColor: colors.mintCalm, borderRadius: "16px" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.charcoal }}>When debt review might fit:</h3>
                  <ul className="space-y-2" style={{ color: colors.warmGrey }}>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.mintCalm }} /> Over-indebted and struggling to keep up</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.mintCalm }} /> Need legal protection from creditors</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.mintCalm }} /> Want one structured monthly payment</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.mintCalm }} /> Willing to commit to the process (not quick)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 shadow-md" style={{ borderColor: colors.coralAccent, borderRadius: "16px" }}>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3" style={{ color: colors.charcoal }}>When another option might fit:</h3>
                  <ul className="space-y-2" style={{ color: colors.warmGrey }}>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.coralAccent }} /> Debt is manageable with better budgeting</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.coralAccent }} /> You can negotiate directly with creditors</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.coralAccent }} /> Need credit repair instead</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.coralAccent }} /> Just need guidance on next steps</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Free Tools / Calculators */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Start With Clarity (Free Tools)
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                You don't need pressure — you need numbers that make sense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.mintCalm}20` }}>
                    <Calculator className="w-6 h-6" style={{ color: colors.mintCalm }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Interest Calculator</h3>
                  <p className="text-pretty" style={{ color: colors.warmGrey }}>
                    Interest doesn't just add cost — it stretches your repayment timeline. This shows how your rate affects how long you'll pay.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:shadow-md transition-all"
                    style={{ borderColor: colors.mintCalm, color: colors.mintCalm, borderRadius: "10px" }}
                    asChild
                  >
                    <Link href="/calculator/interest">
                      Open Calculator
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.mintCalm}20` }}>
                    <TrendingDown className="w-6 h-6" style={{ color: colors.mintCalm }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Potential Savings Calculator</h3>
                  <p className="text-pretty" style={{ color: colors.warmGrey }}>
                    A rough idea of what you could save under a structured plan. It's an estimate — not a promise — but it helps you plan with less stress.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:shadow-md transition-all"
                    style={{ borderColor: colors.mintCalm, color: colors.mintCalm, borderRadius: "10px" }}
                    asChild
                  >
                    <Link href="/calculator/savings">
                      Estimate Savings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${colors.mintCalm}20` }}>
                    <CheckCircle className="w-6 h-6" style={{ color: colors.mintCalm }} />
                  </div>
                  <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Money Map</h3>
                  <p className="text-pretty" style={{ color: colors.warmGrey }}>
                    Find where your money is "disappearing" — subscriptions, debit orders and small spends that add up quietly. Awareness first. No guilt.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-2 hover:shadow-md transition-all"
                    style={{ borderColor: colors.mintCalm, color: colors.mintCalm, borderRadius: "10px" }}
                    asChild
                  >
                    <Link href="/calculator/money-map">
                      Use Money Map
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Myth Buster Quiz */}
        <section className="py-20 px-4" style={{ background: `linear-gradient(135deg, ${colors.softPeach}40 0%, ${colors.mintCalm}20 100%)` }}>
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Myth Buster ☕ (Quick & Painless)
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                5 quick questions. See what you think you know — then we'll show the real story.
              </p>
            </div>

            {!quizComplete ? (
              <Card className="border-2 shadow-xl" style={{ borderColor: colors.sandLight, borderRadius: "20px" }}>
                <CardContent className="p-8 md:p-12">
                  {/* Progress indicator */}
                  <div className="mb-8">
                    <div className="text-sm font-medium mb-2" style={{ color: colors.warmGrey }}>
                      Question {currentQuestionIndex + 1} of 5
                    </div>
                    <div className="w-full h-2 rounded-full" style={{ backgroundColor: colors.sandLight }}>
                      <div 
                        className="h-2 rounded-full transition-all duration-300" 
                        style={{ 
                          backgroundColor: colors.mintCalm, 
                          width: `${((currentQuestionIndex + 1) / 5) * 100}%` 
                        }}
                      />
                    </div>
                  </div>

                  {!showExplanation ? (
                    <div className="space-y-6">
                      <p className="text-xl md:text-2xl font-semibold text-balance" style={{ color: colors.charcoal }}>
                        {currentQuestion.statement}
                      </p>
                      
                      <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button
                          className="flex-1 h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                          style={{ backgroundColor: colors.coralAccent, color: colors.white, borderRadius: "14px" }}
                          onClick={() => handleQuizAnswer(false)}
                        >
                          <X className="mr-2 h-6 w-6" />
                          Myth
                        </Button>
                        <Button
                          className="flex-1 h-16 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
                          style={{ backgroundColor: colors.mintCalm, color: colors.white, borderRadius: "14px" }}
                          onClick={() => handleQuizAnswer(true)}
                        >
                          <Check className="mr-2 h-6 w-6" />
                          Truth
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-6">
                      <div className="text-center">
                        {quizAnswers[quizAnswers.length - 1] ? (
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: `${colors.mintCalm}20`, color: colors.mintCalm }}>
                            <Check className="h-5 w-5" />
                            <span className="font-semibold">Correct!</span>
                          </div>
                        ) : (
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full" style={{ backgroundColor: `${colors.coralAccent}20`, color: colors.coralAccent }}>
                            <X className="h-5 w-5" />
                            <span className="font-semibold">Not quite</span>
                          </div>
                        )}
                      </div>

                      <p className="text-lg text-center text-pretty leading-relaxed" style={{ color: colors.charcoal }}>
                        {currentQuestion.explanation}
                      </p>

                      <Button
                        className="w-full h-14 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
                        style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                        onClick={handleNext}
                      >
                        {currentQuestionIndex < quizQuestions.length - 1 ? "Next Question" : "See My Score"}
                        <ChevronRight className="ml-2 h-5 w-5" />
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 shadow-xl" style={{ borderColor: colors.mintCalm, borderRadius: "20px" }}>
                <CardContent className="p-12 text-center space-y-6">
                  {/* Screenshot-friendly results card */}
                  <div className="inline-block p-8 rounded-2xl shadow-lg" style={{ backgroundColor: colors.white }}>
                    <div className="text-7xl font-bold mb-2" style={{ color: colors.mintCalm }}>
                      {calculateScore()}/5
                    </div>
                    <div className="text-sm font-semibold mb-4" style={{ color: colors.warmGrey }}>
                      DCSA Myth Buster ☕
                    </div>
                    <div className="flex items-center justify-center gap-2">
                      <span style={{ color: colors.maroon }} className="font-bold">DC</span>
                      <span style={{ color: colors.black }} className="font-bold">SA</span>
                    </div>
                  </div>

                  <p className="text-xl text-pretty" style={{ color: colors.charcoal }}>
                    {getScoreMessage(calculateScore())}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                      className="h-12 text-white font-semibold shadow-lg hover:shadow-xl transition-all items-center gap-2"
                      style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                      onClick={handleShare}
                    >
                      <Share2 className="h-4 w-4" />
                      Share My Score
                    </Button>
                    <Button
                      variant="outline"
                      className="h-12 font-semibold border-2"
                      style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
                      asChild
                    >
                      <Link href="#quick-message">Let's Chat About It</Link>
                    </Button>
                  </div>

                  {shareMessage && (
                    <p className="text-sm" style={{ color: colors.mintCalm }}>
                      {shareMessage}
                    </p>
                  )}

                  <Button
                    variant="ghost"
                    className="mt-4"
                    style={{ color: colors.warmGrey }}
                    onClick={() => {
                      setCurrentQuestionIndex(0)
                      setQuizAnswers([])
                      setShowExplanation(false)
                      setQuizComplete(false)
                    }}
                  >
                    Try Again
                  </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </section>

        {/* Podcast Section */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Learn before you commit
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                Not ready to talk yet? Start here — plain language, real examples, zero judgment.
              </p>
            </div>

            <PodcastSection />
          </div>
        </section>

        {/* Google Reviews */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.white }} id="reviews">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Real reviews from real people
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                Verified Google reviews — no fluff, no fake testimonials.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Thandi M.",
                  rating: 5,
                  text: "I was so stressed about my debt, but Samantha explained everything calmly and helped me see a way forward. No pressure, just real help."
                },
                {
                  name: "Johan V.",
                  rating: 5,
                  text: "Debt review seemed scary but DCSA made it simple. They walked me through every step and I finally feel like I can breathe."
                },
                {
                  name: "Lerato K.",
                  rating: 5,
                  text: "Honestly the best decision I made was calling them. They don't judge, they just help. Professional and kind."
                }
              ].map((review, i) => (
                <Card key={i} className="border-2 shadow-md" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                  <CardContent className="p-6 space-y-3">
                    <div className="flex gap-1">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="w-5 h-5 fill-current" style={{ color: colors.coralAccent }} />
                      ))}
                    </div>
                    <p className="text-pretty" style={{ color: colors.charcoal }}>
                      "{review.text}"
                    </p>
                    <p className="text-sm font-semibold" style={{ color: colors.warmGrey }}>
                      — {review.name}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button
                variant="outline"
                className="border-2"
                style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "10px" }}
                asChild
              >
                <a href="https://g.page/r/YOUR_GOOGLE_BUSINESS_ID/review" target="_blank" rel="noopener noreferrer">
                  See All Google Reviews
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 px-4" id="team" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: colors.charcoal }}>
                Meet the Team (Real humans. Real help.)
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
                Money stress is personal. So are the people helping you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Samantha Knoesen */}
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-md">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samantha%20Knoesen-zlxVpIfJywphHAY49B8OIP2cPOMERC.jpeg"
                      alt="Samantha Knoesen"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Samantha Knoesen</h3>
                    <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>Founder & Lead Debt Counsellor (NCRDC3995)</p>
                    <p className="text-sm text-pretty" style={{ color: colors.warmGrey }}>
                      Calm, compassionate, straight-talking guidance. No judgement. No pressure. Clarity and a plan that fits real life.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Kadene Jacobs */}
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-md">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kadene%20Jacobs-eaOdK976xbXlTFUbIAAIKcTYkd4AyF.jpeg"
                      alt="Kadene Jacobs"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Kadene Jacobs</h3>
                    <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>Debt Counsellor & Client Support</p>
                    <p className="text-sm text-pretty" style={{ color: colors.warmGrey }}>
                      Patient, practical support. She gets it — money stress is real. She'll walk you through every step with care.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cindy Killian */}
              <Card className="border-2 hover:shadow-lg transition-shadow" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-md">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cindy%20Killian-UHBBj8O6PjgOof416Xu6k8OvrJVmbT.jpeg"
                      alt="Cindy Killian"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold" style={{ color: colors.charcoal }}>Cindy Killian</h3>
                    <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>Debt Counsellor & Client Liaison</p>
                    <p className="text-sm text-pretty" style={{ color: colors.warmGrey }}>
                      Friendly, reliable guidance. Explains things clearly without the jargon. You'll feel heard and supported.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Referral Section */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 shadow-xl" style={{ borderColor: colors.mintCalm, borderRadius: "20px" }}>
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: `${colors.mintCalm}20` }}>
                    <Heart className="w-8 h-8" style={{ color: colors.mintCalm }} />
                  </div>
                  
                  <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.charcoal }}>
                    Know someone who could use help?
                  </h2>

                  <p className="text-lg leading-relaxed text-pretty" style={{ color: colors.warmGrey }}>
                    A friend referred me, and now I can breathe again. If someone you care about is drowning in debt and feeling alone, you can be the one who throws them a lifeline. Send them our way — we'll take care of them with the same care and respect we show everyone.
                  </p>

                  <p className="text-lg font-semibold" style={{ color: colors.charcoal }}>
                    Plus, we pay you R350 for every successful referral.
                  </p>

                  <Button
                    size="lg"
                    className="h-14 text-white font-semibold shadow-lg hover:shadow-xl transition-all px-8"
                    style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    asChild
                  >
                    <Link href="/refer-a-friend">
                      Refer a Friend
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4" style={{ backgroundColor: colors.warmBeige }}>
          <div className="container mx-auto max-w-3xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: colors.charcoal }}>
              Ready to take the first step?
            </h2>
            <p className="text-lg" style={{ color: colors.warmGrey }}>
              We're here. No judgment. Just real help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="h-14 text-white font-semibold shadow-lg hover:shadow-xl transition-all items-center gap-2"
                style={{ backgroundColor: colors.whatsapp, borderRadius: "12px" }}
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <Coffee className="h-5 w-5" />
                  WhatsApp Us Now
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-14 font-semibold border-2"
                style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
                asChild
              >
                <a href="tel:+27719006298">
                  <Phone className="h-5 w-5 mr-2" />
                  Call +27 71 900 6298
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
