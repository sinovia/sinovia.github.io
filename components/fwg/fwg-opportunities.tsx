import { Mail } from "lucide-react"

const areas = [
  {
    title: "Flexible Community Investment",
    body: "Funding that supports direct community assistance, accessible experiences, and the ability to respond to needs without building a new program around every opportunity.",
  },
  {
    title: "Organizational Capacity",
    body: "People, systems, and operational support that help us coordinate programs, volunteers, partnerships, storytelling, and impact measurement.",
  },
  {
    title: "Strategic Relationships",
    body: "Connections with people and institutions interested in community-led innovation, civic infrastructure, narrative change, and sustainable local investment.",
  },
]

const mailto =
  "mailto:speak@rocktownrealness.com?subject=Continuing%20the%20Arkansas%20Learning%20Journey%20Conversation"

export function FwgOpportunities() {
  return (
    <section id="opportunities" aria-labelledby="opportunities-heading" className="scroll-mt-6 bg-[#f3eaf5]">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4">
          <h2 id="opportunities-heading" className="w-fit text-3xl font-bold text-gradient md:text-4xl">
            What Would Help Us Grow
          </h2>
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed md:text-lg">
            {"We\u2019re interested in relationships and investments that help strengthen the work we\u2019re already doing."}
          </p>
          <p className="text-[15px] leading-relaxed md:text-lg">Three areas are especially important.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {areas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col gap-3 rounded-xl border-2 border-transparent bg-white p-5 transition-all md:p-6 duration-300 hover:-translate-y-1 hover:border-brand-purple/20 hover:shadow-lg"
            >
              <span
                className="h-1 w-10 rounded-full bg-brand-gold transition-all duration-500 group-hover:w-16"
                aria-hidden="true"
              />
              <h3 className="text-xl font-semibold text-brand-purple">{area.title}</h3>
              <p className="text-[15px] leading-relaxed text-[#2a1530]/80 md:text-base">{area.body}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-6">
          <p className="max-w-3xl text-pretty text-[17px] font-medium leading-relaxed md:text-xl text-[#2a1530]">
            {
              "We\u2019re not looking to make everything bigger for the sake of growth. We\u2019re interested in making meaningful work more sustainable, accessible, and effective."
            }
          </p>
          <a
            href={mailto}
            className="btn-playful inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-purple px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#6a2874] sm:w-fit"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            {"Let\u2019s Explore What\u2019s Possible"}
          </a>
        </div>
      </div>
    </section>
  )
}
