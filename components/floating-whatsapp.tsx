"use client"

import { useEffect, useState } from "react"

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
  }, [])

  if (!visible) return null

  return (
    <a
      href="https://wa.me/27627884609"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-green-500 text-white font-semibold hover:scale-105 transition"
    >
      💬 WhatsApp Me
    </a>
  )
}