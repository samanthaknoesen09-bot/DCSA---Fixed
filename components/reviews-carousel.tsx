"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { colors } from "@/lib/colors"

const reviews = [
  {
    id: 1,
    author: "Lindy Jonker",
    rating: 5,
    text: "DCSA - Debt Counselling & Credit Repair has been life-changing. Sam listened, understood my situation, and created a plan I could actually follow. No judgment, just real help.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
    tag: "Single Parent",
  },
  {
    id: 2,
    author: "Michelle Naylor",
    rating: 5,
    text: "I was scared of debt review, but Sam explained everything clearly. She's honest, caring, and actually has your best interests in mind.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
    tag: "Government Worker",
  },
  {
    id: 3,
    author: "Thembi Dlamini",
    rating: 5,
    text: "Best decision I made was reaching out to DCSA. Sam makes you feel heard and understood. Professional and kind.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
    tag: "Self-Employed",
  },
  {
    id: 4,
    author: "Andries van der Merwe",
    rating: 5,
    text: "Sam is genuinely invested in helping you succeed. She doesn't just give advice — she walks you through every step.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
    tag: "Private Sector",
  },
  {
    id: 5,
    author: "Sarah Thompson",
    rating: 5,
    text: "Transparent, honest, and caring. DCSA provides real solutions, not quick fixes. Highly recommend.",
    source: "Google Reviews",
    sourceUrl: "https://g.page/r/CWOXo2cj2ZfyEBM/review",
    tag: "Healthcare Worker",
  },
]

export function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  // Auto-rotate every 8 seconds
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 8000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setAutoPlay(false)
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1))
  }

  // Show 3 reviews at a time
  const getVisibleReviews = () => {
    const indices = [
      currentIndex,
      (currentIndex + 1) % reviews.length,
      (currentIndex + 2) % reviews.length,
    ]
    return indices.map(idx => reviews[idx])
  }

  const visibleReviews = getVisibleReviews()

  return (
    <div className="w-full">
      <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-6">
        {visibleReviews.map((review, idx) => (
          <Card key={`${review.id}-${idx}`} className="border-2 h-full" style={{ borderColor: colors.sandLight }}>
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {Array(review.rating)
                    .fill(0)
                    .map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                </div>
                <span className="text-xs font-semibold" style={{ color: colors.maroon }}>
                  {review.source}
                </span>
              </div>

              <p className="text-sm md:text-base mb-4 leading-relaxed flex-grow" style={{ color: colors.charcoal }}>
                "{review.text}"
              </p>

              <div className="pt-4 border-t" style={{ borderColor: colors.sandLight }}>
                <p className="font-semibold text-sm md:text-base" style={{ color: colors.charcoal }}>
                  {review.author}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: colors.gold + "30", color: colors.charcoal }}>
                    {review.tag}
                  </span>
                  <p className="text-xs" style={{ color: colors.warmGrey }}>
                    Verified Review
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="sm"
          onClick={goToPrevious}
          className="border-2"
          style={{ borderColor: colors.maroon, color: colors.maroon }}
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>

        <div className="flex gap-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setAutoPlay(false)
                setCurrentIndex(idx)
              }}
              className={`h-2 rounded-full transition-all ${
                idx === currentIndex || 
                idx === (currentIndex + 1) % reviews.length || 
                idx === (currentIndex + 2) % reviews.length
                  ? "w-6" 
                  : "w-2"
              }`}
              style={{
                backgroundColor:
                  idx === currentIndex || 
                  idx === (currentIndex + 1) % reviews.length || 
                  idx === (currentIndex + 2) % reviews.length
                    ? colors.maroon
                    : colors.sandLight,
              }}
              title={`Go to review ${idx + 1}`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={goToNext}
          className="border-2"
          style={{ borderColor: colors.maroon, color: colors.maroon }}
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      <p className="text-center text-xs text-[#0D3B66]/50 mt-4">
        Auto-rotating every 8 seconds • {reviews.length} verified reviews from Google
      </p>
    </div>
  )
}
