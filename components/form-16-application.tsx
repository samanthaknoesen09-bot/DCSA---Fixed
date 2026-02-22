"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Plus, Trash2, CheckCircle2, AlertCircle, FileText, User, Briefcase, DollarSign, CreditCard, Download, Upload } from "lucide-react"

interface Dependent {
  name: string
  age: string
  relation: string
  idNumber: string
}

interface IncomeItem {
  category: string
  amount: string
}

interface DebtItem {
  type: string
  creditor: string
  accountNo: string
  outstanding: string
  monthly: string
}

interface CommitmentItem {
  description: string
  amount: string
}

interface SpouseInfo {
  name: string
  surname: string
  contactNumber: string
  hasConsent: boolean
}

export function Form16Application() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [showDownloadButton, setShowDownloadButton] = useState(false)

  // Part 1 - Personal Information
  const [personalInfo, setPersonalInfo] = useState({
    fullName: "",
    idNumber: "",
    passportNumber: "",
    maritalStatus: "",
    physicalAddress: "",
    postalAddress: "",
    workPhone: "",
    homePhone: "",
    cellPhone: "",
    email: "",
    employerName: "",
    employerAddress: "",
  })

  // Spouse Information (for community of property marriages)
  const [spouseInfo, setSpouseInfo] = useState<SpouseInfo>({
    name: "",
    surname: "",
    contactNumber: "",
    hasConsent: false,
  })

  const [dependents, setDependents] = useState<Dependent[]>([])

  // Part 2 - Income & Deductions
  const [incomeItems, setIncomeItems] = useState<IncomeItem[]>([{ category: "Salary", amount: "" }])
  const [deductionItems, setDeductionItems] = useState<IncomeItem[]>([{ category: "Tax", amount: "" }])

  // Part 3 - Monthly Commitments
  const [commitments, setCommitments] = useState<CommitmentItem[]>([])

  // Part 4 - Debt Obligations
  const [debts, setDebts] = useState<DebtItem[]>([])

  // Part 6 - Declarations
  const [declarations, setDeclarations] = useState({
    declaration1: false,
    declaration2: false,
    declaration3: false,
    declaration4: false,
    declaration5: false,
  })

  const addDependent = () => {
    setDependents([...dependents, { name: "", age: "", relation: "", idNumber: "" }])
  }

  const removeDependent = (index: number) => {
    setDependents(dependents.filter((_, i) => i !== index))
  }

  const updateDependent = (index: number, field: keyof Dependent, value: string) => {
    const updated = [...dependents]
    updated[index][field] = value
    setDependents(updated)
  }

  const addIncome = () => {
    setIncomeItems([...incomeItems, { category: "", amount: "" }])
  }

  const removeIncome = (index: number) => {
    setIncomeItems(incomeItems.filter((_, i) => i !== index))
  }

  const updateIncome = (index: number, field: keyof IncomeItem, value: string) => {
    const updated = [...incomeItems]
    updated[index][field] = value
    setIncomeItems(updated)
  }

  const addDeduction = () => {
    setDeductionItems([...deductionItems, { category: "", amount: "" }])
  }

  const removeDeduction = (index: number) => {
    setDeductionItems(deductionItems.filter((_, i) => i !== index))
  }

  const updateDeduction = (index: number, field: keyof IncomeItem, value: string) => {
    const updated = [...deductionItems]
    updated[index][field] = value
    setDeductionItems(updated)
  }

  const addCommitment = () => {
    setCommitments([...commitments, { description: "", amount: "" }])
  }

  const removeCommitment = (index: number) => {
    setCommitments(commitments.filter((_, i) => i !== index))
  }

  const updateCommitment = (index: number, field: keyof CommitmentItem, value: string) => {
    const updated = [...commitments]
    updated[index][field] = value
    setCommitments(updated)
  }

  const addDebt = () => {
    setDebts([...debts, { type: "", creditor: "", accountNo: "", outstanding: "", monthly: "" }])
  }

  const removeDebt = (index: number) => {
    setDebts(debts.filter((_, i) => i !== index))
  }

  const updateDebt = (index: number, field: keyof DebtItem, value: string) => {
    const updated = [...debts]
    updated[index][field] = value
    setDebts(updated)
  }

  // Calculate total monthly debt payments
  const calculateTotalMonthlyDebt = () => {
    return debts.reduce((total, debt) => {
      const monthlyAmount = parseFloat(debt.monthly) || 0
      return total + monthlyAmount
    }, 0)
  }

  const handleSubmit = async () => {
    // Validate spouse consent if married in community of property
    if (personalInfo.maritalStatus === "married-cop") {
      if (!spouseInfo.name || !spouseInfo.surname || !spouseInfo.contactNumber) {
        alert("Please complete spouse information before submitting")
        return
      }
      if (!spouseInfo.hasConsent) {
        alert("Please confirm spouse consent before submitting")
        return
      }
    }

    setIsSubmitting(true)
    try {
      const applicationData = {
        personalInfo,
        spouseInfo: personalInfo.maritalStatus === "married-cop" ? spouseInfo : null,
        dependents,
        income: incomeItems,
        deductions: deductionItems,
        commitments,
        debts,
        declarations,
        totalMonthlyDebt: calculateTotalMonthlyDebt(),
        submittedAt: new Date().toISOString(),
      }

      const response = await fetch("/api/form16-application", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(applicationData),
      })

      if (response.ok) {
        setIsSuccess(true)
        setShowDownloadButton(true)
      }
    } catch (error) {
      console.error("[v0] Form 16 submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const totalSteps = 5

  if (isSuccess) {
    return (
      <Card className="border-2 border-[#4DB6AC]">
        <CardContent className="py-12 text-center">
          <CheckCircle2 className="h-16 w-16 text-[#4DB6AC] mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-[#0D3B66] mb-2">Application Submitted Successfully!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for submitting your debt review application. We will review your information and contact you within 1-2 business days.
          </p>
          
          <div className="space-y-4 max-w-md mx-auto">
            {/* Download Copy Section */}
            {showDownloadButton && (
              <div className="bg-[#4DB6AC]/10 border border-[#4DB6AC] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Download className="h-5 w-5 text-[#4DB6AC]" />
                  <h4 className="font-semibold text-[#0D3B66]">Download Your Copy</h4>
                </div>
                <Button 
                  className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white"
                  onClick={() => window.print()}
                >
                  Download PDF Copy
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  This will allow you to print or save your application for your records
                </p>
              </div>
            )}

            {/* Upload Reminder Section */}
            <div className="bg-[#FFD93D]/10 border border-[#FFD93D] rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Upload className="h-5 w-5 text-[#FFD93D]" />
                <h4 className="font-semibold text-[#0D3B66]">Complete Your Profile</h4>
              </div>
              <p className="text-sm text-[#0D3B66]/80 mb-3 text-left">
                To complete your application, please upload the following documents:
              </p>
              <ul className="text-sm text-left space-y-1 mb-3 list-disc list-inside text-[#0D3B66]/70">
                <li>Copy of your ID</li>
                <li>Recent payslip</li>
                <li>Bank statement</li>
              </ul>
              <Button 
                className="w-full bg-[#FFD93D] hover:bg-[#FFD93D]/90 text-[#0D3B66]"
                onClick={() => window.location.href = "/client-portal/documents"}
              >
                Go to Uploads
              </Button>
            </div>

            {/* Next Steps */}
            <div className="space-y-2 text-sm text-left bg-gray-50 rounded-lg p-4">
              <p className="font-semibold text-[#0D3B66]">What happens next:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                <li>Your debt counsellor will review your application</li>
                <li>You will be contacted to verify information</li>
                <li>Required documents will be requested</li>
                <li>Credit providers will be notified of your debt review status</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <div className="space-y-6">
      {/* Progress Indicator */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-[#0D3B66]">Step {currentStep} of {totalSteps}</span>
          <span className="text-sm text-muted-foreground">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-[#4DB6AC] h-2 rounded-full transition-all duration-300"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      {/* Important Notice */}
      {currentStep === 1 && (
        <Alert className="border-[#FFD93D] bg-[#FFD93D]/10">
          <AlertCircle className="h-4 w-4 text-[#FFD93D]" />
          <AlertDescription className="text-sm">
            <strong>Important:</strong> By submitting this application, you will be listed as under debt review with all credit bureaus. You will not be able to obtain further credit until the debt review process is complete.
          </AlertDescription>
        </Alert>
      )}

      <Card className="border-2 border-[#0D3B66]/10">
        <CardHeader>
          <CardTitle className="text-2xl text-[#0D3B66] flex items-center gap-2">
            <FileText className="h-6 w-6 text-[#4DB6AC]" />
            Form 16 - Debt Review Application
          </CardTitle>
          <CardDescription>
            Application for debt review in terms of Section 86 of the National Credit Act 34 of 2005
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <User className="h-5 w-5 text-[#4DB6AC]" />
                <h3 className="text-lg font-semibold text-[#0D3B66]">Part 1: Personal Information</h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Names and Surname *</Label>
                  <Input
                    id="fullName"
                    value={personalInfo.fullName}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, fullName: e.target.value })}
                    placeholder="e.g., John Peter Smith"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="idNumber">South African ID Number *</Label>
                  <Input
                    id="idNumber"
                    value={personalInfo.idNumber}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, idNumber: e.target.value })}
                    placeholder="e.g., 8001015009087"
                    maxLength={13}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="passportNumber">Passport Number (if not SA citizen)</Label>
                  <Input
                    id="passportNumber"
                    value={personalInfo.passportNumber}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, passportNumber: e.target.value })}
                    placeholder="Optional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maritalStatus">Marital Status *</Label>
                  <Select
                    value={personalInfo.maritalStatus}
                    onValueChange={(value) => setPersonalInfo({ ...personalInfo, maritalStatus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single">Single</SelectItem>
                      <SelectItem value="married-cop">Married in Community of Property</SelectItem>
                      <SelectItem value="married-aop">Married out of Community of Property</SelectItem>
                      <SelectItem value="divorced">Divorced</SelectItem>
                      <SelectItem value="widowed">Widowed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Spouse Information Section - Show when married in community of property */}
              {personalInfo.maritalStatus === "married-cop" && (
                <Card className="border-2 border-[#FFD93D]/30 bg-[#FFD93D]/5">
                  <CardHeader>
                    <CardTitle className="text-lg text-[#0D3B66] flex items-center gap-2">
                      <AlertCircle className="h-5 w-5 text-[#FFD93D]" />
                      Spouse Information Required
                    </CardTitle>
                    <CardDescription>
                      Since you are married in community of property, we need your spouse's details and consent
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="spouseName">Spouse Name *</Label>
                        <Input
                          id="spouseName"
                          value={spouseInfo.name}
                          onChange={(e) => setSpouseInfo({ ...spouseInfo, name: e.target.value })}
                          placeholder="First name"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="spouseSurname">Spouse Surname *</Label>
                        <Input
                          id="spouseSurname"
                          value={spouseInfo.surname}
                          onChange={(e) => setSpouseInfo({ ...spouseInfo, surname: e.target.value })}
                          placeholder="Surname"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="spouseContact">Spouse Contact Number *</Label>
                      <Input
                        id="spouseContact"
                        type="tel"
                        value={spouseInfo.contactNumber}
                        onChange={(e) => setSpouseInfo({ ...spouseInfo, contactNumber: e.target.value })}
                        placeholder="e.g., 082 123 4567"
                        required
                      />
                    </div>

                    <div className="flex items-start space-x-3 p-3 bg-white border border-[#FFD93D]/20 rounded-lg">
                      <Checkbox
                        id="spouseConsent"
                        checked={spouseInfo.hasConsent}
                        onCheckedChange={(checked) => setSpouseInfo({ ...spouseInfo, hasConsent: checked as boolean })}
                        required
                      />
                      <Label htmlFor="spouseConsent" className="font-normal cursor-pointer text-sm leading-relaxed">
                        I confirm that my spouse is aware of and consents to this debt review application *
                      </Label>
                    </div>
                  </CardContent>
                </Card>
              )}

              <div className="space-y-2">
                <Label htmlFor="physicalAddress">Physical Address *</Label>
                <Textarea
                  id="physicalAddress"
                  value={personalInfo.physicalAddress}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, physicalAddress: e.target.value })}
                  placeholder="Street address, suburb, city, postal code"
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="postalAddress">Postal Address</Label>
                <Textarea
                  id="postalAddress"
                  value={personalInfo.postalAddress}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, postalAddress: e.target.value })}
                  placeholder="Leave blank if same as physical address"
                  rows={2}
                />
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cellPhone">Cell Phone Number *</Label>
                  <Input
                    id="cellPhone"
                    type="tel"
                    value={personalInfo.cellPhone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, cellPhone: e.target.value })}
                    placeholder="e.g., 082 123 4567"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="workPhone">Work Phone</Label>
                  <Input
                    id="workPhone"
                    type="tel"
                    value={personalInfo.workPhone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, workPhone: e.target.value })}
                    placeholder="Optional"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="homePhone">Home Phone</Label>
                  <Input
                    id="homePhone"
                    type="tel"
                    value={personalInfo.homePhone}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, homePhone: e.target.value })}
                    placeholder="Optional"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  value={personalInfo.email}
                  onChange={(e) => setPersonalInfo({ ...personalInfo, email: e.target.value })}
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="flex items-center gap-2 mt-6">
                <Briefcase className="h-5 w-5 text-[#4DB6AC]" />
                <h4 className="text-base font-semibold text-[#0D3B66]">Employment Details</h4>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="employerName">Name of Employer *</Label>
                  <Input
                    id="employerName"
                    value={personalInfo.employerName}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, employerName: e.target.value })}
                    placeholder="Company name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="employerAddress">Employer Address</Label>
                  <Input
                    id="employerAddress"
                    value={personalInfo.employerAddress}
                    onChange={(e) => setPersonalInfo({ ...personalInfo, employerAddress: e.target.value })}
                    placeholder="Company address"
                  />
                </div>
              </div>

              {/* Dependents */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-[#0D3B66]">Dependents</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addDependent} className="bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Dependent
                  </Button>
                </div>

                {dependents.map((dependent, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid md:grid-cols-4 gap-4">
                      <div className="space-y-2">
                        <Label>Name</Label>
                        <Input
                          value={dependent.name}
                          onChange={(e) => updateDependent(index, "name", e.target.value)}
                          placeholder="Full name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Age</Label>
                        <Input
                          type="number"
                          value={dependent.age}
                          onChange={(e) => updateDependent(index, "age", e.target.value)}
                          placeholder="Age"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Relation</Label>
                        <Select
                          value={dependent.relation}
                          onValueChange={(value) => updateDependent(index, "relation", value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="child">Child</SelectItem>
                            <SelectItem value="spouse">Spouse</SelectItem>
                            <SelectItem value="parent">Parent</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>ID Number</Label>
                        <div className="flex gap-2">
                          <Input
                            value={dependent.idNumber}
                            onChange={(e) => updateDependent(index, "idNumber", e.target.value)}
                            placeholder="Optional"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeDependent(index)}
                            className="text-red-600 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Income & Deductions */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <DollarSign className="h-5 w-5 text-[#4DB6AC]" />
                <h3 className="text-lg font-semibold text-[#0D3B66]">Part 2: Income & Deductions</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-[#0D3B66]">Monthly Income</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addIncome} className="bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Income
                  </Button>
                </div>

                {incomeItems.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Income Category</Label>
                      <Input
                        value={item.category}
                        onChange={(e) => updateIncome(index, "category", e.target.value)}
                        placeholder="e.g., Salary, Bonus, Rental Income"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Amount (R)</Label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={item.amount}
                          onChange={(e) => updateIncome(index, "amount", e.target.value)}
                          placeholder="0.00"
                        />
                        {incomeItems.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeIncome(index)}
                            className="text-red-600 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mt-8">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-[#0D3B66]">Monthly Deductions</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addDeduction} className="bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Deduction
                  </Button>
                </div>

                {deductionItems.map((item, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Deduction Category</Label>
                      <Input
                        value={item.category}
                        onChange={(e) => updateDeduction(index, "category", e.target.value)}
                        placeholder="e.g., Tax, Pension, Medical Aid"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Amount (R)</Label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={item.amount}
                          onChange={(e) => updateDeduction(index, "amount", e.target.value)}
                          placeholder="0.00"
                        />
                        {deductionItems.length > 1 && (
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeDeduction(index)}
                            className="text-red-600 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Monthly Commitments */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <Briefcase className="h-5 w-5 text-[#4DB6AC]" />
                <h3 className="text-lg font-semibold text-[#0D3B66]">Part 3: Monthly Commitments</h3>
              </div>

              <p className="text-sm text-muted-foreground">
                List all monthly expenses other than debt repayments (e.g., school fees, groceries, rent, utilities, transport, medical expenses)
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-[#0D3B66]">Living Expenses</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addCommitment} className="bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Expense
                  </Button>
                </div>

                {commitments.map((commitment, index) => (
                  <div key={index} className="grid md:grid-cols-3 gap-4 items-end">
                    <div className="space-y-2 md:col-span-2">
                      <Label>Expense Description</Label>
                      <Input
                        value={commitment.description}
                        onChange={(e) => updateCommitment(index, "description", e.target.value)}
                        placeholder="e.g., School fees, Groceries, Rent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Monthly Amount (R)</Label>
                      <div className="flex gap-2">
                        <Input
                          type="number"
                          value={commitment.amount}
                          onChange={(e) => updateCommitment(index, "amount", e.target.value)}
                          placeholder="0.00"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          onClick={() => removeCommitment(index)}
                          className="text-red-600 bg-transparent"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}

                {commitments.length === 0 && (
                  <p className="text-sm text-center text-muted-foreground py-4">
                    No expenses added yet. Click "Add Expense" to begin.
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Debt Obligations */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <CreditCard className="h-5 w-5 text-[#4DB6AC]" />
                <h3 className="text-lg font-semibold text-[#0D3B66]">Part 4: Debt Obligations</h3>
              </div>

              <p className="text-sm text-muted-foreground">
                List ALL your debts including home loans, vehicle finance, personal loans, credit cards, and store accounts
              </p>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-[#0D3B66]">Outstanding Debts</h4>
                  <Button type="button" variant="outline" size="sm" onClick={addDebt} className="bg-transparent">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Debt
                  </Button>
                </div>

                {debts.map((debt, index) => (
                  <Card key={index} className="p-4">
                    <div className="grid md:grid-cols-5 gap-4">
                      <div className="space-y-2">
                        <Label>Debt Type</Label>
                        <Select value={debt.type} onValueChange={(value) => updateDebt(index, "type", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="home-loan">Home Loan</SelectItem>
                            <SelectItem value="vehicle-finance">Vehicle Finance</SelectItem>
                            <SelectItem value="personal-loan">Personal Loan</SelectItem>
                            <SelectItem value="credit-card">Credit Card</SelectItem>
                            <SelectItem value="store-account">Store Account</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>Creditor Name</Label>
                        <Input
                          value={debt.creditor}
                          onChange={(e) => updateDebt(index, "creditor", e.target.value)}
                          placeholder="e.g., ABSA"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Account Number</Label>
                        <Input
                          value={debt.accountNo}
                          onChange={(e) => updateDebt(index, "accountNo", e.target.value)}
                          placeholder="Account #"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Outstanding (R)</Label>
                        <Input
                          type="number"
                          value={debt.outstanding}
                          onChange={(e) => updateDebt(index, "outstanding", e.target.value)}
                          placeholder="0.00"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Monthly Payment (R)</Label>
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            value={debt.monthly}
                            onChange={(e) => updateDebt(index, "monthly", e.target.value)}
                            placeholder="0.00"
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="icon"
                            onClick={() => removeDebt(index)}
                            className="text-red-600 bg-transparent"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}

                {debts.length === 0 && (
                  <p className="text-sm text-center text-muted-foreground py-4">
                    No debts added yet. Click "Add Debt" to list your obligations.
                  </p>
                )}

                {/* Total Monthly Debt Payments */}
                {debts.length > 0 && (
                  <div className="mt-6 p-4 bg-gradient-to-r from-[#4DB6AC]/10 to-[#FFD93D]/10 border-2 border-[#4DB6AC]/30 rounded-lg">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[#0D3B66]/70 font-medium">Total Monthly Debt Payments</p>
                        <p className="text-xs text-muted-foreground">Automatically calculated from the monthly payments above</p>
                      </div>
                      <div className="text-right">
                        <p className="text-3xl font-bold text-[#4DB6AC]">
                          R {calculateTotalMonthlyDebt().toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 5: Declarations */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="h-5 w-5 text-[#4DB6AC]" />
                <h3 className="text-lg font-semibold text-[#0D3B66]">Part 5: Declaration by Consumer</h3>
              </div>

              <Alert className="border-[#FF6B6B] bg-[#FF6B6B]/10 p-4">
                <AlertCircle className="h-5 w-5 text-[#FF6B6B] mt-1" />
                <div>
                  <AlertDescription className="text-sm font-semibold text-[#FF6B6B] mb-2">
                    Important - Please Read Carefully
                  </AlertDescription>
                  <AlertDescription className="text-sm text-[#FF6B6B]/90">
                    By accepting these declarations, you agree to the debt review process and understand your rights and obligations under the National Credit Act. You must tick <strong>all boxes</strong> below to proceed.
                  </AlertDescription>
                </div>
              </Alert>

              <div className="bg-[#4DB6AC]/5 border-l-4 border-[#4DB6AC] p-4 rounded">
                <h4 className="font-semibold text-[#0D3B66] mb-2">What you are agreeing to:</h4>
                <ul className="text-sm text-[#0D3B66]/80 space-y-1 list-disc list-inside">
                  <li>Work with our debt counsellor to manage your debts</li>
                  <li>Your information will be sent to credit bureaus</li>
                  <li>You will not be able to get new credit while under review</li>
                  <li>All information provided is true and correct</li>
                  <li>You understand the debt review process and costs</li>
                </ul>
              </div>

              <div className="space-y-3">
                {/* Declaration 1 */}
                <div className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#4DB6AC]/30 rounded-lg transition-colors">
                  <Checkbox
                    id="dec1"
                    checked={declarations.declaration1}
                    onCheckedChange={(checked) =>
                      setDeclarations({ ...declarations, declaration1: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="dec1" className="text-sm leading-relaxed cursor-pointer">
                    I/We undertake to comply with all requests from the debt counsellor to assist in evaluating my/our state of indebtedness and prospects for responsible debt restructuring.
                  </Label>
                </div>

                {/* Declaration 2 */}
                <div className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#4DB6AC]/30 rounded-lg transition-colors">
                  <Checkbox
                    id="dec2"
                    checked={declarations.declaration2}
                    onCheckedChange={(checked) =>
                      setDeclarations({ ...declarations, declaration2: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="dec2" className="text-sm leading-relaxed cursor-pointer">
                    I/We consent to the submission of my/our information to all registered credit bureaus and understand that I/we will be listed as under debt review.
                  </Label>
                </div>

                {/* Declaration 3 */}
                <div className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#4DB6AC]/30 rounded-lg transition-colors">
                  <Checkbox
                    id="dec3"
                    checked={declarations.declaration3}
                    onCheckedChange={(checked) =>
                      setDeclarations({ ...declarations, declaration3: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="dec3" className="text-sm leading-relaxed cursor-pointer">
                    I/We undertake NOT to enter into any further credit agreements until the debt counsellor rejects my/our application, the court determines I/we are not over-indebted, or all obligations are fulfilled.
                  </Label>
                </div>

                {/* Declaration 4 */}
                <div className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#4DB6AC]/30 rounded-lg transition-colors">
                  <Checkbox
                    id="dec4"
                    checked={declarations.declaration4}
                    onCheckedChange={(checked) =>
                      setDeclarations({ ...declarations, declaration4: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="dec4" className="text-sm leading-relaxed cursor-pointer">
                    I/We confirm that the information provided in this document is, to the best of my/our knowledge, true and correct.
                  </Label>
                </div>

                {/* Declaration 5 */}
                <div className="flex items-start gap-3 p-4 bg-white border-2 border-gray-200 hover:border-[#4DB6AC]/30 rounded-lg transition-colors">
                  <Checkbox
                    id="dec5"
                    checked={declarations.declaration5}
                    onCheckedChange={(checked) =>
                      setDeclarations({ ...declarations, declaration5: checked as boolean })
                    }
                    className="mt-1"
                  />
                  <Label htmlFor="dec5" className="text-sm leading-relaxed cursor-pointer">
                    I/We confirm that the Debt Review Process and Fee Structure has been explained and is understood and accepted. I/We authorize DCSA and its agents to process and store my/our personal information in accordance with POPI Act.
                  </Label>
                </div>
              </div>

              {/* Acceptance Summary */}
              <div className="p-4 bg-[#FFD93D]/10 border-2 border-[#FFD93D]/30 rounded-lg">
                <p className="text-sm text-[#0D3B66] font-semibold mb-2">Acceptance Status:</p>
                <div className="flex items-center gap-2">
                  <div className={`h-3 w-3 rounded-full ${declarations.declaration1 && declarations.declaration2 && declarations.declaration3 && declarations.declaration4 && declarations.declaration5 ? 'bg-green-500' : 'bg-gray-300'}`} />
                  <p className="text-sm text-[#0D3B66]/70">
                    {declarations.declaration1 && declarations.declaration2 && declarations.declaration3 && declarations.declaration4 && declarations.declaration5
                      ? "✓ All declarations accepted - Ready to submit"
                      : "Please accept all declarations to continue"}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6 border-t">
            {currentStep > 1 && (
              <Button
                type="button"
                variant="outline"
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-transparent"
              >
                Previous
              </Button>
            )}

            {currentStep < totalSteps ? (
              <Button
                type="button"
                onClick={() => setCurrentStep(currentStep + 1)}
                className="ml-auto bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
              >
                Next Step
              </Button>
            ) : (
              <Button
                type="button"
                onClick={handleSubmit}
                disabled={
                  isSubmitting ||
                  !declarations.declaration1 ||
                  !declarations.declaration2 ||
                  !declarations.declaration3 ||
                  !declarations.declaration4 ||
                  !declarations.declaration5
                }
                className="ml-auto bg-[#4DB6AC] hover:bg-[#4DB6AC]/90"
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
