"use client"

import { colors, WHATSAPP_URL } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { MessageCircle, Calculator } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export function MobileHelpBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show on mobile (< 768px)
    const checkMobile = () => {
      setIsVisible(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Disabled - using the sticky WhatsApp bar from home-client instead
  if (!isVisible) return null

  return null
}
