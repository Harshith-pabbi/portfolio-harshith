import { useEffect, useRef } from 'react'

/**
 * ParticleCanvas — renders an animated particle network on a <canvas>
 * that is fixed to the full viewport behind all content.
 */
export default function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx    = canvas.getContext('2d')
    let W, H
    const dots   = []
    const COUNT  = 75
    const DIST   = 115

    function resize() {
      W = canvas.width  = window.innerWidth
      H = canvas.height = window.innerHeight
    }

    function init() {
      resize()
      for (let i = 0; i < COUNT; i++) {
        dots.push({
          x:  Math.random() * W,
          y:  Math.random() * H,
          vx: (Math.random() - 0.5) * 0.22,
          vy: (Math.random() - 0.5) * 0.22,
          r:  Math.random() * 1.1 + 0.3,
        })
      }
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)

      // Move + draw dots
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > W) d.vx *= -1
        if (d.y < 0 || d.y > H) d.vy *= -1
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0,229,255,0.28)'
        ctx.fill()
      })

      // Draw connecting lines
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx   = dots[i].x - dots[j].x
          const dy   = dots[i].y - dots[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < DIST) {
            ctx.beginPath()
            ctx.moveTo(dots[i].x, dots[i].y)
            ctx.lineTo(dots[j].x, dots[j].y)
            ctx.strokeStyle = `rgba(0,229,255,${0.09 * (1 - dist / DIST)})`
            ctx.lineWidth   = 0.4
            ctx.stroke()
          }
        }
      }

      requestAnimationFrame(draw)
    }

    init()
    draw()
    window.addEventListener('resize', resize)
    return () => window.removeEventListener('resize', resize)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      id="bg-canvas"
      style={{
        position: 'fixed',
        inset:    0,
        zIndex:   0,
        pointerEvents: 'none',
        opacity:  0.55,
      }}
    />
  )
}
