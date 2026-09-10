"use client"

import type React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone, Mail, MapPin, Facebook, CheckCircle, AlertCircle, Linkedin, Instagram } from "lucide-react"
import { useState } from "react"
import PhoneContact from "@/components/phone-contact"
import { colors } from "@/lib/colors"

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
)

const ThreadsIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01 1.5 8.434 2.35 5.58 3.995 3.529 5.845 1.225 8.598.044 12.179.02h.014c3.581.024 6.334 1.205 8.184 3.509C21.65 5.58 22.5 8.434 22.5 12.01c0 3.576-.85 6.43-2.495 8.481C18.155 22.795 15.402 23.976 11.821 24h.365zm4.896-7.078c-.346-.997-1.036-1.759-2.054-2.268-.776-.388-1.617-.581-2.502-.576-1.301.007-2.534.339-3.675 1.019-.898.535-1.652 1.301-2.244 2.279-.592.978-.888 2.097-.888 3.334 0 1.237.296 2.356.888 3.334.592.978 1.346 1.744 2.244 2.279 1.141.68 2.374 1.012 3.675 1.019.885.005 1.726-.188 2.502-.576 1.018-.509 1.708-1.271 2.054-2.268.346-.997.519-2.097.519-3.3 0-1.203-.173-2.303-.519-3.3z" />
  </svg>
)

export function Footer() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState("")
  const [messageType, setMessageType] = useState<"success" | "error" | "">("")

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email || !email.includes("@")) {
      setMessage("Please enter a valid email address")
      setMessageType("error")
      return
    }

    setIsLoading(true)
    setMessage("")

    try {
      const now = new Date()
      const dateStr = now.toLocaleDateString("en-ZA")
      const timeStr = now.toLocaleTimeString("en-ZA")
      const subject = "Newsletter Subscription Request"
      const body = `New newsletter subscription request from: ${email}

Please add this email to the DCSA (Debt Clear SA (Pty) Ltd) newsletter list for financial tips and debt management advice.

Email: ${email}
Date: ${dateStr}
Time: ${timeStr}`

      window.location.href = `mailto:sam@dcsam.co.za?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

      setMessage("Thank you! We'll add you to our newsletter list.")
      setMessageType("success")
      setEmail("")
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
      setMessageType("error")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <footer id="contact" className="text-foreground" style={{ backgroundColor: colors.warmBeige }}>
      <div className="container mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-2 space-y-2">
            <div className="flex items-center space-x-2">
              <Image
                src="/images/dcsa-logo.png"
                alt="DCSA (Debt Clear SA (Pty) Ltd) Debt Counselling & Credit Repair"
                width={120}
                height={48}
                className="h-10 w-auto"
              />
            </div>
            <p className="leading-relaxed max-w-md text-pretty" style={{ color: colors.charcoal }}>
              We're a small, caring team of debt counselling professionals helping South Africans find their way back to financial peace. Whatever your situation, you deserve support — not judgment.
            </p>
            <div className="rounded-r-lg p-4 max-w-md" style={{ backgroundColor: `${colors.mintCalm}15`, borderLeft: `4px solid ${colors.mintCalm}` }}>
              <p className="text-sm italic leading-relaxed" style={{ color: colors.charcoal }}>
                "Every person we've helped started exactly where you are now — uncertain but hopeful. That hope is enough. We'll take it from here, together."
              </p>
            </div>
            <div className="space-y-3">
              <PhoneContact />
              <a href="mailto:info@dcsam.co.za" className="flex items-center space-x-3 hover:text-primary transition-colors">
                <Mail className="w-5 h-5 text-primary" />
                <span>info@dcsam.co.za</span>
              </a>
              {/* Main office - By appointment */}
              <a 
                href="https://www.google.com/maps/search/?api=1&query=81+6th+Avenue,+Newton+Park,+Gqeberha,+South+Africa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-start space-x-3 hover:text-[#4DB6AC] transition-colors group cursor-pointer"
                title="Open Newton Park address in Google Maps"
              >
                <MapPin className="w-5 h-5 text-[#4DB6AC] mt-1 flex-shrink-0" />
                <div>
                  <span className="leading-relaxed group-hover:underline block text-sm">81 6th Avenue, Newton Park, Gqeberha</span>
                  <span className="text-xs mt-0.5 block" style={{ color: colors.warmGrey }}>By appointment only</span>
                </div>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="text-base font-semibold" style={{ color: colors.charcoal }}>Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="/" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/get-started" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Get Started
                </a>
              </li>
              <li>
                <a href="/calculator" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Calculators
                </a>
              </li>
              <li>
                <a href="/services" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Our Services
                </a>
              </li>
              <li>
                <a href="/money-clarity-hub" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Money Clarity Hub
                </a>
              </li>
              <li>
                <a href="/money-reset-program" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Money Reset Program
                </a>
              </li>
              <li>
                <a href="/blog" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Financial Education
                </a>
              </li>
              <li>
                <a href="/faq" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  FAQ
                </a>
              </li>
              <li>
                <a href="/refer-a-friend" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Refer a Friend
                </a>
              </li>
              <li>
                <a href="/verify-debt-counsellor" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Verify Your Debt Counsellor
                </a>
              </li>
              <li>
                <a 
                  href="https://open.spotify.com/show/4se2WtEkWcVMrqOU4Jmh7r" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="transition-colors hover:font-semibold flex items-center gap-1.5" 
                  style={{ color: colors.charcoal }}
                >
                  <svg className="w-4 h-4 text-[#1DB954]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                  </svg>
                  Debt Review for Dummies Podcast
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="transition-colors hover:font-semibold" style={{ color: colors.charcoal }}>
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-base font-semibold" style={{ color: colors.charcoal }}>Stay Updated</h4>
            <p className="text-xs" style={{ color: colors.warmGrey }}>
              Get financial tips and debt management advice delivered to your inbox.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-background/20 text-background placeholder:text-background/60"
                disabled={isLoading}
              />
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                disabled={isLoading}
              >
                {isLoading ? "Subscribing..." : "Subscribe"}
              </Button>
              {message && (
                <div
                  className={`flex items-center space-x-2 text-sm ${
                    messageType === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {messageType === "success" ? (
                    <CheckCircle className="w-4 h-4" />
                  ) : (
                    <AlertCircle className="w-4 h-4" />
                  )}
                  <span>{message}</span>
                </div>
              )}
            </form>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/DCSamDebt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: colors.charcoal }}
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/samantha-knoesen-3b2967125"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: colors.charcoal }}
                aria-label="Connect with Sam on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/dcsam-dcsa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: colors.charcoal }}
                aria-label="Connect with DCSA (Debt Clear SA (Pty) Ltd) on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@dcsam_debt"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: colors.charcoal }}
                aria-label="Follow us on TikTok"
              >
                <TikTokIcon />
              </a>
              <a
                href="https://www.instagram.com/debthelp_with_dcsam"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-110 transition-transform"
                style={{ color: colors.charcoal }}
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t mt-6 pt-4 space-y-4" style={{ borderColor: colors.sandLight }}>
              {/* Google Maps Embed */}
          <div className="w-full space-y-4">
            <h4 className="text-sm font-semibold mb-2" style={{ color: colors.charcoal }}>Find DCSA</h4>
            <div className="grid md:grid-cols-1 gap-4">
              {/* Newton Park - Appointment */}
              <div>
                <p className="text-xs font-semibold mb-1.5" style={{ color: colors.charcoal }}>
                  81 6th Avenue, Newton Park, Gqeberha <span style={{ color: colors.warmGrey }}>(By appointment only)</span>
                </p>
                <div className="rounded-lg overflow-hidden border-2 shadow-sm" style={{ borderColor: colors.sandLight }}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.7879845932744!2d25.595891!3d-33.966111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7ad6a966656a61%3A0x4367e69da17840c!2s81%206th%20Ave%2C%20Newton%20Park%2C%20Gqeberha%2C%206045%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="81 6th Avenue, Newton Park, Gqeberha"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 text-sm text-background/70 mb-8">
            <div>
              <h4 className="font-semibold text-background mb-2">NCR Registration</h4>
              <p>DCSA (Debt Clear SA (Pty) Ltd) is a registered debt counsellor with the National Credit Regulator (NCR).</p>
              <p className="font-medium mt-1">Registration Number: NCRDC3995</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2 text-background">
                <span className="text-primary">DC</span> Sam
              </h3>
              <p className="text-sm text-background/70 mb-4">
                Your trusted partner for debt counselling and financial freedom
              </p>
            </div>
          </div>

          {/* Trusted Affiliations - built to signal legitimacy */}
          <div className="rounded-xl border-2 border-primary/40 bg-background/5 p-6 mb-8">
            <div className="flex items-center gap-2 mb-1">
              <CheckCircle className="w-5 h-5 text-primary" />
              <h4 className="text-lg font-bold text-background">Accredited &amp; Trusted Affiliations</h4>
            </div>
            <p className="text-sm text-background/70 mb-5">
              We only work with registered, reputable partners — so your debt, your assets, and your peace of mind are protected every step of the way.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {/* DC Partner PDA */}
              <a
                href="https://www.dcpartner.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-lg bg-background p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Payment Distribution (PDA)</span>
                <span className="font-bold text-foreground leading-tight">DC Partner</span>
                <span className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">dcpartner.co.za →</span>
              </a>

              {/* Infusion Brokers */}
              <a
                href="https://infussionbrokers.co.za"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-lg bg-background p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Insurance Partner</span>
                <span className="font-bold text-foreground leading-tight">Infusion Brokers</span>
                <span className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">infussionbrokers.co.za →</span>
              </a>

              {/* One */}
              <a
                href="https://www.one.za.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col justify-between rounded-lg bg-background p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xs uppercase tracking-wide text-primary font-semibold mb-1">Insurance Partner</span>
                <span className="font-bold text-foreground leading-tight">One</span>
                <span className="text-xs text-muted-foreground mt-1 group-hover:text-primary transition-colors">one.za.com →</span>
              </a>
            </div>
          </div>

          <div className="bg-background/10 border-t border-b border-background/20 py-6 my-6 px-4 rounded-lg">
            <p className="text-background/80 text-sm leading-relaxed mb-3">
              <strong>Important Disclaimer:</strong> The information on this site is for educational purposes only and does not constitute financial or legal advice. Debt review outcomes depend on creditor responses. Interest reductions are negotiated and not guaranteed. All projections are estimates. Always consult with a registered debt counsellor for your specific situation.
            </p>
            <p className="text-background/70 text-xs">
              DCSA (Debt Clear SA (Pty) Ltd) (Debt Counselling South Africa) is NCR Registered under number NCRDC3995. We operate under the National Credit Act, 2005. All services comply with NCR guidelines.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 pt-4">
            <p className="text-background/60 text-sm">© 2026 DCSA (Debt Clear SA (Pty) Ltd) - Debt Clear South Africa. All rights reserved.</p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy-policy" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
