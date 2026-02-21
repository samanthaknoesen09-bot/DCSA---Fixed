"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { colors } from "@/lib/colors"
import { Shield, Loader2, CheckCircle, ArrowLeft } from "lucide-react"

export function FirstForWomenClient() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    phone1: "",
    consent: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [leadId, setLeadId] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSubmitting(true)
    try {
      const response = await fetch("/api/insurance/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          partner: "first-for-women",
          optinurl: window.location.href,
        }),
      })
      const result = await response.json()
      if (result.ok) {
        setSuccess(true)
        setLeadId(result.leadId)
      } else {
        setError(result.message || "Failed to submit. Please try again.")
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const isFormValid = formData.firstname && formData.lastname && formData.phone1 && formData.consent

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.warmCream }}>
      <Header />
      <main className="flex-1 py-12 px-4">
        <div className="container mx-auto max-w-2xl">
          {/* Back Link */}
          <Link
            href="/insurance-quotes"
            className="inline-flex items-center mb-6 hover:underline"
            style={{ color: colors.maroon }}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Quotes
          </Link>
          <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "20px" }}>
            <CardContent className="p-8">
              {/* Logo */}
              <div className="flex justify-center mb-8">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <Image
                    src="/images/first-for-women-logo.png"
                    alt="First for Women Insurance"
                    width={240}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </div>
              {success ? (
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full" style={{ backgroundColor: `${colors.mintCalm}20` }}>
                    <CheckCircle className="w-8 h-8" style={{ color: colors.mintCalm }} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold mb-3" style={{ color: colors.charcoal }}>
                      Quote Request Submitted!
                    </h2>
                    <p className="mb-2" style={{ color: colors.warmGrey }}>
                      First for Women will contact you shortly with your personalized quote.
                    </p>
                    {leadId && (
                      <p className="text-sm" style={{ color: colors.warmGrey }}>
                        Reference: <strong>{leadId}</strong>
                      </p>
                    )}
                  </div>
                  <Button
                    className="text-white font-semibold"
                    style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    asChild
                  >
                    <Link href="/">Back to Homepage</Link>
                  </Button>
                </div>
              ) : (
                <>
                  <div className="mb-8">
                    <h1 className="text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>
                      Get Your Free Quote
                    </h1>
                    <p style={{ color: colors.warmGrey }}>
                      Fill in your details below and First for Women will contact you with a personalized car insurance quote. No obligation.
                    </p>
                  </div>
                  {process.env.NODE_ENV !== "production" && (
                    <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: colors.warmBeige }}>
                      <p className="text-xs" style={{ color: colors.warmGrey }}>
                        <strong>Dev note:</strong> Use first name &quot;Test&quot; and last name &quot;Testing&quot; for test submissions.
                      </p>
                    </div>
                  )}
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: colors.charcoal }}>
                          First Name <span style={{ color: colors.maroon }}>*</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.firstname}
                          onChange={(e) => handleChange("firstname", e.target.value)}
                          required
                          className="border-2"
                          style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium" style={{ color: colors.charcoal }}>
                          Last Name <span style={{ color: colors.maroon }}>*</span>
                        </label>
                        <Input
                          type="text"
                          value={formData.lastname}
                          onChange={(e) => handleChange("lastname", e.target.value)}
                          required
                          className="border-2"
                          style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium" style={{ color: colors.charcoal }}>
                        Mobile Number <span style={{ color: colors.maroon }}>*</span>
                      </label>
                      <Input
                        type="tel"
                        value={formData.phone1}
                        onChange={(e) => handleChange("phone1", e.target.value)}
                        placeholder="0XX XXX XXXX"
                        required
                        className="border-2"
                        style={{ borderColor: colors.sandLight, borderRadius: "10px" }}
                      />
                    </div>
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id="consent"
                        checked={formData.consent}
                        onCheckedChange={(checked) => handleChange("consent", checked as boolean)}
                        required
                      />
                      <label htmlFor="consent" className="text-sm cursor-pointer" style={{ color: colors.warmGrey }}>
                        I agree to be contacted by First for Women about my car insurance quote.{" "}
                        <span style={{ color: colors.maroon }}>*</span>
                      </label>
                    </div>
                    {error && (
                      <div className="p-4 rounded-lg" style={{ backgroundColor: `${colors.maroon}10`, color: colors.maroon }}>
                        <p className="text-sm">{error}</p>
                      </div>
                    )}
                    <Button
                      type="submit"
                      disabled={!isFormValid || isSubmitting}
                      className="w-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
                      style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Get My Quote"
                      )}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  )
}
