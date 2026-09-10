import type { Metadata } from "next"
import { MoneyClarityClient } from "./money-clarity-client"

export const metadata: Metadata = {
  title: "Money Clarity Hub | DCSA (Debt Clear SA (Pty) Ltd) - Free Financial Education & Guides",
  description: "Free financial education on debt, credit scores, saving habits, and money management. Simple guides on budgeting, credit repair, and building wealth. No jargon, just clarity.",
  keywords: [
    "financial education",
    "money management",
    "credit score guide",
    "debt understanding",
    "financial literacy",
    "money habits",
    "budgeting guide",
    "credit repair guide",
    "savings guide",
    "financial advice",
    "money tips",
    "credit building",
    "debt management guide",
    "personal finance education",
    "financial wellness",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/money-clarity-hub",
  },
}

export default function MoneyClarityPage() {
  return <MoneyClarityClient />
}
