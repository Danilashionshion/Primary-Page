import './Services.css'

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
        <article className="svc-card">

          <h3 className="svc-card__title">
            Power Apps
          </h3>

          <p className="svc-card__desc">
            Build enterprise applications fast with Microsoft Power Platform.
          </p>

          <a href="#" className="svc-card__cta">
            Learn more →
          </a>
        </article>

        <article className="svc-card">

          <h3 className="svc-card__title">
            Power BI
          </h3>

          <p className="svc-card__desc">
            Create dashboards and real-time analytics for smarter decisions.
          </p>

          <a href="#" className="svc-card__cta">
            Learn more →
          </a>
        </article>

        {/* FULL WIDTH */}
        <article className="svc-card svc-card--full">


          <h3 className="svc-card__title">
            Copilot AI
          </h3>

          <p className="svc-card__desc">
            Integrate AI directly into your workflows and automate tasks.
          </p>

          <a href="#" className="svc-card__cta">
            Learn more →
          </a>
        </article>

        <article className="svc-card svc-card--full">

          <h3 className="svc-card__title">
            Process Automation
          </h3>

          <p className="svc-card__desc">
            Automate repetitive operations and improve business efficiency.
          </p>

          <a href="#" className="svc-card__cta">
            Learn more →
          </a>
        </article>

        <article className="svc-card svc-card--full">

          <h3 className="svc-card__title">
            Cloud Solutions
          </h3>

          <p className="svc-card__desc">
            Scalable cloud infrastructure for modern enterprise environments.
          </p>

          <a href="#" className="svc-card__cta">
            Learn more →
          </a>
        </article>

      </div>
    </section>
  )
}