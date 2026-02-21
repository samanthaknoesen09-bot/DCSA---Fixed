"use client"

import { Coffee } from "lucide-react"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function FloatingChatButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
      style={{
        backgroundColor: colors.maroon,
        borderRadius: "50px",
      }}
      aria-label="Chat with us on WhatsApp"
    >
      <Coffee className="h-5 w-5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline">Let's Chat</span>
    </a>
  )
}
