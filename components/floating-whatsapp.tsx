"use client"

import { useEffect, useState } from "react"
import { MessageCircle } from "lucide-react"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show on desktop - mobile uses the sticky bar
    const checkDesktop = () => {
      setVisible(window.innerWidth >= 768)
    }
    
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  if (!visible) return null

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-xl shadow-lg font-semibold hover:scale-105 transition-transform"
      style={{ backgroundColor: colors.gold, color: colors.navy }}
    >
      <MessageCircle className="w-5 h-5" />
      WhatsApp Sam
    </a>
  )
}
