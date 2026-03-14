import Head           from 'next/head'
import { useEffect }  from 'react'

import Cursor          from '../components/Cursor'
import ParticleCanvas  from '../components/ParticleCanvas'
import Navbar          from '../components/Navbar'
import Hero            from '../components/Hero'
import About           from '../components/About'
import Skills          from '../components/Skills'
import Projects        from '../components/Projects'
import Experience      from '../components/Experience'
import Achievements    from '../components/Achievements'
import Contact         from '../components/Contact'

import { personal } from '../data/portfolio'

export default function Home() {
  // Attach scroll-reveal observer for any .reveal / .stagger elements
  // that are not handled individually by components
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-60px 0px' }
    )

    document.querySelectorAll('.reveal, .reveal-left').forEach((el) => obs.observe(el))

    const staggerObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('stagger-visible')
            staggerObs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '-40px 0px' }
    )

    document.querySelectorAll('.stagger-parent').forEach((el) => staggerObs.observe(el))

    return () => {
      obs.disconnect()
      staggerObs.disconnect()
    }
  }, [])

  return (
    <>
      <Head>
        <title>{personal.short} — Frontend Developer</title>
        <meta name="description" content={`Portfolio of ${personal.name} — React, Next.js, Tailwind CSS, Framer Motion developer based in ${personal.location}.`} />
        <meta name="viewport"    content="width=device-width, initial-scale=1" />
        <meta name="author"      content={personal.name} />

        {/* Open Graph */}
        <meta property="og:title"       content={`${personal.short} — Frontend Developer`} />
        <meta property="og:description" content="React · Next.js · Tailwind CSS · Framer Motion · AI/ML" />
        <meta property="og:type"        content="website" />

        {/* Twitter card */}
        <meta name="twitter:card"  content="summary_large_image" />
        <meta name="twitter:title" content={`${personal.short} — Frontend Developer`} />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Fixed background elements */}
      <ParticleCanvas />
      <div className="noise-overlay" />

      {/* Custom cursor */}
      <Cursor />

      {/* Navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />

        <div className="section-divider" />
        <About />

        <div className="section-divider" />
        <Skills />

        <div className="section-divider" />
        <Projects />

        <Experience />

        <Achievements />

        <div className="section-divider" />
        <Contact />
      </main>
    </>
  )
}
