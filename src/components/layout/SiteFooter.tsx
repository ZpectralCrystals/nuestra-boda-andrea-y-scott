import type { CoupleNames } from '../../types/wedding'

type SiteFooterProps = {
  names: CoupleNames
}

export function SiteFooter({ names }: SiteFooterProps) {
  return (
    <footer className="section-shell pb-10 pt-6 text-center">
      <p className="text-sm uppercase tracking-[0.3em] text-sage-deep/70">
        {names.partnerOne} & {names.partnerTwo}
      </p>
      <p className="mt-3 text-sm text-sage-deep/70">
        Gracias por acompañarnos en este momento tan importante de nuestras vidas.
      </p>
    </footer>
  )
}
