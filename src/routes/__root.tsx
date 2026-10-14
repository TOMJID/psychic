import {
  HeadContent,
  Scripts,
  createRootRoute,
  Outlet,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import appCss from '../styles.css?url'

const THEME_INIT_SCRIPT = `(function(){try{var stored=window.localStorage.getItem('theme');var mode=(stored==='light'||stored==='dark'||stored==='auto')?stored:'auto';var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;var resolved=mode==='auto'?(prefersDark?'dark':'light'):mode;var root=document.documentElement;root.classList.remove('light','dark');root.classList.add(resolved);if(mode==='auto'){root.removeAttribute('data-theme')}else{root.setAttribute('data-theme',mode)}root.style.colorScheme=resolved;}catch(e){}})();`

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { title: 'Psychic' },
    ],
    links: [
      { rel: 'stylesheet', href: appCss },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
    ],
  }),
  component: RootDocument,
})

function RootDocument() {
  // Initialize Locomotive Scroll on the client only.
  useEffect(() => {
    let scrollInstance: { destroy: () => void } | undefined
    let cancelled = false

    const initScroll = async () => {
      try {
        const { default: LocomotiveScroll } = await import('locomotive-scroll')

        if (cancelled) return

        scrollInstance = new LocomotiveScroll({
          lenisOptions: {
            lerp: 0.08,
            smoothWheel: true,
          },
        })
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error)
      }
    }

    void initScroll()

    return () => {
      cancelled = true
      scrollInstance?.destroy()
    }
  }, [])

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: THEME_INIT_SCRIPT,
          }}
        />
        <HeadContent />
      </head>

      <body className="wrap-anywhere font-sans antialiased selection:bg-[rgba(79,184,178,0.24)]">
        <Header />

        <main className="container mx-auto min-w-0 px-4 sm:px-6 lg:px-8">
          <Outlet />
        </main>

        <Footer />

        <TanStackDevtools
          config={{ position: 'bottom-right' }}
          plugins={[
            {
              name: 'TanStack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />

        <Scripts />
      </body>
    </html>
  )
}
