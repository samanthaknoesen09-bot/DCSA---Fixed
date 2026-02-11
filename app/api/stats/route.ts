import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

// GET - Retrieve stats (for admin)
export async function GET() {
  try {
    const supabase = getSupabase()

    const { data: stats, error } = await supabase
      .from("page_views")
      .select("*")
    
    if (error) {
      return NextResponse.json({ totalViews: 0, uniqueVisitors: 0, todayViews: 0 })
    }

    const today = new Date().toISOString().split("T")[0]
    const totalViews = stats?.length || 0
    const uniqueVisitors = new Set(stats?.map((s: { visitor_id: string }) => s.visitor_id)).size
    const todayViews = stats?.filter((s: { created_at: string }) => s.created_at?.startsWith(today)).length || 0

    return NextResponse.json({
      totalViews,
      uniqueVisitors,
      todayViews,
    })
  } catch {
    return NextResponse.json({ totalViews: 0, uniqueVisitors: 0, todayViews: 0 })
  }
}

// POST - Record a page view
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { page, visitorId } = body

    const supabase = getSupabase()

    // Try to insert - if table doesn't exist, silently fail
    await supabase.from("page_views").insert({
      page: page || "/",
      visitor_id: visitorId || "anonymous",
    })

    return NextResponse.json({ success: true })
  } catch {
    // Silently fail - analytics should never break the site
    return NextResponse.json({ success: true })
  }
}
