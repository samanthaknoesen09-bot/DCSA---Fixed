"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Heart } from "lucide-react"

export function HeroSection() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
                You're Not Just a Number,
                <span className="text-primary"> You're Family</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed text-pretty max-w-lg">
                At DCSA, we understand that behind every debt story is a real person with real dreams. We don't judge
                your situation - we walk this journey with you, step by step, towards the financial freedom you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8"
                onClick={() =>
                  (window.location.href =
                    "mailto:info@dcsam.co.za?subject=I'm Ready to Start My Journey&body=Hi DCSA team, I'm ready to take control of my finances and would love to speak with someone who understands my situation. Please contact me for a free, no-judgment consultation.")
                }
              >
                I'm Ready to Start
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/10 bg-transparent px-8"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Where My Money Goes
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-12">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">NCR Registered NCRDC3995</span>
              </div>
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">100% Confidential & Safe</span>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">Experienced & Qualified Team</span>
              </div>
              <div className="flex items-start space-x-3">
                <Heart className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">No Judgment Zone</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <Card className="p-10 lg:p-12 bg-card border-border shadow-lg">
              <div className="space-y-8">
                <div className="text-center space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground">Let's See How We Can Help You</h3>
                  <p className="text-muted-foreground text-base">Every journey starts with understanding where you are</p>
                </div>

                <div className="space-y-6">
                  <div className="text-center p-8 bg-muted rounded-lg space-y-3">
                    <div className="text-4xl font-bold text-primary">Up to 45%</div>
                    <div className="text-sm text-muted-foreground">Debt Reduction Possible</div>
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                    onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Show Me My Options - Free
                  </Button>
                </div>
              </div>
            </Card>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
