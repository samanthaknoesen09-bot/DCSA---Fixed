"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Coffee, ChevronDown } from "lucide-react"
import { colors, WHATSAPP_URL } from "@/lib/colors"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [learnOpen, setLearnOpen] = useState(false)

  const mainNavLinks = [
    { label: "Debt Help", href: "#debt-options" },
    { label: "Free Tools", href: "#calculators" },
  ]

  const learnDropdown = [
    { label: "Education Tips", href: "#education" },
    { label: "FAQ", href: "#faq" },
    { label: "Blog", href: "/blog" },
    { label: "Podcast", href: "#podcast" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b shadow-sm" style={{ backgroundColor: colors.warmCream, borderColor: colors.sandLight }}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: DCSA Logo - Home Button */}
          <Link href="#top" className="flex items-center gap-1 text-2xl font-bold hover:opacity-80 transition-opacity">
            <span style={{ color: colors.maroon }}>DC</span>
            <span style={{ color: colors.black }}>SA</span>
          </Link>

          {/* Middle: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {mainNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4"
                style={{ color: colors.charcoal }}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Learn Dropdown */}
            <div className="relative group">
              <button className="text-sm font-medium flex items-center gap-1 transition-colors hover:underline decoration-2 underline-offset-4" style={{ color: colors.charcoal }}>
                Learn <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {learnDropdown.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-2 text-sm hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg transition-colors"
                    style={{ color: colors.charcoal }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <Link href="#team" className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4" style={{ color: colors.charcoal }}>Team</Link>
            <Link href="#client-portal" className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4" style={{ color: colors.charcoal }}>Client Portal</Link>
            <Link href="#refer" className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4" style={{ color: colors.charcoal }}>Refer a Friend</Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:underline decoration-2 underline-offset-4" style={{ color: colors.charcoal }}>Contact</Link>
          </nav>

          {/* Right: Primary CTA Only */}
          <div className="flex items-center gap-4">

            <Button
              className="text-white font-semibold hidden md:inline-flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Coffee className="h-4 w-4" />
                Let's Chat
              </a>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" style={{ color: colors.maroon }} />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]" style={{ backgroundColor: colors.warmCream }}>
                <div className="flex flex-col gap-6 mt-8">
                  <div className="text-xs pb-4 border-b" style={{ color: colors.warmGrey, borderColor: colors.sandLight }}>
                    NCR Registered • NCRDC3995
                  </div>

                  <nav className="flex flex-col gap-4">
                    {mainNavLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium transition-colors"
                        style={{ color: colors.charcoal }}
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                    
                    <div className="border-t pt-4">
                      <p className="text-xs font-semibold mb-3" style={{ color: colors.warmGrey }}>LEARN</p>
                      {learnDropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block text-sm mb-2 transition-colors"
                          style={{ color: colors.charcoal }}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    
                    <Link href="#team" className="text-base font-medium" style={{ color: colors.charcoal }} onClick={() => setIsOpen(false)}>Team</Link>
                    <Link href="#client-portal" className="text-base font-medium" style={{ color: colors.charcoal }} onClick={() => setIsOpen(false)}>Client Portal</Link>
                    <Link href="#refer" className="text-base font-medium" style={{ color: colors.charcoal }} onClick={() => setIsOpen(false)}>Refer a Friend</Link>
                    <Link href="#contact" className="text-base font-medium" style={{ color: colors.charcoal }} onClick={() => setIsOpen(false)}>Contact</Link>
                  </nav>

                  <div className="border-t pt-6 space-y-4" style={{ borderColor: colors.sandLight }}>
                    <Button
                      className="w-full text-white font-semibold items-center gap-2 shadow-md"
                      style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                        <Coffee className="h-4 w-4" />
                        Let's Chat
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full font-semibold"
                      style={{ borderColor: colors.maroon, color: colors.maroon, borderRadius: "12px" }}
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/client-portal/auth/login">Client Portal</Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6 space-y-3 text-sm" style={{ borderColor: colors.sandLight }}>
                    <div className="font-medium mb-2" style={{ color: colors.warmGrey }}>Or reach us directly:</div>
                    <a href="tel:+27719006298" className="flex items-center gap-2 transition-colors" style={{ color: colors.maroon }}>
                      <Phone className="h-4 w-4" />
                      +27 71 900 6298
                    </a>
                    <a href="mailto:info@dcsam.co.za" className="flex items-center gap-2 transition-colors" style={{ color: colors.maroon }}>
                      <Mail className="h-4 w-4" />
                      info@dcsam.co.za
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile CTA Button (visible alongside menu icon) */}
            <Button
              className="md:hidden text-white font-semibold text-sm px-4 shadow-md items-center gap-2"
              style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
              asChild
            >
              <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                <Coffee className="h-3 w-3" />
                Let's Chat
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
