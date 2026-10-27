import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { COMPANY_CONFIG } from "@/data/companyConfig";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://monarchfabrication.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MONARCH FABRICATION | Precision Steel, MS & Aluminium Fabrication",
    template: "%s | MONARCH FABRICATION",
  },
  description:
    "Custom steel, mild steel (MS), and aluminium fabrication for residential, commercial, and industrial projects. Balcony railings, steel stairs, gates, aluminium windows, and bespoke metalwork.",
  keywords: [
    "Monarch Fabrication",
    "Steel fabrication",
    "MS fabrication",
    "Stainless steel fabrication",
    "Stainless steel railings",
    "MS stairs",
    "Steel staircases",
    "MS gates and grills",
    "Aluminium windows",
    "Aluminium partitions",
    "Invisible safety grills",
    "Mosquito mesh",
    "AC outdoor cages",
    "Architectural metalwork",
  ],
  authors: [{ name: "Monarch Fabrication" }],
  creator: "Monarch Fabrication",
  publisher: "Monarch Fabrication",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "MONARCH FABRICATION | Precision Metalwork & Fabrication",
    description:
      "We Will Make Whatever You Think.. Precision fabrication in Stainless Steel, Mild Steel, and Aluminium for homes, buildings, and industrial plants.",
    url: siteUrl,
    siteName: "MONARCH FABRICATION",
    images: [
      {
        url: "/images/logo.png",
        width: 800,
        height: 800,
        alt: "Monarch Fabrication Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MONARCH FABRICATION | Precision Steel & Aluminium Fabrication",
    description:
      "Custom MS, SS, and Aluminium fabrication solutions. Railings, stairs, gates, windows, and architectural metalwork.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_CONFIG.name,
    image: `${siteUrl}/images/logo.png`,
    description: COMPANY_CONFIG.description,
    telephone: COMPANY_CONFIG.contact.phone,
    email: COMPANY_CONFIG.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_CONFIG.contact.address.street,
      addressLocality: COMPANY_CONFIG.contact.address.city,
      addressRegion: COMPANY_CONFIG.contact.address.state,
      postalCode: COMPANY_CONFIG.contact.address.postalCode,
      addressCountry: COMPANY_CONFIG.contact.address.country,
    },
    hasMap: COMPANY_CONFIG.contact.mapDirectionsUrl,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 21.2237915,
      longitude: 72.9231988,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "09:00",
        closes: "19:30",
      },
    ],
    priceRange: "$$",
    url: siteUrl,
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        {/* Google AdSense Verification Script */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1539263458228927"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#060a14] text-slate-200">
        {children}
      </body>
    </html>
  );
}
