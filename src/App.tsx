import React, { useState } from 'react'
import {
  Gavel,
  Wand2,
  Headphones,
  ArrowRight,
  ChevronDown,
  Menu,
  X,
  Mail,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  Globe,
  Briefcase,
  Scale,
  ShieldCheck,
  Building2
} from 'lucide-react'

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    asunto: 'Comercio Internacional & Nearshoring',
    mensaje: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(`[TecLegal Web] Consulta: ${formData.asunto} - ${formData.empresa || formData.nombre}`)
    const body = encodeURIComponent(
      `Nombre: ${formData.nombre}\n` +
      `Empresa: ${formData.empresa}\n` +
      `Correo: ${formData.correo}\n` +
      `Asunto: ${formData.asunto}\n\n` +
      `Mensaje:\n${formData.mensaje}\n\n---\nEnviado desde el portal oficial de TecLegal S.A.S`
    )
    window.location.href = `mailto:contacto@teclegal.co?subject=${subject}&body=${body}`
    setFormSubmitted(true)
  }

  return (
    <div className="stage-wrapper">
      {/* 
        ========================================================================
        HERO SECTION: MATCHING THE EDITORIAL SCREENSHOT COMPOSITION
        - Rounded card frame with subtle border
        - Clean office background + sharp portrait
        - Left dark scrim for high-contrast typography
        - "AI-Powered Legal Intelligence" style badge
        - Editorial Serif Headline
        - White rounded pill CTA with circular arrow
        - Top nav with maroon capsule button
        - Bottom 3-column value pillars with thin hairline icons
        ========================================================================
      */}
      <section className="hero-stage">
        <div className="hero-photo-bg"></div>
        <div className="hero-scrim-left"></div>
        <div className="hero-scrim-bottom"></div>
        <div className="hero-scrim-top"></div>

        {/* TOP NAVBAR WITHIN FRAME */}
        <header className="frame-nav">
          <a href="#inicio" className="brand-monogram">
            <img src="./logo.png" alt="TecLegal Logo" className="brand-logo-img" />
            <span className="brand-name-serif">TecLegal</span>
          </a>

          <button 
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>

          <ul className={`nav-links-center ${mobileMenuOpen ? 'open' : ''}`}>
            <li><a href="#inicio" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>Inicio</a></li>
            <li><a href="#firma" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>La Firma</a></li>
            <li><a href="#servicios" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>Servicios</a></li>
            <li><a href="#equipo" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>Socios</a></li>
            <li><a href="#experiencia" className="nav-anchor" onClick={() => setMobileMenuOpen(false)}>Casos</a></li>
          </ul>

          <div className="nav-right-actions">
            <div className="lang-selector">
              <span>ES</span>
              <ChevronDown size={14} />
            </div>
            <a href="#contacto" className="btn-capsule-wine">
              <span>Contacto</span>
              <span className="circle-arrow">
                <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </header>

        {/* HERO MAIN BODY */}
        <div className="hero-main-content">
          <div className="pill-badge">
            <span className="spark-dot">✦</span>
            <span>LegalTech &amp; Transnational Law</span>
          </div>

          <h1 className="hero-h1-editorial">
            A Smarter Future for Global Legal Strategy
          </h1>

          <p className="hero-sub-p">
            Optimizamos la gestión legal corporativa, contratos transfronterizos y arbitraje internacional combinando 20 años de rigor jurídico sénior con herramientas LegalTech de vanguardia.
          </p>

          <div>
            <a href="#contacto" className="btn-capsule-white">
              <span>Iniciar Asesoría</span>
              <span className="circle-arrow-dark">
                <ArrowRight size={15} />
              </span>
            </a>
          </div>
        </div>

        {/* 3 VALUE PILLARS AT BOTTOM (MATCHING REFERENCE EXACTLY) */}
        <div className="hero-footer-pillars">
          {/* Pillar 1: Personalized Guidance */}
          <div className="pillar-unit">
            <div className="pillar-icon-line">
              <Gavel size={32} strokeWidth={1.5} />
            </div>
            <div className="pillar-text-group">
              <h3 className="pillar-headline-serif">Personalized guidance</h3>
              <p className="pillar-desc-sub">
                Una experiencia jurídica boutique a medida, enfocada en los objetivos estratégicos y protección de su negocio.
              </p>
            </div>
          </div>

          {/* Pillar 2: AI-driven insights / LegalTech */}
          <div className="pillar-unit">
            <div className="pillar-icon-line">
              <Wand2 size={32} strokeWidth={1.5} />
            </div>
            <div className="pillar-text-group">
              <h3 className="pillar-headline-serif">AI-driven insights</h3>
              <p className="pillar-desc-sub">
                Potenciamos el análisis de riesgos, contratos complejos e investigación con herramientas LegalTech de precisión.
              </p>
            </div>
          </div>

          {/* Pillar 3: Confidential & secure */}
          <div className="pillar-unit">
            <div className="pillar-icon-line">
              <Headphones size={32} strokeWidth={1.5} />
            </div>
            <div className="pillar-text-group">
              <h3 className="pillar-headline-serif">Confidential &amp; secure</h3>
              <p className="pillar-desc-sub">
                Equipo sénior disponible y confiable: un mensaje de distancia, listos para respaldar sus operaciones clave.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 1: SOBRE TECLEGAL & VALORES
        ========================================================================
      */}
      <section id="firma" className="content-section">
        <div className="container">
          <div className="section-head-dark">
            <span className="section-tag-gold">Sobre TecLegal S.A.S</span>
            <h2 className="section-title-serif">
              Firma boutique con sede en Bogotá para el <span className="gold">entorno empresarial transnacional</span>
            </h2>
            <p className="section-lead-muted">
              Nuestro equipo sénior combina dos décadas de trayectoria jurídica con una perspectiva avanzada en contratos y transacciones internacionales, transformando la complejidad regulatoria en operaciones transfronterizas seguras y altamente competitivas.
            </p>
          </div>

          <div className="cards-3col-grid">
            <div className="luxury-card">
              <span className="card-top-num">01 / Innovación</span>
              <h3 className="card-title-serif">Innovación continua</h3>
              <p className="card-body-text">
                Incorporamos las tecnologías LegalTech más recientes para optimizar el análisis jurídico, reducir tiempos y blindar cada transacción con precisión matemática.
              </p>
              <div className="card-tags-list">
                <div className="card-tag-row">
                  <Sparkles size={16} className="card-tag-bullet" />
                  <span>Automatización y gestión de contingencias</span>
                </div>
              </div>
            </div>

            <div className="luxury-card">
              <span className="card-top-num">02 / Excelencia</span>
              <h3 className="card-title-serif">Excelencia y rigor</h3>
              <p className="card-body-text">
                Asesoramiento de la más alta calidad técnica respaldado por socios que han actuado ante tribunales arbitrales internacionales y organismos multilaterales.
              </p>
              <div className="card-tags-list">
                <div className="card-tag-row">
                  <ShieldCheck size={16} className="card-tag-bullet" />
                  <span>Estándares normativos transfronterizos</span>
                </div>
              </div>
            </div>

            <div className="luxury-card">
              <span className="card-top-num">03 / Humanidad</span>
              <h3 className="card-title-serif">Valor humano &amp; Ética</h3>
              <p className="card-body-text">
                Priorizamos la dignidad de las partes, la solución pacífica de discrepancias y un compromiso total de transparencia e inexistencia de conflictos de interés.
              </p>
              <div className="card-tags-list">
                <div className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Confidencialidad absoluta y lealtad profesional</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 2: ÁREAS DE PRÁCTICA (SERVICIOS DE LA PROPUESTA)
        ========================================================================
      */}
      <section id="servicios" className="content-section" style={{ background: '#070e1c' }}>
        <div className="container">
          <div className="section-head-dark">
            <span className="section-tag-gold">Áreas de Práctica</span>
            <h2 className="section-title-serif">
              Soluciones jurídicas estratégicas alineadas a su <span className="magenta">expansión global</span>
            </h2>
            <p className="section-lead-muted">
              Respuestas ágiles en comercio exterior, contratos financieros complejos, esquemas fiduciarios y resolución de disputas de alta cuantía.
            </p>
          </div>

          <div className="cards-3col-grid">
            {/* Práctica 1 */}
            <div className="luxury-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="card-top-num">Área 01</span>
                <Globe size={24} color="#e2c509" />
              </div>
              <h3 className="card-title-serif">Comercio Internacional</h3>
              <p className="card-body-text">
                Estructuración de operaciones de nearshoring, aprovechamiento de acuerdos de libre comercio (TLC) y gestión integral de la protección de flujos de exportación e importación.
              </p>
              <ul className="card-tags-list">
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Investigaciones antidumping y salvaguardias</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Estructuración y relocalización de cadenas de valor</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Defensa comercial ante autoridades aduaneras</span>
                </li>
              </ul>
            </div>

            {/* Práctica 2 */}
            <div className="luxury-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="card-top-num">Área 02</span>
                <Briefcase size={24} color="#e0448a" />
              </div>
              <h3 className="card-title-serif">Negocios Internacionales e Inversión</h3>
              <p className="card-body-text">
                Acompañamiento a empresas multinacionales en procesos de ‘soft landing’ en Colombia. Revisión y redacción de contratos internacionales, loan agreements y esquemas fiduciarios de garantía.
              </p>
              <ul className="card-tags-list">
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Soft landing y estructuración corporativa local</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Revisión de loan agreements y SPVs transfronterizos</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Fideicomisos y cesión de derechos de cobro</span>
                </li>
              </ul>
            </div>

            {/* Práctica 3 */}
            <div className="luxury-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="card-top-num">Área 03</span>
                <Scale size={24} color="#ffd41c" />
              </div>
              <h3 className="card-title-serif">Resolución de Disputas &amp; Arbitraje</h3>
              <p className="card-body-text">
                Arbitraje comercial nacional e internacional con experiencia activa como árbitros en Hong Kong (E-BRAM), Madrid y CCB. Mediación y Online Dispute Resolution (ODR) de alto nivel.
              </p>
              <ul className="card-tags-list">
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Tribunales arbitrales comerciales y fiduciarios</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Litigio societario y financiero estratégico</span>
                </li>
                <li className="card-tag-row">
                  <CheckCircle2 size={16} className="card-tag-bullet" />
                  <span>Plataformas ODR &amp; resolución digital de disputas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 3: SOCIOS DIRECTORES (ATTORNEYS)
        ========================================================================
      */}
      <section id="equipo" className="content-section">
        <div className="container">
          <div className="section-head-dark">
            <span className="section-tag-gold">Liderazgo Sénior</span>
            <h2 className="section-title-serif">
              Socios Directores con <span className="gold">experiencia global</span>
            </h2>
            <p className="section-lead-muted">
              Liderazgo directo en cada asunto. Respaldados por formación en NYU, Heidelberg, Carlos III de Madrid y Singapore National University.
            </p>
          </div>

          <div className="team-2col-grid">
            {/* Socio 1: Nicolás Lozada */}
            <div className="partner-card-dark">
              <div className="partner-img-box">
                <img src="./nicolas-lozada.png" alt="Nicolás Lozada Pimiento" className="partner-img-actual" />
                <span className="partner-badge-pos">Socio Fundador</span>
              </div>
              <div className="partner-details-box">
                <h3 className="partner-name-serif">Nicolás Lozada Pimiento</h3>
                <span className="partner-role-line">Comercio Exterior, Arbitraje &amp; LegalTech</span>
                <p className="partner-desc-p">
                  Abogado y profesor universitario con más de 20 años de trayectoria en negocios internacionales y resolución de controversias. Fundador de REDEK (justicia digital) y árbitro en centros internacionales como E-bram (Hong Kong) y la Cámara de Comercio de Madrid.
                </p>
                <ul className="partner-milestones">
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#e0448a" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>LL.M. en New York University (NYU) y National University of Singapore.</span>
                  </li>
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#e0448a" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Delegado de Colombia ante Naciones Unidas (UNCITRAL) en ODR y soborno transnacional.</span>
                  </li>
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#e0448a" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Miembro activo de organismos internacionales NCTDR, ICODR y TCL.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Socio 2: Jorge Armando Corredor */}
            <div className="partner-card-dark">
              <div className="partner-img-box">
                <img src="./jorge-corredor.png" alt="Jorge Armando Corredor Higuera" className="partner-img-actual" />
                <span className="partner-badge-pos">Socio Director</span>
              </div>
              <div className="partner-details-box">
                <h3 className="partner-name-serif">Jorge Armando Corredor Higuera</h3>
                <span className="partner-role-line">Derecho Financiero, Esquemas Fiduciarios &amp; Valores</span>
                <p className="partner-desc-p">
                  Abogado de la Universidad Nacional, LL.M. en Universität Heidelberg (Alemania) y Doctor en Derecho por la Universidad Carlos III de Madrid. Especialista de máxima autoridad en operaciones fiduciarias y litigios del sector bursátil y bancario.
                </p>
                <ul className="partner-milestones">
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#ffd41c" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Exfuncionario de la Superintendencia Financiera de Colombia.</span>
                  </li>
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#ffd41c" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Miembro de la Sala Disciplinaria del AMV y la Bolsa Mercantil de Colombia.</span>
                  </li>
                  <li className="milestone-item">
                    <CheckCircle2 size={16} color="#ffd41c" style={{ flexShrink: 0, marginTop: 2 }} />
                    <span>Docente de pregrado y posgrado en derecho bancario en la Univ. Externado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 4: EXPERIENCIA Y CASOS REALES (CASE STUDIES)
        ========================================================================
      */}
      <section id="experiencia" className="content-section" style={{ background: '#070e1c' }}>
        <div className="container">
          <div className="section-head-dark">
            <span className="section-tag-gold">Track Record Comprobado</span>
            <h2 className="section-title-serif">
              Casos Reales y Mandatos <span className="gold">Internacionales</span>
            </h2>
            <p className="section-lead-muted">
              Transacciones representativas asesoradas exitosamente por el equipo directivo de TecLegal.
            </p>
          </div>

          <div className="track-record-grid">
            <div className="record-column">
              <div className="record-col-header">
                <Globe size={26} color="#e0448a" />
                <span>Asesoría Contractual y ODR</span>
              </div>
              <div className="record-list">
                <div>
                  <h4 className="record-item-title">Emirates Development Bank (EDB)</h4>
                  <p className="record-item-desc">
                    Estructuración legal de instrumentos de financiamiento sostenible para pymes en proyectos de inteligencia artificial con incorporación de KPIs de uso responsable de IA.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Monetary Authority of Singapore (MAS)</h4>
                  <p className="record-item-desc">
                    Implementación de mecanismos de resolución de controversias en línea (ODR) aplicables al financiamiento verde y sostenible.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Katoen Natie (Bélgica)</h4>
                  <p className="record-item-desc">
                    Asesoría integral en el establecimiento corporativo de su filial colombiana y negociación de contratos transnacionales.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Eco1st &amp; Next Level Solutions (EE. UU.)</h4>
                  <p className="record-item-desc">
                    Consultoría legal corporativa y soft-landing para sus operaciones de servicios y tecnología en el mercado colombiano.
                  </p>
                </div>
              </div>
            </div>

            <div className="record-column">
              <div className="record-col-header">
                <Building2 size={26} color="#ffd41c" />
                <span>Estructuración Fiduciaria y Litigio</span>
              </div>
              <div className="record-list">
                <div>
                  <h4 className="record-item-title">Esquemas Fiduciarios Inmobiliarios y Hoteleros</h4>
                  <p className="record-item-desc">
                    Estructuración contractual integral para la titularización y comercialización de derechos fiduciarios en proyectos hoteleros en Colombia.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Sistemas de Compensación y Liquidación</h4>
                  <p className="record-item-desc">
                    Conceptos jurídicos de alta especialidad en garantías mobiliarias y fiducias aplicadas a depósitos centralizados de valores.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Tribunal Arbitral Nali vs. Canales</h4>
                  <p className="record-item-desc">
                    Participación arbitral en procesos de restitución inmobiliaria derivados de esquemas de fiducia mercantil de garantía.
                  </p>
                </div>
                <div>
                  <h4 className="record-item-title">Defensa ante la Superintendencia Financiera</h4>
                  <p className="record-item-desc">
                    Representación judicial y regulatoria de entidades y contrapartes frente a controversias en estructuras fiduciarias.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        SECTION 5: CONTACTO & FORMULARIO EDITORIAL
        ========================================================================
      */}
      <section id="contacto" className="content-section">
        <div className="container">
          <div className="consultation-box">
            <div className="consultation-info-col">
              <div>
                <span className="section-tag-gold">Contacto Directo</span>
                <h2 className="consult-title-serif">Hablemos sobre su operación</h2>
                <p className="consult-text-p">
                  Evaluamos su consulta con absoluta confidencialidad, rigor técnico y atención directa de nuestros socios fundadores.
                </p>

                <div className="consult-channels">
                  <div className="channel-row">
                    <div className="channel-icon-pill">
                      <MapPin size={20} />
                    </div>
                    <div>
                      <div className="channel-label-small">Sede Principal</div>
                      <div className="channel-val-strong">Bogotá D.C., Colombia</div>
                    </div>
                  </div>

                  <div className="channel-row">
                    <div className="channel-icon-pill">
                      <Mail size={20} />
                    </div>
                    <div>
                      <div className="channel-label-small">Correo Electrónico</div>
                      <div className="channel-val-strong">contacto@teclegal.co</div>
                    </div>
                  </div>

                  <div className="channel-row">
                    <div className="channel-icon-pill">
                      <Clock size={20} />
                    </div>
                    <div>
                      <div className="channel-label-small">Horario de Atención</div>
                      <div className="channel-val-strong">Lunes a Viernes &bull; 8:00 - 18:00 COT</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2rem', fontSize: '0.82rem', color: '#64748b' }}>
                TecLegal S.A.S &bull; Sin conflictos de interés &bull; Cumplimiento normativo transfronterizo.
              </div>
            </div>

            <div className="consultation-form-col">
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.9rem', color: '#fff', marginBottom: '1.5rem' }}>
                Formulario de Solicitud
              </h3>

              {formSubmitted ? (
                <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '12px', color: '#6ee7b7' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>¡Consulta enviada con éxito!</h4>
                  <p style={{ fontSize: '0.92rem' }}>
                    Se ha abierto su gestor de correo con el formato oficial para el equipo de TecLegal S.A.S. Si lo prefiere, contáctenos directamente a <strong>contacto@teclegal.co</strong>.
                  </p>
                </div>
              ) : (
                <form className="dark-form" onSubmit={handleSubmit}>
                  <div>
                    <label className="field-label">Nombre completo *</label>
                    <input 
                      type="text" 
                      name="nombre" 
                      required 
                      className="input-dark" 
                      placeholder="Ej. Dr. Carlos Mendoza"
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="field-label">Empresa o Institución</label>
                    <input 
                      type="text" 
                      name="empresa" 
                      className="input-dark" 
                      placeholder="Nombre de la compañía"
                      value={formData.empresa}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="field-label">Correo electrónico corporativo *</label>
                    <input 
                      type="email" 
                      name="correo" 
                      required 
                      className="input-dark" 
                      placeholder="nombre@organizacion.com"
                      value={formData.correo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <label className="field-label">Área o Tipo de Servicio *</label>
                    <select 
                      name="asunto" 
                      className="select-dark"
                      value={formData.asunto}
                      onChange={handleInputChange}
                    >
                      <option value="Comercio Internacional & Nearshoring">Comercio Internacional &amp; Nearshoring</option>
                      <option value="Negocios Internacionales e Inversión (Soft Landing)">Negocios Internacionales e Inversión (Soft Landing)</option>
                      <option value="Arbitraje y Resolución de Disputas">Arbitraje Comercial &amp; Disputas</option>
                      <option value="Revisión de Fideicomiso o Loan Agreement">Revisión de Fideicomiso o Loan Agreement</option>
                      <option value="LegalTech & Soluciones Digitales">LegalTech &amp; Soluciones Digitales</option>
                      <option value="Otra Asesoría Corporativa">Otra Asesoría Corporativa</option>
                    </select>
                  </div>

                  <div>
                    <label className="field-label">Detalle del requerimiento *</label>
                    <textarea 
                      name="mensaje" 
                      required 
                      className="textarea-dark" 
                      placeholder="Describa el alcance de la operación, partes involucradas o jurisdicción aplicable..."
                      value={formData.mensaje}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-capsule-wine" style={{ justifyContent: 'center', width: '100%', padding: '0.85rem' }}>
                    <span>Enviar Consulta a TecLegal</span>
                    <span className="circle-arrow">
                      <ArrowRight size={15} />
                    </span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 
        ========================================================================
        FOOTER
        ========================================================================
      */}
      <footer className="site-footer">
        <div className="container">
          <div className="footer-inner-grid">
            <div>
              <div className="brand-monogram">
                <img src="./logo.png" alt="TecLegal Logo" className="brand-logo-img" />
                <span className="brand-name-serif">TecLegal</span>
              </div>
              <p className="footer-about-p">
                TecLegal S.A.S &bull; Firma boutique con sede en Bogotá especializada en gestión integral de riesgos jurídicos, transacciones transfronterizas, arbitraje comercial y LegalTech.
              </p>
            </div>

            <div>
              <h4 className="footer-nav-col-title">Secciones</h4>
              <ul className="footer-links-vertical">
                <li><a href="#inicio" className="footer-a">Inicio</a></li>
                <li><a href="#firma" className="footer-a">Quiénes somos</a></li>
                <li><a href="#servicios" className="footer-a">Servicios y Oferta</a></li>
                <li><a href="#equipo" className="footer-a">Socios Directores</a></li>
                <li><a href="#experiencia" className="footer-a">Casos de Éxito</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-nav-col-title">Legal &amp; Ética</h4>
              <ul className="footer-links-vertical">
                <li>
                  <button onClick={() => setPrivacyModalOpen(true)} className="footer-a">
                    Política de Tratamiento de Datos
                  </button>
                </li>
                <li>
                  <a href="#firma" className="footer-a">
                    Declaración de Incompatibilidades
                  </a>
                </li>
                <li>
                  <a href="#contacto" className="footer-a">
                    contacto@teclegal.co
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-closing-bar">
            <div>
              &copy; {new Date().getFullYear()} TecLegal S.A.S. Todos los derechos reservados.
            </div>
            <div>
              Bogotá D.C., Colombia &bull; Servicios Jurídicos Profesionales
            </div>
          </div>
        </div>
      </footer>

      {/* MODAL PRIVACIDAD */}
      {privacyModalOpen && (
        <div 
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(4, 8, 18, 0.85)',
            backdropFilter: 'blur(6px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '1.5rem'
          }}
          onClick={() => setPrivacyModalOpen(false)}
        >
          <div 
            style={{
              background: '#0c1527',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              borderRadius: '20px',
              maxWidth: '650px',
              width: '100%',
              padding: '2.5rem',
              position: 'relative',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setPrivacyModalOpen(false)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', color: '#94a3b8' }}
            >
              <X size={24} />
            </button>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: '#fff', marginBottom: '1rem' }}>
              Tratamiento de Datos Personales
            </h3>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6, marginBottom: '1rem' }}>
              De conformidad con la Ley Estatutaria 1581 de 2012 de la República de Colombia, <strong>TecLegal S.A.S.</strong> garantiza que la información suministrada a través de nuestros canales y formularios será tratada con confidencialidad profesional absoluta y utilizada únicamente para evaluar su consulta jurídica y coordinar comunicaciones entre las partes.
            </p>
            <p style={{ fontSize: '0.92rem', color: '#94a3b8', lineHeight: 1.6 }}>
              Para ejercer sus derechos de consulta, actualización o supresión de datos, puede escribir directamente a <strong>contacto@teclegal.co</strong>.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
