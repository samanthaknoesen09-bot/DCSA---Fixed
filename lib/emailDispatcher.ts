import { Resend } from "resend"

interface SendDualEmailOptions {
  subject: string
  html: string
  submissionId: string
  type: "referral" | "document" | "callback" | "lead" | "form16" | "transfer" | "credit_repair"
  replyTo?: string
}

const REQUIRED_EMAILS = ["info@dcsam.co.za", "samantha.knoesen09@gmail.com"]
const FROM_ADDRESS = "DCSA Website <noreply@dcsam.co.za>"

/**
 * Convert HTML to plain text for email clients that block HTML
 * Strips tags and decodes basic entities
 */
function htmlToText(html: string): string {
  return html
    // Remove style tags and content
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, "")
    // Remove script tags and content
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, "")
    // Convert common HTML entities
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    // Convert breaks and paragraphs to newlines
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<\/p>/gi, "\n\n")
    .replace(/<p[^>]*>/gi, "")
    // Convert headings
    .replace(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi, "\n\n$1\n")
    // Convert list items
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "• $1\n")
    // Convert table rows and cells
    .replace(/<tr[^>]*>/gi, "\n")
    .replace(/<\/tr>/gi, "")
    .replace(/<td[^>]*>(.*?)<\/td>/gi, "$1\t")
    // Remove all remaining HTML tags
    .replace(/<[^>]+>/g, "")
    // Clean up multiple spaces and newlines
    .replace(/[ \t]+/g, " ")
    .replace(/\n\s*\n\s*\n/g, "\n\n")
    .trim()
}

export async function sendDualEmail(options: SendDualEmailOptions): Promise<void> {
  const { subject, html, submissionId, type, replyTo } = options

  // Validate API key
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    const err = `RESEND_API_KEY is not configured. Cannot send ${type} submission ${submissionId}`
    console.error("[v0]", err)
    throw new Error(err)
  }

  const resend = new Resend(apiKey)

  // Generate plain-text fallback
  const text = htmlToText(html)

  // Send to both emails using Promise.all - strict enforcement
  try {
    const emailPromises = REQUIRED_EMAILS.map((email) =>
      sendEmailWithRetry(resend, {
        from: FROM_ADDRESS,
        to: email,
        subject,
        html,
        text,
        replyTo: replyTo || undefined,
      })
    )

    // If ANY email fails, entire operation fails
    await Promise.all(emailPromises)

    console.log(`[v0] Dual email delivered successfully for ${type} ${submissionId}`, {
      submissionId,
      type,
      to: REQUIRED_EMAILS,
      status: "success",
    })
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error)
    console.error(`[v0] Dual email delivery FAILED for ${type} ${submissionId}`, {
      submissionId,
      type,
      to: REQUIRED_EMAILS,
      status: "failed",
      error: errorMessage,
    })
    throw error
  }
}

async function sendEmailWithRetry(
  resend: Resend,
  options: {
    from: string
    to: string
    subject: string
    html: string
    text: string
    replyTo?: string
  }
): Promise<void> {
  let lastError: Error | null = null

  // Try twice with 400ms delay
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const response = await resend.emails.send(options)

      if (response.error) {
        throw new Error(`Resend error: ${response.error.message}`)
      }

      console.log(`[v0] Email sent to ${options.to} (attempt ${attempt})`, {
        emailId: response.data?.id,
      })
      return
    } catch (error) {
      lastError = error instanceof Error ? error : new Error(String(error))
      if (attempt < 2) {
        // Wait before retry
        await new Promise((resolve) => setTimeout(resolve, 400))
      }
    }
  }

  // Both attempts failed
  throw new Error(`Failed to send email to ${options.to} after 2 attempts: ${lastError?.message}`)
}
