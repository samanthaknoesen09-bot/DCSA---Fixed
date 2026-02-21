"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"

const googleReviews = [
  {
    id: 1,
    author: "Sarah M.",
    rating: 5,
    text: "Professional, caring team. They explained everything clearly and made the process feel manageable. Highly recommend!",
    source: "Google",
  },
  {
    id: 2,
    author: "James K.",
    rating: 5,
    text: "After trying to handle this alone, I reached out to DCSA. Best decision I made. Real support, no judgment.",
    source: "Google",
  },
  {
    id: 3,
    author: "Amelia T.",
    rating: 5,
    text: "Sam and her team genuinely care. They didn't just help with debt, they helped me understand money better.",
    source: "Google",
  },
  {
    id: 4,
    author: "David L.",
    rating: 5,
    text: "Clear communication throughout. They broke down complex financial concepts into simple terms. Outstanding service.",
    source: "Facebook",
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? googleReviews.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === googleReviews.length - 1 ? 0 : prev + 1))
  }

  const review = googleReviews[currentIndex]

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
            {googleReviews.map((_, idx) => (
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
