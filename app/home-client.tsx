"use client"

import { useEffect, useState, type ReactNode } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Check, ChevronRight, Coffee, Heart, MapPin, MessageCircle, Phone, ShieldCheck, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FAQSection } from "@/components/faq-section"
import { ReviewsCarousel } from "@/components/reviews-carousel"
import { colors, WHATSAPP_NUMBER, WHATSAPP_URL } from "@/lib/colors"

const services = [
  { title: "❤️ Debt counselling", text: "Also called debt review — one NCA process, two names. One reduced repayment instead of chaos.", href: "/debt-help", label: "Start here" },
  { title: "📊 Credit repair", text: "Something on your profile doesn't look right? Honest steps to rebuild.", href: "/get-started", label: "Check my options" },
  { title: "🚩 Flag removal", text: "Finished the process but the flag is still showing? Eligibility applies — removal depends on your circumstances, never guaranteed.", href: "/get-started", label: "Check my eligibility" },
  { title: "🧮 Free calculators", text: "See your numbers clearly before your next move — private and instant, right in your browser.", href: "/calculators", label: "Get clarity" },
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
        <h1 className="max-w-xl text-balance font-serif text-5xl font-medium leading-[1.04] md:text-7xl" style={{ color: colors.maroon }}>Payday comes. The debit orders go off. And there&apos;s nothing left.</h1>
        <p className="mt-6 max-w-lg font-serif text-3xl leading-tight md:text-4xl" style={{ color: colors.rose }}>You&apos;re not failing. Life happens.</p>
        <p className="mt-5 max-w-lg text-lg font-medium leading-relaxed md:text-xl" style={{ color: colors.charcoal }}>I&apos;m Samantha — a registered debt counsellor, wife, mom of four, and business owner.</p>
        <p className="mt-4 max-w-lg text-base leading-relaxed md:text-lg" style={{ color: colors.mutedText }}>I understand that sometimes debt isn&apos;t about being irresponsible. It&apos;s about trying to keep your family going when life gets expensive. Let&apos;s sit down, talk about it, and find your way forward.</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"><WhatsAppButton>WHATSAPP SAM · 071 900 6298</WhatsAppButton><Link href="#coffee" className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold" style={{ color: colors.maroon }}>BOOK AN APPOINTMENT <ArrowRight className="h-4 w-4" /></Link></div>
        <p className="mt-5 text-sm" style={{ color: colors.mutedText }}>No judgement. No pressure. Just honest advice. · APPOINTMENTS ONLY — Newton Park (no walk-ins, please book first)</p>
      </div>
      <div className="relative flex-1 md:pt-8"><div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] shadow-xl" style={{ backgroundColor: colors.maroon }}><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-11%20at%2022.08.00.jpegg-kIsGqKnWQCMzzbogIWdFQae1doHwN4.jpeg" alt="Sam smiling warmly at home" width={1268} height={1268} className="aspect-[4/5] object-cover object-center" priority /><div className="absolute bottom-5 left-5 right-5 rounded-2xl p-4 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,248,247,0.9)" }}><p className="font-serif text-2xl" style={{ color: colors.maroon }}>Let&apos;s fix it together.</p><p className="mt-1 text-sm" style={{ color: colors.mutedText }}>No judgement. No pressure.</p></div></div><div className="absolute -bottom-5 -left-2 hidden rounded-2xl px-4 py-3 shadow-lg sm:block" style={{ backgroundColor: colors.warmWhite }}><Heart className="mb-1 h-5 w-5" style={{ color: colors.rose }} /><p className="text-sm font-semibold" style={{ color: colors.maroon }}>No judgement here.</p></div></div>
    </div>
  </section>
}

function Services() {
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.warmWhite }}><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>How I can help</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>What do you need help with?</h2><p className="mt-4 text-lg leading-relaxed" style={{ color: colors.mutedText }}>Debt counselling and debt review are two names for the same NCA process. Start with the part that feels most urgent.</p></div><div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{services.map((service) => <Link key={service.title} href={service.href} className="group rounded-3xl border p-6 transition-transform hover:-translate-y-1" style={{ borderColor: colors.blush, backgroundColor: colors.white }}><div className="mb-12 flex h-11 w-11 items-center justify-center rounded-full" style={{ backgroundColor: colors.blush, color: colors.rose }}><Sparkles className="h-5 w-5" /></div><h3 className="font-serif text-2xl" style={{ color: colors.maroon }}>{service.title}</h3><p className="mt-3 min-h-14 leading-relaxed" style={{ color: colors.mutedText }}>{service.text}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: colors.rose }}>{service.label}<ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
}

function SamSection() {
  return <section id="about-sam" className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.maroon }}><div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[0.8fr_1.2fr] md:items-center"><div className="overflow-hidden rounded-[2rem]" style={{ backgroundColor: colors.blush }}><Image src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-11%20at%2022.08.01-A6Aqa3DHDYwq8D87wgFv505eAyWpWY.jpeg" alt="Sam sharing debt help guidance" width={1024} height={768} className="aspect-[4/5] object-cover object-top" /></div><div className="max-w-xl"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.gold }}>Meet Sam</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.warmWhite }}>Hi, I&apos;m Sam. ❤️</h2><p className="mt-6 text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.82)" }}>I&apos;m a registered debt counsellor (NCRDC3995) — but I&apos;m also a wife, a mom of four, and a business owner.</p><p className="mt-4 text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.82)" }}>I know that life doesn&apos;t always go according to plan. That&apos;s why I don&apos;t judge people for being in debt. I help them figure out what to do next.</p><div className="mt-8 flex flex-wrap gap-3 text-sm" style={{ color: colors.warmWhite }}>{["NCR registered", "Confidential", "Human support"].map((item) => <span key={item} className="inline-flex items-center gap-2 rounded-full px-4 py-2" style={{ backgroundColor: "rgba(255,248,247,0.12)" }}><Check className="h-4 w-4" style={{ color: colors.gold }} />{item}</span>)}</div><div className="mt-8"><WhatsAppButton>Talk to Sam</WhatsAppButton></div></div></div></section>
}

function WhySam() {
  return <section id="why-sam" className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.warmWhite }}><div className="mx-auto max-w-3xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>Why Sam?</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>I&apos;m going to listen.</h2><p className="mt-6 text-lg leading-relaxed" style={{ color: colors.charcoal }}>I&apos;m not going to sit across the desk from you and tell you what you should have done. I&apos;m a wife. I&apos;m a mom of four. I&apos;m a business owner. I understand bills. I understand unexpected expenses. I understand that you can earn a decent income and still feel like you&apos;re drowning.</p><p className="mt-4 text-lg leading-relaxed" style={{ color: colors.charcoal }}>And I understand that asking for help with money can feel embarrassing. <strong>It doesn&apos;t have to be.</strong> That&apos;s why DCSA exists.</p><p className="mt-6 font-serif text-2xl" style={{ color: colors.rose }}>You don&apos;t have to figure it out alone.</p></div></section>
}

function Reassurance() {
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.blush }}><div className="mx-auto max-w-4xl text-center"><ShieldCheck className="mx-auto h-10 w-10" style={{ color: colors.rose }} /><h2 className="mt-5 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>Worried that messaging me means you&apos;re signing up? It doesn&apos;t. ❤️</h2><p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed" style={{ color: colors.charcoal }}>Not sure what you need? That&apos;s okay. Send me a WhatsApp and tell me what&apos;s happening — I&apos;ll help you understand your options. No judgement. No pressure.</p><div className="mx-auto mt-10 grid max-w-3xl gap-4 text-left sm:grid-cols-4">{["You WhatsApp me — just a conversation", "I listen and understand your situation", "I explain your options honestly", "YOU decide what happens next"].map((item, index) => <div key={item} className="rounded-2xl p-5" style={{ backgroundColor: colors.warmWhite }}><span className="font-serif text-3xl" style={{ color: colors.rose }}>0{index + 1}</span><p className="mt-3 font-semibold" style={{ color: colors.maroon }}>{item}</p></div>)}</div><div className="mt-8"><WhatsAppButton>CHAT TO SAM 💬 · 071 900 6298</WhatsAppButton></div></div></section>
}

function Location() {
  return <section id="coffee" className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.maroon }}><div className="mx-auto flex max-w-5xl flex-col gap-8 rounded-[2rem] p-8 md:flex-row md:items-center md:justify-between md:p-12" style={{ backgroundColor: "rgba(255,248,247,0.06)" }}><div><Coffee className="h-8 w-8" style={{ color: colors.gold }} /><p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.gold }}>☕ Our signature first step</p><h2 className="mt-4 font-serif text-4xl font-medium" style={{ color: colors.warmWhite }}>Coffee with Sam ☕</h2><p className="mt-3 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.85)" }}>Sometimes you don&apos;t need another lecture about money. You just need someone to listen. Come sit with me, have a coffee, and let&apos;s talk about what&apos;s really going on.</p><div className="mt-5 grid gap-3 text-sm sm:grid-cols-3" style={{ color: colors.warmWhite }}><div className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,248,247,0.1)" }}>☕ In person<br />81 6th Avenue, Newton Park</div><div className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,248,247,0.1)" }}>📱 WhatsApp chat<br />071 900 6298</div><div className="rounded-xl p-3" style={{ backgroundColor: "rgba(255,248,247,0.1)" }}>📹 Video call<br />Anywhere in SA</div></div><p className="mt-4 text-sm font-semibold" style={{ color: colors.gold }}>📅 Strictly by appointment. No walk-ins — please book first.</p></div><div className="shrink-0"><Button asChild size="lg" className="rounded-full px-8 font-semibold" style={{ backgroundColor: colors.rose, color: colors.white }}><a href="https://wa.me/27719006298?text=Hi%20Sam%2C%20I%27d%20like%20to%20book%20my%20Coffee%20Chat%20%E2%98%95" target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />BOOK MY COFFEE CHAT</a></Button><a href="tel:+27719006298" className="mt-4 flex items-center justify-center gap-2 text-sm font-semibold" style={{ color: colors.warmWhite }}><Phone className="h-4 w-4" />{WHATSAPP_NUMBER}</a></div></div></section>
}

function LatestPosts() {
  const [posts, setPosts] = useState<{ slug: string; title: string; excerpt: string }[]>([])
  useEffect(() => {
    fetch("/api/blog").then((r) => (r.ok ? r.json() : { posts: [] })).then((d) => setPosts((d.posts || []).slice(0, 3))).catch(() => {})
  }, [])
  if (!posts.length) return null
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.warmWhite }}><div className="mx-auto max-w-6xl"><div className="flex flex-wrap items-end justify-between gap-4"><div className="max-w-2xl"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>☕ Real talk about money</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>Latest from the blog.</h2></div><Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold" style={{ color: colors.rose }}>All articles <ArrowRight className="h-4 w-4" /></Link></div><div className="mt-10 grid gap-5 md:grid-cols-3">{posts.map((p) => <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-3xl border p-6 transition-transform hover:-translate-y-1" style={{ borderColor: colors.blush, backgroundColor: colors.white }}><h3 className="font-serif text-2xl leading-snug" style={{ color: colors.maroon }}>{p.title}</h3><p className="mt-3 leading-relaxed" style={{ color: colors.mutedText }}>{(p.excerpt || "").slice(0, 130)}…</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold" style={{ color: colors.rose }}>Read article <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span></Link>)}</div></div></section>
}

function DebtResetPromo() {
  return <section className="px-6 py-20 md:px-10 md:py-24" style={{ backgroundColor: colors.maroon }}><div className="mx-auto flex max-w-5xl flex-col items-center gap-8 text-center"><div><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.gold }}>Try it free · No commitment</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.warmWhite }}>Debt Reset Preview</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: "rgba(255,248,247,0.85)" }}>See an estimated restructuring outcome based on affordability and potential negotiated terms. Answer a few questions, get instant clarity — then decide if you want to talk it through.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Link href="/calculator" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold" style={{ backgroundColor: colors.rose, color: colors.white }}>See my Debt Reset Preview <ArrowRight className="h-5 w-5" /></Link><a href="https://wa.me/27719006298?text=Hi%20Sam%2C%20I%20did%20the%20Debt%20Reset%20Preview%20—%20can%20we%20talk%20it%20through%3F" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold" style={{ backgroundColor: "transparent", color: colors.warmWhite, border: "2px solid rgba(255,248,247,0.5)" }}><MessageCircle className="h-5 w-5" />Talk me through it</a></div></div></section>
}

function BreatheAgain() {
  const shots = [
    { src: "/images/hopeful-family-sunlit.jpg", caption: "Saturday mornings without dread." },
    { src: "/images/hopeful-mom-kids-sofa.jpg", caption: "Present again — for them, and for you." },
    { src: "/images/hopeful-family-kitchen.jpg", caption: "Dinner without doing maths at the table." },
    { src: "/images/hopeful-dad-daughter-cafe.jpg", caption: "Coffee tastes better when the phone isn't scary." },
    { src: "/images/hopeful-morning-coffee.jpg", caption: "Opening your bank app without fear." },
  ]
  return <section className="px-6 py-20 md:px-10 md:py-28" style={{ backgroundColor: colors.cream }}><div className="mx-auto max-w-6xl text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em]" style={{ color: colors.rose }}>The other side of debt help</p><h2 className="mt-3 text-balance font-serif text-4xl font-medium md:text-5xl" style={{ color: colors.maroon }}>Imagine breathing again.</h2><p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed" style={{ color: colors.mutedText }}>Debt help isn&apos;t just about surviving the stress. It&apos;s about getting moments like these back.</p><div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shots.map((s) => <figure key={s.src} className="overflow-hidden rounded-3xl shadow-sm" style={{ backgroundColor: colors.white }}><Image src={s.src} alt={s.caption} width={800} height={600} className="aspect-[4/3] w-full object-cover" loading="lazy" /><figcaption className="p-4 font-serif text-lg" style={{ color: colors.maroon }}>{s.caption}</figcaption></figure>)}</div><div className="mt-10"><WhatsAppButton>I want this — Chat to Sam 💬</WhatsAppButton></div></div></section>
}

export function HomeClient() {
  return <main className="min-h-screen pb-20 md:pb-0" style={{ backgroundColor: colors.warmWhite }}><StickyWhatsAppBar /><Hero /><Services /><WhySam /><SamSection /><Reassurance /><Location /><LatestPosts /><DebtResetPromo /><section className="px-6 py-20 md:px-10" style={{ backgroundColor: colors.blush }}><div className="mx-auto max-w-5xl"><h2 className="mb-10 text-center font-serif text-4xl font-medium" style={{ color: colors.maroon }}>You&apos;re in good company.</h2><ReviewsCarousel /></div></section><FAQSection /><BreatheAgain /><section className="px-6 py-20 text-center md:py-28" style={{ backgroundColor: colors.rose }}><h2 className="mx-auto max-w-2xl text-balance font-serif text-4xl font-medium md:text-6xl" style={{ color: colors.warmWhite }}>Let&apos;s make your next month feel different.</h2><p className="mx-auto mt-5 max-w-xl text-lg" style={{ color: "rgba(255,248,247,0.86)" }}>Start with one honest message. We&apos;ll take it from there.</p><div className="mt-8"><Button asChild size="lg" className="rounded-full px-8 font-semibold" style={{ backgroundColor: colors.warmWhite, color: colors.maroon }}><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />WhatsApp Sam · {WHATSAPP_NUMBER}</a></Button></div></section></main>
}
