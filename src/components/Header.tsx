import { Link } from '@tanstack/react-router'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-4 border-black bg-white shadow-[0_4px_0_0_#000]">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        {/* Logo / Brand */}
        <h2 className="m-0 font-anton text-2xl uppercase tracking-widest">
          <Link
            to="/"
            className="inline-block bg-black px-4 py-1.5 text-white transition-colors hover:bg-red-600 no-underline"
          >
            Psychic
          </Link>
        </h2>

        {/* Navigation Links */}
        <div className="flex flex-1 items-center gap-4 font-space font-bold uppercase md:ml-8">
          <Link
            to="/"
            className="border-2 border-transparent px-3 py-1 transition-all hover:border-black"
            activeProps={{ className: 'border-black bg-black text-white' }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="border-2 border-transparent px-3 py-1 transition-all hover:border-black"
            activeProps={{ className: 'border-black bg-black text-white' }}
          >
            About
          </Link>
        </div>

        {/* Theme Toggle (Wrapped in a brutalist button style) */}
        <div className="ml-auto flex items-center border-2 border-black bg-white p-1 shadow-[2px_2px_0_0_#000] transition-all hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0_0_#000]">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
