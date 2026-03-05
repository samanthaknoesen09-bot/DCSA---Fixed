"use client"

import { colors } from "@/lib/colors"

interface TrustBadgesProps {
  variant?: "light" | "dark"
}

const badges = [
  { label: "NCR Registered", icon: "✓" },
  { label: "Real Google Reviews", icon: "★" },
  { label: "Private & Confidential", icon: "🔒" },
]

export function TrustBadges({ variant = "light" }: TrustBadgesProps) {
  const bgColor = variant === "light" ? colors.warmBeige + "20" : "rgba(255,255,255,0.1)"
  const textColor = variant === "light" ? colors.charcoal : colors.white

  return (
    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="px-3 py-1.5 rounded-full text-xs font-semibold flex items-center gap-1"
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          <span>{badge.icon}</span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  )
}
