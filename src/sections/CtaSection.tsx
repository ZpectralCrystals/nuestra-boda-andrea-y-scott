import { MapPin, MessageCircleHeart } from 'lucide-react'
import type { CtaContent } from '../types/wedding'

type CtaSectionProps = {
  cta: CtaContent
  floralIllustration: string
}

export function CtaSection({ cta, floralIllustration }: CtaSectionProps) {
  return (
    <section id="confirmacion" className="section-shell mt-24">
      <div className="relative overflow-hidden rounded-[2.8rem] border border-white/70 bg-ink px-6 py-12 text-center shadow-[var(--shadow-glow)] md:px-10 md:py-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(196,164,106,0.18),transparent_52%)]" />
        <img
          src={floralIllustration}
          alt=""
          className="pointer-events-none absolute -right-16 -top-6 w-40 max-w-none opacity-20 sm:w-52 md:-right-20 md:top-0 md:w-64 lg:w-80"
        />

        <div className="relative mx-auto max-w-3xl">
          <p className="section-kicker text-gold">
            Confirmación
          </p>
          <h2 className="section-title mt-5 text-ivory">
            Nos encantará celebrarlo contigo
          </h2>
          <p className="section-copy mt-4 text-white/75">
            Tu presencia hará este día aún más especial. Gracias por acompañarnos
            con tanto cariño en una fecha que recordaremos para siempre.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={cta.rsvpUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ivory px-6 py-3 text-sm font-semibold text-ink transition hover:bg-sand sm:w-auto"
            >
              <MessageCircleHeart className="h-4 w-4" />
              {cta.rsvpLabel}
            </a>
            <a
              href="#ubicaciones"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-ivory transition hover:border-gold hover:text-gold sm:w-auto"
            >
              <MapPin className="h-4 w-4" />
              Ver ubicaciones
            </a>
          </div>

          <p className="card-copy mt-6 text-white/65">{cta.note}</p>
        </div>
      </div>
    </section>
  )
}
