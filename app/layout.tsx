import type { Metadata, Viewport } from "next";
import { Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";
import Analytics from "./analytics";
import PerformanceOptimizer from "../components/PerformanceOptimizer";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fakultet informacijskih tehnologija Mostar | FIT",
    template: "%s | Fakultet informacijskih tehnologija Mostar"
  },
  description: "Fakultet informacijskih tehnologija 'Džemal Bijedić' Univerziteta u Mostaru. Studij programi: Razvoj softvera, Softverski inženjering, Master studiji. Upis, cijene studija, konsultacije.",
  keywords: [
    "fakultet informacijskih tehnologija",
    "FIT Mostar",
    "studij informatike",
    "razvoj softvera",
    "softverski inženjering",
    "master studij",
    "upis fakultet",
    "cijene studija",
    "konsultacije",
    "mostar",
    "bosna i hercegovina",
    "univerzitet",
    "informatika",
    "programiranje",
    "baze podataka",
    "web razvoj",
    "artificial intelligence",
    "cloud computing"
  ],
  authors: [{ name: "Fakultet informacijskih tehnologija Mostar" }],
  creator: "Fakultet informacijskih tehnologija Mostar",
  publisher: "Fakultet informacijskih tehnologija Mostar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://fit.ba'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'bs_BA',
    url: 'https://fit.ba',
    siteName: 'Fakultet informacijskih tehnologija Mostar',
    title: 'Fakultet informacijskih tehnologija Mostar | FIT',
    description: 'Fakultet informacijskih tehnologija u Mostaru - studij programi, upis, konsultacije',
    images: [
      {
        url: '/images/logo.png',
        width: 1200,
        height: 630,
        alt: 'Fakultet informacijskih tehnologija Mostar',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fakultet informacijskih tehnologija Mostar | FIT',
    description: 'Fakultet informacijskih tehnologija u Mostaru - studij programi, upis, konsultacije',
    images: ['/images/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Fakultet informacijskih tehnologija Mostar",
    "alternateName": "FIT Mostar",
    "description": "Fakultet informacijskih tehnologija 'Džemal Bijedić' Univerziteta u Mostaru",
    "url": "https://fit.ba",
    "logo": "https://fit.ba/images/logo-bijeli.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Univerzitetski kampus",
      "addressLocality": "Mostar",
      "addressRegion": "Hercegovačko-neretvanski kanton",
      "addressCountry": "BA",
      "postalCode": "88000"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+387-36-570-000",
      "contactType": "customer service",
      "availableLanguage": ["Bosnian", "English"]
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 43.3438,
      "longitude": 17.8078
    },
    "sameAs": [
      "https://www.facebook.com/fitmostar",
      "https://www.linkedin.com/school/fit-mostar"
    ],
    "department": [
      {
        "@type": "Organization",
        "name": "Studijski program Razvoj softvera"
      },
      {
        "@type": "Organization", 
        "name": "Studijski program Softverski inženjering"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Studijski programi",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Razvoj softvera",
            "description": "Prvi ciklus studija - 3 godine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Softverski inženjering",
            "description": "Prvi ciklus studija - 4 godine"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Jednogodišnji master",
            "description": "Drugi ciklus studija - 1 godina"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Dvogodišnji master",
            "description": "Drugi ciklus studija - 2 godine"
          }
        }
      ]
    }
  };

  return (
    <html lang="bs">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${manrope.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <PerformanceOptimizer />
      </body>
    </html>
  );
}
