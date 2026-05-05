"use client"

import { colors } from "@/lib/colors"
import { Check } from "lucide-react"

export function EmotionalMirrorSection() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-pretty" style={{ color: colors.charcoal }}>
            Let&apos;s talk about what&apos;s really happening.
          </h2>
        </div>

        <div className="space-y-8">
          <div className="space-y-4 text-lg leading-relaxed" style={{ color: colors.charcoal }}>
            <div className="flex gap-3 items-start">
              <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.gold }} />
              <span>You&apos;re working.</span>
            </div>
            <div className="flex gap-3 items-start">
              <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.gold }} />
              <span>You&apos;re providing.</span>
            </div>
            <div className="flex gap-3 items-start">
              <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: colors.gold }} />
              <span>You&apos;re paying what you can.</span>
            </div>
          </div>

          <div className="space-y-3">
            <p className="font-semibold" style={{ color: colors.charcoal }}>But:</p>
            <ul className="space-y-2">
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.navy }}>•</span>
                <span>Interest keeps running.</span>
              </li>
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.navy }}>•</span>
                <span>Instalments don&apos;t feel lighter.</span>
              </li>
              <li className="flex gap-3" style={{ color: colors.charcoal }}>
                <span className="font-bold" style={{ color: colors.navy }}>•</span>
                <span>The stress follows you home.</span>
              </li>
            </ul>
          </div>

          <div className="space-y-4 pt-4 border-t" style={{ borderColor: colors.sandLight }}>
            <p className="font-semibold text-lg" style={{ color: colors.charcoal }}>
              That doesn&apos;t mean you&apos;ve failed.
            </p>
            <p className="text-lg" style={{ color: colors.charcoal }}>
              It means you need structure — not another loan.
            </p>
            <p className="text-lg font-semibold" style={{ color: colors.charcoal }}>
              That&apos;s what we do here.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
