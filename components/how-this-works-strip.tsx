"use client"

import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/lib/colors"
import { MessageCircle, BarChart3, Handshake, TrendingUp } from "lucide-react"

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Have a Chat",
    description: "Message or call us. Tell your situation — no judgment, no pressure. This is just about understanding where you are.",
    color: colors.maroon,
  },
  {
    number: "2",
    icon: BarChart3,
    title: "We Assess & Plan",
    description: "We review your debts, income, and priorities. We show you your options in plain language. You decide what feels right.",
    color: colors.softPeach,
  },
  {
    number: "3",
    icon: Handshake,
    title: "We Negotiate",
    description: "We contact your creditors on your behalf. We work to negotiate a structured plan, which may include reduced payments and legal protection from creditor action.",
    color: colors.mintCalm,
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "You Rebuild",
    description: "Make one structured payment to us. We distribute to your creditors. You receive ongoing support and guidance on your path toward financial stability.",
    color: colors.warmBeige,
  },
]

export function HowThisWorksStrip() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Here&apos;s How This Works
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            Simple steps. Real progress. No complicated jargon.
          </p>
        </div>

        {/* DESKTOP: Horizontal Step Line */}
        <div className="hidden md:block">
          {/* Connecting Line */}
          <div className="relative mb-12">
            <div
              className="absolute top-12 left-0 right-0 h-1"
              style={{
                background: `linear-gradient(90deg, ${colors.maroon}, ${colors.softPeach}, ${colors.mintCalm}, ${colors.warmBeige})`,
              }}
            />

            <div className="grid grid-cols-4 gap-6 relative">
              {steps.map((step, index) => (
                <div key={index} className="flex flex-col items-center text-center group">
                  {/* Step Icon */}
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mb-6 shadow-lg transition-transform duration-300 group-hover:scale-110"
                    style={{ backgroundColor: step.color + "20", border: `3px solid ${step.color}` }}
                  >
                    <step.icon className="h-10 w-10" style={{ color: step.color }} />
                  </div>

                  {/* Step Number Badge */}
                  <div
                    className="absolute -top-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white shadow"
                    style={{ backgroundColor: step.color }}
                  >
                    {step.number}
                  </div>

                  <h3 className="font-bold text-lg mb-3" style={{ color: colors.charcoal }}>
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: colors.warmGrey }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE: Vertical Step Line */}
        <div className="md:hidden space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div className="flex flex-col items-center">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 shadow-md"
                  style={{ backgroundColor: step.color + "20", border: `2px solid ${step.color}` }}
                >
                  <step.icon className="h-7 w-7" style={{ color: step.color }} />
                </div>
                {index < steps.length - 1 && (
                  <div className="w-0.5 h-8 mt-2" style={{ backgroundColor: step.color + "40" }} />
                )}
              </div>
              <div className="pt-2">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className="text-xs font-bold px-2 py-0.5 rounded-full text-white"
                    style={{ backgroundColor: step.color }}
                  >
                    Step {step.number}
                  </span>
                </div>
                <h3 className="font-bold text-base mb-1" style={{ color: colors.charcoal }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: colors.warmGrey }}>
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Compliance note */}
        <p className="text-center text-xs mt-10 text-muted-foreground">
          All processes are conducted in line with the National Credit Act. Outcomes depend on individual circumstances. NCRDC3995.
        </p>
      </div>
    </section>
  )
}
