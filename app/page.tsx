import { HomeClient } from "./home-client"
import { OrganizationSchema } from "@/components/organization-schema"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Debt Counsellor Near Me | NCR Registered Debt Review & Credit Repair | DC Sam",
  description:
    "Looking for a debt counsellor near you? DC Sam offers NCR registered debt counselling (NCRDC3995), credit repair & free debt calculators. Reduce debt by 15-45%. Get help with debt stress today. Free consultation available across South Africa.",
  keywords: [
    "debt counsellor near me",
    "debt counselling near me",
    "credit repair near me",
    "debt help near me",
    "NCR debt counsellor",
    "registered debt counsellor",
    "DC Sam",
    "DC Sam debt counsellors",
    "NCRDC3995",
    "debt counselling South Africa",
    "debt review South Africa",
    "debt relief",
    "help with debt",
    "debt calculator",
    "free debt calculator",
    "savings calculator",
    "money map calculator",
    "debt stress",
    "over indebted",
    "creditors calling",
    "debt solutions",
    "financial counselling",
    "credit repair South Africa",
    "debt consolidation",
    "struggling with debt",
    "Gqeberha debt counselling",
    "Port Elizabeth debt help",
    "Johannesburg debt counsellor",
    "Cape Town debt counsellor",
    "Durban debt counsellor",
  ],
  alternates: {
    canonical: "https://www.dcsam.co.za",
  },
  openGraph: {
    title: "DC Sam - We're Here to Help | Debt Counselling & Credit Repair",
    description: "Compassionate debt counselling and credit repair services. No judgment, just honest support to help you regain control of your finances. Free consultation available.",
    url: "https://www.dcsam.co.za",
    siteName: "DC Sam - Debt Counselling South Africa",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "https://www.dcsam.co.za/images/dcsa-og-logo.png",
        width: 1200,
        height: 630,
        alt: "DC Sam - Debt Counselling & Credit Repair South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DC Sam - Debt Counselling & Credit Repair",
    description: "We're here to help. Compassionate debt counselling and credit repair services. No judgment, just support.",
    images: ["https://www.dcsam.co.za/images/dcsa-og-logo.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function Home() {
  return (
    <>
      <OrganizationSchema />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "@id": "https://www.dcsam.co.za/#localbusiness",
            name: "DC Sam Debt Counselling South Africa",
            image: "https://www.dcsam.co.za/images/dcsa-logo.png",
            telephone: "+27-71-900-6298",
            email: "info@dcsam.co.za",
            address: {
              "@type": "PostalAddress",
              streetAddress: "81 6th Avenue, Newton Park",
              addressLocality: "Gqeberha",
              addressRegion: "Eastern Cape",
              postalCode: "6045",
              addressCountry: "ZA",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: "-33.9612",
              longitude: "25.5894",
            },
            url: "https://www.dcsam.co.za",
            priceRange: "$$",
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "17:00",
              },
            ],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "287",
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "@id": "https://www.dcsam.co.za/#service",
            name: "DC Sam Debt Counselling & Credit Repair Services",
            description: "Compassionate debt counselling and credit repair services for South Africans who need financial support. No judgment, just honest guidance.",
            provider: {
              "@id": "https://www.dcsam.co.za/#organization",
            },
            areaServed: {
              "@type": "Country",
              name: "South Africa",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Debt Counselling Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Debt Review / Debt Counselling",
                    description: "Professional debt review and counselling services to help manage and reduce debt",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Credit Repair",
                    description: "Credit repair services to improve your credit score and financial health",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Free Debt Consultation",
                    description: "Free consultation to assess your debt situation and recommend solutions",
                  },
                },
              ],
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: [
              {
                "@type": "Question",
                name: "What is DC Sam?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DC Sam (Debt Counselling South Africa) is an NCR registered debt counselling service that provides compassionate support to South Africans struggling with debt. We offer debt counselling and credit repair services with no judgment, just honest guidance to help you regain financial control.",
                },
              },
              {
                "@type": "Question",
                name: "What is debt counselling?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Debt counselling is a formal debt relief process regulated by the National Credit Regulator (NCR) that helps over-indebted consumers restructure their debt repayments into one affordable monthly payment.",
                },
              },
              {
                "@type": "Question",
                name: "How can DC Sam help with my debt?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "DC Sam provides two main services: debt counselling (debt review) to restructure your debt into one affordable payment, and credit repair to help improve your credit score. We offer compassionate, judgment-free support throughout your journey to financial freedom, with free consultations to understand your situation and recommend the right path forward.",
                },
              },
              {
                "@type": "Question",
                name: "Is DC Sam registered with the NCR?",
                acceptedAnswer: {
                  "@type": "Answer",
                  text: "Yes, DC Sam is a fully registered debt counsellor with the National Credit Regulator (NCR) under registration number NCRDC3995.",
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
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://www.dcsam.co.za",
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
            "@type": "WebApplication",
            name: "DC Sam Free Financial Calculators",
            url: "https://www.dcsam.co.za/calculator",
            description: "Free online calculators to help South Africans manage debt, calculate interest, and plan their finances. Includes Money Map, Potential Savings Calculator, and Interest Calculator.",
            applicationCategory: "FinanceApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "ZAR",
            },
            featureList: [
              "Money Map Calculator - Track income and expenses",
              "Potential Savings Calculator - Calculate debt counselling savings",
              "Interest Calculator - Calculate loan interest and repayments",
              "Share results with friends and family",
              "Free to use, no registration required"
            ],
            author: {
              "@id": "https://www.dcsam.co.za/#organization"
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FinancialService",
            name: "DC Sam Debt Counselling Services",
            description: "Professional debt counselling and credit repair services helping South Africans reduce debt by 15-45% through NCR registered debt review.",
            provider: {
              "@id": "https://www.dcsam.co.za/#organization"
            },
            serviceType: "Debt Counselling",
            areaServed: {
              "@type": "Country",
              name: "South Africa"
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Financial Services",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "FinancialProduct",
                    name: "Debt Review",
                    description: "Reduce monthly debt payments by 15-45% through NCR regulated debt review process",
                    feesAndCommissionsSpecification: "Initial consultation free"
                  }
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "FinancialProduct",
                    name: "Credit Repair",
                    description: "Improve credit score and repair credit history"
                  }
                }
              ]
            },
            award: "NCR Registered Debt Counsellor NCRDC3995"
          }),
        }}
      />
      <HomeClient />
    </>
  )
}
