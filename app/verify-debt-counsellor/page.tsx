import { Metadata } from "next"
import { VerifyDebtCounsellorClient } from "./verify-client"

export const metadata: Metadata = {
  title: "How to Verify Your Debt Counsellor | DC Sam",
  description: "Learn how to verify if a debt counsellor is NCR registered and legitimate. Understand the risks of unregistered debt counsellors and protect yourself.",
  keywords: [
    "verify debt counsellor",
    "NCR registered debt counsellor",
    "debt counsellor credentials",
    "NCRDC registration",
    "legitimate debt counsellor",
    "unregistered debt counsellor risks",
    "how to check debt counsellor",
    "debt counsellor verification",
    "National Credit Regulator",
  ],
}

export default function VerifyDebtCounsellorPage() {
  return <VerifyDebtCounsellorClient />
}
