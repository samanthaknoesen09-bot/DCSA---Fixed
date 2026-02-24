import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowRight, CheckCircle, Info, Calendar, FileText, AlertCircle, ShieldCheck } from "lucide-react"
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
        "Debt review is a legal process regulated by the South African National Credit Regulator (NCR) under the National Credit Act. It restructures your repayments into a manageable plan based on what you can actually afford.",
        "When you enter debt review, a registered debt counsellor (like Sam) assesses your income and expenses, then negotiates with your creditors. This process provides legal protection and a structured path toward financial stability.",
        "It's important to know: Joint bond parties remain jointly and severally liable, and divorce does not remove contractual liability. Debt review requires some ability to pay each month.",
      ],
      whatToExpect: [
        "Honest assessment of your full financial situation — no judgment",
        "Detailed negotiation with creditors on your behalf to restructure payments",
        "A single, manageable monthly payment plan",
        "Legal protection from creditor harassment while your case is in review",
        "Ongoing support and guidance throughout the restructuring process",
      ],
      important: [
        "Debt review restructures repayments based on affordability.",
        "Interest rate reductions may be negotiated but are not guaranteed.",
        "Balances and total debt do not automatically decrease.",
        "Final repayment terms depend on a court or NCT order.",
        "Debt review will appear on your credit record until a clearance certificate is issued.",
      ],
    },
    {
      title: "Credit Repair Services",
      subtitle: "Professional Record Correction",
      description: "Exercise your right to accurate credit information",
      details: [
        "Your credit score is your financial reputation. South Africans have the right to dispute inaccurate or outdated credit information under the National Credit Act.",
        "Credit bureaus must obtain credible, verifiable evidence for any listings. Bare confirmations are not sufficient. If credible evidence cannot be produced within the prescribed timeframe, the information must be removed.",
        "We help you navigate this structured, professional process. Please note: Valid and accurate listings cannot be removed, and there are no overnight fixes.",
      ],
      whatToExpect: [
        "Full credit report review from all major bureaus",
        "Identification of inaccurate, outdated or unverified listings",
        "Formal dispute submission and follow-up with credit bureaus",
        "Listings are masked (hidden) during the investigation period",
        "Clearance of successfully disputed items from your record",
      ],
      important: [
        "Consumers have the right to dispute inaccurate credit information.",
        "Credit bureaus must produce verifiable evidence or remove the listing.",
        "Valid and accurate listings remain on your record for prescribed periods.",
        "This is a professional, structured process — not an overnight fix.",
        "DCSA provides guidance, but outcomes depend on the accuracy of the data found.",
      ],
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
            Debt Counselling & Credit Repair
          </h1>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
            No judgment. Just clarity. We offer real solutions built on honesty, compliance, and your specific situation.
          </p>
          <p className="mt-4 text-sm font-medium" style={{ color: colors.maroon }}>
            All processes are conducted in line with the National Credit Act and current NCR Guidelines.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-8 px-4">
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

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white rounded-lg p-6 border" style={{ borderColor: colors.sandLight }}>
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
                        <h3 className="font-bold mb-4 flex items-center gap-2" style={{ color: colors.charcoal }}>
                          <Info className="h-5 w-5" style={{ color: colors.maroon }} />
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
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* When Your Income Changes Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card 
            className="border-0 shadow-md overflow-hidden" 
            style={{ backgroundColor: colors.white, borderRadius: "24px" }}
          >
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full" style={{ backgroundColor: colors.softPeach + "40" }}>
                  <Calendar className="h-6 w-6" style={{ color: colors.maroon }} />
                </div>
                <h2 className="text-3xl font-bold" style={{ color: colors.charcoal }}>
                  When Your Income Changes
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-10 items-start">
                <div className="space-y-4">
                  <p className="text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                    Life doesn't always go in a straight line. If your financial situation changes due to job loss, a new position, or unexpected life events, we use <strong>Form 17.3</strong> to notify your creditors of a Change in Circumstance.
                  </p>
                  <p className="text-lg leading-relaxed" style={{ color: colors.charcoal }}>
                    This is a protective measure used carefully to ensure your plan remains stable and realistic for your new reality.
                  </p>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                  <h3 className="font-bold mb-4 text-sm uppercase tracking-wider" style={{ color: colors.warmGrey }}>
                    Key Points to Understand
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <AlertCircle className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
                      <p className="text-sm" style={{ color: colors.charcoal }}>
                        This is not a "payment holiday" — it is a formal notification of change.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <FileText className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
                      <p className="text-sm" style={{ color: colors.charcoal }}>
                        Supporting documents are required to verify your new situation.
                      </p>
                    </li>
                    <li className="flex gap-3">
                      <ShieldCheck className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
                      <p className="text-sm" style={{ color: colors.charcoal }}>
                        A revised proposal or court variation may be necessary to keep you protected.
                      </p>
                    </li>
                  </ul>
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <p className="text-xs italic" style={{ color: colors.warmGrey }}>
                      We prioritize your long-term stability over short-term relief. Form 17.3 does not override existing court or NCT orders.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 px-4"
        style={{
          background: `linear-gradient(135deg, ${colors.softPeach}20 0%, ${colors.mintCalm}10 100%)`,
        }}
      >
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ color: colors.charcoal }}>
            Let's look at your numbers
          </h2>
          <p className="text-lg mb-8" style={{ color: colors.warmGrey }}>
            No pressure. No judgment. Just a clear conversation with Sam or the team about which options actually fit your life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="text-white font-semibold shadow-md hover:shadow-lg transition-all items-center gap-2 px-8 py-6 text-lg"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Coffee className="h-5 w-5" />
                Chat to Sam
              </a>
            </Button>
            <Button
              variant="outline"
              className="font-semibold px-8 py-6 text-lg"
              style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="/calculator">
                Show me my options
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
