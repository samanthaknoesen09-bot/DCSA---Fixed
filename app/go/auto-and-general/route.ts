import { NextRequest, NextResponse } from "next/server"

// Environment variable for Auto & General affiliate link
// Set in Vercel: INSURANCE_AUTO_GENERAL_URL
const AUTO_GENERAL_URL = process.env.INSURANCE_AUTO_GENERAL_URL || "https://www.autoandgeneral.co.za"

export async function GET(request: NextRequest) {
  try {
    // Build URL with tracking parameters
    const destinationUrl = new URL(AUTO_GENERAL_URL)
    
    // Add affiliate tracking parameters
    destinationUrl.searchParams.set("affiliateshortcode", "JMAFFSite26160")
    destinationUrl.searchParams.set("utm_source", "dcsam")
    destinationUrl.searchParams.set("utm_medium", "website")
    destinationUrl.searchParams.set("utm_campaign", "insurance_quotes")

    // Optional: Log click for tracking
    try {
      const clickData = {
        partner: "auto-general",
        shortcode: "JMAFFSite26160",
        timestamp: new Date().toISOString(),
        referrer: request.headers.get("referer") || "direct",
        userAgent: request.headers.get("user-agent") || "unknown",
      }
      
      console.log("[Insurance Click]", JSON.stringify(clickData))
      
      // If you want to store in database, call /api/track-click here
      // await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/track-click`, {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(clickData),
      // })
    } catch (error) {
      console.error("[Insurance Click] Logging error:", error)
      // Don't block redirect if logging fails
    }

    // 302 redirect to partner site
    return NextResponse.redirect(destinationUrl.toString(), { status: 302 })
  } catch (error) {
    console.error("[Auto & General Redirect] Error:", error)
    // Fallback redirect if something goes wrong
    return NextResponse.redirect(AUTO_GENERAL_URL, { status: 302 })
  }
}
