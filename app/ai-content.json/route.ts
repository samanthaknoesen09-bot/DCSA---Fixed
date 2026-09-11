import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://www.dcsam.co.za"
  return NextResponse.json(
    {
      name: "DCSA (Debt Clear SA)",
      tagline: "Debt doesn't define you. Let's fix this together.",
      description:
        "NCR-registered debt counselling (NCRDC3995) and credit repair in South Africa, led by Samantha Knoesen. Warm, honest, no judgement.",
      services: ["Debt counselling", "Debt review", "Credit repair", "Debt review flag removal assistance (eligibility applies, never guaranteed)"],
      signatureConcept: "Coffee with Sam — a free first conversation (in person, WhatsApp chat, or video call, strictly by appointment).",
      contact: {
        whatsapp: "071 900 6298",
        whatsappUrl: "https://wa.me/27719006298",
        email: "info@dcsam.co.za",
        office: "81 6th Avenue, Newton Park, Gqeberha — appointments only, no walk-ins",
        facebook: "https://www.facebook.com/DCSamDebt/",
      },
      hours: "Mon–Fri 08:00–16:00",
      feeds: {
        sitemap: `${baseUrl}/sitemap.xml`,
        rss: `${baseUrl}/feed.xml`,
        jsonFeed: `${baseUrl}/feed.json`,
      },
    },
    { headers: { "Cache-Control": "public, max-age=3600, s-maxage=3600" } }
  )
}
