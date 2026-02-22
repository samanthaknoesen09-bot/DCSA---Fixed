import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { GentleAffiliateFooter } from "@/components/gentle-affiliate-footer"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "FAQ - Frequently Asked Questions | DCSA Debt Counselling",
  description:
    "Find answers to common questions about debt counselling, credit repair, and our services. Learn about the debt review process, costs, and how DCSA can help you.",
  keywords: [
    "debt counselling FAQ",
    "debt review questions",
    "DCSA FAQ",
    "debt counselling process",
    "credit repair questions",
    "debt help South Africa",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions - DCSA Debt Counselling",
    description: "Get answers to your questions about debt counselling and credit repair services.",
    url: "https://www.dcsam.co.za/faq",
    type: "website",
  },
}

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is debt counselling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Debt counselling (also known as debt review) is a legal process regulated by the National Credit Regulator (NCR) that helps over-indebted South Africans restructure their debt repayments. It consolidates all your debts into one affordable monthly payment while providing legal protection from creditors.",
        },
      },
      {
        "@type": "Question",
        name: "How do I know if I need debt counselling?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You may benefit from debt counselling if you're struggling to meet monthly debt payments, using credit to pay other debts, receiving calls from creditors, or spending more than 40% of your income on debt repayments. Our free Money Map calculator can help assess your situation.",
        },
      },
      {
        "@type": "Question",
        name: "What does DCSA offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DCSA offers two main services: Debt Counselling (Debt Review) to restructure your debt into one affordable payment with legal protection, and Credit Repair to help you understand and improve your credit score. We provide compassionate, judgment-free support with free consultations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the debt review process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "You get IMMEDIATE relief and legal protection from day one - no waiting period. The initial application and assessment take 1-2 weeks, and court finalization varies by case. The full debt review continues until your debts are paid off, typically 3-5 years depending on your repayment plan.",
        },
      },
      {
        "@type": "Question",
        name: "Will debt counselling affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While under debt review, your credit report will show you're under debt counselling. However, this protects you from further negative marks. Once completed successfully, this status is removed and you can rebuild your credit with our credit repair guidance.",
        },
      },
      {
        "@type": "Question",
        name: "How much does debt counselling cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NCR-regulated fees: R50 application fee, R300-R350 admin fee, restructuring fee (your 1st month payment OR max R8,000 whichever is less), then 5% monthly aftercare fee (capped at R400-R450). After 24 months, aftercare reduces to 3%. Your first consultation is completely FREE.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get credit while under debt review?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you cannot apply for or receive new credit while under debt review. This is actually a benefit as it prevents you from accumulating more debt while you're working to become debt-free.",
        },
      },
      {
        "@type": "Question",
        name: "Is DCSA registered with the NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, DCSA is fully registered with the National Credit Regulator (NCR) under registration number NCRDC3995. You can verify our registration on the NCR website.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-4">
              Got Questions? We{"'"}ve Got Answers.
            </h1>
            <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
              Everything you want to know about debt counselling, credit repair, and how we can help — explained like a friend would, not a lawyer.
            </p>
          </div>

          {/* General Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">General Questions</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="what-is-dcsa" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is DCSA and what do you offer?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  We{"'"}re DCSA — a proudly female-led, NCR-registered debt counselling practice (NCRDC3995). We do two things really well: <strong>Debt Review</strong> (restructuring your debt into one affordable payment with legal protection) and <strong>Credit Repair</strong> (helping you understand and fix your credit score). We{"'"}re the people who actually listen first and advise second. First chat is always free.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="who-can-help" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Who can benefit from DCSA's services?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  If you're juggling debt like it's a side hustle, we're here for you! We help anyone in South Africa who's behind 
                  on payments, using credit cards to pay other credit cards (eish!), getting those annoying creditor calls, or 
                  spending 40%+ of their salary on debt. Whether you're employed, self-employed, or just trying to keep it together 
                  - we've got you.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-start" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I get started with DCSA?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Super easy! Start with our FREE consultation (no strings attached). Try our Money Map calculator to see where 
                  you're at, then ping us on WhatsApp, call, or book through the website. We'll chat about your situation, 
                  explain your options in plain English (no financial jargon!), and help you pick the best path. Zero judgment, 
                  zero pressure - promise.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Debt Counselling Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">Debt Counselling (Debt Review)</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="what-is-debt-counselling" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is debt counselling?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  In plain English: it{"'"}s a legal process that takes all your debts and rolls them into one affordable monthly payment. Interest rates get reduced, payment terms get extended, and creditors legally have to leave you alone. It{"'"}s regulated by the NCR, so everything is above board. Think of it as a financial reset — not bankruptcy, not giving up, just getting smart about your situation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="how-long" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does the debt review process take?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  <strong>The relief starts immediately — legal protection kicks in from day one.</strong> Application and assessment: 1-2 weeks. Proposal to creditors: 2-4 weeks. The full process usually runs 3-5 years depending on your debt. Yes, it{"'"}s a journey — but that first exhale when creditors stop calling? That happens straight away.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="costs" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How much does debt counselling cost?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  All fees are regulated by the NCR and built into your restructured payment plan. Costs include: 
                  <strong>R50 application fee</strong>, <strong>R300-R350 admin fee</strong>, 
                  <strong>Restructuring fee</strong> (your 1st month payment OR maximum R8,000, whichever is less), 
                  and <strong>5% monthly aftercare fee</strong> (capped at R400-R450). After 24 months, the aftercare 
                  fee reduces to just 3%. Your initial consultation is always free with no obligation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="need-debt-counselling" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How do I know if I need debt counselling?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  If payday feels more like panic day, that{"'"}s a sign. Using one card to pay another? Creditors calling at inconvenient times? Spending more than 40% of your income on debt? You{"'"}re not alone and you{"'"}re not a failure — you just need a proper plan. Try our free Money Map calculator to get a clear picture.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credit-score" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Will debt counselling affect my credit score?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Yes, it shows on your credit report — but here{"'"}s the plot twist: it actually protects you from more damage. No more negative marks piling up, no legal action. Once you complete the process, the flag gets removed and we help you rebuild. Think of it as pressing pause to heal, not giving up.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="get-credit" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I get credit while under debt review?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Nope — and that{"'"}s actually a good thing (even if it doesn{"'"}t feel like it right now). It stops you from digging a deeper hole while you{"'"}re climbing out. Once you{"'"}re through the process, you can access credit again — this time with the knowledge to use it wisely.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="protected" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What protection does debt counselling provide?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Once you{"'"}re under debt review, creditors can{"'"}t take legal action, can{"'"}t repossess your stuff, and can{"'"}t garnish your wages. They have to deal with us instead of bothering you. You focus on your life — we{"'"}ll handle the rest. It{"'"}s basically a legal force field for your finances.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Credit Repair Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">Credit Repair</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="what-is-credit-repair" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What is credit repair and how does it work?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  We sit down with your credit report and go through it together — like a friend who actually understands this stuff. We find errors (there are more than you{"'"}d think), dispute them with the credit bureaus, and give you a clear plan to get your score heading in the right direction. No lectures, just practical help.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credit-repair-time" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  How long does credit repair take?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  It depends on your situation (we know, everyone hates that answer). Disputing errors takes about 20-30 business days each. Seeing real score improvement through better habits? Usually 3-12 months. Rome wasn{"'"}t built in a day, and neither is a great credit score — but we{"'"}ll be with you the whole way.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="credit-score-improve" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can you guarantee my credit score will improve?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  We{"'"}d love to say yes, but anyone who guarantees a specific credit score is probably selling you something dodgy. What we can promise: we{"'"}ll find and fix errors, teach you the real rules of the credit game, and give you a solid plan. Most clients see real improvement — the ones who stick with it always do.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Process & Practical Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">Process & Practical Information</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="ncr-registered" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Is DCSA registered with the NCR?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Absolutely — <strong>NCRDC3995</strong>, check us on the NCR website anytime. We{"'"}re the real deal: registered, regulated, and proudly female-led. Always make sure your debt counsellor is NCR registered — if they{"'"}re not, run the other way.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="documents-needed" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  What documents do I need to apply?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  The usual suspects: valid ID, last 3 months{"'"} payslips, 3 months{"'"} bank statements, credit agreements for your debts, proof of residence, and marriage certificate if applicable. Sounds like a lot? Don{"'"}t stress — we{"'"}ll walk you through it step by step during your consultation. You don{"'"}t need everything perfect on day one.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="online-consultation" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Do you offer online consultations?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Yes! WhatsApp, phone call, or face-to-face at our Gqeberha office — whatever works for you. We help clients all over South Africa, so distance is never a problem. Pyjamas optional (we won{"'"}t judge).
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="spouse-included" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Does my spouse need to be included in debt counselling?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Married in community of property? Then yes, your spouse needs to be included since you share a joint estate. Married out of community of property or not married? Each person applies on their own. Not sure which applies to you? Just ask us — we{"'"}ll figure it out together.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="withdrawal" className="border rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  Can I withdraw from debt counselling?
                </AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  You can, yes — it{"'"}s your right. But heads up: withdrawing means you lose the legal protection and creditors can come knocking again. If you{"'"}re having doubts, chat to us first. Sometimes a small adjustment to your plan makes all the difference.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Still Have Questions CTA */}
          <Card className="bg-gradient-to-br from-[#4DB6AC]/10 to-[#0D3B66]/5 border-2 border-[#4DB6AC]/20">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold text-[#0D3B66]">
                Didn{"'"}t Find Your Answer?
              </h2>
              <p className="text-[#0D3B66]/70 max-w-2xl mx-auto">
                No worries — just reach out. We{"'"}re real people (not robots), and we{"'"}d love to help with your specific situation. Zero judgment, pinky promise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
                  asChild
                >
                  <a 
                    href="https://wa.me/27661937596?text=Hi%20DCSA%20%F0%9F%91%8B%20I%20have%20a%20question%20about%20debt%20counselling."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="bg-transparent border-[#0D3B66]"
                  asChild
                >
                  <a href="tel:+27719006298">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 071 900 6298
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <GentleAffiliateFooter buttonText="Check Insurance Savings" />

      <Footer />
    </div>
  )
}
