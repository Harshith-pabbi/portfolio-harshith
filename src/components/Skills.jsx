import { useScrollReveal, useSkillBars } from '../hooks/useScrollReveal'
import { skillCategories, stackBanner } from '../data/portfolio'
import { barGradient } from '../utils/cn'

const ACCENT = {
  cyan:   'var(--cyan)',
  lime:   'var(--lime)',
  violet: 'var(--violet)',
  amber:  'var(--amber)',
}

const BANNER_TAG = {
  cyan:   'tag-cyan',
  lime:   'tag-lime',
  violet: 'tag-violet',
  amber:  'tag-amber',
}

function SkillCard({ category }) {
  const [ref, inView] = useSkillBars()
  const color         = ACCENT[category.color]

  return (
    <div
      ref={ref}
      style={{
        background:'var(--bg2)', border:'1px solid var(--border0)',
        borderRadius:'var(--radius-lg)', padding:'28px 28px 24px',
        transition:'border-color var(--transition)',
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--border1)'}
      onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border0)'}
    >
      {/* Category title */}
      <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:22 }}>
        <div style={{
          width:7, height:7, borderRadius:'50%',
          background:color, boxShadow:`0 0 8px ${color}`,
          flexShrink:0,
        }} />
        <span style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, color:'var(--text1)', letterSpacing:'.02em' }}>
          {category.title}
        </span>
      </div>

      {/* Skill bars */}
      <div style={{ display:'flex', flexDirection:'column', gap:14 }}>
        {category.skills.map((skill, i) => (
          <div key={i}>
            <div style={{ display:'flex', justifyContent:'space-between', marginBottom:6 }}>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color:'var(--text3)' }}>
                {skill.name}
              </span>
              <span style={{ fontFamily:'var(--font-mono)', fontSize:11, color }}>
                {skill.pct}%
              </span>
            </div>
            <div style={{ height:3, background:'rgba(255,255,255,.05)', borderRadius:2, overflow:'hidden' }}>
              <div
                className="skill-fill"
                style={{
                  background: barGradient[category.color],
                  width: inView ? `${skill.pct}%` : '0%',
                  transitionDelay: `${i * 80}ms`,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const [eyeRef, eyeInView]     = useScrollReveal()
  const [bannerRef, bannerInView] = useScrollReveal()

  return (
    <section id="skills" style={{ background:'rgba(8,8,18,.6)' }}>
      <div className="container">

        {/* Eyebrow + title */}
        <div ref={eyeRef} className={`eyebrow reveal ${eyeInView ? 'visible' : ''}`}>
          <span className="eyebrow-text">02 — technical skills</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className={`section-title reveal ${eyeInView ? 'visible' : ''}`}>
          Tech <span className="gradient-text">Stack</span>
        </h2>
        <p className={`section-sub reveal ${eyeInView ? 'visible' : ''}`}>
          Languages, frameworks and tools I use to ship production-grade applications.
        </p>

        {/* Stack banner */}
        <div
          ref={bannerRef}
          className={`reveal stack-banner ${bannerInView ? 'visible' : ''}`}
          style={{
            display:'flex', alignItems:'stretch',
            borderRadius:'var(--radius-md)', overflow:'hidden',
            border:'1px solid var(--border1)', margin:'40px 0 48px',
            flexWrap:'wrap',
          }}
        >
          {stackBanner.map((item, i) => (
            <div
              key={i}
              className={`stack-item ${BANNER_TAG[item.color]}`}
              style={{
                flex:1, padding:'12px 18px',
                fontFamily:'var(--font-mono)', fontSize:12, fontWeight:500,
                borderRight: i < stackBanner.length - 1 ? '1px solid var(--border1)' : 'none',
                display:'flex', alignItems:'center', gap:7,
                transition:'background .2s', minWidth:100,
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(255,255,255,.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
            >
              <div style={{ width:6, height:6, borderRadius:'50%', background:ACCENT[item.color], flexShrink:0 }} />
              {item.label}
            </div>
          ))}
        </div>

        {/* Skill cards grid */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
          {skillCategories.map((cat, i) => (
            <SkillCard key={i} category={cat} />
          ))}
        </div>
      </div>
    </section>
  )
}
