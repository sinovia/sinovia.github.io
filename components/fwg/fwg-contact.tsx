import { Briefcase, Heart, Linkedin, Mail } from "lucide-react"

const links = [
  {
    label: "LinkedIn",
    value: "linkedin.com/in/somayfield",
    href: "https://www.linkedin.com/in/somayfield/",
    icon: Linkedin,
    external: true,
  },
  {
    label: "Community work",
    value: "rocktownrealness.com",
    href: "https://rocktownrealness.com",
    icon: Heart,
    external: true,
  },
  {
    label: "Professional work",
    value: "sinoviamayfield.com",
    href: "/",
    icon: Briefcase,
    external: false,
  },
]

export function FwgContact() {
  return (
    <section id="connect" aria-labelledby="connect-heading" className="scroll-mt-6">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4">
          <h2 id="connect-heading" className="w-fit text-3xl font-bold text-gradient md:text-4xl">
            {"Let\u2019s Keep the Conversation Going"}
          </h2>
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed md:text-lg">
            {"The conversation doesn\u2019t have to end when the Arkansas Learning Journey does."}
          </p>
          <p className="max-w-2xl text-pretty text-[15px] leading-relaxed md:text-lg">
            {
              "Whether you\u2019re interested in supporting Rocktown Realness, collaborating on a community initiative, exchanging ideas, or exploring opportunities to work together, I\u2019d love to hear from you."
            }
          </p>
        </div>

        <a
          href="mailto:speak@rocktownrealness.com"
          className="flex flex-col gap-1 rounded-xl bg-brand-gold p-5 text-[#2a1530] transition-transform hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0 md:p-8"
        >
          <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em]">
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </span>
          <span className="text-xl font-bold [overflow-wrap:anywhere] sm:text-2xl md:text-3xl">
            speak@<wbr />rocktownrealness.com
          </span>
        </a>

        <ul className="grid gap-3 sm:grid-cols-3">
          {links.map(({ label, value, href, icon: Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="group flex items-center gap-3 rounded-xl border border-brand-purple/20 px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-purple hover:shadow-md"
              >
                <Icon className="h-5 w-5 shrink-0 text-brand-purple" aria-hidden="true" />
                <span className="flex min-w-0 flex-col">
                  <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#2a1530]/70">{label}</span>
                  <span className="truncate font-medium">{value}</span>
                </span>
                {external && <span className="sr-only">(opens in a new tab)</span>}
              </a>
            </li>
          ))}
        </ul>

        <p className="border-t border-brand-purple/15 pt-8 text-[17px] font-semibold text-brand-purple md:text-xl">
          Small City. Big Hearts. Real Love for Little Rock.
        </p>
      </div>
    </section>
  )
}
