import { Metadata } from "next"
import { ContactOptionsHub } from "@/components/contact-options-hub"

export const metadata: Metadata = {
  title: "Get Started - DCSA Debt Counselling",
  description:
    "Start your journey to financial freedom. Choose how you'd like to connect with DCSA - WhatsApp, book appointment, request callback, or begin your debt review application.",
}

export default function GetStartedPage() {
  return (
    <main className="min-h-screen bg-background py-12 px-4" id="main-content">
      <div className="container mx-auto max-w-7xl">
        <ContactOptionsHub />
      </div>
    </main>
  )
}
