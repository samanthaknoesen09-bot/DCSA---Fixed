"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle, Shield, Users, Heart, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-br from-background via-background to-accent/5 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Content - 7 columns */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full border border-primary/20">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">NCR Registered • NCRDC3995</span>
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight text-balance">
                You're Not Just a Number,
                <span className="text-primary"> You're Family</span>
              </h1>
              
              <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
                At DCSA, we understand that behind every debt story is a real person with real dreams. We don't judge your situation - we walk this journey with you, step by step, towards the financial freedom you deserve.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 flex items-center gap-2"
                onClick={() =>
                  (window.location.href =
                    "mailto:info@dcsam.co.za?subject=I'm Ready to Start My Journey&body=Hi DCSA team, I'm ready to take control of my finances and would love to speak with someone who understands my situation. Please contact me for a free, no-judgment consultation.")
                }
              >
                I'm Ready to Start
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 text-foreground hover:bg-primary/5 px-8"
                onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
              >
                See Where My Money Goes
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pt-8 border-t border-border">
              <div className="flex flex-col gap-2">
                <Shield className="w-5 h-5 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-foreground">100% Confidential</span>
                <span className="text-xs text-muted-foreground">Your privacy matters</span>
              </div>
              <div className="flex flex-col gap-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-foreground">Qualified Team</span>
                <span className="text-xs text-muted-foreground">Experienced experts</span>
              </div>
              <div className="flex flex-col gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-foreground">No Judgment</span>
                <span className="text-xs text-muted-foreground">We're here to help</span>
              </div>
              <div className="flex flex-col gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span className="text-xs lg:text-sm font-medium text-foreground">Proven Results</span>
                <span className="text-xs text-muted-foreground">Real relief solutions</span>
              </div>
            </div>
          </div>

          {/* Right Content - 5 columns */}
          <div className="lg:col-span-5">
            <div className="relative">
              <Card className="p-8 lg:p-10 bg-card border border-border shadow-2xl overflow-hidden">
                {/* Card background accent */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-2xl -z-10"></div>
                
                <div className="relative z-10 space-y-8">
                  <div className="space-y-3">
                    <h3 className="text-2xl lg:text-3xl font-bold text-card-foreground leading-tight">
                      Let's See How We Can Help You
                    </h3>
                    <p className="text-sm lg:text-base text-muted-foreground">
                      Every journey starts with understanding where you are
                    </p>
                  </div>

                  {/* Savings Highlight */}
                  <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 p-6 lg:p-8 border border-primary/20">
                    <div className="relative z-10">
                      <div className="text-sm text-primary font-medium mb-2">Potential Savings</div>
                      <div className="text-4xl lg:text-5xl font-bold text-primary mb-2">Up to 45%</div>
                      <div className="text-sm text-muted-foreground">Debt Reduction Possible</div>
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-xl"></div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    size="lg"
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold flex items-center justify-center gap-2"
                    onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Show Me My Options - Free
                    <ArrowRight className="w-5 h-5" />
                  </Button>

                  {/* Trust indicator */}
                  <div className="pt-4 border-t border-border/50 flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span>Free consultation, no hidden fees</span>
                  </div>
                </div>
              </Card>

              {/* Floating accent elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-accent/20 rounded-full blur-xl hidden lg:block"></div>
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/15 rounded-full blur-xl hidden lg:block"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
