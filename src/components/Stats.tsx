import { useEffect, useRef, useState } from 'react'
import './Stats.css'

interface Stat { value: number; suffix: string; label: string; desc: string }

const STATS: Stat[] = [
  { value: 200,   suffix: '+',  label: 'Automations Built',     desc: 'Across finance, HR & ops'       },
  { value: 50000, suffix: '+',  label: 'Hours Saved Per Year',  desc: 'Returned to your business'      },
  { value: 45,    suffix: '+',  label: 'Enterprise Clients',    desc: 'From 50 to 50,000 employees'    },
  { value: 320,   suffix: '%',  label: 'Average ROI',           desc: 'Measured across all projects'   },
]

function useCountUp(target: number, started: boolean, duration = 1600) {
  const [n, setN] = useState(0)
  useEffect(() => {
    if (!started) return
    let t0: number | null = null
    const tick = (ts: number) => {
      if (!t0) t0 = ts
      const p = Math.min((ts - t0) / duration, 1)
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [target, started, duration])
  return n
}

function StatItem({ s, started, i }: { s: Stat; started: boolean; i: number }) {
  const n = useCountUp(s.value, started)
  const fmt = (v: number) => v >= 1000 ? (v/1000).toFixed(0) + 'k' : String(v)
  return (
    <div className="stat-item" style={{ animationDelay: String(i * 100) + 'ms' }}>
      <div className="stat-item__val">{fmt(n)}{s.suffix}</div>
      <div className="stat-item__lbl">{s.label}</div>
      <div className="stat-item__desc">{s.desc}</div>
    </div>
  )
}

export default function Stats() {
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLElement>(null)
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStarted(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" className="stats-section" ref={ref}>
      <div className="stats-section__glow" aria-hidden="true"/>
      <div className="container">
        <div className="stats-section__head">
          <span className="eyebrow" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Proven Impact
          </span>
          <h2 className="section-title" style={{ color: '#fff' }}>
            Power Platform results that move the needle
          </h2>
        </div>
        <div className="stats-grid">
          {STATS.map((s, i) => (
            <StatItem key={s.label} s={s} started={started} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}