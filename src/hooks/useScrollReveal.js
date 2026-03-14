import { useEffect, useRef, useState } from 'react'

/**
 * useScrollReveal — returns a ref and a boolean `inView`.
 * Attaches an IntersectionObserver that fires once when the element
 * enters the viewport, then disconnects (one-shot reveal).
 *
 * @param {object} options
 * @param {string} options.rootMargin  - e.g. '-60px 0px'  (default)
 * @param {number} options.threshold   - 0–1               (default 0.1)
 * @returns {[React.RefObject, boolean]}
 */
export function useScrollReveal({ rootMargin = '-60px 0px', threshold = 0.1 } = {}) {
  const ref    = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          obs.unobserve(el) // fire once only
        }
      },
      { rootMargin, threshold }
    )

    obs.observe(el)
    return () => obs.disconnect()
  }, [rootMargin, threshold])

  return [ref, inView]
}

/**
 * useSkillBars — fires once when the skill card enters view,
 * returning `animate: true` so CSS transitions kick in.
 */
export function useSkillBars(threshold = 0.2) {
  return useScrollReveal({ rootMargin: '0px', threshold })
}
