"use client"

import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/lib/colors"
import { Check, AlertCircle } from "lucide-react"

export function TransparentFeesSection() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Transparent Fees - No Hidden Charges
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            All fees are NCR-regulated and set by law. Here's exactly what to expect with no surprises.
          </p>
        </div>

        {/* TRANSPARENCY NOTE */}
        <div 
          className="p-6 rounded-lg border-2"
          style={{ 
            backgroundColor: colors.warmCream,
            borderColor: colors.sandLight
          }}
        >
          <h4 
            className="font-bold mb-4"
            style={{ color: colors.charcoal }}
          >
            NCR-Regulated Fees 2018 Guidelines (Transparent Breakdown)
          </h4>
          <div className="space-y-3 text-sm">
            <p style={{ color: colors.warmGrey }}>
              All fees are set by the National Credit Regulator (NCR) 2018 Fee Guidelines. Here's exactly what to expect:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Application Fee:</strong> As per Schedule 2(2) of the National Credit Act (excl VAT)
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Administration Fee:</strong> R300 (excl VAT) - Covers consultation, Form 17.1 process, and DHS loading
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Restructuring Fee:</strong> Lesser of first instalment or R8,000 (excl VAT). Joint applications: up to R9,000
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Reckless Lending Fee:</strong> Up to R1,500 (excl VAT) per application if applicable, after assessment
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Monthly Care Fee:</strong> 5% (excl VAT) of monthly instalment, maximum R450 (excl VAT) per month
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Consent Order Fee:</strong> R500 (excl VAT) submission fee plus attorney filing fees as applicable
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Payment Distribution Agent:</strong> R5-R15 per payment distributed, depending on amount (see details below)
                </span>
              </li>
            </ul>
            <p className="pt-3 border-t" style={{ borderColor: colors.sandLight, color: colors.warmGrey }}>
              <strong>No hidden charges:</strong> What we quote is exactly what you pay. All fees are NCR-compliant and transparent from day one.
            </p>

            {/* PDA Fee Breakdown */}
            <div className="mt-4 p-3 rounded-lg" style={{ backgroundColor: colors.warmBeige + "30" }}>
              <p className="text-xs font-semibold mb-2" style={{ color: colors.charcoal }}>
                Payment Distribution Agent (PDA) Fees per distribution:
              </p>
              <ul className="text-xs space-y-1" style={{ color: colors.charcoal }}>
                <li>• R5.00 per payment between R100-R200 per credit agreement</li>
                <li>• R10.00 per payment between R201-R500 per credit agreement</li>
                <li>• R15.00 per payment exceeding R500 per credit agreement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
