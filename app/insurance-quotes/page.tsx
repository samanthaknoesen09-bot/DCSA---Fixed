import { Metadata } from "next"
import { InsuranceQuotesClient } from "./insurance-quotes-client"

export const metadata: Metadata = {
  title: "Compare Car Insurance Quotes | DCSA",
  description: "Get free, no-obligation car insurance quotes from trusted South African insurers. Compare First for Women and Auto & General.",
}

export default function InsuranceQuotesPage() {
  return <InsuranceQuotesClient />
}
