"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, MessageCircle, X } from "lucide-react"
import { colors, WHATSAPP_URL } from "@/lib/colors"

const links = [
  { label: "Debt Help", href: "/debt-help" },
  { label: "☕ Coffee with Sam", href: "/#coffee" },
  { label: "Why Sam?", href: "/#why-sam" },
  { label: "About Sam", href: "/#about-sam" },
  { label: "FAQs", href: "/faq" },
  { label: "Contact", href: "/#contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b backdrop-blur-md" style={{ backgroundColor: "rgba(255,248,247,0.94)", borderColor: colors.sandLight }}><div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 md:px-10"><Link href="/" className="flex items-baseline gap-1 font-serif text-2xl font-semibold" style={{ color: colors.maroon }}><span>DCSA</span></Link><nav className="hidden items-center gap-7 lg:flex">{links.map((link) => <Link key={link.href} href={link.href} className="text-sm font-medium transition-colors hover:opacity-70" style={{ color: colors.charcoal }}>{link.label}</Link>)}</nav><div className="flex items-center gap-3"><a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="hidden items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold sm:flex" style={{ backgroundColor: colors.rose, color: colors.white }}><MessageCircle className="h-4 w-4" />Chat to Sam 💬</a><button type="button" className="rounded-full p-2 lg:hidden" style={{ color: colors.maroon }} onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button></div></div>{open && <div className="border-t px-6 py-5 lg:hidden" style={{ borderColor: colors.sandLight, backgroundColor: colors.warmWhite }}><nav className="flex flex-col gap-4">{links.map((link) => <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-base font-medium" style={{ color: colors.maroon }}>{link.label}</Link>)}<a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full px-4 py-3 font-semibold" style={{ backgroundColor: colors.rose, color: colors.white }}><MessageCircle className="h-5 w-5" />Start a private chat</a></nav></div>}</header>
}
