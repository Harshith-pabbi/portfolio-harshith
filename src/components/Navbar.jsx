import { useEffect, useState } from 'react'
import { personal } from '../data/portfolio'

const NAV_LINKS = [
  { href: '#about',      num: '01.', label: 'About'      },
  { href: '#skills',     num: '02.', label: 'Skills'     },
  { href: '#projects',   num: '03.', label: 'Projects'   },
  { href: '#experience', num: '04.', label: 'Experience' },
  { href: '#contact',    num: '05.', label: 'Contact'    },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <nav
      id="nav"
      style={{
        position:       'fixed',
        top:            0, left: 0, right: 0,
        zIndex:         100,
        display:        'flex',
        justifyContent: 'space-between',
        alignItems:     'center',
        padding:        '20px 64px',
        transition:     'background 0.4s, backdrop-filter 0.4s, border-color 0.4s',
        ...(scrolled ? {
          background:     'rgba(4,4,12,0.88)',
          backdropFilter: 'blur(24px)',
          borderBottom:   '1px solid rgba(255,255,255,0.04)',
        } : {}),
      }}
    >
      {/* Logo */}
      <a href="#" className="nav-logo" data-hover
        style={{ fontFamily:'var(--font-display)', fontWeight:800, fontSize:18, color:'var(--text0)', letterSpacing:'-.5px' }}
      >
        H<span style={{ color:'var(--cyan)' }}>.</span>PSKY
      </a>

      {/* Links */}
      <ul style={{ display:'flex', gap:36, listStyle:'none' }}>
        {NAV_LINKS.map(({ href, num, label }) => (
          <li key={href}>
            <a href={href} data-hover style={{
              fontFamily:    'var(--font-mono)', fontSize:12,
              color:         'var(--text3)',     letterSpacing: '0.06em',
              position:      'relative',        transition: 'color 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.color = 'var(--cyan)'}
            onMouseLeave={e => e.currentTarget.style.color = 'var(--text3)'}
            >
              <span style={{ color:'var(--cyan)', marginRight:5 }}>{num}</span>
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href={`mailto:${personal.email}`} data-hover style={{
        fontFamily:  'var(--font-mono)', fontSize:12,
        color:       'var(--cyan)',      padding: '8px 18px',
        border:      '1px solid rgba(0,229,255,0.3)',
        borderRadius:'var(--radius-sm)', transition:'all 0.2s',
      }}
      onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,229,255,0.08)'; e.currentTarget.style.borderColor = 'var(--cyan)' }}
      onMouseLeave={e => { e.currentTarget.style.background = 'transparent';         e.currentTarget.style.borderColor = 'rgba(0,229,255,0.3)' }}
      >
        Hire Me
      </a>
    </nav>
  )
}
