'use client'

import { useEffect, useRef } from 'react'
import type { ReactNode } from 'react'
import { animate, motion, useInView, useMotionValue, useScroll, useTransform } from 'motion/react'
import type { MotionValue } from 'motion/react'
import { cn } from '@/lib/utils'
import { EASE, useReducedMotionSafe } from './hooks'

/** Fades and rises into place the first time it scrolls into view */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 28,
  as = 'div'
}: {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
  as?: 'div' | 'li' | 'article'
}) {
  const MotionTag = motion[as]

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -12% 0px' }}
      transition={{ duration: 0.9, delay, ease: EASE }}
    >
      {children}
    </MotionTag>
  )
}

const LINE = {
  hidden: { y: '105%' },
  shown: (delay: number) => ({ y: '0%', transition: { duration: 1.1, delay, ease: EASE } })
}

/**
 * Big display lines that rise out of their own masks. The parent watches the viewport (a line hidden below its mask
 * never intersects on its own), and each line follows in turn.
 */
export function MaskLines({
  lines,
  as: Tag = 'h1',
  className,
  lineClassNames = [],
  delay = 0,
  onLoad = false
}: {
  lines: string[]
  as?: 'h1' | 'h2' | 'h3'
  className?: string
  lineClassNames?: string[]
  delay?: number
  onLoad?: boolean
}) {
  const MotionTag = motion[Tag]

  return (
    <MotionTag
      className={cn('display', className)}
      initial='hidden'
      {...(onLoad ? { animate: 'shown' } : { whileInView: 'shown', viewport: { once: true, amount: 0.3 } })}
    >
      <span className='sr-only'>{lines.join(' ')}</span>
      {lines.map((line, index) => (
        <span key={line} aria-hidden className={cn('block overflow-hidden pb-[0.05em]', lineClassNames[index])}>
          <motion.span className='block' variants={LINE} custom={delay + index * 0.12}>
            {line}
          </motion.span>
        </span>
      ))}
    </MotionTag>
  )
}

/** The opening of every inner page: section number, giant title, and an intro paragraph */
export function PageHeader({ index, eyebrow, title, intro }: { index: string; eyebrow: string; title: string[]; intro: string }) {
  return (
    <header className='relative grid gap-8 pt-32 pb-14 sm:pt-40 lg:pt-44 lg:pb-20'>
      <motion.p
        className='eyebrow flex items-center gap-3 text-stone'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1 }}
      >
        <span className='text-ember'>{index}</span>
        <span aria-hidden className='h-px w-10 bg-stone/40' />
        {eyebrow}
      </motion.p>
      <MaskLines
        lines={title}
        onLoad
        delay={0.15}
        className='text-[clamp(52px,13vw,190px)]'
        lineClassNames={['text-ember', 'text-ink']}
      />
      <motion.p
        className='max-w-[620px] text-[19px] leading-relaxed text-stone sm:text-[21px]'
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
      >
        {intro}
      </motion.p>
    </header>
  )
}

function Word({ word, progress, range }: { word: string; progress: MotionValue< number >; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1])

  return (
    <motion.span style={{ opacity }} className='inline'>
      {word}{' '}
    </motion.span>
  )
}

/** A statement that lights up word by word as it scrolls through the screen */
export function WordReveal({ text, className }: { text: string; className?: string }) {
  const ref = useRef< HTMLParagraphElement >(null)
  const reduced = useReducedMotionSafe()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] })
  const words = text.split(' ')

  if (reduced) {
    return (
      <p ref={ref} className={className}>
        {text}
      </p>
    )
  }

  return (
    <p ref={ref} className={className}>
      {words.map((word, index) => (
        <Word key={`${word}-${index}`} word={word} progress={scrollYProgress} range={[index / words.length, (index + 1) / words.length]} />
      ))}
    </p>
  )
}

/** Counts up to its number the first time it is seen */
export function CountUp({ value, suffix = '', className }: { value: number; suffix?: string; className?: string }) {
  const ref = useRef< HTMLSpanElement >(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' })
  const reduced = useReducedMotionSafe()
  const count = useMotionValue(0)
  const rounded = useTransform(count, latest => `${Math.round(latest)}${suffix}`)

  useEffect(() => {
    if (!inView) return

    if (reduced) {
      count.set(value)

      return
    }

    const controls = animate(count, value, { duration: 1.6, ease: EASE })

    return () => controls.stop()
  }, [inView, reduced, value, count])

  return (
    <motion.span ref={ref} className={className}>
      {rounded}
    </motion.span>
  )
}

