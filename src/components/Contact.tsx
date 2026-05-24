import { useState, useRef, useEffect, type FormEvent, type ChangeEvent } from 'react'
import './Contact.css'

interface FormState { name: string; email: string; company: string; topic: string; message: string }
const INIT: FormState = { name: '', email: '', company: '', topic: '', message: '' }

const INFO = [
  { icon: '📧', label: 'Email',    value: 'hello@primarysolutions.io' },
  { icon: '📞', label: 'Phone',    value: '+1 (555) 123-4567'         },
  { icon: '📍', label: 'Location', value: 'San Francisco, CA & Remote' },
  { icon: '🕐', label: 'Response', value: 'Within 24 business hours'   },
]

export default function Contact() {
  const [form, setForm] = useState<FormState>(INIT)
  const [status, setStatus] = useState<'idle'|'sending'|'sent'>('idle')
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('in-view')),
      { threshold: 0.08 }
    )
    ref.current?.querySelectorAll('.reveal').forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  const onChange = (e: ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(r => setTimeout(r, 1500))
    setStatus('sent')
    setForm(INIT)
  }

  return (
    <section id="contact" className="section contact-section" ref={ref}>
      <div className="container">
        <div className="contact-grid">

          {/* Info */}
          <div className="contact-info reveal">
            <span className="eyebrow">Start a Conversation</span>
            <h2 className="section-title">
              Ready to transform<br/>your business?
            </h2>
            <p className="section-sub" style={{ marginBottom: '40px' }}>
              Book a free 45-minute discovery call. We will map your current processes,
              identify the highest-value Power Platform opportunities,
              and outline a delivery plan — at no cost.
            </p>

            <div className="contact-info__details">
              {INFO.map(({ icon, label, value }) => (
                <div key={label} className="contact-info__row">
                  <div className="contact-info__icon" aria-hidden="true">{icon}</div>
                  <div>
                    <p className="contact-info__lbl">{label}</p>
                    <p className="contact-info__val">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust logos / certification badge */}
            <div className="contact-info__cert">
              <div className="contact-info__cert-badge">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M10 1l2.39 7.26H20l-6.18 4.47 2.36 7.26L10 15.5l-6.18 4.49 2.36-7.26L0 8.26h7.61L10 1z" fill="#0078d4"/>
                </svg>
                Microsoft Solutions Partner
              </div>
              <p className="contact-info__cert-note">Power Platform Specialization</p>
            </div>
          </div>

          {/* Form */}
          <div className="contact-form-wrap reveal" style={{ transitionDelay: '140ms' }}>
            {status === 'sent' ? (
              <div className="contact-success">
                <span aria-hidden="true" className="contact-success__icon">&#9989;</span>
                <h3>You are all set!</h3>
                <p>
                  We have received your message and will be in touch
                  within one business day to schedule your discovery call.
                </p>
                <button className="btn btn-primary" onClick={() => setStatus('idle')}>
                  Send another message
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={onSubmit} noValidate>
                <div className="contact-form__row">
                  <label className="contact-form__field">
                    <span>Full Name</span>
                    <input name="name" type="text" value={form.name} onChange={onChange}
                      placeholder="Alex Johnson" required autoComplete="name"/>
                  </label>
                  <label className="contact-form__field">
                    <span>Work Email</span>
                    <input name="email" type="email" value={form.email} onChange={onChange}
                      placeholder="alex@company.com" required autoComplete="email"/>
                  </label>
                </div>

                <label className="contact-form__field">
                  <span>Company Name</span>
                  <input name="company" type="text" value={form.company} onChange={onChange}
                    placeholder="Your organization" autoComplete="organization"/>
                </label>

                <label className="contact-form__field">
                  <span>I am interested in</span>
                  <select name="topic" value={form.topic} onChange={onChange} required>
                    <option value="" disabled>Select a solution area</option>
                    <option value="apps">Power Apps — Custom Applications</option>
                    <option value="automate">Power Automate — Workflow Automation</option>
                    <option value="bi">Power BI — Analytics & Dashboards</option>
                    <option value="pages">Power Pages — Web Portals</option>
                    <option value="copilot">Copilot Studio — AI Assistants</option>
                    <option value="dataverse">Dataverse & Integration</option>
                    <option value="strategy">Full Platform Strategy</option>
                  </select>
                </label>

                <label className="contact-form__field">
                  <span>Tell us about your challenge</span>
                  <textarea name="message" value={form.message} onChange={onChange}
                    placeholder="Describe the process, pain-point, or goal you want to tackle..."
                    rows={4} required/>
                </label>

                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  {status === 'sending'
                    ? <><span className="contact-spinner" aria-hidden="true"/> Sending</>
                    : 'Book My Free Discovery Call'}
                </button>

                <p className="contact-form__note">
                  No commitment required. No sales pitch. Just a conversation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}