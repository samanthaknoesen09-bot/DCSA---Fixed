"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingDown, Sparkles, Home, Car, CreditCard, CheckCircle2, Loader2 } from "lucide-react"
import { ShareResults } from "@/components/share-results"
import { Checkbox } from "@/components/ui/checkbox"

export function SavingsCalculator() {
  const [homeLoan, setHomeLoan] = useState<string>("")
  const [vehicleLoan, setVehicleLoan] = useState<string>("")
  const [unsecuredDebt, setUnsecuredDebt] = useState<string>("")
  const [showAssessment, setShowAssessment] = useState(false)
  const [assessmentData, setAssessmentData] = useState({
    name: "",
    surname: "",
    contactNumber: "",
    idNumber: "",
    agreeToCredit: false,
  })
  const [assessmentSubmitted, setAssessmentSubmitted] = useState(false)
  const [isSubmittingAssessment, setIsSubmittingAssessment] = useState(false)
  const [result, setResult] = useState<{
    currentTotal: number
    newTotal: number
    monthlySavings: number
    yearlySavings: number
    breakdown: {
      home: { current: number; new: number; savings: number }
      vehicle: { current: number; new: number; savings: number }
      unsecured: { current: number; new: number; savings: number }
    }
  } | null>(null)

  const calculateSavings = () => {
    const home = parseFloat(homeLoan) || 0
    const vehicle = parseFloat(vehicleLoan) || 0
    const unsecured = parseFloat(unsecuredDebt) || 0

    if (home === 0 && vehicle === 0 && unsecured === 0) return

    // Apply realistic savings rates per debt type
    const homeReduction = 0.15 // 15% on home loans
    const vehicleReduction = 0.15 // 15% on vehicle loans
    const unsecuredReduction = 0.45 // 45% on unsecured debt

    const homeNew = home * (1 - homeReduction)
    const vehicleNew = vehicle * (1 - vehicleReduction)
    const unsecuredNew = unsecured * (1 - unsecuredReduction)

    const currentTotal = home + vehicle + unsecured
    const newTotal = homeNew + vehicleNew + unsecuredNew
    const monthlySavings = currentTotal - newTotal
    const yearlySavings = monthlySavings * 12

    setResult({
      currentTotal,
      newTotal,
      monthlySavings,
      yearlySavings,
      breakdown: {
        home: { current: home, new: homeNew, savings: home - homeNew },
        vehicle: { current: vehicle, new: vehicleNew, savings: vehicle - vehicleNew },
        unsecured: { current: unsecured, new: unsecuredNew, savings: unsecured - unsecuredNew },
      },
    })
    setShowAssessment(true)
  }

  const handleAssessmentChange = (field: string, value: string | boolean) => {
    setAssessmentData(prev => ({ ...prev, [field]: value }))
  }

  const handleAssessmentSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmittingAssessment(true)

    try {
      const response = await fetch("/api/free-assessment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...assessmentData,
          potentialSavings: result?.monthlySavings || 0,
          currentDebt: result?.currentTotal || 0,
        }),
      })

      if (response.ok) {
        setAssessmentSubmitted(true)
      }
    } catch (error) {
      console.error("[v0] Assessment submission error:", error)
      alert("There was an error submitting your details. Please try again.")
    } finally {
      setIsSubmittingAssessment(false)
    }
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-ZA", {
      style: "currency",
      currency: "ZAR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  if (assessmentSubmitted) {
    return (
      <Card className="border-2 border-[#4DB6AC]">
        <CardContent className="py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-[#4DB6AC] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0D3B66] mb-2">Thank You!</h3>
          <p className="text-muted-foreground mb-4">
            We have received your details and will contact you on WhatsApp shortly to discuss your free no-obligation assessment.
          </p>
          <p className="text-sm text-[#0D3B66]/70">
            Our team will reach out within the next few hours during business hours.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="savings-calculator">
      <Card className="border-2 border-[#FFD93D]/40">
        <CardHeader>
          <CardTitle className="text-2xl text-[#0D3B66] flex items-center gap-2">
            <Sparkles className="h-6 w-6 text-[#FFD93D]" />
            How much could you possibly save under debt review?
          </CardTitle>
          <p className="text-sm text-muted-foreground mt-2">
            This is just a rough estimation of what debt counselling could possibly be saving you
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="home-loan" className="flex items-center gap-2">
                <Home className="h-4 w-4 text-[#4DB6AC]" />
                Home Loan Payment (15% savings)
              </Label>
              <Input
                id="home-loan"
                type="number"
                placeholder="e.g., 8000"
                value={homeLoan}
                onChange={(e) => setHomeLoan(e.target.value)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="vehicle-loan" className="flex items-center gap-2">
                <Car className="h-4 w-4 text-[#4DB6AC]" />
                Vehicle Loan Payment (15% savings)
              </Label>
              <Input
                id="vehicle-loan"
                type="number"
                placeholder="e.g., 4000"
                value={vehicleLoan}
                onChange={(e) => setVehicleLoan(e.target.value)}
                className="text-lg"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="unsecured-debt" className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-[#FF6B6B]" />
                Unsecured Debt (Credit Cards, Personal Loans - up to 45% savings)
              </Label>
              <Input
                id="unsecured-debt"
                type="number"
                placeholder="e.g., 5000"
                value={unsecuredDebt}
                onChange={(e) => setUnsecuredDebt(e.target.value)}
                className="text-lg"
              />
            </div>
          </div>

          <Button
            onClick={calculateSavings}
            className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
            size="lg"
          >
            Calculate My Potential Savings
          </Button>

          {result && (
            <div className="space-y-4 pt-4 border-t">
              <div className="bg-[#4DB6AC]/10 rounded-lg p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Your Current Total Payment</span>
                  <span className="text-lg font-bold text-[#0D3B66] line-through">{formatCurrency(result.currentTotal)}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-[#0D3B66]">Estimated New Total Payment</span>
                  <span className="text-2xl font-bold text-[#4DB6AC]">{formatCurrency(result.newTotal)}</span>
                </div>
              </div>

              {/* Breakdown by Debt Type */}
              <div className="space-y-2 bg-white rounded-lg p-4 border">
                <h4 className="font-semibold text-sm text-[#0D3B66] mb-3">Savings Breakdown:</h4>
                
                {result.breakdown.home.current > 0 && (
                  <div className="flex justify-between items-center text-sm py-1 border-b">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Home className="h-3 w-3" />
                      Home Loan (15%)
                    </span>
                    <span className="font-medium text-[#4DB6AC]">{formatCurrency(result.breakdown.home.savings)}/mo</span>
                  </div>
                )}
                
                {result.breakdown.vehicle.current > 0 && (
                  <div className="flex justify-between items-center text-sm py-1 border-b">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <Car className="h-3 w-3" />
                      Vehicle Loan (15%)
                    </span>
                    <span className="font-medium text-[#4DB6AC]">{formatCurrency(result.breakdown.vehicle.savings)}/mo</span>
                  </div>
                )}
                
                {result.breakdown.unsecured.current > 0 && (
                  <div className="flex justify-between items-center text-sm py-1">
                    <span className="flex items-center gap-2 text-muted-foreground">
                      <CreditCard className="h-3 w-3" />
                      Unsecured Debt (45%)
                    </span>
                    <span className="font-medium text-[#4DB6AC]">{formatCurrency(result.breakdown.unsecured.savings)}/mo</span>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#FFD93D]/10 border-[#FFD93D]/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#0D3B66]">{formatCurrency(result.monthlySavings)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Total Monthly Savings</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-[#4DB6AC]/10 border-[#4DB6AC]/30">
                  <CardContent className="p-4 text-center">
                    <div className="text-2xl font-bold text-[#0D3B66]">{formatCurrency(result.yearlySavings)}</div>
                    <div className="text-xs text-muted-foreground mt-1">Total Yearly Savings</div>
                  </CardContent>
                </Card>
              </div>

              <div className="flex items-center gap-2 bg-white rounded-lg p-4 border-2 border-[#4DB6AC]">
                <TrendingDown className="h-6 w-6 text-[#4DB6AC]" />
                <div>
                  <div className="text-lg font-bold text-[#4DB6AC]">
                    {((result.monthlySavings / result.currentTotal) * 100).toFixed(0)}% Overall Reduction
                  </div>
                  <div className="text-xs text-muted-foreground">Based on NCR debt review savings rates</div>
                </div>
              </div>

              <p className="text-xs text-center text-muted-foreground italic">
                *Savings calculated using standard debt review rates: 15% on home loans, 15% on vehicle loans, up to 45% on unsecured debt. 
                Actual results depend on creditor negotiations and your specific situation.
              </p>

              {/* Benefits of Debt Review Section */}
              {!showAssessment && (
                <div className="space-y-4 pt-6 border-t">
                  <h4 className="font-semibold text-[#0D3B66]">Benefits of Debt Review:</h4>
                  <div className="space-y-2">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                      <p className="text-sm text-[#0D3B66]/80"><strong>Reduced Payments:</strong> Lower your monthly debt payments and improve cash flow</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                      <p className="text-sm text-[#0D3B66]/80"><strong>Stop Collection Calls:</strong> Creditors must stop contacting you once you're under review</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                      <p className="text-sm text-[#0D3B66]/80"><strong>Protect Your Credit:</strong> Work toward rebuilding your credit score while paying less</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                      <p className="text-sm text-[#0D3B66]/80"><strong>Legal Protection:</strong> NCR regulated service protects your rights</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                      <p className="text-sm text-[#0D3B66]/80"><strong>Peace of Mind:</strong> Get expert guidance through the entire process</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Free Assessment Form */}
          {showAssessment && !assessmentSubmitted && (
            <div className="space-y-4 pt-6 border-t">
              <h4 className="font-semibold text-[#0D3B66] mb-2">Would you like a free no-obligation assessment?</h4>
              <p className="text-sm text-[#0D3B66]/70 mb-4">
                Our debt counsellors can review your specific situation and provide personalized guidance.
              </p>

              <form onSubmit={handleAssessmentSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assess-name">Name *</Label>
                    <Input
                      id="assess-name"
                      value={assessmentData.name}
                      onChange={(e) => handleAssessmentChange("name", e.target.value)}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assess-surname">Surname *</Label>
                    <Input
                      id="assess-surname"
                      value={assessmentData.surname}
                      onChange={(e) => handleAssessmentChange("surname", e.target.value)}
                      placeholder="Your surname"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="assess-contact">Contact Number *</Label>
                    <Input
                      id="assess-contact"
                      type="tel"
                      value={assessmentData.contactNumber}
                      onChange={(e) => handleAssessmentChange("contactNumber", e.target.value)}
                      placeholder="082 123 4567"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="assess-id">ID Number *</Label>
                    <Input
                      id="assess-id"
                      value={assessmentData.idNumber}
                      onChange={(e) => handleAssessmentChange("idNumber", e.target.value)}
                      placeholder="Your SA ID number"
                      required
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 bg-[#FFD93D]/10 border border-[#FFD93D]/20 rounded-lg">
                  <Checkbox
                    id="agree-credit-check"
                    checked={assessmentData.agreeToCredit}
                    onCheckedChange={(checked) => handleAssessmentChange("agreeToCredit", checked as boolean)}
                    required
                  />
                  <Label htmlFor="agree-credit-check" className="text-sm leading-relaxed cursor-pointer font-normal">
                    I agree to a free credit check to provide me with an accurate assessment *
                  </Label>
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    className="flex-1 bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
                    disabled={!assessmentData.name || !assessmentData.surname || !assessmentData.contactNumber || !assessmentData.idNumber || !assessmentData.agreeToCredit || isSubmittingAssessment}
                  >
                    {isSubmittingAssessment ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Yes, Get My Free Assessment"
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowAssessment(false)}
                    className="flex-1"
                  >
                    Not Right Now
                  </Button>
                </div>
              </form>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Share Calculator */}
      {result && !showAssessment && (
        <ShareResults
          title="Free Potential Savings Calculator"
          description="See how much you could save monthly and yearly through debt counselling with DCSA's free calculator"
          calculatorType="savings"
        />
      )}
    </section>
  )
}
