"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function MoneyResetClient() {
  const months = [
    {
      month: 1,
      title: "Honest Assessment",
      subtitle: "Where you actually are",
      description: "Complete your Money Map. See your full financial picture — income, expenses, debts. No judgment, just facts.",
      goals: [
        "Complete Money Map assessment",
        "Identify spending patterns and leaks",
        "List all debts with amounts owed",
        "Calculate your monthly cash flow",
      ],
      tools: ["Money Map", "Debt listing worksheet"],
    },
    {
      month: 2,
      title: "Budget Basics",
      subtitle: "Creating a real plan",
      description: "Build a budget that actually works. Not a restriction — a roadmap that shows where your money goes.",
      goals: [
        "Create a monthly budget based on your actuals",
        "Identify non-negotiables vs flexibility",
        "Find quick wins (subscriptions, leaks)",
        "Set your first micro-savings target",
      ],
      tools: ["Budget template", "Spending tracker"],
    },
    {
      month: 3,
      title: "Debt Strategy",
      subtitle: "Taking control",
      description: "Understand your debt and choose a strategy. Whether it's snowball, avalanche, or negotiation — know your path.",
      goals: [
        "Choose your debt repayment method",
        "Prioritise which debts to attack first",
        "Understand your credit report",
        "Know your options (consolidation, review, etc.)",
      ],
      tools: ["Debt strategy guide", "Credit report review checklist"],
    },
    {
      month: 4,
      title: "Habit Building",
      subtitle: "Making it stick",
      description: "Small changes compound. Build 1-2 money habits that actually work for your life.",
      goals: [
        "Implement a weekly money check-in (10 mins)",
        "Set up automatic transfers to savings",
        "Cancel unused subscriptions",
        "Create a trigger replacement for impulse spending",
      ],
      tools: ["Habit tracker", "Replacement activities list"],
    },
    {
      month: 5,
      title: "Emergency Buffer",
      subtitle: "Financial safety net",
      description: "Build your first emergency fund (R1,000–R3,000). It stops emergencies becoming more debt.",
      goals: [
        "Save your first R1,000",
        "Know where to draw from in real emergencies",
        "Build to 1–2 months of essentials",
        "Protect your buffer from temptation",
      ],
      tools: ["Savings goal tracker", "Emergency plan worksheet"],
    },
    {
      month: 6,
      title: "Moving Forward",
      subtitle: "Your ongoing reset",
      description: "You've built momentum. The reset isn't over — it's now your system. Know what's next.",
      goals: [
        "Review your 6-month progress",
        "Adjust habits that aren't working",
        "Set your next 6-month goal",
        "Know when to get professional help",
      ],
      tools: ["6-month reflection guide", "Next steps roadmap"],
    },
  ]

  const benefits = [
    {
      emoji: "🎯",
      title: "Structured Path",
      description: "Month-by-month clarity. You know what to focus on and when.",
    },
    {
      emoji: "💪",
      title: "Real Habits",
      description: "Not quick fixes. Habits that stick because they're built on your actual life.",
    },
    {
      emoji: "🛡️",
      title: "Expert Backing",
      description: "Debt counsellor-designed. Based on what actually works for over-indebted people.",
    },
    {
      emoji: "📊",
      title: "Measurable Progress",
      description: "Track your wins. See debt shrink, savings grow, stress decrease.",
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
              Money Reset Program
            </h1>
            <p className="text-xl mb-6" style={{ color: colors.warmGrey }}>
              A structured 6-month journey to rebuild your finances — with real steps, real tools, and real support.
            </p>
            <p className="text-lg font-semibold" style={{ color: colors.maroon }}>
              This is for people who are serious about changing their money situation.
            </p>
          </div>

          {/* Quick Overview */}
          <div className="grid sm:grid-cols-2 gap-4 mb-8">
            {benefits.map((benefit, i) => (
              <Card
                key={i}
                className="border-2"
                style={{ borderColor: colors.sandLight, borderRadius: "14px" }}
              >
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3">{benefit.emoji}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.charcoal }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: colors.warmGrey }}>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Program Timeline */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-2 text-center" style={{ color: colors.charcoal }}>
              Your 6-Month Journey
            </h2>
            <p className="text-center" style={{ color: colors.warmGrey }}>
              Each month has a clear focus. You'll build skills that compound over time.
            </p>
          </div>

          <div className="space-y-6">
            {months.map((item, idx) => (
              <Card
                key={idx}
                className="border-2 overflow-hidden"
                style={{ borderColor: colors.sandLight }}
              >
                <CardHeader style={{ backgroundColor: colors.sandLight + "40", borderBottom: `2px solid ${colors.sandLight}` }}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-3xl font-bold" style={{ color: colors.maroon }}>
                          Month {item.month}
                        </span>
                        <CheckCircle2 className="h-6 w-6" style={{ color: colors.maroon, opacity: 0.5 }} />
                      </div>
                      <CardTitle className="text-2xl" style={{ color: colors.charcoal }}>
                        {item.title}
                      </CardTitle>
                      <CardDescription className="text-base mt-1" style={{ color: colors.warmGrey }}>
                        {item.subtitle}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="mb-4" style={{ color: colors.warmGrey }}>
                    {item.description}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                        Your Focus
                      </h4>
                      <ul className="space-y-1">
                        {item.goals.map((goal, i) => (
                          <li key={i} className="text-sm flex gap-2" style={{ color: colors.charcoal }}>
                            <span style={{ color: colors.maroon }}>✓</span>
                            <span>{goal}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                        Tools & Resources
                      </h4>
                      <ul className="space-y-1">
                        {item.tools.map((tool, i) => (
                          <li key={i} className="text-sm flex gap-2" style={{ color: colors.charcoal }}>
                            <span style={{ color: colors.maroon }}>📋</span>
                            <span>{tool}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-16 px-4" style={{ backgroundColor: colors.softPeach + "20" }}>
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
            Why This Reset Works
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                title: "It's Progressive",
                description: "You don't tackle everything at once. Month 1 is assessment, Month 2 is planning, Month 3 is strategy. You build on each win.",
              },
              {
                title: "It's Real",
                description: "No shame. No quick-fix nonsense. This is what actually works for people who are over-indebted.",
              },
              {
                title: "It's Specific",
                description: "Not 'save more money' — it's 'save R20 this week by cancelling this subscription.' Concrete steps.",
              },
              {
                title: "It's Supported",
                description: "You get worksheets, tools, and expert guidance. At any point, you can WhatsApp for help.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-2" style={{ borderColor: colors.sandLight }}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-2" style={{ color: colors.maroon }}>
                    {item.title}
                  </h3>
                  <p style={{ color: colors.warmGrey }}>{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold mb-8 text-center" style={{ color: colors.charcoal }}>
            Common Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "How much does the Money Reset Program cost?",
                a: "The program is free. We provide all worksheets, guides, and resources. You're paying attention and effort — that's the real investment.",
              },
              {
                q: "Do I need to be in debt review to do this?",
                a: "No. This program works whether you're managing on your own, in debt review, or considering it. It's your foundation.",
              },
              {
                q: "What if I'm already doing some of these steps?",
                a: "Perfect. Start where you are. If you've already done the Money Map, start with Month 2. Use what works for your situation.",
              },
              {
                q: "Can I do this with a partner/spouse?",
                a: "Absolutely. In fact, it's more powerful together. Many couples find that working through this together improves both finances and communication.",
              },
              {
                q: "What if I slip up or can't keep up?",
                a: "You won't be perfect. Nobody is. The program is about building momentum, not perfection. If you miss a month, you just pick it back up.",
              },
              {
                q: "How do I know if this is working?",
                a: "You'll track metrics in Month 6. But you'll notice earlier: smaller stress, clearer picture, specific actions instead of worry.",
              },
            ].map((item, i) => (
              <Card key={i} className="border-2" style={{ borderColor: colors.sandLight }}>
                <CardHeader style={{ paddingBottom: "1rem" }}>
                  <CardTitle className="text-lg" style={{ color: colors.maroon }}>
                    {item.q}
                  </CardTitle>
                </CardHeader>
                <CardContent style={{ paddingTop: 0 }}>
                  <p style={{ color: colors.warmGrey }}>{item.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4" style={{ color: colors.charcoal }}>
            Ready to Reset?
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.warmGrey }}>
            Start with Month 1: Complete your Money Map and get honest about where you stand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white font-semibold shadow-md hover:shadow-lg"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="/money-clarity-hub">
                Take Money Map
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              className="font-semibold shadow-sm hover:shadow-md"
              style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                Ask Questions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
          <p className="text-sm mt-6" style={{ color: colors.warmGrey }}>
            Free program. No strings. Just a structured way to rebuild your finances.
          </p>
        </div>
      </section>
    </main>
  )
}
