import floralIllustration from '../assets/reference/floral.png'
import galleryOne from '../assets/reference/gallery-1.jpg'
import galleryTwo from '../assets/reference/gallery-2.jpg'
import galleryThree from '../assets/reference/gallery-3.jpg'
import heroImage from '../assets/reference/hero.jpg'
import type { WeddingPageData } from '../types/wedding'

/**
 * ZONA DE EDICION RAPIDA
 * Cambia estos valores primero.
 * El resto del archivo reutiliza estas constantes para evitar inconsistencias.
 */
const couple = {
  partnerOne: 'Andrea',
  partnerTwo: 'Scott',
}

function capitalize(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1)
}

const eventConfig = {
  dateIso: '2026-07-25T12:30:00-05:00',
  time: '12:30 p. m.',
  city: 'Arequipa, Perú',
  ceremonyVenue: 'Parroquia San Miguel Arcángel Cayma',
  receptionVenue: 'Villa Cascada',
  rsvpDeadlineLabel: '10 de julio de 2026',
}

const mapLinks = {
  ceremony: 'https://maps.app.goo.gl/1GwZotKpFYrouEpA7',
  reception: 'https://maps.app.goo.gl/hECfxK35uhMSMcbVA',
  lodging: 'https://maps.app.goo.gl/eC8z3qnHDvJuGDWe9?g_st=iw',
}

const eventDate = new Date(eventConfig.dateIso)
const eventDateDisplay = capitalize(
  new Intl.DateTimeFormat('es-PE', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'America/Lima',
  }).format(eventDate),
)
const eventDateMonth = capitalize(
  new Intl.DateTimeFormat('es-PE', {
    month: 'short',
    timeZone: 'America/Lima',
  })
    .format(eventDate)
    .replace('.', ''),
)
const eventDateDay = new Intl.DateTimeFormat('es-PE', {
  day: 'numeric',
  timeZone: 'America/Lima',
}).format(eventDate)

/**
 * EDITA ESTE ARCHIVO PARA PERSONALIZAR LA BODA.
 *
 * Recomendación:
 * 1. Cambia primero nombres, fecha y links.
 * 2. Luego actualiza textos, agenda y ubicaciones.
 * 3. Si usas YouTube, pega el link completo en `hero.audio.url`.
 * 4. Finalmente reemplaza las imágenes importadas al inicio.
 *
 * Cuando más adelante conectemos backend o CMS,
 * esta misma estructura nos servirá como contrato de datos.
 */
export const weddingContent = {
  /**
   * Menú principal del sitio.
   * Puedes cambiar etiquetas o quitar secciones si no las necesitas.
   */
  navigation: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Ubicaciones', href: '#ubicaciones' },
    { label: 'Detalles', href: '#detalles' },
    { label: 'Galería', href: '#galeria' },
    { label: 'RSVP', href: '#confirmacion' },
  ],

  /**
   * Bloque principal del hero.
   */
  hero: {
    eyebrow: 'Nuestra boda',
    intro: 'Con la bendición de Dios, nuestros padres y nuestros seres queridos.',
    names: couple,
    description:
      'Nos hace muchísima ilusión compartir contigo un día lleno de fe, amor y celebración. Aquí encontrarás cada detalle importante para acompañarnos en esta fecha tan especial.',
    audio: {
      provider: 'youtube',
      title: 'Nuestra canción',
      url: 'https://music.youtube.com/watch?v=rMdSSWZxHyQ&si=ZPINkFuv1bGXwmEH',
    },
  },

  /**
   * Fecha y datos rápidos del evento.
   * `iso` es la fuente para la cuenta regresiva.
   */
  date: {
    iso: eventConfig.dateIso,
    display: eventDateDisplay,
    month: eventDateMonth,
    day: eventDateDay,
    time: eventConfig.time,
    venue: eventConfig.ceremonyVenue,
    city: eventConfig.city,
  },

  /**
   * Frase destacada.
   */
  quote: {
    text: 'Uno solo puede ser vencido, pero dos pueden resistir. ¡La cuerda de tres hilos no se rompe fácilmente!',
    citation: 'Eclesiastés 4:12',
  },

  /**
   * Familia, padrinos y acompañantes.
   */
  people: [
    {
      title: 'Padres de la novia',
      names: ['Eleana Elizabeth Rozas Delgado', 'Luis Ronald Llamas Menéndez'],
    },
    {
      title: 'Padres del novio',
      names: ['Sonia Raquel Morote Ortiz', 'Percy Benito Mendizabal Salas'],
    },
    {
      title: 'Padrinos',
      names: ['Eddy Frank Llamas Menéndez', 'María Esther Garate Cornejo'],
    },
    {
      title: 'Consejeros espirituales',
      names: ['Yamilia Pinto de Rozas', 'Herbert Millán Rozas Delgado'],
    },
  ],

  /**
   * Tarjetas de historia o mensaje de la pareja.
   */
  story: [
    {
      title: 'Un sí que creció con nosotros',
      description:
        'Nuestra historia se fue construyendo con conversaciones largas, pequeños detalles y la certeza de que caminar juntos siempre se sintió como hogar.',
    },
    {
      title: 'Fe, familia y propósito',
      description:
        'Soñamos con una celebración íntima, elegante y profundamente significativa, donde cada momento refleje el amor que Dios ha puesto en nuestro camino.',
    },
    {
      title: 'Queremos celebrarlo contigo',
      description:
        'Tu presencia hará que este día sea aún más especial. Gracias por acompañarnos en una etapa que recordaremos para siempre.',
    },
  ],

  /**
   * Agenda del evento.
   * `icon` controla el ícono visual en cada tarjeta.
   */
  schedule: [
    {
      time: '12:30 p. m.',
      title: 'Ceremonia religiosa',
      description:
        'Comenzaremos la jornada dando gracias y celebrando nuestra unión en un momento íntimo y lleno de significado.',
      icon: 'ceremony',
    },
    {
      time: '2:00 p. m.',
      title: 'Brindis y almuerzo',
      description:
        'Compartiremos la mesa, las fotografías y los abrazos con quienes han sido parte importante de nuestra historia.',
      icon: 'meal',
    },
    {
      time: '5:00 p. m.',
      title: 'Baile y celebración',
      description:
        'Abriremos la pista para celebrar juntos, brindar una vez más y disfrutar la tarde hasta el final.',
      icon: 'party',
    },
  ],

  /**
   * Puntos importantes con enlaces a mapas.
   */
  locations: [
    {
      title: 'Ceremonia religiosa',
      place: eventConfig.ceremonyVenue,
      details: 'Consulta la ruta sugerida y la ubicación exacta en Google Maps.',
      mapUrl: mapLinks.ceremony,
    },
    {
      title: 'Recepción',
      place: eventConfig.receptionVenue,
      details: 'Te recomendamos revisar este punto antes de salir para llegar con tranquilidad.',
      mapUrl: mapLinks.reception,
    },
    {
      title: 'Hospedaje recomendado',
      place: eventConfig.city,
      details: 'Si vienes desde fuera, aquí tienes una referencia útil para planear tu estadía.',
      mapUrl: mapLinks.lodging,
    },
  ],

  /**
   * Tarjetas informativas.
   * `icon` puede ser: shirt, gift o message.
   */
  details: [
    {
      title: 'Código de vestimenta',
      label: 'Formal elegante',
      description:
        'Nos encantará ver tonos neutros, tierra, arena y verde oliva. Evita looks demasiado informales para mantener la armonía del evento.',
      icon: 'shirt',
    },
    {
      title: 'Regalos',
      label: 'Tu presencia es lo más importante',
      description:
        'Si deseas tener un detalle con nosotros, hemos preparado una mesa de sobres para ese momento especial.',
      icon: 'gift',
    },
    {
      title: 'Confirmación',
      label: `Antes del ${eventConfig.rsvpDeadlineLabel}`,
      description:
        'Agradeceremos mucho que nos confirmes con tiempo para organizar cada detalle con cariño y cuidar tu lugar.',
      icon: 'message',
    },
  ],

  /**
   * Galería principal.
   * Para cambiar fotos, reemplaza los imports del inicio o agrega nuevas imágenes.
   */
  gallery: [
    {
      src: heroImage,
      alt: 'Retrato principal de la pareja',
      className: 'md:col-span-2 md:row-span-2',
    },
    {
      src: galleryOne,
      alt: 'Detalle romántico de la pareja',
    },
    {
      src: galleryTwo,
      alt: 'Sesión fotográfica de la pareja',
    },
    {
      src: galleryThree,
      alt: 'Imagen editorial de la pareja',
      className: 'md:col-span-2',
    },
  ],

  /**
   * Llamado final a la acción.
   */
  cta: {
    rsvpUrl: 'https://wa.link/zfg7zc',
    rsvpLabel: 'Confirmar por WhatsApp',
    note: 'Si tienes restricciones alimentarias, vienes con niños o necesitas ayuda con el traslado, escríbenos en ese mismo mensaje.',
  },

  /**
   * Assets decorativos y de portada.
   * Aquí puedes apuntar a nuevas imágenes si luego reemplazas los archivos.
   */
  assets: {
    heroImage,
    floralIllustration,
  },
} satisfies WeddingPageData
