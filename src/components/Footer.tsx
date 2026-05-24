import './Footer.css'

const COLS: Record<string, string[]> = {
  Solutions:  ['Power Apps','Power Automate','Power BI','Power Pages','Copilot Studio'],
  Services:   ['Discovery Workshop','Architecture Review','Training & Adoption','Managed Support'],
  Company:    ['About Us','Case Studies','Blog','Careers','Contact'],
}

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <a href="#home" className="footer__logo">
              <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <rect width="28" height="28" rx="8" fill="url(#fg2)"/>
                <path d="M7.5 20V8h6.5c1.55 0 2.75.38 3.6 1.14.85.76 1.27 1.8 1.27 3.1 0 1.32-.43 2.36-1.28 3.12-.85.76-2.05 1.14-3.6 1.14H10.2V20H7.5zm2.7-7.1H14c.88 0 1.53-.2 1.96-.6.43-.4.64-.95.64-1.66 0-.7-.21-1.25-.64-1.65-.43-.4-1.08-.6-1.96-.6h-3.8v4.51z" fill="#fff"/>
                <defs>
                  <linearGradient id="fg2" x1="0" y1="0" x2="28" y2="28" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#0078d4"/>
                    <stop offset="1" stopColor="#742774"/>
                  </linearGradient>
                </defs>
              </svg>
              <span className="footer__logo-text">Primary<strong>Solutions</strong></span>
            </a>
            <p className="footer__tagline">
              Microsoft Power Platform consulting built for enterprises that move fast and demand results.
            </p>
            <div className="footer__ms-badge">
              <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M10 1l2.39 7.26H20l-6.18 4.47 2.36 7.26L10 15.5l-6.18 4.49 2.36-7.26L0 8.26h7.61L10 1z" fill="rgba(255,255,255,0.7)"/>
              </svg>
              Microsoft Solutions Partner
            </div>
          </div>

          <nav className="footer__nav" aria-label="Footer navigation">
            {Object.entries(COLS).map(([cat, items]) => (
              <div key={cat} className="footer__col">
                <h3 className="footer__col-hd">{cat}</h3>
                <ul>
                  {items.map(item => <li key={item}><a href="#">{item}</a></li>)}
                </ul>
              </div>
            ))}
          </nav>
        </div>

        <div className="footer__bottom">
          <p>&copy; {new Date().getFullYear()} Primary Solutions. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  )
}