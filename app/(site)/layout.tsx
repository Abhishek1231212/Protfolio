import type { ReactNode } from 'react'
import { LiquidFilter } from '@/components/portfolio/liquid-filter'
import { Providers } from '@/components/portfolio/providers'
import { SiteNav } from '@/components/portfolio/site-nav'

export default function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <LiquidFilter />
      <a
        href='#main'
        className='focus-ring sr-only z-[60] rounded-full bg-ink px-5 py-3 text-page focus:not-sr-only focus:fixed focus:top-4 focus:left-4'
      >
        Skip to content
      </a>
      <SiteNav />
      {children}
    </Providers>
  )
}
