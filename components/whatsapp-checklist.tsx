"use client"

import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { MessageCircle, Download } from "lucide-react"

export function WhatsappChecklist() {
  return (
    <section className="py-16 md:py-20 px-4" style={{ backgroundColor: colors.charcoal }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance" style={{ color: colors.white }}>
            Get the Month-End Survival Checklist
          </h2>
          <p className="text-lg text-balance" style={{ color: colors.warmBeige }}>
            9 quick wins to ease pressure until we restructure your debt. From someone who's been there.
          </p>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <Button
            size="lg"
            className="w-full rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.mintCalm, color: colors.charcoal }}
            asChild
          >
            <Link href={WHATSAPP_URL + "?text=Send%20me%20the%20Month-End%20Survival%20Checklist"}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Send It to Me on WhatsApp
            </Link>
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="w-full rounded-lg font-semibold"
            style={{ borderColor: colors.warmBeige, color: colors.warmBeige }}
            asChild
          >
            <Link href="#how-this-works">
              <Download className="w-5 h-5 mr-2" />
              Or Download PDF
            </Link>
          </Button>
        </div>

        <p className="text-center mt-6 text-xs" style={{ color: colors.warmGrey }}>
          Join 800+ South Africans using this checklist this month.
        </p>
      </div>
    </section>
  )
}
