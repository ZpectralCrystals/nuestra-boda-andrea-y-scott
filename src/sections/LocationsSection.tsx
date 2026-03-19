import { MapPin } from 'lucide-react'
import type { DateContent, LocationItem } from '../types/wedding'

type LocationsSectionProps = {
  locations: LocationItem[]
  date: DateContent
}

type IllustrationProps = {
  className?: string
}

function ChapelIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 140 110"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 92H120" />
        <path d="M34 92V52L70 28L106 52V92" />
        <path d="M55 92V68H85V92" />
        <path d="M46 57H59V70H46Z" />
        <path d="M81 57H94V70H81Z" />
        <path d="M62 28V12H78V28" />
        <path d="M70 7V21" />
        <path d="M63 14H77" />
        <path d="M30 54H22V92H34" />
        <path d="M110 54H118V92H106" />
        <path d="M40 44H100" />
      </g>
    </svg>
  )
}

function ArchIllustration({ className }: IllustrationProps) {
  return (
    <svg
      viewBox="0 0 140 110"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 92H116" />
        <path d="M33 92V57" />
        <path d="M107 92V57" />
        <path d="M48 92V59C48 46.3 58.3 36 71 36C83.7 36 94 46.3 94 59V92" />
        <path d="M39 58C48 43 60 35 71 35C82 35 94 43 101 58" />
        <path d="M46 39C54 31 60 28 70 28C80 28 87 31 95 39" />
        <path d="M37 58H103" />
        <path d="M28 58H39" />
        <path d="M101 58H112" />
      </g>
      <g fill="currentColor">
        <circle cx="48" cy="35" r="2.4" />
        <circle cx="58" cy="30" r="2.4" />
        <circle cx="69" cy="28" r="2.4" />
        <circle cx="80" cy="30" r="2.4" />
        <circle cx="90" cy="35" r="2.4" />
      </g>
    </svg>
  )
}

export function LocationsSection({ locations, date }: LocationsSectionProps) {
  const [ceremonyLocation, receptionLocation, ...extraLocations] = locations

  return (
    <section id="ubicaciones" className="section-shell mt-24">
      <div className="rounded-[2.75rem] border border-white/75 bg-white/85 px-5 py-10 shadow-[var(--shadow-card)] backdrop-blur-xl sm:px-6 md:px-10 md:py-14">
        <div className="text-center">
          <h2 className="section-title text-ink">
            Ubicaciones
          </h2>
          <p className="section-kicker mt-3 text-sage-deep/75">
            Para celebrar nuestra unión matrimonial
          </p>
        </div>

        <div className="relative mx-auto mt-10 max-w-4xl">
          {ceremonyLocation || receptionLocation ? (
            <div className="pointer-events-none absolute bottom-16 left-1/2 top-16 w-px -translate-x-1/2 bg-ink/18" />
          ) : null}

          {ceremonyLocation ? (
            <div className="relative grid grid-cols-[1fr_5rem_1fr] items-center gap-3 sm:grid-cols-[1fr_7rem_1fr] sm:gap-6 md:grid-cols-[1fr_8rem_1fr]">
              <div className="text-right">
                <p className="meta-label text-ink">
                  {ceremonyLocation.title}
                </p>
                <p className="card-title mt-3 text-ink">
                  {ceremonyLocation.place}
                </p>
                <p className="card-copy mt-2 text-sage-deep/75">
                  {date.city}
                </p>
                <a
                  href={ceremonyLocation.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition hover:bg-sage-deep"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Ubicación
                </a>
              </div>

              <div className="relative flex justify-center">
                <div className="rounded-full bg-white/90 p-2 shadow-[0_18px_30px_rgba(39,30,21,0.08)]">
                  <ChapelIllustration className="w-16 text-[#908f8b] sm:w-20 md:w-24" />
                </div>
              </div>

              <div className="text-left">
                <p className="card-title text-ink">
                  {date.time}
                </p>
                <p className="meta-label mt-2 text-sage">
                  Ceremonia
                </p>
                <p className="card-copy mt-3 text-sage-deep/75">
                  Empezaremos el día con una ceremonia íntima, llena de fe y gratitud.
                </p>
              </div>
            </div>
          ) : null}

          {receptionLocation ? (
            <div className="relative mt-12 grid grid-cols-[1fr_5rem_1fr] items-center gap-3 sm:mt-16 sm:grid-cols-[1fr_7rem_1fr] sm:gap-6 md:grid-cols-[1fr_8rem_1fr]">
              <div className="text-right">
                <p className="meta-label text-sage">
                  Después
                </p>
                <p className="card-copy mt-3 text-sage-deep/75">
                  Seguiremos celebrando con brindis, almuerzo y mucha alegría en la recepción.
                </p>
              </div>

              <div className="relative flex justify-center">
                <div className="rounded-full bg-white/90 p-2 shadow-[0_18px_30px_rgba(39,30,21,0.08)]">
                  <ArchIllustration className="w-16 text-[#908f8b] sm:w-20 md:w-24" />
                </div>
              </div>

              <div className="text-left">
                <p className="meta-label text-ink">
                  {receptionLocation.title}
                </p>
                <p className="card-title mt-3 text-ink">
                  {receptionLocation.place}
                </p>
                <p className="card-copy mt-2 text-sage-deep/75">
                  {date.city}
                </p>
                <a
                  href={receptionLocation.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-black px-4 py-2 text-xs font-medium text-white shadow-[0_10px_25px_rgba(0,0,0,0.18)] transition hover:bg-sage-deep"
                >
                  <MapPin className="h-3.5 w-3.5" />
                  Ubicación
                </a>
              </div>
            </div>
          ) : null}
        </div>

        {extraLocations.length > 0 ? (
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {extraLocations.map((location) => (
              <article
                key={location.title}
                className="rounded-[1.9rem] border border-ink/8 bg-mist/85 p-6 shadow-[0_18px_30px_rgba(39,30,21,0.06)]"
              >
                <p className="card-kicker text-sage">
                  {location.title}
                </p>
                <h3 className="card-title mt-3 text-ink">
                  {location.place}
                </h3>
                <p className="card-copy mt-3 text-sage-deep/80">
                  {location.details}
                </p>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-ink/12 px-4 py-2 text-sm font-semibold text-ink transition hover:border-sage hover:text-sage-deep"
                >
                  <MapPin className="h-4 w-4" />
                  Ver referencia
                </a>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
