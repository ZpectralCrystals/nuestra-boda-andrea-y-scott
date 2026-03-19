import { MapPin } from 'lucide-react'
import { SectionHeader } from '../components/shared/SectionHeader'
import type { LocationItem } from '../types/wedding'

type LocationsSectionProps = {
  locations: LocationItem[]
}

export function LocationsSection({ locations }: LocationsSectionProps) {
  return (
    <section id="ubicaciones" className="section-shell mt-24">
      <SectionHeader
        eyebrow="Ubicaciones"
        title="Todo lo que necesitas para llegar"
        description="Te compartimos las ubicaciones más importantes para que puedas organizar tu llegada y acompañarnos sin contratiempos."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {locations.map((location) => (
          <article
            key={location.title}
            className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold/18 text-gold">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-sage">
              {location.title}
            </p>
            <h3 className="mt-3 font-display text-4xl text-ink">
              {location.place}
            </h3>
            <p className="mt-4 text-sm leading-7 text-sage-deep/80">
              {location.details}
            </p>
            <a
              href={location.mapUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-ink/12 px-5 py-3 text-sm font-semibold text-ink transition hover:border-sage hover:text-sage-deep"
            >
              <MapPin className="h-4 w-4" />
              Abrir mapa
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
