import { useState, useEffect, useCallback } from 'react'

export type TypewriterLine = { text: string; delay: number }

export function useTypewriter(lines: TypewriterLine[], charDelay = 28) {
  const [displayText, setDisplayText] = useState('')
  const [isComplete, setIsComplete] = useState(false)
  const [sessionIndex, setSessionIndex] = useState(0)

  const runSession = useCallback(() => {
    setDisplayText('')
    setIsComplete(false)
    let lineIdx = 0
    let charIdx = 0
    let total = ''

    const typeNext = () => {
      if (lineIdx >= lines.length) { setIsComplete(true); return }
      const line = lines[lineIdx]
      if (charIdx === 0 && lineIdx > 0) { total += '\n'; setDisplayText(total) }
      if (charIdx < line.text.length) {
        total += line.text[charIdx]
        setDisplayText(total)
        charIdx++
        setTimeout(typeNext, charDelay)
      } else {
        lineIdx++; charIdx = 0
        setTimeout(typeNext, lines[lineIdx]?.delay ?? 0)
      }
    }
    setTimeout(typeNext, lines[0]?.delay ?? 0)
  }, [lines, charDelay])

  useEffect(() => { runSession() }, [sessionIndex, runSession])

  useEffect(() => {
    if (!isComplete) return
    const t = setTimeout(() => setSessionIndex(s => s + 1), 3000)
    return () => clearTimeout(t)
  }, [isComplete])

  return { displayText, isComplete }
}
