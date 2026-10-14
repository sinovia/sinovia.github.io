import Image from "next/image"
import Link from "next/link"

export function FwgHero() {
  return (
    <header className="relative overflow-hidden bg-brand-purple text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 pb-16 pt-12 md:pb-24 md:pt-16">
        <nav aria-label="Site">
          <Link
            href="/"
            className="text-sm font-medium tracking-wide text-white/80 underline-offset-4 hover:text-white hover:underline"
          >
            sinoviamayfield.com
          </Link>
        </nav>

        <div className="flex flex-col gap-6">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-gold">
            A note for the Funders Working Group
          </p>
          <h1 className="text-balance text-4xl font-bold leading-tight md:text-6xl">
            Real Love for Little Rock. And a Conversation Worth Continuing.
          </h1>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {"A note to our friends from the Funders Working Group\u2019s 2026 Arkansas Learning Journey."}
          </p>
        </div>

        <div className="flex items-center gap-4 border-t border-white/20 pt-6">
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border-2 border-brand-gold">
            <Image
              src="/images/sinovia-headshot.jpg"
              alt="Sinovia Mayfield"
              fill
              sizes="56px"
              className="object-cover"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Sinovia Mayfield</span>
            <span className="text-sm text-white/75">Little Rock, Arkansas</span>
          </div>
        </div>
      </div>
    </header>
  )
}
