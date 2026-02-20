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
import { PodcastSection } from "@/components/podcast-section"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { brandCopy } from "@/lib/brandCopy"
import { 
  Calculator,
  ArrowRight,
  Star,
  Shield,
  Heart,
  CheckCircle,
  TrendingDown,
  Phone,
  MessageCircle,
  Mail
} from "lucide-react"

export function HomeClient() {
  const [quizAnswers, setQuizAnswers] = useState<Record<number, boolean | null>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)

  const quizQuestions = [
    { id: 1, statement: "Debt review is only for people who 'failed' with money.", answer: false },
    { id: 2, statement: "Debt review gives you legal protection from creditors.", answer: true },
    { id: 3, statement: "You'll never get credit again, ever.", answer: false },
    { id: 4, statement: "Debt review can reduce interest rates through negotiation (case by case).", answer: true },
    { id: 5, statement: "Debt review is a quick 1-week fix.", answer: false },
    { id: 6, statement: "A budget and behaviour change matter, or the same stress returns.", answer: true },
    { id: 7, statement: "You can keep your car/house automatically no matter what.", answer: false },
    { id: 8, statement: "A structured plan can make repayments more realistic for a household.", answer: true },
    { id: 9, statement: "It's better to ignore creditors until you're ready.", answer: false },
    { id: 10, statement: "Asking for help early usually gives you more options.", answer: true },
  ]

  const handleQuizSubmit = () => {
    setQuizSubmitted(true)
  }

  const calculateScore = () => {
    let correct = 0
    quizQuestions.forEach((q) => {
      if (quizAnswers[q.id] === q.answer) correct++
    })
    return correct
  }

  const getScoreMessage = (score: number) => {
    if (score <= 3) return "No stress — most people start here. Want the simple version? Let's chat."
    if (score <= 7) return "You're getting it. A few truths can change everything."
    return "Look at you — basically honorary debt counsellor."
  }

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 px-4 bg-gradient-to-br from-white to-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance text-[#0D3B66]">
                Debt struggles are real.<br />So is the way out.
              </h1>
              
              <p className="text-xl md:text-2xl text-[#0D3B66]/70 max-w-3xl mx-auto leading-relaxed">
                Calm support. Clear options. Zero judgment.
              </p>

              <p className="text-lg text-[#0D3B66]/60 max-w-2xl mx-auto text-pretty leading-relaxed">
                Debt can feel heavy — and it's not just the numbers. At DCSA Debt Counselling & Credit Repair, we help you understand your options properly and choose what fits your life. No lectures. No pressure. Just real help.
              </p>

              <p className="text-base italic text-[#0D3B66]/50 pt-2">
                "Pop the kettle on — we'll figure this out together."
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button 
                  size="lg" 
                  className="bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white text-base px-8 h-12 font-semibold"
                  asChild
                >
                  <Link href="/calculator">
                    {brandCopy.buttons.startFreeTools}
                  </Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5 text-base px-8 h-12 font-semibold"
                  asChild
                >
                  <Link href="/contact">
                    {brandCopy.buttons.bookGentle}
                  </Link>
                </Button>
              </div>

              <p className="text-sm text-[#0D3B66]/50 pt-4">
                {brandCopy.reassurance.firstStepHardest}
              </p>
            </div>
          </div>
        </section>

        {/* Gentle First Step Section */}
        <section className="py-16 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                The first step is usually the hardest (reaching out).
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                If you're nervous to message, that's normal. You don't have to commit to anything today — you can ask a question first. We'll help you make sense of things, calmly.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/5"
                asChild
              >
                <a href="https://wa.me/27719006298">
                  <MessageCircle className="h-6 w-6" />
                  <span className="font-semibold">{brandCopy.buttons.whatsAppUs}</span>
                </a>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-2 border-[#0D3B66] text-[#0D3B66] hover:bg-[#0D3B66]/5"
                asChild
              >
                <Link href="/contact">
                  <Phone className="h-6 w-6" />
                  <span className="font-semibold">{brandCopy.buttons.requestCallback}</span>
                </Link>
              </Button>

              <Button
                variant="outline"
                className="h-auto py-6 flex-col gap-2 border-2 border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                asChild
              >
                <Link href="/contact">
                  <Mail className="h-6 w-6" />
                  <span className="font-semibold">{brandCopy.buttons.askQuestion}</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Debt Review vs Other Options */}
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

            <div className="grid md:grid-cols-2 gap-6 mt-12">
              <Card className="border-2 border-[#4DB6AC]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-3">When debt review might fit:</h3>
                  <ul className="space-y-2 text-[#0D3B66]/70">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" /> Over-indebted and struggling to keep up</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" /> Need legal protection from creditors</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" /> Want one structured monthly payment</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" /> Willing to commit to the process (not quick)</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-[#FFD93D]/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-3">When another option might fit:</h3>
                  <ul className="space-y-2 text-[#0D3B66]/70">
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#FFD93D] flex-shrink-0 mt-0.5" /> Debt is manageable with better budgeting</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#FFD93D] flex-shrink-0 mt-0.5" /> You can negotiate directly with creditors</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#FFD93D] flex-shrink-0 mt-0.5" /> Need credit repair instead</li>
                    <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-[#FFD93D] flex-shrink-0 mt-0.5" /> Just need guidance on next steps</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Free Tools / Calculators */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Start With Clarity (Free Tools)
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                You don't need pressure — you need numbers that make sense.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-[#4DB6AC]/10 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-[#4DB6AC]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0D3B66]">Interest Calculator</h3>
                  <p className="text-[#0D3B66]/70 text-pretty">
                    Interest doesn't just add cost — it stretches your repayment timeline. This shows how your rate affects how long you'll pay and the total you'll repay.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                    asChild
                  >
                    <Link href="/calculator/interest">
                      Open Calculator
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
                  <p className="text-[#0D3B66]/70 text-pretty">
                    A rough idea of what you could save under a structured plan. It's an estimate — not a promise — but it helps you plan with less stress.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
                    asChild
                  >
                    <Link href="/calculator/savings">
                      Estimate Savings
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
                  <p className="text-[#0D3B66]/70 text-pretty">
                    Find where your money is "disappearing" — subscriptions, debit orders and small spends that add up quietly. Awareness first. No guilt.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/5"
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

        {/* Myth vs Truth Quiz */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FFE5D9]/20 to-[#4DB6AC]/10">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Debt Review: Myth vs Truth (Quick Quiz)
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                See what you think you know — then we'll show the real story.
              </p>
            </div>

            {!quizSubmitted ? (
              <Card className="border-2">
                <CardContent className="p-8 space-y-6">
                  {quizQuestions.map((q) => (
                    <div key={q.id} className="space-y-3">
                      <p className="text-[#0D3B66] font-medium">
                        {q.id}. {q.statement}
                      </p>
                      <div className="flex gap-3">
                        <Button
                          variant={quizAnswers[q.id] === false ? "default" : "outline"}
                          className={quizAnswers[q.id] === false ? "bg-[#FF6B6B]" : ""}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: false })}
                        >
                          Myth
                        </Button>
                        <Button
                          variant={quizAnswers[q.id] === true ? "default" : "outline"}
                          className={quizAnswers[q.id] === true ? "bg-[#4DB6AC]" : ""}
                          onClick={() => setQuizAnswers({ ...quizAnswers, [q.id]: true })}
                        >
                          Truth
                        </Button>
                      </div>
                    </div>
                  ))}

                  <Button
                    className="w-full bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold mt-6"
                    onClick={handleQuizSubmit}
                    disabled={Object.keys(quizAnswers).length < 10}
                  >
                    See My Score
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2 border-[#4DB6AC]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="text-6xl font-bold text-[#4DB6AC]">
                    {calculateScore()}/10
                  </div>
                  <p className="text-xl text-[#0D3B66]">
                    {getScoreMessage(calculateScore())}
                  </p>
                  <Button
                    className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold mt-4"
                    asChild
                  >
                    <Link href="/contact">{brandCopy.buttons.bookGentle}</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="mt-2"
                    onClick={() => {
                      setQuizAnswers({})
                      setQuizSubmitted(false)
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
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-5xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Learn before you commit
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                Not ready to talk yet? Start here — plain language, real examples, zero judgment.
              </p>
            </div>

            <PodcastSection />
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-20 px-4" id="team">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-4">
                Meet the Team (Real humans. Real help.)
              </h2>
              <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
                Money stress is personal. So are the people helping you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Samantha Knoesen */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samantha%20Knoesen-zlxVpIfJywphHAY49B8OIP2cPOMERC.jpeg"
                      alt="Samantha Knoesen"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D3B66]">Samantha Knoesen</h3>
                    <p className="text-sm text-[#0D3B66]/60 mb-2">Founder & Lead Debt Counsellor (NCRDC3995)</p>
                    <p className="text-[#0D3B66]/70 text-sm text-pretty">
                      Calm, compassionate, straight-talking guidance. No judgement. No pressure. Clarity and a plan that fits real life.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Kadene Jacobs */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kadene%20Jacobs-eaOdK976xbXlTFUbIAAIKcTYkd4AyF.jpeg"
                      alt="Kadene Jacobs"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D3B66]">Kadene Jacobs</h3>
                    <p className="text-sm text-[#0D3B66]/60 mb-2">Client Support & Admin</p>
                    <p className="text-[#0D3B66]/70 text-sm text-pretty">
                      Big heart, goes the extra mile, keeps clients supported and informed. Makes the process feel less scary.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Cindy Killian */}
              <Card className="border-2 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4 text-center">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gray-100">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cindy%20Killian-UHBBj8O6PjgOof416Xu6k8OvrJVmbT.jpeg"
                      alt="Cindy Killian"
                      width={128}
                      height={128}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#0D3B66]">Cindy Killian</h3>
                    <p className="text-sm text-[#0D3B66]/60 mb-2">Admitted Attorney, Cindy Killian Attorneys (Legal Partner)</p>
                    <p className="text-[#0D3B66]/70 text-sm text-pretty">
                      Strong legal guidance with real empathy and life experience. Clear, grounded support when legal steps are needed.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Reviews */}
        <section className="py-20 px-4 bg-gray-50" id="reviews">
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

        {/* Refer a Friend */}
        <section className="py-20 px-4">
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

        {/* Final CTA */}
        <section className="py-20 px-4 bg-gradient-to-br from-[#FFE5D9]/30 to-[#4DB6AC]/10">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-2 border-[#0D3B66]/20">
              <CardContent className="p-10 md:p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-[#0D3B66] mb-6 text-balance">
                  Let's talk (no pressure)
                </h2>
                
                <p className="text-lg text-[#0D3B66]/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Coffee in Gqeberha or online anywhere — whichever feels easier. Bring your questions. We'll bring clarity (and kindness).
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg"
                    className="bg-[#25D366] hover:bg-[#25D366]/90 text-white font-semibold"
                    asChild
                  >
                    <a href="https://wa.me/27719006298">
                      <MessageCircle className="mr-2 h-5 w-5" />
                      {brandCopy.buttons.whatsAppUs}
                    </a>
                  </Button>
                  <Button 
                    size="lg"
                    className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold"
                    asChild
                  >
                    <Link href="/contact">
                      {brandCopy.buttons.bookChat}
                    </Link>
                  </Button>
                </div>
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
