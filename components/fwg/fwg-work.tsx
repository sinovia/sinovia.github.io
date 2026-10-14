import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const programs = [
  {
    name: "Feed Our Folks",
    body: "Groceries, prepared food, and food redistribution rooted in dignity and choice.",
  },
  {
    name: "Community Storytelling",
    body: "Elevating local experiences, including those of ALICE households, without reducing people to their hardships.",
  },
  {
    name: "Civic Access",
    body: "Making local information and decision-making processes easier to understand.",
  },
  {
    name: "Joy & Belonging",
    body: "Creating accessible opportunities for families and neighbors to gather, celebrate, and connect.",
  },
]

export function FwgWork() {
  return (
    <section aria-labelledby="work-heading" className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-10">
        <div className="flex items-start gap-4">
          <Image
            src="/images/rocktown-realness-logo.png"
            alt=""
            width={48}
            height={48}
            className="mt-1 shrink-0"
          />
          <div className="flex flex-col gap-3">
            <h2 id="work-heading" className="text-3xl font-bold text-brand-purple">
              {"What we\u2019re building through Rocktown Realness"}
            </h2>
            <p className="max-w-2xl text-pretty text-lg leading-relaxed">
              Rocktown Realness turns community connection into practical action through storytelling, direct support,
              civic engagement, and shared experiences.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">Our work includes</h3>
          <ul className="grid gap-4 sm:grid-cols-2">
            {programs.map((program) => (
              <li key={program.name} className="flex flex-col gap-2 rounded-lg border border-brand-purple/15 bg-white p-6">
                <span className="text-lg font-semibold text-brand-purple">{program.name}</span>
                <span className="leading-relaxed text-[#2a1530]/80">{program.body}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6 rounded-lg bg-brand-gold p-8 text-[#2a1530] md:p-10">
          <dl className="flex flex-col gap-6 sm:flex-row sm:gap-12">
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-sm font-medium leading-relaxed">grocery orders analyzed through Feed Our Folks</dt>
              <dd className="text-5xl font-bold">93</dd>
            </div>
            <div className="flex flex-col-reverse gap-1">
              <dt className="text-sm font-medium leading-relaxed">
                pounds of additional food redistributed with Potluck Food Rescue
              </dt>
              <dd className="text-5xl font-bold">~1,500</dd>
            </div>
          </dl>
          <p className="max-w-2xl text-pretty leading-relaxed">
            {
              "We\u2019re proud of what\u2019s possible through practical coordination and community generosity. And we\u2019re equally interested in what becomes possible when that work is sustainably resourced."
            }
          </p>
          <a
            href="https://rocktownrealness.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-brand-purple px-5 py-3 font-semibold text-white transition-colors hover:bg-brand-purple/90"
          >
            Explore the work at rocktownrealness.com
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
