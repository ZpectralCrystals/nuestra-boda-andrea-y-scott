import { SectionHeader } from '../components/shared/SectionHeader'
import type { CountdownParts } from '../hooks/useCountdown'

type CountdownSectionProps = {
  countdown: CountdownParts
}

export function CountdownSection({ countdown }: CountdownSectionProps) {
  return (
    <section id="cuenta-regresiva" className="section-shell mt-24">
      <div className="rounded-[2.5rem] border border-white/70 bg-white/75 px-6 py-10 shadow-[var(--shadow-card)] backdrop-blur-xl md:px-10 md:py-14">
        <SectionHeader
          eyebrow="Faltan"
          title="Los días para decir sí"
          description="Cada día nos acerca más al momento de celebrar juntos una fecha que llevaremos siempre en el corazón."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            { label: 'Días', value: countdown.days },
            { label: 'Horas', value: countdown.hours },
            { label: 'Minutos', value: countdown.minutes },
            { label: 'Segundos', value: countdown.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-[2rem] border border-ink/8 bg-mist px-6 py-8 text-center"
            >
              <p className="font-display text-6xl leading-none text-ink md:text-7xl">
                {item.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.35em] text-sage">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
