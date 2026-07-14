"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingDown, Sparkles, Home, Car, CreditCard, CheckCircle2, Loader2, Info } from "lucide-react"
import { ShareResults } from "@/components/share-results"
import { colors } from "@/lib/colors"

export function SavingsCalculator() {
  const [homeLoan, setHomeLoan] = useState("")
  const [vehicleLoan, setVehicleLoan] = useState("")
  const [unsecuredDebt, setUnsecuredDebt] = useState("")
  const [showAssessment, setShowAssessment] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const currentTotal = (Number(homeLoan) || 0) + (Number(vehicleLoan) || 0) + (Number(unsecuredDebt) || 0)

  // Compliance-based estimation logic
  // Typically debt review reduces monthly payments by 30-50% through term extension and negotiated rates
  const estimatedMonthlyOriginal = currentTotal * 0.035 // rough estimate of minimum payments (3.5% of balance)
  const estimatedMonthlyNew = estimatedMonthlyOriginal * 0.6 // estimated 40% reduction in monthly installment
  const monthlySavings = estimatedMonthlyOriginal - estimatedMonthlyNew

  const handleCalculate = () => {
    if (currentTotal <= 0) return
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      setShowAssessment(true)
    }, 1500)
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <Card className="border-2 shadow-xl overflow-hidden" style={{ borderColor: colors.sandLight, borderRadius: "24px" }}>
        <CardHeader className="bg-white border-b pb-8 pt-10 px-8" style={{ borderBottomColor: colors.sandLight }}>
          <CardTitle className="text-3xl font-bold flex items-center gap-3" style={{ color: colors.charcoal }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: colors.softPeach + "40" }}>
              <TrendingDown className="h-7 w-7" style={{ color: colors.maroon }} />
            </div>
            Debt Reset Preview
          </CardTitle>
          <p className="text-lg mt-4 leading-relaxed" style={{ color: colors.warmGrey }}>
            See an estimated restructuring outcome based on affordability and potential negotiated terms.
          </p>
          <div className="mt-4 flex items-start gap-2 p-3 rounded-lg border border-blue-100 bg-blue-50/30">
            <Info className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
            <p className="text-xs text-blue-700 italic">
              Final outcomes depend on creditor negotiations and legal confirmation. This is an estimate only.
            </p>
          </div>
        </CardHeader>

        <CardContent className="p-8 space-y-8 bg-white/50 backdrop-blur-sm">
          <div className="grid gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.charcoal }}>
                Total Home Loan Balance
              </Label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Home className="h-5 w-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                </div>
                <Input
                  type="number"
                  placeholder="e.g. 850000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderBottomColor: colors.sandLight }}
                  value={homeLoan}
                  onChange={(e) => setHomeLoan(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.charcoal }}>
                Total Vehicle Loan Balance
              </Label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <Car className="h-5 w-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                </div>
                <Input
                  type="number"
                  placeholder="e.g. 250000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderBottomColor: colors.sandLight }}
                  value={vehicleLoan}
                  onChange={(e) => setVehicleLoan(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-semibold uppercase tracking-wider" style={{ color: colors.charcoal }}>
                Other Unsecured Debt (Cards, Loans)
              </Label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <CreditCard className="h-5 w-5 text-muted-foreground group-focus-within:text-blue-500 transition-colors" />
                </div>
                <Input
                  type="number"
                  placeholder="e.g. 150000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderBottomColor: colors.sandLight }}
                  value={unsecuredDebt}
                  onChange={(e) => setUnsecuredDebt(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button
            className="w-full py-8 text-xl font-bold shadow-lg hover:shadow-xl transition-all active:scale-[0.98]"
            style={{
              backgroundColor: currentTotal > 0 ? colors.maroon : colors.warmGrey,
              color: colors.white,
              borderRadius: "16px",
            }}
            onClick={handleCalculate}
            disabled={isCalculating || currentTotal === 0}
          >
            {isCalculating ? (
              <>
                <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-6 w-6" />
                Show My Debt Reset Preview
              </>
            )}
          </Button>

          {showAssessment && (
            <div className="mt-12 p-8 rounded-3xl border-2 animate-in fade-in slide-in-from-bottom-4 duration-700"
                 style={{ backgroundColor: colors.softPeach + "20", borderColor: colors.sandLight }}>
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Estimated Restructuring Outcome
                  </span>
                  <div className="h-1 w-12 bg-maroon mx-auto rounded-full mt-2" style={{ backgroundColor: colors.maroon }} />
                </div>

                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">Current Estimated Monthly</p>
                    <p className="text-2xl font-bold text-charcoal strike-through opacity-50">
                      R{Math.round(estimatedMonthlyOriginal).toLocaleString()}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-muted-foreground">New Estimated Monthly</p>
                    <p className="text-3xl font-black" style={{ color: colors.maroon }}>
                      R{Math.round(estimatedMonthlyNew).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border shadow-sm space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">Potential Monthly Breathing Room</p>
                  <p className="text-4xl font-black text-green-600 flex items-center justify-center gap-2">
                    +R{Math.round(monthlySavings).toLocaleString()}
                    <CheckCircle2 className="h-8 w-8" />
                  </p>
                  <p className="text-xs text-muted-foreground italic">Based on typical restructuring outcomes</p>
                </div>

                <div className="space-y-6">
                  <p className="text-center leading-relaxed" style={{ color: colors.charcoal }}>
                    This estimate shows how we could combine your debts into one affordable monthly payment. 
                    No judgment. Just a clear path forward with a registered debt counsellor (NCRDC3995).
                  </p>

                  <Button className="w-full py-6 text-lg font-bold"
                          style={{ backgroundColor: colors.charcoal, color: colors.white, borderRadius: "12px" }}
                          asChild>
                    <a href={`https://wa.me/27719006298?text=Hi DC Sam! I've used the preview tool. My estimated total debt is R${currentTotal}. I'd like to chat about my options.`}>
                      Chat with Sam About This Plan
                    </a>
                  </Button>

                  <p className="text-[10px] text-center uppercase tracking-widest text-muted-foreground leading-relaxed">
                    *This is an estimate only. Final terms depend on creditor negotiations and legal confirmation 
                    under the National Credit Act. Outcomes are not guaranteed.
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
