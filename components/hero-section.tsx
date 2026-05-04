"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text & CTAs */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-balance" style={{ color: colors.charcoal }}>
                When your salary disappears before month-end.
              </h1>
              <p className="text-lg lg:text-xl leading-relaxed text-pretty" style={{ color: colors.warmGrey }}>
                If you&apos;re juggling school fees, groceries, and another round of debit orders while stress keeps you up at night - you&apos;re not bad with money. The system just takes first.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="font-semibold text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 text-white"
                style={{ backgroundColor: colors.maroon }}
                asChild
              >
                <Link href="/calculator">
                  Check My Debt Situation
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                asChild
              >
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Sam
                </a>
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8">
              <div className="flex items-center gap-3 p-3 rounded-lg transition-colors" style={{ backgroundColor: colors.warmBeige + "40" }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                <span className="text-sm font-medium" style={{ color: colors.charcoal }}>NCR Registered</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg transition-colors" style={{ backgroundColor: colors.warmBeige + "40" }}>
                <Users className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                <span className="text-sm font-medium" style={{ color: colors.charcoal }}>Real Google Reviews</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg transition-colors" style={{ backgroundColor: colors.warmBeige + "40" }}>
                <Shield className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                <span className="text-sm font-medium" style={{ color: colors.charcoal }}>Private & Confidential</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg transition-colors" style={{ backgroundColor: colors.warmBeige + "40" }}>
                <Heart className="w-5 h-5 flex-shrink-0" style={{ color: colors.maroon }} />
                <span className="text-sm font-medium" style={{ color: colors.charcoal }}>No Judgment</span>
              </div>
            </div>

            {/* Reassurance Line */}
            <p className="text-center lg:text-left text-sm font-medium italic" style={{ color: colors.warmGrey }}>
              No judgement. No pressure. Just clarity.
            </p>
          </div>

          {/* Right Column - Sam Card with Image */}
          <div className="relative">
            <Card className="p-8 border-2 shadow-2xl hover:shadow-3xl transition-all duration-300" style={{ borderColor: colors.maroon + "30", backgroundColor: colors.white }}>
              <div className="space-y-6">
                {/* Sam's Photo */}
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/hero-sam-card.jpg"
                    alt="Sam - DCSA Debt Counsellor"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Sam Introduction */}
                <div className="text-center space-y-3">
                  <p className="leading-relaxed" style={{ color: colors.warmGrey }}>
                    I&apos;ve helped thousands of South Africans take control of their finances. Your situation isn&apos;t unique - and that&apos;s exactly why I know we can find a way forward together.
                  </p>
                </div>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: colors.softPeach + "30" }}>
                    <div className="text-2xl font-bold" style={{ color: colors.maroon }}>1000+</div>
                    <div className="text-xs mt-1" style={{ color: colors.warmGrey }}>Families Helped</div>
                  </div>
                  <div className="text-center p-4 rounded-lg hover:opacity-90 transition-colors" style={{ backgroundColor: colors.softPeach + "30" }}>
                    <div className="text-2xl font-bold" style={{ color: colors.maroon }}>15 min</div>
                    <div className="text-xs mt-1" style={{ color: colors.warmGrey }}>Free Chat</div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300 text-white"
                  style={{ backgroundColor: colors.maroon }}
                  asChild
                >
                  <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                    Start Free Chat with Sam
                  </a>
                </Button>
              </div>
            </Card>

            {/* Decorative Blurs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.maroon + "15" }}></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full blur-3xl animate-pulse" style={{ backgroundColor: colors.softPeach + "40" }}></div>
          </div>
        </div>
      </div>
    </section>
  )
}
