import { clsx } from 'clsx'

/**
 * Merges class names — wraps clsx for convenience.
 * Usage: cn('base-class', condition && 'conditional-class', { 'obj-class': bool })
 */
export function cn(...inputs) {
  return clsx(...inputs)
}

/** Colour → Tailwind tag class map */
export const tagClass = {
  cyan:   'tag-cyan',
  lime:   'tag-lime',
  violet: 'tag-violet',
  amber:  'tag-amber',
  gray:   'tag-gray',
}

/** Colour → CSS variable map used for accent colours */
export const accentVar = {
  cyan:   'var(--cyan)',
  lime:   'var(--lime)',
  violet: 'var(--violet)',
  amber:  'var(--amber)',
}

/** Colour → skill bar gradient */
export const barGradient = {
  cyan:   'linear-gradient(90deg, rgba(0,229,255,.5), var(--cyan))',
  lime:   'linear-gradient(90deg, rgba(163,230,53,.5), var(--lime))',
  violet: 'linear-gradient(90deg, rgba(167,139,250,.5), var(--violet))',
  amber:  'linear-gradient(90deg, rgba(251,191,36,.5), var(--amber))',
}
