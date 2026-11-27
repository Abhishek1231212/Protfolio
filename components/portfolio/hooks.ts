'use client'

import { useCallback, useSyncExternalStore } from 'react'

/** A media query kept in sync with the window; false on the server and during hydration, so markup always matches */
export function useMediaQuery(query: string) {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const list = window.matchMedia(query)

      list.addEventListener('change', onChange)

      return () => list.removeEventListener('change', onChange)
    },
    [query]
  )

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false
  )
}

export const useReducedMotionSafe = () => useMediaQuery('(prefers-reduced-motion: reduce)')

export const useFinePointer = () => useMediaQuery('(hover: hover) and (pointer: fine)')

export const EASE = [0.16, 1, 0.3, 1] as const
