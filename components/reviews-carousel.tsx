"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"

const reviews = [
  {
    id: 1,
    author: "Real Client",
    rating: 5,
    text: "DCSA - Debt Counselling & Credit Repair has been life-changing. Sam listened, understood my situation, and created a plan I could actually follow. No judgment, just real help.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
  },
  {
    id: 2,
    author: "Real Client",
    rating: 5,
    text: "I was scared of debt review, but Sam explained everything clearly. She's honest, caring, and actually has your best interests in mind.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
  },
  {
    id: 3,
    author: "Real Client",
    rating: 5,
    text: "Best decision I made was reaching out to DCSA. Sam makes you feel heard and understood. Professional and kind.",
    source: "Facebook",
    sourceUrl: "https://www.facebook.com/DCSamDebt/reviews_given",
  },
  {
    id: 4,
    author: "Real Client",
    rating: 5,
    text: "Sam is genuinely invested in helping you succeed. She doesn't just give advice — she walks you through every step.",
    source: "Facebook",
    sourceUrl: "https://www.facebook.com/DCSamDebt/reviews_given",
  },
  {
    id: 5,
    author: "Real Client",
    rating: 5,
    text: "Transparent, honest, and caring. DCSA provides real solutions, not quick fixes. Highly recommend.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  const review = reviews[currentIndex]

  return (
    <div className="w-full max-w-2xl mx-auto">
      <Card className="border-2 relative" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
        <CardContent className="p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex gap-1">
              {Array(review.rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>
            <span className="text-xs font-semibold" style={{ color: colors.maroon }}>
              {review.source}
            </span>
          </div>

          <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.charcoal }}>
            "{review.text}"
          </p>

          <div className="flex justify-between items-center">
            <div>
              <p className="font-semibold" style={{ color: colors.charcoal }}>
                {review.author}
              </p>
              <p className="text-sm" style={{ color: colors.warmGrey }}>
                Verified Review
              </p>
            </div>

            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={goToPrevious}
                className="border-2"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={goToNext}
                className="border-2"
                style={{ borderColor: colors.maroon, color: colors.maroon }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 w-2 rounded-full transition-all ${
                  idx === currentIndex ? "w-6" : ""
                }`}
                style={{
                  backgroundColor: idx === currentIndex ? colors.maroon : colors.sandLight,
                }}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
