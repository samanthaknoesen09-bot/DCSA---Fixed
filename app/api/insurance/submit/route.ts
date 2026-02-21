import { NextRequest, NextResponse } from "next/server"

const LEADBYTE_URL = "https://returnxdigital.leadbyte.co.uk/api/submit.php"
const BASE_PARAMS = {
  campid: "CAR-INSURANCE",
  sid: "26397",
  returnjson: "yes",
}

// Partner configurations
const PARTNER_CONFIG = {
  "first-for-women": {
    affiliateshortcode: "JMAFFSite26159",
    offer_id: "2311",
  },
  "auto-and-general": {
    affiliateshortcode: "JMAFFSite26160",
    offer_id: "1539",
  },
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstname, lastname, phone1, partner, optinurl } = body

    // Validation
    if (!firstname || !lastname || !phone1 || !partner) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Missing required fields: firstname, lastname, phone1, partner",
        },
        { status: 400 }
      )
    }

    if (!PARTNER_CONFIG[partner as keyof typeof PARTNER_CONFIG]) {
      return NextResponse.json(
        {
          ok: false,
          code: "INVALID_PARTNER",
          message: "Invalid partner specified",
        },
        { status: 400 }
      )
    }

    const config = PARTNER_CONFIG[partner as keyof typeof PARTNER_CONFIG]

    // Format optindate as dd/mm/yyyy hh:mm:ss
    const now = new Date()
    const optindate = `${String(now.getDate()).padStart(2, "0")}/${String(now.getMonth() + 1).padStart(2, "0")}/${now.getFullYear()} ${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}:${String(now.getSeconds()).padStart(2, "0")}`

    // Build LeadByte payload
    const leadBytePayload = {
      ...BASE_PARAMS,
      firstname,
      lastname,
      phone1,
      optinurl: optinurl || request.headers.get("referer") || "https://www.dcsam.co.za",
      optindate,
      channel: "JMAff",
      acceptterms: "true",
      offer_id: config.offer_id,
      product: "JMCar",
      leadsource: "DCSA",
      affiliateshortcode: config.affiliateshortcode,
    }

    console.log("[v0] Submitting to LeadByte:", { partner, phone1 })

    // Submit to LeadByte
    const leadByteResponse = await fetch(
      `${LEADBYTE_URL}?${new URLSearchParams(leadBytePayload).toString()}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    )

    const leadByteData = await leadByteResponse.json()

    console.log("[v0] LeadByte response:", leadByteData)

    // Check for success (code=1)
    if (leadByteData.code === 1 || leadByteData.code === "1") {
      return NextResponse.json({
        ok: true,
        leadId: leadByteData.leadId || leadByteData.id || "submitted",
        message: "Quote request submitted successfully",
        partner,
      })
    } else {
      // LeadByte returned an error
      return NextResponse.json(
        {
          ok: false,
          code: "LEADBYTE_ERROR",
          message: leadByteData.message || "Failed to submit quote request",
          details: leadByteData,
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("[v0] Insurance submission error:", error)
    return NextResponse.json(
      {
        ok: false,
        code: "SUBMISSION_ERROR",
        message: "An error occurred while submitting your quote request",
      },
      { status: 500 }
    )
  }
}
