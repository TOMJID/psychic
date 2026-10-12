import Hero from '#/components/Hero'
import PsychicHud from '#/components/PsychicHud'
import Skills from '#/components/Skills'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const [progress, setProgress] = useState(0)
  const [isExploded, setIsExploded] = useState(false)

  useEffect(() => {
    if (localStorage.getItem('exploded') === 'true') {
      setIsExploded(true)
      setProgress(100)
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight
      const winHeight = window.innerHeight

      const scrollPercent = (scrollTop / (docHeight - winHeight)) * 100
      const current = Math.min(100, Math.max(0, Math.floor(scrollPercent)))

      if (current >= 100 || localStorage.getItem('exploded') === 'true') {
        setIsExploded(true)
        setProgress(100)
        localStorage.setItem('exploded', 'true')
      } else {
        setProgress((prev) => (prev === 100 ? 100 : current))
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleReset = () => {
    setIsExploded(false)
    setProgress(0)
    localStorage.removeItem('exploded')
  }

  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <div className="min-h-[200vh]">
        <PsychicHud
          progress={progress}
          isExploded={isExploded}
          onReset={handleReset}
        />
        <Hero isExploded={isExploded} />
        <Skills isExploded={isExploded} />
      </div>
    </main>
  )
}
