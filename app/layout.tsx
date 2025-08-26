import type React from "react"
import "@/app/globals.css"
import { Outfit } from "next/font/google"

import { ThemeProvider } from "@/components/theme-provider"

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
})

export const metadata = {
  title: "Sinovia Mayfield - Project Manager, Digital Strategist, Civic Creative | Little Rock, AR",
  description:
    "Sinovia Mayfield is a PMP-certified Project Manager and Digital Strategist based in Little Rock, Arkansas. Leading high-impact projects at Mighty Citizen and driving community change through Rocktown Realness.",
  keywords:
    "project manager, digital strategist, PMP certified, Little Rock Arkansas, civic engagement, web design, Mighty Citizen, community organizing, project management consultant, digital transformation specialist",
  authors: [{ name: "Sinovia Mayfield" }],
  creator: "Sinovia Mayfield",
  metadataBase: new URL("https://sinoviamayfield.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sinovia Mayfield - Project Manager & Digital Strategist",
    description:
      "Connector of people, pixels, and purpose. Leading digital transformations and community-centered change in Little Rock, Arkansas.",
    url: "https://sinoviamayfield.com",
    siteName: "Sinovia Mayfield Portfolio",
    images: [
      {
        url: "/images/sinovia-headshot.jpg",
        width: 1200,
        height: 630,
        alt: "Sinovia Mayfield - Project Manager and Digital Strategist",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sinovia Mayfield - Project Manager & Digital Strategist",
    description: "Connector of people, pixels, and purpose in Little Rock, Arkansas",
    images: ["/images/sinovia-headshot.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual verification code
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://sinoviamayfield.com" />
        <meta name="geo.region" content="US-AR" />
        <meta name="geo.placename" content="Little Rock" />
        <meta name="geo.position" content="34.7465;-92.2896" />
        <meta name="ICBM" content="34.7465, -92.2896" />
      </head>
      <body className={`${outfit.variable} font-outfit`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
