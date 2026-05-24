import './Hero.css'

const BADGES = ['Power Apps','Power Automate','Power BI','Power Pages','Copilot Studio']

export default function Hero() {
  return (
    <section id="home" className="hero">

      {/* Very-subtle background texture */}
      <div className="hero__bg" aria-hidden="true">
        <div className="hero__blob hero__blob--a"/>
        <div className="hero__blob hero__blob--b"/>
      </div>

      <div className="container hero__container">

        {/* ── Left: Copy ── */}
        <div className="hero__copy">

          <div className="hero__kicker">
            <span className="hero__kicker-dot" aria-hidden="true"/>
            Microsoft Solutions Partner
          </div>

          <h1 className="hero__h1">
            Unlock the Full Power of
            <br/>
            <span className="gradient-text">Microsoft Power Platform</span>
          </h1>

          <p className="hero__lead">
            We design, build, and scale Power Platform solutions that automate
            operations, surface real-time insights, and deliver custom apps — 
            without the complexity of traditional development.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary btn-lg">
              Book a Free Discovery Call
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#projects" className="btn btn-outline btn-lg">See Case Studies</a>
          </div>

          {/* Platform badges */}
          <div className="hero__platforms">
            <p className="hero__platforms-label">Our platform expertise</p>
            <div className="hero__platforms-row" role="list">
              {BADGES.map(b => (
                <span key={b} className="hero__badge" role="listitem">{b}</span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Right: Visual ── */}
        <div className="hero__visual" aria-hidden="true">

          {/* Main dashboard card */}
          <div className="hero__dash">
            <div className="hero__dash-header">
              <div className="hero__dash-title">Power BI Executive Report</div>
              <div className="hero__dash-dot"/>
            </div>
            <div className="hero__dash-kpis">
              <div className="hero__kpi">
                <div className="hero__kpi-val" style={{ color: '#0078d4' }}>87%</div>
                <div className="hero__kpi-lbl">Automation Rate</div>
              </div>
              <div className="hero__kpi">
                <div className="hero__kpi-val" style={{ color: '#742774' }}>4.2x</div>
                <div className="hero__kpi-lbl">ROI Achieved</div>
              </div>
              <div className="hero__kpi">
                <div className="hero__kpi-val" style={{ color: '#107c10' }}>98%</div>
                <div className="hero__kpi-lbl">User Adoption</div>
              </div>
            </div>
            <div className="hero__chart">
              {[65,80,55,90,70,95,85].map((h,i) => (
                <div
                  key={i}
                  className="hero__bar"
                  style={{
                    height: h + '%',
                    background: i === 5
                      ? 'linear-gradient(180deg,#0078d4,#742774)'
                      : 'rgba(0,120,212,0.18)',
                    animationDelay: String(i * 80) + 'ms',
                  }}
                />
              ))}
            </div>
            <div className="hero__dash-footer">Updated just now  &#xB7;  Live data</div>
          </div>

          {/* Floating notification card */}
          <div className="hero__notif">
            <span className="hero__notif-icon" aria-hidden="true">&#9889;</span>
            <div>
              <div className="hero__notif-title">Flow Triggered</div>
              <div className="hero__notif-sub">Invoice approval automated</div>
            </div>
            <div className="hero__notif-badge">Now</div>
          </div>

          {/* Floating stat card */}
          <div className="hero__stat-card">
            <div className="hero__stat-num">12,400</div>
            <div className="hero__stat-lbl">Hours saved this year</div>
          </div>

        </div>
      </div>

      {/* Scroll cue */}
      <a href="#services" className="hero__scroll" aria-label="Scroll to solutions">
        <div className="hero__scroll-mouse">
          <div className="hero__scroll-wheel"/>
        </div>
      </a>
    </section>
  )
}