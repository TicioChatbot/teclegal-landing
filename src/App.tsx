import React, { useState } from 'react'
import {
  Shield,
  Lightbulb,
  Award,
  Users,
  HeartHandshake,
  Globe,
  Briefcase,
  Scale,
  Send,
  Mail,
  MapPin,
  Clock,
  Menu,
  X,
  ChevronRight,
  CheckCircle2,
  Building2
} from 'lucide-react'

export const App: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Contact form state
  const [formData, setFormData] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    asunto: 'consulta_general',
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
    // Open standard mailto link with structured client query
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
    <div className="app-root">
      {/* NAVIGATION BAR */}
      <header className="navbar">
        <div className="container navbar-container">
          <a href="#inicio" className="logo-wrapper">
            <img src="./logo.png" alt="TecLegal Logo" className="logo-symbol" />
            <span>Tec<span className="logo-accent">Legal</span></span>
          </a>

          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Alternar navegación"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#inicio" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Inicio
                </a>
              </li>
              <li>
                <a href="#quienes-somos" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Quiénes somos
                </a>
              </li>
              <li>
                <a href="#areas" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Áreas de práctica
                </a>
              </li>
              <li>
                <a href="#equipo" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Equipo
                </a>
              </li>
              <li>
                <a href="#experiencia" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Experiencia
                </a>
              </li>
              <li>
                <a 
                  href="#contacto" 
                  className="nav-btn-contact"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contáctenos
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section id="inicio" className="hero">
        <div className="hero-bg"></div>
        <div className="hero-overlay"></div>
        <div className="hero-geometric-accent"></div>
        <div className="hero-geometric-accent-2"></div>

        <div className="container hero-content">
          <div className="hero-badge">
            <Shield size={16} /> Firma Boutique &bull; Bogotá, Colombia
          </div>
          <h1 className="hero-title">
            Gestión Integral de Riesgos Legales y <span className="highlight-gold">LegalTech</span> para el Entorno Transnacional.
          </h1>
          <p className="hero-description">
            Combinamos más de 20 años de trayectoria sénior en contratos internacionales, 
            defensa comercial y resolución de disputas con herramientas tecnológicas avanzadas para brindar soluciones rigurosas, ágiles y competitivas.
          </p>
          <div className="hero-actions">
            <a href="#contacto" className="btn-primary">
              Iniciar Consulta <ChevronRight size={18} />
            </a>
            <a href="#quienes-somos" className="btn-secondary">
              Conocer TecLegal
            </a>
          </div>
        </div>
      </section>

      {/* QUIÉNES SOMOS & PILARES */}
      <section id="quienes-somos" className="section section-alt">
        <div className="container">
          <div className="about-grid">
            <div>
              <span className="section-eyebrow">Sobre TecLegal</span>
              <h2 className="section-title">¿Quiénes somos y por qué elegirnos?</h2>
              <p className="about-intro-text">
                <strong>TecLegal S.A.S</strong> es una firma boutique con sede en Bogotá, especializada en la 
                gestión integral de riesgos legales para el entorno empresarial transnacional. 
                Nuestro equipo sénior combina 20 años de trayectoria jurídica con una perspectiva avanzada 
                en contratos y transacciones transfronterizas.
              </p>
              <p className="about-intro-text">
                Nuestra práctica se apoya directamente en herramientas <strong>LegalTech</strong> para fortalecer 
                el análisis jurídico, optimizar procesos y ofrecer a nuestros clientes soluciones rigurosas, 
                eficientes y alineadas con las exigencias contemporáneas del ejercicio global.
              </p>
              <div className="about-quote">
                “Transformamos la complejidad regulatoria internacional en operaciones transfronterizas seguras, eficientes y de alto valor estratégico.”
              </div>
            </div>

            <div className="pillars-grid">
              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Lightbulb size={26} />
                </div>
                <h3 className="pillar-title">Innovación continua</h3>
                <p className="pillar-desc">
                  Incorporamos las tecnologías y herramientas más recientes para optimizar nuestros servicios y procesos de análisis legal.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Award size={26} />
                </div>
                <h3 className="pillar-title">Excelencia legal</h3>
                <p className="pillar-desc">
                  Nos esforzamos por brindar asesoramiento y soluciones jurídicas de la más alta calidad y solidez técnica.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <Users size={26} />
                </div>
                <h3 className="pillar-title">Atención personalizada</h3>
                <p className="pillar-desc">
                  Entendemos las necesidades únicas de cada cliente y adaptamos nuestras soluciones estratégicas de forma directa e individual.
                </p>
              </div>

              <div className="pillar-card">
                <div className="pillar-icon-wrap">
                  <HeartHandshake size={26} />
                </div>
                <h3 className="pillar-title">Valor humano</h3>
                <p className="pillar-desc">
                  Más allá de nuestros conocimientos legales, priorizamos el bienestar y la dignidad de las personas, ponderando el impacto social.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ÁREAS DE PRÁCTICA */}
      <section id="areas" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Nuestras Capacidades</span>
            <h2 className="section-title">Áreas de Práctica Especializada</h2>
            <p className="section-subtitle">
              Respuesta ágil, conocimiento profundo de regulaciones locales e internacionales y dominio técnico en operaciones complejas.
            </p>
          </div>

          <div className="practices-grid">
            {/* Práctica 1 */}
            <div className="practice-card">
              <div className="practice-header">
                <div className="practice-icon">
                  <Globe size={28} />
                </div>
                <span className="practice-num">01</span>
              </div>
              <h3 className="practice-title">Comercio Internacional</h3>
              <p className="practice-desc">
                Estructuramos operaciones de ‘nearshoring’, asesoramos en el aprovechamiento integral de tratados de libre comercio (TLC) y gestionamos la protección estratégica de flujos de exportación e importación.
              </p>
              <ul className="practice-features">
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Defensa comercial (Antidumping y salvaguardias)</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Operaciones de nearshoring y deslocalización</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Aprovechamiento de acuerdos arancelarios</span>
                </li>
              </ul>
            </div>

            {/* Práctica 2 */}
            <div className="practice-card">
              <div className="practice-header">
                <div className="practice-icon">
                  <Briefcase size={28} />
                </div>
                <span className="practice-num">02</span>
              </div>
              <h3 className="practice-title">Negocios Internacionales e Inversión</h3>
              <p className="practice-desc">
                Facilitamos la expansión de empresas internacionales en Colombia a través de procesos de ‘soft landing’ y estructuración legal corporativa. Expertos en redacción y revisión de contratos bajo estándares globales.
              </p>
              <ul className="practice-features">
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Procesos de soft-landing corporativo</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Contratos transfronterizos complejos y SPVs</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Estructuras fiduciarias y garantías financieras</span>
                </li>
              </ul>
            </div>

            {/* Práctica 3 */}
            <div className="practice-card">
              <div className="practice-header">
                <div className="practice-icon">
                  <Scale size={28} />
                </div>
                <span className="practice-num">03</span>
              </div>
              <h3 className="practice-title">Resolución de Disputas y Arbitraje</h3>
              <p className="practice-desc">
                Combinamos la agilidad boutique con la experiencia sénior arbitral internacional (E-bram Hong Kong, Cámara de Madrid, CCB). Enfoque creativo, riguroso y eficaz en mediación, litigio estratégico y ODR.
              </p>
              <ul className="practice-features">
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Arbitraje comercial nacional e internacional</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Online Dispute Resolution (ODR) & LegalTech</span>
                </li>
                <li className="practice-feature-item">
                  <CheckCircle2 size={16} className="practice-feature-bullet" />
                  <span>Litigio fiduciario, financiero y societario</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* EQUIPO DIRECTIVO */}
      <section id="equipo" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Liderazgo Sénior</span>
            <h2 className="section-title">Socios y Directores</h2>
            <p className="section-subtitle">
              Trayectoria contrastada en organismos multilaterales, tribunales de arbitraje y consultoría de alta complejidad.
            </p>
          </div>

          <div className="team-grid">
            {/* Socio 1: Nicolás Lozada */}
            <div className="team-card">
              <div className="team-img-wrapper">
                <img src="./nicolas-lozada.png" alt="Nicolás Lozada Pimiento" className="team-img" />
                <span className="team-badge">Socio Fundador</span>
              </div>
              <div className="team-info">
                <h3 className="team-name">Nicolás Lozada Pimiento</h3>
                <span className="team-role">Resolución de Disputas, Comercio Exterior & LegalTech</span>
                <p className="team-bio">
                  Abogado y profesor universitario con más de 20 años de experiencia en negocios internacionales, contratos complejos y comercio exterior. Árbitro en los principales centros nacionales e internacionales (E-bram Hong Kong, Cámara de Comercio de Madrid).
                </p>
                <h4 className="team-highlights-title">Hitos destacados</h4>
                <ul className="team-highlights">
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Maestrías en Derecho por New York University (NYU) y Universidad Nacional de Singapur.</span>
                  </li>
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Fundador de REDEK, startup pionera colombiana en justicia digital y ODR.</span>
                  </li>
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Consultor y delegado de Colombia ante Naciones Unidas (UNCITRAL / UNODC).</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Socio 2: Jorge Armando Corredor */}
            <div className="team-card">
              <div className="team-img-wrapper">
                <img src="./jorge-corredor.png" alt="Jorge Armando Corredor Higuera" className="team-img" />
                <span className="team-badge">Socio Director</span>
              </div>
              <div className="team-info">
                <h3 className="team-name">Jorge Armando Corredor Higuera</h3>
                <span className="team-role">Derecho Financiero, Mercado de Valores & Fiducias</span>
                <p className="team-bio">
                  Abogado de la Universidad Nacional de Colombia, Máster (LL.M.) en Heidelberg University (Alemania) y Doctor en Derecho por la Universidad Carlos III de Madrid (España). Especialista de referencia en esquemas fiduciarios y mercados de capitales.
                </p>
                <h4 className="team-highlights-title">Hitos destacados</h4>
                <ul className="team-highlights">
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Exfuncionario de la Superintendencia Financiera de Colombia.</span>
                  </li>
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Miembro de comités disciplinarios y académicos del Autorregulador del Mercado de Valores (AMV) y Bolsa Mercantil.</span>
                  </li>
                  <li className="team-highlight-item">
                    <CheckCircle2 size={16} className="team-highlight-icon" />
                    <span>Docente de pregrado y posgrado en derecho bancario y bursátil en la Univ. Externado.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRACK RECORD / EXPERIENCIA ESPECÍFICA */}
      <section id="experiencia" className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Trayectoria Comprobada</span>
            <h2 className="section-title">Experiencia Específica</h2>
            <p className="section-subtitle">
              Casos reales y transacciones de alto impacto asesoradas por nuestro equipo.
            </p>
          </div>

          <div className="experience-layout">
            <div>
              <h3 className="exp-column-title">
                <Globe size={22} color="var(--color-accent-magenta)" />
                Operaciones Internacionales y Arbitraje
              </h3>
              <div className="exp-cards">
                <div className="exp-card">
                  <h4 className="exp-entity">Emirates Development Bank (EDB)</h4>
                  <p className="exp-desc">
                    Asesoría jurídica en la estructuración de financiamiento para pymes en proyectos de inteligencia artificial, diseño de instrumentos financieros sostenibles y cláusulas éticas y de IA.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Autoridad Monetaria de Singapur (MAS)</h4>
                  <p className="exp-desc">
                    Asesoría en la implementación de mecanismos ODR (Online Dispute Resolution) para la gestión y mitigación de conflictos vinculados al financiamiento sostenible.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Katoen Natie (Bélgica)</h4>
                  <p className="exp-desc">
                    Asesoría integral en el establecimiento de filial colombiana y estructuración contractual corporativa transfronteriza bajo régimen comercial local.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Arbitraje Fiduciario & Contractual</h4>
                  <p className="exp-desc">
                    Actuación como Árbitros y Secretarios en tribunales arbitrales sobre restitución fiduciaria inmobiliaria y responsabilidad fiduciaria contractual.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="exp-column-title">
                <Building2 size={22} color="var(--color-accent-magenta)" />
                Estructuración Financiera & Fiduciaria
              </h3>
              <div className="exp-cards">
                <div className="exp-card">
                  <h4 className="exp-entity">Esquemas Fiduciarios Inmobiliarios y Hoteleros</h4>
                  <p className="exp-desc">
                    Acompañamiento integral en la estructuración de esquemas de titularización y comercialización de derechos fiduciarios, negociación contractual y puesta en marcha fiduciaria.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Garantías Mobiliarias y Compensación de Valores</h4>
                  <p className="exp-desc">
                    Elaboración de conceptos técnicos sobre fiducia en garantía aplicable a infraestructuras de mercado, depósitos centralizados y sistemas de liquidación bursátil.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Eco1st & Next Level Solutions (EE. UU.)</h4>
                  <p className="exp-desc">
                    Consultoría legal permanente de soft-landing para su establecimiento en Colombia y redacción y negociación de contratos transnacionales.
                  </p>
                </div>
                <div className="exp-card">
                  <h4 className="exp-entity">Litigios Regulatorios Financieros</h4>
                  <p className="exp-desc">
                    Representación ante la Superintendencia Financiera de Colombia en esquemas fiduciarios y procesos de alta complejidad financiera.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULARIO Y CONTACTO */}
      <section id="contacto" className="section section-alt">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-panel">
              <div>
                <h2 className="contact-info-title">Hablemos de su caso</h2>
                <p className="contact-info-desc">
                  Comuníquese con nuestros socios directores. Evaluamos su consulta con confidencialidad, rigor técnico y respuesta prioritaria.
                </p>

                <div className="contact-items">
                  <div className="contact-item">
                    <div className="contact-icon">
                      <MapPin size={22} />
                    </div>
                    <div>
                      <div className="contact-text-label">Sede Principal</div>
                      <div className="contact-text-val">Bogotá D.C., Colombia</div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Mail size={22} />
                    </div>
                    <div>
                      <div className="contact-text-label">Correo Electrónico</div>
                      <div className="contact-text-val">contacto@teclegal.co</div>
                    </div>
                  </div>

                  <div className="contact-item">
                    <div className="contact-icon">
                      <Clock size={22} />
                    </div>
                    <div>
                      <div className="contact-text-label">Horario de Atención</div>
                      <div className="contact-text-val">Lunes a Viernes &bull; 8:00 - 18:00 (COT)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ marginTop: '2.5rem', fontSize: '0.85rem', color: '#94a3b8' }}>
                <p>TecLegal S.A.S &bull; NIT y registro mercantil disponible para clientes y contrapartes.</p>
              </div>
            </div>

            <div className="contact-form-panel">
              <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1.5rem' }}>
                Formulario de Consulta
              </h3>

              {formSubmitted ? (
                <div style={{ background: '#ecfdf5', border: '1px solid #10b981', padding: '1.5rem', borderRadius: '8px', color: '#065f46' }}>
                  <h4 style={{ fontWeight: 700, marginBottom: '0.5rem' }}>¡Consulta canalizada con éxito!</h4>
                  <p style={{ fontSize: '0.95rem' }}>
                    Se ha generado el enlace de correo para el equipo de TecLegal. Si su cliente de correo no se abrió automáticamente, puede escribirnos directamente a <strong>contacto@teclegal.co</strong>.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label">Nombre completo *</label>
                    <input 
                      type="text" 
                      name="nombre" 
                      className="form-input" 
                      required 
                      placeholder="Ej. Dra. María Fernández"
                      value={formData.nombre}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Empresa / Entidad</label>
                    <input 
                      type="text" 
                      name="empresa" 
                      className="form-input" 
                      placeholder="Nombre de su organización"
                      value={formData.empresa}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Correo electrónico corporativo *</label>
                    <input 
                      type="email" 
                      name="correo" 
                      className="form-input" 
                      required 
                      placeholder="nombre@organizacion.com"
                      value={formData.correo}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label">Área o naturaleza de la consulta *</label>
                    <select 
                      name="asunto" 
                      className="form-select"
                      value={formData.asunto}
                      onChange={handleInputChange}
                    >
                      <option value="Comercio Internacional y Nearshoring">Comercio Internacional & Nearshoring</option>
                      <option value="Negocios Internacionales e Inversión">Negocios Internacionales e Inversión</option>
                      <option value="Arbitraje y Resolución de Disputas">Arbitraje y Resolución de Disputas</option>
                      <option value="Estructuración Fiduciaria y Financiera">Estructuración Fiduciaria y Financiera</option>
                      <option value="LegalTech y Justicia Digital">LegalTech y Asesoría Tecnológica</option>
                      <option value="Otra consulta corporativa">Otra consulta corporativa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Descripción de la consulta *</label>
                    <textarea 
                      name="mensaje" 
                      className="form-textarea" 
                      required 
                      placeholder="Describa brevemente la operación, requerimiento legal o tribunal involucrado..."
                      value={formData.mensaje}
                      onChange={handleInputChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="form-submit-btn">
                    <Send size={18} /> Enviar Solicitud a TecLegal
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="logo-wrapper" style={{ color: '#fff' }}>
                <img src="./logo.png" alt="TecLegal Logo" className="logo-symbol" />
                <span>Tec<span className="logo-accent">Legal</span></span>
              </div>
              <p className="footer-brand-desc">
                TecLegal S.A.S es una firma boutique de abogados con sede en Bogotá, Colombia. Especialistas en gestión integral de riesgos jurídicos para operaciones transnacionales, LegalTech, contratos globales y arbitraje.
              </p>
            </div>

            <div>
              <h4 className="footer-col-title">Secciones</h4>
              <ul className="footer-links">
                <li><a href="#inicio" className="footer-link">Inicio</a></li>
                <li><a href="#quienes-somos" className="footer-link">Quiénes somos</a></li>
                <li><a href="#areas" className="footer-link">Áreas de práctica</a></li>
                <li><a href="#equipo" className="footer-link">Equipo</a></li>
                <li><a href="#experiencia" className="footer-link">Experiencia</a></li>
                <li><a href="#contacto" className="footer-link">Contacto</a></li>
              </ul>
            </div>

            <div>
              <h4 className="footer-col-title">Legal</h4>
              <ul className="footer-links">
                <li>
                  <button onClick={() => setPrivacyModalOpen(true)} className="footer-link" style={{ textAlign: 'left' }}>
                    Tratamiento de Datos y Privacidad
                  </button>
                </li>
                <li>
                  <a href="#quienes-somos" className="footer-link">
                    Incompatibilidades y Ética
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <div>
              &copy; {new Date().getFullYear()} TecLegal S.A.S. Todos los derechos reservados.
            </div>
            <div>
              Sede Bogotá, Colombia &bull; Soluciones Jurídicas & LegalTech
            </div>
          </div>
        </div>
      </footer>

      {/* PRIVACY MODAL */}
      {privacyModalOpen && (
        <div className="modal-backdrop" onClick={() => setPrivacyModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setPrivacyModalOpen(false)}>
              <X size={24} />
            </button>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>
              Política de Tratamiento de Datos Personales
            </h3>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              En cumplimiento de la Ley Estatutaria 1581 de 2012 y sus decretos reglamentarios en la República de Colombia, <strong>TecLegal S.A.S.</strong> informa que los datos personales facilitados voluntariamente a través de este portal y sus canales de contacto serán tratados exclusivamente con la finalidad de gestionar la atención a su consulta, remitir propuestas de servicios jurídicos solicitadas y coordinar comunicaciones profesionales.
            </p>
            <h4 style={{ fontWeight: 700, color: 'var(--color-primary)', marginTop: '1rem', marginBottom: '0.5rem' }}>
              Derechos del titular
            </h4>
            <p style={{ fontSize: '0.95rem', color: 'var(--color-text-muted)', marginBottom: '1rem', lineHeight: 1.6 }}>
              Usted tiene derecho a conocer, actualizar, rectificar y solicitar la supresión de sus datos personales en cualquier momento escribiendo a <strong>contacto@teclegal.co</strong>. TecLegal no cede ni comercializa información personal con terceros bajo ningún concepto.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
