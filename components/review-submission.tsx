"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, MessageCircle, Heart } from "lucide-react"
import Link from "next/link"
import { colors } from "@/lib/colors"

export function ReviewSubmission() {
  return (
    <Card className="border-2" style={{ borderColor: colors.sandLight, borderRadius: "16px" }}>
      <CardContent className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-3" style={{ color: colors.charcoal }}>
            <Heart className="h-6 w-6 inline mr-2" style={{ color: colors.maroon }} />
            Share Your Experience
          </h3>
          <p style={{ color: colors.warmGrey }}>
            Your feedback helps others find real help. Leave a review on Google or Facebook.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Google Reviews */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: `${colors.sandLight}30` }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: colors.maroon }}>
                <Star className="h-5 w-5 text-white fill-white" />
              </div>
              <h4 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                Google Reviews
              </h4>
            </div>
            <p className="text-sm mb-6" style={{ color: colors.warmGrey }}>
              Leave a review on Google to help others discover DCSA (Debt Clear SA (Pty) Ltd) and see real stories from people we've helped.
            </p>
            <Button
              className="w-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <Link href="https://g.page/r/CWOXo2cj2ZfyEBM/review" target="_blank" rel="noopener noreferrer">
                Leave a Google Review
              </Link>
            </Button>
          </div>

          {/* Facebook Reviews */}
          <div className="p-6 rounded-lg" style={{ backgroundColor: `${colors.sandLight}30` }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#1877F2" }}>
                <MessageCircle className="h-5 w-5 text-white fill-white" />
              </div>
              <h4 className="font-bold text-lg" style={{ color: colors.charcoal }}>
                Facebook Reviews
              </h4>
            </div>
            <p className="text-sm mb-6" style={{ color: colors.warmGrey }}>
              Connect on Facebook and share your story with the DCSA (Debt Clear SA (Pty) Ltd) community.
            </p>
            <Button
              className="w-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: "#1877F2", borderRadius: "12px" }}
              asChild
            >
              <Link href="https://www.facebook.com/DCSamDebt/reviews_given" target="_blank" rel="noopener noreferrer">
                Leave a Facebook Review
              </Link>
            </Button>
          </div>
        </div>

        <div className="mt-8 p-6 rounded-lg" style={{ backgroundColor: `${colors.mintCalm}15`, borderLeft: `4px solid ${colors.mintCalm}` }}>
          <p className="text-sm text-center" style={{ color: colors.charcoal }}>
            <strong>Real reviews from real people</strong> help build trust. Your honest feedback — positive or constructive — makes DCSA (Debt Clear SA (Pty) Ltd) better for everyone.
          </p>
        </div>
      </CardContent>
    </Card>
  )
}
