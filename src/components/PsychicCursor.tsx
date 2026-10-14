import { useEffect, useRef } from 'react'

export default function PsychicCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const position = useRef({ x: -100, y: -100 })
  const frame = useRef<number | null>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor || window.matchMedia('(pointer: coarse)').matches) return

    const moveCursor = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY }
    }

    const animateCursor = () => {
      position.current.x += (target.current.x - position.current.x) * 0.16
      position.current.y += (target.current.y - position.current.y) * 0.16
      cursor.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`
      frame.current = requestAnimationFrame(animateCursor)
    }

    window.addEventListener('pointermove', moveCursor, { passive: true })
    frame.current = requestAnimationFrame(animateCursor)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      if (frame.current !== null) cancelAnimationFrame(frame.current)
    }
  }, [])

  return (
    <div ref={cursorRef} className="psychic-cursor" aria-hidden="true">
      <span className="psychic-cursor-ink" />
      <span className="psychic-cursor-glitch psychic-cursor-glitch-red" />
      <span className="psychic-cursor-glitch psychic-cursor-glitch-orange" />
      <span className="psychic-cursor-drop psychic-cursor-drop-one" />
      <span className="psychic-cursor-drop psychic-cursor-drop-two" />
      <span className="psychic-cursor-drop psychic-cursor-drop-three" />
      <span className="psychic-cursor-label">???</span>
    </div>
  )
}
