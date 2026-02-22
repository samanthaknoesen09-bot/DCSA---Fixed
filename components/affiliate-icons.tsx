"use client"

import Image from "next/image"

interface AffiliatePartner {
  name: string
  logo: string
  shortcode: string
  offerId: string
  sid: string
  title: string
  alt: string
}

const affiliatePartners: AffiliatePartner[] = [
  {
    name: "First for Women",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FFW_Horizontal_Logo.png-4iWA5aRAI4E5D4yawATMO5nUy0dg1Q.jpeg",
    shortcode: "JMAFFSite26159",
    offerId: "2311",
    sid: "26397",
    title: "First for Women Insurance",
    alt: "First for Women Insurance - women-focused insurance solutions and protection products",
  },
  {
    name: "Auto & General",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/auto-general-new-logo%20%281%29-vYRMIPexeVI34Dm8wDBMeHo4HHGp3P.png",
    shortcode: "JMAFFSite26160",
    offerId: "1539",
    sid: "26397",
    title: "Auto & General Insurance",
    alt: "Auto & General Insurance - vehicle and general insurance partner for South Africans",
  },
]

export interface AffiliateIconsProps {
  showLabels?: boolean
  gap?: string
  iconSize?: number
}

export function AffiliateIcons({ showLabels = false, gap = "gap-6", iconSize = 40 }: AffiliateIconsProps) {
  // Build consistent height class based on iconSize
  const getHeightClass = (size: number): string => {
    if (size <= 32) return "h-6"
    if (size <= 40) return "h-8"
    if (size <= 48) return "h-10"
    return "h-12"
  }

  const heightClass = getHeightClass(iconSize)

  return (
    <div className={`flex items-center ${gap} flex-wrap justify-center`}>
      {affiliatePartners.map((partner) => (
        <a
          key={partner.shortcode}
          href="https://www.leadbyte.co.uk"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-75 transition-opacity duration-200 group"
          title={`${partner.title} - Partner affiliate link`}
          aria-label={partner.title}
        >
          <div className="flex flex-col items-center gap-1">
            <Image
              src={partner.logo}
              alt={partner.alt}
              width={120}
              height={40}
              className={`${heightClass} w-auto object-contain group-hover:scale-105 transition-transform`}
              priority={false}
              loading="lazy"
            />
            {showLabels && <span className="text-xs text-center text-muted-foreground">{partner.name}</span>}
          </div>
        </a>
      ))}
    </div>
  )
}

export { affiliatePartners }
