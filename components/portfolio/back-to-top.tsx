'use client'

import { ArrowUp } from 'lucide-react'
import { useLenis } from './providers'

export function BackToTop() {
  const lenis = useLenis()

  const handleClick = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.6 })
    else window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className='focus-ring group inline-flex min-h-11 cursor-pointer items-center gap-3 rounded-full text-[12px] font-semibold tracking-[0.18em] text-page/70 uppercase transition-colors hover:text-page'
    >
      Back to top
      <span className='glass-dark grid size-10 place-items-center rounded-full transition-transform duration-500 group-hover:-translate-y-1'>
        <ArrowUp className='size-4' />
      </span>
    </button>
  )
}
