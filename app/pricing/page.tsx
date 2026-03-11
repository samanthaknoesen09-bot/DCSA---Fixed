import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Debt Counselling Costs & Fees | DCSA Transparent Pricing",
  description: "Clear breakdown of debt counselling costs in South Africa. NCR regulated fees, no hidden charges. Understand exactly what you'll pay for debt review services.",
}

export default function PricingPage() {
  return (
    <>
      <main className="min-h-screen bg-background" id="main-content">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-4">
              Transparent Pricing
            </h1>
            <p className="text-xl text-[#0D3B66]/70">
              No hidden fees. NCR regulated. Affordable and honest.
            </p>
          </div>

          {/* NCR Regulated Fees */}
          <Card className="mb-8 border-2 border-[#4DB6AC]/30">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0D3B66]">NCR Regulated Fees (Current Guidelines)</CardTitle>
              <p className="text-sm text-muted-foreground">
                All debt counselling fees in South Africa are regulated by the National Credit Regulator (NCR). Here's what you'll pay:
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Application Fee</h3>
                <div className="bg-[#FFD93D]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">As per Schedule 2(2) of the Act</div>
                  <p className="text-sm text-muted-foreground mt-2">One-time fee recoverable directly from the consumer upon application (excl VAT)</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Administration Fee</h3>
                <div className="bg-[#4DB6AC]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">R300</div>
                  <p className="text-sm text-muted-foreground mt-2">Covers consultation, Form 17.1 process, DHS loading, and applications (excl VAT)</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Restructuring Fee</h3>
                <div className="bg-[#4DB6AC]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">Up to R8,000</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Lesser of first instalment or R8,000 (excl VAT). Joint applications: up to R9,000. Paid over first months as 100% of fee is due on first instalment.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Reckless Lending Fee</h3>
                <div className="bg-[#4DB6AC]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">Up to R1,500</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    Only charged if applicable after reckless lending assessment is complete and attorney affidavit is drafted (excl VAT)
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Monthly Care Fee</h3>
                <div className="bg-[#4DB6AC]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">5% up to R450/month</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    5% of your monthly instalment, capped at R450/month (excl VAT). Starts from 2nd month after restructuring fee is paid.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Consent Order Fee</h3>
                <div className="bg-[#4DB6AC]/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-[#0D3B66]">R500 + Attorney Fees</div>
                  <p className="text-sm text-muted-foreground mt-2">
                    R500 submission fee (excl VAT) plus filing fees. Deducted from 2nd month after restructuring fee is paid.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg text-[#0D3B66] mb-3">Payment Distribution Agent (PDA) Fees</h3>
                <div className="bg-[#FFD93D]/10 rounded-lg p-4 space-y-3">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#0D3B66]">Per payment per credit agreement:</p>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <p>• <strong>R5.00</strong> for payments between R100-R200</p>
                      <p>• <strong>R10.00</strong> for payments between R201-R500</p>
                      <p>• <strong>R15.00</strong> for payments exceeding R500</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t pt-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Payment Terms:</strong> The restructuring fee is paid over several months (not upfront) starting with your first restructured payment. Monthly care fees commence in the 2nd month after the restructuring fee is paid.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What's Included */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0D3B66]">What's Included</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Free initial consultation",
                  "Complete financial assessment",
                  "Form 16 application preparation",
                  "Creditor negotiations",
                  "Court representation",
                  "Payment distribution to creditors",
                  "Ongoing support and advice",
                  "Monthly statements",
                  "Credit bureau liaison",
                  "Clearance certificate upon completion",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-[#4DB6AC] shrink-0 mt-0.5" />
                    <span className="text-[#0D3B66]/80">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Important Information */}
          <Card className="mb-8 border-2 border-[#FFD93D]/40 bg-[#FFD93D]/5">
            <CardHeader>
              <CardTitle className="text-xl text-[#0D3B66] flex items-center gap-2">
                <AlertCircle className="h-6 w-6 text-[#FFD93D]" />
                Important Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-[#0D3B66]/80">
              <p>
                <strong>No upfront payments:</strong> The restructuring fee is paid over several months as part of your debt review payments, not upfront.
              </p>
              <p>
                <strong>Free consultation:</strong> We assess your situation at no cost to determine if debt review is right for you.
              </p>
              <p>
                <strong>NCR regulated:</strong> All fees are regulated by the National Credit Regulator and cannot exceed the legal maximum.
              </p>
              <p>
                <strong>Value for money:</strong> The savings from reduced monthly payments far exceed the cost of debt counselling.
              </p>
            </CardContent>
          </Card>

          {/* Example Calculation */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-2xl text-[#0D3B66]">Example: How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-[#F8F9FA] rounded-lg p-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-muted-foreground">Current Monthly Payments</div>
                      <div className="text-2xl font-bold text-red-600">R12,000</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">New Monthly Payment</div>
                      <div className="text-2xl font-bold text-[#4DB6AC]">R7,000</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Reduced payment amount:</span>
                    <span className="font-semibold">R7,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>After-care fee (5%):</span>
                    <span className="font-semibold">R350</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t">
                    <span className="font-semibold">Your total monthly payment:</span>
                    <span className="font-bold text-lg text-[#4DB6AC]">R7,350</span>
                  </div>
                  <div className="flex justify-between text-[#4DB6AC]">
                    <span className="font-semibold">You still save:</span>
                    <span className="font-bold">R4,650/month</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Button size="lg" className="bg-[#4DB6AC] hover:bg-[#4DB6AC]/90" asChild>
              <Link href="/get-started">Get Your Free Consultation</Link>
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              No obligation. We'll explain all costs before you commit.
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
