import {
  CalendarDays,
  ChevronDown,
  Clock3,
  MapPin,
  MessageCircleHeart,
} from 'lucide-react'
import { AudioPlayer } from '../components/shared/AudioPlayer'
import type { CountdownParts } from '../hooks/useCountdown'
import type {
  CtaContent,
  DateContent,
  HeroContent,
  QuoteContent,
  WeddingAssets,
} from '../types/wedding'

type HeroSectionProps = {
  hero: HeroContent
  date: DateContent
  quote: QuoteContent
  assets: WeddingAssets
  cta: CtaContent
  countdown: CountdownParts
  calendarUrl: string
}

export function HeroSection({
  hero,
  date,
  quote,
  assets,
  cta,
  countdown,
  calendarUrl,
}: HeroSectionProps) {
  return (
    <section id="inicio" className="section-shell pt-6 md:pt-16">
      <div className="grid items-center gap-8 md:gap-12 lg:grid-cols-[1fr_0.95fr]">
        <div className="order-1 text-center lg:text-left">
          <p className="hidden text-sm font-semibold uppercase tracking-[0.4em] text-sage lg:block">
            {hero.eyebrow}
          </p>

          <div className="mt-5 space-y-1 md:mt-6 md:space-y-2">
            <p className="font-script text-[clamp(4.9rem,16vw,9rem)] leading-[0.78] text-ink">
              {hero.names.partnerOne}
            </p>
            <p className="font-display text-4xl italic text-gold lg:text-left">
              &
            </p>
            <p className="font-script text-[clamp(4.9rem,16vw,9rem)] leading-[0.78] text-ink">
              {hero.names.partnerTwo}
            </p>
          </div>

          <p className="mt-5 text-sm font-semibold uppercase tracking-[0.4em] text-sage lg:hidden">
            {hero.eyebrow}
          </p>

          <p className="body-copy mx-auto mt-6 hidden max-w-xl text-sage-deep/85 lg:mx-0 lg:block">
            {hero.intro}
          </p>
          <p className="body-copy mx-auto mt-4 hidden max-w-xl text-sage-deep/80 lg:mx-0 lg:block">
            {hero.description}
          </p>

          <div className="mt-8 hidden flex-wrap items-center justify-center gap-4 lg:flex lg:justify-start">
            <a
              href="#confirmacion"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-ivory transition hover:bg-sage-deep sm:w-auto"
            >
              <MessageCircleHeart className="h-4 w-4" />
              {cta.rsvpLabel}
            </a>
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-ink/15 bg-white/80 px-6 py-3 text-sm font-semibold text-ink transition hover:border-sage hover:text-sage-deep sm:w-auto"
            >
              <CalendarDays className="h-4 w-4" />
              Agendar fecha
            </a>
          </div>

          <div className="mt-10 hidden justify-items-center gap-4 sm:grid-cols-[auto_1fr] sm:justify-items-stretch lg:grid">
            <div className="flex w-fit flex-col items-center justify-center rounded-[2rem] border border-white/70 bg-white/80 px-6 py-5 shadow-[var(--shadow-card)] backdrop-blur-xl">
              <span className="text-xs font-semibold uppercase tracking-[0.35em] text-sage">
                {date.month}
              </span>
              <span className="font-display text-6xl leading-none text-ink">
                {date.day}
              </span>
            </div>

            <div className="w-full rounded-[2rem] border border-white/70 bg-white/80 p-6 text-center shadow-[var(--shadow-card)] backdrop-blur-xl sm:text-left">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sage">
                Reserva la fecha
              </p>
              <p className="mt-3 font-display text-3xl text-ink md:text-4xl">
                {date.display}
              </p>
              <div className="mt-4 flex flex-wrap justify-center gap-5 text-sm text-sage-deep/80 sm:justify-start">
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
            className="mx-auto mt-10 hidden items-center gap-2 text-sm font-semibold uppercase tracking-[0.3em] text-sage transition hover:text-ink lg:mx-0 lg:inline-flex"
          >
            Ver más detalles
            <ChevronDown className="h-4 w-4" />
          </a>
        </div>

        <div className="order-2 lg:order-2">
          <div className="relative mx-auto max-w-[22rem] sm:max-w-[28rem] lg:max-w-[34rem]">
            <div className="absolute -left-10 top-10 hidden h-40 w-40 rounded-full border border-gold/25 bg-white/45 blur-2xl md:block" />
            <img
              src={assets.floralIllustration}
              alt=""
              className="pointer-events-none absolute -left-16 -top-16 w-44 max-w-none opacity-75 sm:-left-20 sm:-top-20 sm:w-56 md:-left-24 md:-top-20 md:w-64 lg:-left-28 lg:-top-24 lg:w-80"
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

              <div className="absolute inset-x-8 bottom-8 hidden rounded-[1.7rem] border border-white/30 bg-black/15 p-5 backdrop-blur-md md:block">
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

            <div className="relative mt-4 ml-auto hidden w-fit rounded-[1.8rem] border border-white/75 bg-white/85 px-5 py-4 shadow-[var(--shadow-card)] backdrop-blur-xl md:absolute md:-bottom-5 md:-right-5 md:mt-0 lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage">
                Cuenta regresiva
              </p>
              <p className="mt-2 font-display text-4xl text-ink">
                {countdown.days} días
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-[24rem] text-center lg:hidden">
            <blockquote className="body-copy text-ink">
              “{quote.text}”
            </blockquote>
            <p className="mt-3 text-sm italic text-sage-deep/80">
              {quote.citation}
            </p>
            <p className="mt-8 font-script text-4xl leading-none text-ink">
              Haz clic para escuchar nuestra canción
            </p>
            <AudioPlayer audio={hero.audio} />
          </div>
        </div>
      </div>
    </section>
  )
}
