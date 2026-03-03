"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/lib/colors"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Will debt review damage my credit further?",
    answer: "Debt review will show on your credit record. This is important to understand upfront. However, so does defaulting — and defaulting does more damage. Debt review shows you're taking responsible action. Your timeline for credit repair starts once you complete debt review and get your clearance certificate, which typically takes 5-6 years.",
  },
  {
    question: "How much will I actually save?",
    answer: "Savings depend on the interest reductions your creditors agree to negotiate. We can't guarantee specific percentages, but typically clients see their monthly payment reduced by 20-40% through restructuring, plus the structured timeline keeps you from accumulating additional interest. The 'savings' is really the interest you won't pay because your debt is restructured and you'll finish paying in 5-6 years instead of 10+.",
  },
  {
    question: "Is DCSA actually legitimate?",
    answer: "Yes. We're NCR-regulated (NCR Registration Number on file). Cindy Killian, our team member, is an Acting Magistrate, which means she's been vetted by the South African legal system. We operate under the National Credit Act and follow NCR guidelines strictly. You can verify our registration anytime with the National Credit Regulator.",
  },
  {
    question: "What if my situation changes and I can't make the payment?",
    answer: "Contact us immediately. We can renegotiate the plan, adjust payments temporarily, or restructure again if needed. We've worked through thousands of situations — job loss, unexpected expenses, emergencies — and we know life happens. Communication is key; we work with you to find solutions.",
  },
  {
    question: "How long does debt review actually take?",
    answer: "Most debt review agreements are 5-6 years. It sounds long, but consider the alternative: paying minimum payments could take 10+ years while you accumulate more interest. Plus, you'll feel relief within the first 2-3 months once the plan is active — creditors stop calling, you have a clear path forward, and your stress eases.",
  },
  {
    question: "Can I get credit again after debt review?",
    answer: "Yes. Once you receive your clearance certificate (meaning you've completed the debt review process successfully), you can apply for credit again. Your record shows you honoured your agreement, which is actually viewed positively by lenders. Many of our past clients have been approved for credit after completion.",
  },
  {
    question: "What about emergency expenses during my repayment?",
    answer: "Tell us immediately if something changes. We're not here to punish you; we're here to help you succeed. Depending on your situation, we can sometimes adjust that month's payment, help you prioritize, or look at options. You're not locked in; you're working with us toward financial stability.",
  },
  {
    question: "Why not negotiate directly with creditors myself?",
    answer: "You can try, and some people do get concessions. But creditors are much more responsive to registered debt counsellors because we're regulated and have legal authority under the National Credit Act. They know we follow the process correctly, which gives our negotiations more weight. That's one reason having professional support makes such a difference.",
  },
]

export function FAQReassuranceSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <section className="py-16 md:py-20 px-4" id="faq" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Common Concerns — Answered Honestly
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            Real questions from real people. No sugarcoating, just straight answers.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Card 
              key={idx}
              className="border-2 cursor-pointer transition-all hover:shadow-md"
              style={{ borderColor: openFaq === idx ? colors.maroon : colors.sandLight }}
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <CardContent className="p-0">
                <button
                  className="w-full text-left p-6 flex items-start justify-between"
                  onClick={(e) => {
                    e.stopPropagation()
                    setOpenFaq(openFaq === idx ? null : idx)
                  }}
                >
                  <h3 
                    className="font-bold text-base pr-4 text-pretty"
                    style={{ color: colors.charcoal }}
                  >
                    {faq.question}
                  </h3>
                  {openFaq === idx ? (
                    <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                  ) : (
                    <ChevronDown className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                  )}
                </button>

                {openFaq === idx && (
                  <div 
                    className="px-6 pb-6 border-t"
                    style={{ borderColor: colors.sandLight }}
                  >
                    <p 
                      className="leading-relaxed text-pretty"
                      style={{ color: colors.charcoal }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final CTA */}
        <div 
          className="mt-12 p-6 md:p-8 rounded-lg border-2 text-center"
          style={{ 
            backgroundColor: colors.mintCalm + "10",
            borderColor: colors.mintCalm
          }}
        >
          <p 
            className="text-lg text-pretty mb-4"
            style={{ color: colors.charcoal }}
          >
            Still have questions? That's totally normal. 
            <br />
            Reach out and let's chat through your specific situation.
          </p>
          <p style={{ color: colors.warmGrey }}>
            No question is too small. No situation is too complicated.
          </p>
        </div>
      </div>
    </section>
  )
}
