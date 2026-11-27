'use client'

import { useRef } from 'react'
import type { PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { motion, useMotionTemplate, useMotionValue } from 'motion/react'
import { Braces, Cloud, Database, FlaskConical, MonitorSmartphone, Server, Workflow } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SKILL_GROUPS } from './data'
import type { SkillIcon } from './data'
import { EASE } from './hooks'

const ICONS: Record< SkillIcon, typeof Braces > = {
  languages: Braces,
  backend: Server,
  messaging: Workflow,
  frontend: MonitorSmartphone,
  databases: Database,
  cloud: Cloud,
  testing: FlaskConical
}

const CHIPS = {
  hidden: {},
  shown: { transition: { staggerChildren: 0.035, delayChildren: 0.15 } }
}

const CHIP = {
  hidden: { opacity: 0, y: 10 },
  shown: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } }
}

function StackCard({ title, icon, items, wide, index }: (typeof SKILL_GROUPS)[number] & { index: number }) {
  const ref = useRef< HTMLLIElement >(null)
  const x = useMotionValue(30)
  const y = useMotionValue(20)

  // A warm light that follows the pointer, so the glass chips have something to bend
  const glow = useMotionTemplate`radial-gradient(360px circle at ${x}% ${y}%, rgb(255 72 41 / 0.2), rgb(255 181 159 / 0.12) 40%, transparent 70%)`
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
      className={cn(
        'group relative isolate overflow-hidden rounded-[28px] border border-ink/10 bg-white/40 p-6 transition-[border-color,box-shadow] duration-500 hover:border-ember/25 hover:shadow-[0_30px_60px_-34px_rgb(23_20_18/0.35)] sm:p-7',
        wide && 'md:col-span-2'
      )}
      initial='hidden'
      whileInView='shown'
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      variants={{
        hidden: { opacity: 0, y: 28 },
        shown: { opacity: 1, y: 0, transition: { duration: 0.8, delay: (index % 4) * 0.07, ease: EASE } }
      }}
    >
      <motion.span aria-hidden className='absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100' style={{ background: glow }} />

      <div className='flex items-start justify-between gap-4'>
        <div className='flex items-center gap-3.5'>
          <span className='glass grid size-11 shrink-0 place-items-center rounded-2xl text-ember'>
            <Icon className='size-[19px]' strokeWidth={1.8} />
          </span>
          <h3 className='font-serif text-[28px] leading-none tracking-[-0.01em] italic'>{title}</h3>
        </div>
        <span className='font-mono text-[12px] text-stone'>{String(items.length).padStart(2, '0')}</span>
      </div>

      <motion.ul className='mt-6 flex flex-wrap gap-2' variants={CHIPS}>
        {items.map(item => (
          <motion.li key={item} variants={CHIP}>
            {/* The hover lift lives on the inner pill, so Motion's entrance transform never overrides it */}
            <span className='tech-chip'>
              <span aria-hidden className='tech-chip-dot' />
              {item}
            </span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.li>
  )
}

/**
 * The technical skills in the resume's seven categories. Each category is a card; each skill is a pill that turns to
 * liquid glass on hover, over a warm light that follows the pointer.
 */
export function TechStack({ eyebrow = 'Tech stack', title, intro }: { eyebrow?: string; title: ReactNode; intro?: string }) {
  return (
    <section aria-labelledby='tech-stack-title' className='border-t border-ink/15 py-16 lg:py-24'>
      <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-end'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className='eyebrow text-ember'>{eyebrow}</p>
          <h2 id='tech-stack-title' className='display mt-4 text-[clamp(40px,6vw,84px)]'>
            {title}
          </h2>
        </motion.div>
        {intro && (
          <motion.p
            className='text-[17px] leading-relaxed text-stone'
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
          >
            {intro}
          </motion.p>
        )}
      </div>

      <ul className='mt-12 grid gap-4 md:grid-flow-dense md:grid-cols-2 lg:grid-cols-4'>
        {SKILL_GROUPS.map((group, index) => (
          <StackCard key={group.title} {...group} index={index} />
        ))}
      </ul>
    </section>
  )
}
