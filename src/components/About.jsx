import { useScrollReveal } from '../hooks/useScrollReveal'
import { aboutCards, aboutQuote } from '../data/portfolio'

export default function About() {
  const [titleRef,  titleInView]  = useScrollReveal()
  const [textRef,   textInView]   = useScrollReveal()
  const [cardsRef,  cardsInView]  = useScrollReveal()

  return (
    <section id="about">
      <div className="container">

        {/* Eyebrow */}
        <div ref={titleRef} className={`eyebrow reveal ${titleInView ? 'visible' : ''}`}>
          <span className="eyebrow-text">01 — about me</span>
          <div className="eyebrow-line" />
        </div>

        <h2 className={`section-title reveal ${titleInView ? 'visible' : ''}`}>
          Who <span className="gradient-text">I Am</span>
        </h2>

        {/* Grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:72, alignItems:'start', marginTop:56 }}>

          {/* Text column */}
          <div ref={textRef} className={`reveal-left ${textInView ? 'visible' : ''}`}>
            <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text2)', marginBottom:18 }}>
              I'm <strong style={{ color:'var(--text1)' }}>Pabbisetti S K Harshith</strong>, a 2025 BTech graduate in{' '}
              <strong style={{ color:'var(--cyan)' }}>AI &amp; Machine Learning</strong> from Kalasalingam Academy of Research
              and Education, Virudhunagar — based in <strong style={{ color:'var(--text1)' }}>Hyderabad, Telangana</strong>.
            </p>
            <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text2)', marginBottom:18 }}>
              My primary frontend stack is{' '}
              <strong style={{ color:'var(--cyan)' }}>React.js + Next.js + Tailwind CSS + Framer Motion</strong>,
              shipped and hosted on Vercel with version control via Git/GitHub. I pair this with Python, FastAPI,
              and Firebase on the backend.
            </p>

            {/* Pull quote */}
            <div style={{
              borderLeft:'2px solid rgba(0,229,255,.4)',
              background:'rgba(0,229,255,.03)',
              borderRadius:'0 var(--radius-sm) var(--radius-sm) 0',
              padding:'16px 20px', margin:'24px 0',
              fontFamily:'var(--font-mono)', fontSize:12,
              color:'rgba(0,229,255,.75)', lineHeight:1.7, fontStyle:'italic',
            }}>
              &ldquo;{aboutQuote}&rdquo;
            </div>

            <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text2)' }}>
              I'm open to full-time frontend/full-stack roles, freelance projects, and impactful collaborations
              — remote, hybrid, or on-site across India.
            </p>
          </div>

          {/* Cards column */}
          <div
            ref={cardsRef}
            className={cardsInView ? 'stagger-visible' : ''}
            style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}
          >
            {aboutCards.map((card, i) => (
              <div
                key={i}
                className="stagger-child"
                style={{
                  background:'var(--bg2)', border:'1px solid var(--border0)',
                  borderRadius:'var(--radius-md)', padding:20,
                  transition:'border-color var(--transition), transform var(--transition)',
                  cursor:'default',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,229,255,.22)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border0)';       e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize:22, marginBottom:10 }}>{card.icon}</div>
                <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, color:'var(--text0)', marginBottom:5 }}>
                  {card.title}
                </div>
                <div style={{ fontSize:11, color:'var(--text3)', lineHeight:1.65 }}>{card.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
