"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Heart, MessageCircle } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-background via-muted/20 to-accent/10">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Text & CTAs */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                When your salary disappears before month-end.
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty">
                If you're juggling school fees, groceries, and another round of debit orders while stress keeps you up at night - you're not bad with money. The system just takes first.
              </p>
            </div>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delayed">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                Check My Debt Situation
              </Button>
              <Button
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-base h-14 px-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                onClick={() => window.open("https://wa.me/27...?text=Hi%20Sam,%20I'd%20like%20to%20discuss%20my%20debt%20situation", "_blank")}
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Sam
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-8 animate-fade-in-delayed-2">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">NCR Registered</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                <Users className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Real Google Reviews</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                <Shield className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">Private & Confidential</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/40 hover:bg-muted/60 transition-colors">
                <Heart className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm font-medium text-foreground">No Judgment</span>
              </div>
            </div>

            {/* Reassurance Line */}
            <p className="text-center lg:text-left text-base text-muted-foreground font-medium italic pt-4">
              No judgement. No pressure. Just clarity.
            </p>
          </div>

          {/* Right Column - Sam Card with Image */}
          <div className="relative animate-fade-in-slide-left">
            <Card className="p-8 bg-white border-2 border-primary/20 shadow-2xl hover:shadow-3xl transition-all duration-300">
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
                  <h3 className="text-2xl font-bold text-foreground">Hi, I'm Sam.</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I've helped thousands of South Africans take control of their finances. Your situation isn't unique - and that's exactly why I know we can find a way forward together.
                  </p>
                </div>

                {/* Highlight Stats */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="text-2xl font-bold text-primary">1000+</div>
                    <div className="text-xs text-muted-foreground mt-1">Families Helped</div>
                  </div>
                  <div className="text-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors">
                    <div className="text-2xl font-bold text-primary">15 min</div>
                    <div className="text-xs text-muted-foreground mt-1">Free Chat</div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12 shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => window.open("https://wa.me/27...?text=Hi%20Sam,%20I'd%20like%20to%20discuss%20my%20debt%20situation", "_blank")}
                >
                  Start Free Chat with Sam
                </Button>
              </div>
            </Card>

            {/* Decorative Blurs */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          50% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-delayed-2 {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          66% {
            opacity: 0;
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-slide-left {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-fade-in-delayed {
          animation: fade-in-delayed 1.2s ease-out;
        }

        .animate-fade-in-delayed-2 {
          animation: fade-in-delayed-2 1.6s ease-out;
        }

        .animate-fade-in-slide-left {
          animation: fade-in-slide-left 0.9s ease-out;
        }
      `}</style>
    </section>
  )
}
