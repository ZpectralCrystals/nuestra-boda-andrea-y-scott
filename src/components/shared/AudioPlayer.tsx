import { Pause, Play, TriangleAlert } from 'lucide-react'
import { useEffect, useId, useMemo, useRef, useState } from 'react'
import type { HeroContent } from '../../types/wedding'
import { extractYouTubeVideoId } from '../../utils/youtube'

type YouTubePlayer = {
  destroy(): void
  playVideo(): void
  pauseVideo(): void
  seekTo(seconds: number, allowSeekAhead?: boolean): void
  getDuration(): number
  getCurrentTime(): number
}

type YouTubePlayerFactory = new (
  elementId: string | HTMLElement,
  options?: {
    height?: string
    width?: string
    videoId?: string
    playerVars?: Record<string, number | string>
    events?: {
      onReady?: (event: { target: YouTubePlayer }) => void
      onStateChange?: (event: { target: YouTubePlayer; data: number }) => void
    }
  },
) => YouTubePlayer

type YouTubeApi = {
  Player: YouTubePlayerFactory
  PlayerState: {
    PLAYING: 1
    CUED: 5
  }
}

let youtubeApiPromise: Promise<void> | null = null

function loadYouTubeApi() {
  if (typeof window === 'undefined') {
    return Promise.resolve()
  }

  const youtubeWindow = window as Window & {
    YT?: YouTubeApi
    onYouTubeIframeAPIReady?: () => void
  }

  if (youtubeWindow.YT?.Player) {
    return Promise.resolve()
  }

  if (youtubeApiPromise) {
    return youtubeApiPromise
  }

  youtubeApiPromise = new Promise((resolve) => {
    const existingScript = document.querySelector<HTMLScriptElement>(
      'script[data-youtube-iframe-api="true"]',
    )

    if (!existingScript) {
      const script = document.createElement('script')
      script.src = 'https://www.youtube.com/iframe_api'
      script.async = true
      script.dataset.youtubeIframeApi = 'true'
      document.head.appendChild(script)
    }

    const previousHandler = youtubeWindow.onYouTubeIframeAPIReady
    youtubeWindow.onYouTubeIframeAPIReady = () => {
      previousHandler?.()
      resolve()
    }
  })

  return youtubeApiPromise
}

function formatTime(totalSeconds: number) {
  if (!Number.isFinite(totalSeconds) || totalSeconds <= 0) {
    return '0:00'
  }

  const hours = Math.floor(totalSeconds / 3600)
  const minutes = Math.floor((totalSeconds % 3600) / 60)
  const seconds = Math.floor(totalSeconds % 60)

  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`
  }

  return `${minutes}:${String(seconds).padStart(2, '0')}`
}

type AudioPlayerProps = {
  audio: HeroContent['audio']
}

export function AudioPlayer({ audio }: AudioPlayerProps) {
  if (audio.provider === 'file') {
    return (
      <div className="mt-6 w-full max-w-xl rounded-[1.75rem] border border-white/70 bg-white/80 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
        <div>
          <p className="card-kicker text-sage">
            Reproductor
          </p>
          <p className="card-title mt-2 text-ink">
            {audio.title}
          </p>
        </div>

        <audio className="mt-4 w-full" controls preload="none">
          <source src={audio.src} type={audio.mimeType} />
          Tu navegador no soporta audio HTML5.
        </audio>
      </div>
    )
  }

  return <YouTubeAudioPlayer title={audio.title} url={audio.url} />
}

type YouTubeAudioPlayerProps = {
  title: string
  url: string
}

function YouTubeAudioPlayer({ title, url }: YouTubeAudioPlayerProps) {
  const containerId = useId().replace(/:/g, '-')
  const playerRef = useRef<YouTubePlayer | null>(null)
  const [isReady, setIsReady] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const videoId = useMemo(() => extractYouTubeVideoId(url), [url])

  useEffect(() => {
    if (!videoId) {
      return
    }

    let isMounted = true

    loadYouTubeApi().then(() => {
      const youtubeWindow = window as Window & { YT?: YouTubeApi }

      if (!isMounted || !youtubeWindow.YT?.Player) {
        return
      }

      playerRef.current?.destroy()

      playerRef.current = new youtubeWindow.YT.Player(containerId, {
        height: '0',
        width: '0',
        videoId,
        playerVars: {
          playsinline: 1,
          rel: 0,
          modestbranding: 1,
        },
        events: {
          onReady: (event) => {
            if (!isMounted) {
              return
            }

            setIsReady(true)
            setDuration(event.target.getDuration())
          },
          onStateChange: (event) => {
            if (!youtubeWindow.YT?.PlayerState) {
              return
            }

            const state = event.data
            setIsPlaying(state === youtubeWindow.YT.PlayerState.PLAYING)

            if (state === youtubeWindow.YT.PlayerState.CUED) {
              setDuration(event.target.getDuration())
            }
          },
        },
      })
    })

    return () => {
      isMounted = false
      playerRef.current?.destroy()
      playerRef.current = null
    }
  }, [containerId, videoId])

  useEffect(() => {
    if (!isPlaying || !playerRef.current) {
      return
    }

    const timer = window.setInterval(() => {
      const player = playerRef.current
      if (!player) {
        return
      }

      setCurrentTime(player.getCurrentTime())
      const nextDuration = player.getDuration()
      if (nextDuration > 0) {
        setDuration(nextDuration)
      }
    }, 500)

    return () => window.clearInterval(timer)
  }, [isPlaying])

  const togglePlayback = () => {
    const player = playerRef.current
    if (!player) {
      return
    }

    if (isPlaying) {
      player.pauseVideo()
      return
    }

    player.playVideo()
  }

  const handleSeek = (value: number) => {
    const player = playerRef.current
    if (!player) {
      return
    }

    setCurrentTime(value)
    player.seekTo(value, true)
  }

  if (!videoId) {
    return (
      <div className="mt-6 max-w-xl rounded-[1.75rem] border border-amber-200 bg-amber-50 p-4 text-amber-900 shadow-[var(--shadow-card)]">
        <div className="flex items-center gap-3">
          <TriangleAlert className="h-5 w-5" />
          <p className="text-sm font-semibold">
            El enlace de YouTube no es válido.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6 w-full max-w-xl rounded-[1.75rem] border border-white/70 bg-white/80 p-4 shadow-[var(--shadow-card)] backdrop-blur-xl">
      <div id={containerId} className="hidden" />

      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button
          type="button"
          onClick={togglePlayback}
          disabled={!isReady}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-sage/12 text-sage transition hover:bg-sage/18 disabled:cursor-not-allowed disabled:opacity-50"
          aria-label={isPlaying ? 'Pausar audio' : 'Reproducir audio'}
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 translate-x-[1px]" />
          )}
        </button>

        <div className="min-w-0 flex-1">
          <p className="card-kicker text-sage">
            Reproductor
          </p>
          <p className="card-title mt-2 truncate text-ink">
            {title}
          </p>
        </div>

        <p className="self-end text-sm font-medium text-sage-deep/75 sm:self-auto">
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
      </div>

      <input
        type="range"
        min={0}
        max={duration || 0}
        step={1}
        value={Math.min(currentTime, duration || 0)}
        onChange={(event) => handleSeek(Number(event.target.value))}
        disabled={!isReady || duration <= 0}
        className="mt-4 h-2 w-full cursor-pointer accent-sage disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Barra de progreso del audio"
      />
    </div>
  )
}
