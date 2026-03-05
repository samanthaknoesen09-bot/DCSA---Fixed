"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import { colors } from "@/lib/colors"

export function FAQSection() {
  const [expandedFAQ, setExpandedFAQ] = useState<string | null>(null)

  const faqs = [
    {
      id: "debt-review-cost",
      question: "What does debt review cost? (NCR fee guideline breakdown)",
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
      id: "how-long-process",
      question: "How long does the debt review process take?",
      content: (
        <p style={{ color: colors.charcoal }}>
          The assessment phase usually takes 2-4 weeks. Once we restructure your debt, you'll typically be in the process for 5-6 years before getting clearance. But most people start feeling breathing space within the first month—fewer phone calls, one manageable payment instead of juggling multiple creditors.
        </p>
      )
    },
    {
      id: "credit-score-impact",
      question: "Will debt review hurt my credit score?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Your credit record will reflect that you're under debt review. But here's the thing: if you're over-indebted, your score is already at risk. Debt review actually protects it by preventing defaults and legal action. Once you complete it and get clearance, you can rebuild and apply for credit again.
        </p>
      )
    },
    {
      id: "legal-protection",
      question: "What legal protection do I get?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Once approved for debt review, creditors are legally prohibited from contacting you directly about payments. No more threatening calls. Your payments go through your payment distribution agent to creditors on your behalf. It's formal, legal protection under the National Credit Act.
        </p>
      )
    },
    {
      id: "early-exit",
      question: "Can I exit debt review early?",
      content: (
        <p style={{ color: colors.charcoal }}>
          Yes, but only in specific circumstances—like if your financial situation significantly improves and you can pay all your debts in full. We'd help you navigate this. But the process exists for a reason: to give you and your creditors a structured, fair path. Sticking with it usually means actual freedom at the end.
        </p>
      )
    }
  ]

  const toggleFAQ = (id: string) => {
    setExpandedFAQ(expandedFAQ === id ? null : id)
  }

  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Questions We Hear Often
          </h2>
          <p className="text-lg" style={{ color: colors.warmGrey }}>
            Honest answers to the things people worry about most.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id}>
              <button
                onClick={() => toggleFAQ(faq.id)}
                className="w-full text-left p-5 rounded-lg border-2 transition-all cursor-pointer hover:bg-opacity-50"
                style={{
                  backgroundColor: expandedFAQ === faq.id ? colors.warmCream : "transparent",
                  borderColor: expandedFAQ === faq.id ? colors.maroon : colors.sandLight,
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                    {faq.question}
                  </h3>
                  {expandedFAQ === faq.id ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                  )}
                </div>
              </button>

              {expandedFAQ === faq.id && (
                <div className="p-6 bg-white rounded-b-lg border-2 border-t-0" style={{ borderColor: colors.maroon }}>
                  {faq.content}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 rounded-lg" style={{ backgroundColor: colors.warmCream, borderLeft: `4px solid ${colors.maroon}` }}>
          <p style={{ color: colors.charcoal }}>
            <strong>Don't see your question?</strong> Message me on WhatsApp and we'll chat through whatever's on your mind. No question is too small.
          </p>
        </div>
      </div>
    </section>
  )
}
