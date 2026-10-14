import type { Metadata } from "next"

import { FwgWelcome } from "@/components/fwg/fwg-welcome"
import { FwgAbout } from "@/components/fwg/fwg-about"
import { FwgRocktown } from "@/components/fwg/fwg-rocktown"
import { FwgIdeas } from "@/components/fwg/fwg-ideas"
import { FwgOpportunities } from "@/components/fwg/fwg-opportunities"
import { FwgContact } from "@/components/fwg/fwg-contact"
import { FwgReveal } from "@/components/fwg/fwg-reveal"

const title = "Arkansas Learning Journey 2026 | Sinovia Mayfield"
const description =
  "Continue the conversation with Sinovia Mayfield about Rocktown Realness, narrative change, community investment, civic infrastructure, and real love for Little Rock."
const ogImage = {
  url: "/images/lady-justice-mural.jpg",
  width: 2048,
  height: 719,
  alt: "Lady Justice mural by Joel Boyd showing the Little Rock skyline at sunset",
}

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "https://sinoviamayfield.com/fwg" },
  openGraph: {
    title,
    description,
    url: "https://sinoviamayfield.com/fwg",
    siteName: "Sinovia Mayfield",
    images: [ogImage],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [ogImage.url],
  },
}

export default function FwgPage() {
  return (
    <main className="fwg-motion min-h-screen [overflow-x:clip] bg-[#fbf8fc] font-outfit text-[#2a1530]">
      <FwgWelcome />
      <FwgReveal>
        <FwgAbout />
      </FwgReveal>
      <FwgReveal>
        <FwgRocktown />
      </FwgReveal>
      <FwgReveal>
        <FwgIdeas />
      </FwgReveal>
      <FwgReveal>
        <FwgOpportunities />
      </FwgReveal>
      <FwgReveal>
        <FwgContact />
      </FwgReveal>
    </main>
  )
}
