import type { CountdownParts } from '../hooks/useCountdown'
import type { DateContent } from '../types/wedding'

type CountdownSectionProps = {
  countdown: CountdownParts
  date: DateContent
  floralIllustration: string
}

const calendarLocale = 'es-PE'
const calendarTimeZone = 'America/Lima'
const localeWeekInfo = (
  new Intl.Locale(calendarLocale) as Intl.Locale & {
    weekInfo?: { firstDay?: number }
  }
).weekInfo
const weekStartsOn = (localeWeekInfo?.firstDay ?? 7) % 7
const spanishWeekdaySymbols = ['D', 'L', 'M', 'M', 'J', 'V', 'S']

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

function getEventDatePieces(iso: string) {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: calendarTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(new Date(iso))

  const year = Number(parts.find((part) => part.type === 'year')?.value ?? '0')
  const month = Number(parts.find((part) => part.type === 'month')?.value ?? '0')
  const day = Number(parts.find((part) => part.type === 'day')?.value ?? '0')

  return {
    year,
    month,
    day,
    monthLabel: capitalize(
      new Intl.DateTimeFormat(calendarLocale, {
        timeZone: calendarTimeZone,
        month: 'long',
      }).format(new Date(iso)),
    ),
  }
}

function getWeekdayLabels() {
  if (calendarLocale.startsWith('es')) {
    return Array.from(
      { length: 7 },
      (_, index) => spanishWeekdaySymbols[(weekStartsOn + index) % 7],
    )
  }

  const formatter = new Intl.DateTimeFormat(calendarLocale, {
    weekday: 'narrow',
  })

  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(2023, 0, 1 + ((weekStartsOn + index) % 7))
    return formatter.format(date).toUpperCase()
  })
}

function buildCalendarCells(year: number, month: number) {
  const firstWeekday = new Date(year, month - 1, 1).getDay()
  const totalDays = new Date(Date.UTC(year, month, 0)).getUTCDate()
  const leadingEmptyCells = (firstWeekday - weekStartsOn + 7) % 7
  const cells: Array<number | null> = Array.from(
    { length: leadingEmptyCells },
    () => null,
  )

  for (let day = 1; day <= totalDays; day += 1) {
    cells.push(day)
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

function padUnit(value: number | string) {
  return String(value).padStart(2, '0')
}

function SelectedDateBadge({ day }: { day: number }) {
  return (
    <span className="relative inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
      <svg
        viewBox="0 0 32 29"
        className="absolute inset-0 h-full w-full text-[#98968f]"
        aria-hidden="true"
      >
        <path
          d="M23.6 0C20.4 0 17.7 1.6 16 4C14.3 1.6 11.6 0 8.4 0C3.8 0 0 3.8 0 8.4C0 17.1 16 29 16 29S32 17.1 32 8.4C32 3.8 28.2 0 23.6 0Z"
          fill="currentColor"
        />
      </svg>
      <span className="relative text-sm font-semibold text-white sm:text-base">
        {day}
      </span>
    </span>
  )
}

export function CountdownSection({
  countdown,
  date,
  floralIllustration,
}: CountdownSectionProps) {
  const weekdayLabels = getWeekdayLabels()
  const { year, month, day, monthLabel } = getEventDatePieces(date.iso)
  const calendarCells = buildCalendarCells(year, month)
  const dateStack = [
    String(day).padStart(2, '0'),
    String(month).padStart(2, '0'),
    String(year).slice(-2),
  ]
  const countdownItems = [
    { label: 'Días', value: countdown.days },
    { label: 'Horas', value: countdown.hours },
    { label: 'Minutos', value: countdown.minutes },
    { label: 'Segundos', value: countdown.seconds },
  ]

  return (
    <section id="cuenta-regresiva" className="section-shell mt-24">
      <div className="relative overflow-hidden rounded-[2.75rem] border border-white/75 bg-white/85 px-4 py-10 shadow-[var(--shadow-card)] backdrop-blur-xl sm:px-6 md:px-10 md:py-14">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-[radial-gradient(circle_at_top,rgba(196,164,106,0.22),transparent_72%)]" />
        <img
          src={floralIllustration}
          alt=""
          className="pointer-events-none absolute left-1/2 top-0 w-[19rem] max-w-none -translate-x-1/2 opacity-45 sm:w-[24rem] md:w-[30rem]"
        />

        <div className="relative">
          <p className="section-kicker text-center text-sage-deep/75">
            Cuenta regresiva
          </p>
          <h2 className="section-title mt-14 text-center text-ink">
            {monthLabel}
          </h2>

          <div className="mx-auto mt-7 grid max-w-3xl grid-cols-[4.75rem_minmax(0,1fr)] items-start gap-4 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-6 md:mt-10 md:grid-cols-[7.5rem_minmax(0,1fr)]">
            <div className="flex flex-col items-center text-[#6f6e6a]">
              {dateStack.map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="font-display text-[clamp(3.2rem,14vw,6rem)] leading-[0.86]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="rounded-[1.8rem] border border-ink/8 bg-white/88 px-4 py-4 shadow-[0_18px_35px_rgba(39,30,21,0.08)] sm:px-5 sm:py-5">
              <div className="grid grid-cols-7 gap-y-2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-sage-deep/80 sm:text-xs">
                {weekdayLabels.map((weekday, index) => (
                  <span key={`${weekday}-${index}`}>{weekday}</span>
                ))}
              </div>

              <div className="mt-4 grid grid-cols-7 gap-y-2 text-center text-sm text-ink/80 sm:text-base">
                {calendarCells.map((cell, index) => (
                  <span key={`${cell ?? 'empty'}-${index}`} className="flex justify-center">
                    {cell === null ? null : cell === day ? (
                      <SelectedDateBadge day={cell} />
                    ) : (
                      <span className="inline-flex h-9 w-9 items-center justify-center sm:h-10 sm:w-10">
                        {cell}
                      </span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <p className="mt-10 text-center font-display text-[clamp(3.2rem,14vw,6rem)] leading-[0.86] text-[#6f6e6a]">
            Faltan
          </p>

          <div className="mx-auto mt-6 grid max-w-4xl grid-cols-4 gap-2 text-center sm:gap-4">
            {countdownItems.map((item, index) => (
              <div key={item.label} className="relative">
                <p className="font-display text-[clamp(2.8rem,9.6vw,4.5rem)] leading-[0.86] tracking-[-0.02em] tabular-nums text-[#6f6e6a]">
                  {padUnit(item.value)}
                </p>
                <p className="meta-label mt-4 text-sage-deep/80">
                  {item.label}
                </p>
                {index < countdownItems.length - 1 ? (
                  <span className="pointer-events-none absolute -right-[0.42rem] top-[0.05em] font-display text-[clamp(2.2rem,8vw,3.8rem)] leading-[0.86] text-[#6f6e6a] sm:-right-[0.8rem]">
                    :
                  </span>
                ) : null}
              </div>
            ))}
          </div>

          <p className="section-copy mt-6 text-center text-sage-deep/75">
            {date.display} a las {date.time}
          </p>
        </div>
      </div>
    </section>
  )
}
