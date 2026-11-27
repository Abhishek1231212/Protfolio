'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowButton, GlassButton } from './buttons'
import { EXPERIENCE, PROFILE } from './data'
import { EASE, useReducedMotionSafe } from './hooks'
import { Portrait } from './portrait'

const LINE = {
  hidden: { y: '105%' },
  shown: (delay: number) => ({ y: '0%', transition: { duration: 1.2, delay, ease: EASE } })
}

/**
 * The name, set the way the reference sets it: ABHISHEK in ember over BICHALA in ink, both from the left edge, with the
 * portrait standing in front of them. As you scroll away the two lines drift apart and the portrait sinks.
 */
export function HomeHero() {
  const ref = useRef< HTMLElement >(null)
  const reduced = useReducedMotionSafe()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const drift = reduced ? 0 : 1
  const firstX = useTransform(scrollYProgress, value => `${value * -14 * drift}%`)
  const lastX = useTransform(scrollYProgress, value => `${value * 10 * drift}%`)
  const portraitY = useTransform(scrollYProgress, value => `${value * 14 * drift}%`)
  const fade = useTransform(scrollYProgress, [0, 0.6], [1, reduced ? 1 : 0])
  const current = EXPERIENCE[0]

  return (
    <section id='main' ref={ref} aria-label={`${PROFILE.first} ${PROFILE.last}`} className='relative isolate flex min-h-svh flex-col overflow-hidden'>
      <div aria-hidden className='blob -top-32 left-[6%] size-[460px] bg-ember-soft opacity-60' />
      <div aria-hidden className='blob top-[28%] right-[2%] size-[520px] bg-ember opacity-20' />
      <div aria-hidden className='blob bottom-[-160px] left-[32%] size-[440px] bg-peach opacity-80' />

      <div className='relative mx-auto flex w-full max-w-[1440px] flex-1 flex-col px-5 pt-28 pb-10 sm:px-8 sm:pt-32 lg:static lg:px-12 lg:pt-32'>
        <motion.h1
          className='display relative z-0 text-[clamp(52px,16.2vw,234px)] tracking-[-0.04em] lg:text-[min(14.6vw,24svh,234px)]'
          initial='hidden'
          animate='shown'
        >
          <span className='sr-only'>
            {PROFILE.first} {PROFILE.last}
          </span>
          <motion.span aria-hidden className='block overflow-hidden pb-[0.04em] text-ember' style={{ x: firstX }}>
            <motion.span className='block' variants={LINE} custom={0.15}>
              {PROFILE.first}
            </motion.span>
          </motion.span>
          <motion.span aria-hidden className='block overflow-hidden pb-[0.04em] text-ink' style={{ x: lastX }}>
            <motion.span className='block' variants={LINE} custom={0.3}>
              {PROFILE.last}
            </motion.span>
          </motion.span>
        </motion.h1>

        {/* In the flow on phones and tablets; standing in front of the name on a laptop */}
        <motion.div
          className='pointer-events-none relative z-10 -mt-[5vw] ml-auto h-[44svh] max-h-[520px] min-h-[280px] w-fit sm:-mt-[8vw] lg:absolute lg:bottom-0 lg:left-[47%] lg:mt-0 lg:h-[78svh] lg:max-h-[860px]'
          style={{ y: portraitY }}
        >
          <motion.div
            className='h-full'
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.3, delay: 0.45, ease: EASE }}
          >
            <Portrait priority />
          </motion.div>
        </motion.div>

        <motion.div
          className='relative z-20 mt-8 grid gap-10 lg:mt-auto lg:grid-cols-[minmax(0,420px)_1fr] lg:items-end'
          style={{ opacity: fade }}
        >
          <motion.div
            className='grid gap-5'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: EASE }}
          >
            <p className='eyebrow flex flex-wrap gap-x-2 gap-y-1 text-ink'>
              {PROFILE.roles.map((role, index) => (
                <span key={role} className='flex gap-2'>
                  {index > 0 && <span className='text-ember'>/</span>}
                  {role}
                </span>
              ))}
            </p>
            <p className='text-[26px] leading-[1.12] font-medium tracking-[-0.01em] text-balance lg:text-[30px]'>{PROFILE.headline}</p>
            <span aria-hidden className='h-0.5 w-14 bg-ember' />
            <p className='max-w-[400px] text-[16px] leading-relaxed text-stone'>{PROFILE.intro}</p>
            <div className='flex flex-wrap gap-3 pt-2'>
              <ArrowButton href='/contact' label="Let's talk" />
              <GlassButton href='/experience' label='View experience' />
            </div>
          </motion.div>

          <motion.div
            className='glass grid w-full max-w-[340px] gap-3 justify-self-start rounded-[26px] p-5 lg:justify-self-end'
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: EASE }}
          >
            <p className='flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase'>
              <span className='live-dot relative size-2 rounded-full bg-ember text-ember' />
              {PROFILE.availability}
            </p>
            <p className='text-[15px] leading-snug text-ink'>
              Currently <span className='font-semibold'>{current.role}</span> at {current.company}, {PROFILE.location}.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
