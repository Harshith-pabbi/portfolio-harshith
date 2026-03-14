import '../styles/globals.css'

/**
 * _app.jsx — Next.js custom App wrapper.
 * Imports global CSS (Tailwind + CSS variables + animations).
 * All pages are wrapped here automatically by Next.js.
 */
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
