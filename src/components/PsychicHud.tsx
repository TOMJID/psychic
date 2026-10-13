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

      {/* bottom stress bar */}
      <div
        className={`fixed bottom-0 left-0 w-full h-3 z-50 transition-colors duration-500 ${
          isExploded
            ? 'bg-black border-b border-red-600'
            : 'bg-zinc-200 border-b-2 border-black'
        }`}
      >
        <div
          className={`h-full transition-all duration-150 ease-out ${
            isExploded
              ? 'bg-red-600 shadow-[0_0_15px_var(--color-red-600)]'
              : 'bg-black'
          }`}
          style={{
            width: `${progress}%`,
          }} /* Uses pure progress so it always tracks scroll */
        />
      </div>

      {/* Stress Meter */}
      <div className="fixed top-6 right-6 text-right z-50">
        <div
          className={`font-anton text-3xl md:text-5xl transition-all duration-300 ${
            isExploded ? 'meter-neon-glow' : 'text-black'
          }`}
          style={{ WebkitTextStroke: isExploded ? 'none' : '2px white' }}
        >
          {displayProgress}% {/* Uses displayProgress so it locks at 100% */}
        </div>
        {isExploded && (
          <div className="flex flex-col items-end gap-2 mt-2">
            <div className="inline-block bg-red-600 text-white px-3 py-1 font-bold animate-pulse uppercase tracking-widest text-sm shadow-[0_0_10px_var(--color-red-600)]">
              Development 100%
            </div>
            <button
              onClick={onReset}
              className="text-xs text-red-400 hover:text-orange-400 underline cursor-pointer font-bold bg-black/60 px-2 py-1 rounded-sm backdrop-blur-xs"
            >
              [ Suppress Power ]
            </button>
          </div>
        )}
      </div>
    </>
  )
}

export default PsychicHud
