import { Church, Music4, PartyPopper, UtensilsCrossed } from 'lucide-react'
import { SectionHeader } from '../components/shared/SectionHeader'
import type { ScheduleIcon, ScheduleItem } from '../types/wedding'

type ScheduleSectionProps = {
  schedule: ScheduleItem[]
}

const iconMap: Record<ScheduleIcon, typeof Church> = {
  ceremony: Church,
  meal: UtensilsCrossed,
  party: PartyPopper,
}

export function ScheduleSection({ schedule }: ScheduleSectionProps) {
  return (
    <section id="agenda" className="section-shell mt-24">
      <SectionHeader
        eyebrow="Agenda"
        title="Así viviremos el gran día"
        description="Hemos preparado cada momento con mucho cariño para compartir una celebración llena de fe, alegría y gratitud."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {schedule.map((item) => {
          const Icon = iconMap[item.icon] ?? Music4

          return (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-gold/12 blur-2xl" />
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/12 text-sage">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-sage">
                {item.time}
              </p>
              <h3 className="mt-3 font-display text-4xl text-ink">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-sage-deep/80">
                {item.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
