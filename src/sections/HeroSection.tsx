import {
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircleHeart,
} from 'lucide-react'
import { AudioPlayer } from '../components/shared/AudioPlayer'
import type { CountdownParts } from '../hooks/useCountdown'
import type { CtaContent, DateContent, HeroContent, WeddingAssets } from '../types/wedding'

type HeroSectionProps = {
  hero: HeroContent
  date: DateContent
  assets: WeddingAssets
  cta: CtaContent
  countdown: CountdownParts
  calendarUrl: string
}

export function HeroSection({
  hero,
  date,
  assets,
  cta,
  countdown,
  calendarUrl,
}: HeroSectionProps) {
  return (
    <section id="inicio" className="section-shell pt-8 md:pt-16">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="order-2 lg:order-1">
          <p className="text-sm font-semibold uppercase tracking-[0.4em] text-sage">
            {hero.eyebrow}
          </p>

          <div className="mt-6 space-y-2">
            <p className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.86] text-ink">
              {hero.names.partnerOne}
            </p>
            <p className="font-display text-center text-4xl text-gold lg:text-left">
              &
            </p>
            <p className="font-display text-[clamp(4rem,12vw,8rem)] leading-[0.86] text-ink">
              {hero.names.partnerTwo}
            </p>
          </div>

          <p className="mt-6 max-w-xl text-base leading-7 text-sage-deep/85 md:text-lg">
            {hero.intro}
          </p>
          <p className="mt-4 max-w-xl text-base leading-7 text-sage-deep/80 md:text-lg">
            {hero.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#confirmacion"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-sage-deep"
            >
              <MessageCircleHeart className="h-4 w-4" />
              {cta.rsvpLabel}
            </a>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-sage hover:text-sage-deep"
            >
              <CalendarDays className="h-4 w-4" />
              Agendar fecha
            </a>
          </div>

          <AudioPlayer audio={hero.audio} />

          <div className="mt-10 grid gap-4 sm:grid-cols-[auto_1fr]">
            <div className="flex w-fit flex-col items-center justify-center rounded-[2rem] border border-white/70 bg-white/80 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sage">
                {date.month}
              </span>
              <span className="font-display text-6xl leading-none text-ink">
                {date.day}
              </span>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-white/80 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">
                Reserva la fecha
              </p>
              <p className="mt-3 font-display text-3xl text-ink md:text-4xl">
                {date.display}
              </p>
              <div className="mt-4 flex flex-wrap gap-5 text-sm text-sage-deep/80">
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-gold" />
                  {date.time}
                </span>
                <span className="inline-flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gold" />
                  {date.venue}
                </span>
              </div>
            </div>
          </div>

          <a
            href="#cuenta-regresiva"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-sage transition hover:text-ink"
          >
            Ver más detalles
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>

        <div className="order-1 lg:order-2">
          <div className="relative mx-auto max-w-[34rem]">
            <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full border border-gold/25 bg-white/45 blur-2xl md:block" />
            <img
              src={assets.floralIllustration}
              alt=""
              className="pointer-events-none absolute -left-8 -top-6 hidden w-28 opacity-70 md:block"
            />
            <div className="relative overflow-hidden rounded-[2.5rem] border border-white/70 bg-white/60 p-4 shadow-[var(--shadow-glow)] backdrop-blur-xl">
              <div className="relative overflow-hidden rounded-[2rem]">
                <img
                  src={assets.heroImage}
                  alt="Fotografía principal de la pareja"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,19,15,0.05),rgba(22,19,15,0.36))]" />
              </div>

              <div className="absolute inset-x-8 bottom-8 rounded-[1.7rem] border border-white/30 bg-black/15 p-5 backdrop-blur-md">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/75">
                  Celebración íntima
                </p>
                <p className="mt-2 font-display text-4xl text-white">
                  {date.venue}
                </p>
                <p className="mt-2 text-sm text-white/80">
                  Una jornada pensada para disfrutar cada abrazo, cada
                  fotografía y cada brindis.
                </p>
              </div>
            </div>

            <div className="absolute -bottom-5 -right-5 rounded-[1.8rem] border border-white/75 bg-white/85 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
                Cuenta regresiva
              </p>
              <p className="mt-2 font-display text-4xl text-ink">
                {countdown.days} días
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
