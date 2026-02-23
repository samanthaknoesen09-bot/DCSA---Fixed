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
        "Debt review is a legal process regulated by the South African National Credit Regulator (NCR). It's designed to help over-indebted consumers manage multiple debts responsibly.",
        "A registered debt counsellor works with your creditors to restructure your debt into a single, affordable monthly payment. It's not a bailout — it's a structured, legal path to financial stability.",
        "Yes, it shows on your credit record. But here's what matters: so does defaulting. Debt review shows you're taking action, which matters when you rebuild later.",
      ],
      whatToExpect: [
        "Honest assessment of your financial situation (no judgment, no shame)",
        "Detailed negotiation with creditors on your behalf",
        "A restructured payment plan that fits your actual budget",
        "Legal protection from creditor harassment while in the process",
        "Ongoing support and guidance throughout your journey",
      ],
    },
    {
      title: "Credit Repair Services",
      subtitle: "Rebuild Your Financial Reputation",
      description: "Rebuild your credit score step by step",
      details: [
        "Your credit score is your financial reputation. It affects loans, interest rates, rental applications, and even job prospects. If yours is damaged, it limits your options.",
        "Credit repair isn't magic or quick fixes. It's about understanding what damages your score, fixing what you can now, and systematically rebuilding trust over time.",
        "We help you understand the rules of the credit system so you can play the game smarter and protect yourself against future debt traps.",
      ],
      whatToExpect: [
        "Full credit report review and error identification",
        "Dispute resolution with credit bureaus for inaccuracies",
        "Actionable guidance on building good credit habits",
        "Monitoring and ongoing support as your score improves",
        "Education on avoiding common credit mistakes",
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
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
