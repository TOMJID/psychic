interface PsychicHudProps {
  progress: number
  isExploded: boolean
  onReset: () => void
}

const PsychicHud = ({ progress, isExploded, onReset }: PsychicHudProps) => {
  // displayProgress locks text at 100, raw `progress` goes to the bottom bar
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

      {/* Bottom stress bar */}
      <div
        className={`fixed bottom-0 left-0 w-full h-3 z-50 transition-colors duration-500 ${
          isExploded
            ? 'bg-black dark:bg-zinc-100 border-t border-red-600'
            : 'bg-zinc-200 dark:bg-zinc-800 border-t-2 border-black dark:border-zinc-300'
        }`}
      >
        <div
          className={`h-full transition-all duration-150 ease-out ${
            isExploded
              ? 'bg-red-600 shadow-[0_0_15px_var(--color-red-600)]'
              : 'bg-black dark:bg-zinc-300'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Stress Meter */}
      <div className="fixed top-4 right-6 text-right z-50 pointer-events-auto">
        <div
          className={`font-anton text-3xl md:text-5xl transition-all duration-300 ${
            isExploded ? 'meter-neon-glow' : 'text-black dark:text-white'
          }`}
          style={{ WebkitTextStroke: isExploded ? 'none' : '2px transparent' }}
        >
          {displayProgress}%
        </div>

        {isExploded && (
          <div className="flex flex-col items-end gap-2 mt-2">
            <div className="inline-block bg-red-600 text-white px-3 py-1 font-bold animate-pulse uppercase tracking-widest text-sm shadow-[0_0_10px_var(--color-red-600)]">
              {/* Development 100% */}
            </div>
            <button
              onClick={onReset}
              className="text-xs text-red-400 dark:text-red-600 hover:text-orange-400 dark:hover:text-orange-600 underline cursor-pointer font-bold bg-black/60 dark:bg-white/60 px-2 py-1 rounded-sm backdrop-blur-xs transition-colors"
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
