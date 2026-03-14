import { useEffect, useRef } from 'react'

/**
 * Cursor — custom dot + trailing ring cursor.
 * Attaches mousemove listener and animates the ring with lerp smoothing.
 * Adds `.cursor-grow` to body when hovering `[data-hover]` elements.
 */
export default function Cursor() {
  const curRef  = useRef(null)
  const ringRef = useRef(null)
  const pos     = useRef({ tx: 0, ty: 0, rx: 0, ry: 0 })

  useEffect(() => {
    const cur  = curRef.current
    const ring = ringRef.current
    const p    = pos.current

    // Move dot instantly
    const onMove = (e) => {
      p.tx = e.clientX
      p.ty = e.clientY
      cur.style.left = p.tx + 'px'
      cur.style.top  = p.ty + 'px'
    }
    document.addEventListener('mousemove', onMove)

    // Lerp ring toward cursor
    let raf
    const animate = () => {
      p.rx += (p.tx - p.rx) * 0.11
      p.ry += (p.ty - p.ry) * 0.11
      ring.style.left = p.rx + 'px'
      ring.style.top  = p.ry + 'px'
      raf = requestAnimationFrame(animate)
    }
    animate()

    // Grow on hover
    const grow   = () => document.body.classList.add('cursor-grow')
    const shrink = () => document.body.classList.remove('cursor-grow')
    const attach = () => {
      document.querySelectorAll('[data-hover]').forEach(el => {
        el.addEventListener('mouseenter', grow)
        el.addEventListener('mouseleave', shrink)
      })
    }
    attach()

    return () => {
      document.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={curRef}  id="cursor" />
      <div ref={ringRef} id="cursor-ring" />
    </>
  )
}
