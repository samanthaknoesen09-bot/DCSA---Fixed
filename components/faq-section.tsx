"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { colors } from "@/lib/colors"

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const faqs = [
    {
      id: "debt-review-cost",
      question: "What does debt review cost?",
      content: (
        <div className="space-y-4">
          <p style={{ color: colors.charcoal }}>
            All fees are set by the National Credit Regulator (NCR) 2018 Fee Guidelines. Here's exactly what to expect:
          </p>
          <ul className="space-y-3 text-sm">
            <li style={{ color: colors.charcoal }}>
              <strong>Application Fee:</strong> As per Schedule 2(2) of the National Credit Act (excl VAT)
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Administration Fee:</strong> R300 (excl VAT) - Covers consultation, Form 17.1 process, and DHS loading
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Restructuring Fee:</strong> Lesser of first instalment or R8,000 (excl VAT). Joint applications: up to R9,000
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Reckless Lending Fee:</strong> Up to R1,500 (excl VAT) per application if applicable, after assessment
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Monthly Care Fee:</strong> 5% (excl VAT) of monthly instalment, maximum R450 (excl VAT) per month
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Consent Order Fee:</strong> R500 (excl VAT) submission fee plus attorney filing fees as applicable
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Payment Distribution Agent (PDA):</strong> Distribution fees are charged per payment distributed and vary by PDA and payment amount. Your PDA will disclose the exact fee when you start.
            </li>
          </ul>
          <p className="pt-3 border-t" style={{ borderColor: colors.sandLight, color: colors.warmGrey }}>
            <strong>What this means:</strong> You know exactly what you're paying from day one. No hidden charges. All fees are NCR-compliant and transparent.
          </p>
        </div>
      )
    },
    {
      id: "automatic-debt-review",
      question: "If I message Sam, does that automatically put me under debt review?",
      content: (
        <p style={{ color: colors.charcoal }}>
          No. Messaging is just a chat. Sam will listen, answer your questions, and explain how debt review works. You're in complete control. Only after you've decided debt review is right for you—and you've gone through a proper assessment—does it formally begin. Nothing happens until you're ready and informed.
        </p>
      )
    },
    {
      id: "debt-review-eligibility",
      question: "How do I know if I qualify for debt review?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Generally, you qualify if you're over-indebted: your monthly debt commitments are more than 80% of your monthly income. This includes bonds, car finance, credit cards, store accounts, and personal loans. Not sure? Message Sam with your situation. A quick assessment is free and takes 15 minutes.
        </p>
      )
    },
    {
      id: "creditor-calls-stop",
      question: "Will debt review stop creditor calls?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Yes. Once you're approved for debt review, creditors are legally prohibited from contacting you directly. All communication and payments go through your payment distribution agent. Most people notice the difference within the first few weeks—the stress of constant calls just... stops.
        </p>
      )
    },
    {
      id: "car-in-debt-review",
      question: "Can my car be included in debt review?",
      content: (
        <p style={{ color: colors.charcoal }}>
          It depends. If you have a car loan financed through a credit provider, it can be included in your restructured plan. If you own the car outright, it's not part of debt review. If you're worried about losing your car, that's worth discussing with Sam. Solutions often exist that protect essential assets while reducing your overall instalment burden.
        </p>
      )
    },
    {
      id: "debt-review-duration",
      question: "How long does debt review take?",
      content: (
        <p style={{ color: colors.charcoal }}>
          The assessment phase usually takes 2-4 weeks. Once restructured, you're typically in the process for 5-6 years before getting clearance. But most people feel the difference immediately: one manageable payment instead of juggling multiple creditors, and no more creditor calls. The structure is what creates the breathing room.
        </p>
      )
    },
    {
      id: "credit-while-debt-review",
      question: "Can I still use credit while under debt review?",
      content: (
        <p style={{ color: colors.charcoal }}>
          No new credit applications should be made while under debt review. Your credit record shows you're under review, and most lenders won't extend credit. But that's actually the point: you're focused on clearing your existing debts, not adding new ones. Once you get clearance, you can rebuild and apply for credit again.
        </p>
      )
    },
    {
      id: "credit-record-impact",
      question: "Will debt review affect my credit record?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Your credit record will show that you're under debt review. But here's the reality: if you're over-indebted, your record is already at risk from missed payments and legal action. Debt review actually protects it by preventing defaults. Once you complete the process and get clearance, you start rebuilding with a clean slate.
        </p>
      )
    },
    {
      id: "missed-payment-consequences",
      question: "What happens if I miss a payment?",
      content: (
        <p style={{ color: colors.charcoal }}>
          If you miss a payment, it affects the restructure. Your payment distribution agent will contact you immediately. That's why we build the new payment plan around what you can actually afford—not what creditors want. If your circumstances change (job loss, emergency), we can adjust. Communication is key. Don't disappear; reach out.
        </p>
      )
    },
    {
      id: "debt-review-decline",
      question: "Can I be declined for debt review?",
      content: (
        <p style={{ color: colors.charcoal }}>
          It's possible but rare. You might be declined if you're not actually over-indebted, or if you have assets you could liquidate to pay debts instead. The assessment is designed to be fair—both to you and to creditors. If you're declined, we'll explain why and discuss alternatives that might work better for your situation.
        </p>
      )
    },
    {
      id: "why-dcsa-different",
      question: "What makes DCSA different?",
      content: (
        <div className="space-y-4">
          <p style={{ color: colors.charcoal }}>
            Most debt counsellors treat you like another file number. At DCSA, we're different:
          </p>
          <ul className="space-y-2 text-sm">
            <li style={{ color: colors.charcoal }}>
              <strong>You get Sam directly.</strong> Not a call centre. Not a queue. When you message, you're talking to the debt counsellor who knows your case.
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>No pressure.</strong> We explain everything clearly. You decide if debt review is right for you. We don't push you into it.
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Real conversations.</strong> We listen to your situation, not just your numbers. That's how we build a plan that actually works.
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Transparent fees.</strong> NCR-regulated, no surprises, no hidden charges. You know exactly what you're paying.
            </li>
            <li style={{ color: colors.charcoal }}>
              <strong>Your success matters.</strong> We're invested in seeing you complete the process and rebuild. That's the real measure of what we do.
            </li>
          </ul>
        </div>
      )
    }
  ]

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  // JSON-LD Schema for FAQ
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": typeof faq.content === "string" ? faq.content : extractTextFromContent(faq.content)
      }
    }))
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.white }}>
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
              Common Concerns — Honest Answers
            </h2>
            <p className="text-lg" style={{ color: colors.warmGrey }}>
              If you're thinking about debt review, it's normal to have questions. Below are the most common questions South Africans ask before speaking to a debt counsellor.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className="border rounded-xl overflow-hidden transition-all"
                style={{ borderColor: colors.sandLight }}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-opacity-50 transition-colors"
                  style={{ backgroundColor: expandedFAQ === faq.id ? colors.warmCream : colors.white }}
                  aria-expanded={expandedFAQ === faq.id}
                >
                  <span
                    className="font-semibold text-lg text-left"
                    style={{ color: colors.charcoal }}
                  >
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 ml-4">
                    {expandedFAQ === faq.id ? (
                      <ChevronUp className="w-5 h-5" style={{ color: colors.maroon }} />
                    ) : (
                      <ChevronDown className="w-5 h-5" style={{ color: colors.maroon }} />
                    )}
                  </div>
                </button>

                {expandedFAQ === faq.id && (
                  <div
                    className="px-6 py-4 border-t"
                    style={{ borderColor: colors.sandLight, backgroundColor: colors.warmCream }}
                  >
                    <div className="text-base leading-relaxed">
                      {faq.content}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-lg text-center" style={{ backgroundColor: colors.warmCream }}>
            <p className="text-lg font-semibold mb-3" style={{ color: colors.charcoal }}>
              Still have questions?
            </p>
            <p style={{ color: colors.warmGrey }}>
              Message Sam on WhatsApp or call for a 15-minute chat. No obligation, no pressure—just real answers to your situation.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

// Helper function to extract text from content for JSON-LD
function extractTextFromContent(content: any): string {
  if (typeof content === "string") return content
  if (!content?.props?.children) return ""
  
  const extractText = (node: any): string => {
    if (typeof node === "string") return node
    if (Array.isArray(node)) return node.map(extractText).join(" ")
    if (node?.props?.children) return extractText(node.props.children)
    return ""
  }
  
  return extractText(content)
}
