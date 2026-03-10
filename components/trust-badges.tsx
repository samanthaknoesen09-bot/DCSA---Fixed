"use client"

import { colors } from "@/lib/colors"
import { Check, Star, Lock } from "lucide-react"

interface TrustBadgesProps {
  variant?: "light" | "dark"
}

export function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const bgColor = variant === "light" ? colors.warmBeige + "20" : "rgba(255,255,255,0.1)"
  const textColor = variant === "light" ? colors.charcoal : colors.white

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      <div
        className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Check className="w-3 h-3" />
        <span>NCR Registered</span>
      </div>
      <div
        className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Star className="w-3 h-3" />
        <span>Real Google Reviews</span>
      </div>
      <div
        className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <Lock className="w-3 h-3" />
        <span>Private and Confidential</span>
      </div>
    </div>
  )
}
