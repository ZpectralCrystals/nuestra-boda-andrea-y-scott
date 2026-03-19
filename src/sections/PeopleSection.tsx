import { SectionHeader } from '../components/shared/SectionHeader'
import type { PeopleGroup } from '../types/wedding'

type PeopleSectionProps = {
  people: PeopleGroup[]
}

export function PeopleSection({ people }: PeopleSectionProps) {
  return (
    <section className="section-shell mt-24">
      <SectionHeader
        eyebrow="Con quienes amamos"
        title="Bendiciones y compañía"
        description="Esta sección ya está armada para que reemplaces nombres o roles cuando quieras, sin rehacer el diseño."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {people.map((person) => (
          <article
            key={person.title}
            className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">
              {person.title}
            </p>
            <div className="mt-5 space-y-3">
              {person.names.map((name) => (
                <p
                  key={name}
                  className="font-display text-2xl leading-tight text-ink"
                >
                  {name}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
