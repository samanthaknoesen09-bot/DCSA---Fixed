"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, AlertCircle, Shield, ExternalLink } from "lucide-react"
import Link from "next/link"
import { colors } from "@/lib/colors"

export function VerifyDebtCounsellorClient() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-4xl px-4 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12" style={{ color: colors.maroon }} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance" style={{ color: colors.charcoal }}>
            How to Verify Your Debt Counsellor
          </h1>
          <p className="text-xl" style={{ color: colors.warmGrey }}>
            Protect yourself. Make sure your debt counsellor is legitimate and registered.
          </p>
        </div>

        {/* Why It Matters */}
        <Card className="mb-8 border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
          <CardHeader style={{ backgroundColor: colors.mintCalm }}>
            <CardTitle className="text-white flex items-center gap-2">
              <AlertCircle className="h-5 w-5" />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-4" style={{ color: colors.charcoal }}>
              Unregistered or fraudulent debt counsellors can:
            </p>
            <ul className="space-y-3">
              {[
                "Charge illegal fees and take your money without helping you",
                "Provide advice that makes your debt worse, not better",
                "Have no legal standing — creditors won't recognize their work",
                "Leave you worse off than when you started",
                "Scam you or sell your personal information",
              ].map((risk, i) => (
                <li key={i} className="flex gap-3" style={{ color: colors.charcoal }}>
                  <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" style={{ color: colors.maroon }} />
                  <span>{risk}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* How to Verify */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold mb-8" style={{ color: colors.charcoal }}>
            How to Verify a Debt Counsellor
          </h2>

          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
              <CardHeader style={{ backgroundColor: `${colors.maroon}10` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.maroon }}
                  >
                    1
                  </div>
                  <CardTitle style={{ color: colors.charcoal }}>Check the NCR Register</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p style={{ color: colors.charcoal }}>
                  The National Credit Regulator (NCR) maintains an official register of all legitimate debt counsellors in South Africa.
                </p>
                <div className="bg-white p-4 rounded-lg border" style={{ borderColor: colors.sandLight }}>
                  <p className="font-semibold mb-2" style={{ color: colors.charcoal }}>
                    To verify:
                  </p>
                  <ol className="space-y-2 ml-4">
                    {[
                      "Visit https://www.ncr.org.za/register_of_registrants/",
                      "Look for the debt counsellor's name or registration number (starts with NCRDC)",
                      "Check that they are listed as 'Active' (not suspended or cancelled)",
                      "Note their registration number for your records",
                    ].map((step, i) => (
                      <li key={i} className="list-decimal" style={{ color: colors.charcoal }}>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>
                <Button
                  className="w-full text-white font-semibold shadow-md hover:shadow-lg"
                  style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                  asChild
                >
                  <Link href="https://www.ncr.org.za/register_of_registrants/" target="_blank" rel="noopener noreferrer">
                    Check NCR Register Now
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Step 2 */}
            <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
              <CardHeader style={{ backgroundColor: `${colors.maroon}10` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.maroon }}
                  >
                    2
                  </div>
                  <CardTitle style={{ color: colors.charcoal }}>Ask for Their Registration Number</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <p className="mb-4" style={{ color: colors.charcoal }}>
                  A legitimate debt counsellor will proudly share their registration number. If they:
                </p>
                <ul className="space-y-2">
                  {[
                    "Refuse to give you their NCRDC number 🚩",
                    "Say it's 'private' or 'confidential' 🚩",
                    "Give you a number but it's not in the NCR register 🚩",
                    "Claim they're 'semi-registered' or 'in process' 🚩",
                  ].map((warning, i) => (
                    <li key={i} className="flex gap-2" style={{ color: colors.charcoal }}>
                      <span>{warning}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-4 text-sm" style={{ color: colors.warmGrey }}>
                  If any of these apply, do not work with them.
                </p>
              </CardContent>
            </Card>

            {/* Step 3 */}
            <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
              <CardHeader style={{ backgroundColor: `${colors.maroon}10` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.maroon }}
                  >
                    3
                  </div>
                  <CardTitle style={{ color: colors.charcoal }}>Check Their Direct Contact Info</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p style={{ color: colors.charcoal }}>
                  Legitimate debt counsellors are accessible and transparent about their contact details.
                </p>
                <div className="bg-white p-4 rounded-lg border" style={{ borderColor: colors.sandLight }}>
                  <p className="font-semibold mb-3" style={{ color: colors.charcoal }}>
                    Red flags:
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Only contact through a website form (no direct number/email) 🚩",
                      "Multiple websites with slightly different names 🚩",
                      "No verifiable office address or business registration 🚩",
                      "Only social media contact 🚩",
                      "Aggressive 'limited time offer' pressure 🚩",
                    ].map((flag, i) => (
                      <li key={i} style={{ color: colors.charcoal }}>
                        {flag}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Step 4 */}
            <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
              <CardHeader style={{ backgroundColor: `${colors.maroon}10` }}>
                <div className="flex items-center gap-3">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold"
                    style={{ backgroundColor: colors.maroon }}
                  >
                    4
                  </div>
                  <CardTitle style={{ color: colors.charcoal }}>Look for the Warning Signs</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p style={{ color: colors.charcoal }}>
                  Scammers use pressure and promises. Legitimate counsellors are honest about what they can and can't do.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.maroon}10`, borderLeft: `4px solid ${colors.maroon}` }}>
                    <p className="font-semibold mb-2" style={{ color: colors.maroon }}>
                      🚩 SCAM SIGNS
                    </p>
                    <ul className="space-y-1 text-sm">
                      {[
                        "Promises to 'erase' your debt",
                        "Asks you to pay them before creditors",
                        "Guarantees credit score improvement",
                        "Says you'll get approval immediately",
                        "Uses high-pressure sales tactics",
                        "Won't explain their process clearly",
                      ].map((sign, i) => (
                        <li key={i} style={{ color: colors.charcoal }}>
                          • {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.mintCalm}15`, borderLeft: `4px solid ${colors.mintCalm}` }}>
                    <p className="font-semibold mb-2" style={{ color: colors.mintCalm }}>
                      ✓ LEGITIMATE SIGNS
                    </p>
                    <ul className="space-y-1 text-sm">
                      {[
                        "NCR registered and searchable",
                        "Honest about the process",
                        "Takes time to understand your situation",
                        "Explains what they can realistically help with",
                        "No upfront payment required",
                        "Clear about fees (all disclosed)",
                      ].map((sign, i) => (
                        <li key={i} style={{ color: colors.charcoal }}>
                          • {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Credentials */}
        <Card className="border-2 mb-12" style={{ borderColor: colors.maroon, borderRadius: "16px" }}>
          <CardHeader style={{ backgroundColor: colors.maroon }}>
            <div className="flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-white" />
              <CardTitle className="text-white">We Are NCR Registered</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>
                  Founder & Lead Debt Counsellor
                </p>
                <p className="text-xl font-bold" style={{ color: colors.charcoal }}>
                  Samantha Knoesen
                </p>
                <p className="text-lg font-semibold mt-2" style={{ color: colors.maroon }}>
                  NCRDC3995
                </p>
              </div>
              <div className="text-center">
                <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>
                  Verified on
                </p>
                <p className="text-xl font-bold" style={{ color: colors.charcoal }}>
                  NCR Register
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  style={{ borderColor: colors.maroon, color: colors.maroon }}
                  asChild
                >
                  <Link href="https://www.ncr.org.za/register_of_registrants/" target="_blank">
                    Verify
                  </Link>
                </Button>
              </div>
              <div className="text-center">
                <p className="text-sm mb-2" style={{ color: colors.warmGrey }}>
                  Direct Contact
                </p>
                <p className="text-lg font-semibold" style={{ color: colors.charcoal }}>
                  Sam
                </p>
                <p className="text-sm mt-1" style={{ color: colors.warmGrey }}>
                  066 193 7596 (WhatsApp)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* What If You Find a Problem */}
        <Card className="border-2 mb-12" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
          <CardHeader style={{ backgroundColor: `${colors.maroon}10` }}>
            <CardTitle style={{ color: colors.charcoal }}>
              What If You Find an Unregistered Counsellor or Suspect Fraud?
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-4">
            <p style={{ color: colors.charcoal }}>
              Report it to the National Credit Regulator (NCR). They investigate complaints against debt counsellors.
            </p>
            <Button
              className="w-full text-white font-semibold shadow-md hover:shadow-lg"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="https://www.ncr.org.za/" target="_blank" rel="noopener noreferrer">
                Visit NCR Website
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <p className="text-lg mb-6" style={{ color: colors.charcoal }}>
            Ready to take the next step? Let's chat.
          </p>
          <Button
            size="lg"
            className="text-white font-semibold shadow-lg hover:shadow-xl"
            style={{ backgroundColor: colors.whatsapp || "#25D366", borderRadius: "12px" }}
            asChild
          >
            <Link href="https://wa.me/27661937596" target="_blank" rel="noopener noreferrer">
              Message Sam on WhatsApp ☕
            </Link>
          </Button>
        </div>
      </div>
    </main>
  )
}
