'use client'

import { useRef } from 'react'
import { motion, useScroll, useSpring } from 'motion/react'
import { EXPERIENCE } from './data'
import { EASE } from './hooks'

/** The roles as a timeline whose ember line fills as you scroll down through it */
export function Timeline() {
  const ref = useRef< HTMLOListElement >(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  return (
    <ol ref={ref} className='relative grid gap-16 pl-8 sm:pl-14 lg:gap-24'>
      <span aria-hidden className='absolute top-2 bottom-2 left-[7px] w-px bg-ink/15 sm:left-[11px]' />
      <motion.span
        aria-hidden
        className='absolute top-2 bottom-2 left-[7px] w-px origin-top bg-ember sm:left-[11px]'
        style={{ scaleY: progress }}
      />

      {EXPERIENCE.map(job => (
        <motion.li
          key={job.company}
          className='relative grid gap-6'
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '0px 0px -15% 0px' }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <span aria-hidden className='absolute top-2 -left-8 grid size-[15px] place-items-center rounded-full bg-page ring-1 ring-ink/25 sm:-left-14 sm:size-[23px]'>
            <span className={job.current ? 'live-dot relative size-2 rounded-full bg-ember text-ember sm:size-2.5' : 'size-2 rounded-full bg-ink/40 sm:size-2.5'} />
          </span>

          <header className='grid gap-3'>
            <p className='eyebrow flex flex-wrap items-center gap-3 text-stone'>
              {job.period}
              {job.current && <span className='rounded-full bg-ember px-2.5 py-1 text-[10px] tracking-[0.16em] text-white'>Now</span>}
            </p>
            <h3 className='display text-[clamp(30px,4.6vw,64px)] tracking-[-0.03em]'>{job.role}</h3>
            <p className='text-[18px] text-ink sm:text-[20px]'>
              <span className='font-semibold'>{job.company}</span>
              <span className='text-stone'>
                {' '}
                · {job.location} · {job.context}
              </span>
            </p>
          </header>

          <ul className='grid max-w-[860px] gap-3.5'>
            {job.highlights.map(item => (
              <li key={item} className='grid grid-cols-[auto_1fr] gap-4 text-[16px] leading-relaxed text-ink/80 sm:text-[17px]'>
                <span aria-hidden className='mt-[0.7em] h-px w-4 bg-ember' />
                {item}
              </li>
            ))}
          </ul>

          <ul aria-label='Tech stack' className='flex flex-wrap gap-2'>
            {job.stack.map(tech => (
              <li key={tech}>
                <span className='tech-chip tech-chip-sm'>
                  <span aria-hidden className='tech-chip-dot' />
                  {tech}
                </span>
              </li>
            ))}
          </ul>
        </motion.li>
      ))}
    </ol>
  )
}
