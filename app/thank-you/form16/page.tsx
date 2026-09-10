import type { Metadata } from "next"
import ThankYouForm16Client from "./form16-client"

export const metadata: Metadata = {
  title: "Application Submitted - Thank You | DCSA (Debt Clear SA (Pty) Ltd)",
  description: "Your debt review application has been successfully submitted. We'll contact you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouForm16Page() {
  return <ThankYouForm16Client />
}
