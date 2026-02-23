"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/lib/colors"
import { ChevronDown, ChevronUp } from "lucide-react"

const faqs = [
  {
    question: "Will debt review damage my credit further?",
    answer: "It will show on your credit record, yes. But here's what matters: you're already struggling to pay, so your credit isn't great now anyway. Debt review shows you're taking action. Once you complete it (usually 5-6 years), you can rebuild. Many people's scores improve faster after debt review than if they ignored the problem and defaulted.",
  },
  {
    question: "Can I afford the fees?",
    answer: "Our fees are built into your monthly payment plan. You're not paying extra on top — they're part of the restructured payment. On average, fees are R400-R800/month, and you're typically saving R3,000-R5,000/month through restructuring. So you actually come out ahead.",
  },
  {
    question: "Is this a scam?",
    answer: "No. We're NCR-regulated (Registration Number: NCRDC3995) and also verified as an Acting Magistrate partner. We follow South African law strictly. We're a real business that's been helping people for over a decade. You can verify our registration anytime with the NCR.",
  },
  {
    question: "What if I can't make the new payment?",
    answer: "Tell us immediately. We can renegotiate, pause payments, or adjust the plan. Communication is key. We've handled thousands of situations and we'll work with you to find a solution. That's what we're here for.",
  },
  {
    question: "How long does this really take?",
    answer: "Most debt review programs are 5-6 years. It sounds long, but it's typically shorter than paying minimum payments on your own (which could take 10+ years). Once you're on the plan, you'll feel relief much faster — usually within the first 2-3 months.",
  },
  {
    question: "Will I ever get credit again after debt review?",
    answer: "Yes. Once you complete debt review and get your clearance certificate, you can apply for credit again. Many of our clients do and get approved. Your credit record shows you completed the process successfully, which is actually a positive sign.",
  },
  {
    question: "What if I have emergency expenses?",
    answer: "We work with you. If something unexpected comes up, tell us. We can sometimes adjust that month's payment or help you find a solution. You're not locked in; you're working with us to improve your situation.",
  },
  {
    question: "Can I negotiate with creditors on my own?",
    answer: "You can try, but creditors are less likely to listen to individuals. They respond to registered debt counsellors because we're regulated and have legal authority. That's one reason having us in your corner makes such a difference.",
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
