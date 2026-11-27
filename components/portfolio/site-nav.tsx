'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'motion/react'
import { ArrowUpRight, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { ArrowButton } from './buttons'
import { NAV, PROFILE } from './data'
import { EASE } from './hooks'
import { useLenis } from './providers'

const ALL_LINKS = [...NAV.left, ...NAV.right]

const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href))

function NavItem({ label, href, current, active, onHover }: { label: string; href: string; current: boolean; active: boolean; onHover: (href: string) => void }) {
  return (
    <li>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        onPointerEnter={() => onHover(href)}
        onFocus={() => onHover(href)}
        className={cn(
          'focus-ring relative isolate inline-flex min-h-11 items-center gap-2 rounded-full px-[18px] text-[13.5px] font-medium tracking-[0.08em] whitespace-nowrap uppercase transition-colors duration-300',
          active ? 'text-ember' : 'text-ink'
        )}
      >
        {current && (
          <motion.span layoutId='nav-oval' className='nav-oval' transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }} />
        )}
        {active && <span aria-hidden className='size-1.5 rounded-full bg-ember' />}
        {label}
      </Link>
    </li>
  )
}

/**
 * The floating liquid-glass capsule. Links mirror around the wordmark like the reference; the 70%-high glass oval rests
 * on the current page and glides to whichever link is hovered. Below 1024px it folds into a pill with a menu sheet.
 */
export function SiteNav() {
  const pathname = usePathname()
  const lenis = useLenis()
  const [hovered, setHovered] = useState< string | null >(null)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', value => setScrolled(value > 24))

  const activeHref = ALL_LINKS.find(link => isActive(pathname, link.href))?.href ?? null
  const ovalHref = hovered ?? activeHref

  // The menu closes on navigation, and the page underneath holds still while it is open
  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    if (open) lenis?.stop()
    else lenis?.start()

    document.documentElement.style.overflow = open ? 'hidden' : ''
  }, [open, lenis])

  useEffect(() => {
    if (!open) return

    const handleKey = (event: KeyboardEvent) => event.key === 'Escape' && setOpen(false)

    window.addEventListener('keydown', handleKey)

    return () => window.removeEventListener('keydown', handleKey)
  }, [open])

  return (
    <header className='fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 lg:pt-5'>
      <motion.nav
        aria-label='Main'
        className={cn(
          'glass mx-auto hidden max-w-[1240px] grid-cols-[1fr_auto_1fr] items-center rounded-full py-2 pr-2 pl-4 transition-shadow duration-500 lg:grid',
          scrolled && 'shadow-[0_24px_50px_-20px_rgb(23_20_18/0.4)]'
        )}
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: EASE }}
        onPointerLeave={() => setHovered(null)}
      >
        <ul className='flex justify-end gap-1'>
          {NAV.left.map(link => (
            <NavItem key={link.href} {...link} current={ovalHref === link.href} active={activeHref === link.href} onHover={setHovered} />
          ))}
        </ul>

        <Link href='/' className='focus-ring display rounded-full px-7 text-[30px] tracking-[-0.045em] text-ember'>
          {PROFILE.first}
        </Link>

        <div className='flex items-center justify-between gap-4'>
          <ul className='flex gap-1'>
            {NAV.right.map(link => (
              <NavItem key={link.href} {...link} current={ovalHref === link.href} active={activeHref === link.href} onHover={setHovered} />
            ))}
          </ul>
          <ArrowButton href={NAV.cta.href} label={NAV.cta.label} />
        </div>
      </motion.nav>

      {/* Phones and iPad portrait */}
      <div className='glass relative z-10 flex items-center justify-between rounded-full py-1.5 pr-1.5 pl-5 lg:hidden'>
        <Link href='/' className='focus-ring display rounded-full text-[24px] tracking-[-0.045em] text-ember'>
          {PROFILE.first}
        </Link>
        <button
          type='button'
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls='mobile-menu'
          onClick={() => setOpen(value => !value)}
          className='focus-ring grid size-11 cursor-pointer place-items-center rounded-full bg-ember text-white'
        >
          {open ? <X className='size-5' /> : <Menu className='size-5' />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className='fixed inset-0 bg-ink/20 backdrop-blur-[2px] lg:hidden'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id='mobile-menu'
              aria-label='Mobile'
              className='glass absolute inset-x-4 top-[76px] rounded-[28px] p-3 sm:inset-x-6 lg:hidden'
              initial={{ opacity: 0, y: -14, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <ul className='grid gap-1'>
                {[...ALL_LINKS, NAV.cta].map((link, index) => {
                  const active = isActive(pathname, link.href)

                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 + index * 0.05, duration: 0.4, ease: EASE }}
                    >
                      <Link
                        href={link.href}
                        aria-current={active ? 'page' : undefined}
                        className={cn(
                          'focus-ring flex min-h-14 items-center justify-between rounded-full px-5 text-[17px] font-medium tracking-[0.06em] uppercase',
                          active ? 'bg-white/70 text-ember' : 'text-ink'
                        )}
                      >
                        {link.label}
                        <ArrowUpRight className='size-4 opacity-50' />
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
