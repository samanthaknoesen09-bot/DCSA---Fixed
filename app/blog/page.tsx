import type { Metadata } from "next"
import BlogClientPage from "./blog-client"

export const metadata: Metadata = {
  title: "DCSA (Debt Clear SA (Pty) Ltd) Blog - Latest Debt Help Tips & Financial Advice | Debt Counselling Updates",
  description:
    "Stay updated with DCSA (Debt Clear SA (Pty) Ltd)'s latest debt help tips, financial advice, and debt counselling insights. Follow our blog for practical solutions to manage debt, improve credit scores, and achieve financial freedom in South Africa.",
  keywords: [
    "debt help blog",
    "debt counselling tips",
    "financial advice South Africa",
    "debt management blog",
    "DCSA (Debt Clear SA (Pty) Ltd) updates",
    "debt clear tips",
  ],
  alternates: {
    canonical: "https://dcsam.co.za/blog",
  },
  openGraph: {
    title: "DCSA (Debt Clear SA (Pty) Ltd) Blog - Latest Debt Help Tips & Financial Advice",
    description: "Get expert debt counselling tips and financial advice from DCSA (Debt Clear SA (Pty) Ltd)'s experienced team.",
    url: "https://dcsam.co.za/blog",
    type: "website",
  },
}

const blogBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.dcsam.co.za" },
    { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.dcsam.co.za/blog" },
  ],
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogBreadcrumb) }} />
      <BlogClientPage />
    </>
  )
}
