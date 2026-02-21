import { NextResponse } from "next/server"

function formatOptInDate(date = new Date()) {
  const pad = (n: number) => String(n).padStart(2, "0")
  const dd = pad(date.getDate())
  const mm = pad(date.getMonth() + 1)
  const yyyy = date.getFullYear()
  const hh = pad(date.getHours())
  const mi = pad(date.getMinutes())
  const ss = pad(date.getSeconds())
  return `${dd}/${mm}/${yyyy} ${hh}:${mi}:${ss}`
}

function isValidSaMobile(phone: string) {
  const digits = phone.replace(/\D/g, "")
  return digits.length >= 9 && digits.length <= 12
}

const PARTNER_CONFIG: Record<string, { offer_id: number; affiliateshortcode: string }> = {
  "first-for-women": {
    offer_id: 2311,
    affiliateshortcode: "JMAFFSite26159",
  },
  "auto-and-general": {
    offer_id: 1539,
    affiliateshortcode: "JMAFFSite26160",
  },
  ffw: {
    offer_id: 2311,
    affiliateshortcode: "JMAFFSite26159",
  },
  aag: {
    offer_id: 1539,
    affiliateshortcode: "JMAFFSite26160",
  },
}

export async function POST(req: Request) {
  try {
    const body = await req.json()

    // Support both "campaign" (ffw/aag) and "partner" (first-for-women/auto-and-general)
    const campaignKey = String(body?.campaign || body?.partner || "").trim()
    const firstname = String(body?.firstname || "").trim()
    const lastname = String(body?.lastname || "").trim()
    const phone1 = String(body?.phone1 || "").trim()
    // Support both "acceptterms" and "consent" field names
    const acceptterms = Boolean(body?.acceptterms ?? body?.consent)
    const optinurl =
      String(body?.optinurl || "").trim() ||
      req.headers.get("referer") ||
      "https://www.dcsam.co.za/insurance-quotes"

    if (!firstname || !lastname || !phone1 || !acceptterms) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please complete all required fields and accept the consent checkbox.",
        },
        { status: 400 }
      )
    }

    if (!isValidSaMobile(phone1)) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Please enter a valid South African mobile number.",
        },
        { status: 400 }
      )
    }

    const config = PARTNER_CONFIG[campaignKey]
    if (!config) {
      return NextResponse.json(
        {
          ok: false,
          code: "VALIDATION_ERROR",
          message: "Invalid campaign or partner selection.",
        },
        { status: 400 }
      )
    }

    const payload = new URLSearchParams({
      campid: "CAR-INSURANCE",
      sid: "26397",
      returnjson: "yes",
      firstname,
      lastname,
      phone1,
      optinurl,
      optindate: formatOptInDate(),
      channel: "JMAff",
      acceptterms: "true",
      offer_id: String(config.offer_id),
      product: "JMCar",
      leadsource: "DCSA",
      affiliateshortcode: config.affiliateshortcode,
    })

    const endpoint = "https://returnxdigital.leadbyte.co.uk/api/submit.php"

    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: payload.toString(),
      cache: "no-store",
    })

    const text = await res.text()
    let data: any = null
    try {
      data = JSON.parse(text)
    } catch {
      data = null
    }

    if (!res.ok || !data || (Number(data?.code) !== 1 && data?.code !== "1")) {
      return NextResponse.json(
        {
          ok: false,
          code: "DELIVERY_FAILED",
          message:
            "We couldn't submit your quote request right now. Please WhatsApp us and we'll help you manually.",
          raw: process.env.NODE_ENV === "production" ? undefined : text,
        },
        { status: 502 }
      )
    }

    return NextResponse.json({
      ok: true,
      leadId: data.leadId ?? data.id ?? null,
      message: "Quote request submitted successfully",
    })
  } catch (err) {
    return NextResponse.json(
      {
        ok: false,
        code: "SERVER_ERROR",
        message: "Something went wrong. Please try again or WhatsApp us.",
      },
      { status: 500 }
    )
  }
}
