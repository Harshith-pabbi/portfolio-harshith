import { useScrollReveal } from '../hooks/useScrollReveal'
import { personal } from '../data/portfolio'

const CONTACT_LINKS = [
  {
    label: personal.email,
    href:  `mailto:${personal.email}`,
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width:15, height:15, strokeWidth:1.8 }}>
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
      </svg>
    ),
  },
  {
    label: personal.phone,
    href:  `tel:${personal.phone}`,
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width:15, height:15, strokeWidth:1.8 }}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 10.8 19.79 19.79 0 0 1 .22 2.22 2 2 0 0 1 2.19 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L6.91 7.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 14.92v2z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href:  personal.github,
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width:15, height:15, strokeWidth:1.8 }}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href:  personal.linkedin,
    icon:  (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ width:15, height:15, strokeWidth:1.8 }}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const [titleRef, titleInView]  = useScrollReveal()
  const [linksRef, linksInView]  = useScrollReveal()

  return (
    <section id="contact" style={{ textAlign:'center' }}>
      <div className="container" style={{ maxWidth:700 }}>

        {/* Eyebrow */}
        <div className={`eyebrow reveal ${titleInView ? 'visible' : ''}`} style={{ justifyContent:'center' }}>
          <span className="eyebrow-text">05 — contact</span>
        </div>

        {/* Title */}
        <h2
          ref={titleRef}
          className={`reveal ${titleInView ? 'visible' : ''}`}
          style={{
            fontFamily:'var(--font-display)', fontWeight:800,
            fontSize:'clamp(48px,8vw,90px)',
            letterSpacing:-4, lineHeight:.95,
            color:'var(--text0)', margin:'16px 0 20px',
          }}
        >
          Let&apos;s <span className="gradient-text">Build<br/>Something.</span>
        </h2>

        <p className={`section-sub reveal ${titleInView ? 'visible' : ''}`} style={{ margin:'0 auto 4px', textAlign:'center', maxWidth:440 }}>
          Open to full-time roles, freelance work, and impactful collaborations. I respond within 24 hours.
        </p>

        {/* Email CTA */}
        <a
          href={`mailto:${personal.email}`}
          data-hover
          className={`reveal ${titleInView ? 'visible' : ''}`}
          style={{
            display:'block',
            fontFamily:'var(--font-display)', fontWeight:700,
            fontSize:'clamp(16px,2.2vw,24px)',
            color:'var(--text1)', margin:'28px auto',
            transition:'color .2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text1)'}
        >
          {personal.email}
        </a>

        {/* Contact links */}
        <div
          ref={linksRef}
          className={linksInView ? 'stagger-visible' : ''}
          style={{ display:'flex', justifyContent:'center', flexWrap:'wrap', gap:10, marginTop:36 }}
        >
          {CONTACT_LINKS.map((link, i) => (
            <a
              key={i}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              data-hover
              className="stagger-child"
              style={{
                display:'inline-flex', alignItems:'center', gap:9,
                background:'var(--bg2)', border:'1px solid var(--border1)',
                borderRadius:'var(--radius-md)', padding:'12px 20px',
                fontFamily:'var(--font-mono)', fontSize:12, color:'var(--text2)',
                transition:'all var(--transition)', textDecoration:'none',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(0,229,255,.3)'
                e.currentTarget.style.color       = 'var(--cyan)'
                e.currentTarget.style.transform   = 'translateY(-3px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border1)'
                e.currentTarget.style.color       = 'var(--text2)'
                e.currentTarget.style.transform   = 'translateY(0)'
              }}
            >
              {link.icon}
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{
        textAlign:'center', padding:'28px 64px',
        borderTop:'1px solid var(--border0)',
        fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text4)',
        position:'relative', zIndex:2, marginTop:80,
      }}>
        <span style={{ color:'rgba(255,255,255,.2)' }}>Designed &amp; built by</span>{' '}
        Harshith PSKY{' '}
        <span style={{ color:'rgba(255,255,255,.2)' }}>·</span>{' '}
        Hyderabad, India{' '}
        <span style={{ color:'rgba(255,255,255,.2)' }}>·</span>{' '}
        <span style={{ color:'rgba(0,229,255,.4)' }}>2025</span>
        <div style={{ marginTop:5, fontSize:10, color:'var(--text4)' }}>
          React.js · Next.js · Tailwind CSS · Framer Motion · Vercel · Node.js
        </div>
      </footer>
    </section>
  )
}
