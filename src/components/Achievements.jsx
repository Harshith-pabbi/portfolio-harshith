import { useScrollReveal } from '../hooks/useScrollReveal'
import { achievements } from '../data/portfolio'

export default function Achievements() {
  const [eyeRef,   eyeInView]   = useScrollReveal()
  const [gridRef,  gridInView]  = useScrollReveal()

  return (
    <section id="achievements">
      <div className="container">

        <div ref={eyeRef} className={`eyebrow reveal ${eyeInView ? 'visible' : ''}`}>
          <span className="eyebrow-text">recognition</span>
          <div className="eyebrow-line" />
        </div>
        <h2 className={`section-title reveal ${eyeInView ? 'visible' : ''}`}>
          Awards &amp; <span className="gradient-text">Achievements</span>
        </h2>

        <div
          ref={gridRef}
          className={gridInView ? 'stagger-visible' : ''}
          style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:12, marginTop:56 }}
        >
          {achievements.map((item, i) => (
            <AchievementCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

function AchievementCard({ item }) {
  return (
    <div
      className="stagger-child"
      style={{
        background:'var(--bg2)', border:'1px solid var(--border0)',
        borderRadius:'var(--radius-lg)', padding:24,
        position:'relative', overflow:'hidden',
        transition:'border-color var(--transition), transform var(--transition)',
        cursor:'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = 'rgba(0,229,255,.2)'
        e.currentTarget.style.transform   = 'translateY(-5px)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'var(--border0)'
        e.currentTarget.style.transform   = 'translateY(0)'
      }}
    >
      {/* Top accent line */}
      <div style={{
        position:'absolute', top:0, left:0, right:0, height:1,
        background:'linear-gradient(90deg,var(--cyan),transparent)',
      }} />

      <div style={{ fontSize:28, marginBottom:14, lineHeight:1 }}>{item.icon}</div>
      <div style={{ fontFamily:'var(--font-display)', fontWeight:700, fontSize:13, color:'var(--text0)', marginBottom:8, lineHeight:1.4 }}>
        {item.title}
      </div>
      <div style={{ fontSize:12, color:'var(--text3)', lineHeight:1.65, marginBottom:14 }}>
        {item.desc}
      </div>
      <div style={{ fontFamily:'var(--font-mono)', fontSize:10, color:'rgba(0,229,255,.5)', letterSpacing:'.12em' }}>
        {item.year}
      </div>
    </div>
  )
}
