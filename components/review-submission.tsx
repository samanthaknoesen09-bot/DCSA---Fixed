"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star, Send } from "lucide-react"
import { colors } from "@/lib/colors"

export function ReviewSubmission() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rating: 5,
    review: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", rating: 5, review: "" })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error("Error submitting review:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <Card className="border-2" style={{ borderColor: colors.mintCalm, borderRadius: "16px" }}>
        <CardContent className="p-8 text-center">
          <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{ backgroundColor: colors.mintCalm }}>
            <Star className="w-6 h-6 text-white fill-white" />
          </div>
          <h3 className="text-xl font-bold mb-2" style={{ color: colors.charcoal }}>
            Thank you for your review!
          </h3>
          <p style={{ color: colors.warmGrey }}>
            Your feedback helps us serve you better and guides others on their financial journey.
          </p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
      <CardHeader style={{ backgroundColor: colors.warmBeige }}>
        <CardTitle style={{ color: colors.charcoal }}>Share Your Experience</CardTitle>
        <p className="text-sm mt-2" style={{ color: colors.warmGrey }}>
          Your review appears here and on Google Reviews. Help others know what to expect.
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium block mb-2" style={{ color: colors.charcoal }}>
                Name
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your name"
                required
                style={{ borderColor: colors.sandLight }}
              />
            </div>
            <div>
              <label className="text-sm font-medium block mb-2" style={{ color: colors.charcoal }}>
                Email
              </label>
              <Input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                required
                style={{ borderColor: colors.sandLight }}
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-3" style={{ color: colors.charcoal }}>
              Rating
            </label>
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setFormData({ ...formData, rating: star })}
                  className="transition-transform hover:scale-110"
                >
                  <Star
                    className={`w-8 h-8 ${
                      star <= formData.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium block mb-2" style={{ color: colors.charcoal }}>
              Your Review
            </label>
            <Textarea
              value={formData.review}
              onChange={(e) => setFormData({ ...formData, review: e.target.value })}
              placeholder="Tell us about your experience..."
              required
              rows={5}
              style={{ borderColor: colors.sandLight }}
            />
          </div>

          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full text-white font-semibold"
            style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
          >
            {isSubmitting ? "Submitting..." : "Submit Review"}
            <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
