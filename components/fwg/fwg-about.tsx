import Image from "next/image"

export function FwgAbout() {
  return (
    <section aria-labelledby="welcome-heading" className="mx-auto max-w-4xl px-6 py-16 md:py-20">
      <div className="flex flex-col gap-12 md:flex-row md:gap-16">
        <div className="flex flex-col gap-5 text-lg leading-relaxed md:w-3/5">
          <h2 id="welcome-heading" className="text-3xl font-bold text-brand-purple">
            Welcome, and thank you for spending time in Little Rock!
          </h2>
          <p>
            {"I\u2019m Sinovia Mayfield, a digital transformation leader, civic creative, and the human behind "}
            <a
              href="https://rocktownrealness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              Rocktown Realness
            </a>
            .
          </p>
          <p>
            It was a pleasure participating in{" "}
            <em className="font-medium">Fueling the Narrative: Changing the Story to Change the Future</em>.{" "}
            {
              "I\u2019m grateful for the opportunity to share some of our work, offer a local perspective, and learn from people thinking deeply about narrative, power, and community investment."
            }
          </p>
          <p className="font-medium text-brand-purple">I hope our conversation continues well beyond your visit.</p>
        </div>

        <aside aria-labelledby="about-heading" className="flex flex-col gap-5 md:w-2/5">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <Image
              src="/images/sinovia-chair.jpg"
              alt="Sinovia Mayfield seated in a chair"
              fill
              sizes="(max-width: 768px) 100vw, 320px"
              className="object-cover"
              priority
            />
          </div>
          <h3 id="about-heading" className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-purple">
            A little about me
          </h3>
          <div className="flex flex-col gap-3 text-base leading-relaxed text-[#2a1530]/85">
            <p>
              Professionally, I lead digital transformation initiatives, teams, and complex projects. My background
              spans technology, education, nonprofit operations, and organizational leadership.
            </p>
            <p>
              {
                "For nearly a decade, I\u2019ve also been building Rocktown Realness, a hyperlocal civic platform rooted in real love for Little Rock."
              }
            </p>
            <p>
              My work across both spaces has a common thread: connecting people, pixels, and purpose to turn good ideas
              into practical action.
            </p>
            <p>
              {
                "I\u2019m especially interested in designing and leading initiatives that make resources, information, and opportunities more accessible."
              }
            </p>
          </div>
        </aside>
      </div>
    </section>
  )
}
