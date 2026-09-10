import type { Metadata } from "next"
import ThankYouCallbackClient from "./callback-client"

export const metadata: Metadata = {
  title: "Callback Requested - Thank You | DCSA (Debt Clear SA (Pty) Ltd)",
  description: "Your callback request has been received. We'll contact you within 24 hours.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouCallbackPage() {
  return <ThankYouCallbackClient />
}
