"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { TrendingDown, Sparkles, Home, Car, CreditCard, CheckCircle2, Loader2, Info } from "lucide-react"
import { ShareResults } from "@/components/share-results"
import { Checkbox } from "@/components/ui/checkbox"
import { colors } from "@/lib/colors"

export function SavingsCalculator() {
  const [homeLoan, setHomeLoan] = useState<string>("")
  const [vehicleLoan, setVehicleLoan] = useState<string>("")
  const [unsecuredDebt, setUnsecuredDebt] = useState<string>("")
  const [showAssessment, setShowAssessment] = useState(false)
  const [isCalculating, setIsCalculating] = useState(false)

  const currentTotal = (Number(homeLoan) || 0) + (Number(vehicleLoan) || 0) + (Number(unsecuredDebt) || 0)
  
  // Compliance-based estimation logic
  // Typically debt review reduces monthly payments by 30-50% through term extension and negotiated rates
  const estimatedMonthlyOriginal = currentTotal * 0.035 // rough estimate of minimum payments (3.5% of balance)
  const estimatedMonthlyNew = estimatedMonthlyOriginal * 0.6 // estimated 40% reduction in monthly installment
  const monthlySavings = estimatedMonthlyOriginal - estimatedMonthlyNew

  const handleCalculate = () => {
    setIsCalculating(true)
    setTimeout(() => {
      setIsCalculating(false)
      setShowAssessment(true)
    }, 1500)
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto">
      <Card className="border-2 shadow-xl overflow-hidden" style={{ borderColor: colors.sandLight, borderRadius: "24px" }}>
        <CardHeader className="bg-white border-b pb-8 pt-10 px-8" style={{ borderColor: colors.sandLight }}>
          <CardTitle className="text-3xl font-bold flex items-center gap-3" style={{ color: colors.charcoal }}>
            <div className="p-2 rounded-lg" style={{ backgroundColor: colors.softPeach + "40" }}>
              <TrendingDown className="h-7 w-7" style={{ color: colors.maroon }} />
            </div>
            Debt Cut Preview
          </CardTitle>
          <p className="text-lg mt-4 leading-relaxed" style={{ color: colors.warmGrey }}>
            See an estimated restructuring outcome based on affordability and possible negotiated terms.
          </p>
          <div className="mt-4 flex items-start gap-2 p-3 rounded-lg border border-blue-100 bg-blue-50/30">
            <Info className="h-4 w-4 mt-0.5 text-blue-500 flex-shrink-0" />
            <p className="text-xs text-blue-700 italic">
              Final outcomes depend on creditor responses and legal confirmation.
            </p>
          </div>
        </CardHeader>
        
        <CardContent className="p-8 space-y-8 bg-white/50 backdrop-blur-sm">
          <div className="grid gap-6">
            <div className="space-y-3">
              <Label className="text-sm font-bold uppercase tracking-wider opacity-70" style={{ color: colors.charcoal }}>
                Total Home Loan Balance
              </Label>
              <div className="relative group">
                <Home className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40 group-focus-within:opacity-100 transition-opacity" style={{ color: colors.maroon }} />
                <Input
                  type="number"
                  placeholder="e.g. 850000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderColor: colors.sandLight }}
                  value={homeLoan}
                  onChange={(e) => setHomeLoan(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-bold uppercase tracking-wider opacity-70" style={{ color: colors.charcoal }}>
                Total Vehicle Loan Balance
              </Label>
              <div className="relative group">
                <Car className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40 group-focus-within:opacity-100 transition-opacity" style={{ color: colors.maroon }} />
                <Input
                  type="number"
                  placeholder="e.g. 250000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderColor: colors.sandLight }}
                  value={vehicleLoan}
                  onChange={(e) => setVehicleLoan(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label className="text-sm font-bold uppercase tracking-wider opacity-70" style={{ color: colors.charcoal }}>
                Other Unsecured Debt (Cards, Loans)
              </Label>
              <div className="relative group">
                <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 opacity-40 group-focus-within:opacity-100 transition-opacity" style={{ color: colors.maroon }} />
                <Input
                  type="number"
                  placeholder="e.g. 150000"
                  className="pl-12 py-6 text-lg border-2 focus:ring-0 transition-all"
                  style={{ borderRadius: "12px", borderColor: colors.sandLight }}
                  value={unsecuredDebt}
                  onChange={(e) => setUnsecuredDebt(e.target.value)}
                />
              </div>
            </div>
          </div>

          <Button
            className="w-full py-8 text-xl font-bold shadow-lg transition-all active:scale-95 flex items-center justify-center gap-2"
            style={{ backgroundColor: colors.maroon, borderRadius: "16px", color: colors.white }}
            onClick={handleCalculate}
            disabled={!currentTotal || isCalculating}
          >
            {isCalculating ? (
              <>
                <Loader2 className="h-6 w-6 animate-spin" />
                Calculating...
              </>
            ) : (
              <>
                Show me my options
                <TrendingDown className="h-6 w-6" />
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {showAssessment && (
        <div className="animate-in fade-in slide-in-from-bottom-10 duration-700">
          <Card className="border-0 shadow-2xl overflow-hidden" style={{ backgroundColor: colors.white, borderRadius: "24px" }}>
            <div className="p-10 text-center space-y-8 bg-gradient-to-b from-white to-gray-50/50">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: colors.mintCalm + "20", color: colors.mintCalm }}>
                <Sparkles className="h-4 w-4" />
                ESTIMATED RESTRUCTURING OUTCOME
              </div>
              
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="p-8 rounded-2xl bg-white border-2 shadow-sm" style={{ borderColor: colors.sandLight }}>
                  <p className="text-sm font-bold uppercase tracking-widest opacity-60 mb-2">Estimated Current Monthly</p>
                  <p className="text-3xl font-bold line-through opacity-40" style={{ color: colors.charcoal }}>
                    R{Math.round(estimatedMonthlyOriginal).toLocaleString()}
                  </p>
                </div>
                
                <div className="p-8 rounded-2xl border-2 shadow-md relative overflow-hidden" style={{ borderColor: colors.mintCalm, backgroundColor: colors.mintCalm + "05" }}>
                  <div className="absolute top-0 right-0 p-2">
                    <CheckCircle2 className="h-6 w-6" style={{ color: colors.mintCalm }} />
                  </div>
                  <p className="text-sm font-bold uppercase tracking-widest mb-2" style={{ color: colors.mintCalm }}>Estimated Restructured</p>
                  <p className="text-5xl font-black" style={{ color: colors.charcoal }}>
                    R{Math.round(estimatedMonthlyNew).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl border-2" style={{ borderColor: colors.sandLight }}>
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-left">
                    <p className="text-xl font-bold" style={{ color: colors.charcoal }}>Potential Monthly Breathing Room</p>
                    <p className="text-sm opacity-70">Based on possible negotiated terms</p>
                  </div>
                  <div className="text-4xl font-black px-6 py-3 rounded-xl shadow-inner" style={{ backgroundColor: colors.softPeach + "30", color: colors.maroon }}>
                    +R{Math.round(monthlySavings).toLocaleString()}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <p className="text-lg opacity-80 max-w-xl mx-auto" style={{ color: colors.charcoal }}>
                  This is a real-world estimate of how we could combine your debts into one affordable monthly payment. No judgement. Just a clear path forward.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button className="px-10 py-8 text-xl font-bold shadow-lg flex items-center gap-2" style={{ backgroundColor: colors.maroon, borderRadius: "16px" }} asChild>
                    <a href="https://wa.me/27661937596?text=Hi%20DCSA!%20I%27d%20like%20to%20chat%20about%20my%20savings%20assessment.">
                      Chat to Sam
                    </a>
                  </Button>
                  <ShareResults 
                    totalDebt={currentTotal}
                    monthlySavings={monthlySavings}
                  />
                </div>
                <p className="text-xs text-gray-400 italic">
                  *This tool provides an estimate only. Final repayment terms depend on creditor negotiations and legal confirmation under the National Credit Act.
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
