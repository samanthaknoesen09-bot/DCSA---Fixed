import type { Metadata } from "next"
import { MoneyResetClient } from "./money-reset-client"

export const metadata: Metadata = {
  title: "Money Reset Program | DCSA - Financial Recovery Programme",
  description: "Structured 6-month programme to rebuild your finances. Learn debt management, saving habits, and get expert guidance.",
}

export default function MoneyResetPage() {
  return <MoneyResetClient />
}
