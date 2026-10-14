import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-black bg-white shadow-[0_4px_0_0_#000] dark:border-zinc-300 dark:bg-zinc-950 dark:shadow-[0_4px_0_0_var(--color-zinc-300)]">
      <nav className="container mx-auto flex min-w-0 flex-wrap items-center gap-3 px-4 py-3 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        {/* Logo / Brand */}
        <h2 className="m-0 shrink-0 font-anton text-xl uppercase tracking-widest text-black dark:text-white sm:text-2xl">
          <Link
            to="/"
            className="inline-block bg-black px-3 py-1.5 text-white no-underline transition-colors hover:bg-red-600 dark:bg-zinc-300 dark:text-zinc-950 dark:hover:bg-red-500 sm:px-4"
          >
            Psychic
          </Link>
        </h2>

        {/* Navigation Links */}
        <div className="flex min-w-0 flex-wrap items-center gap-2 font-space text-xs font-bold uppercase text-black dark:text-zinc-100 sm:gap-4">
          <Link
            to="/"
            className="border-2 hover:bg-red-600 border-transparent px-2 py-1.5 no-underline transition-colors hover:border-black dark:hover:border-zinc-300 sm:px-3"
            activeProps={{
              className:
                'border-black bg-black text-white dark:border-zinc-300 dark:bg-zinc-300 dark:text-zinc-950',
            }}
          >
            Home
          </Link>

          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
