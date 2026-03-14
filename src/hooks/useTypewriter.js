import { useState, useEffect } from 'react'

/**
 * useTypewriter — cycles through an array of strings with a
 * type → pause → delete → next loop.
 *
 * @param {string[]} words     - Array of strings to cycle through
 * @param {number}   typeSpeed - ms per character while typing   (default 75)
 * @param {number}   delSpeed  - ms per character while deleting (default 38)
 * @param {number}   pauseMs   - ms to pause at end of each word (default 2200)
 * @returns {string} current displayed text
 */
export function useTypewriter(words, typeSpeed = 75, delSpeed = 38, pauseMs = 2200) {
  const [text,     setText]     = useState('')
  const [wordIdx,  setWordIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const currentWord = words[wordIdx]

    const tick = () => {
      if (!deleting) {
        // Typing forward
        setText(currentWord.slice(0, charIdx + 1))
        if (charIdx + 1 === currentWord.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), pauseMs)
          return
        }
        setCharIdx(c => c + 1)
      } else {
        // Deleting backward
        setText(currentWord.slice(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          // Finished deleting — move to next word
          setDeleting(false)
          setWordIdx(i => (i + 1) % words.length)
          setCharIdx(0)
          return
        }
        setCharIdx(c => c - 1)
      }
    }

    const timer = setTimeout(tick, deleting ? delSpeed : typeSpeed)
    return () => clearTimeout(timer)
  }, [text, deleting, charIdx, wordIdx, words, typeSpeed, delSpeed, pauseMs])

  return text
}
