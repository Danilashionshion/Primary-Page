import { useEffect, useRef } from 'react'
import './Testimonials.css'

interface Testimonial {
  quote: string; name: string; role: string; company: string
  initials: string; color: string; result: string
}

const TESTI: Testimonial[] = [
  {
    quote: "Primary Solutions transformed how our 3,200-person HR team works. What used to take three days of email chains is now a single Power Apps workflow completed in minutes. The adoption was remarkable.",
    name: 'Sarah Chen',    role: 'Chief People Officer', company: 'Meridian Corp',
    initials: 'SC', color: '#742774', result: '87% time reduction',
  },
  {
    quote: "We had nine different reporting tools before Power BI. Primary Solutions unified everything into one executive dashboard. Our CFO now reviews real-time P&L every morning — not a 3-day-old spreadsheet.",
    name: 'Marcus Rodrigues', role: 'CFO', company: 'TechFlow Industrial',
    initials: 'MR', color: '#0078d4', result: '60 hours saved monthly',
  },
  {
    quote: "The Copilot Studio implementation Primary Solutions delivered handles over 70% of our customer queries automatically. Our support team now focuses on complex cases that truly need human judgment.",
    name: 'Emma Lindqvist', role: 'VP Customer Experience', company: 'Nexus Retail Group',
    initials: 'EL', color: '#066600', result: '74% deflection rate',
  },
]

export default function Testimonials() {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="testimonials" className="section testi-section" ref={ref}>
      <div className="container">
        <div className="testi-section__head reveal">
          <span className="eyebrow">Client Stories</span>
          <h2 className="section-title">Hear it from those who use it every day</h2>
          <p className="section-sub">
            Our clients measure success in hours saved, processes automated,
            and business outcomes — not just delivery speed.
          </p>
        </div>
        <div className="testi-grid">
          {TESTI.map((t, i) => (
            <blockquote
              key={t.name}
              className="testi-card reveal"
              style={{ transitionDelay: String(i * 100) + 'ms' }}
            >
              {/* Stars */}
              <div className="testi-card__stars" aria-label="5 out of 5 stars">
                {[1,2,3,4,5].map(n => <span key={n} aria-hidden="true">★</span>)}
              </div>

              {/* Quote */}
              <p className="testi-card__quote">&ldquo;{t.quote}&rdquo;</p>

              {/* Result chip */}
              <div
                className="testi-card__result"
                style={{ background: t.color + '12', color: t.color }}
              >
                &#10003; {t.result}
              </div>

              {/* Author */}
              <footer className="testi-card__author">
                <div
                  className="testi-card__avatar"
                  style={{ background: t.color + '18', color: t.color }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <cite className="testi-card__name">{t.name}</cite>
                  <p className="testi-card__role">{t.role}, {t.company}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}