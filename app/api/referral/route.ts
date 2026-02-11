import { type NextRequest, NextResponse } from "next/server"
import { createClient } from "@supabase/supabase-js"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validate required fields
    if (!body.referrerName || !body.referrerEmail || !body.referrerPhone || !body.friendName || !body.friendPhone) {
      return NextResponse.json(
        { error: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Use service role client for public insert
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_ROLE_KEY!
    )

    // Save to Supabase
    const { data: referral, error: dbError } = await supabase
      .from("referrals")
      .insert({
        referrer_name: body.referrerName,
        referrer_email: body.referrerEmail,
        referrer_phone: body.referrerPhone,
        referrer_id_number: body.referrerIdNumber || null,
        referrer_bank_name: body.referrerBankName || null,
        referrer_account_number: body.referrerAccountNumber || null,
        referrer_branch_code: body.referrerBranchCode || null,
        friend_name: body.friendName,
        friend_email: body.friendEmail || null,
        friend_phone: body.friendPhone,
        friend_relationship: body.friendRelationship || null,
        status: "pending",
        referral_fee: 350.00,
      })
      .select()
      .single()

    if (dbError) {
      console.error("Referral DB error:", dbError)
      return NextResponse.json(
        { error: "Failed to save referral. Please try again." },
        { status: 500 }
      )
    }

    // Send email notification via Resend
    try {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        },
        body: JSON.stringify({
          from: "DCSA Website <noreply@dcsam.co.za>",
          to: ["info@dcsam.co.za"],
          subject: `New Referral Submission - ${body.referrerName} referred ${body.friendName}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #0D3B66; border-bottom: 3px solid #4DB6AC; padding-bottom: 10px;">New Client Referral</h2>
              
              <h3 style="color: #4DB6AC;">Referrer Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Name:</strong></td><td style="padding: 8px;">${body.referrerName}</td></tr>
                <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Email:</strong></td><td style="padding: 8px;">${body.referrerEmail}</td></tr>
                <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Phone:</strong></td><td style="padding: 8px;">${body.referrerPhone}</td></tr>
                ${body.referrerIdNumber ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>ID Number:</strong></td><td style="padding: 8px;">${body.referrerIdNumber}</td></tr>` : ""}
                ${body.referrerBankName ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Bank:</strong></td><td style="padding: 8px;">${body.referrerBankName}</td></tr>` : ""}
                ${body.referrerAccountNumber ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Account No:</strong></td><td style="padding: 8px;">${body.referrerAccountNumber}</td></tr>` : ""}
                ${body.referrerBranchCode ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Branch Code:</strong></td><td style="padding: 8px;">${body.referrerBranchCode}</td></tr>` : ""}
              </table>

              <h3 style="color: #4DB6AC; margin-top: 20px;">Referred Friend Details</h3>
              <table style="width: 100%; border-collapse: collapse;">
                <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Name:</strong></td><td style="padding: 8px;">${body.friendName}</td></tr>
                <tr><td style="padding: 8px; background: #f8f9fa;"><strong>Phone:</strong></td><td style="padding: 8px;">${body.friendPhone}</td></tr>
                ${body.friendEmail ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Email:</strong></td><td style="padding: 8px;">${body.friendEmail}</td></tr>` : ""}
                ${body.friendRelationship ? `<tr><td style="padding: 8px; background: #f8f9fa;"><strong>Relationship:</strong></td><td style="padding: 8px;">${body.friendRelationship}</td></tr>` : ""}
              </table>

              <div style="margin-top: 20px; padding: 15px; background: #FFF3CD; border-left: 4px solid #FFD93D; border-radius: 4px;">
                <p style="margin: 0;"><strong>Referral Fee:</strong> R350.00 (payable once the friend successfully signs up for debt counselling)</p>
              </div>

              <div style="margin-top: 15px; padding: 10px; background: #f8f9fa; border-radius: 4px;">
                <p style="margin: 0; font-size: 12px; color: #666;">
                  <strong>Referral ID:</strong> ${referral.id}<br/>
                  <strong>Submitted:</strong> ${new Date().toLocaleString("en-ZA", { timeZone: "Africa/Johannesburg" })}
                </p>
              </div>
            </div>
          `,
        }),
      })

      if (!resendResponse.ok) {
        console.error("Resend API error:", await resendResponse.text())
      }
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      // Don't fail the request if email fails
    }

    // Also send to Zapier if configured
    const zapierWebhookUrl = process.env.ZAPIER_WEBHOOK_URL
    if (zapierWebhookUrl) {
      try {
        await fetch(zapierWebhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "Client Referral",
            referrerName: body.referrerName,
            referrerEmail: body.referrerEmail,
            referrerPhone: body.referrerPhone,
            friendName: body.friendName,
            friendPhone: body.friendPhone,
            friendEmail: body.friendEmail || "",
            referralFee: "R350",
            submittedAt: new Date().toISOString(),
            source: "DCSA Website - Referral Form",
          }),
        })
      } catch {
        // Silent fail for Zapier
      }
    }

    return NextResponse.json({
      success: true,
      referralId: referral.id,
      message: "Referral submitted successfully!",
    })
  } catch (error) {
    console.error("Referral submission error:", error)
    return NextResponse.json(
      { error: "Something went wrong. Please try again or call us directly." },
      { status: 500 }
    )
  }
}
