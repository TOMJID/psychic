interface PsychicHudProps {
  progress: number
  isExploded: boolean
  onReset: () => void
}

const PsychicHud = ({ progress, isExploded, onReset }: PsychicHudProps) => {
  const displayProgress = isExploded ? 100 : progress
  return (
    <>
      {/* Debris Overlay for 100% */}
      {isExploded && (
        <div className="fixed inset-0 pointer-events-none z-40 overflow-hidden psychic-shake">
          <div className="psychic-debris text-red-600 left-[5%] top-[15%] text-4xl rotate-12 scale-150 animate-pulse">
            ???
          </div>
          <div className="psychic-debris text-orange-500 right-[8%] top-[25%] text-5xl -rotate-12 animate-bounce">
            100%
          </div>
          <div className="psychic-debris text-red-500 left-[12%] top-[45%] text-3xl rotate-45 animate-pulse">
            💢
          </div>
          <div className="psychic-debris text-rose-600 right-[15%] top-[65%] text-4xl -rotate-45 animate-bounce">
            ???
          </div>
          <div className="psychic-debris text-red-500 left-[7%] top-[80%] text-5xl rotate-12 scale-110 animate-pulse">
            100%
          </div>
          <div className="psychic-debris text-orange-600 right-[5%] top-[85%] text-4xl -rotate-6 animate-bounce">
            💢
          </div>
        </div>
      )}
    </>
  )
}

export default PsychicHud
