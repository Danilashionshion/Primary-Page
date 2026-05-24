import { useEffect, useRef } from 'react'
import './Projects.css'

interface Project {
  id: number; title: string; sub: string; desc: string
  tags: string[]; gradient: string; metric: string; metricLbl: string
}

const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Global HR Self-Service Hub',
    sub: 'Power Apps + Power Automate',
    desc: 'Replaced a legacy SAP HR module with a fully custom Power Apps canvas app across 14 countries. Onboarding time dropped from 3 days to 4 hours, with automated approvals via Power Automate.',
    tags: ['Power Apps','Power Automate','SharePoint','Azure AD'],
    gradient: 'linear-gradient(135deg,#742774,#4a1a4a)',
    metric: '87%', metricLbl: 'Faster Onboarding',
  },
  {
    id: 2,
    title: 'Finance Operations Dashboard',
    sub: 'Power BI + Dataverse',
    desc: 'Unified 9 disparate data sources into a single Power BI executive dashboard with real-time P&L, cash flow, and budget variance — eliminating 60+ hours of manual reporting per month.',
    tags: ['Power BI','Dataverse','SQL Server','Azure Synapse'],
    gradient: 'linear-gradient(135deg,#0078d4,#004a8f)',
    metric: '60h', metricLbl: 'Saved Per Month',
  },
  {
    id: 3,
    title: 'Customer Portal & AI Support',
    sub: 'Power Pages + Copilot Studio',
    desc: 'Public-facing customer portal for a manufacturing firm integrated with Copilot Studio AI assistant. Tier-1 support deflection reached 74%, saving the company $380K annually.',
    tags: ['Power Pages','Copilot Studio','Dataverse','Teams'],
    gradient: 'linear-gradient(135deg,#066600,#033300)',
    metric: '74%', metricLbl: 'Support Deflection',
  },
]

export default function Projects() {
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
    <section id="projects" className="section proj-section" ref={ref}>
      <div className="container">
        <div className="proj-section__head reveal">
          <span className="eyebrow">Case Studies</span>
          <h2 className="section-title">Real Power Platform results</h2>
          <p className="section-sub">
            Every engagement starts with understanding your business first.
            Here is what we have delivered for clients just like you.
          </p>
        </div>

        <div className="proj-grid">
          {PROJECTS.map((p, i) => (
            <article
              key={p.id}
              className="proj-card reveal"
              style={{ transitionDelay: String(i * 100) + 'ms' }}
            >
              {/* Visual header with KPI badge */}
              <div className="proj-card__top" style={{ background: p.gradient }}>
                <div className="proj-card__kpi">
                  <div className="proj-card__kpi-val">{p.metric}</div>
                  <div className="proj-card__kpi-lbl">{p.metricLbl}</div>
                </div>
                {/* Abstract UI lines testing */}
                <div className="proj-card__ui" aria-hidden="true">
                  <div className="proj-card__ui-bar proj-card__ui-bar--w80"/>
                  <div className="proj-card__ui-row">
                    <div className="proj-card__ui-block proj-card__ui-block--lg"/>
                    <div className="proj-card__ui-block"/>
                  </div>
                  <div className="proj-card__ui-bar proj-card__ui-bar--w60"/>
                </div>
              </div>

              <div className="proj-card__body">
                <p className="proj-card__sub">{p.sub}</p>
                <h3 className="proj-card__title">{p.title}</h3>
                <p className="proj-card__desc">{p.desc}</p>
                <div className="proj-card__tags">
                  {p.tags.map(t => <span key={t} className="proj-card__tag">{t}</span>)}
                </div>
                <a href="#contact" className="proj-card__link">
                  Read full case study
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                    <path d="M2 6.5h9M7 3l3.5 3.5L7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}