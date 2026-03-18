import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, TrendingDown, Percent, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Free Debt Calculators | Money Map, Savings & Interest Calculators",
  description:
    "Free online debt calculators to help you manage your finances. Calculate potential debt counselling savings, track expenses, and understand interest costs.",
  keywords: "debt calculator, savings calculator, expense tracker, interest calculator, debt counselling, South Africa",
  openGraph: {
    title: "Free Debt Calculators | DCSA Debt Help",
    description:
      "Use our free calculators to understand your debt situation, estimate potential savings, and take control of your finances.",
    url: "https://www.dcsam.co.za/calculators",
    type: "website",
  },
}

export default function CalculatorsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "Free Debt Calculators",
            description:
              "Free online calculators to help South Africans understand their debt, estimate savings under debt review, track expenses, and see the true cost of interest.",
            url: "https://www.dcsam.co.za/calculators",
          }),
        }}
      />
      <main className="min-h-screen bg-gradient-to-b from-background to-[#F8F9FA]">
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66]">
                Not sure where you stand financially?
              </h1>
              <div className="max-w-2xl mx-auto space-y-4 text-left">
                <p className="text-xl text-[#0D3B66]/70">
                  If your money feels stretched, your debt feels overwhelming, or you&apos;re just unsure what&apos;s really going on &mdash; you&apos;re not alone.
                </p>
                <p className="text-xl text-[#0D3B66]/70">
                  These free tools are designed to help you understand your situation clearly, without pressure or judgement.
                </p>
                <p className="text-xl text-[#0D3B66]/70">
                  Start with any calculator below and take the first step toward clarity &#x1F49B;
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Potential Savings Calculator */}
              <Card className="border-2 border-[#FFD93D]/30 hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#FFD93D]/20 flex items-center justify-center mb-4">
                    <TrendingDown className="h-8 w-8 text-[#FFD93D]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0D3B66]">Savings Calculator</CardTitle>
                  <p className="text-sm text-muted-foreground">Potential Debt Relief</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#0D3B66]/80">
                    See what could be possible. This calculator gives you an idea of how your repayments could change under a structured plan like debt review.
                  </p>
                  <ul className="text-sm space-y-2 text-[#0D3B66]/70">
                    <li>&#x2714; Estimate potential savings</li>
                    <li>&#x2714; Compare different scenarios</li>
                    <li>&#x2714; Understand what relief could look like</li>
                  </ul>
                  <p className="text-sm text-[#0D3B66]/60 italic">It&apos;s not a commitment &mdash; just a way to see your options.</p>
                  <Button className="w-full bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66]" asChild>
                    <Link href="/#savings-calculator">
                      See My Potential Savings
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 2: Expenses Calculator */}
              <Card className="border-2 border-[#4DB6AC]/30 hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#4DB6AC]/20 flex items-center justify-center mb-4">
                    <Calculator className="h-8 w-8 text-[#4DB6AC]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0D3B66]">Expenses Calculator</CardTitle>
                  <p className="text-sm text-muted-foreground">Financial Overview</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#0D3B66]/80">
                    Understand where your money is really going. Many people feel overwhelmed because they don&apos;t have a clear picture of their finances &mdash; this tool helps you change that.
                  </p>
                  <ul className="text-sm space-y-2 text-[#0D3B66]/70">
                    <li>&#x2714; Track income and expenses</li>
                    <li>&#x2714; Get a full financial overview</li>
                    <li>&#x2714; Identify pressure points</li>
                  </ul>
                  <p className="text-sm text-[#0D3B66]/60 italic">Clarity is the first step to taking back control.</p>
                  <Button className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90" asChild>
                    <Link href="/calculator">
                      Understand My Expenses
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Card 3: Interest Calculator */}
              <Card className="border-2 border-[#FF6B6B]/30 hover:shadow-xl transition-all">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 rounded-full bg-[#FF6B6B]/20 flex items-center justify-center mb-4">
                    <Percent className="h-8 w-8 text-[#FF6B6B]" />
                  </div>
                  <CardTitle className="text-2xl text-[#0D3B66]">Interest Calculator</CardTitle>
                  <p className="text-sm text-muted-foreground">True Cost of Borrowing</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-[#0D3B66]/80">
                    See how interest is affecting your debt. Interest can quietly increase what you owe over time &mdash; this tool helps you understand the real cost.
                  </p>
                  <ul className="text-sm space-y-2 text-[#0D3B66]/70">
                    <li>&#x2714; Calculate total repayment over time</li>
                    <li>&#x2714; Compare interest rates</li>
                    <li>&#x2714; See the true cost of borrowing</li>
                  </ul>
                  <p className="text-sm text-[#0D3B66]/60 italic">When you understand the numbers, you can make better decisions.</p>
                  <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white" asChild>
                    <Link href="/interest-calculator">
                      See My Interest Impact
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Trust / Help Section */}
            <div className="mt-16 text-center">
              <Card className="border-2 border-[#4DB6AC]/20 bg-gradient-to-br from-[#4DB6AC]/5 to-background">
                <CardContent className="p-12">
                  <h2 className="text-3xl font-bold text-[#0D3B66] mb-4">
                    You don&apos;t have to figure this out alone.
                  </h2>
                  <p className="text-lg text-[#0D3B66]/70 mb-6 max-w-2xl mx-auto">
                    If you&apos;d like help understanding your results, I&apos;m here to guide you &mdash; no pressure, just honest advice.
                  </p>
                  <p className="text-[#0D3B66]/70 mb-8 max-w-xl mx-auto">
                    &#x1F4AC; Chat with me directly or complete your assessment when you&apos;re ready.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white" asChild>
                      <Link href="/get-started">
                        Start My Free Assessment
                      </Link>
                    </Button>
                    <Button size="lg" variant="outline" className="border-[#4DB6AC] text-[#4DB6AC] hover:bg-[#4DB6AC]/10" asChild>
                      <Link href="https://wa.me/27661937596" target="_blank">
                        &#x1F4AC; WhatsApp Sam
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
