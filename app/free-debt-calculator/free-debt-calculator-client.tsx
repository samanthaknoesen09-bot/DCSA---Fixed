"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Calculator, TrendingUp, DollarSign, Shield, CheckCircle, ChevronRight } from "lucide-react"
import { colors, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/colors"
import { MoneyMap } from "@/components/money-map"
import { InterestCalculator } from "@/components/interest-calculator"
import { SavingsCalculator } from "@/components/savings-calculator"

type CalculatorType = "select" | "expenses" | "interest" | "savings"

// Hero Section
function HeroSection() {
  return (
    <section className="py-12 md:py-16 px-6" style={{ backgroundColor: colors.navy }}>
      <div className="container mx-auto max-w-3xl text-center">
        <div 
          className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6"
          style={{ backgroundColor: `${colors.gold}20` }}
        >
          <Calculator className="w-7 h-7" style={{ color: colors.gold }} />
        </div>
        
        <h1 
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4"
          style={{ color: colors.white }}
        >
          Free Debt Calculator
        </h1>
        
        <p 
          className="text-lg md:text-xl mb-6"
          style={{ color: colors.gold }}
        >
          Understand your finances in minutes
        </p>
        
        <p 
          className="text-base md:text-lg max-w-2xl mx-auto mb-6"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          No sign-up required. No judgment. Just clarity on where you stand 
          and what your options might be.
        </p>

        <div 
          className="flex flex-wrap items-center justify-center gap-4 text-sm"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" style={{ color: colors.gold }} /> 100% Free
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" style={{ color: colors.gold }} /> Private & Secure
          </span>
          <span className="flex items-center gap-1">
            <CheckCircle className="w-4 h-4" style={{ color: colors.gold }} /> Instant Results
          </span>
        </div>
      </div>
    </section>
  )
}

// Calculator Selection Cards
function CalculatorSelectionSection({ onSelect }: { onSelect: (type: CalculatorType) => void }) {
  const calculators = [
    {
      id: "expenses" as CalculatorType,
      icon: Calculator,
      title: "Monthly Budget Calculator",
      description: "Track where your money goes each month",
      features: [
        "Income vs expenses breakdown",
        "Debt-to-income ratio",
        "Visual spending insights",
        "Personalized recommendations"
      ],
      color: colors.gold
    },
    {
      id: "interest" as CalculatorType,
      icon: TrendingUp,
      title: "Interest Calculator",
      description: "See how interest affects your debt over time",
      features: [
        "Calculate loan interest",
        "Compare different rates",
        "Total repayment amounts",
        "Cost of borrowing"
      ],
      color: colors.navy
    },
    {
      id: "savings" as CalculatorType,
      icon: DollarSign,
      title: "Potential Savings Calculator",
      description: "See how much you could save with debt review",
      features: [
        "Estimate monthly savings",
        "Compare before & after",
        "Debt reduction scenarios",
        "Timeline projections"
      ],
      color: colors.gold
    }
  ]

  return (
    <section className="py-12 md:py-16 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-5xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: colors.navy }}
        >
          Choose Your Calculator
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {calculators.map((calc) => (
            <Card 
              key={calc.id}
              className="border-2 hover:shadow-lg transition-all cursor-pointer group"
              style={{ 
                borderColor: `${calc.color}40`,
                backgroundColor: colors.white
              }}
              onClick={() => onSelect(calc.id)}
            >
              <CardHeader className="text-center pb-2">
                <div 
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-3 transition-colors"
                  style={{ backgroundColor: `${calc.color}15` }}
                >
                  <calc.icon className="w-7 h-7" style={{ color: calc.color }} />
                </div>
                <CardTitle className="text-lg" style={{ color: colors.navy }}>
                  {calc.title}
                </CardTitle>
                <p className="text-sm" style={{ color: colors.mutedText }}>
                  {calc.description}
                </p>
              </CardHeader>
              <CardContent className="pt-2">
                <ul className="space-y-2 mb-4">
                  {calc.features.map((feature, index) => (
                    <li 
                      key={index}
                      className="text-sm flex items-center gap-2"
                      style={{ color: colors.charcoal }}
                    >
                      <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: colors.gold }} />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full font-semibold"
                  style={{ backgroundColor: calc.color, color: calc.color === colors.gold ? colors.navy : colors.white }}
                >
                  Start Calculator
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Disclaimer */}
        <Card 
          className="border-2"
          style={{ borderColor: `${colors.gold}50`, backgroundColor: `${colors.gold}10` }}
        >
          <CardContent className="p-4">
            <p className="text-sm" style={{ color: colors.charcoal }}>
              <strong>Note:</strong> These calculators provide estimates based on the information you enter. 
              Actual results depend on your specific situation and creditor negotiations. 
              For personalized advice, chat with Sam.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Calculator Display Section
function CalculatorDisplaySection({ 
  type, 
  onBack 
}: { 
  type: CalculatorType
  onBack: () => void 
}) {
  return (
    <section className="py-8 md:py-12 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-4xl">
        <Button
          variant="outline"
          onClick={onBack}
          className="mb-6"
          style={{ borderColor: colors.navy, color: colors.navy }}
        >
          Back to Calculator Options
        </Button>

        {type === "expenses" && <MoneyMap />}
        {type === "interest" && <InterestCalculator />}
        {type === "savings" && <SavingsCalculator />}

        {/* Post-Calculator CTA */}
        <Card 
          className="mt-8 border-0 shadow-lg"
          style={{ backgroundColor: colors.navy }}
        >
          <CardContent className="p-6 text-center">
            <h3 
              className="text-xl font-bold mb-2"
              style={{ color: colors.white }}
            >
              Want help understanding your results?
            </h3>
            <p 
              className="text-base mb-4"
              style={{ color: "rgba(255,255,255,0.8)" }}
            >
              No pressure. Just a conversation about what these numbers mean for you.
            </p>
            <Button
              size="lg"
              className="font-bold rounded-xl"
              style={{ backgroundColor: colors.gold, color: colors.navy }}
              asChild
            >
              <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Sam – {WHATSAPP_NUMBER}
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

// Bottom CTA Section
function BottomCTASection() {
  return (
    <section className="py-12 md:py-16 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: colors.navy }}
        >
          Prefer to talk to a person?
        </h2>
        
        <p 
          className="text-lg mb-6"
          style={{ color: colors.mutedText }}
        >
          Sometimes it&apos;s easier to chat with someone who can answer your questions directly. 
          No obligation, no pressure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Sam
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl"
            style={{ borderColor: colors.navy, color: colors.navy }}
            asChild
          >
            <Link href="/debt-help">
              Learn About Debt Help
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>

        <div 
          className="flex items-center justify-center gap-2 text-sm"
          style={{ color: colors.mutedText }}
        >
          <Shield className="w-4 h-4" style={{ color: colors.navy }} />
          <span>NCR Registered Debt Counsellor • NCRDC3995</span>
        </div>
      </div>
    </section>
  )
}

export function FreeDebtCalculatorClient() {
  const [selectedCalculator, setSelectedCalculator] = useState<CalculatorType>("select")

  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <HeroSection />
      
      {selectedCalculator === "select" ? (
        <>
          <CalculatorSelectionSection onSelect={setSelectedCalculator} />
          <BottomCTASection />
        </>
      ) : (
        <CalculatorDisplaySection 
          type={selectedCalculator} 
          onBack={() => setSelectedCalculator("select")} 
        />
      )}
    </main>
  )
}
