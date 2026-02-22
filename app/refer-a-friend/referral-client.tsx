"use client"

import React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Heart,
  Users,
  Banknote,
  CheckCircle2,
  Share2,
  Loader2,
  Phone,
  ArrowRight,
  Shield,
} from "lucide-react"
import Link from "next/link"

const SA_BANKS = [
  "ABSA",
  "African Bank",
  "Capitec",
  "Discovery Bank",
  "FNB (First National Bank)",
  "Investec",
  "Nedbank",
  "Standard Bank",
  "TymeBank",
  "Other",
]

export function ReferralClient() {
  const [formData, setFormData] = useState({
    referrerName: "",
    referrerEmail: "",
    referrerPhone: "",
    referrerIdNumber: "",
    referrerBankName: "",
    referrerAccountNumber: "",
    referrerBranchCode: "",
    friendName: "",
    friendEmail: "",
    friendPhone: "",
    friendRelationship: "",
  })
  const [referrerConsent, setReferrerConsent] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submissionId, setSubmissionId] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = () => {
    return (
      formData.referrerName.trim() &&
      formData.referrerEmail.trim() &&
      formData.referrerPhone.trim() &&
      formData.friendName.trim() &&
      formData.friendPhone.trim() &&
      referrerConsent
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch("/api/referral", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      
      const result = await response.json().catch(() => ({}))

      if (!response.ok) {
        const errorMessage = result.message || result.error || "Something went wrong. Please try again."
        const refId = result.submissionId ? ` (Ref: ${result.submissionId})` : ""
        setError(`${errorMessage}${refId}`)
        if (result.submissionId) {
          setSubmissionId(result.submissionId)
        }
        const submissionId = result?.submissionId
        const code = result?.code

        let message = "Something went wrong. Please try again."
        if (code === "VALIDATION_ERROR") {
          message = "Please complete all required fields (including your friend's name and phone)."
        } else if (code === "DELIVERY_FAILED") {
          message = submissionId
            ? `We couldn't complete your referral. Please WhatsApp us with reference ID: ${submissionId}`
            : "We couldn't complete your referral. Please WhatsApp us."
        } else if (typeof result?.message === "string") {
          message = result.message
        }

        setError(message)
        if (submissionId) setSubmissionId(submissionId)
        setIsLoading(false)
        return
      }

      setSubmissionId(result.submissionId)
      setIsSubmitted(true)
    } catch {
      setError(
        "Unable to submit your referral. Please try again or call us directly at +27 71 900 6298."
      )
    } finally {
      setIsLoading(false)
    }
  }

  const canSubmit =
    formData.referrerName.trim() &&
    formData.referrerEmail.trim() &&
    formData.referrerPhone.trim() &&
    formData.friendName.trim() &&
    formData.friendPhone.trim() &&
    referrerConsent

  const shareUrl =
    typeof window !== "undefined"
      ? window.location.origin
      : "https://www.dcsam.co.za"

  const shareMessage = `I found a really caring team that helps with debt counselling. If you're feeling overwhelmed, they can help. No judgment, just real support. ${shareUrl}/refer-a-friend`

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8F9FA] to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#FFD93D] mb-6">
            <Heart className="w-10 h-10 text-[#0D3B66]" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-[#0D3B66] mb-6 text-balance">
            Know someone who could use help?
          </h1>
          <div className="max-w-3xl mx-auto space-y-4 text-pretty">
            <p className="text-lg md:text-xl text-[#0D3B66]/70 leading-relaxed">
              If someone you care about is drowning in debt and feeling alone, 
              you can be the one who throws them a lifeline.
            </p>
            <p className="text-lg md:text-xl text-[#0D3B66]/70 leading-relaxed">
              At DCSA Debt Counselling & Credit Repair, we help people fix what feels 
              overwhelming — legally, properly, and without judgement.
            </p>
            <p className="text-xl md:text-2xl font-semibold text-[#0D3B66] leading-relaxed">
              Refer someone who signs up successfully and we'll thank you with R350.
            </p>
            <div className="pt-4 space-y-2">
              <p className="text-lg text-[#0D3B66]/80 font-medium">You help them take the first step.</p>
              <p className="text-lg text-[#0D3B66]/80 font-medium">We handle the rest.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-3xl font-bold text-[#0D3B66] text-center mb-12">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-2 hover:border-[#4DB6AC] transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-[#4DB6AC]" />
                </div>
                <CardTitle className="text-xl text-[#0D3B66]">
                  1. Fill in the Form
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0D3B66]/70">
                  Share your details and your friend's contact information below.
                  It only takes a minute.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-[#4DB6AC] transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[#4DB6AC]" />
                </div>
                <CardTitle className="text-xl text-[#0D3B66]">
                  2. We Reach Out
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0D3B66]/70">
                  Our team will contact your friend with care and compassion to
                  discuss their options. No pressure, just support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-[#4DB6AC] transition-all">
              <CardHeader>
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Banknote className="w-8 h-8 text-[#4DB6AC]" />
                </div>
                <CardTitle className="text-xl text-[#0D3B66]">
                  3. You Get Paid R350
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#0D3B66]/70">
                  Once we successfully help your friend with debt counselling,
                  we'll pay the R350 referral fee straight into your account.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="bg-[#FFD93D]/10 border border-[#FFD93D]/30 rounded-2xl p-6 text-center max-w-2xl mx-auto">
            <p className="text-[#0D3B66] font-medium">
              There's no limit to how many people you can refer. Every successful referral earns you R350.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Form */}
      <section className="py-12 px-4 bg-white" id="referral-form">
        <div className="container mx-auto max-w-2xl">
          {!isSubmitted ? (
            <Card className="border-2 border-[#4DB6AC] shadow-lg">
              <CardHeader className="bg-gradient-to-r from-[#0D3B66] to-[#4DB6AC] text-white rounded-t-lg">
                <CardTitle className="text-2xl">Referral Form</CardTitle>
                <CardDescription className="text-white/90">
                  Fill in your details and your friend's information. We'll take
                  it from there.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg text-sm">
                      {error}
                    </div>
                  )}

                  {/* Your Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#4DB6AC]/20">
                      <div className="w-8 h-8 rounded-full bg-[#0D3B66] text-white flex items-center justify-center text-sm font-bold">
                        1
                      </div>
                      <h3 className="font-bold text-lg text-[#0D3B66]">
                        Your Details
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerName">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="referrerName"
                          value={formData.referrerName}
                          onChange={(e) =>
                            handleChange("referrerName", e.target.value)
                          }
                          placeholder="Your full name"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerEmail">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="referrerEmail"
                          type="email"
                          value={formData.referrerEmail}
                          onChange={(e) =>
                            handleChange("referrerEmail", e.target.value)
                          }
                          placeholder="your@email.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerPhone">
                          Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="referrerPhone"
                          type="tel"
                          value={formData.referrerPhone}
                          onChange={(e) =>
                            handleChange("referrerPhone", e.target.value)
                          }
                          placeholder="082 123 4567"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerIdNumber">
                          SA ID Number{" "}
                          <span className="text-[#0D3B66]/40 text-xs">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="referrerIdNumber"
                          value={formData.referrerIdNumber}
                          onChange={(e) =>
                            handleChange("referrerIdNumber", e.target.value)
                          }
                          placeholder="For payment verification"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Banking Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#4DB6AC]/20">
                      <div className="w-8 h-8 rounded-full bg-[#0D3B66] text-white flex items-center justify-center text-sm font-bold">
                        2
                      </div>
                      <h3 className="font-bold text-lg text-[#0D3B66]">
                        Banking Details{" "}
                        <span className="text-sm font-normal text-[#0D3B66]/50">
                          (for your R350 payment)
                        </span>
                      </h3>
                    </div>
                    <div className="bg-[#4DB6AC]/5 border border-[#4DB6AC]/20 rounded-lg p-3 flex items-start gap-2">
                      <Shield className="w-4 h-4 text-[#4DB6AC] mt-0.5 flex-shrink-0" />
                      <p className="text-xs text-[#0D3B66]/60">
                        Your banking details are securely stored and only used to
                        pay your referral fee. You can also provide these later.
                      </p>
                    </div>
                    <div className="space-y-1.5">
                      <Label htmlFor="referrerBankName">Bank Name</Label>
                      <Select
                        value={formData.referrerBankName}
                        onValueChange={(value) =>
                          handleChange("referrerBankName", value)
                        }
                      >
                        <SelectTrigger id="referrerBankName">
                          <SelectValue placeholder="Select your bank" />
                        </SelectTrigger>
                        <SelectContent>
                          {SA_BANKS.map((bank) => (
                            <SelectItem key={bank} value={bank}>
                              {bank}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerAccountNumber">
                          Account Number
                        </Label>
                        <Input
                          id="referrerAccountNumber"
                          value={formData.referrerAccountNumber}
                          onChange={(e) =>
                            handleChange("referrerAccountNumber", e.target.value)
                          }
                          placeholder="Your account number"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="referrerBranchCode">Branch Code</Label>
                        <Input
                          id="referrerBranchCode"
                          value={formData.referrerBranchCode}
                          onChange={(e) =>
                            handleChange("referrerBranchCode", e.target.value)
                          }
                          placeholder="e.g. 250655"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Friend's Details */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 pb-2 border-b border-[#4DB6AC]/20">
                      <div className="w-8 h-8 rounded-full bg-[#0D3B66] text-white flex items-center justify-center text-sm font-bold">
                        3
                      </div>
                      <h3 className="font-bold text-lg text-[#0D3B66]">
                        Your Friend's Details
                      </h3>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="friendName">
                          Friend's Full Name{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="friendName"
                          value={formData.friendName}
                          onChange={(e) =>
                            handleChange("friendName", e.target.value)
                          }
                          placeholder="Their full name"
                          required
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="friendPhone">
                          Friend's Phone Number{" "}
                          <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="friendPhone"
                          type="tel"
                          value={formData.friendPhone}
                          onChange={(e) =>
                            handleChange("friendPhone", e.target.value)
                          }
                          placeholder="083 765 4321"
                          required
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <Label htmlFor="friendEmail">
                          Friend's Email{" "}
                          <span className="text-[#0D3B66]/40 text-xs">
                            (optional)
                          </span>
                        </Label>
                        <Input
                          id="friendEmail"
                          type="email"
                          value={formData.friendEmail}
                          onChange={(e) =>
                            handleChange("friendEmail", e.target.value)
                          }
                          placeholder="friend@email.com"
                        />
                      </div>
                      <div className="space-y-1.5">
                        <Label htmlFor="friendRelationship">
                          Relationship{" "}
                          <span className="text-[#0D3B66]/40 text-xs">
                            (optional)
                          </span>
                        </Label>
                        <Select
                          value={formData.friendRelationship}
                          onValueChange={(value) =>
                            handleChange("friendRelationship", value)
                          }
                        >
                          <SelectTrigger id="friendRelationship">
                            <SelectValue placeholder="How do you know them?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Family member">
                              Family member
                            </SelectItem>
                            <SelectItem value="Friend">Friend</SelectItem>
                            <SelectItem value="Colleague">Colleague</SelectItem>
                            <SelectItem value="Neighbour">Neighbour</SelectItem>
                            <SelectItem value="Other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  {/* Referrer Consent */}
                  <div className="bg-[#FFD93D]/10 border-2 border-[#FFD93D]/30 rounded-lg p-4">
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="referrerConsent"
                        checked={referrerConsent}
                        onCheckedChange={(checked) => setReferrerConsent(checked as boolean)}
                        required
                      />
                      <Label htmlFor="referrerConsent" className="font-normal cursor-pointer text-sm leading-relaxed">
                        I confirm that my friend is aware you are sharing their details with DCSA for debt counselling services. *
                      </Label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      className="w-full h-12 text-lg bg-[#FF6B6B] hover:bg-[#FF6B6B]/90 text-white"
                      disabled={isLoading || !isFormValid()}
                      disabled={!canSubmit || isLoading}
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Referral
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                    <p className="text-xs text-[#0D3B66]/40 text-center mt-3">
                      By submitting, you confirm that your friend is aware you
                      are sharing their details with us.
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-2 border-[#4DB6AC] text-center shadow-lg">
              <CardContent className="pt-12 pb-12">
                <CheckCircle2 className="w-20 h-20 text-[#4DB6AC] mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-[#0D3B66] mb-4 text-balance">
                  Thank You for Your Referral
                </h2>
                {submissionId && (
                  <p className="text-sm font-mono bg-slate-50 p-2 rounded mb-4 text-[#0D3B66]/60">
                    Reference ID: {submissionId}
                  </p>
                )}
                <p className="text-lg text-[#0D3B66]/70 mb-4 max-w-md mx-auto text-pretty">
                  We've received your referral and will reach out to your friend
                  with care. Once we successfully help them, we'll pay the R350
                  referral fee into your account.
                </p>
                {submissionId && (
                  <div className="bg-[#4DB6AC]/10 border border-[#4DB6AC]/30 rounded-lg p-3 mb-4 max-w-md mx-auto">
                    <p className="text-xs text-[#0D3B66]/60">
                      <strong>Reference ID:</strong> {submissionId}
                    </p>
                  </div>
                )}
                <p className="text-sm text-[#0D3B66]/50 mb-8">
                  You can refer as many people as you'd like — every successful
                  referral earns you R350.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => {
                      setIsSubmitted(false)
                      setSubmissionId(null)
                      setFormData({
                        referrerName: "",
                        referrerEmail: "",
                        referrerPhone: "",
                        referrerIdNumber: "",
                        referrerBankName: "",
                        referrerAccountNumber: "",
                        referrerBranchCode: "",
                        friendName: "",
                        friendEmail: "",
                        friendPhone: "",
                        friendRelationship: "",
                      })
                    }}
                    className="bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white"
                  >
                    Refer Another Friend
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <a href={`https://wa.me/27661937596?text=${encodeURIComponent(`Hi DCSA! I just submitted a referral${submissionId ? ` (Ref: ${submissionId})` : ""}. Can you confirm you received it?`)}`} target="_blank" rel="noopener noreferrer">
                      Confirm via WhatsApp
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="bg-transparent">
                    <Link href="/">Back to Home</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* WhatsApp Share Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          <Card className="bg-gradient-to-r from-[#25D366] to-[#128C7E] text-white">
            <CardHeader>
              <CardTitle className="text-2xl">
                Prefer to Share via WhatsApp?
              </CardTitle>
              <CardDescription className="text-white/90">
                Send a message to someone who could use a helping hand
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button
                asChild
                className="w-full h-12 text-lg bg-white text-[#128C7E] hover:bg-white/90"
              >
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(shareMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Share on WhatsApp
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Terms of Referral */}
      <section className="py-8 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="bg-[#F8F9FA] rounded-xl p-6 space-y-3">
            <h3 className="font-bold text-[#0D3B66] text-sm">
              Referral Programme Terms
            </h3>
            <ul className="text-xs text-[#0D3B66]/60 space-y-1.5 list-disc list-inside">
              <li>
                The R350 referral fee is paid once the referred person
                successfully enters into a debt counselling agreement with DCSA.
              </li>
              <li>
                Payment will be made via EFT into the bank account provided
                within 30 days of the referred client signing their agreement.
              </li>
              <li>
                There is no limit to the number of referrals you can make.
              </li>
              <li>
                DCSA reserves the right to verify all referral claims and
                decline payment if the referral does not meet the qualifying
                criteria.
              </li>
              <li>
                The referred person must be a new client who has not previously
                contacted DCSA.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
