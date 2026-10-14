import { Globe, Linkedin, Mail, Heart } from "lucide-react"

const links = [
  { label: "Email", value: "sinovia@hey.com", href: "mailto:sinovia@hey.com", icon: Mail, external: false },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/somayfield",
    href: "https://www.linkedin.com/in/somayfield/",
    icon: Linkedin,
    external: true,
  },
  { label: "Professional website", value: "sinoviamayfield.com", href: "/", icon: Globe, external: false },
  {
    label: "Rocktown Realness",
    value: "rocktownrealness.com",
    href: "https://rocktownrealness.com",
    icon: Heart,
    external: true,
  },
]

export function FwgContact() {
  return (
    <footer aria-labelledby="contact-heading" className="bg-brand-purple text-white">
      <div className="mx-auto flex max-w-4xl flex-col gap-10 px-6 py-16 md:py-20">
        <div className="flex flex-col gap-4">
          <h2 id="contact-heading" className="text-3xl font-bold md:text-4xl">
            {"Let\u2019s keep the conversation going"}
          </h2>
          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {
              "Whether you\u2019re interested in Rocktown Realness, my professional work in digital transformation and strategic initiatives, or simply exchanging ideas about how communities put resources to work, I\u2019d love to stay connected."
            }
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-xl font-semibold">Sinovia Mayfield</p>
          <ul className="grid gap-3 sm:grid-cols-2">
            {links.map(({ label, value, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-lg border border-white/20 p-4 transition-colors hover:border-brand-gold hover:bg-white/5"
                >
                  <Icon className="h-5 w-5 shrink-0 text-brand-gold" aria-hidden="true" />
                  <span className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/70">{label}</span>
                    <span className="font-medium">{value}</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="border-t border-white/20 pt-8 text-lg font-semibold text-brand-gold">
          Small City. Big Hearts. Real Love for Little Rock.
        </p>
      </div>
    </footer>
  )
}
