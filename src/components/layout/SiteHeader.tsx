import type { CoupleNames, NavigationItem } from '../../types/wedding'

type SiteHeaderProps = {
  navigation: NavigationItem[]
  rsvpUrl: string
  ctaLabel: string
  names: CoupleNames
}

export function SiteHeader({
  navigation,
  rsvpUrl,
  ctaLabel,
  names,
}: SiteHeaderProps) {
  const initials = `${names.partnerOne.trim().charAt(0).toUpperCase()} & ${names.partnerTwo
    .trim()
    .charAt(0)
    .toUpperCase()}`

  return (
    <header className="sticky top-4 z-30 mx-auto hidden w-[min(1180px,calc(100%-2rem))] rounded-full border border-white/65 bg-white/75 px-4 py-3 shadow-[var(--shadow-card)] backdrop-blur-xl md:block">
      <div className="flex items-center justify-between gap-6">
        <a
          href="#inicio"
          className="font-display text-2xl tracking-[0.15em] text-ink"
        >
          {initials}
        </a>

        <nav aria-label="Secciones principales">
          <ul className="flex items-center gap-5 text-sm font-medium text-sage-deep/80">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="transition hover:text-ink" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={rsvpUrl}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-ivory transition hover:bg-sage-deep"
        >
          {ctaLabel}
        </a>
      </div>
    </header>
  )
}
