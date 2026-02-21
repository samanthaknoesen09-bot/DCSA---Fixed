import { Metadata } from "next"
import { InsuranceQuotesClient } from "./insurance-quotes-client"

export const metadata: Metadata = {
  title: "Free Car Insurance Quotes South Africa | Compare & Save | DCSA",
  description: "Get free car insurance quotes from First for Women and Auto & General. Compare quotes, save money, and get instant coverage info. No obligation, instant quotes.",
  keywords: [
    "car insurance quotes",
    "car insurance South Africa",
    "car insurance quotes South Africa",
    "free car insurance quotes",
    "compare car insurance",
    "cheap car insurance",
    "best car insurance",
    "car insurance rates",
    "First for Women insurance",
    "Auto and General insurance",
    "vehicle insurance",
    "motor vehicle insurance",
    "car insurance calculator",
    "insurance calculator South Africa",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/insurance-quotes",
  },
}

export default function InsuranceQuotesPage() {
  return <InsuranceQuotesClient />
}
