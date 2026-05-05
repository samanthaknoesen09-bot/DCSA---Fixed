import { colors } from "@/lib/colors"
import { Check } from "lucide-react"

const signs = [
  "Your salary is gone before month-end",
  "You dread checking your bank balance",
  "Debt collectors are calling you",
  "You use one credit card to pay another",
  "You can't sleep because of money stress",
  "You skip meals or cut back on basics",
  "You feel ashamed but don't know where to turn",
  "You just want someone to be honest with you",
]

export function IdentityStrip() {
  return (
    <section className="py-14 px-4" style={{ backgroundColor: colors.warmCream }}>
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ color: colors.charcoal }}>
            If any of this sounds like you &mdash; you&apos;re in the right place.
          </h2>
          <p className="text-base" style={{ color: colors.warmGrey }}>
            We help anyone who is struggling with debt, regardless of where you work or what you earn.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {signs.map((sign, index) => (
            <div
              key={index}
              className="flex items-start gap-3 px-4 py-3 rounded-xl"
              style={{ backgroundColor: colors.white }}
            >
              <div
                className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                style={{ backgroundColor: colors.maroon }}
              >
                <Check className="w-3 h-3" style={{ color: colors.white }} />
              </div>
              <span className="text-sm font-medium" style={{ color: colors.charcoal }}>
                {sign}
              </span>
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-sm font-semibold" style={{ color: colors.maroon }}>
          No judgment. No pressure. Just real help.
        </p>
      </div>
    </section>
  )
}
