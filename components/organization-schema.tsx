"use client"

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.dcsam.co.za/#organization",
        "name": "DCSA Debt Counsellors",
        "legalName": "DCSA Debt Counselling Services",
        "url": "https://www.dcsam.co.za",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.dcsam.co.za/icon-512.png",
          "width": 512,
          "height": 512
        },
        "description": "NCR registered debt counsellors providing professional debt relief, debt review, and credit repair services across South Africa. Over 12 years of experience helping South Africans achieve financial freedom.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "ZA",
          "addressRegion": "Eastern Cape",
          "addressLocality": "Gqeberha",
          "postalCode": "6001"
        },
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+27-71-900-6298",
            "contactType": "customer service",
            "areaServed": "ZA",
            "availableLanguage": ["English", "Afrikaans"]
          },
          {
            "@type": "ContactPoint",
            "email": "info@dcsam.co.za",
            "contactType": "customer service"
          }
        ],
        "sameAs": [
          "https://www.facebook.com/DebtClearDCSA"
        ],
        "founder": {
          "@type": "Person",
          "name": "Samantha Knoesen",
          "jobTitle": "Registered Debt Counsellor",
          "description": "NCR Registered Debt Counsellor with over 12 years of experience helping South Africans find financial freedom"
        },
        "areaServed": {
          "@type": "Country",
          "name": "South Africa"
        },
        "hasCredential": {
          "@type": "EducationalOccupationalCredential",
          "credentialCategory": "NCR Registration",
          "recognizedBy": {
            "@type": "Organization",
            "name": "National Credit Regulator",
            "sameAs": "https://www.ncr.org.za"
          },
          "identifier": "NCRDC3995"
        },
        "knowsAbout": [
          "Debt Counselling",
          "Debt Review",
          "Credit Repair",
          "Debt Management",
          "Financial Planning",
          "National Credit Act",
          "Consumer Protection"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Debt Review / Debt Counselling",
              "description": "Comprehensive debt review services under the National Credit Act. Immediate legal protection, reduced monthly payments, and structured debt repayment plans.",
              "provider": {
                "@id": "https://www.dcsam.co.za/#organization"
              },
              "areaServed": "ZA"
            },
            "priceSpecification": {
              "@type": "UnitPriceSpecification",
              "priceCurrency": "ZAR",
              "price": "50.00",
              "description": "Initial application fee - R50. Admin fee R300-R350. Restructuring fee (1st month payment or max R8000). Monthly aftercare 5% (max R450)."
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Credit Repair",
              "description": "Professional credit repair services to improve credit scores, remove incorrect listings, and restore financial reputation.",
              "provider": {
                "@id": "https://www.dcsam.co.za/#organization"
              },
              "areaServed": "ZA"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Free Debt Consultation",
              "description": "Complimentary initial consultation to assess your financial situation and recommend the best debt solution.",
              "provider": {
                "@id": "https://www.dcsam.co.za/#organization"
              },
              "areaServed": "ZA"
            },
            "price": "0",
            "priceCurrency": "ZAR"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.dcsam.co.za/#website",
        "url": "https://www.dcsam.co.za",
        "name": "DCSA Debt Counsellors",
        "description": "Professional debt counselling, debt review, and credit repair services in South Africa",
        "publisher": {
          "@id": "https://www.dcsam.co.za/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.dcsam.co.za/blog?search={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://www.dcsam.co.za/#service",
        "name": "DCSA Debt Counselling Services",
        "description": "NCR registered debt counselling providing immediate debt relief and legal protection. Specializing in debt review, credit repair, and financial rehabilitation across South Africa.",
        "provider": {
          "@id": "https://www.dcsam.co.za/#organization"
        },
        "serviceType": "Debt Counselling",
        "areaServed": {
          "@type": "Country",
          "name": "South Africa"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Debt Solutions",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Debt Review"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Credit Repair"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Debt Consolidation"
              }
            }
          ]
        }
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
