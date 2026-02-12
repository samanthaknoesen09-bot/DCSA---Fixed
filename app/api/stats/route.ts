import { type NextRequest, NextResponse } from "next/server"

// Stats are tracked via Vercel Analytics (already integrated in layout.tsx)
// This endpoint exists as a no-op to prevent errors from the ViewTracker component

export async function GET() {
  return NextResponse.json({ totalViews: 0, uniqueVisitors: 0, todayViews: 0 })
}

export async function POST(request: NextRequest) {
  // No-op: analytics handled by Vercel Analytics
  return NextResponse.json({ success: true })
}
