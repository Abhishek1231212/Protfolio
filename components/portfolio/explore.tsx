'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { EASE } from './hooks'

const PAGES = [
  { index: '01', title: 'About me', text: 'Who I am, how I work, and what I care about.', href: '/about' },
  { index: '02', title: 'Experience', text: 'Oracle, Grid Dynamics, EPAM, and what I built there.', href: '/experience' },
  { index: '03', title: 'Freelance', text: 'Software, design, interview prep, content and UGC ads.', href: '/freelance' },
  { index: '04', title: 'Contact', text: 'Email, phone and socials. Say hello.', href: '/contact' }
]

/** Home's table of contents: four big rows that fill with ink on hover */
export function Explore() {
  return (
    <section aria-labelledby='explore-title' className='mx-auto max-w-[1440px] px-5 py-24 sm:px-8 lg:px-12 lg:py-32'>
      <h2 id='explore-title' className='eyebrow flex items-center gap-3 text-stone'>
        <span aria-hidden className='h-px w-10 bg-stone/40' />
        Explore
      </h2>

      <ul className='mt-10 border-t border-ink/15'>
        {PAGES.map((page, index) => (
          <motion.li
            key={page.href}
            className='border-b border-ink/15'
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '0px 0px -10% 0px' }}
            transition={{ duration: 0.8, delay: index * 0.08, ease: EASE }}
          >
            <Link
              href={page.href}
              data-cursor='Open'
              className='group focus-ring relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-x-5 gap-y-1 overflow-hidden px-2 py-7 sm:gap-x-10 sm:px-4 lg:py-9'
            >
              <span aria-hidden className='absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100' />
              <span className='font-mono text-[13px] text-ember'>{page.index}</span>
              <span className='display text-[clamp(34px,6.4vw,92px)] tracking-[-0.035em] transition-colors duration-500 group-hover:text-page'>
                {page.title}
              </span>
              <span className='grid size-12 place-items-center rounded-full border border-ink/20 transition-all duration-500 group-hover:rotate-45 group-hover:border-ember group-hover:bg-ember group-hover:text-white sm:size-14'>
                <ArrowUpRight className='size-5' />
              </span>
              <span className='col-start-2 max-w-[460px] text-[15px] text-stone transition-colors duration-500 group-hover:text-page/70'>{page.text}</span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </section>
  )
}
