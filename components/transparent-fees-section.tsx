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
            NCR-Regulated Fees (Transparent Breakdown)
          </h4>
          <div className="space-y-3 text-sm">
            <p style={{ color: colors.warmGrey }}>
              All fees are set by NCR guidelines. Here's exactly what to expect:
            </p>
            <ul className="space-y-2">
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Application Fee:</strong> R50 (excl VAT)
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Restructuring Fee:</strong> Capped at R6,000 or first instalment (whichever is lower) excl VAT
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Aftercare Fee (First 24 months):</strong> 5% up to R400 excl VAT per month
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Aftercare Fee (Thereafter):</strong> 3% up to R400 excl VAT per month
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Consent Order Legal Fee:</strong> R750 excl VAT
                </span>
              </li>
              <li className="flex gap-3">
                <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
                <span style={{ color: colors.charcoal }}>
                  <strong>Payment Distribution Agent (PDA):</strong> Fees apply as per your PDA agreement
                </span>
              </li>
            </ul>
            <p className="pt-3 border-t" style={{ borderColor: colors.sandLight, color: colors.warmGrey }}>
              <strong>No hidden charges:</strong> What we quote is exactly what you pay. All fees are NCR-compliant and transparent from day one.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
