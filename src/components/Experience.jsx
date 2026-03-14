import { useScrollReveal } from '../hooks/useScrollReveal'
import { experience, education } from '../data/portfolio'

export default function Experience() {
  const [eyeRef, eyeInView]   = useScrollReveal()
  const [expRef, expInView]   = useScrollReveal()
  const [eduRef, eduInView]   = useScrollReveal()

  return (
    <section id="experience" style={{ background:'rgba(8,8,18,.55)' }}>
      <div className="container">

        {/* Eyebrow */}
        <div ref={eyeRef} className={`eyebrow reveal ${eyeInView ? 'visible' : ''}`}>
          <span className="eyebrow-text">04 — experience &amp; education</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className={`section-title reveal ${eyeInView ? 'visible' : ''}`}>
          Background &amp; <span className="gradient-text">Study</span>
        </h2>

        {/* Two-column grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:56, marginTop:56 }}>

          {/* ── Experience ── */}
          <div>
            <h3 className={`reveal ${eyeInView ? 'visible' : ''}`} style={{
              fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
              color:'var(--text0)', marginBottom:28, letterSpacing:'-.5px',
            }}>
              Work Experience
            </h3>
            <div
              ref={expRef}
              className={`reveal ${expInView ? 'visible' : ''}`}
              style={{ position:'relative', paddingLeft:28 }}
            >
              {/* Timeline line */}
              <div style={{
                position:'absolute', left:6, top:6, bottom:0,
                width:1, background:'linear-gradient(to bottom,rgba(0,229,255,.35),transparent)',
              }} />

              {experience.map((job, i) => (
                <div key={i} style={{ position:'relative' }}>
                  {/* Timeline dot */}
                  <div style={{
                    position:'absolute', left:-22, top:5,
                    width:14, height:14, borderRadius:'50%',
                    background:'var(--bg0)', border:'2px solid var(--cyan)',
                    boxShadow:'0 0 12px rgba(0,229,255,.45)',
                  }} />

                  <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--cyan)', letterSpacing:'.14em', marginBottom:10 }}>
                    {job.year}
                  </div>
                  <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:20, color:'var(--text0)', marginBottom:3 }}>
                    {job.company}
                  </div>
                  <div style={{ fontSize:13, color:'var(--text3)', fontStyle:'italic', marginBottom:18 }}>
                    {job.role}
                  </div>
                  <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                    {job.points.map((pt, j) => (
                      <div key={j} style={{ display:'flex', gap:10, fontSize:13, color:'var(--text2)', lineHeight:1.7 }}>
                        <span style={{ color:'rgba(0,229,255,.5)', flexShrink:0, fontSize:10, marginTop:4 }}>▸</span>
                        {pt}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Education ── */}
          <div>
            <h3 className={`reveal ${eyeInView ? 'visible' : ''}`} style={{
              fontFamily:'var(--font-display)', fontSize:18, fontWeight:700,
              color:'var(--text0)', marginBottom:28, letterSpacing:'-.5px',
            }}>
              Education
            </h3>
            <div
              ref={eduRef}
              className={`reveal ${eduInView ? 'visible' : ''}`}
              style={{
                background:'var(--bg2)', border:'1px solid var(--border0)',
                borderRadius:'var(--radius-lg)', padding:28,
                transition:'border-color var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(0,229,255,.18)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border0)'}
            >
              <div style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text4)', letterSpacing:'.14em', marginBottom:16 }}>
                {education.period}
              </div>
              <div style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:17, color:'var(--text0)', marginBottom:6, lineHeight:1.3 }}>
                {education.degree}
              </div>
              <div style={{ fontSize:13, color:'var(--text3)', marginBottom:20 }}>
                {education.school}
              </div>

              {/* Awards */}
              <div style={{ display:'flex', flexDirection:'column', gap:10 }}>
                {education.awards.map((award, i) => (
                  <div key={i} style={{
                    display:'flex', gap:12, alignItems:'flex-start',
                    background:'rgba(163,230,53,.05)',
                    border:'1px solid rgba(163,230,53,.15)',
                    borderRadius:'var(--radius-sm)', padding:14,
                  }}>
                    <div style={{ fontSize:18, flexShrink:0, lineHeight:1 }}>{award.icon}</div>
                    <div>
                      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:12, color:'var(--lime)', marginBottom:3 }}>
                        {award.title}
                      </div>
                      <div style={{ fontSize:11, color:'var(--text3)', lineHeight:1.6 }}>
                        {award.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
