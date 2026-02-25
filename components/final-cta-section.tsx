"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import { MessageCircle } from "lucide-react"

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 px-4" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold leading-tight" style={{ color: colors.charcoal }}>
          You've carried this long enough.
        </h2>

        <div className="space-y-6 text-lg leading-relaxed" style={{ color: colors.charcoal }}>
          <p>
            You don't need to keep juggling.
          </p>
          <p>
            You don't need another quick fix.
          </p>
          
          <div className="pt-4 space-y-3">
            <p className="font-semibold">
              You need clarity.
            </p>
            <p className="font-semibold">
              And a proper plan.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
          <Button 
            size="lg" 
            className="rounded-lg font-semibold text-white hover:opacity-90 transition-opacity"
            style={{ backgroundColor: colors.maroon }}
            asChild
          >
            <Link href={WHATSAPP_URL + "?text=Hi%20Sam,%20let's%20talk"}>
              <MessageCircle className="w-5 h-5 mr-2" />
              Talk to Sam
            </Link>
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-lg font-semibold"
            style={{ borderColor: colors.maroon, color: colors.maroon }}
            asChild
          >
            <Link href="#calculators">
              Start With My Numbers
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
