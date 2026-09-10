import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog & Updates | DCSA (Debt Clear SA (Pty) Ltd) Debt Counsellors - Latest Financial Tips & Advice",
  description:
    "Stay updated with the latest debt counselling tips, financial advice, and success stories from DCSA (Debt Clear SA (Pty) Ltd). Follow our blog for expert insights on debt management, budgeting, and achieving financial freedom in South Africa.",
  keywords: [
    "debt counselling blog",
    "financial tips South Africa",
    "debt management advice",
    "DCSA (Debt Clear SA (Pty) Ltd) updates",
    "debt help blog",
    "financial education",
    "debt clear tips",
    "budgeting advice",
    "Samantha Knoesen blog",
    "debt review tips",
    "credit repair advice",
  ],
  openGraph: {
    title: "DCSA (Debt Clear SA (Pty) Ltd) Blog - Latest Debt Counselling Tips & Financial Advice",
    description:
      "Expert debt counselling insights and financial tips from DCSA (Debt Clear SA (Pty) Ltd). Stay informed about debt management strategies and success stories.",
    url: "https://www.dcsam.co.za/blog",
    type: "website",
    images: [
      {
        url: "https://www.dcsam.co.za/images/dcsa-og-logo.png",
        width: 1200,
        height: 630,
        alt: "DCSA (Debt Clear SA (Pty) Ltd) Blog - Debt Counselling Tips",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DCSA (Debt Clear SA (Pty) Ltd) Blog - Latest Debt Counselling Tips & Financial Advice",
    description: "Expert debt counselling insights and financial tips from DCSA (Debt Clear SA (Pty) Ltd).",
    images: ["https://www.dcsam.co.za/images/dcsa-og-logo.png"],
  },
  alternates: {
    canonical: "https://www.dcsam.co.za/blog",
    types: {
      "application/rss+xml": "https://www.dcsam.co.za/feed.xml",
      "application/feed+json": "https://www.dcsam.co.za/feed.json",
    },
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
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
