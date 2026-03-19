import { Heart } from 'lucide-react'
import type { QuoteContent, StoryItem } from '../types/wedding'

type StorySectionProps = {
  quote: QuoteContent
  story: StoryItem[]
}

export function StorySection({ quote, story }: StorySectionProps) {
  return (
    <section className="section-shell mt-24">
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="hidden rounded-[2.5rem] border border-white/70 bg-white/80 p-8 shadow-[var(--shadow-card)] backdrop-blur-xl md:p-10 lg:block">
          <p className="section-kicker text-sage">
            Nuestra inspiración
          </p>
          <blockquote className="mt-6 font-display text-4xl leading-tight text-ink md:text-5xl">
            “{quote.text}”
          </blockquote>
          <p className="meta-label mt-5 text-gold">
            {quote.citation}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {story.map((item) => (
            <article
              key={item.title}
              className="rounded-[2rem] border border-white/70 bg-white/70 p-6 shadow-[var(--shadow-card)] backdrop-blur-xl"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/12 text-sage">
                <Heart className="h-5 w-5" />
              </div>
              <h3 className="card-title mt-5 text-ink">
                {item.title}
              </h3>
              <p className="card-copy mt-3 text-sage-deep/80">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
