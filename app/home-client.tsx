"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Shield, Phone, CheckCircle, Users, Heart, ArrowRight, ArrowUp, ChevronRight, MapPin, Coffee, Calendar, Clock, Percent } from "lucide-react"
import { colors, WHATSAPP_URL, WHATSAPP_NUMBER } from "@/lib/colors"
import { FAQSection } from "@/components/faq-section"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { TEAM_IMAGES } from "@/lib/supabase-storage"

// Sticky WhatsApp Bar for Mobile
function StickyWhatsAppBar() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past hero (approximately 100vh)
      setIsVisible(window.scrollY > window.innerHeight * 0.5)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50 p-3 md:hidden"
      style={{
        backgroundColor: colors.navy,
        boxShadow: "0 -4px 20px rgba(0,0,0,0.15)"
      }}
    >
      <Button
        size="lg"
        className="w-full rounded-xl font-bold text-lg py-6"
        style={{ backgroundColor: colors.gold, color: colors.navy }}
        asChild
      >
        <Link href={WHATSAPP_URL} target="_blank">
          <MessageCircle className="w-5 h-5 mr-2" />
          WhatsApp Sam Now
        </Link>
      </Button>
    </div>
  )
}

// Section 1: Hero - First Screen Only
function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-12"
      style={{ backgroundColor: colors.navy }}
    >
      <div className="container mx-auto max-w-4xl">
        {/* Headline - Big + Punchy */}
        <div className="mb-4">
          <h1
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold leading-[1.15] tracking-tight"
            style={{ color: colors.white }}
          >
            Payday <span style={{ color: colors.gold }}>&rarr;</span> Debit orders <span style={{ color: colors.gold }}>&rarr;</span> <span style={{ color: colors.gold }}>Nothing left.</span>
          </h1>
        </div>

        {/* Emotional line - Short, hard truth */}
        <p
          className="text-xl md:text-2xl font-semibold mb-6"
          style={{ color: colors.gold }}
        >
          That&apos;s not living. That&apos;s surviving.
        </p>

        {/* Body - Relatable + real struggle */}
        <div
          className="text-base md:text-lg mb-6 max-w-xl leading-relaxed space-y-3"
          style={{ color: "rgba(255,255,255,0.9)" }}
        >
          <p>After everything goes off, there&apos;s nothing left.</p>
          <p>Not for food. Not for petrol. Not for life.</p>
          <p>So you rely on credit cards, loans, or borrowing just to get through the month... and the cycle just keeps repeating.</p>
        </div>

        {/* Hope - What was missing */}
        <div
          className="text-lg md:text-xl max-w-xl"
          style={{ color: colors.white }}
        >
          <p className="font-semibold mb-2" style={{ color: colors.gold }}>It doesn&apos;t have to stay this way.</p>
          <p style={{ color: "rgba(255,255,255,0.9)" }}>We&apos;ll help you reduce the pressure and create a plan that gives you room to breathe again.</p>
        </div>
      </div>
    </section>
  )
}

// Section 2: CTA Section - "If this sounds like your month"
function CTASection() {
  return (
    <section className="py-12 md:py-16 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-2xl text-center">
        <h2
          className="text-2xl md:text-3xl font-bold mb-6"
          style={{ color: colors.navy }}
        >
          If this sounds like your month
        </h2>
        <p className="text-lg mb-8" style={{ color: colors.mutedText }}>
          WhatsApp Sam or check your debt situation - no commitment, just clarity.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg border-2"
            style={{
              backgroundColor: colors.white,
              borderColor: colors.navy,
              color: colors.navy
            }}
            asChild
          >
            <Link href="/calculator">
              Check My Debt Situation
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div
          className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm mt-8"
          style={{ color: colors.mutedText }}
        >
          <span className="flex items-center gap-1">
            <Shield className="w-4 h-4" style={{ color: colors.navy }} /> NCR Registered
          </span>
          <span className="hidden sm:inline">|</span>
          <span>Confidential</span>
          <span className="hidden sm:inline">|</span>
          <span>South Africa</span>
        </div>
      </div>
    </section>
  )
}

// Section 2: Reframe Section
function ReframeSection() {
  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: colors.navy }}
        >
          Debt happens for different reasons.
        </h2>

        <div className="space-y-4 mb-8">
          {[
            "It's not bad budgeting",
            "It's not lack of discipline",
            "It's debt structure working against you"
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 text-lg"
              style={{ color: colors.charcoal }}
            >
              <CheckCircle className="w-6 h-6 flex-shrink-0 mt-0.5" style={{ color: colors.gold }} />
              <span>{item}</span>
            </div>
          ))}
        </div>

        <p
          className="text-xl font-semibold text-center"
          style={{ color: colors.navy }}
        >
          No judgement here.
        </p>

        <div className="space-y-3 mb-8 text-lg text-center" style={{ color: colors.charcoal }}>
          <p>What matters is fixing the way it&apos;s set up —</p>
          <p>so you can finally breathe again.</p>
        </div>
      </div>
    </section>
  )
}

// Section: Interest Understanding
function InterestSection() {
  return (
    <section className="py-14 md:py-18 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-2xl">
        <div className="text-center">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
            style={{ backgroundColor: `${colors.gold}20` }}
          >
            <Percent className="w-7 h-7" style={{ color: colors.gold }} />
          </div>

          <h2
            className="text-2xl md:text-3xl font-bold mb-4"
            style={{ color: colors.navy }}
          >
            Do you understand how interest is affecting your debt?
          </h2>

          <p className="text-lg mb-6" style={{ color: colors.mutedText }}>
            Most people don&apos;t realize that high interest rates can double what they owe over time.
            Even small differences in rates can cost you thousands.
          </p>

          <p className="text-base mb-8" style={{ color: colors.charcoal }}>
            Use our free interest calculator to see exactly how much you&apos;re paying in interest -
            and how debt restructuring could save you money.
          </p>

          <Button
            size="lg"
            className="text-base md:text-lg px-8 py-6 font-bold rounded-xl shadow-lg"
            style={{ backgroundColor: colors.navy, color: colors.white }}
            asChild
          >
            <Link href="/interest-calculator">
              <Percent className="w-5 h-5 mr-2" />
              Check My Interest
              <ChevronRight className="w-5 h-5 ml-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Section 4: Solution Overview - 3 Cards
function SolutionSection() {
  const services = [
    {
      icon: Shield,
      title: "We protect you from pressure",
      description: "We step in so creditors stop chasing and things can calm down while we sort everything out."
    },
    {
      icon: ArrowRight,
      title: "We make your debt more manageable",
      description: "We work with your creditors to lower what you&apos;re paying monthly and give you room to breathe."
    },
    {
      icon: Users,
      title: "We simplify everything into one payment",
      description: "No more multiple debit orders. Just one structured payment that actually works with your budget."
    },
    {
      icon: Heart,
      title: "We guide you going forward",
      description: "This isn&apos;t just about fixing today — it&apos;s about helping you stay out of the same situation tomorrow."
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-5xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: colors.navy }}
        >
          How I help you get back on track
        </h2>

        <p 
          className="text-lg text-center mb-10"
          style={{ color: colors.mutedText }}
        >
          No judgement. No pressure. Just honest advice, a coffee, and a plan that works.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-0 shadow-lg hover:shadow-xl transition-shadow"
              style={{ backgroundColor: colors.white }}
            >
              <CardContent className="p-6">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${colors.gold}20` }}
                >
                  <service.icon className="w-6 h-6" style={{ color: colors.gold }} />
                </div>
                <h3 className="text-lg font-bold mb-2" style={{ color: colors.navy }}>
                  {service.title}
                </h3>
                <p className="text-base" style={{ color: colors.mutedText }}>
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="rounded-xl font-semibold px-8 py-6 text-base md:text-lg"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              Let&apos;s talk — no pressure
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Section 5: How It Works - Clean Timeline
function HowItWorksSection() {
  const steps = [
    { number: "1", title: "Talk to Sam", description: "Quick WhatsApp chat to understand your situation" },
    { number: "2", title: "We assess your situation", description: "Review your income, expenses, and debt" },
    { number: "3", title: "We engage creditors", description: "Negotiate reduced payments on your behalf" },
    { number: "4", title: "One structured payment", description: "You pay one affordable amount monthly" }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: colors.navy }}
        >
          What happens next
        </h2>

        <div className="space-y-6">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-4 items-start">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-lg"
                style={{ backgroundColor: colors.navy, color: colors.white }}
              >
                {step.number}
              </div>
              <div>
                <h3 className="font-bold text-lg mb-1" style={{ color: colors.navy }}>
                  {step.title}
                </h3>
                <p style={{ color: colors.mutedText }}>{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            className="rounded-xl font-semibold px-8 py-6"
            style={{ backgroundColor: colors.gold, color: colors.navy }}
            asChild
          >
            <Link href={WHATSAPP_URL} target="_blank">
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp Sam
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

// Section 6: Trust Section with Sam Photo
function TrustSection() {
  const [imageError, setImageError] = useState(false)

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-10 text-center"
          style={{ color: colors.navy }}
        >
          Why trust DC Sam?
        </h2>
        <p 
          className="text-lg mb-10 text-center"
          style={{ color: colors.mutedText }}
        >
          Sometimes it starts with just a coffee and a conversation.
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
          {/* Sam&apos;s Photo */}
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden shadow-xl">
              {!imageError ? (
                <Image
                  src={TEAM_IMAGES.samantha}
                  alt="Samantha (Sam) Knoesen - NCR Registered Debt Counsellor"
                  fill
                  className="object-cover"
                  onError={() => setImageError(true)}
                />
              ) : (
                <div
                  className="w-full h-full flex items-center justify-center text-5xl font-bold"
                  style={{ backgroundColor: colors.navy, color: colors.white }}
                >
                  SK
                </div>
              )}
            </div>
          </div>

          {/* Trust Statement */}
          <div>
            <p className="text-lg mb-6 leading-relaxed" style={{ color: colors.charcoal }}>
              &quot;I believe every person deserves a judgment-free space to rebuild their financial life.
              When you work with me, you&apos;re not just another case file &mdash; you&apos;re a person with
              dreams, and I&apos;m here to help you achieve them.&quot;
            </p>
            <p className="text-base mb-6 leading-relaxed" style={{ color: colors.mutedText }}>
              Whether you&apos;re feeling overwhelmed or just need someone to talk to about your options &mdash; 
              I&apos;m here. No pressure, no judgment. Let&apos;s figure it out together.
            </p>
            <p className="font-bold text-lg mb-1" style={{ color: colors.navy }}>
              Samantha Knoesen
            </p>
            <p style={{ color: colors.mutedText }}>
              NCR Registered Debt Counsellor • NCRDC3995
            </p>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { icon: Shield, label: "NCR Registered", detail: "NCRDC3995" },
            { icon: Heart, label: "Confidential", detail: "Your story is safe" },
            { icon: Users, label: "Real Support", detail: "Human team" },
            { icon: Phone, label: "No Judgment", detail: "Safe space" }
          ].map((item, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl"
              style={{ backgroundColor: colors.warmBeige }}
            >
              <item.icon className="w-8 h-8 mx-auto mb-2" style={{ color: colors.gold }} />
              <p className="font-semibold text-sm" style={{ color: colors.navy }}>{item.label}</p>
              <p className="text-xs" style={{ color: colors.mutedText }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Section 7: Location Section - Visit Us
function LocationSection() {
  const PIER_14_MAP_URL = "https://www.google.com/maps/place/Pier+14+Shopping+Centre/@-33.9581,25.6161,17z"

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-10">
          <Coffee className="w-10 h-10 mx-auto mb-4" style={{ color: colors.gold }} />
          <h2
            className="text-2xl md:text-3xl font-bold mb-3"
            style={{ color: colors.navy }}
          >
            Let&apos;s have a coffee and chat
          </h2>
          <p className="text-lg" style={{ color: colors.mutedText }}>
            Come see me in person - sometimes it&apos;s easier to talk face to face.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* North End Office - Walk-ins Welcome */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <a
                href={PIER_14_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div
                  className="p-4 flex items-center gap-2"
                  style={{ backgroundColor: colors.navy }}
                >
                  <MapPin className="w-5 h-5" style={{ color: colors.gold }} />
                  <span className="font-bold text-white">North End Office</span>
                  <span
                    className="ml-auto text-xs px-2 py-1 rounded-full font-semibold"
                    style={{ backgroundColor: colors.gold, color: colors.navy }}
                  >
                    Walk-ins Welcome
                  </span>
                </div>
              </a>
              <div className="p-5">
                <p className="font-semibold mb-1" style={{ color: colors.navy }}>
                  Pier 14 Shopping Centre
                </p>
                <p className="text-sm mb-2" style={{ color: colors.mutedText }}>
                  444 Govan Mbeki Avenue, North End
                </p>
                <p className="text-sm mb-4" style={{ color: colors.charcoal }}>
                  Find me inside <span className="font-semibold" style={{ color: colors.navy }}>Jean Lemue Attorneys</span>.
                </p>

                {/* Just ask for Sam callout */}
                <div
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 mb-4"
                  style={{ backgroundColor: `${colors.gold}1A`, border: `1px solid ${colors.gold}` }}
                >
                  <Coffee className="w-5 h-5 flex-shrink-0" style={{ color: colors.gold }} />
                  <p className="text-sm font-bold" style={{ color: colors.navy }}>
                    Pop in for a coffee &mdash; just ask for Sam!
                  </p>
                </div>

                <a
                  href={PIER_14_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold"
                  style={{ color: colors.gold }}
                >
                  <MapPin className="w-4 h-4" />
                  Get Directions
                  <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </CardContent>
          </Card>

          {/* Newton Park - By Appointment */}
          <Card className="border-0 shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div
                className="p-4 flex items-center gap-2"
                style={{ backgroundColor: colors.navy }}
              >
                <Calendar className="w-5 h-5" style={{ color: colors.gold }} />
                <span className="font-bold text-white">Newton Park</span>
                <span
                  className="ml-auto text-xs px-2 py-1 rounded-full font-semibold"
                  style={{ backgroundColor: "rgba(255,255,255,0.2)", color: colors.white }}
                >
                  By Appointment
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4" style={{ color: colors.gold }} />
                  <p className="font-semibold" style={{ color: colors.navy }}>
                    After hours &amp; weekends available
                  </p>
                </div>
                <p className="text-sm mb-4" style={{ color: colors.charcoal }}>
                  For your convenience, I&apos;m available outside normal business hours.
                  Let&apos;s find a time that works for you.
                </p>
                <Button
                  size="sm"
                  className="rounded-lg font-semibold"
                  style={{ backgroundColor: colors.gold, color: colors.navy }}
                  asChild
                >
                  <Link href={WHATSAPP_URL} target="_blank">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Book via WhatsApp
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: colors.mutedText }}
        >
          Not ready to meet? No problem.{" "}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="font-semibold underline"
            style={{ color: colors.navy }}
          >
            WhatsApp me
          </Link>
          {" "}and we can start there.
        </p>
      </div>
    </section>
  )
}

// Section 8: Tools Section (Lower Priority)
function ToolsSection() {
  const tools = [
    { name: "Money Map", description: "See where your money goes", href: "/calculator" },
    { name: "Interest Checker", description: "Understand what you&apos;re really paying", href: "/interest-calculator" },
    { name: "Debt Reset Tool", description: "Calculate potential savings", href: "/calculator" }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto max-w-3xl">
        <p
          className="text-sm uppercase tracking-wide mb-2 text-center"
          style={{ color: colors.mutedText }}
        >
          Clarity tools
        </p>
        <h2
          className="text-2xl md:text-3xl font-bold mb-4 text-center"
          style={{ color: colors.navy }}
        >
          Understand your situation
        </h2>
        <p className="text-center mb-10" style={{ color: colors.mutedText }}>
          Free tools to help you see clearly
        </p>

        <div className="space-y-4">
          {tools.map((tool, index) => (
            <Link
              key={index}
              href={tool.href}
              className="block p-4 rounded-xl border-2 transition-all hover:shadow-md"
              style={{
                backgroundColor: colors.white,
                borderColor: colors.grey
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold" style={{ color: colors.navy }}>{tool.name}</h3>
                  <p className="text-sm" style={{ color: colors.mutedText }}>{tool.description}</p>
                </div>
                <ChevronRight className="w-5 h-5" style={{ color: colors.gold }} />
              </div>
            </Link>
          ))}
        </div>

        <p
          className="text-center mt-8 text-sm"
          style={{ color: colors.mutedText }}
        >
          Still confused?{" "}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="font-semibold underline"
            style={{ color: colors.navy }}
          >
            WhatsApp Sam
          </Link>
        </p>
      </div>
    </section>
  )
}

// Section 8: Blog Section (Limited on Mobile)
function BlogSection() {
  const posts = [
    {
      title: "Why your salary disappears before month-end",
      preview: "Understanding the debt trap cycle",
      href: "/blog"
    },
    {
      title: "What happens during debt review?",
      preview: "A simple explanation of the process",
      href: "/blog"
    }
  ]

  return (
    <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
      <div className="container mx-auto max-w-3xl">
        <h2
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          style={{ color: colors.navy }}
        >
          Learn more
        </h2>

        <div className="space-y-4 mb-8">
          {posts.map((post, index) => (
            <Link
              key={index}
              href={post.href}
              className="block p-4 rounded-xl border transition-all hover:shadow-md"
              style={{
                backgroundColor: colors.white,
                borderColor: colors.grey
              }}
            >
              <h3 className="font-bold mb-1" style={{ color: colors.navy }}>{post.title}</h3>
              <p className="text-sm" style={{ color: colors.mutedText }}>{post.preview}</p>
            </Link>
          ))}
        </div>

        <p
          className="text-center text-sm"
          style={{ color: colors.mutedText }}
        >
          Still confused?{" "}
          <Link
            href={WHATSAPP_URL}
            target="_blank"
            className="font-semibold underline"
            style={{ color: colors.navy }}
          >
            WhatsApp Sam
          </Link>
        </p>
      </div>
    </section>
  )
}

// Section 9: Final CTA Section
function FinalCTA() {
  return (
    <section className="py-20 md:py-28 px-6" style={{ backgroundColor: colors.navy }}>
      <div className="container mx-auto max-w-3xl text-center">
        <h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight"
          style={{ color: colors.gold }}
        >
          You don&apos;t need another loan.
        </h2>
        <p
          className="text-2xl md:text-3xl font-bold mb-10"
          style={{ color: colors.white }}
        >
          You need a reset.
        </p>

        <Button
          size="lg"
          className="text-lg px-10 py-7 font-bold rounded-xl shadow-lg"
          style={{ backgroundColor: colors.gold, color: colors.navy }}
          asChild
        >
          <Link href={WHATSAPP_URL} target="_blank">
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp Sam Now
          </Link>
        </Button>

        <p
          className="mt-8 text-sm"
          style={{ color: "rgba(255,255,255,0.6)" }}
        >
          NCR Registered (NCRDC3995) | Confidential | South Africa
        </p>
      </div>
    </section>
  )
}

// Scroll to top button
function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (!showScrollTop) return null

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-20 md:bottom-6 right-6 p-3 rounded-full shadow-lg z-40 transition-all"
      style={{ backgroundColor: colors.navy, color: colors.white }}
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  )
}

export function HomeClient() {
  return (
    <main className="min-h-screen pb-20 md:pb-0" style={{ backgroundColor: colors.white }}>
      {/* Mobile sticky WhatsApp bar */}
      <StickyWhatsAppBar />

      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. CTA Section - If this sounds like your month */}
      <CTASection />

      {/* 3. Reframe Section */}
      <ReframeSection />

      {/* 4. Interest Section - Understanding interest */}
      <InterestSection />

      {/* 5. Solution Overview */}
      <SolutionSection />

      {/* 5. How It Works */}
      <HowItWorksSection />

      {/* 6. Trust Section with Sam */}
      <TrustSection />

      {/* 7. Location Section - Visit Us */}
      <LocationSection />

      {/* Reviews Section */}
      <section className="py-16 md:py-20 px-6" style={{ backgroundColor: colors.white }}>
        <div className="container mx-auto max-w-5xl">
          <h2
            className="text-2xl md:text-3xl font-bold mb-10 text-center"
            style={{ color: colors.navy }}
          >
            What people say
          </h2>
          <ReviewsCarousel />
        </div>
      </section>

      {/* 8. Tools Section */}
      <ToolsSection />

      {/* 8. Blog Section */}
      <BlogSection />

      {/* FAQ from existing component */}
      <FAQSection />

      {/* 9. Final CTA */}
      <FinalCTA />

      {/* Scroll to top */}
      <ScrollToTop />
    </main>
  )
}
