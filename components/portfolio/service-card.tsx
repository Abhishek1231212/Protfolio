'use client'

import Link from 'next/link'
import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { ArrowUpRight, Clapperboard, Code2, MessagesSquare, MonitorSmartphone, PanelsTopLeft, Video } from 'lucide-react'
import type { ServiceIcon } from './data'
import { EASE } from './hooks'

const ICONS: Record< ServiceIcon, typeof Code2 > = {
  code: Code2,
  interview: MessagesSquare,
  website: PanelsTopLeft,
  app: MonitorSmartphone,
  content: Video,
  ugc: Clapperboard
}

/** A service card with a warm glow that follows the pointer, and a "Get a quote" link to Contact */
export function ServiceCard({ icon, title, text, tags, index }: { icon: ServiceIcon; title: string; text: string; tags: string[]; index: number }) {
  const ref = useRef< HTMLLIElement >(null)
  const x = useMotionValue(50)
  const y = useMotionValue(50)
  const glow = useMotionTemplate`radial-gradient(420px circle at ${x}% ${y}%, rgb(255 72 41 / 0.16), transparent 60%)`
  const Icon = ICONS[icon]

  const handleMove = (event: ReactPointerEvent< HTMLLIElement >) => {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return

    x.set(((event.clientX - rect.left) / rect.width) * 100)
    y.set(((event.clientY - rect.top) / rect.height) * 100)
  }

  return (
    <motion.li
      ref={ref}
      onPointerMove={handleMove}
      className='group relative isolate flex flex-col overflow-hidden rounded-[30px] border border-ink/10 bg-white/45 p-7 transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgb(23_20_18/0.35)] sm:p-8'
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.85, delay: (index % 3) * 0.08, ease: EASE }}
    >
      <motion.span aria-hidden className='absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' style={{ background: glow }} />

      <div className='flex items-start justify-between gap-4'>
        <span className='glass grid size-14 place-items-center rounded-2xl text-ember'>
          <Icon className='size-6' strokeWidth={1.8} />
        </span>
        <span className='font-mono text-[13px] text-stone'>0{index + 1}</span>
      </div>

      <h3 className='mt-8 text-[28px] leading-tight font-semibold tracking-[-0.015em]'>{title}</h3>
      <p className='mt-3 text-[16px] leading-relaxed text-stone'>{text}</p>

      <ul aria-label='Includes' className='mt-6 flex flex-wrap gap-2'>
        {tags.map(tag => (
          <li key={tag} className='rounded-full border border-ink/12 px-3 py-1 text-[13px] font-medium text-ink/80'>
            {tag}
          </li>
        ))}
      </ul>

      <Link
        href='/contact'
        data-cursor='Quote'
        className='focus-ring mt-auto inline-flex items-center gap-2 self-start rounded-full pt-8 text-[13px] font-semibold tracking-[0.14em] text-ink uppercase transition-colors hover:text-ember'
      >
        Get a quote
        <span className='grid size-8 place-items-center rounded-full bg-ember text-white transition-transform duration-500 group-hover:rotate-45'>
          <ArrowUpRight className='size-4' />
        </span>
        <span className='sr-only'>for {title}</span>
      </Link>
    </motion.li>
  )
}
