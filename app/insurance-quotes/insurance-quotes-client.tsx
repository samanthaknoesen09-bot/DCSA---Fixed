"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { 
  Shield, 
  Car, 
  Home, 
  CheckCircle, 
  ExternalLink,
  ArrowRight,
  Clock,
  DollarSign
} from "lucide-react"

export function InsuranceQuotesClient() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-gradient-to-br from-[#0D3B66]/5 to-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0D3B66] mb-6 text-balance">
              Compare Insurance Quotes
            </h1>
            <p className="text-lg text-[#0D3B66]/70 mb-4 text-pretty leading-relaxed max-w-2xl mx-auto">
              If you're reviewing your monthly costs, insurance is a smart place to check. 
              Compare quotes from trusted South African providers.
            </p>
            <p className="text-base text-[#0D3B66]/60 mb-8">
              No pressure — just compare.
            </p>
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Auto & General Card */}
              <Card className="border-2 hover:border-[#4DB6AC] transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6 h-20">
                    <Image
                      src="/images/auto-general-logo.png"
                      alt="Auto & General"
                      width={200}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-4 text-center">
                    Auto & General
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Comprehensive car insurance</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Home & building insurance</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Household contents cover</span>
                    </li>
                  </ul>
                  
                  <Link href="/insurance-quotes/auto-and-general">
                    <Button className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white" size="lg">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <a 
                    href="/go/auto-and-general" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 block"
                  >
                    <Button variant="outline" className="w-full" size="lg">
                      Get a Quote
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>

              {/* 1st for Women Card */}
              <Card className="border-2 hover:border-[#4DB6AC] transition-all hover:shadow-lg">
                <CardContent className="p-8">
                  <div className="flex items-center justify-center mb-6 h-20">
                    <Image
                      src="/images/first-for-women-logo.png"
                      alt="1st for Women"
                      width={200}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold text-[#0D3B66] mb-4 text-center">
                    1st for Women
                  </h3>
                  
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Comprehensive car insurance</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Home & building insurance</span>
                    </li>
                    <li className="flex items-start gap-2 text-[#0D3B66]/70">
                      <CheckCircle className="h-5 w-5 text-[#4DB6AC] flex-shrink-0 mt-0.5" />
                      <span>Household contents cover</span>
                    </li>
                  </ul>
                  
                  <Link href="/insurance-quotes/first-for-women">
                    <Button className="w-full bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white" size="lg">
                      Learn More
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  
                  <a 
                    href="/go/first-for-women" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="mt-3 block"
                  >
                    <Button variant="outline" className="w-full" size="lg">
                      Get a Quote
                      <ExternalLink className="ml-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 px-4 bg-[#F8F9FA]">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D3B66] mb-8 text-center">
              Why Compare Insurance Quotes?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-[#4DB6AC]" />
                </div>
                <h3 className="font-bold text-[#0D3B66] mb-2">Save Money</h3>
                <p className="text-sm text-[#0D3B66]/70">
                  Comparing quotes helps you find competitive rates that fit your budget.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-[#4DB6AC]" />
                </div>
                <h3 className="font-bold text-[#0D3B66] mb-2">Quick & Easy</h3>
                <p className="text-sm text-[#0D3B66]/70">
                  Get quotes in minutes. No long forms or complicated processes.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-[#4DB6AC]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-[#4DB6AC]" />
                </div>
                <h3 className="font-bold text-[#0D3B66] mb-2">Trusted Providers</h3>
                <p className="text-sm text-[#0D3B66]/70">
                  Compare quotes from established, reputable South African insurers.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-bold text-[#0D3B66] mb-8 text-center">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  How do I compare insurance quotes in South Africa?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  You can compare insurance quotes by visiting trusted providers like Auto & General and 1st for Women. 
                  Get multiple quotes to find the best rates for your car, home, or household insurance needs.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  What types of insurance can I get quotes for?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  You can get quotes for car insurance (comprehensive and third party), home insurance, 
                  household contents insurance, and building insurance from trusted South African providers.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  Is it free to get an insurance quote?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  Yes, getting insurance quotes is completely free. There's no obligation to purchase, 
                  and you can compare multiple quotes to find the best option for your budget.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  How quickly can I get an insurance quote?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  Most insurance providers in South Africa can provide quotes within minutes. 
                  Online quote forms are quick and easy to complete.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  What information do I need to get a car insurance quote?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  To get a car insurance quote, you typically need your vehicle details (make, model, year), 
                  driver information, ID number, and details about how you use the vehicle.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-[#0D3B66] mb-2">
                  Can I get insurance if I'm under debt review?
                </h3>
                <p className="text-[#0D3B66]/70 leading-relaxed">
                  Yes, you can still get insurance while under debt review. Insurance is a necessity, not a luxury, 
                  and providers understand this. Contact providers directly to discuss your situation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Back to DCSA */}
        <section className="py-12 px-4 bg-[#0D3B66] text-white">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Managing Your Monthly Costs?
            </h2>
            <p className="text-lg text-white/80 mb-6 text-pretty leading-relaxed">
              If insurance premiums are part of your debt struggles, DCSA can help you understand your options.
            </p>
            <Link href="/">
              <Button size="lg" className="bg-[#4DB6AC] hover:bg-[#4DB6AC]/90 text-white">
                Explore Debt Counselling
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
}
