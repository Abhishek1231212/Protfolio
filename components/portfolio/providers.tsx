'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'
import { MotionConfig } from 'motion/react'

const LenisContext = createContext< Lenis | null >(null)

export const useLenis = () => useContext(LenisContext)

/**
 * Smooth, momentum scrolling (Lenis) for the whole site. It stays off when the visitor asks for reduced motion,
 * and every new page starts at the top.
 */
export function Providers({ children }: { children: ReactNode }) {
  const [lenis, setLenis] = useState< Lenis | null >(null)
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({ lerp: 0.09, wheelMultiplier: 0.95, smoothWheel: true })
    let frame = 0

    const raf = (time: number) => {
      instance.raf(time)
      frame = requestAnimationFrame(raf)
    }

    frame = requestAnimationFrame(raf)
    setLenis(instance)

    return () => {
      cancelAnimationFrame(frame)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  useEffect(() => {
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo(0, 0)
  }, [pathname, lenis])

  return (
    <LenisContext.Provider value={lenis}>
      <MotionConfig reducedMotion='user'>{children}</MotionConfig>
    </LenisContext.Provider>
  )
}
