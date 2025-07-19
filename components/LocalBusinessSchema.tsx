'use client';

export default function LocalBusinessSchema() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Fakultet informacijskih tehnologija Mostar",
    "alternateName": "FIT Mostar",
    "description": "Fakultet informacijskih tehnologija 'Džemal Bijedić' Univerziteta u Mostaru",
    "url": "https://fit.ba",
    "logo": "https://fit.ba/images/logo.png",
    "image": "https://fit.ba/images/fit1.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Univerzitetski kampus",
      "addressLocality": "Mostar",
      "addressRegion": "Hercegovačko-neretvanski kanton",
      "addressCountry": "BA",
      "postalCode": "88000"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+387-36-570-000",
        "contactType": "customer service",
        "availableLanguage": ["Bosnian", "English"],
        "areaServed": "BA"
      },
      {
        "@type": "ContactPoint",
        "telephone": "+387-36-570-001",
        "contactType": "admissions",
        "availableLanguage": ["Bosnian", "English"],
        "areaServed": "BA"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.3438,
      "longitude": 17.8078
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday", 
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "sameAs": [
      "https://www.facebook.com/fitmostar",
      "https://www.linkedin.com/school/fit-mostar",
      "https://twitter.com/fitmostar"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Bosnia and Herzegovina"
    },
    "serviceArea": {
      "@type": "Country",
      "name": "Bosnia and Herzegovina"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Studijski programi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Razvoj softvera",
            "description": "Prvi ciklus studija - 3 godine, 180 ECTS",
            "provider": {
              "@type": "Organization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Softverski inženjering",
            "description": "Prvi ciklus studija - 4 godine, 240 ECTS",
            "provider": {
              "@type": "Organization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Jednogodišnji master",
            "description": "Drugi ciklus studija - 1 godina, 60 ECTS",
            "provider": {
              "@type": "Organization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Dvogodišnji master",
            "description": "Drugi ciklus studija - 2 godine, 120 ECTS",
            "provider": {
              "@type": "Organization",
              "name": "Fakultet informacijskih tehnologija Mostar"
            }
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Student FIT-a"
        },
        "reviewBody": "Odličan fakultet s modernim pristupom nastavi i kvalitetnim programima."
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema),
      }}
    />
  );
} 