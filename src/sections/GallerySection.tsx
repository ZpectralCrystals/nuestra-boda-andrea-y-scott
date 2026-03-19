import { SectionHeader } from '../components/shared/SectionHeader'
import type { GalleryItem } from '../types/wedding'

type GallerySectionProps = {
  gallery: GalleryItem[]
}

export function GallerySection({ gallery }: GallerySectionProps) {
  return (
    <section id="galeria" className="section-shell mt-24">
      <SectionHeader
        eyebrow="Galería"
        title="Una propuesta visual lista para reemplazar"
        description="Dejé una composición editorial con imágenes locales para que la página se vea completa desde el primer minuto. Luego puedes sustituirlas por tus propias fotos."
      />

      <div className="mt-12 grid auto-rows-[18rem] gap-4 md:grid-cols-3">
        {gallery.map((photo) => (
          <figure
            key={photo.src}
            className={`group relative overflow-hidden rounded-[2rem] border border-white/70 shadow-[var(--shadow-card)] ${photo.className ?? ''}`}
          >
            <img
              src={photo.src}
              alt={photo.alt}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(19,18,15,0.28))]" />
          </figure>
        ))}
      </div>
    </section>
  )
}
