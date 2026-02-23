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
    description: "We review your debts, income, and priorities. We show you options in plain language. You decide what feels right.",
    color: colors.softPeach,
  },
  {
    number: "3",
    icon: Handshake,
    title: "We Negotiate",
    description: "We contact your creditors and negotiate a plan they'll accept. You get lower payments, legal protection, and breathing space.",
    color: colors.mintCalm,
  },
  {
    number: "4",
    icon: TrendingUp,
    title: "You Rebuild",
    description: "Make one payment to us. We distribute. You're guided through to financial freedom. Support available the whole way.",
    color: colors.warmBeige,
  },
]

export function HowThisWorksStrip() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Here's How This Works
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            Simple steps. Real progress. No complicated jargon.
          </p>
        </div>

        {/* DESKTOP: Horizontal Step Line */}
        <div className="hidden md:block">
          <div className="relative mb-12">
            {/* Connecting Line */}
            <div 
              className="absolute top-12 left-0 right-0 h-1"
              style={{ 
                background: `linear-gradient(90deg, ${colors.maroon}, ${colors.softPeach}, ${colors.mintCalm}, ${colors.warmBeige})`,
                opacity: 0.3
              }}
            />

            {/* Steps */}
            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, idx) => {
                const Icon = step.icon
                return (
                  <div key={idx} className="flex flex-col items-center">
                    {/* Number Circle */}
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center text-white font-bold text-3xl mb-4 relative z-10 shadow-lg"
                      style={{ backgroundColor: step.color }}
                    >
                      {step.number}
                    </div>

                    {/* Content */}
                    <Card className="border-0 shadow-sm flex-grow">
                      <CardContent className="p-4 text-center">
                        <div className="flex justify-center mb-3">
                          <Icon className="w-6 h-6" style={{ color: step.color }} />
                        </div>
                        <h3 
                          className="font-bold text-base mb-2"
                          style={{ color: colors.charcoal }}
                        >
                          {step.title}
                        </h3>
                        <p 
                          className="text-sm leading-relaxed"
                          style={{ color: colors.warmGrey }}
                        >
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* MOBILE: Vertical Steps */}
        <div className="md:hidden space-y-6">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div key={idx} className="flex gap-4">
                {/* Number Circle */}
                <div
                  className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md"
                  style={{ backgroundColor: step.color }}
                >
                  {step.number}
                </div>

                {/* Content */}
                <Card className="border-2 flex-grow" style={{ borderColor: step.color + "30" }}>
                  <CardContent className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon className="w-5 h-5" style={{ color: step.color }} />
                      <h3 
                        className="font-bold"
                        style={{ color: colors.charcoal }}
                      >
                        {step.title}
                      </h3>
                    </div>
                    <p 
                      className="text-sm leading-relaxed"
                      style={{ color: colors.warmGrey }}
                    >
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
