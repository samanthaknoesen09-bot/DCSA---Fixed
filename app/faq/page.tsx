import type { Metadata } from "next"
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
  title: "FAQ - Frequently Asked Questions | DC Sam Debt Counselling",
  description:
    "Find answers to common questions about debt counselling, credit repair, and our services. Learn about the debt review process, costs, and how DC Sam can help you.",
  keywords: [
    "debt counselling FAQ",
    "debt review questions",
    "DC Sam FAQ",
    "debt counselling process",
    "credit repair questions",
    "debt help South Africa",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions - DC Sam Debt Counselling",
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
        name: "What does DC Sam offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "DC Sam offers two main services: Debt Counselling (Debt Review) to restructure your debt into one affordable payment with legal protection, and Credit Repair to help you understand and improve your credit score. We provide compassionate, judgment-free support with free consultations.",
        },
      },
      {
        "@type": "Question",
        name: "How long does the debt review process take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The relief and legal protection starts from day one. The initial application and assessment take 1-2 weeks, and court finalization varies by case. The full debt review continues until your debts are paid off, typically 3-5 years depending on your repayment plan.",
        },
      },
      {
        "@type": "Question",
        name: "Will debt counselling affect my credit score?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "While under debt review, your credit report will show you're under debt counselling. However, this protects you from further negative marks and legal action. Once completed successfully and a clearance certificate is issued, this status is removed and you can rebuild your credit.",
        },
      },
      {
        "@type": "Question",
        name: "How much does debt counselling cost?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "NCR-regulated fees include: Application fee (as per Schedule 2(2)), Administration fee (R300), Restructuring fee (up to R8,000 or first instalment, whichever is lower), Monthly care fee (5% up to R450/month), and PDA fees (R5-R15 per payment distribution). The restructuring fee is paid over several months with your first restructured payment, not upfront. Your free consultation comes at no cost.",
        },
      },
      {
        "@type": "Question",
        name: "Can I get credit while under debt review?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No, you cannot apply for or receive new credit while under debt review. This is a legal requirement designed to protect you from accumulating more debt while you work towards becoming debt-free.",
        },
      },
      {
        "@type": "Question",
        name: "Is DC Sam registered with the NCR?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, DC Sam is fully registered with the National Credit Regulator (NCR). You can verify our registration (NCRDC3995) on the NCR website.",
        },
      },
    ],
  }

  return (
    <div className="min-h-screen bg-[#FDFCF0]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-4">
              Got Questions? We&apos;ve Got Answers.
            </h1>
            <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
              Everything you want to know about debt counselling, credit repair, and how we can help &mdash; explained clearly and honestly.
            </p>
          </div>

          {/* General Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">General Questions</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="what-is-dcsa" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">What is DC Sam and what do you offer?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  We&apos;re DC Sam &mdash; a professional, NCR-registered debt counselling practice (NCRDC3995). We offer 
                  <strong>Debt Review</strong> (restructuring your debt into one affordable payment with legal protection) and 
                  <strong>Credit Repair</strong> (helping you understand and improve your credit information). 
                  We provide expert, judgment-free support to help South Africans find financial stability.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="who-can-help" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">Who can benefit from DC Sam&apos;s services?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  We help anyone in South Africa who is over-indebted &mdash; meaning you cannot meet all your debt obligations 
                  while covering essential living costs. If you&apos;re getting creditor calls, using credit to pay other debts, 
                  or feeling overwhelmed by interest, we have tools and legal processes to help you.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-start" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">How do I get started with DC Sam?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Start with a FREE, no-obligation assessment. You can use our calculators to see your situation, 
                  then message us on WhatsApp or call to speak with a professional. We&apos;ll explain your options 
                  honestly so you can make an informed decision for your future.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Debt Counselling Questions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-[#0D3B66] mb-6">Debt Counselling (Debt Review)</h2>
            <Accordion type="multiple" className="space-y-4">
              <AccordionItem value="what-is-debt-counselling" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">What is debt counselling?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  Debt counselling (debt review) is a formal legal process under the National Credit Act. 
                  It restructures your debts into one affordable monthly payment based on your actual affordability. 
                  Interest rates may be negotiated down, and you receive legal protection from creditors. 
                  It is a regulated path to becoming debt-free while maintaining a reasonable standard of living.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="how-long" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">How long does the debt review process take?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  <strong>The legal protection and relief starts as soon as your application is accepted.</strong> 
                  The initial assessment takes 1-2 weeks. The total duration of the plan depends on your debt amount 
                  and what you can afford to pay each month, typically ranging from 3 to 5 years. 
                  Once all debts are paid, you receive a clearance certificate.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="costs" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">How much does debt counselling cost?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  All fees are regulated by the NCR and built into your new monthly payment plan &mdash; you don&apos;t pay 
                  extra on top. They include an application fee, admin fee, restructuring fee (capped), and monthly 
                  aftercare fees. We discuss the exact fee structure during your assessment so there are no surprises.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="credit-score" className="border rounded-lg px-6 bg-white">
                <AccordionTrigger className="text-left">Will debt counselling affect my credit score?</AccordionTrigger>
                <AccordionContent className="text-[#0D3B66]/80 leading-relaxed">
                  A notation is placed on your credit record while you are under debt review to prevent further borrowing. 
                  However, it protects you from defaults and legal action. Once you complete the process and a 
                  clearance certificate is issued, the notation is removed, and you can start rebuilding your credit 
                  record from a clean slate.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact CTA */}
          <Card className="bg-[#FAF7E6] border-2 border-[#D4AF37]/20">
            <CardContent className="p-8 text-center space-y-6">
              <h2 className="text-2xl font-bold text-[#0D3B66]">Didn&apos;t Find Your Answer?</h2>
              <p className="text-[#0D3B66]/70 max-w-2xl mx-auto">
                Every financial situation is unique. Reach out for a private, professional conversation about your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#D4AF37] hover:bg-[#B8962E] text-white" asChild>
                  <a href="https://wa.me/27719006298" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-[#0D3B66] text-[#0D3B66]" asChild>
                  <a href="tel:+27719006298">
                    <Phone className="mr-2 h-5 w-5" /> Call 071 900 6298
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
