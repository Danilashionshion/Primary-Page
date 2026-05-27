import './Services.css'

/* ── Icons ──────────────────────────────────────────────── */

const PowerAppsIcon = () => (
  <svg className="svc-icon" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Browser frame */}
    <rect x="6" y="14" width="98" height="82" rx="11" fill="rgba(255,255,255,0.18)" stroke="rgba(255,255,255,0.75)" strokeWidth="3"/>
    {/* Top bar */}
    <rect x="6" y="14" width="98" height="24" rx="11" fill="rgba(255,255,255,0.45)"/>
    <rect x="6" y="26" width="98" height="12" fill="rgba(255,255,255,0.45)"/>
    {/* Traffic lights */}
    <circle cx="22" cy="26" r="5.5" fill="rgba(255,100,100,0.85)"/>
    <circle cx="38" cy="26" r="5.5" fill="rgba(255,210,50,0.85)"/>
    <circle cx="54" cy="26" r="5.5" fill="rgba(100,230,100,0.85)"/>
    {/* URL bar */}
    <rect x="66" y="20" width="30" height="12" rx="6" fill="rgba(255,255,255,0.3)"/>
    {/* Content rows */}
    <rect x="16" y="52" width="78" height="8" rx="4" fill="rgba(255,255,255,0.65)"/>
    <rect x="16" y="68" width="58" height="8" rx="4" fill="rgba(255,255,255,0.5)"/>
    <rect x="16" y="84" width="40" height="8" rx="4" fill="rgba(255,255,255,0.38)"/>
  </svg>
)

const PowerBIIcon = () => (
  <svg className="svc-icon" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Bars */}
    <rect x="6"  y="68" width="20" height="30" rx="5" fill="rgba(180,120,0,0.6)"/>
    <rect x="32" y="48" width="20" height="50" rx="5" fill="rgba(180,120,0,0.75)"/>
    <rect x="58" y="24" width="20" height="74" rx="5" fill="rgba(120,80,0,0.9)"/>
    <rect x="84" y="52" width="20" height="46" rx="5" fill="rgba(180,120,0,0.7)"/>
    {/* Baseline */}
    <rect x="2" y="100" width="106" height="5" rx="2.5" fill="rgba(120,80,0,0.55)"/>
    {/* Trend line */}
    <polyline points="16,78 42,60 68,38 94,64"
      fill="none" stroke="rgba(255,240,50,0.95)" strokeWidth="3.5"
      strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="16" cy="78" r="5" fill="rgba(255,240,50,0.95)"/>
    <circle cx="42" cy="60" r="5" fill="rgba(255,240,50,0.95)"/>
    <circle cx="68" cy="38" r="5" fill="rgba(255,240,50,0.95)"/>
    <circle cx="94" cy="64" r="5" fill="rgba(255,240,50,0.95)"/>
  </svg>
)

const CopilotIcon = () => (
  <svg className="svc-icon" width="110" height="110" viewBox="0 0 110 110" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Antenna */}
    <line x1="55" y1="24" x2="55" y2="8"  stroke="rgba(255,255,255,0.8)" strokeWidth="3.5" strokeLinecap="round"/>
    <circle cx="55" cy="5" r="5.5" fill="rgba(255,255,255,0.9)"/>
    {/* Head */}
    <rect x="14" y="24" width="82" height="66" rx="16" fill="rgba(255,255,255,0.22)" stroke="rgba(255,255,255,0.78)" strokeWidth="3"/>
    {/* Side ears */}
    <rect x="5"  y="40" width="11" height="22" rx="5.5" fill="rgba(255,255,255,0.52)"/>
    <rect x="94" y="40" width="11" height="22" rx="5.5" fill="rgba(255,255,255,0.52)"/>
    {/* Eye sockets */}
    <rect x="24" y="38" width="22" height="22" rx="6" fill="rgba(255,255,255,0.9)"/>
    <rect x="64" y="38" width="22" height="22" rx="6" fill="rgba(255,255,255,0.9)"/>
    {/* Pupils */}
    <circle cx="35" cy="49" r="6.5" fill="rgba(0,70,200,0.88)"/>
    <circle cx="75" cy="49" r="6.5" fill="rgba(0,70,200,0.88)"/>
    {/* Pupil shine */}
    <circle cx="38" cy="46" r="2.5" fill="rgba(255,255,255,0.7)"/>
    <circle cx="78" cy="46" r="2.5" fill="rgba(255,255,255,0.7)"/>
    {/* Mouth */}
    <rect x="30" y="72" width="50" height="9" rx="4.5" fill="rgba(255,255,255,0.72)"/>
  </svg>
)

const AutomateIcon = () => (
  <svg className="svc-icon" width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Node boxes */}
    <rect x="4"  y="30" width="28" height="28" rx="7" fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.8)"  strokeWidth="2.5"/>
    <rect x="46" y="30" width="28" height="28" rx="7" fill="rgba(255,255,255,0.42)" stroke="rgba(255,255,255,0.8)"  strokeWidth="2.5"/>
    <rect x="88" y="30" width="28" height="28" rx="7" fill="rgba(255,255,255,0.58)" stroke="rgba(255,255,255,0.8)"  strokeWidth="2.5"/>
    {/* Connector arrows */}
    <line x1="32" y1="44" x2="43" y2="44" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <polygon points="41,39 50,44 41,49" fill="rgba(255,255,255,0.85)"/>
    <line x1="74" y1="44" x2="85" y2="44" stroke="rgba(255,255,255,0.85)" strokeWidth="2.5" strokeLinecap="round"/>
    <polygon points="83,39 92,44 83,49" fill="rgba(255,255,255,0.85)"/>
    {/* Lightning bolt in box 1 */}
    <path d="M23 33 L16 46 L20 46 L14 58 L22 45 L18 45 Z" fill="rgba(255,255,255,0.92)"/>
    {/* Gear in box 2 */}
    <circle cx="60" cy="44" r="7" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="2.5"/>
    <circle cx="60" cy="44" r="3" fill="rgba(255,255,255,0.92)"/>
    <rect x="58.5" y="33" width="3" height="5"  rx="1.5" fill="rgba(255,255,255,0.92)"/>
    <rect x="58.5" y="50" width="3" height="5"  rx="1.5" fill="rgba(255,255,255,0.92)"/>
    <rect x="47"  y="42.5" width="5" height="3" rx="1.5" fill="rgba(255,255,255,0.92)"/>
    <rect x="66"  y="42.5" width="5" height="3" rx="1.5" fill="rgba(255,255,255,0.92)"/>
    {/* Checkmark in box 3 */}
    <polyline points="94,44 99,50 112,34" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    {/* Return arc */}
    <path d="M18 58 Q18 78 60 78 Q102 78 102 58" fill="none" stroke="rgba(255,255,255,0.38)" strokeWidth="2.2" strokeDasharray="6 5"/>
    <polygon points="56,75 60,82 64,75" fill="rgba(255,255,255,0.42)"/>
  </svg>
)

const CloudIcon = () => (
  <svg className="svc-icon" width="120" height="90" viewBox="0 0 120 90" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Cloud body */}
    <path d="M94 72H30C14 72 4 61 4 48C4 36 14 27 27 26C27 13 39 4 54 4C67 4 78 13 82 25C83 25 84 25 85 25C100 25 116 37 116 52C116 63 106 72 94 72Z"
      fill="rgba(255,255,255,0.28)" stroke="rgba(255,255,255,0.85)" strokeWidth="3"/>
    {/* Highlight arc */}
    <path d="M32 42 Q35 32 48 30 Q52 26 60 28" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Download arrow */}
    <line x1="60" y1="48" x2="60" y2="82" stroke="rgba(255,255,255,0.92)" strokeWidth="4" strokeLinecap="round"/>
    <polyline points="46,70 60,84 74,70" fill="none" stroke="rgba(255,255,255,0.92)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

/* ── Component ──────────────────────────────────────────── */

export default function Services() {
  return (
    <section className="svc-section">
      <div className="svc-section__head">
        <span className="section-sub">
          Services
        </span>

        <h2>
          Digital solutions for
          modern companies.
        </h2>
      </div>

      <div className="svc-grid">

        {/* TOP ROW */}
        <article className="svc-card" style={{backgroundImage: 'linear-gradient(to bottom, #6947b8, #8564c9, #cbc3dd)'}}>
          <h3 className="svc-card__title">Power Apps</h3>
          <p className="svc-card__desc">
            Build enterprise applications fast with Microsoft Power Platform.
          </p>
          <div className="svc-card__icon">
            <PowerAppsIcon />
          </div>
          <a href="#" className="svc-card__cta">Learn more &rarr;</a>
        </article>

        <article className="svc-card" style={{backgroundImage: 'linear-gradient(to bottom, #c8900a, #e8aa10, #f5d060)'}}>
          <h3 className="svc-card__title">Power BI</h3>
          <p className="svc-card__desc">
            Create dashboards and real-time analytics for smarter decisions.
          </p>
          <div className="svc-card__icon">
            <PowerBIIcon />
          </div>
          <a href="#" className="svc-card__cta">Learn more &rarr;</a>
        </article>

        {/* FULL WIDTH */}
        <article className="svc-card svc-card--full" style={{backgroundImage: 'linear-gradient(to bottom, #0066ff, #89baf5, #aad2ff)'}}>
          <h3 className="svc-card__title">Copilot AI</h3>
          <p className="svc-card__desc">
            Integrate AI directly into your workflows and automate tasks.
          </p>
          <div className="svc-card__icon">
            <CopilotIcon />
          </div>
          <a href="#" className="svc-card__cta">Learn more &rarr;</a>
        </article>

        <article className="svc-card svc-card--full" style={{backgroundImage: 'linear-gradient(to bottom, #3700ff, #8990f5, #bcdbfd)'}}>
          <h3 className="svc-card__title">Process Automation</h3>
          <p className="svc-card__desc">
            Automate repetitive operations and improve business efficiency.
          </p>
          <div className="svc-card__icon">
            <AutomateIcon />
          </div>
          <a href="#" className="svc-card__cta">Learn more &rarr;</a>
        </article>

        <article className="svc-card svc-card--full" style={{backgroundImage: 'linear-gradient(to bottom, #00a86b, #a0dac4, #b0d0f3)'}}>
          <h3 className="svc-card__title">Cloud Solutions</h3>
          <p className="svc-card__desc">
            Scalable cloud infrastructure for modern enterprise environments.
          </p>
          <div className="svc-card__icon">
            <CloudIcon />
          </div>
          <a href="#" className="svc-card__cta">Learn more &rarr;</a>
        </article>

      </div>
    </section>
  )
}
