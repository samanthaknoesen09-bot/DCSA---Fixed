import { type NextRequest, NextResponse } from "next/server"

const CAMPAIGNS = {
  "first-for-women": {
    affiliateshortcode: "JMAFFSite26159",
    offer_id: "2311",
  },
  ffw: {
    affiliateshortcode: "JMAFFSite26159",
    offer_id: "2311",
  },
  "auto-and-general": {
    affiliateshortcode: "JMAFFSite26160",
    offer_id: "1539",
  },
  aag: {
    affiliateshortcode: "JMAFFSite26160",
    offer_id: "1539",
  },
}

const LEADBYTE_ENDPOINT = "https://returnxdigital.leadbyte.co.uk/api/submit.php?campid=CAR-INSURANCE&sid=26397&returnjson=yes"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { campaign, firstname, lastname, phone1, acceptterms, optinurl } = body

    // Validate required fields
    if (!firstname?.trim() || !lastname?.trim() || !phone1?.trim() || !acceptterms) {
      return NextResponse.json(
        {
          ok: false,
          message: "Please fill in all required fields.",
          code: "VALIDATION_ERROR",
        },
        { status: 400 }
      )
    }

    // Validate campaign
    const campaignConfig = CAMPAIGNS[campaign as keyof typeof CAMPAIGNS]
    if (!campaignConfig) {
      console.error("[v0] Invalid campaign:", campaign)
      return NextResponse.json(
        {
          ok: false,
          message: "Invalid campaign selection.",
          code: "INVALID_CAMPAIGN",
        },
        { status: 400 }
      )
    }

    // Format date and time for LeadByte (dd/mm/yyyy hh:mm:ss)
    const now = new Date()
    const day = String(now.getDate()).padStart(2, "0")
    const month = String(now.getMonth() + 1).padStart(2, "0")
    const year = now.getFullYear()
    const hours = String(now.getHours()).padStart(2, "0")
    const minutes = String(now.getMinutes()).padStart(2, "0")
    const seconds = String(now.getSeconds()).padStart(2, "0")
    const optindate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`

    // Prepare LeadByte payload
    const leadbytePayload = {
      sid: "26397",
      firstname: firstname.trim(),
      lastname: lastname.trim(),
      phone1: phone1.trim(),
      optinurl: optinurl || "https://www.dcsam.co.za",
      optindate,
      channel: "JMAff",
      acceptterms: "true",
      offer_id: campaignConfig.offer_id,
      product: "JMCar",
      leadsource: "DCSA",
      affiliateshortcode: campaignConfig.affiliateshortcode,
    }

    // Submit to LeadByte
    const leadbyteResponse = await fetch(LEADBYTE_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(leadbytePayload as Record<string, string>).toString(),
    })

    const leadbyteData = await leadbyteResponse.json().catch(() => ({}))

    // Log submission
    console.log("[v0] LeadByte submission", {
      campaign,
      name: `${firstname} ${lastname}`,
      phone: phone1,
      status: leadbyteResponse.ok ? "success" : "failed",
      leadbyteStatus: leadbyteData?.status,
      leadId: leadbyteData?.data?.lead_id || leadbyteData?.lead_id,
    })

    // Check if LeadByte accepted the submission
    if (!leadbyteResponse.ok) {
      return NextResponse.json(
        {
          ok: false,
          message: "We couldn't submit your quote request. Please try again.",
          code: "DELIVERY_FAILED",
        },
        { status: 500 }
      )
    }

    // Extract lead ID from response (structure may vary)
    const leadId = leadbyteData?.data?.lead_id || leadbyteData?.lead_id || leadbyteData?.leadId || "unknown"

    return NextResponse.json({
      ok: true,
      message: "Quote request submitted successfully.",
      leadId,
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error("[v0] Insurance submission error:", errorMessage)

    return NextResponse.json(
      {
        ok: false,
        message: "An unexpected error occurred. Please try again.",
        code: "SERVER_ERROR",
      },
      { status: 500 }
    )
  }
}
