"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Coffee, ArrowRight, CheckCircle, Info, Calendar, FileText, AlertCircle, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"


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
    </main>
  )
}
