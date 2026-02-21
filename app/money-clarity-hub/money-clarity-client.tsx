"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coffee, ArrowRight, Lightbulb } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function MoneyClarityClient() {
  const categories = [
    {
      name: "Debt Basics",
      icon: "📊",
      cards: [
        {
          title: "Why Debt Snowballs",
          summary: "Debt doesn't just sit there. Interest compounds, minimum payments barely touch the principal, and suddenly you owe way more than you borrowed.",
          takeaways: ["Interest on top of interest is the real problem", "Minimum payments keep you trapped", "Time is working against you, but you can fix that"],
        },
        {
          title: "Good Debt vs Bad Debt",
          summary: "Not all debt is created equal. A home loan is different from credit card debt — and understanding why changes how you think about borrowing.",
          takeaways: ["Good debt builds assets (home, education)", "Bad debt funds consumption (holidays you can't afford)", "The interest rate tells the real story"],
        },
        {
          title: "Minimum Payments: What They Do",
          summary: "You know that minimum payment feels manageable? That's by design. Banks make more money when you pay slowly.",
          takeaways: ["Minimum payments are a trap", "Paying only minimums can triple your total interest", "Even small extra payments make a real difference"],
          toolLink: { label: "Try Interest Tool", href: "/calculator" },
        },
      ],
    },
    {
      name: "Credit & Credit Scores (SA)",
      icon: "💳",
      cards: [
        {
          title: "What Affects Your Score",
          summary: "Your credit score is built from real payment history, not magic. Here's what actually moves the needle.",
          takeaways: ["Payment history is 35% of your score", "Credit utilization matters more than you think", "Hard inquiries hurt; soft inquiries don't"],
        },
        {
          title: "Rebuilding After Missed Payments",
          summary: "One bad payment doesn't ruin you forever. Yes, it hurts, but each on-time payment after that rebuilds trust.",
          takeaways: ["Older defaults hurt less over time", "One year of perfect payments helps significantly", "Dispute errors immediately — they're more common than you think"],
        },
        {
          title: "Credit Checks: Soft vs Hard",
          summary: "Not all credit checks are the same. Know the difference so you don't accidentally damage your score.",
          takeaways: ["Soft checks don't affect your score", "Hard checks lower your score by a few points", "Too many hard checks in short time raises red flags"],
        },
      ],
    },
    {
      name: "Debt Review Explained",
      icon: "🛡️",
      cards: [
        {
          title: "What Debt Review Actually Is",
          summary: "Debt review isn't a bailout. It's a legal structure that helps you pay what you owe in a way that actually works.",
          takeaways: ["It's a formal agreement with your creditors", "You still pay back what you owe", "It's for people who are over-indebted, not just behind"],
        },
        {
          title: "Over-Indebted: What It Means",
          summary: "Over-indebted isn't a judgment. It's a legal definition: your debt obligations exceed your ability to pay.",
          takeaways: ["It's measured against your actual income and expenses", "Being over-indebted doesn't mean you're irresponsible", "It means you need restructuring, not shame"],
        },
        {
          title: "Common Myths (and the Truth)",
          summary: "A lot of lies float around about debt review. Here's what's actually real.",
          takeaways: ["Myth: Debt review ruins you forever. Truth: It rebuilds trust over time", "Myth: You lose access to credit. Truth: You regain better access after", "Myth: Creditors hate it. Truth: They prefer structure to default"],
        },
      ],
    },
    {
      name: "Money Habits",
      icon: "🔄",
      cards: [
        {
          title: "The Silent Debit-Order Problem",
          summary: "Subscriptions, gym memberships, apps — they disappear so quietly you forget you signed up. That's not an accident.",
          takeaways: ["List every debit order right now (you'll be shocked)", "Most people find R500–R1000/month in unused subscriptions", "Cancelling takes 10 minutes; the money adds up"],
        },
        {
          title: "Subscription Creep",
          summary: "One streaming service becomes five, and suddenly you're paying R600/month for stuff you barely use.",
          takeaways: ["Track subscriptions like they're real bills", "Cancel what you're not using (even 'just in case' ones)", "Savings here is instant, with zero sacrifice"],
        },
        {
          title: "Spending Triggers",
          summary: "You don't spend money randomly. Stress, boredom, and reward-seeking are the real culprits.",
          takeaways: ["Identify your trigger (stress? scrolling? reward yourself?)", "Replace spending with a free alternative you actually enjoy", "Awareness is the first step to change"],
        },
      ],
    },
    {
      name: "Simple Saving Foundations",
      icon: "💰",
      cards: [
        {
          title: "Your First R1,000 Buffer",
          summary: "An emergency fund sounds impossible when you're broke. Start with R1,000. It changes everything.",
          takeaways: ["R1,000 stops small emergencies becoming credit card debt", "This is priority #1 (before any other savings)", "It's absolutely doable in 3–6 months"],
        },
        {
          title: "The 10-Minute Weekly Money Check-In",
          summary: "You don't need a complex budget. You need 10 minutes once a week to stay aware.",
          takeaways: ["Check how much you spent that week", "Notice where it went (this alone changes behavior)", "Ask: 'Would I buy this again today?'"],
        },
        {
          title: "Micro Habits When You're Broke",
          summary: "Saving money when every rand is spoken for means thinking differently, not trying harder.",
          takeaways: ["Small shifts matter more than sacrifice", "Saving R20/week adds up to R1,000/year", "It's not about deprivation; it's about intention"],
        },
      ],
    },
    {
      name: "Before You…",
      icon: "⚠️",
      cards: [
        {
          title: "Before Another Loan",
          summary: "Another loan feels like a solution. Usually, it's just deeper debt wearing a different hat.",
          takeaways: ["First, understand why you need it (cash flow problem or one-time need?)", "Calculate the total you'll repay (interest + capital)", "Ask: Will this make the problem better or just delayed?"],
        },
        {
          title: "Before Consolidating Debt",
          summary: "Consolidation can help, but only if you fix the habits that created the debt.",
          takeaways: ["Consolidation extends the timeline (you pay more interest overall)", "It only works if you stop using credit cards after", "A lower payment isn't always a win if you're paying 2x as long"],
        },
        {
          title: "Before Debt Review",
          summary: "Debt review is powerful, but it's not a light switch. Know what you're choosing before you begin.",
          takeaways: ["It appears on your credit record for 5 years", "You can't take on new credit during the plan", "But it's the legal protection you need if you're over-indebted"],
        },
      ],
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
              Money Clarity Hub ☕
            </h1>
            <p className="text-xl" style={{ color: colors.warmGrey }}>
              Money doesn't have to feel scary. Start where you are — no shame.
            </p>
          </div>

          {/* Start Here Tiles */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { emoji: "😰", label: "I feel overwhelmed" },
              { emoji: "💸", label: "My salary disappears" },
              { emoji: "😨", label: "I'm scared of debt review" },
              { emoji: "📈", label: "I want to rebuild credit" },
            ].map((item, i) => (
              <Card
                key={i}
                className="border-2 hover:shadow-lg transition-all cursor-pointer"
                style={{ borderColor: colors.sandLight, borderRadius: "14px" }}
              >
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-2">{item.emoji}</div>
                  <p className="font-medium" style={{ color: colors.charcoal }}>
                    {item.label}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Accordion type="single" collapsible className="space-y-4">
            {categories.map((category, idx) => (
              <AccordionItem
                key={idx}
                value={`category-${idx}`}
                className="border-2 rounded-lg px-6 overflow-hidden"
                style={{ borderColor: colors.sandLight }}
              >
                <AccordionTrigger className="hover:no-underline py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{category.icon}</span>
                    <h2 className="text-xl font-bold" style={{ color: colors.charcoal }}>
                      {category.name}
                    </h2>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-0 pb-4">
                  <div className="space-y-4">
                    {category.cards.map((card, cardIdx) => (
                      <Card key={cardIdx} className="border-0 bg-white/50">
                        <CardContent className="p-4">
                          <h3 className="font-bold text-lg mb-2" style={{ color: colors.maroon }}>
                            {card.title}
                          </h3>
                          <p className="text-sm mb-3" style={{ color: colors.warmGrey }}>
                            {card.summary}
                          </p>
                          <ul className="space-y-1 mb-3">
                            {card.takeaways.map((takeaway, i) => (
                              <li key={i} className="text-sm flex gap-2" style={{ color: colors.charcoal }}>
                                <span style={{ color: colors.maroon }}>✓</span>
                                <span>{takeaway}</span>
                              </li>
                            ))}
                          </ul>
                          {card.toolLink && (
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-sm h-auto p-0"
                              style={{ color: colors.maroon }}
                              asChild
                            >
                              <Link href={card.toolLink.href}>
                                {card.toolLink.label}
                                <ArrowRight className="ml-1 h-3 w-3" />
                              </Link>
                            </Button>
                          )}
                          <p className="text-xs mt-3" style={{ color: colors.warmGrey }}>
                            This is educational content, not financial advice.
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4" style={{ backgroundColor: colors.softPeach + "15" }}>
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-2xl font-bold mb-4" style={{ color: colors.charcoal }}>
            Want help applying this to your situation?
          </h2>
          <Button
            className="text-white font-semibold shadow-md hover:shadow-lg items-center gap-2"
            style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
            asChild
          >
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <Coffee className="h-4 w-4" />
              Message us on WhatsApp
            </a>
          </Button>
        </div>
      </section>
    </main>
  )
}
