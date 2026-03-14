import { useScrollReveal } from '../hooks/useScrollReveal'
import { useTypewriter }   from '../hooks/useTypewriter'
import { personal, typedRoles, heroDesc, stats } from '../data/portfolio'

export default function Hero() {
  const [statsRef, statsInView] = useScrollReveal({ threshold: 0.3 })

  const typed = useTypewriter(typedRoles)

  return (
    <section id="hero" style={{ minHeight:'100vh', display:'flex', alignItems:'center', padding:0, paddingTop:80 }}>
      <div className="container" style={{ width:'100%' }}>

        {/* Available badge */}
        <div className="hero-badge" style={{
          display:'inline-flex', alignItems:'center', gap:10,
          background:'rgba(0,229,255,.05)', border:'1px solid rgba(0,229,255,.18)',
          borderRadius:100, padding:'6px 16px', marginBottom:36,
        }}>
          <div className="animate-blink" style={{ width:7, height:7, background:'var(--cyan)', borderRadius:'50%' }} />
          <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--cyan)', letterSpacing:'.18em' }}>
            OPEN TO OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 style={{
          fontFamily:'var(--font-display)', fontWeight:800,
          fontSize:'clamp(56px,10vw,118px)',
          letterSpacing:-5, lineHeight:.95, color:'var(--text0)', marginBottom:4,
        }}>
          HARSHITH
          <span style={{ display:'block', color:'transparent', WebkitTextStroke:'1.5px rgba(255,255,255,.16)' }}>
            PABBISETTI
          </span>
        </h1>

        {/* Typewriter role */}
        <div style={{
          display:'flex', alignItems:'center', gap:8,
          fontFamily:'var(--font-mono)', fontSize:'clamp(13px,1.6vw,19px)',
          color:'var(--cyan)', margin:'22px 0 18px', minHeight:28,
        }}>
          <span style={{ color:'var(--text4)', fontSize:'0.85em' }}>&gt;</span>
          <span>{typed}</span>
          <span className="animate-blink-cur" style={{
            display:'inline-block', width:2, height:'1.1em',
            background:'var(--cyan)', marginLeft:2, verticalAlign:'middle',
          }} />
        </div>

        {/* Description */}
        <p style={{ fontSize:15, lineHeight:1.85, color:'var(--text2)', maxWidth:520, marginBottom:36 }}>
          BTech graduate in <strong style={{ color:'var(--text1)' }}>AI &amp; ML</strong>. I build production-ready frontends with{' '}
          <strong style={{ color:'var(--cyan)' }}>React, Next.js &amp; Tailwind CSS</strong>
          {' '}— animated with Framer Motion, deployed on Vercel. Also ship deep learning research.
        </p>

        {/* CTA buttons */}
        <div style={{ display:'flex', gap:12, flexWrap:'wrap', marginBottom:56 }}>
          <a href="#projects" className="btn btn-primary" data-hover>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
            View Projects
          </a>
          <a href="#contact" className="btn btn-outline" data-hover>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
            Get in Touch
          </a>
          <a href={personal.resume} className="btn btn-ghost" data-hover>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
            Download Resume
          </a>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className={statsInView ? 'stagger-visible' : ''}
          style={{ display:'flex', gap:48, flexWrap:'wrap', paddingTop:36, borderTop:'1px solid var(--border0)' }}
        >
          {stats.map((s, i) => (
            <div key={i} className="stagger-child">
              <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:38, color:'var(--text0)', letterSpacing:-2, lineHeight:1 }}>
                {s.value}
              </div>
              <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text4)', letterSpacing:'.14em', marginTop:6, textTransform:'uppercase' }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div className="animate-float" style={{
        position:'absolute', bottom:36, left:'50%', transform:'translateX(-50%)',
        display:'flex', flexDirection:'column', alignItems:'center', gap:8,
        fontFamily:'var(--font-mono)', fontSize:10, color:'var(--text4)',
        letterSpacing:'.18em', zIndex:3,
      }}>
        <span>SCROLL</span>
        <div style={{ width:1, height:36, background:'linear-gradient(to bottom,var(--cyan),transparent)' }} />
      </div>
    </section>
  )
}
