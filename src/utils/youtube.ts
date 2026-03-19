const YOUTUBE_VIDEO_ID_PATTERN =
  /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([A-Za-z0-9_-]{11})/

export function extractYouTubeVideoId(value: string) {
  const trimmed = value.trim()

  if (/^[A-Za-z0-9_-]{11}$/.test(trimmed)) {
    return trimmed
  }

  return trimmed.match(YOUTUBE_VIDEO_ID_PATTERN)?.[1] ?? null
}
