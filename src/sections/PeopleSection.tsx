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
        description="Agradecemos profundamente a quienes han sido parte de nuestro camino y nos acompañan con su amor en este día tan especial."
      />

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {people.map((person) => (
          <article
            key={person.title}
            className="rounded-[2rem] border border-white/70 bg-white/70 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl lg:text-left"
          >
            <p className="card-kicker text-sage">
              {person.title}
            </p>
            <div className="mt-5 space-y-3">
              {person.names.map((name) => (
                <p
                  key={name}
                  className="font-display text-[1.8rem] leading-tight text-ink md:text-[2.1rem]"
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
