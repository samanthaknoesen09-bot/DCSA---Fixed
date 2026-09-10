"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Coffee, Heart, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/faq-section"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { colors, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/colors"
import { TEAM_IMAGES } from "@/lib/supabase-storage"

const services = [
  { title: "Debt counselling", text: "A practical plan for debt that feels too heavy to carry alone.", href: "/debt-help", label: "Find breathing room" },
  { title: "Credit repair", text: "Understand your credit profile and take clear steps forward.", href: "/credit-repair", label: "Improve my credit" },
  { title: "Free calculators", text: "See what your money is doing before you make your next move.", href: "/calculators", label: "Get clarity" },
]

function WhatsAppButton({ children = "WhatsApp Sam" }: { children?: ReactNode }) {
  return <Button asChild size="lg" className="rounded-full px-6 font-semibold shadow-sm" style={{ backgroundColor: colors.rose, color: colors.white }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />{children}</a></Button>
}

function StickyWhatsAppBar() {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 420)
    onScroll()
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  if (!visible) return null
  return <div className="fixed inset-x-0 bottom-0 z-50 p-3 md:hidden" style={{ backgroundColor: colors.maroon }}><WhatsAppButton>Start with a WhatsApp</WhatsAppButton></div>
}

function Hero() {
  return <section className="overflow-hidden" style={{ backgroundColor: colors.blush }}>
    <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-14 md:flex-row md:items-center md:gap-16 md:px-10 md:py-24">
      <div className="max-w-2xl flex-1">
        <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>Debt help, without the judgement</p>
        <h1 className="max-w-xl text-balance font-serif text-5xl font-medium leading-[1.04] md:text-7xl" style={{ color: colors.maroon }}>You don&apos;t have to figure it out alone. <span aria-hidden="true">💗</span></h1>
        <p className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-4xl" style={{ color: colors.rose }}>Let&apos;s fix it together.</p>
        <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed md:text-xl" style={{ color: colors.charcoal }}>No judgement. No pressure. Just someone who understands.</p>
        <p className="mt-4 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: colors.mutedText }}>Debt can feel overwhelming — but you don&apos;t have to face it on your own. Let&apos;s talk about your options and find a way forward.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton /><Link href="/calculator" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold" style={{ color: colors.maroon }}>See my options <ArrowRight className="h-4 w-4" /></Link></div>
        <p className="mt-5 text-sm" style={{ color: colors.mutedText }}>Private, practical support from Sam · NCR registered · Gqeberha</p>
      </div>
      <div className="relative flex-1 md:pt-8"><div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] shadow-xl" style={{ backgroundColor: colors.maroon }}><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%20May%2026%2C%202026%2C%2011_43_19%20AM-Wx27GTnp8cfexIuKhHTIWe13LZwXQY.png" alt="A warm consultation between a debt counsellor and a client over coffee" width={1268} height={1268} className="aspect-[4/5] object-cover object-center" priority /><div className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,248,247,0.9)" }}><p className="font-serif text-2xl" style={{ color: colors.maroon }}>Let&apos;s fix it together.</p><p className="mt-1 text-sm" style={{ color: colors.mutedText }}>No judgement. No pressure.</p></div></div><div className="absolute -bottom-5 -left-2 hidden rounded-2xl px-4 py-3 shadow-lg sm:block" style={{ backgroundColor: colors.warmWhite }}><Heart className="mb-1 h-5 w-5" style={{ color: colors.rose }} /><p className="text-sm font-semibold" style={{ color: colors.maroon }}>No judgement here.</p></div></div>
    </div>
  </section>
}

function Services() {
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.warmWhite }}><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>How I can help</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>A clear next step, not a lecture.</h2><p className="mt-4 text-lg leading-relaxed" style={{ color: colors.mutedText }}>You don&apos;t need to have it all figured out before you reach out. Start with the part that feels most urgent.</p></div><div className="mt-10 grid gap-5 md:grid-cols-3">{services.map((service) => <Link key={service.title} href={service.href} className="group rounded-3xl border p-6 transition-transform hover:-translate-y-1" style={{ borderColor: colors.blush, backgroundColor: colors.white }}><div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: colors.blush, color: colors.rose }}><Sparkles className="h-5 w-5" /></div><h3 className="font-serif text-2xl" style={{ color: colors.maroon }}>{service.title}</h3><p className="mt-3 min-h-14 leading-relaxed" style={{ color: colors.mutedText }}>{service.text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: colors.rose }}>{service.label}<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
}

function SamSection() {
  return <section id="about-sam" className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.maroon }}><div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center"><div className="overflow-hidden rounded-[2rem]" style={{ backgroundColor: colors.blush }}><Image src={TEAM_IMAGES.samantha} alt="Samantha Knoesen, founder of DCSA (Debt Clear SA (Pty) Ltd)" width={560} height={620} className="aspect-[4/5] object-cover object-top" /></div><div className="max-w-xl"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.gold }}>Meet Sam</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.warmWhite }}>You can talk to a real person.</h2><p className="mt-6 text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.82)" }}>I started DCSA (Debt Clear SA (Pty) Ltd) because money stress is personal. You deserve a calm conversation, honest answers, and support that meets you where you are.</p><p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.82)" }}>No scary language. No pushing you into a decision. Just a private space to understand your options.</p><div className="mt-8 flex flex-wrap gap-3 text-sm" style={{ color: colors.warmWhite }}>{["NCR registered", "Confidential", "Human support"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: "rgba(255,248,247,0.12)" }}><Check className="h-4 w-4" style={{ color: colors.gold }} />{item}</span>)}</div><div className="mt-8"><WhatsAppButton>Talk to Sam</WhatsAppButton></div></div></div></section>
}

function Reassurance() {
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.blush }}><div className="mx-auto max-w-4xl text-center"><ShieldCheck className="mx-auto h-10 w-10" style={{ color: colors.rose }} /><h2 className="mt-5 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>You don&apos;t have to decide today.</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: colors.charcoal }}>A WhatsApp message is just a conversation. We can look at what&apos;s happening, answer your questions, and leave the decision with you.</p><div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-3">{["Tell me what's happening", "Understand your options", "Choose your next step"].map((item, index) => <div key={item} className="rounded-2xl p-5" style={{ backgroundColor: colors.warmWhite }}><span className="font-serif text-3xl" style={{ color: colors.rose }}>0{index + 1}</span><p className="mt-3 font-semibold" style={{ color: colors.maroon }}>{item}</p></div>)}</div></div></section>
}

function Location() {
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.warmWhite }}><div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between md:p-12" style={{ backgroundColor: colors.cream }}><div><Coffee className="h-8 w-8" style={{ color: colors.rose }} /><h2 className="mt-4 font-serif text-4xl font-medium" style={{ color: colors.maroon }}>Come in for a coffee.</h2><p className="mt-3 max-w-xl text-lg leading-relaxed" style={{ color: colors.mutedText }}>If talking face to face feels easier, you&apos;re welcome at our Newton Park office. Visits are by appointment.</p><div className="mt-5 flex items-start gap-2 text-sm" style={{ color: colors.charcoal }}><MapPin className="mt-0.5 h-4 w-4" style={{ color: colors.rose }} /><span>81 6th Avenue, Newton Park, Gqeberha</span></div></div><div className="shrink-0"><WhatsAppButton>Book a chat</WhatsAppButton><a href="tel:+27719006298" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold" style={{ color: colors.maroon }}><Phone className="h-4 w-4" />{WHATSAPP_NUMBER}</a></div></div></section>
}

export function HomeClient() {
  return <main className="min-h-screen pb-20 md:pb-0" style={{ backgroundColor: colors.warmWhite }}><StickyWhatsAppBar /><Hero /><Services /><SamSection /><Reassurance /><Location /><section className="px-6 py-20 md:px-10" style={{ backgroundColor: colors.blush }}><div className="mx-auto max-w-5xl"><h2 className="mb-10 text-center font-serif text-4xl font-medium" style={{ color: colors.maroon }}>You&apos;re in good company.</h2><ReviewsCarousel /></div></section><FAQSection /><section className="px-6 py-20 text-center md:py-28" style={{ backgroundColor: colors.rose }}><h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-medium md:text-6xl" style={{ color: colors.warmWhite }}>Let&apos;s make your next month feel different.</h2><p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "rgba(255,248,247,0.86)" }}>Start with one honest message. We&apos;ll take it from there.</p><div className="mt-8"><Button asChild size="lg" className="rounded-full px-8 font-semibold" style={{ backgroundColor: colors.warmWhite, color: colors.maroon }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp Sam · {WHATSAPP_NUMBER}</a></Button></div></section></main>
}
