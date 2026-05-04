import { Button } from "@/components/ui/button"
import { CheckCircle, Shield, Users, Heart, MessageCircle } from "lucide-react"
import Link from "next/link"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div>
          {/* Text & CTAs */}
          <div className="space-y-10 animate-fade-in max-w-3xl">
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


        </div>
      </div>
    </section>
  )
}
