import Image from "next/image"
import { Linkedin } from "lucide-react"

export function FwgAbout() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-6 border-t border-brand-purple/15">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 md:flex-row md:items-start md:gap-14 md:py-20">
        <div className="relative aspect-square w-40 shrink-0 overflow-hidden rounded-full border-4 border-brand-gold md:w-56">
          <Image
            src="/images/sinovia-headshot.jpg"
            alt="Portrait of Sinovia Mayfield"
            fill
            sizes="(max-width: 768px) 160px, 224px"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col gap-5 text-lg leading-relaxed">
          <h2 id="about-heading" className="text-3xl font-bold text-brand-purple md:text-4xl">
            A Little About Me
          </h2>
          <p>
            Professionally, I lead digital transformation initiatives, teams, and complex projects. My background spans
            technology, education, nonprofit operations, and organizational leadership.
          </p>
          <p>
            {"For nearly a decade, I\u2019ve also been building "}
            <a
              href="https://rocktownrealness.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              Rocktown Realness
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
            , a hyperlocal civic platform rooted in real love for Little Rock.
          </p>
          <p className="border-l-4 border-brand-gold pl-5 text-xl font-medium text-[#2a1530]">
            My work across both spaces has a common thread: connecting people, pixels, and purpose to turn good ideas
            into practical action.
          </p>
          <p>
            {
              "I\u2019m especially interested in designing and leading initiatives that make resources, information, and opportunities more accessible."
            }
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-base font-semibold">
            <a
              href="https://sinoviamayfield.com"
              className="text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              Professional work
            </a>
            <a
              href="https://www.linkedin.com/in/somayfield/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              <Linkedin className="h-4 w-4" aria-hidden="true" />
              LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
