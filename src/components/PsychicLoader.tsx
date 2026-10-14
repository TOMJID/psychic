import { useEffect, useState } from 'react'

const LOADER_DURATION = 1600

export default function PsychicLoader() {
  const [progress, setProgress] = useState(0)
  const [isLeaving, setIsLeaving] = useState(false)

  useEffect(() => {
    const startedAt = performance.now()
    let frameId = 0

    const updateProgress = (now: number) => {
      const elapsed = now - startedAt
      const nextProgress = Math.min(100, Math.round((elapsed / LOADER_DURATION) * 100))

      setProgress(nextProgress)

      if (nextProgress < 100) {
        frameId = requestAnimationFrame(updateProgress)
      } else {
        setIsLeaving(true)
      }
    }

    frameId = requestAnimationFrame(updateProgress)

    return () => cancelAnimationFrame(frameId)
  }, [])

  return (
    <div
      className={`psychic-loader ${isLeaving ? 'psychic-loader-leaving' : ''}`}
      aria-label="Loading Psychic portfolio"
      role="status"
    >
      <div className="psychic-loader-noise" aria-hidden="true" />
      <div className="psychic-loader-aura" aria-hidden="true">
        <span />
        <span />
        <span />
        <b>???</b>
      </div>

      <div className="psychic-loader-content">
        <p className="psychic-loader-kicker">SPIRALING INTO THE UNKNOWN</p>
        <h1 data-text="PSYCHIC">PSYCHIC</h1>
        <div className="psychic-loader-meter" aria-hidden="true">
          <span style={{ width: `${progress}%` }} />
        </div>
        <div className="psychic-loader-readout">
          <span>POWER SYNC</span>
          <strong>{progress.toString().padStart(3, '0')}%</strong>
        </div>
      </div>
    </div>
  )
}
