import type { Metadata } from "next"
import { DebtHelpClient } from "./debt-help-client"

export const metadata: Metadata = {
  title: "Debt Help | Get Out of Debt with DCSA | NCR Registered Debt Counsellor",
  description:
    "Struggling with debt? DCSA provides judgment-free debt counselling services. We help South Africans reduce debt by 15-45%. Free consultation available. No pressure, just honest support.",
  keywords: [
    "debt help",
    "debt counselling",
    "debt relief South Africa",
    "help with debt",
    "over indebted",
    "creditors calling",
    "debt stress",
    "NCR debt counsellor",
    "DCSA",
    "NCRDC3995",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/debt-help",
  },
  openGraph: {
    title: "Debt Help | DCSA - We're Here to Help",
    description: "Struggling with debt? We provide judgment-free support to help you regain control of your finances. Free consultation available.",
    url: "https://www.dcsam.co.za/debt-help",
    siteName: "DCSA - Debt Counselling South Africa",
    type: "website",
    locale: "en_ZA",
  },
}

export default function DebtHelpPage() {
  return <DebtHelpClient />
}
