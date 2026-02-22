"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calculator, TrendingUp, DollarSign } from "lucide-react"
import { MoneyMap } from "@/components/money-map"
import { InterestCalculator } from "@/components/interest-calculator"
import { SavingsCalculator } from "@/components/savings-calculator"

type CalculatorType = "select" | "indepth" | "interest" | "savings"

export function ClientCalculatorPage() {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType>("select")

  if (selectedCalculator === "indepth") {
    return (
      <div className="space-y-6">
        <Button
          variant="outline"
          onClick={() => setSelectedCalculator("select")}
          className="mb-4 bg-transparent"
        >
          ← Back to Calculator Options
        </Button>
        <MoneyMap />
      </div>
    )
  }

  if (selectedCalculator === "interest") {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => setSelectedCalculator("select")}
          className="mb-4 bg-transparent"
        >
          ← Back to Calculator Options
        </Button>
        <InterestCalculator />
      </div>
    )
  }

  if (selectedCalculator === "savings") {
    return (
      <div>
        <Button
          variant="outline"
          onClick={() => setSelectedCalculator("select")}
          className="mb-4 bg-transparent"
        >
          ← Back to Calculator Options
        </Button>
        <SavingsCalculator />
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <Card className="border-2 border-[#0D3B66]/10">
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl text-[#0D3B66]">
            Choose Your Calculator
          </CardTitle>
          <p className="text-muted-foreground text-sm">
            Select the calculator that best suits your needs
          </p>
          <div className="mt-3">
            <a 
              href="/interest-calculator" 
              className="text-[#FFD93D] hover:underline text-sm font-medium inline-flex items-center gap-1"
            >
              💡 Looking for our full Interest Calculator? Click here
            </a>
          </div>
        </CardHeader>
        <CardContent className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Expenses Calculator */}
          <Card className="border-2 border-[#4DB6AC] hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#4DB6AC]/10 flex items-center justify-center mb-3 group-hover:bg-[#4DB6AC]/20 transition-colors">
                <Calculator className="h-8 w-8 text-[#4DB6AC]" />
              </div>
              <CardTitle className="text-xl text-[#0D3B66]">
                Expenses Calculator
              </CardTitle>
              <p className="text-xs text-muted-foreground mt-2">See where your money goes</p>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                Track your income, expenses, and debts with our in-depth analysis
              </p>
              <ul className="text-xs text-left space-y-2 text-muted-foreground">
                <li>✓ Detailed expense tracking</li>
                <li>✓ Complete financial overview</li>
                <li>✓ Personalized recommendations</li>
                <li>✓ Visual financial insights</li>
              </ul>
              <Button
                className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
                onClick={() => setSelectedCalculator("indepth")}
              >
                Start Expenses Calculator
              </Button>
            </CardContent>
          </Card>

          {/* Interest Rate Calculator */}
          <Card className="border-2 border-[#FFD93D] hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#FFD93D]/10 flex items-center justify-center mb-3 group-hover:bg-[#FFD93D]/20 transition-colors">
                <TrendingUp className="h-8 w-8 text-[#FFD93D]" />
              </div>
              <CardTitle className="text-xl text-[#0D3B66]">
                Interest Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                See how interest rates affect your debt repayments over time
              </p>
              <ul className="text-xs text-left space-y-2 text-muted-foreground">
                <li>✓ Calculate interest on loans</li>
                <li>✓ Compare different interest rates</li>
                <li>✓ See total repayment amounts</li>
                <li>✓ Understand cost of borrowing</li>
              </ul>
              <Button
                className="w-full bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66]"
                onClick={() => setSelectedCalculator("interest")}
              >
                Start Interest Calculator
              </Button>
            </CardContent>
          </Card>

          {/* Potential Savings Calculator */}
          <Card className="border-2 border-[#4DB6AC] hover:shadow-lg transition-shadow cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto w-16 h-16 rounded-full bg-[#4DB6AC]/10 flex items-center justify-center mb-3 group-hover:bg-[#4DB6AC]/20 transition-colors">
                <DollarSign className="h-8 w-8 text-[#4DB6AC]" />
              </div>
              <CardTitle className="text-xl text-[#0D3B66]">
                Potential Savings Calculator
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4">
              <p className="text-sm text-muted-foreground">
                How much could you save under debt review?
              </p>
              <ul className="text-xs text-left space-y-2 text-muted-foreground">
                <li>✓ Calculate potential savings</li>
                <li>✓ See debt reduction scenarios</li>
                <li>✓ Monthly and yearly estimates</li>
                <li>✓ Breakdown by debt type</li>
              </ul>
              <Button
                className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
                onClick={() => setSelectedCalculator("savings")}
              >
                Calculate Potential Savings
              </Button>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  )
}
