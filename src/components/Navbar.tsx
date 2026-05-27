import { useState, useEffect } from 'react'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Solutions',    href: '#services' },
  { label: 'Case Studies', href: '#projects' },
  { label: 'Platform',     href: '#about'    },
  { label: 'Partners',     href: '#testimonials' },
  { label: 'Contact',      href: '#contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav
        className={'apnav' + (scrolled ? ' apnav--blur' : '') + (menuOpen ? ' apnav--open' : '')}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="apnav__inner">

          {/* Logo */}

          <ul className="apnav__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label}>
                <a href={href} className="apnav__link">{label}</a>
              </li>
            ))}
          </ul>

          {/* Right: CTA + burger */}
          <div className="apnav__end">
            <a href="#contact" className="btn btn-primary btn-sm apnav__cta">
              Get a Demo
            </a>
            <button
              className={'apnav__burger' + (menuOpen ? ' apnav__burger--x' : '')}
              onClick={() => setMenuOpen(v => !v)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
            >
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
              <span aria-hidden="true"/>
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-nav"
        className={'apnav__drawer' + (menuOpen ? ' apnav__drawer--open' : '')}
        aria-hidden={!menuOpen}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <ul role="list">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="apnav__drawer-link"
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="btn btn-primary"
          style={{ marginTop: '12px', width: '100%', justifyContent: 'center' }}
          onClick={() => setMenuOpen(false)}
        >
          Get a Demo
        </a>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div
          className="apnav__backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}