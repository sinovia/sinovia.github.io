import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const programs = [
  {
    name: "Feed Our Folks",
    body: "Community food support rooted in dignity and choice. Through groceries, prepared food, and redistribution partnerships, we connect available resources with neighbors who can use them.",
  },
  {
    name: "Community Storytelling",
    body: "Honest, community-centered storytelling that celebrates Little Rock while making room for the experiences, challenges, and contributions that deserve greater attention.",
  },
  {
    name: "Civic Access",
    body: "Making public information and decision-making processes easier to understand so neighbors can participate more meaningfully in the decisions affecting their lives.",
  },
  {
    name: "Joy & Belonging",
    body: "Accessible community experiences that create opportunities for neighbors to gather, celebrate, build relationships, and enjoy the place they call home.",
  },
]

export function FwgRocktown() {
  return (
    <section id="rocktown" aria-labelledby="rocktown-heading" className="scroll-mt-6 bg-[#f3eaf5]">
      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-16 md:px-10 md:py-20 lg:px-16">
        <div className="flex flex-col gap-8 md:flex-row-reverse md:items-center md:justify-between md:gap-12">
          <div className="relative w-28 shrink-0 sm:w-36 md:w-48 lg:w-56">
            <div
              className="absolute -inset-2 rounded-full border-2 border-dashed border-brand-gold/60 animate-spin-slow md:-inset-3"
              aria-hidden="true"
            />
            <div className="relative aspect-square overflow-hidden rounded-full shadow-playful animate-float">
              <Image
                src="/images/rocktown-realness-logo.png"
                alt="Rocktown Realness logo: a raised fist holding a sunflower inside a purple circle"
                fill
                sizes="(min-width: 1024px) 224px, (min-width: 768px) 192px, (min-width: 640px) 144px, 112px"
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <h2 id="rocktown-heading" className="text-balance text-3xl font-bold text-gradient md:text-4xl">
              {"What We\u2019re Building Through Rocktown Realness"}
            </h2>
          <div className="flex max-w-3xl flex-col gap-4 text-[15px] leading-relaxed md:text-lg">
            <p>
              Rocktown Realness turns community connection into practical action through storytelling, direct support,
              civic engagement, and shared experiences.
            </p>
            <p>
              {
                "Our work is grounded in the belief that Little Rock is rich in people, talent, resources, relationships, and possibilities. We\u2019re interested in building the capacity to connect those things in ways that make life better for our neighbors."
              }
            </p>
          </div>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {programs.map((program) => (
            <li
                key={program.name}
                className="flex flex-col gap-2 rounded-xl border-2 border-transparent bg-white p-5 transition-all md:p-6 duration-300 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-lg"
              >
              <h3 className="text-lg font-semibold text-brand-purple">{program.name}</h3>
              <p className="text-[15px] leading-relaxed text-[#2a1530]/80 md:text-base">{program.body}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-5 rounded-xl bg-brand-gold p-5 text-[#2a1530] md:p-10">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em]">Feed Our Folks: impact snapshot</h3>
          <dl className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex flex-col-reverse gap-1 sm:w-1/2">
              <dt className="leading-relaxed">
                grocery orders analyzed to better understand the everyday essentials neighbors request
              </dt>
              <dd className="text-5xl font-bold">154</dd>
            </div>
            <div className="flex flex-col-reverse gap-1 sm:w-1/2">
              <dt className="leading-relaxed">
                pounds of additional food redistributed through Potluck Food Rescue (approximate)
              </dt>
              <dd className="text-5xl font-bold">~2,500</dd>
            </div>
          </dl>
        </div>

        <div className="flex flex-col gap-6">
          <p className="max-w-3xl text-pretty text-[15px] leading-relaxed md:text-lg">
            {
              "We\u2019re proud of what\u2019s possible through practical coordination and community generosity. And we\u2019re equally interested in what becomes possible when that work is sustainably resourced."
            }
          </p>
          <a
            href="https://rocktownrealness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-playful inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#6a2874] sm:w-fit"
          >
            Explore Rocktown Realness
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </div>
    </section>
  )
}
