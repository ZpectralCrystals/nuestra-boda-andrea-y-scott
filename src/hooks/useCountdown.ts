import { useEffect, useState } from 'react'

export type CountdownParts = {
  days: string
  hours: string
  minutes: string
  seconds: string
}

export function getCountdownParts(targetDate: string): CountdownParts {
  const difference = new Date(targetDate).getTime() - Date.now()

  if (difference <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    }
  }

  const totalSeconds = Math.floor(difference / 1000)
  const days = Math.floor(totalSeconds / 86400)
  const hours = Math.floor((totalSeconds % 86400) / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = totalSeconds % 60

  return {
    days: String(days).padStart(2, '0'),
    hours: String(hours).padStart(2, '0'),
    minutes: String(minutes).padStart(2, '0'),
    seconds: String(seconds).padStart(2, '0'),
  }
}

export function useCountdown(targetDate: string) {
  const [countdown, setCountdown] = useState<CountdownParts>(() =>
    getCountdownParts(targetDate),
  )

  useEffect(() => {
    const timer = window.setInterval(() => {
      setCountdown(getCountdownParts(targetDate))
    }, 1000)

    return () => window.clearInterval(timer)
  }, [targetDate])

  return countdown
}
