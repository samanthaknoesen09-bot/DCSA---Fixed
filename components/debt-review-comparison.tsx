"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, X, Share2, Bookmark, Info } from "lucide-react"

export function DebtReviewComparison() {
  const features = [
    {
      feature: "Legal Protection from Creditors",
      debtReview: true,
      consolidation: false,
      adminOrder: true,
      bankruptcy: true,
    },
    {
      feature: "Reduced Monthly Payments",
      debtReview: true,
      consolidation: false,
      adminOrder: true,
      bankruptcy: true,
    },
    {
      feature: "Interest Rate Negotiation (Not Guaranteed)",
      debtReview: "May be negotiated",
      consolidation: "No reduction",
      adminOrder: "No reduction",
      bankruptcy: "No reduction",
    },
    {
      feature: "Keep Your Assets",
      debtReview: true,
      consolidation: true,
      adminOrder: true,
      bankruptcy: false,
    },
    {
      feature: "Stop Legal Action",
      debtReview: true,
      consolidation: false,
      adminOrder: true,
      bankruptcy: true,
    },
    {
      feature: "Credit Record Impact",
      debtReview: "Temporary notation (removed after clearance)",
      consolidation: "New credit application",
      adminOrder: "Public court record",
      bankruptcy: "Severe (10 years)",
    },
    {
      feature: "Qualification Requirements",
      debtReview: "Over-indebted with income",
      consolidation: "Good credit score needed",
      adminOrder: "Court application",
      bankruptcy: "Insolvent",
    },
    {
      feature: "Cost",
      debtReview: "Regulated affordable fees",
      consolidation: "High interest + fees",
      adminOrder: "Court fees",
      bankruptcy: "Legal fees + trustee costs",
    },
  ]

  const CheckIcon = () => <Check className="h-5 w-5 text-green-600 mx-auto" />
  const XIcon = () => <X className="h-5 w-5 text-red-500 mx-auto" />

  return (
    <div className="space-y-6">
      <div className="text-center">
        <span className="inline-flex items-center gap-1 text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          <Info className="h-4 w-4" /> Understand Your Options
        </span>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Debt Review vs Other Options</CardTitle>
          <p className="text-sm text-muted-foreground">
            Understanding your debt relief options helps you make an informed decision
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Information Callout */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <Info className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-blue-800">Not Sure Which Option is Right for You?</p>
                <p className="text-sm text-blue-700 mt-1">
                  Compare these debt relief options to understand the differences. Each person&apos;s situation is unique —
                  speak to a registered debt counsellor (NCRDC 3110) for a personalised assessment.
                </p>
              </div>
            </div>
          </div>

          {/* Get Advice Link */}
          <div className="text-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center text-sm font-medium text-blue-600 hover:text-blue-800 underline"
            >
              Get a Free Assessment
            </a>
          </div>

          {/* Comparison Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-muted">
                  <th className="text-left p-3 font-medium">Feature</th>
                  <th className="text-center p-3 font-medium text-green-700">Debt Review (NCR Regulated)</th>
                  <th className="text-center p-3 font-medium">Debt Consolidation</th>
                  <th className="text-center p-3 font-medium">Administration Order</th>
                  <th className="text-center p-3 font-medium">Bankruptcy / Sequestration</th>
                </tr>
              </thead>
              <tbody>
                {features.map((row, index) => (
                  <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-muted/30"}>
                    <td className="p-3 font-medium">{row.feature}</td>
                    <td className="p-3 text-center">
                      {typeof row.debtReview === "boolean" ? (
                        row.debtReview ? <CheckIcon /> : <XIcon />
                      ) : (
                        <span className="text-xs text-green-700 font-medium">{row.debtReview}</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {typeof row.consolidation === "boolean" ? (
                        row.consolidation ? <CheckIcon /> : <XIcon />
                      ) : (
                        <span className="text-xs">{row.consolidation}</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {typeof row.adminOrder === "boolean" ? (
                        row.adminOrder ? <CheckIcon /> : <XIcon />
                      ) : (
                        <span className="text-xs">{row.adminOrder}</span>
                      )}
                    </td>
                    <td className="p-3 text-center">
                      {typeof row.bankruptcy === "boolean" ? (
                        row.bankruptcy ? <CheckIcon /> : <XIcon />
                      ) : (
                        <span className="text-xs">{row.bankruptcy}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Share / Save */}
          <div className="flex gap-2 justify-end">
            <Button
              variant="outline"
              size="sm"
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "Debt Review vs Other Options - DCSA",
                    text: "Compare debt relief solutions and find the right option for you",
                    url: window.location.href + "#debt-review-comparison",
                  })
                }
              }}
            >
              <Share2 className="h-4 w-4 mr-1" /> Share This Comparison
            </Button>
            <Button variant="outline" size="sm" onClick={() => window.print()}>
              <Bookmark className="h-4 w-4 mr-1" /> Save as PDF
            </Button>
          </div>

          {/* Key Facts about Debt Review - Compliant */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <p className="text-sm font-semibold text-green-800 mb-2">Key Facts About Debt Review</p>
            <ul className="space-y-1 text-sm text-green-700">
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>NCR regulated process with legal protection under the National Credit Act</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Interest rate reductions may be negotiated — outcomes depend on individual circumstances and are not guaranteed</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>One structured monthly payment covering all included debts</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckIcon />
                <span>Assets are protected while under debt review, provided payments are maintained</span>
              </li>
            </ul>
            <p className="text-xs text-green-600 mt-3">
              * Debt review requires some ability to pay each month. Final repayment terms depend on a court or NCT order.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
