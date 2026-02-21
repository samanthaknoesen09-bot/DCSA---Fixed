"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Coffee, ArrowRight, Lightbulb, X } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function MoneyClarityClient() {
  const [selectedGuidance, setSelectedGuidance] = useState<string | null>(null)

  const startHereGuides = [
    {
      id: "salary-disappears",
      emoji: "💸",
      label: "My salary disappears",
      title: "Where Does Your Money Go?",
      guidance: [
        {
          subtitle: "The Silent Leak Problem",
          content: "Your salary disappears because of two things: things you see (groceries, fuel) and things you don't (subscriptions, debit orders, small spending that adds up). Most people are shocked when they realize how much vanishes to things they forgot they had.",
        },
        {
          subtitle: "What You Often Don't Think About",
          content: [
            "Gym memberships you haven't used in months",
            "Streaming services you watch one show on",
            "App subscriptions (meditation, dating, games)",
            "Debit order insurance you didn't know you had",
            "Delivery fees (R15 here, R20 there really adds up)",
            "Small daily treats (coffee, snacks — R50/day = R15,000/year)",
          ],
        },
        {
          subtitle: "Why This Matters",
          content: "Most people find R500–R1,500 in forgotten subscriptions. That's R6,000–R18,000 a year. That's real money that could rebuild your emergency fund, pay down debt, or just let you breathe.",
        },
        {
          subtitle: "Your Next Step",
          content: "Use our Money Map calculator to see exactly where your money goes. It takes 10 minutes and shows you the shocking details. No judgment — just clarity.",
        },
      ],
      cta: { label: "Use Money Map Calculator", href: "/calculator" },
      whatsapp: true,
    },
    {
      id: "overwhelmed",
      emoji: "😰",
      label: "I feel overwhelmed",
      title: "You're Not Alone — And It's Going to Be Okay",
      guidance: [
        {
          subtitle: "First, Take a Breath",
          content: "If you're feeling overwhelmed by money, that feeling is valid. You're not alone — thousands of people feel exactly like you do right now. And here's the thing: that feeling often means you care, and that's actually the first step to fixing it.",
        },
        {
          subtitle: "Mental Health Matters",
          content: "Money stress is real stress. It affects sleep, health, relationships. If you're struggling emotionally, that comes first. Reach out to someone you trust. If you need professional support, there are resources available.",
        },
        {
          subtitle: "We Can Help",
          content: "You don't have to figure this out alone. Talk to Sam — she's been on this journey with hundreds of people who felt exactly how you feel right now. She'll listen without judgment and help you see a path forward.",
        },
        {
          subtitle: "Small Steps Count",
          content: "You don't need to fix everything today. Starting with understanding your situation (like using our Money Map) is enough. One step at a time.",
        },
      ],
      cta: { label: "Message Sam on WhatsApp", href: WHATSAPP_URL },
      whatsapp: true,
    },
    {
      id: "debt-review-scared",
      emoji: "😨",
      label: "I'm scared of debt review",
      title: "Debt Review Explained — It's Not What You Think",
      guidance: [
        {
          subtitle: "What Debt Review Actually Is",
          content: "Debt review is NOT a bailout. It's NOT admitting defeat. It's a legal tool that restructures what you owe so you can actually pay it back — in a way that works with your real income and real life.",
        },
        {
          subtitle: "How It Works (Simply)",
          content: "A debt counsellor (like us) assesses your situation. We talk to your creditors. Together, we create a plan that says: 'Here's what this person can realistically pay each month.' You pay that amount — which is usually less than your current obligations — and your creditors know exactly what to expect.",
        },
        {
          subtitle: "What You Might Be Worried About",
          content: [
            "Will I lose access to credit? No — during the plan you're protected. After, you regain access (often better than before).",
            "Will everyone know? No — it's confidential. It appears on your credit record, but it's not public.",
            "Will it ruin me forever? No — after 5 years, it falls off your record. Meanwhile, each on-time payment rebuilds your reputation.",
            "Is it a failure? No — it's actually the responsible choice when you're over-indebted.",
          ],
        },
        {
          subtitle: "Knowledge Helps",
          content: "The fear often comes from not knowing. Check our FAQ for detailed answers to common questions.",
        },
      ],
      cta: { label: "Read Our FAQ", href: "/faq" },
      whatsapp: false,
    },
    {
      id: "rebuild-credit",
      emoji: "📈",
      label: "I want to rebuild credit",
      title: "Rebuilding Credit: Simple Steps (Not Magic)",
      guidance: [
        {
          subtitle: "The Basics of Credit Scores",
          content: "Your credit score measures one thing: How reliable are you at paying back what you borrow? It's built from real payment history. Good news? Every single on-time payment makes it better.",
        },
        {
          subtitle: "Simple Ways to Rebuild (Easy & Overlooked)",
          content: [
            "Pay on time, every time — This is 35% of your score. It's the most important thing.",
            "Pay small amounts off your credit card — Even R50/month on a card shows you're managing credit.",
            "Don't close old accounts — Even if you're not using them, they show credit history.",
            "Request credit increases (if you have a stable job) — Higher available credit = lower utilization = better score.",
            "Check your credit report for errors — Dispute them immediately (they're more common than you think).",
            "Keep your utilization below 30% — If you have R10,000 available, try to keep balance under R3,000.",
          ],
        },
        {
          subtitle: "Things That Hurt Your Credit (You Might Not Know)",
          content: [
            "Hard credit inquiries (every time you apply for credit = small hit)",
            "Late payments (even 1 day late can affect you)",
            "High credit card balances (utilization matters, even if you can pay it)",
            "Closing credit cards (reduces your available credit = higher utilization)",
            "Too many applications in short time (looks desperate, raises red flags)",
            "Not building any credit history (not using credit at all also hurts you)",
          ],
        },
        {
          subtitle: "Timeline",
          content: "One year of perfect payments helps significantly. Two years starts to show real improvement. Five years and older defaults start dropping off your record.",
        },
      ],
      cta: { label: "Learn More in Credit Section", href: "/money-clarity-hub#credit" },
      whatsapp: false,
    },
  ]

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
          title: "Understanding Your Credit Score (Simply)",
          summary: "Your credit score is a number (300–900 in SA) that tells lenders: 'Is this person reliable with money?' Here's what the numbers mean and what's good.",
          takeaways: [
            "300–500: Poor — You've had serious payment issues",
            "500–600: Fair — Missed payments or high debt",
            "600–700: Good — Generally reliable, some issues in the past",
            "700–800: Very Good — Solid payment history, creditworthy",
            "800–900: Excellent — Trusted borrower, best rates available",
            "Most lenders want to see 650+ to approve credit"
          ],
        },
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
          title: "It's Possible, Even With R100/Month",
          summary: "Saving feels impossible when you're in a tight spot. But even R100/month adds up. Here's proof that you CAN do this.",
          takeaways: [
            "R100/month = R1,200/year (that's your R1,000 buffer + more)",
            "R100/month over 5 years = R6,000 (real emergency fund)",
            "R200/month = R12,000 in 5 years (life-changing money)",
            "The key: It comes from habits, not from having 'extra' money",
            "No matter your current situation, small shifts add up",
            "Most people find R500+ monthly in wasted subscriptions alone"
          ],
        },
        {
          title: "Your First R1,000 Buffer",
          summary: "An emergency fund sounds impossible when you're broke. Start with R1,000. It changes everything.",
          takeaways: ["R1,000 stops small emergencies becoming credit card debt", "This is priority #1 (before any other savings)", "It's absolutely doable in 3–6 months from small cuts"],
        },
        {
          title: "How Small Habits Become Big Money",
          summary: "You don't need a huge sacrifice. Just small shifts in daily choices compound into real wealth.",
          takeaways: [
            "R50/day on small spending = R18,000/year (that's massive)",
            "R20/week in subscriptions = R1,040/year",
            "One less coffee/week = R260/year (more than you think)",
            "Cancel one streaming service = R600–R1,000/year",
            "Pack lunch 2x/week instead of buying = R5,000+/year",
            "These aren't sacrifices — they're choices that free up money"
          ],
        },
        {
          title: "The 10-Minute Weekly Money Check-In",
          summary: "You don't need a complex budget. You need 10 minutes once a week to stay aware.",
          takeaways: ["Check how much you spent that week", "Notice where it went (this alone changes behavior)", "Ask: 'Would I buy this again today?'"],
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

          {/* Start Here Tiles or Guidance Section */}
          {!selectedGuidance ? (
            <div className="grid sm:grid-cols-2 gap-4">
              {startHereGuides.map((guide) => (
                <Card
                  key={guide.id}
                  className="border-2 hover:shadow-lg transition-all cursor-pointer"
                  style={{ borderColor: colors.sandLight, borderRadius: "14px" }}
                  onClick={() => setSelectedGuidance(guide.id)}
                >
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-3">{guide.emoji}</div>
                    <p className="font-medium" style={{ color: colors.charcoal }}>
                      {guide.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            (() => {
              const guide = startHereGuides.find((g) => g.id === selectedGuidance)
              if (!guide) return null
              return (
                <Card
                  className="border-2"
                  style={{ borderColor: colors.sandLight, borderRadius: "14px", backgroundColor: colors.white }}
                >
                  <CardContent className="p-8">
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-4">
                        <span className="text-4xl">{guide.emoji}</span>
                        <h2 className="text-2xl md:text-3xl font-bold" style={{ color: colors.charcoal }}>
                          {guide.title}
                        </h2>
                      </div>
                      <button
                        onClick={() => setSelectedGuidance(null)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <X className="h-6 w-6" style={{ color: colors.charcoal }} />
                      </button>
                    </div>

                    <div className="space-y-6">
                      {guide.guidance.map((section, idx) => (
                        <div key={idx}>
                          <h3
                            className="font-bold text-lg mb-2"
                            style={{ color: colors.maroon }}
                          >
                            {section.subtitle}
                          </h3>
                          {typeof section.content === "string" ? (
                            <p style={{ color: colors.warmGrey }} className="leading-relaxed">
                              {section.content}
                            </p>
                          ) : (
                            <ul className="space-y-2">
                              {section.content.map((item, i) => (
                                <li
                                  key={i}
                                  className="flex gap-3"
                                  style={{ color: colors.charcoal }}
                                >
                                  <span
                                    style={{ color: colors.maroon, minWidth: "20px" }}
                                  >
                                    •
                                  </span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>

                    <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.sandLight }}>
                      <p className="text-sm mb-4" style={{ color: colors.warmGrey }}>
                        Take the next step:
                      </p>
                      <Button
                        className="text-white font-semibold shadow-md hover:shadow-lg w-full md:w-auto"
                        style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                        asChild
                      >
                        <Link href={guide.cta.href} target={guide.whatsapp ? "_blank" : undefined}>
                          {guide.cta.label}
                          {guide.whatsapp && " ↗"}
                        </Link>
                      </Button>
                      <button
                        onClick={() => setSelectedGuidance(null)}
                        className="ml-3 font-medium"
                        style={{ color: colors.maroon }}
                      >
                        ← Back
                      </button>
                    </div>

                    <p className="text-xs mt-4" style={{ color: colors.warmGrey }}>
                      This is educational content, not financial advice.
                    </p>
                  </CardContent>
                </Card>
              )
            })()
          )}
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
