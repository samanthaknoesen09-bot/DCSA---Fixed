"use client"

import { colors, WHATSAPP_URL } from "@/lib/colors"
import { Button } from "@/components/ui/button"
import { MessageCircle, ExternalLink } from "lucide-react"
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

  if (!isVisible) return null

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-40 p-3 border-t shadow-lg md:hidden"
      style={{ 
        backgroundColor: colors.white,
        borderColor: colors.sandLight,
      }}
    >
      <div className="flex gap-2">
        <Button
          size="sm"
          className="flex-1 rounded-lg font-semibold text-white hover:opacity-90"
          style={{ backgroundColor: colors.maroon }}
          asChild
        >
          <Link href={WHATSAPP_URL}>
            <MessageCircle className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          size="sm"
          className="flex-1 rounded-lg font-semibold text-white hover:opacity-90"
          style={{ backgroundColor: colors.mintCalm, color: colors.charcoal }}
          asChild
        >
          <Link href="https://www.dcsam.co.za/calculator">
            <ExternalLink className="w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
