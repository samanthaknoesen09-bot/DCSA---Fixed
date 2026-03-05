"use client"

import { colors } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Banknote, CalendarClock, ShoppingCart, AlertTriangle, Repeat, CalendarCheck, ShieldCheck, ListChecks, Target } from "lucide-react"

export function SalaryComparisonSection() {
  const withoutPlanSteps = [
    { icon: Banknote, title: "Salary in", subtitle: "Money lands… then the month starts taking." },
    { icon: CalendarClock, title: "Debit orders hit", subtitle: "Accounts pull on different days, sometimes without warning." },
    { icon: ShoppingCart, title: "Essentials still need paying", subtitle: "Groceries, petrol, school costs, data — all from what's left." },
    { icon: AlertTriangle, title: "Arrears & pressure build", subtitle: "Missed payments, penalty fees, calls and stress." },
    { icon: Repeat, title: "The cycle repeats", subtitle: "Borrowing more just to get to month-end." },
  ]

  const withPlanSteps = [
    { icon: Banknote, title: "Salary in", subtitle: "Your income stays the starting point — not the problem." },
    { icon: CalendarCheck, title: "One reduced instalment", subtitle: "One fixed payment on a set date via an approved PDA." },
    { icon: ShieldCheck, title: "Legal protection", subtitle: "Creditors must follow the debt review process." },
    { icon: ListChecks, title: "Structured repayment plan", subtitle: "A clear, managed plan based on what you can actually afford." },
    { icon: Target, title: "A real finish line", subtitle: "Debt reduces steadily, with a timeline to completion." },
  ]

  return (
    <section id="salary-flow" className="py-16 md:py-24 px-4" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: colors.charcoal }}>
            Same salary. Smarter plan.
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
            If debit orders eat first, you're left stressing about the rest of the month. Debt review helps you take back control with one reduced payment and a clear end date.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* WITHOUT A PLAN */}
          <Card className="rounded-2xl overflow-hidden border-l-4" style={{ borderLeftColor: colors.softPeach, borderTop: `1px solid ${colors.sandLight}`, borderRight: `1px solid ${colors.sandLight}`, borderBottom: `1px solid ${colors.sandLight}`, backgroundColor: colors.white }}>
            <CardContent className="p-8">
              <div className="mb-6 pb-6 border-b" style={{ borderColor: colors.sandLight }}>
                <p className="font-semibold text-sm uppercase tracking-wide" style={{ color: colors.warmGrey }}>
                  WITHOUT A PLAN
                </p>
              </div>

              <div className="space-y-6">
                {withoutPlanSteps.map((step, idx) => {
                  const IconComponent = step.icon
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colors.softPeach + "30" }}>
                          <IconComponent className="w-5 h-5" style={{ color: colors.softPeach }} />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: colors.charcoal }}>
                          {idx + 1}. {step.title}
                        </p>
                        <p className="text-sm mt-1" style={{ color: colors.warmGrey }}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.sandLight }}>
                <p className="inline-block px-4 py-2 rounded-full font-semibold text-sm" style={{ backgroundColor: colors.softPeach + "20", color: colors.softPeach }}>
                  Same panic. Every month.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* WITH DEBT REVIEW */}
          <Card className="rounded-2xl overflow-hidden border-l-4 shadow-lg" style={{ borderLeftColor: colors.maroon, borderTop: `1px solid ${colors.maroon}30`, borderRight: `1px solid ${colors.maroon}30`, borderBottom: `1px solid ${colors.maroon}30`, backgroundColor: colors.white }}>
            <CardContent className="p-8">
              <div className="mb-6 pb-6 border-b" style={{ borderColor: colors.maroon }}>
                <p className="font-semibold text-sm uppercase tracking-wide" style={{ color: colors.maroon }}>
                  WITH DEBT REVIEW (DCSA)
                </p>
              </div>

              <div className="space-y-6">
                {withPlanSteps.map((step, idx) => {
                  const IconComponent = step.icon
                  return (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full" style={{ backgroundColor: colors.maroon + "20" }}>
                          <IconComponent className="w-5 h-5" style={{ color: colors.maroon }} />
                        </div>
                      </div>
                      <div>
                        <p className="font-semibold text-sm" style={{ color: colors.charcoal }}>
                          {idx + 1}. {step.title}
                        </p>
                        <p className="text-sm mt-1" style={{ color: colors.warmGrey }}>
                          {step.subtitle}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="mt-8 pt-6 border-t" style={{ borderColor: colors.maroon }}>
                <p className="inline-block px-4 py-2 rounded-full font-semibold text-sm text-white" style={{ backgroundColor: colors.maroon }}>
                  Control, stability, progress.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <Button
            size="lg"
            className="rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.maroon }}
            asChild
          >
            <Link href="https://www.dcsam.co.za/calculator">
              See what your new instalment could be
            </Link>
          </Button>
          <p className="text-sm" style={{ color: colors.warmGrey }}>
            We'll tell you honestly if debt review is the right fit — and what your options are if it's not.
          </p>
        </div>
      </div>
    </section>
  )
}
