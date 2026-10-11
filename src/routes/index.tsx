import Hero from '#/components/Hero'
import PsychicHud from '#/components/PsychicHud'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="page-wrap px-4 pb-8 pt-14">
      <div className="min-h-[200vh]">
        <PsychicHud progress={100} isExploded={false} onReset={() => {}} />
        <Hero isExploded={false} />
      </div>
    </main>
  )
}
