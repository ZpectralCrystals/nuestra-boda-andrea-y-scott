import { SiteFooter } from './components/layout/SiteFooter'
import { SiteHeader } from './components/layout/SiteHeader'
import { weddingContent } from './content'
import { useCountdown } from './hooks/useCountdown'
import { CountdownSection } from './sections/CountdownSection'
import { CtaSection } from './sections/CtaSection'
import { DetailsSection } from './sections/DetailsSection'
import { GallerySection } from './sections/GallerySection'
import { HeroSection } from './sections/HeroSection'
import { LocationsSection } from './sections/LocationsSection'
import { PeopleSection } from './sections/PeopleSection'
import { ScheduleSection } from './sections/ScheduleSection'
import { StorySection } from './sections/StorySection'
import { buildGoogleCalendarUrl } from './utils/calendar'

function App() {
  const countdown = useCountdown(weddingContent.date.iso)
  const calendarUrl = buildGoogleCalendarUrl(
    weddingContent.date,
    weddingContent.hero,
  )

  return (
    <div className="relative isolate overflow-x-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[30rem] bg-[radial-gradient(circle_at_top,rgba(196,164,106,0.28),transparent_58%)]" />
      <div className="pointer-events-none absolute left-[-14rem] top-20 -z-10 h-80 w-80 rounded-full bg-sage/15 blur-3xl" />
      <div className="pointer-events-none absolute right-[-10rem] top-[30rem] -z-10 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <SiteHeader
        navigation={weddingContent.navigation}
        rsvpUrl={weddingContent.cta.rsvpUrl}
        ctaLabel="Confirmar asistencia"
        names={weddingContent.hero.names}
      />

      <main className="pb-16">
        <HeroSection
          hero={weddingContent.hero}
          date={weddingContent.date}
          quote={weddingContent.quote}
          assets={weddingContent.assets}
          cta={weddingContent.cta}
          countdown={countdown}
          calendarUrl={calendarUrl}
        />
        <CountdownSection
          countdown={countdown}
          date={weddingContent.date}
          floralIllustration={weddingContent.assets.floralIllustration}
        />
        <StorySection quote={weddingContent.quote} story={weddingContent.story} />
        <PeopleSection people={weddingContent.people} />
        <ScheduleSection schedule={weddingContent.schedule} />
        <LocationsSection
          locations={weddingContent.locations}
          date={weddingContent.date}
        />
        <DetailsSection details={weddingContent.details} />
        <GallerySection gallery={weddingContent.gallery} />
        <CtaSection
          cta={weddingContent.cta}
          floralIllustration={weddingContent.assets.floralIllustration}
        />
      </main>

      <SiteFooter names={weddingContent.hero.names} />
    </div>
  )
}

export default App
