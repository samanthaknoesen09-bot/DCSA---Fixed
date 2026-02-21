import type { Metadata } from "next"
import { MoneyClarityClient } from "./money-clarity-client"

export const metadata: Metadata = {
  title: "Money Clarity Hub | DCSA - Free Financial Education",
  description: "Coffee-break financial education. Understand debt, credit, and money habits without the jargon.",
}

export default function MoneyClarityPage() {
  return <MoneyClarityClient />
}
