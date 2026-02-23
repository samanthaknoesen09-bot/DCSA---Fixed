import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { GentleAffiliateFooter } from "@/components/gentle-affiliate-footer"

export function ServicesClient() {
  const services = [
    {
      title: "Debt Review in South Africa",
      subtitle: "NCR Registered Debt Counselling",
      description: "Understand if debt review is right for you",
      details: [
        "Debt review is a legal process regulated by the South African National Credit Regulator (NCR) under the National Credit Act. It's designed to help over-indebted consumers restructure their debts into a manageable plan based on affordability.",
        "When you enter debt review, a registered debt counsellor (like Sam) assesses your income and expenses, then works with your creditors to restructure your debts. The goal is to create a single monthly payment that works with your actual budget.",
        "Debt review will appear on your credit record. This is important to understand upfront. However, it shows you're taking responsible action — which matters when you rebuild your credit later.",
      ],
      whatToExpect: [
        "Honest assessment of your full financial situation — no judgment",
        "Detailed negotiation with creditors on your behalf to restructure payments",
        "A manageable monthly payment plan (based on what you can realistically afford)",
        "Legal protection from creditor harassment while your case is in review",
        "Ongoing counselling and support throughout the restructuring process",
      ],
      important: [
        "Debt review restructures your repayments based on what you can afford — it does not reduce the total amount owed",
        "Interest reductions may be negotiated with creditors, but they are not guaranteed",
        "Your payment reduction depends on the restructured terms negotiated with creditors, not on reducing the principal balance",
        "Joint bond parties remain jointly and severally liable — both parties remain responsible for the debt",
        "Divorce does not remove contractual liability — debt obligations continue after separation",
        "Final repayment terms depend on court or National Credit Tribunal (NCT) order",
        "Debt review requires some ability to pay — if you have no disposable income, you may not qualify",
        "All processes are conducted in line with the National Credit Act and current NCR Guidelines",
      ],
    },
    {
      title: "Credit Repair Services",
      subtitle: "Rebuild Your Financial Reputation",
      description: "Rebuild your credit score step by step",
      details: [
        "Your credit score is your financial reputation. It affects your ability to access loans, interest rates you're offered, rental applications, and can even impact employment opportunities.",
        "Credit repair isn't a quick fix. It's about understanding what damages your score, correcting inaccuracies that exist, and systematically rebuilding positive credit behaviour over time.",
        "We help you understand how the credit system works so you can make smarter financial decisions and protect yourself from future debt traps.",
      ],
      whatToExpect: [
        "Full credit report review from all three major credit bureaus",
        "Identification and dispute of errors or inaccuracies on your record",
        "Guidance on building positive credit habits going forward",
        "Regular monitoring and support as your score improves",
        "Education on how to maintain good credit long-term",
      ],
      important: [
        "You have the right to dispute inaccurate credit information",
        "Credit bureaus must obtain credible, verifiable evidence — bare confirmations are not sufficient",
        "Disputed listings are masked during the investigation period",
        "If creditors cannot provide credible evidence within the prescribed timeframe, the information must be removed",
        "Valid and accurate listings cannot be removed — credit repair works with facts, not magic",
        "Credit score improvement takes time — typically 6-24 months depending on your situation",
        "Negative items remain on your record for set periods (defaults, judgements, etc.) as per law",
        "Credit repair works best when combined with stable, responsible payment behaviour",
      ],
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
            Debt Counselling & Credit Repair in South Africa
          </h1>
          <p className="text-xl" style={{ color: colors.warmGrey }}>
            We don't sell quick fixes. We offer real solutions built on education, honesty, and your specific situation.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="space-y-12">
            {services.map((service, idx) => (
              <Card
                key={idx}
                className="border-2 overflow-hidden shadow-lg hover:shadow-xl transition-all"
                style={{ borderColor: colors.sandLight, borderRadius: "18px" }}
              >
                <CardContent className="p-8 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold" style={{ color: colors.maroon }}>
                      {service.title}
                    </h2>
                    {service.subtitle && (
                      <p className="text-sm font-semibold mt-2" style={{ color: colors.mintCalm }}>
                        {service.subtitle}
                      </p>
                    )}
                  </div>

                  <div className="space-y-4">
                    {service.details.map((detail, i) => (
                      <p key={i} className="text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                        {detail}
                      </p>
                    ))}
                  </div>

                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 border" style={{ borderColor: colors.sandLight }}>
                    <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.charcoal }}>
                      <CheckCircle className="h-5 w-5" style={{ color: colors.maroon }} />
                      What to expect
                    </h3>
                    <ul className="space-y-2">
                      {service.whatToExpect.map((item, i) => (
                        <li key={i} className="flex gap-3" style={{ color: colors.charcoal }}>
                          <span className="text-sm font-semibold mt-1" style={{ color: colors.maroon }}>→</span>
                          <span className="text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.important && (
                    <div 
                      className="rounded-lg p-6 border-2"
                      style={{ 
                        borderColor: colors.maroon + "30",
                        backgroundColor: colors.maroon + "05"
                      }}
                    >
                      <h3 className="font-bold mb-4" style={{ color: colors.charcoal }}>
                        Important to Know
                      </h3>
                      <ul className="space-y-2">
                        {service.important.map((item, i) => (
                          <li key={i} className="flex gap-3" style={{ color: colors.charcoal }}>
                            <span className="text-xs font-bold mt-1" style={{ color: colors.maroon }}>•</span>
                            <span className="text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN YOUR INCOME CHANGES SECTION */}
      <section className="py-16 px-4" style={{ backgroundColor: colors.warmCream }}>
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 overflow-hidden" style={{ borderColor: colors.mintCalm }}>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-2" style={{ color: colors.charcoal }}>
                  When Your Income Changes
                </h2>
                <p className="text-lg" style={{ color: colors.warmGrey }}>
                  Life happens. Job loss. Salary cuts. New opportunities. Here's what to do if your situation changes.
                </p>
              </div>

              <div className="space-y-4">
                <p style={{ color: colors.charcoal }}>
                  If your income changes significantly — whether you lose your job, get a salary increase, or face unexpected circumstances — you can submit a <strong>Form 17.3 (Change in Circumstance Notice)</strong> to your creditors and the Payment Distribution Agent (PDA).
                </p>

                <div 
                  className="p-6 rounded-lg border-l-4"
                  style={{ 
                    borderColor: colors.maroon,
                    backgroundColor: colors.maroon + "05"
                  }}
                >
                  <h3 className="font-bold mb-3" style={{ color: colors.charcoal }}>
                    Important to know about Form 17.3:
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>It is a formal notice that you've experienced a change in your financial situation</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>It is <strong>not</strong> an automatic payment holiday or pause</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>It does <strong>not</strong> override your existing court or NCT order</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>Supporting documents are required (retrenchment letter, new employment letter, medical proof, etc.)</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>A revised payment proposal may be required based on your new circumstances</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>Court variation may be necessary if significant restructuring is needed</span>
                    </li>
                    <li className="flex gap-3" style={{ color: colors.charcoal }}>
                      <span className="text-sm font-bold mt-1" style={{ color: colors.maroon }}>→</span>
                      <span>It should be used carefully and only when genuinely needed — not as a short-term escape</span>
                    </li>
                  </ul>
                </div>

                <div style={{ backgroundColor: colors.mintCalm + "20", padding: "1.5rem", borderRadius: "0.5rem" }}>
                  <p style={{ color: colors.charcoal }} className="font-medium">
                    Why we emphasise this: Long-term stability matters more than short-term relief. We help you navigate genuine changes, not create workarounds. If something's changed, tell us. We'll work out what's actually possible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
      <section
        className="py-16 px-4"
        style={{
          background: `linear-gradient(135deg, ${colors.softPeach}20 0%, ${colors.mintCalm}10 100%)`,
        }}
      >
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.charcoal }}>
            Ready to explore your options?
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.warmGrey }}>
            No pressure. No judgment. Just an honest conversation about what might work for your situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white font-semibold shadow-md hover:shadow-lg transition-all items-center gap-2 px-8 py-6 text-lg"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Coffee className="h-5 w-5" />
                Let's Chat
              </a>
            </Button>
            <Button
              variant="outline"
              className="font-semibold px-8 py-6 text-lg"
              style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="/calculator">
                Try Free Tools
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* GENTLE AFFILIATE FOOTER */}
      <GentleAffiliateFooter buttonText="Check Insurance Savings" />
    </main>
  )
}
