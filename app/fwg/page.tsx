import type { Metadata } from "next"

import { FwgHero } from "@/components/fwg/fwg-hero"
import { FwgAbout } from "@/components/fwg/fwg-about"
import { FwgIdeas } from "@/components/fwg/fwg-ideas"
import { FwgMural } from "@/components/fwg/fwg-mural"
import { FwgWork } from "@/components/fwg/fwg-work"
import { FwgGrowth } from "@/components/fwg/fwg-growth"
import { FwgContact } from "@/components/fwg/fwg-contact"

const title = "Real Love for Little Rock | A Note for the Funders Working Group"
const description =
  "A note from Sinovia Mayfield to friends from the Funders Working Group's 2026 Arkansas Learning Journey: ideas on narrative, care, and community investment, and the work of Rocktown Realness."

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/fwg" },
  openGraph: {
    title,
    description,
    url: "https://sinoviamayfield.com/fwg",
    siteName: "Sinovia Mayfield",
    images: [{ url: "/images/sinovia-headshot.jpg", alt: "Sinovia Mayfield" }],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/images/sinovia-headshot.jpg"],
  },
}

export default function FwgPage() {
  return (
    <main className="min-h-screen bg-[#fbf8fc] text-[#2a1530]">
      <FwgHero />
      <FwgAbout />
      <FwgMural />
      <FwgIdeas />
      <FwgWork />
      <FwgGrowth />
      <FwgContact />
    </main>
  )
}
