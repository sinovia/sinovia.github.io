import { ArrowDown, Briefcase, Heart, Linkedin, Mail } from "lucide-react"

const links = [
  { label: "Explore Rocktown Realness", href: "https://rocktownrealness.com", icon: Heart, external: true },
  { label: "Email Sinovia", href: "mailto:speak@rocktownrealness.com", icon: Mail, external: false },
  { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/somayfield/", icon: Linkedin, external: true },
  { label: "Explore My Professional Work", href: "https://sinoviamayfield.com", icon: Briefcase, external: false },
]

export function FwgQuickLinks() {
  return (
    <nav aria-label="Quick links" className="flex flex-col gap-5 md:rounded-xl md:bg-[#f3eaf5] md:p-6">
      <ul className="grid gap-3 sm:grid-cols-2">
        {links.map(({ label, href, icon: Icon, external }) => (
          <li key={label}>
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex items-center gap-3 rounded-xl border border-brand-purple/15 bg-white px-5 py-4 font-medium md:border-transparent text-[#2a1530] transition-colors hover:text-brand-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple"
            >
              <Icon className="h-4 w-4 shrink-0 text-brand-purple" aria-hidden="true" />
              {label}
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#opportunities"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
      >
        <ArrowDown className="h-4 w-4" aria-hidden="true" />
        Jump to Partnership Opportunities
      </a>
    </nav>
  )
}
