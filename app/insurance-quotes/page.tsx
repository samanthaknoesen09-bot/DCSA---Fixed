import { Insurance

QuotesClient } from "./insurance-quotes-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Compare Insurance Quotes South Africa | Car & Home Insurance | DCSA",
  description: "Compare insurance quotes from trusted South African providers. Get competitive rates on car insurance, home insurance, and household insurance. Quick quotes, no pressure.",
  keywords: [
    "insurance quotes South Africa",
    "car insurance quote",
    "comprehensive car insurance quote",
    "household insurance quote",
    "home insurance quote",
    "compare insurance quotes",
    "affordable insurance cover",
    "vehicle insurance quote",
    "insurance comparison",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za/insurance-quotes",
  },
  openGraph: {
    title: "Compare Insurance Quotes | DCSA",
    description: "Compare insurance quotes from trusted providers. No pressure, just simple comparisons.",
    url: "https://www.dcsam.co.za/insurance-quotes",
    siteName: "DCSA",
    type: "website",
    locale: "en_ZA",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function InsuranceQuotesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "How do I compare insurance quotes in South Africa?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can compare insurance quotes by visiting trusted providers like Auto & General and 1st for Women. Get multiple quotes to find the best rates for your car, home, or household insurance needs.",
                },
              },
              {
                "@type": "Question",
                name: "What types of insurance can I get quotes for?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "You can get quotes for car insurance (comprehensive and third party), home insurance, household contents insurance, and building insurance from trusted South African providers.",
                },
              },
              {
                "@type": "Question",
                name: "Is it free to get an insurance quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, getting insurance quotes is completely free. There's no obligation to purchase, and you can compare multiple quotes to find the best option for your budget.",
                },
              },
              {
                "@type": "Question",
                name: "How quickly can I get an insurance quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Most insurance providers in South Africa can provide quotes within minutes. Online quote forms are quick and easy to complete.",
                },
              },
              {
                "@type": "Question",
                name: "What information do I need to get a car insurance quote?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "To get a car insurance quote, you typically need your vehicle details (make, model, year), driver information, ID number, and details about how you use the vehicle.",
                },
              },
              {
                "@type": "Question",
                name: "Can I get insurance if I'm under debt review?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, you can still get insurance while under debt review. Insurance is a necessity, not a luxury, and providers understand this. Contact providers directly to discuss your situation.",
                },
              },
            ],
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            serviceType: "Insurance Quote Comparison",
            name: "Compare Insurance Quotes",
            description: "Compare insurance quotes from trusted South African providers including Auto & General and 1st for Women.",
            provider: {
              "@type": "LocalBusiness",
              name: "DCSA",
              url: "https://www.dcsam.co.za",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            offers: [
              {
                "@type": "Offer",
                name: "Car Insurance Quotes",
                description: "Compare comprehensive and third-party car insurance quotes",
              },
              {
                "@type": "Offer",
                name: "Home Insurance Quotes",
                description: "Compare home and building insurance quotes",
              },
              {
                "@type": "Offer",
                name: "Household Insurance Quotes",
                description: "Compare household contents insurance quotes",
              },
            ],
          }),
        }}
      />
      <InsuranceQuotesClient />
    </>
  )
}
