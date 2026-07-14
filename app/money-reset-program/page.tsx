import type { Metadata } from "next"
import { MoneyResetClient } from "./money-reset-client"

export const metadata: Metadata = {
  title: "Money Reset Program | DC Sam - 6-Month Financial Recovery",
  description: "6-month structured programme to rebuild your finances after debt counselling. Learn money habits, saving strategies, and financial wellness with expert guidance.",
  keywords: [
    "financial recovery",
    "money reset",
    "financial programme",
    "debt recovery programme",
    "rebuilding finances",
    "financial wellness",
    "money management programme",
    "savings programme",
    "financial literacy programme",
    "debt recovery plan",
    "post-debt counselling",
    "financial rehabilitation",
    "credit rebuild programme",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/money-reset-program",
  },
}

export default function MoneyResetPage() {
  return <MoneyResetClient />
}
