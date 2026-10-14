import Image from "next/image"
import Link from "next/link"
import { MapPin, Sparkles, Star } from "lucide-react"

import { FwgQuickLinks } from "@/components/fwg/fwg-quick-links"
import { FwgYourStory } from "@/components/fwg/fwg-your-story"

export function FwgWelcome() {
  return (
    <section
      id="welcome"
      aria-labelledby="welcome-heading"
      className="relative scroll-mt-6 overflow-hidden bg-gradient-to-b from-purple-50 to-[#fbf8fc]"
    >
      <div
        className="absolute right-20 top-24 hidden h-16 w-16 rounded-full bg-brand-gold/20 animate-pulse-slow md:block"
        aria-hidden="true"
      />
      <div
        className="absolute left-12 top-[28rem] hidden h-24 w-24 rounded-full bg-brand-purple/10 animate-pulse-slow animation-delay-1000 md:block"
        aria-hidden="true"
      />

      <div className="relative mx-auto flex max-w-4xl flex-col gap-7 px-6 pb-10 pt-8 md:gap-10 md:pb-14 md:pt-10">
        <nav aria-label="Site" className="opacity-0 animate-fade-in-up">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-brand-purple underline-offset-4 hover:underline"
          >
            sinoviamayfield.com
          </Link>
        </nav>

        <div className="flex flex-col gap-6 opacity-0 animate-fade-in-up animation-delay-200">
          <p className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">
            <MapPin className="h-4 w-4 text-brand-gold animate-float" aria-hidden="true" />
            {"Arkansas Learning Journey \u00b7 October 2026"}
          </p>
          <h1 id="welcome-heading" className="text-balance text-4xl font-bold leading-tight text-[#2a1530] md:text-6xl">
            Real Love for Little Rock.{" "}
            <span className="text-gradient">A Conversation Worth Continuing.</span>
          </h1>
        </div>

        <div className="flex max-w-2xl flex-col gap-4 text-[15px] leading-relaxed opacity-0 animate-fade-in-up animation-delay-400 md:gap-5 md:text-lg">
          <p className="flex items-center gap-2 text-lg font-semibold text-brand-purple md:text-xl">
            Thank you for spending time in Little Rock!
            <Sparkles className="h-5 w-5 shrink-0 text-brand-gold animate-pulse-slow" aria-hidden="true" />
          </p>
          <p>
            {"I\u2019m Sinovia Mayfield, a digital transformation leader, civic creative, and the human behind Rocktown Realness."}
          </p>
          <p>
            It was a pleasure participating in{" "}
            <em className="font-medium">Fueling the Narrative: Changing the Story to Change the Future</em>.{" "}
            {
              "I\u2019m grateful for the opportunity to share some of our work, offer a local perspective, and learn from people thinking deeply about narrative, power, and community investment."
            }
          </p>
          <p>I hope our conversation continues well beyond your visit.</p>
        </div>

        <div className="opacity-0 animate-fade-in-up animation-delay-600">
          <FwgQuickLinks />
        </div>
      </div>

      <div className="mb-14 opacity-0 animate-fade-in-up animation-delay-800 md:mb-20">
        <FwgYourStory />
      </div>

      <figure className="relative mx-auto flex max-w-6xl flex-col opacity-0 animate-fade-in-up animation-delay-800 md:px-6">
        <div className="relative">
          <div className="relative aspect-[2048/719] w-full overflow-hidden md:rounded-xl md:shadow-playful">
            <Image
              src="/images/lady-justice-mural.jpg"
              alt="Mural of Lady Justice in silhouette, raising balanced scales in front of the Little Rock skyline, the Arkansas State Capitol, and a river bridge under a pink and purple sunset"
              fill
              priority
              sizes="(max-width: 1152px) 100vw, 1104px"
              className="object-contain"
            />
          </div>
          <Star
            className="absolute -top-3 right-4 hidden h-6 w-6 fill-brand-gold text-brand-gold animate-pulse-slow md:block"
            aria-hidden="true"
          />
        </div>
        <figcaption className="px-6 pt-5 text-sm leading-relaxed text-[#2a1530]/70 md:px-0">
          <span className="font-semibold text-brand-purple">Lady Justice</span> mural by Joel Boyd, UA Little Rock
          William H. Bowen School of Law.
        </figcaption>
      </figure>
      <div className="pb-14 md:pb-20" aria-hidden="true" />
    </section>
  )
}
