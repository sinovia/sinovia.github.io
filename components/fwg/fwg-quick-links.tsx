import { ArrowDown, Briefcase, Heart, Linkedin, Mail } from "lucide-react"

const links = [
  { label: "Explore Rocktown Realness", href: "https://rocktownrealness.com", icon: Heart, external: true },
  { label: "Email Sinovia", href: "mailto:speak@rocktownrealness.com", icon: Mail, external: false },
  { label: "Connect on LinkedIn", href: "https://www.linkedin.com/in/somayfield/", icon: Linkedin, external: true },
  { label: "Explore My Professional Work", href: "/", icon: Briefcase, external: false },
]

const jumpLinks = [
  { label: "Jump to Partnership Opportunities", href: "#opportunities" },
]

export function FwgQuickLinks() {
  return (
    <nav aria-label="Quick links" className="flex flex-col gap-5 md:rounded-xl md:bg-[#f3eaf5] md:p-6">
      <ul className="grid grid-cols-2 gap-3">
        {links.map(({ label, href, icon: Icon, external }) => (
          <li key={label} className="flex">
            <a
              href={href}
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className="flex min-h-24 w-full flex-col items-start justify-center gap-2 rounded-xl border border-brand-purple/15 bg-white px-4 py-4 text-sm font-medium leading-snug text-[#2a1530] transition-colors hover:text-brand-purple focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-purple sm:min-h-12 sm:flex-row sm:items-center sm:justify-start sm:gap-3 sm:px-5 sm:py-3.5 sm:text-[15px] md:border-transparent md:py-4 md:text-base"
            >
              <Icon className="h-5 w-5 shrink-0 text-brand-purple sm:h-4 sm:w-4" aria-hidden="true" />
              {label}
              {external && <span className="sr-only">(opens in a new tab)</span>}
            </a>
          </li>
        ))}
      </ul>
      <ul className="flex flex-col gap-3">
        {jumpLinks.map(({ label, href }) => (
          <li key={href}>
            <a
              href={href}
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand-purple underline decoration-brand-gold decoration-2 underline-offset-4"
            >
              <ArrowDown className="h-4 w-4 shrink-0" aria-hidden="true" />
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
