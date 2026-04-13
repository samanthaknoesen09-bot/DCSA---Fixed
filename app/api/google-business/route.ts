import { NextResponse } from "next/server"

/**
 * Google Business Profile Post API
 * Posts updates to your Google Business Profile when new blog posts are created
 * 
 * Required Environment Variables:
 * - GOOGLE_BUSINESS_ACCOUNT_ID: Your Google Business account ID
 * - GOOGLE_BUSINESS_LOCATION_ID: Your specific location ID
 * 
 * Authentication (choose one method):
 * Option A - Direct Access Token:
 * - GOOGLE_BUSINESS_ACCESS_TOKEN: OAuth2 access token
 * 
 * Option B - Refresh Token Flow (recommended):
 * - GOOGLE_CLIENT_ID: OAuth client ID
 * - GOOGLE_CLIENT_SECRET: OAuth client secret
 * - GOOGLE_BUSINESS_REFRESH_TOKEN: Refresh token for auto-renewal
 * 
 * To get these credentials:
 * 1. Go to Google Cloud Console
 * 2. Enable the "My Business Business Information API"
 * 3. Create OAuth2 credentials
 * 4. Use the OAuth playground to get tokens
 * 5. Find your account/location IDs in Google Business Profile
 */

interface GoogleBusinessPostParams {
  title: string
  summary: string
  url: string
  imageUrl?: string
  callToAction?: "LEARN_MORE" | "BOOK" | "ORDER" | "SHOP" | "SIGN_UP" | "CALL"
}

async function refreshAccessToken(): Promise<string | null> {
  const refreshToken = process.env.GOOGLE_BUSINESS_REFRESH_TOKEN
  // Support both naming conventions for flexibility
  const clientId = process.env.GOOGLE_CLIENT_ID || process.env.GOOGLE_OAUTH_CLIENT_ID
  const clientSecret = process.env.GOOGLE_CLIENT_SECRET || process.env.GOOGLE_OAUTH_CLIENT_SECRET

  if (!refreshToken || !clientId || !clientSecret) {
    return null
  }

  try {
    const response = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        client_secret: clientSecret,
        refresh_token: refreshToken,
        grant_type: "refresh_token",
      }),
    })

    const data = await response.json()
    return data.access_token || null
  } catch {
    return null
  }
}

export async function postToGoogleBusiness(
  params: GoogleBusinessPostParams
): Promise<{ success: boolean; postId?: string; error?: string }> {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID
  let accessToken = process.env.GOOGLE_BUSINESS_ACCESS_TOKEN

  if (!accountId || !locationId) {
    return {
      success: false,
      error: "Google Business credentials not configured. Set GOOGLE_BUSINESS_ACCOUNT_ID and GOOGLE_BUSINESS_LOCATION_ID",
    }
  }

  // Try to refresh token if we have refresh credentials
  if (!accessToken) {
    accessToken = await refreshAccessToken() || undefined
  }

  if (!accessToken) {
    return {
      success: false,
      error: "Google Business access token not available",
    }
  }

  try {
    const locationName = `accounts/${accountId}/locations/${locationId}`
    
    // Create a post with the blog content
    const postData: Record<string, unknown> = {
      languageCode: "en",
      summary: params.summary.substring(0, 1500), // Google limits to 1500 chars
      callToAction: {
        actionType: params.callToAction || "LEARN_MORE",
        url: params.url,
      },
      topicType: "STANDARD",
    }

    // Add media if image is provided
    if (params.imageUrl) {
      postData.media = [
        {
          mediaFormat: "PHOTO",
          sourceUrl: params.imageUrl,
        },
      ]
    }

    const response = await fetch(
      `https://mybusinessbusinessinformation.googleapis.com/v1/${locationName}/localPosts`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      }
    )

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}))
      return {
        success: false,
        error: `Google Business API error: ${response.status} - ${JSON.stringify(errorData)}`,
      }
    }

    const result = await response.json()
    return {
      success: true,
      postId: result.name,
    }
  } catch (error) {
    return {
      success: false,
      error: `Failed to post to Google Business: ${error instanceof Error ? error.message : "Unknown error"}`,
    }
  }
}

// POST endpoint - manually trigger a Google Business post
export async function POST(request: Request) {
  try {
    const { title, summary, url, imageUrl, callToAction } = await request.json()

    if (!title || !summary || !url) {
      return NextResponse.json(
        { error: "Title, summary, and URL are required" },
        { status: 400 }
      )
    }

    const result = await postToGoogleBusiness({
      title,
      summary,
      url,
      imageUrl,
      callToAction,
    })

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Successfully posted to Google Business Profile",
        postId: result.postId,
      })
    } else {
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 }
      )
    }
  } catch (error) {
    return NextResponse.json(
      { error: `Failed to process request: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    )
  }
}

// GET endpoint - check Google Business connection status
export async function GET() {
  const accountId = process.env.GOOGLE_BUSINESS_ACCOUNT_ID
  const locationId = process.env.GOOGLE_BUSINESS_LOCATION_ID
  const hasAccessToken = !!process.env.GOOGLE_BUSINESS_ACCESS_TOKEN
  const hasRefreshToken = !!process.env.GOOGLE_BUSINESS_REFRESH_TOKEN

  return NextResponse.json({
    configured: !!(accountId && locationId && (hasAccessToken || hasRefreshToken)),
    accountId: accountId ? `${accountId.substring(0, 4)}...` : null,
    locationId: locationId ? `${locationId.substring(0, 4)}...` : null,
    hasAccessToken,
    hasRefreshToken,
    instructions: !accountId || !locationId ? {
      step1: "Go to Google Cloud Console and enable 'My Business Business Information API'",
      step2: "Create OAuth2 credentials",
      step3: "Get your Account ID and Location ID from Google Business Profile",
      step4: "Set environment variables: GOOGLE_BUSINESS_ACCOUNT_ID, GOOGLE_BUSINESS_LOCATION_ID, GOOGLE_BUSINESS_ACCESS_TOKEN (or use refresh token flow)",
    } : null,
  })
}
