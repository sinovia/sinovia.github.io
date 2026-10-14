const ideas = [
  {
    title: "Care Is a Practice, Not a Moment.",
    body: "A compelling story can inspire people. Sustained care requires coordination, funding, relationships, and follow-through.",
  },
  {
    title: "Communities Have Value Before Someone Decides to Invest in Them.",
    body: "Our neighbors, local businesses, institutions, history, and relationships are already contributing to the places we call home. Community investment should recognize and strengthen that value.",
  },
  {
    title: "Civic Participation Requires Civic Literacy.",
    body: "People deserve to understand how decisions are made, who makes them, and how to meaningfully participate.",
  },
  {
    title: "Joy Is Civic Strategy.",
    body: "People deserve more than opportunities to survive in their communities. They deserve opportunities to enjoy them, build relationships, and feel like they belong.",
  },
]

const finalIdea = {
  title: "Resourcefulness Is Not a Substitute for Resourcing.",
  body: "We can celebrate the creativity and resilience of communities without expecting them to sustain important work on limited resources indefinitely.",
}

export function FwgIdeas() {
  return (
    <section id="ideas" aria-labelledby="ideas-heading" className="scroll-mt-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4">
          <h2 id="ideas-heading" className="text-3xl font-bold text-brand-purple md:text-4xl">
            A Few Ideas I Hope Stay With You
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed">
            Our panel explored how narrative change moves beyond communications and becomes visible in the choices we
            make, the resources we share, and the opportunities we create.
          </p>
          <p className="text-lg leading-relaxed">These are a few ideas that continue to guide my work.</p>
        </div>

        <ul className="flex flex-col">
          {ideas.map((idea) => (
            <li key={idea.title} className="flex flex-col gap-2 border-t border-brand-purple/15 py-7 md:flex-row md:gap-10">
              <h3 className="text-pretty text-xl font-semibold leading-snug text-[#2a1530] md:w-1/2 md:text-2xl">
                {idea.title}
              </h3>
              <p className="text-pretty leading-relaxed text-[#2a1530]/80 md:w-1/2">{idea.body}</p>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-4 border-t-4 border-brand-gold pt-8">
          <h3 className="text-balance text-3xl font-bold leading-tight text-brand-purple md:text-5xl">
            {finalIdea.title}
          </h3>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed">{finalIdea.body}</p>
        </div>
      </div>
    </section>
  )
}
