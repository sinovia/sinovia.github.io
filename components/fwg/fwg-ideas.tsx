const ideas = [
  {
    title: "Care is a practice, not a moment.",
    body: "A compelling story can inspire people. Sustained care requires coordination, funding, relationships, and follow-through.",
  },
  {
    title: "Communities have value before someone decides to invest in them.",
    body: "Our neighbors, local businesses, institutions, history, and relationships are already contributing to the places we call home. Community investment should recognize and strengthen that value.",
  },
  {
    title: "Civic participation requires civic literacy.",
    body: "People deserve to understand how decisions are made, who makes them, and how to meaningfully participate.",
  },
  {
    title: "Joy is civic strategy.",
    body: "People deserve more than opportunities to survive in their communities. They deserve opportunities to enjoy them, build relationships, and feel like they belong.",
  },
  {
    title: "Resourcefulness is not a substitute for resourcing.",
    body: "We can celebrate the creativity and resilience of communities without expecting them to sustain important work on limited resources indefinitely.",
  },
]

export function FwgIdeas() {
  return (
    <section aria-labelledby="ideas-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6">
        <h2 id="ideas-heading" className="text-3xl font-bold text-brand-purple">
          A few ideas I hope stay with you
        </h2>
        <ul className="flex flex-col">
          {ideas.map((idea) => (
            <li
              key={idea.title}
              className="flex flex-col gap-2 border-t border-brand-purple/15 py-7 md:flex-row md:gap-10"
            >
              <p className="text-pretty text-xl font-semibold leading-snug text-[#2a1530] md:w-1/2 md:text-2xl">
                <span className="bg-[linear-gradient(transparent_62%,rgba(255,183,35,0.45)_62%)]">{idea.title}</span>
              </p>
              <p className="text-pretty text-base leading-relaxed text-[#2a1530]/80 md:w-1/2">{idea.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
