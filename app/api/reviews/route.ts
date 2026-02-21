import { NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, rating, review } = body

    if (!name || !email || !review) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    // Send email to admin
    const subject = `New Review Submission from ${name} - ${rating} Stars`
    const adminBody = `New review received:

Name: ${name}
Email: ${email}
Rating: ${rating}/5
Review: ${review}

Date: ${new Date().toLocaleString()}

This review can be added to the website carousel and Google Reviews.`

    const mailtoLink = `mailto:samantha@dcsam.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(adminBody)}`
    
    // In production, you'd use a real email service here
    // For now, we'll just log it and return success
    console.log("[v0] Review submission received:", { name, email, rating })

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for your review! It will be reviewed and added to our site.",
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Review submission error:", error)
    return NextResponse.json(
      { error: "Failed to submit review" },
      { status: 500 }
    )
  }
}
