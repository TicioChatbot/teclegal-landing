import React, { useEffect, useRef, useState } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
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
  X
} from 'lucide-react'

type CaseCategory =
  | 'Todos'
  | 'Contratos & LegalTech'
  | 'Arbitraje & Disputas'
  | 'Fiduciario & Financiero'

interface PracticeArea {
  id: string
  num: string
  title: string
  shortTitle: string
  formOption: string
  tagline: string
  description: string
  deliverables: string[]
  forums: string[]
  icon: React.ReactNode
}

interface CaseStudyItem {
  id: string
  category: Exclude<CaseCategory, 'Todos'>
  entity: string
  location: string
  tag: string
  summary: string
}

const PRACTICE_AREAS: PracticeArea[] = [
  {
    id: 'comercio',
    num: '01',
    title: 'Comercio Internacional & Defensa Comercial',
    shortTitle: 'Comercio Internacional',
    formOption: 'Comercio Internacional y Nearshoring',
    tagline: 'Nearshoring, TLC y protección de flujos comerciales',
    description:
      'Estructuramos operaciones de nearshoring, asesoramos en el aprovechamiento estratégico de tratados de libre comercio y protegemos cadenas de exportación e importación frente a riesgos regulatorios y arancelarios.',
    deliverables: [
      'Representación y lobby de alto nivel en investigaciones de defensa comercial (antidumping, salvaguardias y subvenciones).',
      'Estructuración jurídica y aduanera para operaciones de nearshoring y deslocalización productiva.',
      'Aprovechamiento de preferencias arancelarias y reglas de origen en tratados vigentes.'
    ],
    forums: ['Ministerio de Comercio', 'DIAN', 'Regímenes TLC', 'Cadenas Globales'],
    icon: <Compass size={20} strokeWidth={1.75} />
  },
  {
    id: 'negocios',
    num: '02',
    title: 'Negocios Internacionales, Inversión & Fiducias',
    shortTitle: 'Negocios e Inversión',
    formOption: 'Negocios Internacionales e Inversión',
    tagline: 'Soft landing en Colombia, SPVs y contratos transfronterizos',
    description:
      'Facilitamos la expansión de compañías internacionales en Colombia mediante procesos de soft landing, redacción y revisión de contratos complejos bajo estándares globales y validación local de estructuras financieras y fiduciarias.',
    deliverables: [
      'Revisión bajo derecho local de loan agreements entre SPVs extranjeros y deudores locales (enforceability, flujos de fondos y retenciones fiscales).',
      'Revisión y negociación de contratos de fideicomiso de garantía y esquemas de cesión de derechos de cobro.',
      'Estructuración societaria y consultoría permanente para filiales extranjeras en Colombia.'
    ],
    forums: ['SPVs Internacionales', 'Sociedades Fiduciarias', 'Derecho Cambiario y Fiscal'],
    icon: <Layers size={20} strokeWidth={1.75} />
  },
  {
    id: 'disputas',
    num: '03',
    title: 'Resolución de Disputas, Arbitraje & ODR',
    shortTitle: 'Arbitraje & ODR',
    formOption: 'Arbitraje y Resolución de Disputas',
    tagline: 'Arbitraje comercial internacional, litigio estratégico y justicia digital',
    description:
      'Combinamos la agilidad de una firma boutique con la trayectoria de socios que actúan como árbitros en los principales centros de Colombia y en centros internacionales como E-bram (Hong Kong) y la Cámara de Comercio de Madrid.',
    deliverables: [
      'Representación y actuación arbitral en controversias comerciales, societarias, financieras y fiduciarias.',
      'Diseño e implementación de mecanismos de Online Dispute Resolution (ODR) apoyados en LegalTech.',
      'Negociación estratégica, mediación, conciliación y litigio ante autoridades financieras.'
    ],
    forums: ['E-bram (Hong Kong)', 'Cámara de Comercio de Madrid', 'Centros Nacionales', 'ODR'],
    icon: <Scale size={20} strokeWidth={1.75} />
  }
]

const CASE_STUDIES: CaseStudyItem[] = [
  {
    id: 'edb',
    category: 'Contratos & LegalTech',
    entity: 'Emirates Development Bank (EDB)',
    location: 'Emiratos Árabes',
    tag: 'Financiamiento IA & Sostenibilidad',
    summary:
      'Asesoría jurídica en estructuración de financiamiento para pymes en proyectos de inteligencia artificial, diseño de instrumentos financieros sostenibles e incorporación de KPIs de sostenibilidad y uso responsable de IA en los contratos.'
  },
  {
    id: 'mas',
    category: 'Contratos & LegalTech',
    entity: 'Autoridad Monetaria de Singapur (MAS)',
    location: 'Singapur',
    tag: 'Online Dispute Resolution',
    summary:
      'Asesoría en la implementación de mecanismos de resolución de disputas en línea (ODR) para la gestión preventiva y eficiente de conflictos vinculados al financiamiento sostenible.'
  },
  {
    id: 'katoen',
    category: 'Contratos & LegalTech',
    entity: 'Katoen Natie',
    location: 'Bélgica · Colombia',
    tag: 'Soft Landing Corporativo',
    summary:
      'Asesoría jurídica integral en el establecimiento de la filial colombiana y revisión de contratos nacionales e internacionales derivados de su operación logística y comercial en el país.'
  },
  {
    id: 'eco1st-nextlevel',
    category: 'Contratos & LegalTech',
    entity: 'Eco1st & Next Level Solutions',
    location: 'Estados Unidos',
    tag: 'Consultoría Permanente',
    summary:
      'Consultoría jurídica permanente para el establecimiento y operación continua en Colombia de ambas firmas estadounidenses, incluyendo análisis y negociación de contratos nacionales e internacionales.'
  },
  {
    id: 'tribunal-nali',
    category: 'Arbitraje & Disputas',
    entity: 'Nali S.A.S. vs. Canales Desarrolladores S.A.S.',
    location: 'Tribunal Arbitral',
    tag: 'Actuación como Árbitro',
    summary:
      'Desempeño como árbitro en controversia de restitución inmobiliaria estructurada bajo un contrato de fiducia mercantil.'
  },
  {
    id: 'tribunal-soporte',
    category: 'Arbitraje & Disputas',
    entity: 'Soporte Vital & Empresarial vs. Fiduciaria Colpatria',
    location: 'Tribunal Arbitral',
    tag: 'Secretario de Tribunal',
    summary:
      'Secretario de Tribunal Arbitral en disputa sobre incumplimiento en promesa de compraventa y alcance de responsabilidad de la entidad fiduciaria.'
  },
  {
    id: 'hoteles-fiducia',
    category: 'Fiduciario & Financiero',
    entity: 'Esquemas Fiduciarios para Proyectos Hoteleros',
    location: 'Colombia',
    tag: 'Estructuración Fiduciaria',
    summary:
      'Acompañamiento integral en la estructuración de esquemas fiduciarios orientados a la comercialización de derechos fiduciarios, negociación con la sociedad fiduciaria y puesta en marcha contractual.'
  },
  {
    id: 'garantias-bursatil',
    category: 'Fiduciario & Financiero',
    entity: 'Garantías Mobiliarias, Compensación de Valores y Litigio',
    location: 'Sector Financiero',
    tag: 'Banca & Valores',
    summary:
      'Conceptos sobre fiducia en garantía para sistemas de compensación, liquidación y depósitos centralizados de valores, además de representación judicial ante la Superintendencia Financiera.'
  }
]

const CASE_FILTERS: CaseCategory[] = [
  'Todos',
  'Contratos & LegalTech',
  'Arbitraje & Disputas',
  'Fiduciario & Financiero'
]

const TecLegalMark: React.FC<{ inverted?: boolean }> = ({ inverted = false }) => {
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
    <span className={`tl-brand ${inverted ? 'is-inverted' : ''}`}>
      <svg
        width="34"
        height="34"
        viewBox="0 0 62 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="tl-brand-svg"
      >
        {outerDots.map((dot, idx) => (
          <circle key={`o-${idx}`} cx={dot.cx} cy={dot.cy} r="3.4" fill="#d9ba11" />
        ))}
        {innerDots.map((dot, idx) => (
          <circle key={`i-${idx}`} cx={dot.cx} cy={dot.cy} r="2.6" fill="#ac1259" />
        ))}
      </svg>
      <span className="tl-brand-text">
        Tec<span className="tl-brand-accent">Legal</span>
      </span>
    </span>
  )
}

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activePracticeId, setActivePracticeId] = useState<string>(PRACTICE_AREAS[0].id)
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
        const isInside =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width

        if (isInside) return
        dialog.close()
      }

      dialog.addEventListener('click', handleBackdropClick)
      return () => {
        dialog.removeEventListener('click', handleBackdropClick)
      }
    }
  }, [])

  const openPrivacyDialog = () => privacyDialogRef.current?.showModal()
  const closePrivacyDialog = () => privacyDialogRef.current?.close()

  const activePractice =
    PRACTICE_AREAS.find((p) => p.id === activePracticeId) ?? PRACTICE_AREAS[0]

  const handleSelectPracticeForContact = (formOption: string) => {
    setFormData((prev) => ({ ...prev, asunto: formOption }))
    setFormSubmitted(false)
    const target = document.getElementById('contacto')
    target?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
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
    <div className="tl-app">
      {/* ====================================================================
          HEADER MINIMALISTA FLOTANTE (GLASS IVORY)
         ==================================================================== */}
      <header className="tl-header">
        <div className="tl-container tl-header-inner">
          <a href="#inicio" aria-label="TecLegal Inicio">
            <TecLegalMark />
          </a>

          <button
            type="button"
            className="tl-menu-btn"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav aria-label="Navegación principal" className={`tl-nav ${mobileMenuOpen ? 'is-open' : ''}`}>
            <ul className="tl-nav-list">
              <li>
                <a href="#firma" className="tl-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  La Firma
                </a>
              </li>
              <li>
                <a href="#practicas" className="tl-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Prácticas
                </a>
              </li>
              <li>
                <a href="#socios" className="tl-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Socios
                </a>
              </li>
              <li>
                <a href="#trayectoria" className="tl-nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Trayectoria
                </a>
              </li>
            </ul>

            <a
              href="#contacto"
              className="tl-btn-dark tl-btn-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>Agendar consulta</span>
              <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ====================================================================
            HERO EDITORIAL ASIMÉTRICO (ARQUITECTURA + TIPOGRAFÍA MIXTA)
           ==================================================================== */}
        <section id="inicio" className="tl-hero">
          <div className="tl-container tl-hero-grid">
            <div className="tl-hero-left">
              <div className="tl-kicker">
                <span className="tl-kicker-dot" aria-hidden="true" />
                <span>BOGOTÁ &middot; ALCANCE GLOBAL &middot; LEGALTECH</span>
              </div>

              <h1 className="tl-hero-title">
                Derecho corporativo{' '}
                <em className="tl-serif-italic">sin fronteras,</em> precisión LegalTech.
              </h1>

              <p className="tl-hero-lead">
                Firma boutique especializada en gestión integral de riesgos legales para empresas transnacionales. Unimos <strong>20 años de criterio jurídico sénior</strong> en contratos globales y arbitraje con tecnología aplicada.
              </p>

              <div className="tl-hero-actions">
                <a href="#contacto" className="tl-btn-dark">
                  <span>Iniciar consulta</span>
                  <ArrowRight size={16} />
                </a>
                <a href="#trayectoria" className="tl-btn-outline">
                  <span>Explorar casos de éxito</span>
                </a>
              </div>

              <div className="tl-hero-stats" aria-label="Indicadores clave de TecLegal">
                <div className="tl-stat">
                  <span className="tl-stat-value">+20</span>
                  <span className="tl-stat-label">Años de trayectoria sénior</span>
                </div>
                <div className="tl-stat">
                  <span className="tl-stat-value">ODR</span>
                  <span className="tl-stat-label">Justicia digital &amp; LegalTech</span>
                </div>
                <div className="tl-stat">
                  <span className="tl-stat-value">4</span>
                  <span className="tl-stat-label">Continentes con mandatos</span>
                </div>
              </div>
            </div>

            <div className="tl-hero-right">
              <div className="tl-arch-frame">
                <picture>
                  <source media="(max-width: 720px)" srcSet="./arquitectura-portada-mobile.webp" />
                  <img
                    src="./arquitectura-portada.webp"
                    alt="Arquitectura corporativa moderna representando TecLegal S.A.S."
                    className="tl-arch-img"
                    fetchPriority="high"
                    width={1400}
                    height={2100}
                  />
                </picture>
                <div className="tl-arch-scrim" aria-hidden="true" />
                <div className="tl-arch-card">
                  <div className="tl-arch-card-top">
                    <span className="tl-arch-pill">TECLEGAL S.A.S.</span>
                    <Landmark size={17} strokeWidth={1.6} />
                  </div>
                  <p className="tl-arch-card-copy">
                    Árbitros y asesores en contratos complejos entre Colombia, EE. UU., Europa, Singapur y Emiratos Árabes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 2: LA FIRMA (BLOQUE DE CONTRASTE AZUL NOCHE PROFUNDO)
           ==================================================================== */}
        <section id="firma" className="tl-dark-band">
          <div className="tl-container">
            <div className="tl-firm-top-grid">
              <div className="tl-firm-manifesto">
                <span className="tl-eyebrow-light">SOBRE LA FIRMA</span>
                <h2 className="tl-section-title tl-title-light">
                  Una firma boutique diseñada para la{' '}
                  <em className="tl-serif-italic tl-gold-text">complejidad</em> del comercio global.
                </h2>
                <p className="tl-dark-copy">
                  Con sede en Bogotá, <strong>TecLegal S.A.S.</strong> acompaña a empresas multinacionales, fondos, entidades financieras y startups en la estructuración de operaciones transfronterizas seguras y competitivas.
                </p>
                <p className="tl-dark-copy">
                  Nuestra práctica integra herramientas <strong>LegalTech</strong> para acelerar el análisis contractual, fortalecer la prevención de disputas y ofrecer asesoría directa de socios sin fricciones burocráticas ni conflictos de interés.
                </p>
              </div>

              <div className="tl-team-editorial-frame">
                <img
                  src="./equipo-reunion.jpg"
                  alt="Equipo jurídico de TecLegal S.A.S. en sesión estratégica en Bogotá"
                  className="tl-team-photo"
                  loading="lazy"
                  width={746}
                  height={809}
                />
                <div className="tl-team-caption">
                  <span>BOGOTÁ D.C. &middot; EQUIPO SÉNIOR</span>
                  <span>Independencia ética y confidencialidad absoluta</span>
                </div>
              </div>
            </div>

            <div className="tl-pillars-strip">
              <article className="tl-pillar-col">
                <div className="tl-pillar-head">
                  <span className="tl-pillar-num">01</span>
                  <Cpu size={19} strokeWidth={1.6} className="tl-pillar-icon" />
                </div>
                <h3 className="tl-pillar-title">Innovación continua</h3>
                <p className="tl-pillar-desc">
                  Incorporamos tecnologías de análisis legal y justicia digital para optimizar cada etapa del mandato.
                </p>
              </article>

              <article className="tl-pillar-col">
                <div className="tl-pillar-head">
                  <span className="tl-pillar-num">02</span>
                  <BookOpen size={19} strokeWidth={1.6} className="tl-pillar-icon" />
                </div>
                <h3 className="tl-pillar-title">Excelencia legal</h3>
                <p className="tl-pillar-desc">
                  Rigor técnico y académico con formación doctoral y de maestría en las principales universidades del mundo.
                </p>
              </article>

              <article className="tl-pillar-col">
                <div className="tl-pillar-head">
                  <span className="tl-pillar-num">03</span>
                  <Handshake size={19} strokeWidth={1.6} className="tl-pillar-icon" />
                </div>
                <h3 className="tl-pillar-title">Atención personalizada</h3>
                <p className="tl-pillar-desc">
                  Cada asunto es liderado directamente por los socios, con soluciones hechas a la medida de su negocio.
                </p>
              </article>

              <article className="tl-pillar-col">
                <div className="tl-pillar-head">
                  <span className="tl-pillar-num">04</span>
                  <ShieldCheck size={19} strokeWidth={1.6} className="tl-pillar-icon" />
                </div>
                <h3 className="tl-pillar-title">Valor humano</h3>
                <p className="tl-pillar-desc">
                  Priorizamos el bienestar, la ética profesional y el impacto social sostenible en cada decisión jurídica.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 3: ÁREAS DE PRÁCTICA (SHOWCASE INTERACTIVO SPLIT)
           ==================================================================== */}
        <section id="practicas" className="tl-section">
          <div className="tl-container">
            <div className="tl-section-head">
              <div>
                <span className="tl-eyebrow-dark">ÁREAS DE PRÁCTICA</span>
                <h2 className="tl-section-title">
                  Especialidades con <em className="tl-serif-italic">precisión</em> transnacional
                </h2>
              </div>
              <p className="tl-section-note">
                Seleccione un área para explorar nuestro alcance jurídico, entregables y foros de actuación.
              </p>
            </div>

            <div className="tl-practice-split">
              <div className="tl-practice-tabs" role="tablist" aria-label="Áreas de práctica de TecLegal">
                {PRACTICE_AREAS.map((area) => {
                  const isActive = area.id === activePractice.id
                  return (
                    <button
                      key={area.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActivePracticeId(area.id)}
                      className={`tl-practice-tab ${isActive ? 'is-active' : ''}`}
                    >
                      <span className="tl-tab-num">{area.num}</span>
                      <div className="tl-tab-text">
                        <span className="tl-tab-title">{area.title}</span>
                        <span className="tl-tab-sub">{area.tagline}</span>
                      </div>
                      <ArrowRight size={18} className="tl-tab-arrow" />
                    </button>
                  )
                })}
              </div>

              <div className="tl-practice-detail" role="tabpanel">
                <div className="tl-detail-top">
                  <div className="tl-detail-icon">{activePractice.icon}</div>
                  <span className="tl-detail-num">Práctica {activePractice.num}</span>
                </div>

                <h3 className="tl-detail-title">{activePractice.title}</h3>
                <p className="tl-detail-desc">{activePractice.description}</p>

                <div className="tl-detail-list-wrap">
                  <h4 className="tl-detail-subhead">Alcance y Entregables</h4>
                  <ul className="tl-detail-list">
                    {activePractice.deliverables.map((item, index) => (
                      <li key={index}>
                        <span className="tl-check-dot">
                          <Check size={13} strokeWidth={2.5} />
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="tl-detail-forums">
                  {activePractice.forums.map((forum) => (
                    <span key={forum} className="tl-forum-chip">
                      {forum}
                    </span>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectPracticeForContact(activePractice.formOption)}
                  className="tl-btn-accent"
                >
                  <span>Consultar sobre {activePractice.shortTitle}</span>
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 4: SOCIOS DIRECTORES (GALERÍA EDITORIAL)
           ==================================================================== */}
        <section id="socios" className="tl-section tl-section-white">
          <div className="tl-container">
            <div className="tl-section-head">
              <div>
                <span className="tl-eyebrow-dark">LIDERAZGO SÉNIOR</span>
                <h2 className="tl-section-title">
                  Nuestros <em className="tl-serif-italic">Socios</em> Directores
                </h2>
              </div>
              <p className="tl-section-note">
                Trayectoria comprobada en organismos multilaterales, arbitraje internacional y regulación financiera.
              </p>
            </div>

            <div className="tl-partners-grid">
              {/* Nicolás Lozada Pimiento */}
              <article className="tl-partner-card">
                <div className="tl-partner-header">
                  <img
                    src="./nicolas-lozada.png"
                    alt="Nicolás Lozada Pimiento - Socio Fundador de TecLegal"
                    className="tl-partner-img"
                    loading="lazy"
                    width={362}
                    height={362}
                  />
                  <div>
                    <span className="tl-partner-badge">Socio Fundador</span>
                    <h3 className="tl-partner-name">Nicolás Lozada Pimiento</h3>
                    <p className="tl-partner-role">
                      Negocios Internacionales &middot; Arbitraje &middot; LegalTech
                    </p>
                  </div>
                </div>

                <p className="tl-partner-bio">
                  Abogado y profesor universitario con más de 20 años de experiencia en contratos internacionales, comercio exterior y resolución de disputas. Fundador de <strong>REDEK</strong>, la primera startup colombiana de justicia digital y ODR.
                </p>

                <div className="tl-partner-tags">
                  <span>LL.M. NYU</span>
                  <span>LL.M. NUS Singapur</span>
                  <span>Árbitro E-bram &amp; Madrid</span>
                  <span>Delegado ONU</span>
                  <span>NCTDR &middot; ICODR</span>
                </div>
              </article>

              {/* Jorge Armando Corredor Higuera */}
              <article className="tl-partner-card">
                <div className="tl-partner-header">
                  <img
                    src="./jorge-corredor.png"
                    alt="Jorge Armando Corredor Higuera - Socio Director de TecLegal"
                    className="tl-partner-img"
                    loading="lazy"
                    width={362}
                    height={362}
                  />
                  <div>
                    <span className="tl-partner-badge">Socio Director</span>
                    <h3 className="tl-partner-name">Jorge Armando Corredor Higuera</h3>
                    <p className="tl-partner-role">
                      Derecho Financiero &middot; Mercado de Valores &middot; Fiducias
                    </p>
                  </div>
                </div>

                <p className="tl-partner-bio">
                  Abogado y especialista de la Universidad Nacional de Colombia, Máster (LL.M.) por Heidelberg University (Alemania) y Doctor en Derecho (Ph.D.) por la Universidad Carlos III de Madrid (España).
                </p>

                <div className="tl-partner-tags">
                  <span>Ph.D. Carlos III</span>
                  <span>LL.M. Heidelberg</span>
                  <span>Ex Superfinanciera</span>
                  <span>Tribunal AMV &amp; BMC</span>
                  <span>Docente Externado</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 5: TRAYECTORIA & CASOS DE ÉXITO (LEDGER FILTRABLE)
           ==================================================================== */}
        <section id="trayectoria" className="tl-section">
          <div className="tl-container">
            <div className="tl-cases-top">
              <div>
                <span className="tl-eyebrow-dark">EXPERIENCIA ESPECÍFICA</span>
                <h2 className="tl-section-title">
                  Mandatos y <em className="tl-serif-italic">casos</em> representativos
                </h2>
              </div>

              <div className="tl-filters" role="tablist" aria-label="Filtrar casos de éxito">
                {CASE_FILTERS.map((category) => {
                  const count =
                    category === 'Todos'
                      ? CASE_STUDIES.length
                      : CASE_STUDIES.filter((c) => c.category === category).length
                  return (
                    <button
                      key={category}
                      type="button"
                      role="tab"
                      aria-selected={activeFilter === category}
                      onClick={() => setActiveFilter(category)}
                      className={`tl-filter-btn ${activeFilter === category ? 'is-active' : ''}`}
                    >
                      <span>{category}</span>
                      <span className="tl-filter-count">{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>

            <div className="tl-cases-grid">
              {filteredCases.map((item) => (
                <article key={item.id} className="tl-case-card">
                  <div className="tl-case-meta">
                    <span className="tl-case-tag">{item.tag}</span>
                    <span className="tl-case-loc">
                      <Globe size={13} /> {item.location}
                    </span>
                  </div>
                  <h3 className="tl-case-title">{item.entity}</h3>
                  <p className="tl-case-desc">{item.summary}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ====================================================================
            SECCIÓN 6: CONTACTO & SOLICITUD DE PROPUESTA
           ==================================================================== */}
        <section id="contacto" className="tl-section tl-section-white">
          <div className="tl-container">
            <div className="tl-contact-shell">
              <div className="tl-contact-info">
                <div className="tl-contact-arc" aria-hidden="true" />
                <div>
                  <span className="tl-eyebrow-light">CONTACTO DIRECTO</span>
                  <h2 className="tl-section-title tl-title-light">
                    Iniciemos una conversación <em className="tl-serif-italic tl-gold-text">estratégica</em>
                  </h2>
                  <p className="tl-dark-copy">
                    Analizamos su operación con estricta confidencialidad y proponemos esquemas claros de tarifa fija por alcance o modelo por horas consumidas.
                  </p>

                  <div className="tl-info-list">
                    <div className="tl-info-row">
                      <MapPin size={18} className="tl-info-icon" />
                      <div>
                        <span className="tl-info-label">Sede</span>
                        <span className="tl-info-val">Bogotá D.C., Colombia</span>
                      </div>
                    </div>
                    <div className="tl-info-row">
                      <Mail size={18} className="tl-info-icon" />
                      <div>
                        <span className="tl-info-label">Correo oficial</span>
                        <span className="tl-info-val">contacto@teclegal.co</span>
                      </div>
                    </div>
                    <div className="tl-info-row">
                      <Clock size={18} className="tl-info-icon" />
                      <div>
                        <span className="tl-info-label">Honorarios</span>
                        <span className="tl-info-val">Tarifa fija por proyecto o por hora</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tl-info-foot">
                  <Lock size={14} />
                  <span>Sin conflictos de interés &middot; TecLegal S.A.S.</span>
                </div>
              </div>

              <div className="tl-contact-form-col">
                {formSubmitted ? (
                  <div className="tl-success-box" role="status">
                    <h3 className="tl-success-title">Solicitud lista para envío</h3>
                    <p className="tl-success-desc">
                      Hemos generado el borrador de correo con los datos de su consulta. Si su cliente de correo no se abrió automáticamente, escríbanos a <strong>contacto@teclegal.co</strong>.
                    </p>
                    <button
                      type="button"
                      className="tl-btn-dark"
                      onClick={() => setFormSubmitted(false)}
                    >
                      <span>Nueva consulta</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                ) : (
                  <form className="tl-form" onSubmit={handleSubmit}>
                    <div className="tl-form-2col">
                      <div className="tl-field">
                        <label htmlFor="nombre" className="tl-label">
                          Nombre completo *
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          type="text"
                          required
                          className="tl-input"
                          placeholder="Ej. Dra. María Fernández"
                          value={formData.nombre}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="tl-field">
                        <label htmlFor="empresa" className="tl-label">
                          Empresa / Organización
                        </label>
                        <input
                          id="empresa"
                          name="empresa"
                          type="text"
                          className="tl-input"
                          placeholder="Nombre de su empresa"
                          value={formData.empresa}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>

                    <div className="tl-form-2col">
                      <div className="tl-field">
                        <label htmlFor="correo" className="tl-label">
                          Correo corporativo *
                        </label>
                        <input
                          id="correo"
                          name="correo"
                          type="email"
                          required
                          className="tl-input"
                          placeholder="nombre@organizacion.com"
                          value={formData.correo}
                          onChange={handleInputChange}
                        />
                      </div>

                      <div className="tl-field">
                        <label htmlFor="asunto" className="tl-label">
                          Área de interés *
                        </label>
                        <select
                          id="asunto"
                          name="asunto"
                          className="tl-input"
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

                    <div className="tl-field">
                      <label htmlFor="mensaje" className="tl-label">
                        Descripción de su operación o consulta *
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        required
                        className="tl-input tl-textarea"
                        placeholder="Cuéntenos brevemente el alcance jurídico, jurisdicciones o contratos involucrados..."
                        value={formData.mensaje}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="tl-form-bottom">
                      <button type="submit" className="tl-btn-dark">
                        <span>Enviar solicitud</span>
                        <ArrowRight size={16} />
                      </button>
                      <button
                        type="button"
                        onClick={openPrivacyDialog}
                        className="tl-privacy-link"
                      >
                        Tratamiento de datos (Ley 1581)
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ====================================================================
          FOOTER ARQUITECTÓNICO
         ==================================================================== */}
      <footer className="tl-footer">
        <div className="tl-container tl-footer-inner">
          <div className="tl-footer-left">
            <TecLegalMark inverted />
            <p className="tl-footer-note">
              TecLegal S.A.S. &middot; Firma boutique de derecho transnacional, arbitraje y LegalTech en Bogotá, Colombia.
            </p>
          </div>

          <div className="tl-footer-links">
            <a href="#firma">La Firma</a>
            <a href="#practicas">Prácticas</a>
            <a href="#socios">Socios</a>
            <a href="#trayectoria">Trayectoria</a>
            <button type="button" onClick={openPrivacyDialog}>
              Privacidad
            </button>
          </div>

          <div className="tl-footer-copy">
            &copy; {new Date().getFullYear()} TecLegal S.A.S. Todos los derechos reservados.
          </div>
        </div>
      </footer>

      {/* ====================================================================
          MODAL NATIVO <dialog> CON LIGHT DISMISS (closedby="any" + FALLBACK)
         ==================================================================== */}
      <dialog
        ref={privacyDialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="privacy-dialog-title"
        className="tl-dialog"
      >
        <div className="tl-dialog-inner">
          <div className="tl-dialog-head">
            <h3 id="privacy-dialog-title" className="tl-dialog-title">
              Política de Tratamiento de Datos Personales
            </h3>
            <button
              type="button"
              onClick={closePrivacyDialog}
              className="tl-dialog-close"
              aria-label="Cerrar ventana"
            >
              <X size={18} />
            </button>
          </div>

          <p className="tl-dialog-copy">
            En cumplimiento de la Ley Estatutaria 1581 de 2012 y sus decretos reglamentarios en la República de Colombia, <strong>TecLegal S.A.S.</strong> informa que los datos personales suministrados voluntariamente mediante este portal serán tratados exclusivamente para atender su solicitud jurídica, preparar propuestas de servicios y coordinar comunicaciones profesionales.
          </p>
          <p className="tl-dialog-copy">
            Usted puede conocer, actualizar, rectificar o solicitar la supresión de sus datos en cualquier momento escribiendo a <strong>contacto@teclegal.co</strong>. TecLegal S.A.S. no cede ni comercializa información personal con terceros.
          </p>

          <form method="dialog">
            <button type="submit" className="tl-btn-dark tl-btn-sm">
              <span>Entendido</span>
            </button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default App
