"use client"

import { Card, CardContent } from "@/components/ui/card"
import { colors } from "@/lib/colors"
import { Phone, TrendingDown, Heart, Clock, AlertCircle } from "lucide-react"

const painPoints = [
  {
    icon: Phone,
    title: "Creditors Calling Non-Stop",
    description: "Your phone buzzes constantly. Unknown numbers trigger anxiety. It's affecting your sleep and your family feels the tension.",
    color: colors.maroon,
  },
  {
    icon: TrendingDown,
    title: "Payments That Don't Add Up",
    description: "You're paying, but the debt doesn't seem to shrink. Interest compounds faster than you can catch up. It's demoralising.",
    color: colors.softPeach,
  },
  {
    icon: Heart,
    title: "Stress Is Breaking Relationships",
    description: "Money fights with your partner. Kids asking questions you can't answer. The weight of it all is isolating.",
    color: colors.mintCalm,
  },
  {
    icon: Clock,
    title: "Can't Plan a Future",
    description: "No savings buffer. Can't think about school fees, emergencies, or anything beyond the next payment. You're stuck.",
    color: colors.warmBeige,
  },
]

export function EmotionalMirrorSection() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Let's talk about what's really happening.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: colors.charcoal }}>
            <p>You're working.</p>
            <p>You're providing.</p>
            <p>You're paying what you can.</p>
          </div>

          <div className="space-y-3">
            <p className="font-semibold" style={{ color: colors.charcoal }}>But:</p>
            <ul className="space-y-2">
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.maroon }}>•</span>
                <span>Interest keeps running.</span>
              </li>
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.maroon }}>•</span>
                <span>Instalments don't feel lighter.</span>
              </li>
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.maroon }}>•</span>
                <span>The stress follows you home.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t" style={{ borderColor: colors.sandLight }}>
            <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>
              That doesn't mean you've failed.
            </p>
            <p className="text-lg" style={{ color: colors.charcoal }}>
              It means you need structure — not another loan.
            </p>
            <p className="text-lg font-semibold" style={{ color: colors.charcoal }}>
              That's what we do here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
