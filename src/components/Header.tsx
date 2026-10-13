import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white shadow-[0_4px_0_0_#000] dark:border-zinc-300 dark:bg-zinc-950 dark:shadow-[0_4px_0_0_var(--color-zinc-300)]">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* Logo / Brand */}
        <h2 className="m-0 font-anton text-2xl uppercase tracking-widest text-black dark:text-white">
          <Link
            to="/"
            className="inline-block bg-black px-4 py-1.5 text-white transition-colors hover:bg-red-600 no-underline dark:bg-zinc-300 dark:text-zinc-950 dark:hover:bg-red-500"
          >
            Psychic
          </Link>
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-1 items-center gap-4 font-space font-bold uppercase text-black dark:text-zinc-100 md:ml-8">
          <Link
            to="/"
            className="border-2 border-transparent px-3 py-1 transition-all hover:border-black dark:hover:border-zinc-300"
            activeProps={{
              className:
                'border-black bg-black text-white dark:border-zinc-300 dark:bg-zinc-300 dark:text-zinc-950',
            }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border-2 border-transparent px-3 py-1 transition-all hover:border-black dark:hover:border-zinc-300"
            activeProps={{
              className:
                'border-black bg-black text-white dark:border-zinc-300 dark:bg-zinc-300 dark:text-zinc-950',
            }}
          >
            About
          </Link>
        </div>

        {/* Theme Toggle */}
        <div className="ml-auto flex items-center">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
