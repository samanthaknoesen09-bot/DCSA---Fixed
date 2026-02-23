"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Users, Calendar, Phone } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { BookingCalendar } from "@/components/booking-calendar"

export function MeetTheTeam() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingReason, setBookingReason] = useState("")
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({})

  const openBooking = (reason: string) => {
    setBookingReason(reason)
    setIsBookingOpen(true)
  }

  const handleImageError = (id: string) => {
    setImageErrors(prev => ({ ...prev, [id]: true }))
  }

  const teamMembers = [
    { id: "sam", initials: "SK", name: "Sam | Samantha Knoesen" },
    { id: "kadene", initials: "KJ", name: "Kadene Jacobs" },
    { id: "cindy", initials: "CK", name: "Cindy Killian" },
  ]

  const AvatarFallback = ({ initials, color }: { initials: string; color: string }) => (
    <div className={`w-full h-full rounded-2xl flex items-center justify-center text-white font-bold text-3xl ${color}`}>
      {initials}
    </div>
  )

  return (
    <>
      <BookingCalendar 
        isOpen={isBookingOpen} 
        onClose={() => setIsBookingOpen(false)}
        reason={bookingReason}
      />
      
      <section className="py-20 px-4 bg-gradient-to-br from-[#FFE5D9]/30 via-white to-primary/5">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 px-4 py-2 rounded-full mb-4">
            <Users className="w-5 h-5 text-[#0D3B66]" />
            <span className="text-sm font-semibold text-[#0D3B66]">Meet the Humans Behind the Help</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-4">
            The <span className="text-primary">DC</span><span className="text-black">SA</span> Squad
          </h2>
          <p className="text-lg text-[#0D3B66]/70 max-w-2xl mx-auto">
            No stuffy suits here. Just real people who genuinely care about helping you win with money.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sam - Founder/Lead Debt Counsellor */}
          <Card className="border-2 border-primary/30 hover:border-primary transition-all hover:shadow-2xl group">
            <CardContent className="p-8">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-primary to-primary/60">
                {!imageErrors["sam"] ? (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Samantha%20Knoesen-1VJIQpN7Uhf5TVVKUNGmueFnkcZ1sA.jpeg"
                    alt="Samantha (Sam) Knoesen - Registered Debt Counsellor & Founder of DCSA"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError("sam")}
                  />
                ) : (
                  <AvatarFallback initials="SK" color="bg-gradient-to-br from-primary to-primary/60" />
                )}
              </div>
              
              <div className="text-center space-y-4">
                <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-xs font-semibold text-primary">Founder & Lead Debt Counsellor</span>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-[#0D3B66]">Sam | Samantha Knoesen</h3>
                  <p className="text-sm font-semibold text-primary mt-1">NCR Registered Debt Counsellor</p>
                </div>
                
                <div className="text-left space-y-3 text-[#0D3B66]/80 leading-relaxed text-sm">
                  <p>
                    <strong className="text-[#0D3B66]">Sam believes debt is never just about money.</strong>
                  </p>
                  
                  <p>
                    It's about stress that follows you home. It's about pressure that affects your confidence, your relationships, and your peace of mind.
                  </p>
                  
                  <p>
                    Known for her friendly and welcoming nature, Sam creates a space where clients feel understood — not judged. But behind that warmth is someone who will stand firm and advocate fiercely for the people she represents.
                  </p>
                  
                  <p>
                    She treats every client as a person, not a number — and every case as personal.
                  </p>
                  
                  <p className="text-[#0D3B66] font-medium">
                    Because to Sam, fixing debt isn't about spreadsheets. It's about helping people reclaim control, stability, and dignity in their lives.
                  </p>
                </div>

                <div className="pt-4 space-y-2 text-sm text-[#0D3B66]/70 text-left">
                  <p className="font-semibold text-[#0D3B66] text-center mb-3">What you can expect when working with me:</p>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>NCR Registered Debt Counsellor (NCRDC3995)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>A safe, judgment-free space</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Someone who truly listens and understands</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Guidance tailored to you, not a one-size-fits-all solution</span>
                  </div>
                </div>

                <p className="text-sm text-[#0D3B66]/70 pt-4 pb-4 border-t border-primary/20 text-center">
                  If you're feeling overwhelmed or unsure where to start, you don't have to face it alone. I'm here to help you find your way forward 🤍
                </p>

                {/* Contact Buttons */}
                <div className="flex flex-col gap-3 pt-2">
                  <Button 
                    size="sm" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => openBooking("Free Consultation with Sam")}
                  >
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Free Consultation
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="w-full border-primary text-primary hover:bg-primary/10 bg-transparent"
                    asChild
                  >
                    <a href="tel:+27719006298">
                      <Phone className="mr-2 h-4 w-4" />
                      071 900 6298
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Kadene */}
          <Card className="border-2 border-[#FFD93D]/30 hover:border-[#FFD93D] transition-all hover:shadow-2xl group">
            <CardContent className="p-8">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-[#FFD93D] to-[#FFD93D]/60">
                {!imageErrors["kadene"] ? (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Kadene%20Jacobs-gtl6PDjLWsApKD4RP4tDYTUGZwPzIm.jpeg"
                    alt="Kadene Jacobs - DCSA Administrative Assistant"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError("kadene")}
                  />
                ) : (
                  <AvatarFallback initials="KJ" color="bg-gradient-to-br from-[#FFD93D] to-[#FFD93D]/60" />
                )}
              </div>
              
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#FFD93D]/20 px-3 py-1 rounded-full">
                  <Heart className="w-4 h-4 text-[#FFD93D]" />
                  <span className="text-xs font-semibold text-[#0D3B66]">The Heart of Our Admin Team</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0D3B66]">Kadene Jacobs</h3>
                
                <p className="text-[#0D3B66]/80 leading-relaxed text-sm space-y-3">
                  <p>If you've ever felt heard, reassured, or gently guided through our process — that's probably Kadene.</p>
                  
                  <p>She is the calm behind the scenes and the steady hand keeping everything moving. Kadene goes above and beyond for every client, not because she has to — but because she genuinely cares.</p>
                  
                  <p>From paperwork to follow-ups, from small questions to big worries, she treats every situation with patience and respect.</p>
                  
                  <p className="text-[#0D3B66] font-medium">She's not just admin. She's the heart that keeps everything flowing.</p>
                </p>

                <div className="pt-4 space-y-2 text-sm text-[#0D3B66]/70">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FFD93D] rounded-full"></div>
                    <span>Problem solver extraordinaire</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FFD93D] rounded-full"></div>
                    <span>Always finds a way to help</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FFD93D] rounded-full"></div>
                    <span>Makes everyone feel like family</span>
                  </div>
                </div>

                <p className="text-sm italic text-[#0D3B66]/60 pt-4 border-t border-[#FFD93D]/20">
                  "I'm here to make this journey as smooth as possible for you - because everyone deserves compassion when they're stressed."
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Cindy Killian - Attorney */}
          <Card className="border-2 border-[#FF6B6B]/30 hover:border-[#FF6B6B] transition-all hover:shadow-2xl group">
            <CardContent className="p-8">
              <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-gradient-to-br from-[#FF6B6B] to-[#FF6B6B]/60">
                {!imageErrors["cindy"] ? (
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Cindy%20Killian-H5SA90sGvX975cC1R1tExeeR8Szl2X.jpeg"
                    alt="Cindy Killian - Attorney & Acting Magistrate"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    onError={() => handleImageError("cindy")}
                  />
                ) : (
                  <AvatarFallback initials="CK" color="bg-gradient-to-br from-[#FF6B6B] to-[#FF6B6B]/60" />
                )}
              </div>
              
              <div className="text-center space-y-3">
                <div className="inline-flex items-center gap-2 bg-[#FF6B6B]/10 px-3 py-1 rounded-full">
                  <Sparkles className="w-4 h-4 text-[#FF6B6B]" />
                  <span className="text-xs font-semibold text-[#FF6B6B]">Attorney | Acting Magistrate</span>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0D3B66]">Cindy Killian</h3>
                
                <p className="text-[#0D3B66]/80 leading-relaxed text-sm space-y-3">
                  <p>Cindy from Cindy Killian Attorneys is our trusted legal partner — and a powerhouse in her field.</p>
                  
                  <p>With extensive experience in debt law, criminal law, family disputes, divorce matters, and broader litigation, she brings depth, authority, and clarity to every legal process connected to our work.</p>
                  
                  <p>She is also currently serving as an Acting Magistrate, which speaks to both her expertise and professional standing.</p>
                  
                  <p className="text-[#0D3B66] font-medium">When legal protection matters — you want someone who understands the system from every angle. Cindy does.</p>
                </p>

                <div className="pt-4 space-y-2 text-sm text-[#0D3B66]/70">
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                    <span>Handles all DCSA court matters</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                    <span>Real-world experience, not just theory</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <div className="w-2 h-2 bg-[#FF6B6B] rounded-full"></div>
                    <span>Fights for you with heart & skill</span>
                  </div>
                </div>

                <p className="text-sm italic text-[#0D3B66]/60 pt-4 border-t border-[#FF6B6B]/20">
                  "I'm not just an attorney - I'm a human who's faced challenges too. Ek's net 'n mens."
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#0D3B66]/70 max-w-2xl mx-auto">
            We're not a faceless corporation - we're a small team of real people who genuinely care about your financial wellbeing. 
            When you work with <span className="text-primary font-semibold">DC</span><span className="text-black font-semibold">SA</span>, you're family.
          </p>
        </div>
      </div>
    </section>
    </>
  )
}
