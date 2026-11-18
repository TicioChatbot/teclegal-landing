import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Building2,
  CheckCircle2,
  ChevronDown,
  Clock,
  Compass,
  Cpu,
  Globe,
  Handshake,
  Landmark,
  Layers,
  Lock,
  Mail,
  MapPin,
  Menu,
  Scale,
  ShieldCheck,
  Sparkles,
  X
} from 'lucide-react'

type CaseCategory =
  | 'Todos'
  | 'Contratos & LegalTech'
  | 'Arbitraje & Disputas'
  | 'Fiduciario & Financiero'

interface CaseStudyItem {
  id: string
  category: Exclude<CaseCategory, 'Todos'>
  entity: string
  tag: string
  summary: string
}

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'edb',
    category: 'Contratos & LegalTech',
    entity: 'Emirates Development Bank (EDB)',
    tag: 'Financiamiento Sostenible & IA',
    summary:
      'Asesoría jurídica en la estructuración de financiamiento para pymes en proyectos de inteligencia artificial, diseño de instrumentos financieros sostenibles e incorporación de KPIs de sostenibilidad y uso responsable de la IA en los contratos.'
  },
  {
    id: 'mas',
    category: 'Contratos & LegalTech',
    entity: 'Autoridad Monetaria de Singapur (MAS)',
    tag: 'Online Dispute Resolution (ODR)',
    summary:
      'Asesoría en la implementación de mecanismos de resolución de disputas en línea (ODR) para la gestión preventiva y ágil de conflictos vinculados con financiamiento sostenible.'
  },
  {
    id: 'katoen',
    category: 'Contratos & LegalTech',
    entity: 'Katoen Natie (Bélgica)',
    tag: 'Soft Landing & Contratación',
    summary:
      'Asesoría jurídica integral en el establecimiento de la filial colombiana, así como la revisión y análisis de contratos nacionales e internacionales derivados de su operación en Colombia.'
  },
  {
    id: 'eco1st-nextlevel',
    category: 'Contratos & LegalTech',
    entity: 'Eco1st & Next Level Solutions (EE. UU.)',
    tag: 'Consultoría Permanente',
    summary:
      'Consultoría jurídica permanente para el establecimiento y operación continua en Colombia de ambas compañías estadounidenses, incluyendo revisión estratégica de contratos nacionales e internacionales.'
  },
  {
    id: 'tribunal-nali',
    category: 'Arbitraje & Disputas',
    entity: 'Tribunal Arbitral Nali S.A.S. vs. Canales Desarrolladores S.A.S.',
    tag: 'Árbitro de Tribunal',
    summary:
      'Actuación como árbitro en controversia de restitución inmobiliaria bajo un contrato de fiducia mercantil, aplicando criterios de rigor contractual y eficiencia procesal.'
  },
  {
    id: 'tribunal-soporte',
    category: 'Arbitraje & Disputas',
    entity: 'Soporte Vital & Empresarial S.A.S. vs. Fiduciaria Colpatria S.A.',
    tag: 'Secretario de Tribunal Arbitral',
    summary:
      'Secretario de Tribunal Arbitral en litigio arbitral complejo sobre incumplimiento en promesa de compraventa y determinación de responsabilidad de la entidad fiduciaria.'
  },
  {
    id: 'hoteles-fiducia',
    category: 'Fiduciario & Financiero',
    entity: 'Esquemas Fiduciarios Inmobiliarios para Proyectos Hoteleros',
    tag: 'Estructuración Fiduciaria',
    summary:
      'Acompañamiento integral en la estructuración de esquemas fiduciarios orientados a la comercialización de derechos fiduciarios en Colombia, negociación con la sociedad fiduciaria y puesta en marcha contractual.'
  },
  {
    id: 'garantias-bursatil',
    category: 'Fiduciario & Financiero',
    entity: 'Garantías Mobiliarias, Infraestructura Bursátil y Litigio Financiero',
    tag: 'Banca & Mercado de Valores',
    summary:
      'Conceptos sobre fiducia en garantía para sistemas de compensación y liquidación de valores y depósitos centralizados, además de representación judicial ante la Superintendencia Financiera en estructuras fiduciarias inmobiliarias.'
  }
]

const CASE_FILTERS: CaseCategory[] = [
  'Todos',
  'Contratos & LegalTech',
  'Arbitraje & Disputas',
  'Fiduciario & Financiero'
]

/**
 * Vector SVG emblem matching TecLegal's concentric dot-arc brand mark
 * (8 outer gold dots #e2c509 + 6 inner magenta/burgundy dots #ac1259)
 */
const TecLegalMark: React.FC = () => {
  const outerDots = [
    { cx: 34, cy: 10 },
    { cx: 23, cy: 11.5 },
    { cx: 14, cy: 17.5 },
    { cx: 9, cy: 26 },
    { cx: 9, cy: 36 },
    { cx: 14, cy: 44.5 },
    { cx: 23, cy: 50.5 },
    { cx: 34, cy: 52 }
  ]

  const innerDots = [
    { cx: 31, cy: 18 },
    { cx: 22.5, cy: 21 },
    { cx: 17.5, cy: 27.5 },
    { cx: 17.5, cy: 34.5 },
    { cx: 22.5, cy: 41 },
    { cx: 31, cy: 44 }
  ]

  return (
    <span className="brand-monogram">
      <svg
        width="36"
        height="36"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="brand-svg-mark"
      >
        {outerDots.map((dot, idx) => (
          <circle key={`outer-${idx}`} cx={dot.cx} cy={dot.cy} r="3.4" fill="#e2c509" />
        ))}
        {innerDots.map((dot, idx) => (
          <circle key={`inner-${idx}`} cx={dot.cx} cy={dot.cy} r="2.6" fill="#ac1259" />
        ))}
      </svg>
      <span className="brand-wordmark">TECLEGAL</span>
    </span>
  )
}

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeFilter, setActiveFilter] = useState<CaseCategory>('Todos')
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    asunto: 'Comercio Internacional y Nearshoring',
    mensaje: ''
  })

  const privacyDialogRef = useRef<HTMLDialogElement | null>(null)

  useEffect(() => {
    const dialog = privacyDialogRef.current
    if (!dialog) return

    if (!('closedBy' in HTMLDialogElement.prototype)) {
      const handleBackdropClick = (event: MouseEvent) => {
        if (event.target !== dialog) return
        const rect = dialog.getBoundingClientRect()
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width

        if (isDialogContent) return
        dialog.close()
      }

      dialog.addEventListener('click', handleBackdropClick)
      return () => {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  const openPrivacyDialog = () => {
    privacyDialogRef.current?.showModal()
  }

  const closePrivacyDialog = () => {
    privacyDialogRef.current?.close()
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[TecLegal Web] Consulta: ${formData.asunto} - ${formData.empresa || formData.nombre}`
    )
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
        `Empresa / Entidad: ${formData.empresa || 'No especificada'}\n` +
        `Correo: ${formData.correo}\n` +
        `Área de consulta: ${formData.asunto}\n\n` +
        `Descripción:\n${formData.mensaje}\n\n---\nEnviado desde el portal oficial de TecLegal S.A.S`
    )
    window.location.href = `mailto:contacto@teclegal.co?subject=${subject}&body=${body}`
    setFormSubmitted(true)
  }

  const filteredCases =
    activeFilter === 'Todos'
      ? CASE_STUDIES
      : CASE_STUDIES.filter((item) => item.category === activeFilter)

  return (
    <div className="page-canvas">
      <div className="ambient-glow-burgundy" aria-hidden="true" />
      <div className="ambient-glow-gold" aria-hidden="true" />

      <main className="showcase-stack">
        {/* ====================================================================
            SECCIÓN 1: HERO SHOWCASE ARQUITECTÓNICO (INSPIRACIÓN EDITORIAL)
           ==================================================================== */}
        <section id="inicio" className="hero-showcase-frame">
          <picture className="hero-picture-layer">
            <source media="(max-width: 720px)" srcSet="./arquitectura-portada-mobile.webp" />
            <img
              src="./arquitectura-portada.webp"
              alt="Arquitectura corporativa contemporánea — TecLegal S.A.S."
              className="hero-bg-img"
              fetchPriority="high"
              width={1400}
              height={2100}
            />
          </picture>
          <div className="hero-scrim-left" aria-hidden="true" />
          <div className="hero-scrim-bottom" aria-hidden="true" />
          <div className="hero-scrim-top" aria-hidden="true" />

          {/* Barra de navegación flotante oscura */}
          <header className="floating-glass-nav">
            <a href="#inicio" className="nav-brand-link" aria-label="TecLegal Inicio">
              <TecLegalMark />
            </a>

            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <nav aria-label="Navegación principal" className={`nav-center-wrap ${mobileMenuOpen ? 'open' : ''}`}>
              <ul className="nav-links-list">
                <li>
                  <a href="#inicio" className="nav-link-item active" onClick={() => setMobileMenuOpen(false)}>
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#nosotros" className="nav-link-item" onClick={() => setMobileMenuOpen(false)}>
                    La Firma
                  </a>
                </li>
                <li>
                  <a href="#servicios" className="nav-link-item" onClick={() => setMobileMenuOpen(false)}>
                    Prácticas
                  </a>
                </li>
                <li>
                  <a href="#abogados" className="nav-link-item" onClick={() => setMobileMenuOpen(false)}>
                    Socios
                  </a>
                </li>
                <li>
                  <a href="#casos" className="nav-link-item" onClick={() => setMobileMenuOpen(false)}>
                    Experiencia
                  </a>
                </li>
              </ul>

              <div className="nav-actions-right">
                <span className="lang-pill" aria-label="Idioma Español">
                  <span>ES</span>
                  <ChevronDown size={14} />
                </span>
                <a
                  href="#contacto"
                  className="btn-pill-wine"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span>Agendar Consulta</span>
                  <span className="pill-circle-white">
                    <ArrowRight size={14} strokeWidth={2.2} />
                  </span>
                </a>
              </div>
            </nav>
          </header>

          {/* Cuerpo principal del Hero: texto editorial a la izquierda + tarjeta métrica a la derecha */}
          <div className="hero-split-body">
            <div className="hero-content-zone">
              <div className="eyebrow-pill">
                <span className="eyebrow-dot-circle">
                  <Sparkles size={12} strokeWidth={2.2} />
                </span>
                <span>Firma Boutique &bull; Bogotá &amp; Alcance Global</span>
              </div>

              <h1 className="hero-headline-serif">
                Estrategia Legal de Alto Nivel para Negocios Transnacionales
              </h1>

              <p className="hero-lead-copy">
                Combinamos 20 años de trayectoria sénior en contratos internacionales, defensa comercial y arbitraje con herramientas <strong>LegalTech</strong> para proteger y escalar sus operaciones globales.
              </p>

              <div className="hero-cta-group">
                <a href="#contacto" className="btn-pill-light">
                  <span>Iniciar Consulta</span>
                  <span className="pill-circle-wine">
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </a>
                <a href="#servicios" className="btn-pill-ghost">
                  <span>Explorar Prácticas</span>
                </a>
              </div>
            </div>

            <aside className="hero-glass-metrics" aria-label="Indicadores clave de TecLegal">
              <div className="metric-header-row">
                <span className="metric-badge-gold">TECLEGAL S.A.S.</span>
                <Building2 size={18} strokeWidth={1.6} className="metric-icon-muted" />
              </div>

              <div className="metric-items-stack">
                <div className="metric-stat-block">
                  <span className="metric-number-serif">+20 Años</span>
                  <span className="metric-caption">
                    Trayectoria sénior en contratación internacional, banca, fiducias y comercio exterior.
                  </span>
                </div>

                <div className="metric-stat-block">
                  <span className="metric-number-serif">LegalTech &amp; ODR</span>
                  <span className="metric-caption">
                    Análisis contractual asistido por tecnología y mecanismos digitales de resolución de disputas.
                  </span>
                </div>

                <div className="metric-stat-block">
                  <span className="metric-number-serif">Alcance Global</span>
                  <span className="metric-caption">
                    Mandatos ejecutados entre Colombia, EE. UU., Europa, Singapur y Emiratos Árabes.
                  </span>
                </div>
              </div>
            </aside>
          </div>

          {/* Barra inferior de 3 pilares dentro del Hero con íconos renovados */}
          <div className="hero-bottom-features">
            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Landmark size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="hero-feature-title">Rigor Transnacional</h2>
                <p className="hero-feature-desc">
                  Estructuración contractual, fiducias y defensa comercial bajo estándares jurídicos internacionales.
                </p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Cpu size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="hero-feature-title">Impulso LegalTech</h2>
                <p className="hero-feature-desc">
                  Herramientas digitales avanzadas para optimizar el análisis jurídico, la prevención de riesgos y el ODR.
                </p>
              </div>
            </div>

            <div className="hero-feature-item">
              <div className="hero-feature-icon">
                <Lock size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="hero-feature-title">Confidencialidad Boutique</h2>
                <p className="hero-feature-desc">
                  Atención directa de socios sénior en Bogotá con independencia ética y cero conflictos de interés.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 2: ¿QUIÉNES SOMOS? & ¿POR QUÉ TECLEGAL?
           ==================================================================== */}
        <section id="nosotros" className="framed-showcase-section">
          <div className="about-showcase-grid">
            <div className="about-narrative-col">
              <div className="eyebrow-pill">
                <span className="eyebrow-dot-circle">
                  <ShieldCheck size={12} strokeWidth={2.2} />
                </span>
                <span>Sobre TecLegal S.A.S.</span>
              </div>

              <h2 className="section-headline-serif">
                Rigor Sénior de 20 Años con Perspectiva Transnacional
              </h2>

              <p className="body-copy-muted">
                Somos una firma boutique con sede en Bogotá, especializada en la gestión integral de riesgos legales para el entorno empresarial transnacional. Nuestro equipo sénior combina 20 años de trayectoria jurídica con una perspectiva avanzada en contratos y transacciones internacionales.
              </p>
              <p className="body-copy-muted">
                Nuestra práctica se apoya en herramientas <strong>LegalTech</strong> para fortalecer el análisis jurídico, optimizar procesos y ofrecer a nuestros clientes soluciones rigurosas, eficientes y alineadas con las exigencias contemporáneas del ejercicio legal.
              </p>

              <div className="about-photo-card">
                <img
                  src="./equipo-reunion.jpg"
                  alt="Mesa de trabajo y equipo jurídico de TecLegal S.A.S. en Bogotá"
                  className="about-team-photo"
                  loading="lazy"
                  width={746}
                  height={809}
                />
                <div className="about-photo-overlay">
                  <span className="ethics-badge">TECLEGAL S.A.S. &bull; Sede Bogotá</span>
                  <p className="ethics-note">
                    Independencia ética y ausencia total de incompatibilidades o conflictos de interés en cada mandato corporativo.
                  </p>
                </div>
              </div>
            </div>

            <div className="pillars-bento-grid">
              <article className="glass-pillar-card">
                <div className="glass-icon-ring">
                  <Cpu size={22} strokeWidth={1.6} />
                </div>
                <h3 className="card-headline-serif">Innovación continua</h3>
                <p className="card-body-copy">
                  Incorporamos las tecnologías más recientes para optimizar nuestros servicios, la gestión documental y los procesos de análisis contractual.
                </p>
              </article>

              <article className="glass-pillar-card">
                <div className="glass-icon-ring gold-ring">
                  <BookOpen size={22} strokeWidth={1.6} />
                </div>
                <h3 className="card-headline-serif">Excelencia legal</h3>
                <p className="card-body-copy">
                  Nos esforzamos por ofrecer asesoramiento y soluciones jurídicas de la más alta calidad técnica bajo estándares locales e internacionales.
                </p>
              </article>

              <article className="glass-pillar-card">
                <div className="glass-icon-ring">
                  <Handshake size={22} strokeWidth={1.6} />
                </div>
                <h3 className="card-headline-serif">Atención personalizada</h3>
                <p className="card-body-copy">
                  Entendemos las necesidades únicas de cada cliente y adaptamos nuestras soluciones jurídicas para satisfacer sus requerimientos específicos.
                </p>
              </article>

              <article className="glass-pillar-card">
                <div className="glass-icon-ring gold-ring">
                  <ShieldCheck size={22} strokeWidth={1.6} />
                </div>
                <h3 className="card-headline-serif">Valor humano</h3>
                <p className="card-body-copy">
                  Más allá de nuestros conocimientos legales, valoramos y priorizamos el bienestar y la dignidad de las personas, ponderando el impacto humano y social.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 3: ÁREAS DE PRÁCTICA Y SERVICIOS
           ==================================================================== */}
        <section id="servicios" className="framed-showcase-section">
          <div className="section-header-editorial">
            <div className="eyebrow-pill">
              <span className="eyebrow-dot-circle">
                <Briefcase size={12} strokeWidth={2.2} />
              </span>
              <span>Nuestras Especialidades</span>
            </div>
            <h2 className="section-headline-serif">
              Soluciones Jurídicas para Operaciones Globales
            </h2>
            <p className="section-subcopy">
              Transformamos la complejidad regulatoria en operaciones transfronterizas seguras, eficientes y altamente competitivas.
            </p>
          </div>

          <div className="services-3col-grid">
            {/* Área 01 */}
            <article className="service-showcase-card">
              <div className="service-card-top">
                <div className="service-icon-capsule">
                  <Compass size={22} strokeWidth={1.6} />
                </div>
                <span className="service-index-num">01</span>
              </div>
              <h3 className="service-title-serif">Comercio Internacional &amp; Defensa Comercial</h3>
              <p className="service-copy">
                Estructuramos operaciones de <em>nearshoring</em>, asesoramos en el aprovechamiento de tratados de libre comercio y gestionamos la protección de flujos de exportación e importación.
              </p>
              <ul className="service-bullet-list">
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Representación y lobby de alto nivel en investigaciones de defensa comercial (antidumping, salvaguardias y subvenciones).</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Estructuración logística y aduanera para cadenas de suministro en nearshoring.</span>
                </li>
              </ul>
              <a href="#contacto" className="btn-pill-card-action">
                <span>Consultar área</span>
                <ArrowUpRight size={15} />
              </a>
            </article>

            {/* Área 02 */}
            <article className="service-showcase-card">
              <div className="service-card-top">
                <div className="service-icon-capsule">
                  <Layers size={22} strokeWidth={1.6} />
                </div>
                <span className="service-index-num">02</span>
              </div>
              <h3 className="service-title-serif">Negocios Internacionales, Inversión &amp; Fiducias</h3>
              <p className="service-copy">
                Facilitamos la expansión de empresas internacionales en Colombia a través de procesos de <em>soft landing</em> y estructuración legal estratégica, junto con redacción y revisión de contratos bajo estándares internacionales.
              </p>
              <ul className="service-bullet-list">
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Revisión bajo derecho local de <em>loan agreements</em> entre SPVs extranjeros y deudores locales (enforceability y retenciones fiscales).</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Contratos de fideicomiso de garantía, esquemas de cesión de derechos de cobro y validación regulatoria.</span>
                </li>
              </ul>
              <a href="#contacto" className="btn-pill-card-action">
                <span>Consultar área</span>
                <ArrowUpRight size={15} />
              </a>
            </article>

            {/* Área 03 */}
            <article className="service-showcase-card">
              <div className="service-card-top">
                <div className="service-icon-capsule">
                  <Scale size={22} strokeWidth={1.6} />
                </div>
                <span className="service-index-num">03</span>
              </div>
              <h3 className="service-title-serif">Resolución de Disputas, Arbitraje &amp; ODR</h3>
              <p className="service-copy">
                Combinamos la agilidad de una firma boutique con la visión estratégica de nuestro socio líder, árbitro en los principales centros del país y centros internacionales como <strong>E-bram (Hong Kong)</strong> y la <strong>Cámara de Comercio de Madrid</strong>.
              </p>
              <ul className="service-bullet-list">
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Negociación, mediación, conciliación, arbitraje comercial/fiduciario y litigio estratégico.</span>
                </li>
                <li>
                  <CheckCircle2 size={15} className="bullet-gold" />
                  <span>Mecanismos de <em>Online Dispute Resolution</em> (ODR) respaldados por herramientas LegalTech.</span>
                </li>
              </ul>
              <a href="#contacto" className="btn-pill-card-action">
                <span>Consultar área</span>
                <ArrowUpRight size={15} />
              </a>
            </article>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 4: SOCIOS DIRECTORES / ABOGADOS
           ==================================================================== */}
        <section id="abogados" className="framed-showcase-section">
          <div className="section-header-editorial">
            <div className="eyebrow-pill">
              <span className="eyebrow-dot-circle">
                <Landmark size={12} strokeWidth={2.2} />
              </span>
              <span>Liderazgo Sénior</span>
            </div>
            <h2 className="section-headline-serif">Socios Directores</h2>
            <p className="section-subcopy">
              Trayectoria académica internacional, experiencia arbitral y conocimiento profundo del sector financiero y corporativo.
            </p>
          </div>

          <div className="partners-2col-grid">
            {/* Socio 1: Nicolás Lozada Pimiento */}
            <article className="partner-bento-card">
              <div className="partner-portrait-col">
                <img
                  src="./nicolas-lozada.png"
                  alt="Nicolás Lozada Pimiento - Socio Fundador de TecLegal"
                  className="partner-portrait-img"
                  loading="lazy"
                  width={362}
                  height={362}
                />
                <span className="partner-role-pill">Socio Fundador</span>
              </div>

              <div className="partner-bio-col">
                <h3 className="partner-name-serif">Nicolás Lozada Pimiento</h3>
                <p className="partner-specialty">
                  Negocios Internacionales, Arbitraje, Comercio Exterior &amp; LegalTech
                </p>
                <p className="partner-bio-text">
                  Abogado y profesor universitario con más de 20 años de experiencia en estructuración de esquemas contractuales complejos, arbitraje comercial y comercio exterior. Fundador de <strong>REDEK</strong>, la primera startup colombiana dedicada a la justicia digital y resolución de disputas en línea (ODR).
                </p>
                <ul className="partner-credentials">
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Maestrías en Derecho (LL.M.) por New York University (NYU) y National University of Singapore (NUS).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Árbitro y secretario de tribunales en disputas comerciales, financieras y fiduciarias (E-bram Hong Kong, Cámara de Madrid).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Consultor y delegado de Colombia ante Naciones Unidas; miembro de NCTDR, ICODR y TCL.</span>
                  </li>
                </ul>
              </div>
            </article>

            {/* Socio 2: Jorge Armando Corredor Higuera */}
            <article className="partner-bento-card">
              <div className="partner-portrait-col">
                <img
                  src="./jorge-corredor.png"
                  alt="Jorge Armando Corredor Higuera - Socio Director de TecLegal"
                  className="partner-portrait-img"
                  loading="lazy"
                  width={362}
                  height={362}
                />
                <span className="partner-role-pill">Socio Director</span>
              </div>

              <div className="partner-bio-col">
                <h3 className="partner-name-serif">Jorge Armando Corredor Higuera</h3>
                <p className="partner-specialty">
                  Derecho Financiero, Mercado de Valores, Crédito &amp; Fiducias
                </p>
                <p className="partner-bio-text">
                  Abogado y especialista de la Universidad Nacional de Colombia, Máster (LL.M.) en Derecho Internacional, Inversiones, Comercio y Arbitraje por Heidelberg University (Alemania) y Doctor en Derecho (Ph.D.) por la Universidad Carlos III de Madrid (España).
                </p>
                <ul className="partner-credentials">
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Exfuncionario de la Superintendencia Financiera de Colombia y árbitro nacional.</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Miembro del Comité Académico y Tribunal/Cámara Disciplinaria de la Bolsa Mercantil de Colombia (BMC) y del Autorregulador del Mercado de Valores (AMV).</span>
                  </li>
                  <li>
                    <CheckCircle2 size={15} className="bullet-wine" />
                    <span>Docente de pregrado y posgrado en derecho bancario y bursátil en la Universidad Externado de Colombia.</span>
                  </li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 5: CASOS DE ÉXITO Y EXPERIENCIA ESPECÍFICA
           ==================================================================== */}
        <section id="casos" className="framed-showcase-section">
          <div className="cases-header-flex">
            <div>
              <div className="eyebrow-pill">
                <span className="eyebrow-dot-circle">
                  <Globe size={12} strokeWidth={2.2} />
                </span>
                <span>Casos de Éxito &amp; Track Record</span>
              </div>
              <h2 className="section-headline-serif">Experiencia Específica Documentada</h2>
            </div>

            <div className="filter-pills-row" role="tablist" aria-label="Filtrar casos de éxito por área">
              {CASE_FILTERS.map((category) => (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={activeFilter === category}
                  onClick={() => setActiveFilter(category)}
                  className={`filter-pill-btn ${activeFilter === category ? 'is-active' : ''}`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="cases-2col-grid">
            {filteredCases.map((item) => (
              <article key={item.id} className="case-glass-card">
                <div className="case-card-meta">
                  <span className="case-tag-pill">{item.tag}</span>
                  <span className="case-category-label">{item.category}</span>
                </div>
                <h3 className="case-entity-serif">{item.entity}</h3>
                <p className="case-summary-copy">{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 6: CONTACTO Y SOLICITUD DE PROPUESTA
           ==================================================================== */}
        <section id="contacto" className="framed-showcase-section contact-showcase-frame">
          <div className="contact-split-grid">
            <div className="contact-left-panel">
              <div>
                <div className="eyebrow-pill">
                  <span className="eyebrow-dot-circle">
                    <Mail size={12} strokeWidth={2.2} />
                  </span>
                  <span>Contacto Directo</span>
                </div>

                <h2 className="section-headline-serif">
                  Iniciemos una Conversación Estratégica
                </h2>

                <p className="body-copy-muted">
                  Evaluamos cada mandato bajo estricta confidencialidad, ofreciendo esquemas flexibles de tarifa fija por alcance o modelo por horas consumidas conforme a las necesidades de su operación.
                </p>

                <div className="contact-meta-list">
                  <div className="contact-meta-row">
                    <div className="contact-icon-circle">
                      <MapPin size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <span className="meta-label-small">Sede Principal</span>
                      <p className="meta-value-strong">Bogotá D.C., Colombia</p>
                    </div>
                  </div>

                  <div className="contact-meta-row">
                    <div className="contact-icon-circle">
                      <Mail size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <span className="meta-label-small">Correo Institucional</span>
                      <p className="meta-value-strong">contacto@teclegal.co</p>
                    </div>
                  </div>

                  <div className="contact-meta-row">
                    <div className="contact-icon-circle">
                      <Clock size={18} strokeWidth={1.6} />
                    </div>
                    <div>
                      <span className="meta-label-small">Modalidades de Honorarios</span>
                      <p className="meta-value-strong">Tarifa Fija por Proyecto o Modelo por Horas</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="contact-trust-seals">
                <div className="trust-seal-chip">
                  <Handshake size={15} strokeWidth={1.6} />
                  <span>Atención Personalizada</span>
                </div>
                <div className="trust-seal-chip">
                  <Cpu size={15} strokeWidth={1.6} />
                  <span>Análisis LegalTech</span>
                </div>
                <div className="trust-seal-chip">
                  <Lock size={15} strokeWidth={1.6} />
                  <span>Confidencialidad Total</span>
                </div>
              </div>
            </div>

            <div className="contact-right-panel">
              {formSubmitted ? (
                <div className="form-success-glass" role="status">
                  <h3 className="section-headline-serif" style={{ fontSize: '1.9rem' }}>
                    ¡Solicitud Preparada!
                  </h3>
                  <p className="body-copy-muted">
                    Hemos preparado el borrador de su consulta para nuestros socios directores. Si su aplicación de correo no se abrió automáticamente, escríbanos directamente a{' '}
                    <strong>contacto@teclegal.co</strong>.
                  </p>
                  <button
                    type="button"
                    className="btn-pill-light"
                    onClick={() => setFormSubmitted(false)}
                  >
                    <span>Enviar otra consulta</span>
                    <span className="pill-circle-wine">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </div>
              ) : (
                <form className="showcase-form" onSubmit={handleSubmit}>
                  <div className="form-row-2col">
                    <div className="field-block">
                      <label htmlFor="nombre" className="field-label-text">
                        Nombre completo *
                      </label>
                      <input
                        id="nombre"
                        type="text"
                        name="nombre"
                        required
                        className="field-control-glass"
                        placeholder="Ej. Dra. María Fernández"
                        value={formData.nombre}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="field-block">
                      <label htmlFor="empresa" className="field-label-text">
                        Empresa / Entidad
                      </label>
                      <input
                        id="empresa"
                        type="text"
                        name="empresa"
                        className="field-control-glass"
                        placeholder="Nombre de su organización"
                        value={formData.empresa}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>

                  <div className="form-row-2col">
                    <div className="field-block">
                      <label htmlFor="correo" className="field-label-text">
                        Correo electrónico *
                      </label>
                      <input
                        id="correo"
                        type="email"
                        name="correo"
                        required
                        className="field-control-glass"
                        placeholder="nombre@organizacion.com"
                        value={formData.correo}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="field-block">
                      <label htmlFor="asunto" className="field-label-text">
                        Área de interés *
                      </label>
                      <select
                        id="asunto"
                        name="asunto"
                        className="field-control-glass"
                        value={formData.asunto}
                        onChange={handleInputChange}
                      >
                        <option value="Comercio Internacional y Nearshoring">
                          Comercio Internacional &amp; Nearshoring
                        </option>
                        <option value="Negocios Internacionales e Inversión">
                          Negocios Internacionales &amp; Soft Landing
                        </option>
                        <option value="Arbitraje y Resolución de Disputas">
                          Arbitraje, Disputas &amp; ODR
                        </option>
                        <option value="Estructuración Fiduciaria y Financiera">
                          Estructuración Fiduciaria &amp; SPVs
                        </option>
                        <option value="LegalTech y Análisis Contractual">
                          LegalTech &amp; Análisis Contractual
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="field-block">
                    <label htmlFor="mensaje" className="field-label-text">
                      Detalles de la operación o consulta *
                    </label>
                    <textarea
                      id="mensaje"
                      name="mensaje"
                      required
                      className="field-control-glass field-textarea"
                      placeholder="Describa brevemente el alcance jurídico, jurisdicciones o contrato que requiere revisar..."
                      value={formData.mensaje}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-footer-actions">
                    <button type="submit" className="btn-pill-light">
                      <span>Enviar Consulta</span>
                      <span className="pill-circle-wine">
                        <ArrowRight size={16} strokeWidth={2} />
                      </span>
                    </button>
                    <button
                      type="button"
                      onClick={openPrivacyDialog}
                      className="privacy-trigger-link"
                    >
                      Política de Tratamiento de Datos
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          <footer className="showcase-footer-bar">
            <div className="footer-brand-line">
              <TecLegalMark />
              <span className="footer-tagline">
                TecLegal S.A.S. &bull; Firma Boutique de Derecho Transnacional &amp; LegalTech
              </span>
            </div>

            <div className="footer-right-links">
              <button type="button" onClick={openPrivacyDialog} className="footer-link-btn">
                Privacidad y Datos (Ley 1581)
              </button>
              <a href="#nosotros" className="footer-link-btn">
                Incompatibilidades
              </a>
              <span className="copyright-text">
                &copy; {new Date().getFullYear()} TecLegal S.A.S.
              </span>
            </div>
          </footer>
        </section>
      </main>

      {/* ====================================================================
          MODAL NATIVO <dialog> CON LIGHT DISMISS (closedby="any" + FALLBACK)
         ==================================================================== */}
      <dialog
        ref={privacyDialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="privacy-dialog-title"
        className="privacy-dialog"
      >
        <div className="privacy-dialog-inner">
          <div className="privacy-dialog-header">
            <h3 id="privacy-dialog-title" className="section-headline-serif" style={{ fontSize: '1.85rem' }}>
              Política de Tratamiento de Datos Personales
            </h3>
            <button
              type="button"
              onClick={closePrivacyDialog}
              className="dialog-close-btn"
              aria-label="Cerrar ventana de privacidad"
            >
              <X size={20} />
            </button>
          </div>

          <p className="body-copy-muted" style={{ marginBottom: '1rem' }}>
            En cumplimiento de la Ley Estatutaria 1581 de 2012 y sus decretos reglamentarios en la República de Colombia, <strong>TecLegal S.A.S.</strong> informa que los datos personales suministrados voluntariamente mediante este portal serán tratados exclusivamente para atender su solicitud de asesoría jurídica, preparar propuestas profesionales de servicios y gestionar comunicaciones corporativas directas.
          </p>
          <p className="body-copy-muted" style={{ marginBottom: '1.75rem' }}>
            Como titular, usted puede conocer, actualizar, rectificar o solicitar la supresión de sus datos en cualquier momento escribiendo a <strong>contacto@teclegal.co</strong>. TecLegal S.A.S. no cede ni comercializa datos personales con terceros.
          </p>

          <form method="dialog">
            <button type="submit" className="btn-pill-wine">
              <span>Entendido y Cerrar</span>
              <span className="pill-circle-white">
                <X size={14} />
              </span>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default App
