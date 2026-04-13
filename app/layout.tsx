import type React from "react"
import type { Metadata } from "next"
import { Poppins, Roboto } from "next/font/google"
import { Suspense } from "react"
import "./globals.css"
import { ViewTracker } from "@/components/view-tracker"
import { SkipToContent } from "@/components/skip-to-content"
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
  openGraph: {
    type: "website",
    locale: "en_ZA",
    url: "https://www.dcsam.co.za",
    siteName: "DCSA - Financial Education & Debt Counselling",
    title: "Financial Education & Debt Help for South Africans | DCSA",
    description: "Free plain-language financial education for South Africans. Learn saving, debt management, credit repair without judgment. Tools, calculators, and NCR-registered debt counselling.",
    images: [
      {
        url: "https://www.dcsam.co.za/og-image.png",
        width: 1200,
        height: 630,
        alt: "DCSA - Financial Education for All South Africans",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Education & Debt Help for South Africans | DCSA",
    description: "Free financial tools and debt counselling. No judgment, just real help.",
    images: ["https://www.dcsam.co.za/og-image.png"],
  },
  alternates: {
    canonical: "https://www.dcsam.co.za",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
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
    <html
      lang="en"
      className={`${poppins.variable} ${roboto.variable} ${nunito.variable} antialiased`}
    >
      <head>
        {/* LocalBusiness Schema - for Google Business Profile & local SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.dcsam.co.za",
              "name": "DCSA - Financial Education & Debt Counselling",
              "url": "https://www.dcsam.co.za",
              "description": "Financial education and debt counselling services in South Africa. NCR registered debt counsellor.",
              "telephone": "+27719006298",
              "email": "info@dcsam.co.za",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "81 6th Avenue",
                "addressLocality": "Newton Park",
                "addressRegion": "Gqeberha",
                "postalCode": "6045",
                "addressCountry": "ZA"
              },
              "image": "https://www.dcsam.co.za/og-image.png",
              "priceRange": "Consultation based",
              "areaServed": {
                "@type": "Country",
                "name": "South Africa"
              },
              "sameAs": [
                "https://www.facebook.com/DCSamDebt",
                "https://www.linkedin.com/company/dcsa-debt-counselling",
                "https://www.youtube.com/@dcsam"
              ],
              "knowsAbout": [
                "Debt Counselling",
                "Credit Repair",
                "Financial Education",
                "Debt Review",
                "Money Management"
              ],
              "jobTitle": "Debt Counsellor, Financial Educator",
              "sponsor": {
                "@type": "Organization",
                "name": "National Credit Regulator",
                "url": "https://www.ncr.org.za"
              },
              "makesOffer": [
                {
                  "@type": "Offer",
                  "name": "Debt Counselling",
                  "description": "Professional debt review and counselling services"
                },
                {
                  "@type": "Offer",
                  "name": "Financial Education",
                  "description": "Free financial literacy courses and tools"
                }
              ]
            })
          }}
        />

        {/* BreadcrumbList Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.dcsam.co.za"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Financial Education",
                  "item": "https://www.dcsam.co.za/#money-smarts"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Free Tools",
                  "item": "https://www.dcsam.co.za/#tools"
                },
                {
                  "@type": "ListItem",
                  "position": 4,
                  "name": "Debt Counselling",
                  "item": "https://www.dcsam.co.za/#debt-101"
                }
              ]
            })
          }}
        />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DCSA",
              "url": "https://www.dcsam.co.za",
              "description": "Financial education platform and debt counselling services",
              "logo": "https://www.dcsam.co.za/logo.png",
              "founder": {
                "@type": "Person",
                "name": "Samantha Knoesen"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "Customer Service",
                "telephone": "+27719006298",
                "email": "info@dcsam.co.za"
              },
              "sameAs": [
                "https://www.facebook.com/DCSamDebt",
                "https://www.linkedin.com/company/dcsa-debt-counselling"
              ]
            })
          }}
        />

        {/* FAQ Schema - Financial Myths & Education Questions */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Is saving only for rich people?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. Saving is for everyone. You can start with R50/week and build momentum. Small consistent deposits add up quickly — R50/week becomes R2,600/year, which can cover emergencies or build toward goals."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What exactly is debt review?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Debt review is a formal process under South African law where a registered debt counsellor helps over-indebted individuals restructure their debts into affordable repayments. It protects you from legal action and can reduce monthly payments by up to 40%."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I rebuild my credit score after debt?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes. Credit repair is possible. After debt review, paying on time, reducing debt, and addressing disputes improves your score gradually. Most people see improvements within 12-24 months of consistent payments."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Is financial education really important?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely. Understanding money — budgeting, saving, debt, credit — changes outcomes. Most financial stress comes from not knowing options. Education removes shame and builds confidence."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does an interest calculator help?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "An interest calculator shows you exactly how much debt grows over time. It demonstrates the cost of delay and helps you understand why paying extra on principal saves thousands."
                  }
                }
              ]
            })
          }}
        />

        {/* RSS and JSON Feed Discovery for Blog */}
        <link rel="alternate" type="application/rss+xml" title="DCSA Blog RSS Feed" href="https://www.dcsam.co.za/feed.xml" />
        <link rel="alternate" type="application/feed+json" title="DCSA Blog JSON Feed" href="https://www.dcsam.co.za/feed.json" />
        
        {/* AI Crawler Hints - helps AI assistants understand the site */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Structured Data for AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://www.dcsam.co.za",
              "name": "DCSA - Financial Education & Debt Counselling",
              "description": "South Africa's caring debt counsellors providing financial education, debt review, and credit repair services.",
              "publisher": {
                "@type": "Organization",
                "name": "DCSA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.dcsam.co.za/images/dcsa-logo.jpg"
                }
              },
              "potentialAction": {
                "@type": "SearchAction",
                "target": {
                  "@type": "EntryPoint",
                  "urlTemplate": "https://www.dcsam.co.za/blog?search={search_term_string}"
                },
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />

        {/* Blog Schema for AI Discovery */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Blog",
              "url": "https://www.dcsam.co.za/blog",
              "name": "DCSA Blog - Financial Education & Debt Counselling Tips",
              "description": "Real talk about money, debt management, and financial freedom from DCSA - South Africa's caring debt counsellors.",
              "publisher": {
                "@type": "Organization",
                "name": "DCSA",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://www.dcsam.co.za/images/dcsa-logo.jpg"
                }
              },
              "blogPost": [],
              "inLanguage": "en-ZA",
              "isAccessibleForFree": true,
              "audience": {
                "@type": "Audience",
                "audienceType": "South Africans seeking debt help and financial education"
              }
            })
          }}
        />

        {/* Person Schema for Sam - helps AI understand the founder */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Samantha Knoesen",
              "alternateName": "Sam Knoesen",
              "jobTitle": "Registered Debt Counsellor & Founder",
              "worksFor": {
                "@type": "Organization",
                "name": "DCSA"
              },
              "description": "NCR Registered Debt Counsellor (NCRDC3995) helping South Africans achieve financial freedom through debt review and financial education.",
              "image": "https://www.dcsam.co.za/images/samantha-knoesen.jpeg",
              "url": "https://www.dcsam.co.za",
              "sameAs": [
                "https://www.facebook.com/DebtClearDCSA",
                "https://www.linkedin.com/company/dcsa-debt-counselling"
              ],
              "knowsAbout": [
                "Debt Counselling",
                "Debt Review",
                "Credit Repair",
                "Financial Education",
                "National Credit Act"
              ]
            })
          }}
        />

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
            `,
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
        <Analytics />
      </body>
    </html>
  )
}
