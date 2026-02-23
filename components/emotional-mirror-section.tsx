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
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Does This Sound Familiar?
          </h2>
          <p className="text-lg text-pretty" style={{ color: colors.warmGrey }}>
            You're not alone. Thousands of South Africans feel exactly like this right now. These feelings are valid — and they're also a sign you deserve help.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, idx) => {
            const Icon = point.icon
            return (
              <Card 
                key={idx}
                className="border-2 hover:shadow-lg transition-shadow"
                style={{ borderColor: point.color + "30" }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-start gap-4">
                    <div 
                      className="p-3 rounded-lg flex-shrink-0"
                      style={{ backgroundColor: point.color + "15" }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: point.color }}
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 
                        className="font-bold text-lg mb-2"
                        style={{ color: colors.charcoal }}
                      >
                        {point.title}
                      </h3>
                      <p style={{ color: colors.warmGrey }}>
                        {point.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div 
          className="mt-12 p-6 md:p-8 rounded-xl text-center border-2"
          style={{ 
            backgroundColor: colors.mintCalm + "10",
            borderColor: colors.mintCalm
          }}
        >
          <p 
            className="text-lg leading-relaxed text-pretty"
            style={{ color: colors.charcoal }}
          >
            <strong>Here's what matters:</strong> These problems have a solution. You don't have to feel this way forever. 
            With the right plan — one built specifically for your situation — you can take control back.
          </p>
        </div>
      </div>
    </section>
  )
}
