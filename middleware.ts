import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Only run Supabase auth session handling for client-portal and auth callback routes
  if (
    pathname.startsWith("/client-portal") ||
    pathname.startsWith("/auth")
  ) {
    const { updateSession } = await import("@/lib/supabase/proxy")
    return await updateSession(request)
  }

  // For all other routes, just pass through with security headers
  const response = NextResponse.next({ request })
  response.headers.set("X-DNS-Prefetch-Control", "on")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("Referrer-Policy", "origin-when-cross-origin")
  return response
}

export const config = {
  matcher: [
    /*
     * Match client-portal routes, auth routes, and API routes that need auth.
     * Exclude static files, images, and other assets.
     */
    "/client-portal/:path*",
    "/auth/:path*",
  ],
}
