"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, Heart, Users, CheckCircle, Coffee, ChevronRight, Phone } from "lucide-react"
import { colors, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/colors"

// Hero Section
function HeroSection() {
  return (
    <section 
      className="relative min-h-[70vh] flex flex-col justify-center px-6 md:px-12"
      style={{ backgroundColor: colors.navy }}
    >
      <div className="container mx-auto max-w-4xl">
        <h1 
          className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
          style={{ color: colors.white }}
        >
          Payday <span style={{ color: colors.gold }}>→</span> Debit orders <span style={{ color: colors.gold }}>→</span>{" "}
          <span style={{ color: colors.gold }}>Nothing left.</span>
        </h1>
        
        <p 
          className="text-xl md:text-2xl font-semibold mb-6"
          style={{ color: colors.gold }}
        >
          Let&apos;s change that.
        </p>

        <p 
          className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          If you&apos;re exhausted from juggling debts, dodging calls from creditors, 
          or wondering how you&apos;ll make it through the month — you&apos;re not alone. 
          And you&apos;re not stuck.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Sam
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl"
            style={{ 
              borderColor: colors.white, 
              color: colors.white,
              backgroundColor: "transparent"
            }}
            asChild
          >
            <Link href="/free-debt-calculator">
              Check My Situation
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Pain Points Section
function PainPointsSection() {
  const painPoints = [
    "Every month feels like a survival game",
    "You&apos;re borrowing just to get through",
    "The calls and messages never stop",
    "You can&apos;t remember the last time you felt financially calm"
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: colors.navy }}
        >
          Does this sound familiar?
        </h2>

        <div className="space-y-4 mb-10">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 text-lg"
              style={{ color: colors.charcoal }}
            >
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
              <span>{point.replace(/&apos;/g, "'")}</span>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p 
            className="text-xl font-semibold mb-2"
            style={{ color: colors.navy }}
          >
            You&apos;re not bad with money.
          </p>
          <p 
            className="text-lg"
            style={{ color: colors.mutedText }}
          >
            Sometimes life just throws more at us than we can handle alone.
          </p>
        </div>
      </div>
    </section>
  )
}

// How I Help Section
function HowIHelpSection() {
  const steps = [
    {
      number: "1",
      title: "We talk",
      description: "No judgment, no pressure. Just a conversation about where you are."
    },
    {
      number: "2",
      title: "We understand your situation",
      description: "Together we look at your income, expenses, and what you&apos;re dealing with."
    },
    {
      number: "3",
      title: "We create a plan",
      description: "A realistic way forward that gives you breathing room again."
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: colors.navy }}
        >
          How I help
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {steps.map((step, index) => (
            <Card 
              key={index}
              className="border-0 shadow-lg text-center"
              style={{ backgroundColor: colors.warmBeige }}
            >
              <CardContent className="p-6">
                <div 
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl"
                  style={{ backgroundColor: colors.navy, color: colors.white }}
                >
                  {step.number}
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.navy }}>
                  {step.title}
                </h3>
                <p className="text-base" style={{ color: colors.mutedText }}>
                  {step.description.replace(/&apos;/g, "'")}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p 
            className="text-lg mb-6"
            style={{ color: colors.charcoal }}
          >
            Sometimes it starts with just a coffee and a conversation.
          </p>
          <Button
            size="lg"
            className="rounded-xl font-semibold px-8 py-6"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank">
              <Coffee className="w-5 h-5 mr-2" />
              Let&apos;s Chat
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Why DCSA Section
function WhyDCSASection() {
  const reasons = [
    {
      icon: Heart,
      title: "No judgment",
      description: "I&apos;ve heard it all. Your story is safe with me."
    },
    {
      icon: Shield,
      title: "Honest advice",
      description: "I&apos;ll tell you the truth about your options — even if it&apos;s not what you expect."
    },
    {
      icon: Users,
      title: "Personal support",
      description: "You&apos;re not a number. You&apos;re a person with a life, and I&apos;ll treat you that way."
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-4xl">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: colors.navy }}
        >
          Why work with me?
        </h2>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {reasons.map((reason, index) => (
            <div key={index} className="text-center">
              <div 
                className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${colors.gold}20` }}
              >
                <reason.icon className="w-7 h-7" style={{ color: colors.gold }} />
              </div>
              <h3 className="text-lg font-bold mb-2" style={{ color: colors.navy }}>
                {reason.title}
              </h3>
              <p className="text-base" style={{ color: colors.mutedText }}>
                {reason.description.replace(/&apos;/g, "'")}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div 
          className="flex items-center justify-center gap-2 text-sm"
          style={{ color: colors.mutedText }}
        >
          <Shield className="w-4 h-4" style={{ color: colors.navy }} />
          <span>NCR Registered Debt Counsellor • NCRDC3995</span>
        </div>
      </div>
    </section>
  )
}

// Final CTA Section
function FinalCTASection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.navy }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2 
          className="text-2xl md:text-3xl font-bold mb-4"
          style={{ color: colors.white }}
        >
          Ready to talk?
        </h2>
        <p 
          className="text-lg mb-8"
          style={{ color: "rgba(255,255,255,0.8)" }}
        >
          No commitment. No pressure. Just a conversation about your options.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Sam – {WHATSAPP_NUMBER}
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl"
            style={{ 
              borderColor: colors.white, 
              color: colors.white,
              backgroundColor: "transparent"
            }}
            asChild
          >
            <a href="tel:+27627884609">
              <Phone className="w-5 h-5 mr-2" />
              Call Me
            </a>
          </Button>
        </div>

        <p 
          className="text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          Our office is at 81 6th Avenue, Newton Park, Gqeberha
        </p>
      </div>
    </section>
  )
}

export function DebtHelpClient() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: colors.warmCream }}>
      <HeroSection />
      <PainPointsSection />
      <HowIHelpSection />
      <WhyDCSASection />
      <FinalCTASection />
    </main>
  )
}
