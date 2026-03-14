import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { projects } from '../data/portfolio'
import { tagClass } from '../utils/cn'

const ACCENT_VAR = {
  cyan:   'var(--cyan)',
  lime:   'var(--lime)',
  violet: 'var(--violet)',
  amber:  'var(--amber)',
}

const HOVER_SHADOW = {
  cyan:   '0 0 30px rgba(0,229,255,.06)',
  lime:   '0 0 30px rgba(163,230,53,.04)',
  violet: '0 0 30px rgba(167,139,250,.04)',
  amber:  '0 0 30px rgba(251,191,36,.04)',
}

const HOVER_BORDER = {
  cyan:   'rgba(0,229,255,.3)',
  lime:   'rgba(163,230,53,.22)',
  violet: 'rgba(167,139,250,.22)',
  amber:  'rgba(251,191,36,.18)',
}

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const [ref, inView]         = useScrollReveal()
  const accent                = ACCENT_VAR[project.color]

  return (
    <div
      ref={ref}
      className={`project-card reveal ${inView ? 'visible' : ''}`}
      style={{
        background:   'rgba(13,13,26,.9)',
        border:       `1px solid ${hovered ? HOVER_BORDER[project.color] : (project.featured ? 'rgba(0,229,255,.14)' : 'var(--border0)')}`,
        borderRadius: 'var(--radius-lg)',
        overflow:     'hidden',
        boxShadow:    hovered ? HOVER_SHADOW[project.color] : 'none',
        transform:    hovered ? 'translateX(6px)' : 'none',
        cursor:       'default',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Accent top bar */}
      <div style={{
        height:     2,
        background: (project.featured || hovered)
          ? `linear-gradient(90deg, ${accent}, transparent)`
          : 'transparent',
        transition: 'background .3s',
      }} />

      <div style={{ display:'flex', alignItems:'flex-start', gap:24, padding:'28px 32px' }}>

        {/* Number */}
        <span style={{
          fontFamily:    'var(--font-display)', fontWeight:800, fontSize:28,
          color:         hovered ? accent : 'var(--text4)',
          letterSpacing: -1, lineHeight:1, marginTop:3, flexShrink:0, minWidth:36,
          transition:    'color var(--transition)',
        }}>
          {project.num}
        </span>

        {/* Content */}
        <div style={{ flex:1, minWidth:0 }}>
          <div style={{
            fontFamily:'var(--font-display)', fontWeight:700, fontSize:17,
            color:      hovered ? accent : 'var(--text0)',
            marginBottom:8, transition:'color var(--transition)',
          }}>
            {project.title}
          </div>
          <div style={{ fontSize:13, color:'var(--text2)', lineHeight:1.7, marginBottom:14, maxWidth:640 }}>
            {project.desc}
          </div>
          <div style={{ display:'flex', flexWrap:'wrap', gap:6 }}>
            {project.tags.map((tag, i) => (
              <span key={i} className={`tag ${tagClass[tag.color]}`}>{tag.label}</span>
            ))}
          </div>
        </div>

        {/* Arrow link */}
        <a
          href={project.github}
          data-hover
          target="_blank"
          rel="noreferrer"
          style={{
            width:42, height:42, borderRadius:'50%',
            border:      `1px solid ${hovered ? accent : 'var(--border2)'}`,
            display:     'flex', alignItems:'center', justifyContent:'center',
            color:       hovered ? accent : 'var(--text3)',
            fontSize:    16, flexShrink:0,
            background:  hovered ? 'rgba(0,229,255,.06)' : 'transparent',
            transform:   hovered ? 'scale(1.08)' : 'scale(1)',
            transition:  'all var(--transition)',
            textDecoration: 'none',
          }}
        >
          ↗
        </a>
      </div>
    </div>
  )
}

export default function Projects() {
  const [eyeRef, eyeInView] = useScrollReveal()

  return (
    <section id="projects">
      <div className="container">

        <div ref={eyeRef} className={`eyebrow reveal ${eyeInView ? 'visible' : ''}`}>
          <span className="eyebrow-text">03 — projects</span>
          <div className="eyebrow-line" />
        </div>

        <h2 className={`section-title reveal ${eyeInView ? 'visible' : ''}`}>
          What I&apos;ve <span className="gradient-text">Built</span>
        </h2>
        <p className={`section-sub reveal ${eyeInView ? 'visible' : ''}`}>
          A selection of things I&apos;ve shipped — from real-time data systems to AI-powered apps.
        </p>

        <div style={{ display:'flex', flexDirection:'column', gap:10, marginTop:56 }}>
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
