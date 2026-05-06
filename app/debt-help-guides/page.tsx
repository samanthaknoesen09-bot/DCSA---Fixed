import type { Metadata } from "next"
import { DebtHelpGuidesClient } from "./debt-help-guides-client"

export const metadata: Metadata = {
  title: "Debt Help Guides | Understand Your Debt Options | DCSA",
  description:
    "Not sure what to do about your debt? Learn about debt review, debt consolidation, payment arrangements and more. Simple, plain-language guides to help you understand your options.",
  keywords: [
    "debt review explained",
    "what is debt counselling",
    "debt consolidation South Africa",
    "payment arrangements",
    "credit score help",
    "debt education",
    "debt options",
    "over indebted help",
    "debt relief options",
    "DCSA guides",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/debt-help-guides",
  },
  openGraph: {
    title: "Debt Help Guides | DCSA - Understand Your Options",
    description: "Simple, plain-language guides to help you understand your debt options. No jargon, just honest information.",
    url: "https://www.dcsam.co.za/debt-help-guides",
    siteName: "DCSA - Debt Counselling South Africa",
    type: "website",
    locale: "en_ZA",
  },
}

export default function DebtHelpGuidesPage() {
  return <DebtHelpGuidesClient />
}
