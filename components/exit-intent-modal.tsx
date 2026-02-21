"use client"

import { useState, useEffect } from "react"
import { X, Coffee, Calculator, Shield, TrendingUp } from "lucide-react"
import { colors, WHATSAPP_URL } from "@/lib/colors"
import Link from "next/link"

export function ExitIntentModal() {
  const [isVisible, setIsVisible] = useState(false)
  const [hasShown, setHasShown] = useState(false)

  useEffect(() => {
    // Check if modal has been shown this session
    const sessionShown = sessionStorage.getItem("exitIntentShown")
    if (sessionShown === "true") {
      setHasShown(true)
      return
    }

    // Only activate on desktop
    const isDesktop = window.innerWidth >= 768
    if (!isDesktop) return

    const handleMouseLeave = (e: MouseEvent) => {
      // Trigger when mouse moves toward top of viewport (exit intent)
      if (e.clientY <= 50 && !hasShown) {
        setIsVisible(true)
        setHasShown(true)
        sessionStorage.setItem("exitIntentShown", "true")
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [hasShown])

  const handleClose = () => {
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-50 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-lg mx-4 p-8 shadow-2xl"
        style={{ backgroundColor: colors.warmCream, borderRadius: "16px" }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-1 hover:opacity-70 transition-opacity"
          style={{ color: colors.warmGrey }}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold" style={{ color: colors.maroon }}>
            Before you go…
          </h2>
          
          <p className="text-base leading-relaxed" style={{ color: colors.charcoal }}>
            If this feels overwhelming, you don't have to figure it out alone. You can message us and we'll reply as soon as we can — no pressure, no judgment.
          </p>

          {/* Services list */}
          <div className="space-y-3 py-4">
            <div className="flex items-start gap-3">
              <Shield className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
              <div>
                <h3 className="font-semibold text-sm" style={{ color: colors.charcoal }}>Debt Counselling / Debt Review guidance</h3>
                <p className="text-xs" style={{ color: colors.warmGrey }}>Get clarity on your options</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <TrendingUp className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
              <div>
                <h3 className="font-semibold text-sm" style={{ color: colors.charcoal }}>Credit Repair support</h3>
                <p className="text-xs" style={{ color: colors.warmGrey }}>Rebuild your credit score</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Calculator className="h-5 w-5 mt-0.5 flex-shrink-0" style={{ color: colors.maroon }} />
              <div>
                <h3 className="font-semibold text-sm" style={{ color: colors.charcoal }}>Free tools to understand your numbers</h3>
                <p className="text-xs" style={{ color: colors.warmGrey }}>No signup required</p>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="space-y-3 pt-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 text-white font-semibold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
            >
              <Coffee className="h-4 w-4" />
              Let's Chat
            </a>

            <Link
              href="/calculator"
              className="w-full flex items-center justify-center px-6 py-3 font-semibold border-2 hover:bg-white/50 transition-all"
              style={{ 
                color: colors.maroon, 
                borderColor: colors.maroon,
                backgroundColor: "transparent",
                borderRadius: "12px" 
              }}
              onClick={handleClose}
            >
              Not ready yet — show me the Free Tools
            </Link>

            <button
              onClick={handleClose}
              className="w-full text-center text-sm hover:underline transition-colors pt-2"
              style={{ color: colors.warmGrey }}
            >
              I'll come back later
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
