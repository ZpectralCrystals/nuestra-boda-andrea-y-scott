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
      <p className="section-kicker text-sage">
        {eyebrow}
      </p>
      <h2 className="section-title mt-4 text-ink">
        {title}
      </h2>
      <p className="section-copy mt-4 text-sage-deep/80">
        {description}
      </p>
    </div>
  )
}
