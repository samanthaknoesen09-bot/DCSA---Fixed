"use client"

import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { MessageCircle, Check } from "lucide-react"

export function ClarityBanner() {
  return (
    <section className="py-8 px-4" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-3xl">
        <div className="rounded-2xl p-6 md:p-8 text-center" style={{ backgroundColor: colors.white, border: `1px solid ${colors.sandLight}` }}>
          <h3 className="text-2xl md:text-3xl font-bold mb-3 text-balance" style={{ color: colors.charcoal }}>
            Free 15-minute clarity chat
          </h3>
          
          <p className="text-lg mb-6 text-balance" style={{ color: colors.warmGrey }}>
            Let's talk about what's actually possible for your situation — no obligation, no pressure.
          </p>

          {/* Reassurance badge */}
          <div className="mb-6 inline-flex items-center gap-2 px-3 py-2 rounded-full" style={{ backgroundColor: colors.mintCalm + "20" }}>
            <Check className="w-4 h-4" style={{ color: colors.mintCalm }} />
            <span className="text-xs font-semibold" style={{ color: colors.charcoal }}>
              Talking to us does NOT automatically place you under debt review.
            </span>
          </div>

          <Button
            size="lg"
            className="rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.maroon }}
            asChild
          >
            <Link href={WHATSAPP_URL}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Start My Free Chat
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
