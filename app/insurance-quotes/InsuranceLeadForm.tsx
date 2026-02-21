"use client"

import { useMemo, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"

type Campaign = "ffw" | "aag" | "first-for-women" | "auto-and-general"

export function InsuranceLeadForm({ campaign }: { campaign: Campaign }) {
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [phone1, setPhone1] = useState("")
  const [acceptterms, setAcceptterms] = useState(false)

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [leadId, setLeadId] = useState<string | null>(null)

  const canSubmit = useMemo(() => {
    return firstname.trim() && lastname.trim() && phone1.trim() && acceptterms && !loading
  }, [firstname, lastname, phone1, acceptterms, loading])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLeadId(null)
    setLoading(true)

    try {
      const res = await fetch("/api/insurance/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          campaign,
          firstname,
          lastname,
          phone1,
          acceptterms,
          optinurl: typeof window !== "undefined" ? window.location.href : undefined,
        }),
      })

      const data = await res.json().catch(() => ({}))

      if (!res.ok || !data?.ok) {
        setError(data?.message || "Something went wrong. Please try again.")
        setLoading(false)
        return
      }

      setLeadId(data?.leadId || null)
    } catch {
      setError("We couldn't submit right now. Please try again or WhatsApp us.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="border-2 shadow-sm">
      <CardHeader>
        <CardTitle className="text-xl">Get a Quote</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800">
              {error}
            </div>
          )}

          {leadId && (
            <div className="rounded-lg border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
              Thanks &#8212; we&apos;ve received your details. A consultant will contact you with quote options.
              <div className="mt-2 text-xs opacity-80">Reference: {leadId}</div>
            </div>
          )}

          <div className="grid gap-2">
            <Label htmlFor="ilf-firstname">First name *</Label>
            <Input
              id="ilf-firstname"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ilf-lastname">Last name *</Label>
            <Input
              id="ilf-lastname"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ilf-phone1">Mobile number *</Label>
            <Input
              id="ilf-phone1"
              value={phone1}
              onChange={(e) => setPhone1(e.target.value)}
              placeholder="e.g. 082 123 4567"
              required
            />
          </div>

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              className="mt-1"
              checked={acceptterms}
              onChange={(e) => setAcceptterms(e.target.checked)}
              required
            />
            <span>I consent to be contacted about insurance quotes. *</span>
          </label>

          <Button type="submit" className="w-full" disabled={!canSubmit}>
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Submitting…
              </>
            ) : (
              "Get My Quote"
            )}
          </Button>

          <p className="text-xs opacity-70">
            Educational note: This quote request is optional and separate from debt counselling.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}
