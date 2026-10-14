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

export function FwgGrowth() {
  return (
    <section aria-labelledby="growth-heading" className="bg-white py-16 md:py-20">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-3">
          <h2 id="growth-heading" className="text-3xl font-bold text-brand-purple">
            What would help us grow
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed">
            {
              "We\u2019re interested in relationships and investments that help strengthen the work we\u2019re already doing. Three areas are especially important:"
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {areas.map((area) => (
            <div key={area.title} className="flex flex-col gap-3 border-t-4 border-brand-gold pt-5">
              <h3 className="text-xl font-semibold text-brand-purple">{area.title}</h3>
              <p className="leading-relaxed text-[#2a1530]/80">{area.body}</p>
            </div>
          ))}
        </div>

        <p className="max-w-3xl text-pretty text-xl font-medium leading-relaxed text-brand-purple">
          {
            "We\u2019re not looking to make everything bigger for the sake of growth. We\u2019re interested in making meaningful work more sustainable, accessible, and effective."
          }
        </p>
      </div>
    </section>
  )
}
