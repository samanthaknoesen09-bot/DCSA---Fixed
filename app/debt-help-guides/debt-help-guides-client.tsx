"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, BookOpen, Lightbulb, CheckCircle, Download, AlertTriangle, Scale, FileText, HandCoins, Building2, Heart } from "lucide-react"
import { colors, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/colors"
import { generateDebtGuidePDF } from "@/lib/pdf-generator"

// Hero Section
function HeroSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.navy }}>
      <div className="container mx-auto max-w-3xl text-center">
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${colors.gold}20` }}
        >
          <BookOpen className="w-7 h-7" style={{ color: colors.gold }} />
        </div>
        
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          style={{ color: colors.white }}
        >
          Not sure what to do about your debt?
        </h1>
        
        <p 
          className="text-lg md:text-xl mb-4"
          style={{ color: colors.gold }}
        >
          Let&apos;s simplify it.
        </p>
        
        <p 
          className="text-base md:text-lg max-w-2xl mx-auto mb-8"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Understanding your options is the first step. Here&apos;s what you need to know — 
          in plain language, without the jargon.
        </p>

        <Button
          size="lg"
          className="text-base px-6 py-5 font-semibold rounded-xl"
          style={{ backgroundColor: colors.gold, color: colors.navy }}
          onClick={() => generateDebtGuidePDF()}
        >
          <Download className="w-5 h-5 mr-2" />
          Download Free Debt Guide (PDF)
        </Button>
      </div>
    </section>
  )
}

// Guide Item Type
interface GuideItem {
  id: string
  title: string
  whatItIs: string
  whatItMeansForYou: string[]
  practicalTips: string[]
  emotionalNote?: string
}

// Original Guides Data
const originalGuides: GuideItem[] = [
  {
    id: "debt-review",
    title: "Debt Review (Debt Counselling)",
    whatItIs: "Debt review is a legal process where an NCR-registered debt counsellor helps you restructure your debts into one affordable monthly payment. It's protected by law, which means creditors can't take legal action against you or repossess your assets while you're under debt review.",
    whatItMeansForYou: [
      "Your creditors will stop calling and harassing you",
      "You make ONE payment each month instead of many",
      "Interest rates are often reduced significantly",
      "Your essential assets (like your car and home) are protected",
      "You get legal breathing room to recover"
    ],
    practicalTips: [
      "Debt review works best if you have a regular income",
      "It typically takes 3-5 years to complete the process",
      "You won't be able to take out new credit while under review",
      "Once you've paid off all your debt, you receive a clearance certificate"
    ]
  },
  {
    id: "debt-consolidation",
    title: "Debt Consolidation",
    whatItIs: "Debt consolidation means taking out one larger loan to pay off multiple smaller debts. Instead of juggling many accounts with different interest rates and due dates, you have just one loan to manage.",
    whatItMeansForYou: [
      "Simpler finances with one account to track",
      "Potentially lower overall interest rate",
      "Fixed monthly payment that's easier to budget for",
      "Clearer end date for when you'll be debt-free"
    ],
    practicalTips: [
      "This option usually requires a decent credit score",
      "Make sure the new interest rate is actually lower than what you're paying now",
      "Be careful not to rack up new debt after consolidating",
      "If banks have turned you down, debt review might be a better fit"
    ]
  },
  {
    id: "payment-arrangements",
    title: "Payment Arrangements",
    whatItIs: "A payment arrangement is when you negotiate directly with your creditors to change your payment terms. This could mean lower monthly payments, reduced interest, or an extended repayment period.",
    whatItMeansForYou: [
      "You can sometimes negotiate on your own",
      "No formal legal process involved",
      "Can provide temporary relief while you get back on your feet",
      "Shows creditors you're trying to pay (which they appreciate)"
    ],
    practicalTips: [
      "Always get any agreement in writing",
      "Be honest about what you can actually afford",
      "If you miss payments on an arrangement, creditors may not be willing to negotiate again",
      "Consider getting professional help if you're not comfortable negotiating"
    ]
  },
  {
    id: "falling-behind",
    title: "Falling Behind on Accounts",
    whatItIs: "If you've missed payments or are struggling to keep up, you're \"falling behind\" on your accounts. This can lead to penalty fees, higher interest, damaged credit scores, and eventually legal action from creditors.",
    whatItMeansForYou: [
      "The longer you wait, the worse it gets (interest and fees pile up)",
      "Creditors may hand your account to debt collectors",
      "Your credit score will be negatively affected",
      "Eventually, you could face legal action or asset repossession"
    ],
    practicalTips: [
      "Don't ignore calls from creditors — talking to them early gives you more options",
      "If you can't pay everything, pay something — even small payments show good faith",
      "Keep records of all communication with creditors",
      "The sooner you get help, the more options you'll have"
    ]
  },
  {
    id: "credit-score",
    title: "Credit Score Basics",
    whatItIs: "Your credit score is a number that represents how likely you are to repay debt. Banks and lenders use it to decide whether to give you credit and at what interest rate. In South Africa, scores typically range from 300 to 850.",
    whatItMeansForYou: [
      "A low score means higher interest rates or being declined for credit",
      "A good score opens doors to better deals and lower rates",
      "Your score affects things like phone contracts and rental applications",
      "It's not permanent — you can improve it over time"
    ],
    practicalTips: [
      "Check your credit report at least once a year (you can do this for free)",
      "Dispute any errors you find on your report",
      "Paying bills on time is the best way to improve your score",
      "Completing debt review and getting a clearance certificate can help rebuild your score"
    ]
  }
]

// New Practical Guides
const practicalGuides: GuideItem[] = [
  {
    id: "no-money-after-payday",
    title: "Why You Still Have No Money After Payday",
    whatItIs: "It's payday, but by the time all your debit orders go off, there's almost nothing left. Sound familiar? This happens because most of your salary goes straight to paying off debt — loans, credit cards, store accounts — plus the interest on top. It's not that you're spending recklessly. The structure of your debt is working against you.",
    whatItMeansForYou: [
      "High interest rates mean you're paying back far more than you borrowed",
      "Multiple debit orders drain your account before you can use it",
      "You're left surviving on credit again — and the cycle continues",
      "It's not a discipline problem, it's a structure problem"
    ],
    practicalTips: [
      "Track ALL your spending for one week — even bread, milk, and petrol",
      "Add up your total debt repayments vs. your take-home pay",
      "If more than 40% goes to debt, you may benefit from restructuring",
      "Don't blame yourself — this is fixable with the right help"
    ],
    emotionalNote: "You're not bad with money. The system wasn't built in your favour. Let's fix the structure."
  },
  {
    id: "stop-living-on-credit",
    title: "How to Stop Living on Credit",
    whatItIs: "When your salary doesn't stretch, it's easy to fall into a pattern of using credit cards or store accounts just to get through the month. Before you know it, you're not using credit for emergencies — you're relying on it for basics like groceries and fuel. This creates a cycle that's hard to break.",
    whatItMeansForYou: [
      "You're borrowing to pay for today, which steals from tomorrow",
      "Interest adds up quickly, making everything cost more",
      "The gap between what you earn and what you owe keeps growing",
      "It feels normal, but it's not sustainable"
    ],
    practicalTips: [
      "Separate needs from habits — what do you actually need vs. what feels necessary?",
      "Start small: try to put R20-R50 aside each week, even if it feels pointless",
      "Use cash or a debit card for one week to see how your spending changes",
      "If you can't break the cycle on your own, that's okay — help exists"
    ],
    emotionalNote: "Breaking this cycle takes time. Start small. Every rand counts."
  },
  {
    id: "unexpected-expenses",
    title: "Preparing for Unexpected Expenses",
    whatItIs: "Life doesn't wait for the right time. Tyres blow out, kids get sick, the car breaks down, or the fridge stops working. If you don't have savings, these \"surprises\" become emergencies that push you deeper into debt. The key is building a small buffer — even if it takes time.",
    whatItMeansForYou: [
      "Without savings, every emergency becomes a financial crisis",
      "You end up using credit to cover things you couldn't plan for",
      "The stress of not having a safety net affects your whole life",
      "A small fund can make a big difference"
    ],
    practicalTips: [
      "Create a \"life happens\" fund — aim for R500 to R1,000 to start",
      "Automate a small transfer on payday, before you can spend it",
      "Use unexpected money (bonus, refund, gift) to build this fund",
      "R20 a week is R1,000 a year — start somewhere"
    ],
    emotionalNote: "You can't predict life, but you can prepare for it. Start with what you have."
  },
  {
    id: "understanding-options",
    title: "Understanding Your Debt Options",
    whatItIs: "There's no one-size-fits-all solution for debt. Depending on your situation, different options might work better for you. Some are legal processes with protections, others are informal arrangements. Understanding the difference helps you make the right choice.",
    whatItMeansForYou: [
      "Knowing your options puts you back in control",
      "Some options protect you legally, others don't",
      "The right choice depends on your income, debt amount, and goals",
      "You don't have to figure this out alone"
    ],
    practicalTips: [
      "Scroll down to see the full comparison of debt options",
      "Consider: Do you need legal protection? Can you afford repayments?",
      "Download the free guide for a printable comparison",
      "If you're unsure, a quick chat can help clarify things"
    ],
    emotionalNote: "Information is power. Once you understand your options, the path forward becomes clearer."
  },
  {
    id: "taking-back-control",
    title: "Taking Back Control of Your Finances",
    whatItIs: "Getting out of debt isn't just about paying off what you owe — it's about changing your relationship with money so you don't end up in the same place again. It starts with knowing exactly what you owe, understanding where your money goes, and making small, consistent changes.",
    whatItMeansForYou: [
      "You'll know exactly where you stand — no more guessing",
      "You'll spend with intention, not panic",
      "You'll build habits that prevent future debt traps",
      "You'll feel calmer and more in control"
    ],
    practicalTips: [
      "Know what you owe: List every debt, balance, and monthly payment",
      "Know what you spend: Track everything for 30 days",
      "Simplify: Reduce the number of accounts and debit orders where possible",
      "Give every rand a purpose: Budget before the month starts",
      "Do weekly check-ins: 10 minutes on Sunday to review your week"
    ],
    emotionalNote: "You've already taken the first step by reading this. Keep going — you've got this."
  }
]

// All Guides Combined
const allGuides = [...originalGuides, ...practicalGuides]

// Guides Section with Accordion
function GuidesSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-3 text-center"
          style={{ color: colors.navy }}
        >
          Debt Help Guides
        </h2>
        <p 
          className="text-lg text-center mb-10"
          style={{ color: colors.mutedText }}
        >
          Practical advice in plain language. No jargon, no judgement.
        </p>

        <Accordion type="single" collapsible className="space-y-4">
          {allGuides.map((guide) => (
            <AccordionItem 
              key={guide.id} 
              value={guide.id}
              className="border-0 rounded-xl shadow-md overflow-hidden"
              style={{ backgroundColor: colors.white }}
            >
              <AccordionTrigger 
                className="px-6 py-5 text-left text-lg font-bold hover:no-underline"
                style={{ color: colors.navy }}
              >
                {guide.title}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-6">
                {/* What It Is */}
                <div className="mb-6">
                  <h4 
                    className="text-sm font-semibold uppercase tracking-wide mb-2"
                    style={{ color: colors.gold }}
                  >
                    What it is
                  </h4>
                  <p className="text-base leading-relaxed" style={{ color: colors.charcoal }}>
                    {guide.whatItIs}
                  </p>
                </div>

                {/* What It Means For You */}
                <div className="mb-6">
                  <h4 
                    className="text-sm font-semibold uppercase tracking-wide mb-3 flex items-center gap-2"
                    style={{ color: colors.gold }}
                  >
                    <Lightbulb className="w-4 h-4" />
                    What this means for you
                  </h4>
                  <ul className="space-y-2">
                    {guide.whatItMeansForYou.map((item, index) => (
                      <li 
                        key={index}
                        className="flex items-start gap-2 text-base"
                        style={{ color: colors.charcoal }}
                      >
                        <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Tips */}
                <div 
                  className="p-4 rounded-lg mb-4"
                  style={{ backgroundColor: colors.warmBeige }}
                >
                  <h4 
                    className="text-sm font-semibold uppercase tracking-wide mb-3"
                    style={{ color: colors.navy }}
                  >
                    Practical tips
                  </h4>
                  <ul className="space-y-2">
                    {guide.practicalTips.map((tip, index) => (
                      <li 
                        key={index}
                        className="text-sm flex items-start gap-2"
                        style={{ color: colors.mutedText }}
                      >
                        <span style={{ color: colors.gold }}>•</span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Emotional Note (if exists) */}
                {guide.emotionalNote && (
                  <div 
                    className="p-4 rounded-lg border-l-4 flex items-start gap-3"
                    style={{ backgroundColor: `${colors.gold}10`, borderLeftColor: colors.gold }}
                  >
                    <Heart className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
                    <p className="text-sm italic" style={{ color: colors.charcoal }}>
                      {guide.emotionalNote}
                    </p>
                  </div>
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA after guides */}
        <div className="mt-10 text-center">
          <Button
            size="lg"
            className="text-base px-8 py-6 font-semibold rounded-xl"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Let&apos;s talk — no pressure
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Debt Comparison Data
interface DebtOption {
  id: string
  title: string
  icon: React.ElementType
  description: string
  bestFor: string
  legalProtection: boolean
  creditImpact: string
  pros: string[]
  cons: string[]
}

const debtOptions: DebtOption[] = [
  {
    id: "debt-review",
    title: "Debt Review",
    icon: Shield,
    description: "A legal process regulated by the NCR where a debt counsellor restructures your debt into one affordable payment.",
    bestFor: "People who are over-indebted, have regular income, and need legal protection from creditors.",
    legalProtection: true,
    creditImpact: "Listed on credit record during review. Clearance certificate issued upon completion.",
    pros: [
      "Legal protection from creditors",
      "Assets protected from repossession",
      "Reduced interest rates",
      "One affordable monthly payment"
    ],
    cons: [
      "Can't take new credit during review",
      "Process takes 3-5 years",
      "Requires consistent income"
    ]
  },
  {
    id: "consolidation",
    title: "Debt Consolidation Loan",
    icon: HandCoins,
    description: "Taking out a single loan to pay off multiple debts, leaving you with one monthly payment.",
    bestFor: "People with a reasonable credit score who can qualify for a new loan at better rates.",
    legalProtection: false,
    creditImpact: "New loan appears on credit record. Old accounts show as settled.",
    pros: [
      "Simplifies multiple debts into one",
      "May get a lower interest rate",
      "No legal restrictions on new credit"
    ],
    cons: [
      "Requires good credit to qualify",
      "No legal protection from creditors",
      "Risk of accumulating new debt"
    ]
  },
  {
    id: "administration",
    title: "Debt Administration",
    icon: FileText,
    description: "A court-supervised debt repayment plan for debts under R50,000 where an administrator manages your payments.",
    bestFor: "People with smaller debts (under R50,000) who want formal help but not full debt review.",
    legalProtection: true,
    creditImpact: "Listed as under administration on credit record until completed.",
    pros: [
      "Legal protection while under administration",
      "Administrator handles creditor negotiations",
      "Suitable for smaller debt amounts"
    ],
    cons: [
      "Only for debts under R50,000",
      "Administrator fees apply",
      "Less comprehensive than debt review"
    ]
  },
  {
    id: "sequestration",
    title: "Sequestration (Bankruptcy)",
    icon: Building2,
    description: "A legal process where your estate is handed over and assets sold to pay creditors. Debts are written off after rehabilitation.",
    bestFor: "People with significant assets and debts who see no other way out. A last resort option.",
    legalProtection: true,
    creditImpact: "Severe impact. Remains on record for 10 years. Rehabilitated after 4 years typically.",
    pros: [
      "Debts written off after rehabilitation",
      "Fresh start after the process",
      "Legal protection during sequestration"
    ],
    cons: [
      "Lose most of your assets",
      "Severe, long-lasting credit impact",
      "Expensive legal process",
      "Should be a last resort"
    ]
  },
  {
    id: "mediation",
    title: "Mediation / Payment Arrangement",
    icon: Scale,
    description: "Negotiating directly with creditors (or through a mediator) to adjust payment terms without a formal legal process.",
    bestFor: "People who are temporarily struggling and can negotiate reduced payments for a period.",
    legalProtection: false,
    creditImpact: "May show as \"arrangement\" on accounts. Less severe than formal processes.",
    pros: [
      "No formal legal process required",
      "Can be done independently",
      "Flexible arrangements possible",
      "Less impact on credit record"
    ],
    cons: [
      "No legal protection",
      "Creditors can still take action",
      "Arrangements may not be honored"
    ]
  }
]

// Comparison Section
function ComparisonSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-5xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-3 text-center"
          style={{ color: colors.navy }}
        >
          Compare Your Debt Options
        </h2>
        <p 
          className="text-lg text-center mb-4 max-w-2xl mx-auto"
          style={{ color: colors.mutedText }}
        >
          Not all debt solutions are the same. Here&apos;s a clear comparison to help you understand which might work for your situation.
        </p>
        
        {/* Disclaimer */}
        <div 
          className="flex items-start gap-3 p-4 rounded-lg mb-10 max-w-2xl mx-auto"
          style={{ backgroundColor: `${colors.gold}15` }}
        >
          <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
          <p className="text-sm" style={{ color: colors.charcoal }}>
            <strong>Important:</strong> This information is for guidance only. Every situation is different. 
            Before making any decisions, speak to a qualified professional who can assess your specific circumstances.
          </p>
        </div>

        {/* Options Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {debtOptions.map((option) => (
            <Card 
              key={option.id}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: colors.white }}
            >
              <CardContent className="p-6">
                {/* Icon & Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${colors.gold}20` }}
                  >
                    <option.icon className="w-6 h-6" style={{ color: colors.gold }} />
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: colors.navy }}>
                    {option.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm mb-4" style={{ color: colors.mutedText }}>
                  {option.description}
                </p>

                {/* Best For */}
                <div className="mb-4">
                  <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: colors.gold }}>
                    Best for
                  </p>
                  <p className="text-sm" style={{ color: colors.charcoal }}>
                    {option.bestFor}
                  </p>
                </div>

                {/* Legal Protection Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <div 
                    className={`px-3 py-1 rounded-full text-xs font-semibold`}
                    style={{ 
                      backgroundColor: option.legalProtection ? `${colors.navy}15` : `${colors.mutedText}15`,
                      color: option.legalProtection ? colors.navy : colors.mutedText
                    }}
                  >
                    {option.legalProtection ? "Legal Protection" : "No Legal Protection"}
                  </div>
                </div>

                {/* Pros */}
                <div className="mb-3">
                  <p className="text-xs font-semibold mb-2" style={{ color: colors.navy }}>Benefits</p>
                  <ul className="space-y-1">
                    {option.pros.slice(0, 3).map((pro, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs" style={{ color: colors.charcoal }}>
                        <CheckCircle className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
                        <span>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <p className="text-xs font-semibold mb-2" style={{ color: colors.navy }}>Considerations</p>
                  <ul className="space-y-1">
                    {option.cons.slice(0, 2).map((con, index) => (
                      <li key={index} className="flex items-start gap-2 text-xs" style={{ color: colors.mutedText }}>
                        <span>•</span>
                        <span>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Download & CTA */}
        <div className="text-center space-y-4">
          <Button
            size="lg"
            variant="outline"
            className="text-base px-6 py-5 font-semibold rounded-xl border-2 mr-4"
            style={{ borderColor: colors.navy, color: colors.navy }}
            onClick={() => generateDebtGuidePDF()}
          >
            <Download className="w-5 h-5 mr-2" />
            Download Full Comparison (PDF)
          </Button>
          
          <Button
            size="lg"
            className="text-base px-6 py-5 font-semibold rounded-xl"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Not sure which is right? Let&apos;s chat
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: colors.navy }}
        >
          Ready to take the first step?
        </h2>
        
        <p 
          className="text-lg mb-8"
          style={{ color: colors.mutedText }}
        >
          You don&apos;t have to figure this out alone. Send me a message and we&apos;ll talk 
          through your options — no pressure, no judgement.
        </p>

        <Button
          size="lg"
          className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg"
          style={{ backgroundColor: colors.gold, color: colors.navy }}
          asChild
        >
          <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp Sam – {WHATSAPP_NUMBER}
          </Link>
        </Button>

        <div 
          className="flex items-center justify-center gap-2 text-sm mt-6"
          style={{ color: colors.mutedText }}
        >
          <Shield className="w-4 h-4" style={{ color: colors.navy }} />
          <span>Free consultation • No obligation • Confidential</span>
        </div>
      </div>
    </section>
  )
}

export function DebtHelpGuidesClient() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <HeroSection />
      <GuidesSection />
      <ComparisonSection />
      <CTASection />
    </main>
  )
}
