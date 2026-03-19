import type { DateContent, HeroContent } from '../types/wedding'

function formatGoogleCalendarDate(value: Date) {
  return value.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}Z$/, 'Z')
}

export function buildGoogleCalendarUrl(date: DateContent, hero: HeroContent) {
  const startDate = new Date(date.iso)
  const endDate = new Date(startDate.getTime() + 6 * 60 * 60 * 1000)
  const title = `${hero.names.partnerOne} & ${hero.names.partnerTwo}`
  const details =
    'Acompáñanos a celebrar nuestra boda. Revisa la landing para consultar agenda, ubicaciones y confirmación.'

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    title,
  )}&dates=${formatGoogleCalendarDate(startDate)}/${formatGoogleCalendarDate(
    endDate,
  )}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(
    `${date.venue}, ${date.city}`,
  )}`
}
