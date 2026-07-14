"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { MessageCircle, Shield, BookOpen, Lightbulb, CheckCircle } from "lucide-react"
import { colors, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/colors"

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
          className="text-base md:text-lg max-w-2xl mx-auto"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          Understanding your options is the first step. Here&apos;s what you need to know — 
          in plain language, without the jargon.
        </p>
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
}

// Guides Data
const guides: GuideItem[] = [
  {
    id: "debt-review",
    title: "Debt Review (Debt Counselling)",
    whatItIs: "Debt review is a legal process where an NCR-registered debt counsellor helps you restructure your debts into one affordable monthly payment. It&apos;s protected by law, which means creditors can&apos;t take legal action against you or repossess your assets while you&apos;re under debt review.",
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
      "You won&apos;t be able to take out new credit while under review",
      "Once you&apos;ve paid off all your debt, you receive a clearance certificate"
    ]
  },
  {
    id: "debt-consolidation",
    title: "Debt Consolidation",
    whatItIs: "Debt consolidation means taking out one larger loan to pay off multiple smaller debts. Instead of juggling many accounts with different interest rates and due dates, you have just one loan to manage.",
    whatItMeansForYou: [
      "Simpler finances with one account to track",
      "Potentially lower overall interest rate",
      "Fixed monthly payment that&apos;s easier to budget for",
      "Clearer end date for when you&apos;ll be debt-free"
    ],
    practicalTips: [
      "This option usually requires a decent credit score",
      "Make sure the new interest rate is actually lower than what you&apos;re paying now",
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
      "Shows creditors you&apos;re trying to pay (which they appreciate)"
    ],
    practicalTips: [
      "Always get any agreement in writing",
      "Be honest about what you can actually afford",
      "If you miss payments on an arrangement, creditors may not be willing to negotiate again",
      "Consider getting professional help if you&apos;re not comfortable negotiating"
    ]
  },
  {
    id: "falling-behind",
    title: "Falling Behind on Accounts",
    whatItIs: "If you&apos;ve missed payments or are struggling to keep up, you&apos;re \"falling behind\" on your accounts. This can lead to penalty fees, higher interest, damaged credit scores, and eventually legal action from creditors.",
    whatItMeansForYou: [
      "The longer you wait, the worse it gets (interest and fees pile up)",
      "Creditors may hand your account to debt collectors",
      "Your credit score will be negatively affected",
      "Eventually, you could face legal action or asset repossession"
    ],
    practicalTips: [
      "Don&apos;t ignore calls from creditors — talking to them early gives you more options",
      "If you can&apos;t pay everything, pay something — even small payments show good faith",
      "Keep records of all communication with creditors",
      "The sooner you get help, the more options you&apos;ll have"
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
      "It&apos;s not permanent — you can improve it over time"
    ],
    practicalTips: [
      "Check your credit report at least once a year (you can do this for free)",
      "Dispute any errors you find on your report",
      "Paying bills on time is the best way to improve your score",
      "Completing debt review and getting a clearance certificate can help rebuild your score"
    ]
  }
]

// Guides Section with Accordion
function GuidesSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {guides.map((guide) => (
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
                    {guide.whatItIs.replace(/&apos;/g, "'")}
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
                        <span>{item.replace(/&apos;/g, "'")}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Practical Tips */}
                <div 
                  className="p-4 rounded-lg"
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
                        <span>{tip.replace(/&apos;/g, "'")}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

// CTA Section
function CTASection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: colors.navy }}
        >
          Not sure what applies to you?
        </h2>
        
        <p 
          className="text-lg mb-8"
          style={{ color: colors.mutedText }}
        >
          Let&apos;s talk — no pressure. I&apos;ll help you understand which option 
          makes the most sense for your situation.
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
      <CTASection />
    </main>
  )
}
