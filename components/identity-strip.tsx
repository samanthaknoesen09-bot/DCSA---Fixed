"use client"

import { colors } from "@/lib/colors"
import { Heart, Users, Briefcase, Home, TrendingUp } from "lucide-react"

const identities = [
  { id: 1, label: "Healthcare Workers", icon: Heart, color: colors.softPeach },
  { id: 2, label: "Teachers & Govt", icon: Users, color: colors.mintCalm },
  { id: 3, label: "Single Parents", icon: Home, color: colors.warmGrey },
  { id: 4, label: "Self-Employed", icon: Briefcase, color: colors.maroon },
  { id: 5, label: "Private Sector", icon: TrendingUp, color: colors.charcoal },
]

export function IdentityStrip() {
  const handleScroll = () => {
    const element = document.getElementById("money-reality-check")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="py-12 px-4" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-balance" style={{ color: colors.charcoal }}>
            Who we usually help
          </h2>
          <p className="text-sm" style={{ color: colors.warmGrey }}>
            If you recognise yourself below, you're in the right place.
          </p>
        </div>

        {/* Scrollable chips container */}
        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex gap-3 md:grid md:grid-cols-5 md:gap-4 min-w-max md:min-w-full">
            {identities.map((identity) => {
              const Icon = identity.icon
              return (
                <button
                  key={identity.id}
                  onClick={handleScroll}
                  className="flex flex-col items-center gap-2 px-4 py-3 rounded-xl border transition-all hover:shadow-md flex-shrink-0 md:flex-shrink"
                  style={{
                    borderColor: identity.color,
                    backgroundColor: "transparent",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = colors.maroon
                    e.currentTarget.style.backgroundColor = colors.warmBeige + "40"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = identity.color
                    e.currentTarget.style.backgroundColor = "transparent"
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: identity.color }} />
                  <span className="text-xs font-semibold text-center whitespace-nowrap" style={{ color: colors.charcoal }}>
                    {identity.label}
                  </span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
