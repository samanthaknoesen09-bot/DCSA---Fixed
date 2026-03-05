"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { MobileHelpBar } from "@/components/mobile-help-bar"
import type { ReactNode } from "react"

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <MobileHelpBar />
      <Footer />
    </>
  )
}
