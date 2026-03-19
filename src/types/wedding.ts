export type NavigationItem = {
  label: string
  href: string
}

export type CoupleNames = {
  partnerOne: string
  partnerTwo: string
}

export type HeroContent = {
  eyebrow: string
  intro: string
  names: CoupleNames
  description: string
  audio: FileAudioSource | YouTubeAudioSource
}

export type FileAudioSource = {
  provider: 'file'
  title: string
  src: string
  mimeType: string
}

export type YouTubeAudioSource = {
  provider: 'youtube'
  title: string
  url: string
}

export type DateContent = {
  iso: string
  display: string
  month: string
  day: string
  time: string
  venue: string
  city: string
}

export type QuoteContent = {
  text: string
  citation: string
}

export type PeopleGroup = {
  title: string
  names: string[]
}

export type StoryItem = {
  title: string
  description: string
}

export type ScheduleIcon = 'ceremony' | 'meal' | 'party'

export type ScheduleItem = {
  time: string
  title: string
  description: string
  icon: ScheduleIcon
}

export type LocationItem = {
  title: string
  place: string
  details: string
  mapUrl: string
}

export type DetailIcon = 'shirt' | 'gift' | 'message'

export type DetailItem = {
  title: string
  label: string
  description: string
  icon: DetailIcon
}

export type GalleryItem = {
  src: string
  alt: string
  className?: string
}

export type CtaContent = {
  rsvpUrl: string
  rsvpLabel: string
  note: string
}

export type WeddingAssets = {
  heroImage: string
  floralIllustration: string
}

export type WeddingPageData = {
  navigation: NavigationItem[]
  hero: HeroContent
  date: DateContent
  quote: QuoteContent
  people: PeopleGroup[]
  story: StoryItem[]
  schedule: ScheduleItem[]
  locations: LocationItem[]
  details: DetailItem[]
  gallery: GalleryItem[]
  cta: CtaContent
  assets: WeddingAssets
}
