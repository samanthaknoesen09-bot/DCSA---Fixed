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
            What This Actually Costs
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            No surprises. No hidden fees. Just transparent costs so you know exactly what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* WITHOUT DCSA */}
          <Card className="border-2" style={{ borderColor: colors.sandLight }}>
            <CardContent className="p-8 space-y-6">
              <h3 
                className="text-2xl font-bold"
                style={{ color: colors.charcoal }}
              >
                Without Debt Review
              </h3>
              
              <div className="space-y-4">
                <div className="border-b" style={{ borderColor: colors.sandLight }}>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>
                    Example: R850,000 debt at 18% interest
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>Monthly interest alone:</span>
                    <strong style={{ color: colors.maroon }}>R12,750</strong>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>Minimum monthly payment:</span>
                    <strong style={{ color: colors.maroon }}>~R14,200</strong>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>Years to repay (minimum payments):</span>
                    <strong style={{ color: colors.maroon }}>7-10 years</strong>
                  </div>
                  <div className="flex justify-between pt-3 border-t" style={{ borderColor: colors.sandLight }}>
                    <span style={{ color: colors.charcoal }}>Total interest paid:</span>
                    <strong style={{ color: colors.maroon }}>R600,000+</strong>
                  </div>
                </div>

                <div 
                  className="p-3 rounded-lg flex gap-2"
                  style={{ backgroundColor: colors.softPeach + "20" }}
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.softPeach }} />
                  <p className="text-sm" style={{ color: colors.charcoal }}>
                    Creditors can call anytime. You're always stressed.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* WITH DCSA */}
          <Card 
            className="border-2 shadow-lg"
            style={{ borderColor: colors.mintCalm }}
          >
            <CardContent className="p-8 space-y-6">
              <h3 
                className="text-2xl font-bold"
                style={{ color: colors.charcoal }}
              >
                With DCSA Debt Review
              </h3>
              
              <div className="space-y-4">
                <div className="border-b" style={{ borderColor: colors.mintCalm }}>
                  <p className="text-sm" style={{ color: colors.warmGrey }}>
                    Same R850,000 debt, restructured
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>Restructured monthly payment:</span>
                    <strong style={{ color: colors.mintCalm }}>~R9,200</strong>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>DCSA counselling fee (average):</span>
                    <strong style={{ color: colors.charcoal }}>~R650</strong>
                  </div>
                  <div className="flex justify-between">
                    <span style={{ color: colors.charcoal }}>Repayment timeline:</span>
                    <strong style={{ color: colors.mintCalm }}>5-6 years</strong>
                  </div>
                  <div className="flex justify-between pt-3 border-t" style={{ borderColor: colors.mintCalm }}>
                    <span style={{ color: colors.charcoal }}>You save approximately:</span>
                    <strong style={{ color: colors.mintCalm }}>R300,000+</strong>
                  </div>
                </div>

                <div 
                  className="p-3 rounded-lg flex gap-2"
                  style={{ backgroundColor: colors.mintCalm + "20" }}
                >
                  <Check className="w-5 h-5 flex-shrink-0" style={{ color: colors.mintCalm }} />
                  <p className="text-sm" style={{ color: colors.charcoal }}>
                    Legal protection from creditors. You can breathe again.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
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
            className="font-bold mb-3"
            style={{ color: colors.charcoal }}
          >
            Our Fees Breakdown (Transparent)
          </h4>
          <ul className="space-y-2">
            <li className="flex gap-3">
              <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
              <span style={{ color: colors.charcoal }}>
                <strong>Initial Assessment:</strong> Free consultation to understand your situation
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
              <span style={{ color: colors.charcoal }}>
                <strong>Monthly Counselling Fee:</strong> NCR-regulated (varies by debt size, typically R400-R800/month)
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
              <span style={{ color: colors.charcoal }}>
                <strong>No hidden charges:</strong> What we quote is what you pay
              </span>
            </li>
            <li className="flex gap-3">
              <Check className="w-4 h-4 mt-1 flex-shrink-0" style={{ color: colors.maroon }} />
              <span style={{ color: colors.charcoal }}>
                <strong>We only succeed when you do:</strong> Our incentive is your financial freedom
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
