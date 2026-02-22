import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { GentleAffiliateFooter } from "@/components/gentle-affiliate-footer"

export function ServicesClient() {
  const services = [
    {
      title: "Debt Review",
      description: "Understand if debt review is right for you",
      details: [
        "Debt review is a legal process that helps over-indebted consumers manage multiple debts. It's not a free pass — it's a structured plan.",
        "A debt counsellor (like us) works with your creditors to create a budget and payment plan that actually fits your life.",
        "It shows up on your credit record, but it also shows you're taking action. That matters.",
      ],
      whatToExpect: [
        "Assessment of your financial situation (honestly, without judgment)",
        "Negotiation with your creditors on your behalf",
        "A monthly payment plan you can actually stick to",
        "Support throughout the process",
      ],
    },
    {
      title: "Credit Repair",
      description: "Rebuild your credit score step by step",
      details: [
        "Your credit score is like a financial reputation. If it's damaged, it affects everything — loans, rates, even job prospects.",
        "Credit repair isn't magic. It's about understanding what hurts your score, fixing what you can, and giving time to heal the rest.",
        "We help you understand the rules so you can play the game better.",
      ],
      whatToExpect: [
        "Credit report review and error correction",
        "Dispute resolution with credit bureaus",
        "Guidance on building good credit habits",
        "Ongoing support as your score improves",
      ],
    },
  ]

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      {/* Hero */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
            Our Services
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
                  <h2 className="text-3xl font-bold" style={{ color: colors.maroon }}>
                    {service.title}
                  </h2>

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
