import { Gift, MessageCircleHeart, Shirt } from 'lucide-react'
import { SectionHeader } from '../components/shared/SectionHeader'
import type { DetailIcon, DetailItem } from '../types/wedding'

type DetailsSectionProps = {
  details: DetailItem[]
}

const iconMap: Record<DetailIcon, typeof Shirt> = {
  shirt: Shirt,
  gift: Gift,
  message: MessageCircleHeart,
}

export function DetailsSection({ details }: DetailsSectionProps) {
  return (
    <section id="detalles" className="section-shell mt-24">
      <SectionHeader
        eyebrow="Detalles"
        title="Lo importante, de un vistazo"
        description="Aquí reuní los bloques más útiles para una boda: vestimenta, regalos y confirmación. Todo está listo para que lo adaptes."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {details.map((detail) => {
          const Icon = iconMap[detail.icon]

          return (
            <article
              key={detail.title}
              className="rounded-[2rem] border border-white/70 bg-white/80 p-7 shadow-[var(--shadow-card)] backdrop-blur-xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-sage/12 text-sage">
                <Icon className="h-5 w-5" />
              </div>
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.35em] text-sage">
                {detail.title}
              </p>
              <h3 className="mt-3 font-display text-4xl text-ink">
                {detail.label}
              </h3>
              <p className="mt-4 text-sm leading-7 text-sage-deep/80">
                {detail.description}
              </p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
