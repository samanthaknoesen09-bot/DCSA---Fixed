"use client"

import { Button } from "@/components/ui/button"
import { AffiliateIcons } from "@/components/affiliate-icons"
import { colors } from "@/lib/colors"
import { ArrowRight } from "lucide-react"

export interface GentleAffiliateFooterProps {
  buttonText?: "See If You Can Save" | "Check Insurance Savings"
  onButtonClick?: () => void
}

export function GentleAffiliateFooter({
  buttonText = "Check Insurance Savings",
  onButtonClick,
}: GentleAffiliateFooterProps) {
  const handleClick = () => {
    if (onButtonClick) {
      onButtonClick()
    } else {
      // Scroll to or navigate to insurance quotes page
      window.location.href = "/insurance-quotes"
    }
  }

  return (
    <section className="w-full py-8 px-4 sm:px-6 lg:px-8 border-t" style={{ borderColor: colors.sandLight, backgroundColor: colors.sand + "40" }}>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-4">
          {/* Main Message */}
          <p className="text-center text-sm leading-relaxed" style={{ color: colors.charcoal }}>
            Debt relief is our specialty, but saving on everyday expenses matters too. See if you could pay less for insurance — no obligation, just possibilities.
          </p>

          {/* Affiliate Icons */}
          <div className="flex justify-center">
            <AffiliateIcons gap="gap-4" iconSize={32} />
          </div>

          {/* CTA Button */}
          <div className="flex justify-center pt-2">
            <Button
              onClick={handleClick}
              className="text-sm"
              style={{ backgroundColor: colors.mintCalm, color: "white" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.9"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
              }}
            >
              {buttonText}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
