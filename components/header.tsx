"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Mail } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "Services", href: "/services" },
    { label: "Free Tools", href: "/calculator" },
    { label: "Podcast", href: "/#podcast" },
    { label: "Reviews", href: "/#reviews" },
    { label: "Meet the Team", href: "/#team" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Logo + NCR Badge */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-1 text-2xl font-bold hover:opacity-80 transition-opacity">
              <span style={{ color: "#800020" }}>DC</span>
              <span className="text-black">SA</span>
            </Link>
            <div className="hidden lg:block text-xs text-[#0D3B66]/60 border-l border-[#0D3B66]/20 pl-4">
              NCR Registered • NCRDC3995
            </div>
          </div>

          {/* Middle: Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-[#0D3B66]/80 hover:text-[#0D3B66] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Primary CTA + Secondary Link */}
          <div className="flex items-center gap-3">
            <Link
              href="/client-portal/auth/login"
              className="hidden md:inline-block text-sm text-[#0D3B66]/60 hover:text-[#0D3B66] transition-colors"
            >
              Client Portal
            </Link>

            <Button
              className="bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold hidden md:inline-flex"
              asChild
            >
              <Link href="/contact">Book a Chat</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col gap-6 mt-8">
                  <div className="text-xs text-[#0D3B66]/60 pb-4 border-b">
                    NCR Registered • NCRDC3995
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-medium text-[#0D3B66] hover:text-[#0D3B66]/70 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="border-t pt-6 space-y-4">
                    <Button
                      className="w-full bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/contact">Book a Chat</Link>
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full border-[#0D3B66] text-[#0D3B66]"
                      asChild
                      onClick={() => setIsOpen(false)}
                    >
                      <Link href="/client-portal/auth/login">Client Portal</Link>
                    </Button>
                  </div>

                  <div className="border-t pt-6 space-y-3 text-sm">
                    <div className="text-[#0D3B66]/60 font-medium mb-2">Contact Us</div>
                    <a href="tel:+27719006298" className="flex items-center gap-2 text-[#0D3B66] hover:text-[#0D3B66]/70">
                      <Phone className="h-4 w-4" />
                      +27 71 900 6298
                    </a>
                    <a href="mailto:info@dcsam.co.za" className="flex items-center gap-2 text-[#0D3B66] hover:text-[#0D3B66]/70">
                      <Mail className="h-4 w-4" />
                      info@dcsam.co.za
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Mobile CTA Button (visible alongside menu icon) */}
            <Button
              className="md:hidden bg-[#0D3B66] hover:bg-[#0D3B66]/90 text-white font-semibold text-sm px-4"
              asChild
            >
              <Link href="/contact">Book a Chat</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
