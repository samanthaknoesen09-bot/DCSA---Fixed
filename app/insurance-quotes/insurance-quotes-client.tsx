"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { colors } from "@/lib/colors"
import { ArrowRight, Shield } from "lucide-react"

export function InsuranceQuotesClient() {
  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: colors.warmCream }}>
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4" style={{ backgroundColor: colors.white }}>
          <div className="container mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-6" style={{ backgroundColor: `${colors.maroon}15` }}>
              <Shield className="w-8 h-8" style={{ color: colors.maroon }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.charcoal }}>
              Compare Car Insurance Quotes
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto" style={{ color: colors.warmGrey }}>
              Get free, no-obligation quotes from trusted South African insurers. No pressure — just clear options.
            </p>
          </div>
        </section>

        {/* Partner Cards */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* First for Women */}
              <Card className="border-2 hover:shadow-xl transition-all" style={{ borderColor: colors.sandLight, borderRadius: "20px" }}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center items-center h-24 bg-white rounded-lg p-4">
                    <Image
                      src="/images/first-for-women-logo.png"
                      alt="First for Women Insurance"
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-center" style={{ color: colors.charcoal }}>
                      First for Women
                    </h3>
                    <p className="text-center text-pretty" style={{ color: colors.warmGrey }}>
                      Designed for women, by women. Trusted South African insurer with comprehensive cover options.
                    </p>
                  </div>
                  <Button
                    className="w-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    asChild
                  >
                    <Link href="/insurance-quotes/first-for-women">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              {/* Auto & General */}
              <Card className="border-2 hover:shadow-xl transition-all" style={{ borderColor: colors.sandLight, borderRadius: "20px" }}>
                <CardContent className="p-8 space-y-6">
                  <div className="flex justify-center items-center h-24 bg-white rounded-lg p-4">
                    <Image
                      src="/images/auto-and-general-logo.png"
                      alt="Auto & General Insurance"
                      width={200}
                      height={80}
                      className="object-contain"
                    />
                  </div>
                  <div className="space-y-3">
                    <h3 className="text-2xl font-bold text-center" style={{ color: colors.charcoal }}>
                      Auto & General
                    </h3>
                    <p className="text-center text-pretty" style={{ color: colors.warmGrey }}>
                      Affordable, straightforward car insurance from one of SA's most recognized brands.
                    </p>
                  </div>
                  <Button
                    className="w-full text-white font-semibold shadow-md hover:shadow-lg transition-all"
                    style={{ backgroundColor: colors.maroon, borderRadius: "12px" }}
                    asChild
                  >
                    <Link href="/insurance-quotes/auto-and-general">
                      Get a Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Info Box */}
            <div className="mt-12 p-6 rounded-xl" style={{ backgroundColor: colors.warmBeige }}>
              <p className="text-center text-sm" style={{ color: colors.warmGrey }}>
                <strong>Note:</strong> These quotes are provided by our insurance partners. DCSA helps with debt counselling — car insurance is just an optional extra service we offer to help you save where you can.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
