"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { ReactNode } from "react"

interface LayoutWrapperProps {
  children: ReactNode
}

export function LayoutWrapper({ children }: LayoutWrapperProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}
