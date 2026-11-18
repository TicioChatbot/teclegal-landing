import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, ArrowUpRight, Check, Menu, X } from 'lucide-react'

/* ==========================================================================
   DATOS (tomados del brochure oficial de TecLegal S.A.S.)
   ========================================================================== */

type DocketFilter = 'Todos' | 'Contratos' | 'Arbitraje' | 'Fiduciario'

interface Practice {
  clause: string
  title: string
  tagline: string
  formOption: string
  body: string
  scope: string[]
  forums: string[]
}

interface Precedent {
  exp: string
  filter: Exclude<DocketFilter, 'Todos'>
  party: string
  jurisdiction: string
  matter: string
  summary: string
}

const PRACTICES: Practice[] = [
  {
    clause: '3.1',
    title: 'Comercio internacional y defensa comercial',
    tagline: 'Nearshoring, tratados de libre comercio y flujos de exportación',
    formOption: 'Comercio internacional y nearshoring',
    body:
      'Estructuramos operaciones de nearshoring, asesoramos en el aprovechamiento de tratados de libre comercio y gestionamos la protección de flujos de exportación e importación.',
    scope: [
      'Representación y lobby de alto nivel en investigaciones de defensa comercial: antidumping, salvaguardias y subvenciones.',
      'Estructuración jurídica de operaciones de nearshoring y relocalización productiva.',
      'Aprovechamiento de preferencias arancelarias y reglas de origen.'
    ],
    forums: ['Antidumping', 'Salvaguardias', 'TLC', 'Nearshoring']
  },
  {
    clause: '3.2',
    title: 'Negocios internacionales e inversión',
    tagline: 'Soft landing en Colombia, contratos transfronterizos y fiducias',
    formOption: 'Negocios internacionales e inversión',
    body:
      'Facilitamos la expansión de empresas internacionales en Colombia a través de procesos de soft landing y estructuración legal estratégica. Transformamos la complejidad regulatoria en operaciones transfronterizas seguras y competitivas.',
    scope: [
      'Revisión y redacción de contratos internacionales bajo estándares globales.',
      'Validación bajo derecho local de loan agreements, fideicomisos de garantía y cesión de derechos de cobro.',
      'Análisis de implicaciones regulatorias y fiscales sobre flujos de fondos.'
    ],
    forums: ['Soft landing', 'SPV', 'Fiducia en garantía', 'Contratos globales']
  },
  {
    clause: '3.3',
    title: 'Resolución de disputas',
    tagline: 'Arbitraje nacional e internacional, mediación y ODR',
    formOption: 'Arbitraje y resolución de disputas',
    body:
      'Combinamos la agilidad de una firma boutique con la visión estratégica de nuestro socio líder, árbitro en los principales centros del país y en centros internacionales como E-bram (Hong Kong) y la Cámara de Comercio de Madrid.',
    scope: [
      'Negociación, mediación, conciliación, arbitraje y litigio estratégico.',
      'Disputas comerciales, de inversión, financieras y fiduciarias.',
      'Resolución de disputas en línea (ODR) con herramientas LegalTech.'
    ],
    forums: ['E-bram Hong Kong', 'Cámara de Comercio de Madrid', 'Centros nacionales', 'ODR']
  }
]

const PRECEDENTS: Precedent[] = [
  {
    exp: '001',
    filter: 'Contratos',
    party: 'Emirates Development Bank (EDB)',
    jurisdiction: 'Emiratos Árabes Unidos',
    matter: 'Financiamiento de IA sostenible',
    summary:
      'Estructuración de financiamiento para pymes en proyectos de inteligencia artificial, con KPIs de sostenibilidad y uso responsable de la IA en los contratos.'
  },
  {
    exp: '002',
    filter: 'Contratos',
    party: 'Autoridad Monetaria de Singapur (MAS)',
    jurisdiction: 'Singapur',
    matter: 'Resolución de disputas en línea',
    summary:
      'Implementación de mecanismos ODR para conflictos relacionados con el financiamiento sostenible.'
  },
  {
    exp: '003',
    filter: 'Contratos',
    party: 'Katoen Natie',
    jurisdiction: 'Bélgica → Colombia',
    matter: 'Establecimiento de filial',
    summary:
      'Establecimiento de la filial colombiana y revisión de contratos nacionales e internacionales derivados de su operación.'
  },
  {
    exp: '004',
    filter: 'Contratos',
    party: 'Eco1st · Next Level Solutions',
    jurisdiction: 'EE. UU. → Colombia',
    matter: 'Consultoría permanente',
    summary:
      'Consultoría jurídica permanente para su establecimiento en Colombia y revisión de contratos nacionales e internacionales.'
  },
  {
    exp: '005',
    filter: 'Arbitraje',
    party: 'Nali S.A.S. vs. Canales Desarrolladores S.A.S.',
    jurisdiction: 'Tribunal arbitral',
    matter: 'Árbitro',
    summary: 'Restitución inmobiliaria bajo una fiducia mercantil.'
  },
  {
    exp: '006',
    filter: 'Arbitraje',
    party: 'Soporte Vital & Empresarial vs. Asesorías Urbanas Reales y Fiduciaria Colpatria',
    jurisdiction: 'Tribunal arbitral',
    matter: 'Secretario del tribunal',
    summary:
      'Incumplimiento de promesa de compraventa y responsabilidad de la entidad fiduciaria.'
  },
  {
    exp: '007',
    filter: 'Fiduciario',
    party: 'Proyectos hoteleros en Colombia',
    jurisdiction: 'Colombia',
    matter: 'Esquemas fiduciarios inmobiliarios',
    summary:
      'Estructuración de un esquema fiduciario para comercializar derechos fiduciarios, con negociación contractual ante la fiduciaria y puesta en marcha.'
  },
  {
    exp: '008',
    filter: 'Fiduciario',
    party: 'Garantías mobiliarias y financieras',
    jurisdiction: 'Colombia',
    matter: 'Conceptos y representación judicial',
    summary:
      'Conceptos sobre fiducia en garantía, sistemas de compensación y liquidación de valores, y representación judicial en estructuras fiduciarias.'
  }
]

const FILTERS: DocketFilter[] = ['Todos', 'Contratos', 'Arbitraje', 'Fiduciario']

const OUTER_DOTS = [
  [34, 10], [23, 11.5], [14, 17.5], [9, 26], [9, 36], [14, 44.5], [23, 50.5], [34, 52]
]
const INNER_DOTS = [
  [31, 18], [22.5, 21], [17.5, 27.5], [17.5, 34.5], [22.5, 41], [31, 44]
]

/* ==========================================================================
   COMPONENTES DE MARCA
   ========================================================================== */

const DotArc: React.FC<{ className?: string; animated?: boolean }> = ({ className, animated }) => (
  <svg
    viewBox="0 0 62 62"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`${className ?? ''} ${animated ? 'is-animated' : ''}`}
  >
    {OUTER_DOTS.map(([cx, cy], i) => (
      <circle key={`o${i}`} cx={cx} cy={cy} r="3.4" fill="#e2c509" style={{ '--i': i } as React.CSSProperties} />
    ))}
    {INNER_DOTS.map(([cx, cy], i) => (
      <circle key={`i${i}`} cx={cx} cy={cy} r="2.6" fill="#ac1259" style={{ '--i': i + 8 } as React.CSSProperties} />
    ))}
  </svg>
)

const Wordmark: React.FC<{ light?: boolean }> = ({ light }) => (
  <span className={`wordmark ${light ? 'is-light' : ''}`}>
    <DotArc className="wordmark-mark" />
    <span>
      Tec<b>Legal</b>
    </span>
  </span>
)

/* ==========================================================================
   APP
   ========================================================================== */

export const App: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [filter, setFilter] = useState<DocketFilter>('Todos')
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    correo: '',
    asunto: PRACTICES[0].formOption,
    mensaje: ''
  })
  const dialogRef = useRef<HTMLDialogElement | null>(null)

  // Fallback de light-dismiss para navegadores sin soporte de closedby="any"
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog || 'closedBy' in HTMLDialogElement.prototype) return
    const onClick = (event: MouseEvent) => {
      if (event.target !== dialog) return
      const r = dialog.getBoundingClientRect()
      const inside =
        r.top <= event.clientY && event.clientY <= r.top + r.height &&
        r.left <= event.clientX && event.clientX <= r.left + r.width
      if (!inside) dialog.close()
    }
    dialog.addEventListener('click', onClick)
    return () => dialog.removeEventListener('click', onClick)
  }, [])

  const today = new Date()
  const monthName = new Intl.DateTimeFormat('es-CO', { month: 'long' }).format(today)

  const shown = filter === 'Todos' ? PRECEDENTS : PRECEDENTS.filter((p) => p.filter === filter)

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))

  const pickPractice = (option: string) => {
    setForm((prev) => ({ ...prev, asunto: option }))
    setSent(false)
    document.getElementById('firma')?.scrollIntoView({ behavior: 'smooth' })
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent(
      `[TecLegal Web] ${form.asunto} — ${form.empresa || form.nombre}`
    )
    const body = encodeURIComponent(
      `Yo, ${form.nombre}, en representación de ${form.empresa || '(sin empresa)'}, ` +
        `solicito a TecLegal S.A.S. asesoría en materia de ${form.asunto}.\n\n` +
        `Asunto:\n${form.mensaje}\n\nContacto: ${form.correo}`
    )
    window.location.href = `mailto:contacto@teclegal.co?subject=${subject}&body=${body}`
    setSent(true)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="paper">
      <div className="read-progress" aria-hidden="true" />

      {/* ================= ENCABEZADO DEL EXPEDIENTE ================= */}
      <header className="doc-header">
        <div className="wrap doc-header-row">
          <a href="#inicio" aria-label="TecLegal, inicio">
            <Wordmark />
          </a>

          <button
            type="button"
            className="menu-toggle"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav aria-label="Secciones" className={`doc-nav ${menuOpen ? 'is-open' : ''}`}>
            <a href="#considerandos" onClick={closeMenu}><span>§1</span> La firma</a>
            <a href="#objeto" onClick={closeMenu}><span>§2</span> Prácticas</a>
            <a href="#partes" onClick={closeMenu}><span>§3</span> Socios</a>
            <a href="#precedentes" onClick={closeMenu}><span>§4</span> Experiencia</a>
            <a href="#firma" className="btn-ink btn-sm" onClick={closeMenu}>
              Firmar consulta <ArrowRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* ================= HERO: EL DOCUMENTO CON CONTROL DE CAMBIOS ================= */}
        <section id="inicio" className="hero">
          <div className="wrap hero-sheet">
            <ol className="line-numbers" aria-hidden="true">
              {Array.from({ length: 18 }, (_, i) => (
                <li key={i}>{i + 1}</li>
              ))}
            </ol>

            <DotArc className="hero-arc" animated />

            <div className="hero-meta mono">
              <span>EXP. TL-2026 · BOGOTÁ D.C.</span>
              <span className="track-on">
                <i aria-hidden="true" /> Control de cambios activado
              </span>
            </div>

            <h1 className="hero-title">
              Su operación internacional merece un derecho{' '}
              <del>lento, opaco y local</del>{' '}
              <ins>ágil, preciso y global.</ins>
            </h1>

            <aside className="margin-note note-a" aria-label="Comentario al margen">
              <span className="note-author mono">NL · comentario</span>
              Más de 20 años en contratos internacionales y arbitraje respaldan este cambio.
            </aside>
            <aside className="margin-note note-b" aria-label="Comentario al margen">
              <span className="note-author mono">JC · aprobado <Check size={12} strokeWidth={3} /></span>
              Revisado bajo derecho colombiano.
            </aside>

            <p className="hero-lead">
              TecLegal es una <mark>firma boutique con sede en Bogotá</mark> especializada en la
              gestión integral de riesgos legales para empresas que operan entre países. Revisamos,
              negociamos y defendemos sus contratos con criterio sénior y herramientas LegalTech.
            </p>

            <div className="hero-actions">
              <a href="#firma" className="btn-ink">
                Firmar consulta <ArrowRight size={16} />
              </a>
              <a href="#objeto" className="link-under">
                Ver prácticas
              </a>
            </div>

            <div className="signatures" aria-hidden="true">
              <div className="sig">
                <div className="sig-line sig-filled">
                  <Wordmark />
                </div>
                <span className="mono">Por TecLegal S.A.S.</span>
              </div>
              <div className="sig">
                <div className="sig-line">
                  <span className="caret" />
                </div>
                <span className="mono">Por su empresa</span>
              </div>
            </div>
          </div>

          <div className="wrap facts">
            <div className="fact"><b>+20</b><span>años de trayectoria jurídica</span></div>
            <div className="fact"><b>5</b><span>jurisdicciones con mandatos</span></div>
            <div className="fact"><b>2</b><span>socios con formación en NYU, NUS, Heidelberg y Carlos III</span></div>
            <div className="fact"><b>ODR</b><span>justicia digital desde REDEK</span></div>
          </div>
        </section>

        {/* ================= §1 CONSIDERANDOS ================= */}
        <section id="considerandos" className="section">
          <div className="wrap">
            <header className="sec-head">
              <span className="sec-num mono">§1</span>
              <h2 className="sec-title">
                Considerando <em>que…</em>
              </h2>
            </header>

            <div className="considerandos-grid">
              <ol className="recitals">
                <li>
                  <span className="roman mono">I.</span>
                  <p>
                    Somos una firma boutique con sede en Bogotá, especializada en la{' '}
                    <mark>gestión integral de riesgos legales</mark> para el entorno empresarial
                    transnacional.
                  </p>
                </li>
                <li>
                  <span className="roman mono">II.</span>
                  <p>
                    Nuestro equipo sénior combina 20 años de trayectoria jurídica con una perspectiva
                    avanzada en contratos y transacciones internacionales.
                  </p>
                </li>
                <li>
                  <span className="roman mono">III.</span>
                  <p>
                    Nuestra práctica se apoya en <mark>herramientas LegalTech</mark> para fortalecer el
                    análisis jurídico, optimizar procesos y ofrecer soluciones rigurosas y eficientes.
                  </p>
                </li>
                <li>
                  <span className="roman mono">IV.</span>
                  <p>
                    Ni TecLegal S.A.S., ni sus socios ni sus colaboradores se encuentran en situación de
                    inhabilidad, incompatibilidad o conflicto de intereses.
                  </p>
                </li>
              </ol>

              <figure className="annex">
                <span className="tape" aria-hidden="true" />
                <img
                  src="./equipo-reunion.jpg"
                  alt="El equipo de TecLegal trabajando en una mesa de reuniones en Bogotá"
                  loading="lazy"
                  width={746}
                  height={809}
                />
                <figcaption className="mono">Anexo A · El equipo, Bogotá</figcaption>
              </figure>
            </div>

            <p className="resolve mono">Por lo anterior, nos comprometemos con:</p>

            <div className="clauses">
              <article className="clause">
                <span className="mono clause-num">1.1</span>
                <h3>Innovación continua</h3>
                <p>Incorporamos las tecnologías más recientes para optimizar nuestros servicios y procesos.</p>
              </article>
              <article className="clause">
                <span className="mono clause-num">1.2</span>
                <h3>Excelencia legal</h3>
                <p>Asesoramiento y soluciones jurídicas de la más alta calidad.</p>
              </article>
              <article className="clause">
                <span className="mono clause-num">1.3</span>
                <h3>Atención personalizada</h3>
                <p>Adaptamos cada solución a las necesidades únicas de cada cliente.</p>
              </article>
              <article className="clause">
                <span className="mono clause-num">1.4</span>
                <h3>Valor humano</h3>
                <p>Priorizamos el bienestar, la dignidad de las personas y el impacto social de cada decisión.</p>
              </article>
            </div>
          </div>
        </section>

        {/* ================= §2 OBJETO: PRÁCTICAS ================= */}
        <section id="objeto" className="section section-ink">
          <div className="wrap">
            <header className="sec-head">
              <span className="sec-num mono">§2</span>
              <h2 className="sec-title" id="objeto-title">
                Objeto: <em>lo que hacemos</em>
              </h2>
            </header>

            <div className="accordion" aria-labelledby="objeto-title">
              {PRACTICES.map((p, idx) => (
                <details key={p.clause} className="practice" open={idx === 0}>
                  <summary>
                    <span className="mono practice-clause">{p.clause}</span>
                    <span className="practice-title">{p.title}</span>
                    <span className="practice-tagline">{p.tagline}</span>
                  </summary>
                  <div className="practice-body">
                    <p className="practice-text">{p.body}</p>
                    <ol className="practice-scope">
                      {p.scope.map((s, i) => (
                        <li key={i}>
                          <span className="mono">{String.fromCharCode(97 + i)})</span>
                          <span>{s}</span>
                        </li>
                      ))}
                    </ol>
                    <div className="practice-foot">
                      <ul className="chips" aria-label="Temas">
                        {p.forums.map((f) => (
                          <li key={f}>{f}</li>
                        ))}
                      </ul>
                      <button type="button" className="btn-gold" onClick={() => pickPractice(p.formOption)}>
                        Consultar esta cláusula <ArrowUpRight size={16} />
                      </button>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ================= §3 LAS PARTES: SOCIOS ================= */}
        <section id="partes" className="section">
          <div className="wrap">
            <header className="sec-head">
              <span className="sec-num mono">§3</span>
              <h2 className="sec-title">
                Las <em>partes</em>
              </h2>
            </header>

            <div className="parties">
              <article className="party">
                <div className="party-top">
                  <img
                    src="./nicolas-lozada.png"
                    alt="Retrato de Nicolás Lozada Pimiento"
                    loading="lazy"
                    width={362}
                    height={362}
                  />
                  <span className="stamp">Socio líder</span>
                </div>
                <h3 className="party-name">Nicolás Lozada Pimiento</h3>
                <p className="party-role mono">Negocios internacionales · Arbitraje · Comercio exterior</p>
                <p className="party-bio">
                  Abogado y profesor universitario con más de 20 años de experiencia. Árbitro y secretario
                  de tribunales arbitrales en conflictos comerciales y de inversión. Fundador de{' '}
                  <mark>REDEK</mark>, la primera startup colombiana dedicada a la justicia digital.
                </p>
                <ul className="credentials mono">
                  <li>LL.M., New York University (NYU)</li>
                  <li>Maestría, Universidad Nacional de Singapur</li>
                  <li>Consultor y delegado de Colombia ante Naciones Unidas</li>
                  <li>Miembro de NCTDR, ICODR y TCL</li>
                </ul>
              </article>

              <article className="party">
                <div className="party-top">
                  <img
                    src="./jorge-corredor.png"
                    alt="Retrato de Jorge Armando Corredor Higuera"
                    loading="lazy"
                    width={362}
                    height={362}
                  />
                  <span className="stamp stamp-gold">Socio</span>
                </div>
                <h3 className="party-name">Jorge Armando Corredor Higuera</h3>
                <p className="party-role mono">Derecho financiero · Mercado de valores · Fiducia</p>
                <p className="party-bio">
                  Abogado y especialista de la Universidad Nacional de Colombia. Exfuncionario de la{' '}
                  <mark>Superintendencia Financiera</mark>, consultor y litigante en crédito, esquemas
                  fiduciarios y mercados bancario y bursátil. Docente de la Universidad Externado.
                </p>
                <ul className="credentials mono">
                  <li>Doctor en Derecho, Universidad Carlos III de Madrid</li>
                  <li>LL.M., Heidelberg University</li>
                  <li>Tribunal Disciplinario del AMV y Cámara Disciplinaria de la BMC</li>
                  <li>Árbitro nacional</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ================= §4 PRECEDENTES ================= */}
        <section id="precedentes" className="section section-alt">
          <div className="wrap">
            <header className="sec-head sec-head-split">
              <div>
                <span className="sec-num mono">§4</span>
                <h2 className="sec-title">
                  <em>Precedentes</em>
                </h2>
              </div>
              <div className="docket-filters" role="group" aria-label="Filtrar experiencia">
                {FILTERS.map((f) => {
                  const n = f === 'Todos' ? PRECEDENTS.length : PRECEDENTS.filter((p) => p.filter === f).length
                  return (
                    <button
                      key={f}
                      type="button"
                      aria-pressed={filter === f}
                      className={`mono docket-filter ${filter === f ? 'is-on' : ''}`}
                      onClick={() => setFilter(f)}
                    >
                      {f} <span>{String(n).padStart(2, '0')}</span>
                    </button>
                  )
                })}
              </div>
            </header>

            <div className="docket" role="list">
              <div className="docket-row docket-head mono" aria-hidden="true">
                <span>Exp.</span>
                <span>Parte</span>
                <span>Jurisdicción</span>
                <span>Materia</span>
              </div>
              {shown.map((p) => (
                <article key={p.exp} className="docket-row" role="listitem">
                  <span className="mono docket-exp">{p.exp}</span>
                  <div>
                    <h3 className="docket-party">{p.party}</h3>
                    <p className="docket-summary">{p.summary}</p>
                  </div>
                  <span className="docket-jur">{p.jurisdiction}</span>
                  <span className="docket-matter">{p.matter}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ================= §5 FIRMA: FORMULARIO TIPO CONTRATO ================= */}
        <section id="firma" className="section">
          <div className="wrap">
            <header className="sec-head">
              <span className="sec-num mono">§5</span>
              <h2 className="sec-title">
                Firme <em>aquí</em>
              </h2>
            </header>

            <div className="sign-grid">
              <div className="sign-sheet">
                {sent ? (
                  <div className="sent" role="status">
                    <span className="stamp stamp-big">Recibido</span>
                    <p>
                      Preparamos el borrador de su solicitud en su aplicación de correo. Si no se abrió,
                      escríbanos a <strong>contacto@teclegal.co</strong>.
                    </p>
                    <button type="button" className="link-under" onClick={() => setSent(false)}>
                      Redactar otra solicitud
                    </button>
                  </div>
                ) : (
                  <form onSubmit={onSubmit} className="madlib">
                    <p>
                      Yo,{' '}
                      <label className="sr-only" htmlFor="nombre">Nombre completo</label>
                      <input id="nombre" name="nombre" required autoComplete="name" placeholder="su nombre completo" value={form.nombre} onChange={onChange} className="blank blank-lg" />
                      , en representación de{' '}
                      <label className="sr-only" htmlFor="empresa">Empresa</label>
                      <input id="empresa" name="empresa" autoComplete="organization" placeholder="su empresa" value={form.empresa} onChange={onChange} className="blank" />
                      , solicito a <strong>TecLegal S.A.S.</strong> asesoría en materia de{' '}
                      <label className="sr-only" htmlFor="asunto">Área de interés</label>
                      <select id="asunto" name="asunto" value={form.asunto} onChange={onChange} className="blank blank-select">
                        {PRACTICES.map((p) => (
                          <option key={p.formOption} value={p.formOption}>{p.formOption.toLowerCase()}</option>
                        ))}
                        <option value="Estructuración fiduciaria y financiera">estructuración fiduciaria y financiera</option>
                        <option value="LegalTech y análisis contractual">LegalTech y análisis contractual</option>
                      </select>
                      , respecto del siguiente asunto:
                    </p>
                    <label className="sr-only" htmlFor="mensaje">Descripción del asunto</label>
                    <textarea id="mensaje" name="mensaje" required rows={4} placeholder="Describa brevemente la operación, el contrato o la disputa…" value={form.mensaje} onChange={onChange} className="blank-area" />
                    <p>
                      Pueden notificarme en{' '}
                      <label className="sr-only" htmlFor="correo">Correo electrónico</label>
                      <input id="correo" name="correo" type="email" required autoComplete="email" placeholder="correo@empresa.com" value={form.correo} onChange={onChange} className="blank blank-lg" />
                      .
                    </p>

                    <label className="consent">
                      <input type="checkbox" required />
                      <span>
                        Autorizo el tratamiento de mis datos según la{' '}
                        <button type="button" className="link-under" onClick={() => dialogRef.current?.showModal()}>
                          política de datos (Ley 1581 de 2012)
                        </button>
                        .
                      </span>
                    </label>

                    <div className="sign-actions">
                      <button type="submit" className="btn-ink">
                        Firmar y enviar <ArrowRight size={16} />
                      </button>
                      <span className="mono sign-note">Respuesta directa de un socio</span>
                    </div>
                  </form>
                )}
              </div>

              <dl className="notify">
                <div>
                  <dt className="mono">Domicilio</dt>
                  <dd>Bogotá D.C., Colombia</dd>
                </div>
                <div>
                  <dt className="mono">Notificaciones</dt>
                  <dd><a href="mailto:contacto@teclegal.co">contacto@teclegal.co</a></dd>
                </div>
                <div>
                  <dt className="mono">Honorarios</dt>
                  <dd>Tarifa fija por alcance o modelo por horas efectivas, siempre con validación previa del cliente.</dd>
                </div>
                <div>
                  <dt className="mono">Confidencialidad</dt>
                  <dd>Sin inhabilidades, incompatibilidades ni conflictos de interés.</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>

      {/* ================= PIE: CONSTANCIA ================= */}
      <footer className="doc-footer">
        <div className="wrap">
          <p className="constancia">
            En constancia, se firma en Bogotá D.C., a los {today.getDate()} días del mes de {monthName} de{' '}
            {today.getFullYear()}.
          </p>
          <div className="footer-row">
            <Wordmark light />
            <nav aria-label="Pie de página" className="footer-links mono">
              <a href="#considerandos">La firma</a>
              <a href="#objeto">Prácticas</a>
              <a href="#partes">Socios</a>
              <a href="#precedentes">Experiencia</a>
              <button type="button" onClick={() => dialogRef.current?.showModal()}>Privacidad</button>
            </nav>
            <span className="mono footer-copy">© {today.getFullYear()} TecLegal S.A.S.</span>
          </div>
        </div>
      </footer>

      {/* ================= MODAL DE PRIVACIDAD ================= */}
      <dialog
        ref={dialogRef}
        {...({ closedby: 'any' } as Record<string, string>)}
        aria-labelledby="privacy-title"
        className="privacy"
      >
        <div className="privacy-head">
          <h2 id="privacy-title">Tratamiento de datos personales</h2>
          <button type="button" aria-label="Cerrar" onClick={() => dialogRef.current?.close()}>
            <X size={18} />
          </button>
        </div>
        <p>
          En cumplimiento de la Ley Estatutaria 1581 de 2012, TecLegal S.A.S. tratará los datos
          suministrados en este sitio únicamente para atender su solicitud, preparar propuestas de
          servicios y comunicarse con usted.
        </p>
        <p>
          Puede conocer, actualizar, rectificar o solicitar la supresión de sus datos escribiendo a{' '}
          <strong>contacto@teclegal.co</strong>. No cedemos ni comercializamos información personal.
        </p>
        <form method="dialog">
          <button type="submit" className="btn-ink btn-sm">Entendido</button>
        </form>
      </dialog>
    </div>
  )
}

export default App
