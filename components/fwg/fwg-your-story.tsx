export function FwgYourStory() {
  return (
    <section id="your-story" aria-labelledby="your-story-heading" className="relative scroll-mt-6 overflow-hidden bg-brand-purple text-white">
      <div
        className="absolute -right-6 top-16 hidden h-24 w-24 rounded-full bg-brand-gold/15 animate-pulse-slow md:block"
        aria-hidden="true"
      />
      <div
        className="absolute -left-8 bottom-24 hidden h-32 w-32 rounded-full bg-white/5 animate-pulse-slow animation-delay-1000 md:block"
        aria-hidden="true"
      />
      <div className="relative mx-auto flex max-w-5xl flex-col gap-6 px-6 py-20 md:px-10 text-[15px] leading-relaxed md:py-28 md:text-lg">
        <h2 id="your-story-heading" className="text-balance pb-4 text-4xl font-bold leading-tight md:text-5xl">
          Now You Have a Little Rock Story, <span className="text-brand-gold">Too.</span>
        </h2>
        <p className="text-white/90">
          {
            "One of the things I hope you take away from your time in Arkansas is a fuller, more complete understanding of the people and places you\u2019ve encountered."
          }
        </p>
        <p className="text-white/90">
          {
            "Our communities are often introduced through statistics, headlines, political narratives, and the challenges we\u2019re working to overcome. Those realities matter, but they are not the whole story."
          }
        </p>
        <p className="text-white/90">
          {
            "Now you\u2019ve had the opportunity to experience a little more of that story firsthand. You\u2019ve met people doing meaningful work, heard perspectives that might not otherwise reach you, and seen some of the relationships and possibilities that exist here."
          }
        </p>

        <div className="my-4 flex flex-col gap-4 border-l-4 border-brand-gold pl-5 md:my-6 md:pl-6">
          <p className="text-pretty text-2xl font-semibold leading-snug text-brand-gold md:text-3xl">
            You now have the opportunity to help tell a more complete story about Little Rock and Arkansas.
          </p>
          <p className="text-[17px] font-medium md:text-xl">
            {"Not by speaking for us, but by carrying what you\u2019ve learned into the conversations, institutions, and decisions you influence."}
          </p>
        </div>

        <p className="text-white/90">
          Share the work that impressed you. Remember the people you met. Challenge assumptions when you encounter them.
          Make introductions. Bring Arkansas into conversations where our communities might otherwise be overlooked.
        </p>
        <p className="text-white/90">
          {
            "And when you talk about Little Rock, I hope you\u2019ll remember that we\u2019re more than our challenges, and more than the resilience we\u2019re so often celebrated for demonstrating."
          }
        </p>
        <p className="text-pretty text-2xl font-semibold leading-snug">
          {"We\u2019re a community worth knowing, supporting, enjoying, and investing in."}
        </p>
        <p className="text-white/90">
          Thank you for coming to see a little more of who we are. I hope this is the beginning of a longer
          relationship.
        </p>
      </div>
    </section>
  )
}
