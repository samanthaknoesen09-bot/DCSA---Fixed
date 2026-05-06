import type { Metadata } from "next"
import { FreeDebtCalculatorClient } from "./free-debt-calculator-client"

export const metadata: Metadata = {
  title: "Free Debt Calculator | Check Your Finances | DCSA South Africa",
  description:
    "Free debt calculator for South Africans. Calculate your monthly expenses, debt repayments, and see how much you could save. No sign-up required. Get instant results and understand your options.",
  keywords: [
    "free debt calculator",
    "debt calculator South Africa",
    "budget calculator",
    "debt repayment calculator",
    "monthly expense calculator",
    "debt-to-income ratio",
    "financial calculator SA",
    "DCSA calculator",
    "debt assessment tool",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/free-debt-calculator",
  },
  openGraph: {
    title: "Free Debt Calculator | DCSA - Check Your Finances",
    description: "Calculate your monthly debt, expenses, and potential savings with our free calculator. No sign-up required.",
    url: "https://www.dcsam.co.za/free-debt-calculator",
    siteName: "DCSA - Debt Counselling South Africa",
    type: "website",
    locale: "en_ZA",
  },
}

export default function FreeDebtCalculatorPage() {
  return <FreeDebtCalculatorClient />
}
