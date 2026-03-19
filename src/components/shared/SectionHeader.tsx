type SectionHeaderProps = {
  eyebrow: string
  title: string
  description: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-sage">
        {eyebrow}
      </p>
      <h2 className="mt-4 font-display text-4xl leading-none text-ink md:text-6xl">
        {title}
      </h2>
      <p className="mt-5 text-sm leading-7 text-sage-deep/80 md:text-lg">
        {description}
      </p>
    </div>
  )
}
