"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingDown, DollarSign, ArrowRight, FileText, Zap } from "lucide-react"
import Link from "next/link"

export function CalculatorsShowcase() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#FFD93D]/20 via-background to-primary/10">
      <div className="container mx-auto max-w-6xl">
        {/* Attention Hook */}
        <div className="text-center mb-12">
          <div className="inline-block bg-primary/10 px-6 py-3 rounded-full mb-6 border-2 border-primary/30">
            <span className="text-lg font-bold text-primary">⚡ See Your Numbers in 2 Minutes - Zero Cost</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
            Free Calculators That Show You Exactly Where You Stand
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Before making any decision, use our free calculators to understand your financial situation. 
            <span className="font-semibold text-foreground"> Knowledge is power</span> — and these tools put that power in your hands (no scary surprises).
          </p>
          <p className="text-sm text-muted-foreground mt-3">
            No sign-up required • 100% private • Instant results • Works on your phone
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Expenses Calculator */}
          <Card className="border-2 border-primary/30 hover:border-primary hover:shadow-2xl transition-all group">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Calculator className="w-8 h-8 text-primary" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">Expenses Calculator</h3>
                <p className="text-[#0D3B66]/70 leading-relaxed mb-1 text-sm font-medium text-[#4DB6AC]">See where your money goes</p>
                <p className="text-[#0D3B66]/70 leading-relaxed mb-4">
                  Track every Rand coming in and going out. See exactly where your money goes each month with our interactive budget calculator.
                </p>
                <ul className="space-y-2 text-sm text-[#0D3B66]/80">
                  <li className="flex items-start">
                    <span className="text-[#4DB6AC] mr-2">✓</span>
                    <span>Income vs expenses breakdown</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4DB6AC] mr-2">✓</span>
                    <span>Visual spending categories</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#4DB6AC] mr-2">✓</span>
                    <span>Identify savings opportunities</span>
                  </li>
                </ul>
              </div>

              <Button 
                className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white text-lg h-12"
                asChild
              >
                <Link href="/calculator">
                  Try Expenses Calculator
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Interest Calculator */}
          <Card className="border-2 border-[#FF6B6B]/30 hover:border-[#FF6B6B] hover:shadow-2xl transition-all group">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <TrendingDown className="w-8 h-8 text-[#FF6B6B]" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">Interest Calculator</h3>
                <p className="text-[#0D3B66]/70 leading-relaxed mb-4">
                  Calculate your monthly loan payments and total interest costs. Understand the true cost of your debt.
                </p>
                <ul className="space-y-2 text-sm text-[#0D3B66]/80">
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">✓</span>
                    <span>Monthly payment calculations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">✓</span>
                    <span>Total interest over loan term</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FF6B6B] mr-2">✓</span>
                    <span>Compare different loan scenarios</span>
                  </li>
                </ul>
              </div>

              <Button 
                className="w-full bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white text-lg h-12"
                asChild
              >
                <Link href="/interest-calculator">
                  Calculate Interest
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Potential Savings Calculator */}
          <Card className="border-2 border-[#FFD93D]/30 hover:border-[#FFD93D] hover:shadow-2xl transition-all group">
            <CardContent className="p-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-[#FFD93D]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <DollarSign className="w-8 h-8 text-[#FFD93D]" />
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-[#0D3B66] mb-3">How Much Could You Save?</h3>
                <p className="text-[#0D3B66]/70 leading-relaxed mb-4">
                  See how much you could save through debt counselling. Compare your current payments to restructured payments.
                </p>
                <ul className="space-y-2 text-sm text-[#0D3B66]/80">
                  <li className="flex items-start">
                    <span className="text-[#FFD93D] mr-2">✓</span>
                    <span>Potential monthly savings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD93D] mr-2">✓</span>
                    <span>Reduced debt payments</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#FFD93D] mr-2">✓</span>
                    <span>Free assessment available</span>
                  </li>
                </ul>
              </div>

              <Button 
                className="w-full bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66] text-lg h-12"
                onClick={() => {
                  const savingsSection = document.getElementById('savings-calculator')
                  if (savingsSection) {
                    savingsSection.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
              >
                Calculate Potential Savings
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Bottom CTA */}
        <Card className="bg-gradient-to-br from-[#0D3B66] to-[#4DB6AC] text-white border-0">
          <CardContent className="p-8 text-center">
            <p className="text-xl mb-4 font-semibold">
              Not sure which calculator to use?
            </p>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Start with the Expenses Calculator to understand your full financial picture, then use our other calculators to explore specific scenarios.
            </p>
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-[#0D3B66] font-bold"
              asChild
            >
              <Link href="/calculator">
                Start with Expenses Calculator
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
