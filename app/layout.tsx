import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ViewTracker } from "@/components/view-tracker"
import { SkipToContent } from "@/components/skip-to-content"
import { FloatingChatButton } from "@/components/floating-chat-button"
import { LayoutWrapper } from "@/components/layout-wrapper"
import { Analytics } from "@vercel/analytics/next"

import { Nunito } from "next/font/google" // Added import for Nunito font

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading"
})

const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-body"
})

const nunito = Nunito({ // Declared the nunito variable
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-body"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.dcsam.co.za"),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  title: {
    default: "Financial Education & Debt Help for South Africans | DCSA",
    template: "%s | DCSA - Financial Education",
  },
  description:
    "DCSA - Financial education made simple for every South African. Learn about saving, debt, credit without judgment. Free tools, calculators, and guidance in plain English. Plus professional debt counselling (NCR registered NCRDC3995) when you need it.",
  keywords: [
    // Brand Keywords
    "DCSA",
    "DCSam",
    "Samantha Knoesen",
    "debt counselling",
    "debt counsellor",
    "credit repair",
    
    // Brand + Service Combinations
    "DCSA debt counselling",
    "DCSam debt counsellor",
    "Samantha Knoesen debt counsellor",
    "DCSA South Africa",
    "DCSam South Africa",
    
    // Near Me Searches
    "debt counsellor near me",
    "debt counselling near me",
    "credit repair near me",
    "debt help near me",
    "debt relief near me",
    "registered debt counsellor near me",
    "NCR debt counsellor near me",
    "debt review near me",
    "debt management near me",
    "credit score help near me",
    
    // NCR Registration
    "NCR registered debt counsellor",
    "NCRDC3995",
    "verified debt counsellor",
    "registered debt counsellor South Africa",
    "NCR debt counselling",
    "National Credit Regulator debt counsellor",
    
    // Service Keywords
    "debt review",
    "debt management",
    "credit repair guide",
    "credit score improvement",
    "financial counselling",
    "debt consolidation advice",
    "debt relief options",
    "money management",
    "financial education",
    "debt counselling South Africa",
    
    // Content Keywords
    "debt calculator",
    "money map calculator",
    "interest calculator",
    "money habits",
    "debt review process",
    "how to rebuild credit",
    "verifying debt counsellor credentials",
    
    // Local + Service
    "South Africa debt counselling",
    "South Africa credit repair",
    "professional debt counsellor South Africa",
    "affordable debt counselling",
    "free financial tools",
    "debt counselling consultation",
    
    // General Debt Help Keywords
    "debt help",
    "debt relief",
    "debt counselling",
    "debt counselling South Africa",
    "debt review",
    "debt review South Africa",
    "debt management",
    "debt solutions",
    "debt consolidation",
    "debt restructuring",
    "over indebted",
    "help with debt",
    "debt assistance",
    "debt advice",
    "struggling with debt",
    
    // NCR & Registration Keywords
    "NCR registered debt counsellor",
    "NCR debt counsellor",
    "registered debt counsellor",
    "registered debt counsellor South Africa",
    "NCRDC3995",
    "NCR registration",
    "debt counsellor registration",
    
    // Credit Repair Keywords
    "credit repair",
    "credit repair South Africa",
    "fix credit score",
    "improve credit score",
    "credit repair near me",
    "credit score help",
    "bad credit repair",
    "credit repair services",
    
    // Location-Based Keywords
    "debt counsellor South Africa",
    "debt help South Africa",
    "debt relief South Africa",
    "debt counsellor Gqeberha",
    "debt counsellor Port Elizabeth",
    "debt counsellor Eastern Cape",
    "debt counsellor Johannesburg",
    "debt counsellor Cape Town",
    "debt counsellor Durban",
    "debt counsellor Pretoria",
    
    // Calculator Keywords
    "debt calculator",
    "savings calculator",
    "money map calculator",
    "where is my money going",
    "budget calculator",
    "debt to income ratio calculator",
    "interest calculator",
    "debt repayment calculator",
    "free debt calculator",
    
    // Problem-Focused Keywords
    "drowning in debt",
    "can't pay my debts",
    "debt stress",
    "financial problems",
    "money problems",
    "creditors calling",
    "debt collection",
    "blacklisted",
    
    // Service-Specific Keywords
    "financial counselling",
    "financial planning",
    "budget awareness",
    "savings coach",
    "debt counselling services",
    "professional debt counsellor",
    "affordable debt counselling",
    "free debt consultation",
    
    // Action Keywords
    "apply for debt review",
    "get debt help",
    "start debt counselling",
    "debt counselling process",
    "how to get out of debt",
    "debt free",
  ],
  authors: [{ name: "DCSA Debt Counsellors", url: "https://www.dcsam.co.za" }],
  creator: "DCSA",
  publisher: "DCSA Debt Counsellors",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  icons: {
    icon: "/images/dcsa-logo.jpg",
    shortcut: "/images/dcsa-logo.jpg",
    apple: "/images/dcsa-logo.jpg",
  },
  manifest: "/manifest.json",
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
  verification: {
    google: "WvDUKvcUNr3Dng8NU3MpW-Gcl4rpe31jmsHr4IPTHFk",
  },
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.dcsam.co.za",
    siteName: "DCSA - Debt Counselling & Credit Repair",
    title: "DCSA - Caring Debt Counselling & Credit Repair | NCR Registered South Africa",
    description:
      "DCSA helps South Africans find real financial relief through debt review, credit repair, and free financial tools. NCR registered (NCRDC3995). No judgment, just genuine support.",
    images: [
      {
        url: "https://www.dcsam.co.za/images/dcsa-og-logo.png",
        width: 1200,
        height: 630,
        alt: "DCSA - Debt Counselling & Credit Repair South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCSA - Caring Debt Counselling & Credit Repair | South Africa",
    description:
      "Real help for real people. DCSA offers debt review, credit repair, and free financial tools across South Africa. NCR registered (NCRDC3995). No judgment.",
    images: ["https://www.dcsam.co.za/images/dcsa-og-logo.png"],
  },
  alternates: {
    canonical: "https://www.dcsam.co.za",
  },
  category: "Financial Services",
  classification: "Debt Counselling Services",
  other: {
    "google-site-verification": "WvDUKvcUNr3Dng8NU3MpW-Gcl4rpe31jmsHr4IPTHFk",
    "msvalidate.01": "BING_VERIFICATION_CODE_NEEDED",
    "facebook-domain-verification": "dcsa",
    "fb:page_id": "DebtClearDCSA",
    // AI Bot Meta Tags
    "ai:title": "DCSA Debt Counsellors - Professional Debt Relief South Africa",
    "ai:description": "NCR registered debt counsellors (NCRDC3995) providing immediate debt relief, debt review, and credit repair services across South Africa. Free consultation available.",
    "ai:category": "Financial Services",
    "ai:service_area": "South Africa",
    rating: "general",
    distribution: "global",
    "DC.title": "DCSA Debt Counsellors - Professional Debt Help South Africa",
    "DC.subject": "Debt Counselling, Financial Services, Debt Management, Debt Help, Debt Relief",
    "DC.description": "DCSA professional debt counselling, debt help and debt relief services in South Africa",
    "geo.region": "ZA",
    "geo.placename": "South Africa",
    language: "en-ZA",
    revisit: "7 days",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable}`}>
      <head>
        {/* Facebook SDK - add your actual App ID when ready */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-RT5LCR9SW4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-RT5LCR9SW4', {
                anonymize_ip: true
              });
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
        "@type": "FinancialService",
        "@id": "https://www.dcsam.co.za/#organization",
        name: "DCSA Debt Counsellors",
        alternateName: ["DCSA", "DCSA Debt Counselling", "Debt Clear SA"],
        description:
          "DCSA - Professional debt counselling, debt help and debt relief services in South Africa. NCR registered debt counsellor (NCRDC3995) helping South Africans achieve financial freedom.",
                  url: "https://www.dcsam.co.za",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.dcsam.co.za/images/dcsa-logo.jpg",
                    width: 512,
                    height: 512,
                  },
                  image: "https://www.dcsam.co.za/images/dcsa-logo.jpg",
                  telephone: "+27719006298",
                  email: "info@dcsam.co.za",
                  sameAs: [
                    "https://www.facebook.com/DCSamDebt",
                    "https://www.linkedin.com/company/dcsam-dcsa",
                    "https://www.tiktok.com/@dcsam_debt",
                    "https://www.instagram.com/debthelp_with_dcsam"
                  ],
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
                    latitude: "-33.966111",
                    longitude: "25.595891",
                  },
                  areaServed: {
                    "@type": "Country",
                    name: "South Africa",
                  },
                  serviceType: [
                    "Debt Help",
                    "Debt Relief",
                    "Debt Counselling",
                    "Debt Management",
                    "Financial Counselling",
                    "Budget Planning",
                    "Debt Review",
                    "Credit Repair",
                    "Savings Coaching",
                  ],
                  priceRange: "$$",
                  currenciesAccepted: "ZAR",
                  paymentAccepted: "Cash, Credit Card, Bank Transfer",
                  openingHours: "Mo-Fr 08:00-17:00",
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Debt Counselling Services",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Debt Help & Debt Relief Services",
                          description:
                            "Professional debt help and debt relief including debt review, budget planning, and personalized debt management strategies.",
                          provider: {
                            "@id": "https://www.dcsam.co.za/#organization",
                          },
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Credit Repair Services",
                          description:
                            "Professional credit repair services to help improve your credit score and financial standing in South Africa.",
                          provider: {
                            "@id": "https://www.dcsam.co.za/#organization",
                          },
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Budget Planning & Savings Coaching",
                          description:
                            "Expert budget planning and savings coaching to help you manage expenses, track spending, and build financial stability.",
                          provider: {
                            "@id": "https://www.dcsam.co.za/#organization",
                          },
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Free Debt Calculators",
                          description:
                            "Free online calculators including Money Map budget tracker, savings calculator, and interest calculator to help manage your finances.",
                          provider: {
                            "@id": "https://www.dcsam.co.za/#organization",
                          },
                        },
                      },
                    ],
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    bestRating: "5",
                    worstRating: "1",
                    ratingCount: "150",
                  },
        founder: {
          "@type": "Person",
          name: "Samantha Knoesen",
          jobTitle: "NCR Registered Debt Counsellor",
                  },
                },
                {
        "@type": "WebSite",
        "@id": "https://www.dcsam.co.za/#website",
        url: "https://www.dcsam.co.za",
        name: "DCSA Debt Counsellors",
        description: "DCSA - Professional debt help, debt relief and debt counselling in South Africa",
                  publisher: {
                    "@id": "https://www.dcsam.co.za/#organization",
                  },
                  inLanguage: "en-ZA",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: {
                      "@type": "EntryPoint",
                      urlTemplate: "https://www.dcsam.co.za/?s={search_term_string}",
                    },
                    "query-input": "required name=search_term_string",
                  },
                },
                {
        "@type": "WebPage",
        "@id": "https://www.dcsam.co.za/#webpage",
        url: "https://www.dcsam.co.za",
        name: "DCSA - Professional Debt Help & Debt Relief South Africa",
        description:
          "DCSA - Get professional debt help, debt relief and debt counselling services. NCR registered (NCRDC3995). Free consultation available.",
                  isPartOf: {
                    "@id": "https://www.dcsam.co.za/#website",
                  },
                  about: {
                    "@id": "https://www.dcsam.co.za/#organization",
                  },
                  primaryImageOfPage: {
                    "@type": "ImageObject",
                    url: "https://www.dcsam.co.za/images/dcsa-logo.jpg",
                  },
                  inLanguage: "en-ZA",
                  breadcrumb: {
                    "@id": "https://www.dcsam.co.za/#breadcrumb",
                  },
                },
                {
                  "@type": "BreadcrumbList",
                  "@id": "https://www.dcsam.co.za/#breadcrumb",
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      name: "Home",
                      item: "https://www.dcsam.co.za",
                    },
                  ],
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${roboto.variable} ${poppins.variable} ${roboto.className}`}>
        <SkipToContent />
        <LayoutWrapper>
          <Suspense fallback={null}>
            <ViewTracker />
          </Suspense>
          {children}
        </LayoutWrapper>
        <FloatingChatButton />
        <Analytics />
      </body>
    </html>
  )
}
