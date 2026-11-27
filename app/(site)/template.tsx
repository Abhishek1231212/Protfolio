'use client'

import type { ReactNode } from 'react'
import { motion } from 'motion/react'
import { EASE } from '@/components/portfolio/hooks'

/** Each page arrives with a short, soft rise; the template remounts on every navigation */
export default function SiteTemplate({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: EASE }}>
      {children}
    </motion.div>
  )
}
