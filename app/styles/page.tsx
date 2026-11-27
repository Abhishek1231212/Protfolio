'use client'

import './styles.css'

import { useEffect, useRef, useState } from 'react'
import type { CSSProperties, PointerEvent as ReactPointerEvent, ReactNode } from 'react'
import { AnimatePresence, motion, MotionConfig, useMotionValue, useSpring } from 'motion/react'
import { ArrowUpRight, Download, Mail, Menu, Phone, X } from 'lucide-react'
import { cn } from '@/lib/utils'

type Variant = 'a' | 'b' | 'c'

const EASE = [0.16, 1, 0.3, 1] as const
const NAV_LEFT = ['Home', 'About me']
const NAV_RIGHT = ['Experience', 'Freelance']
const ACTIVE = 'Home'

const DIRECTIONS: Array< { v: Variant; name: string; tagline: string; notes: string[] } > = [
  {
    v: 'a',
    name: 'Editorial Ink',
    tagline: 'Closest to your reference. The nav sits bare on paper; liquid glass only appears where you touch it.',
    notes: [
      'Nav: no bar, links mirror around the wordmark',
      'Hover: dark outlined oval, frosted glass fill at 70%',
      'Cursor: orange ink dot + trailing ring that turns into a glass lens over links'
    ]
  },
  {
    v: 'b',
    name: 'Molten Glass',
    tagline: 'Liquid glass taken further. The nav floats as a refracting capsule over warm light, with an orange rim.',
    notes: [
      'Nav: floating glass capsule that bends what scrolls under it (Chrome/Edge; blur elsewhere)',
      'Hover: orange-rimmed oval with a specular highlight',
      'Cursor: a small glass lens that swells over links'
    ]
  },
  {
    v: 'c',
    name: 'Ink Night',
    tagline: 'The same system inverted onto ink. Works as a full dark theme, or just for Contact and the footer.',
    notes: [
      'Nav: smoked glass capsule on ink',
      'Hover: light outlined oval at 70%',
      'Cursor: soft orange glow with a paper dot, ring on links'
    ]
  }
]

/* ------------------------------ Cursor ------------------------------ */

const DOT_SPRING = { stiffness: 900, damping: 50, mass: 0.3 }
const TRAIL_SPRING = { stiffness: 180, damping: 22, mass: 0.6 }

function CursorZone({ v, className, style, children }: { v: Variant; className?: string; style?: CSSProperties; children: ReactNode }) {
  const ref = useRef< HTMLDivElement >(null)
  const [enabled, setEnabled] = useState(false)
  const [hot, setHot] = useState(false)
  const [inside, setInside] = useState(false)
  const x = useMotionValue(-200)
  const y = useMotionValue(-200)
  const dotX = useSpring(x, DOT_SPRING)
  const dotY = useSpring(y, DOT_SPRING)
  const trailX = useSpring(x, TRAIL_SPRING)
  const trailY = useSpring(y, TRAIL_SPRING)

  // The custom cursor only replaces the system one for a mouse or trackpad
  useEffect(() => {
    setEnabled(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const handleMove = (event: ReactPointerEvent< HTMLDivElement >) => {
    const rect = ref.current?.getBoundingClientRect()

    if (!rect) return

    x.set(event.clientX - rect.left)
    y.set(event.clientY - rect.top)
    setHot(event.target instanceof Element && !!event.target.closest('a, button'))
  }

  return (
    <div
      ref={ref}
      className={cn('sr-stage', enabled && 'sr-has-cursor', className)}
      style={style}
      onPointerMove={handleMove}
      onPointerEnter={() => setInside(true)}
      onPointerLeave={() => setInside(false)}
    >
      {children}

      {enabled && (
        <div aria-hidden className='pointer-events-none absolute inset-0 z-50' style={{ opacity: inside ? 1 : 0 }}>
          {v === 'c' && (
            <motion.div className='absolute top-0 left-0' style={{ x: trailX, y: trailY }}>
              <div
                className='absolute -top-[150px] -left-[150px] size-[300px] rounded-full'
                style={{ background: 'radial-gradient(circle, rgb(255 72 41 / 0.32), transparent 65%)' }}
              />
            </motion.div>
          )}

          <motion.div className='absolute top-0 left-0' style={{ x: trailX, y: trailY }}>
            <motion.div
              className={cn(
                'absolute -top-8 -left-8 size-16 rounded-full transition-[border-color,background-color] duration-300',
                v === 'a' && (hot ? 'glass-a border-[1.5px]! border-[var(--accent)]!' : 'border-[1.5px] border-[rgb(23_20_18/0.35)]'),
                v === 'b' && 'glass-b',
                v === 'c' && (hot ? 'border-[1.5px] border-[var(--accent)]' : 'border-[1.5px] border-transparent')
              )}
              animate={{ scale: v === 'b' ? (hot ? 1.25 : 0.7) : hot ? 1 : 0.55 }}
              transition={{ duration: 0.35, ease: EASE }}
            />
          </motion.div>

          <motion.div className='absolute top-0 left-0' style={{ x: dotX, y: dotY }}>
            <motion.div
              className={cn(
                'absolute -top-[5px] -left-[5px] size-[10px] rounded-full',
                v === 'c' ? 'bg-[var(--page)]' : 'bg-[var(--accent)] ring-2 ring-[var(--page)]'
              )}
              animate={{ scale: hot ? 0.5 : 1 }}
              transition={{ duration: 0.25, ease: EASE }}
            />
          </motion.div>
        </div>
      )}
    </div>
  )
}

/* ------------------------------ Buttons ------------------------------ */

function ArrowButton({ v, label, className }: { v: Variant; label: string; className?: string }) {
  const dark = v === 'c'

  return (
    <a
      href='#'
      onClick={event => event.preventDefault()}
      className={cn(
        'sr-btn sr-btn-flood',
        `glass-${v}`,
        dark ? 'sr-outline-light text-[var(--page)]' : 'sr-outline text-[var(--ink)]',
        className
      )}
      style={{ '--flood': dark ? 'var(--accent)' : 'var(--ink)' } as CSSProperties}
    >
      {label}
      <span className='sr-btn-disc' style={dark ? { background: 'var(--page)', color: 'var(--ink)' } : undefined}>
        <ArrowUpRight strokeWidth={2.2} />
        <ArrowUpRight strokeWidth={2.2} />
      </span>
    </a>
  )
}

function GlassButton({ v, label }: { v: Variant; label: string }) {
  return (
    <button
      type='button'
      className={cn('sr-btn sr-btn-plain sr-btn-lift', `glass-${v}`, v === 'c' ? 'text-[var(--page)]' : 'text-[var(--ink)]')}
    >
      {label}
    </button>
  )
}

function SolidButton({ label }: { label: string }) {
  return (
    <button type='button' className='sr-btn sr-btn-plain sr-btn-lift bg-[var(--accent)] text-white shadow-[0_10px_24px_-10px_rgb(255_72_41/0.7)]'>
      <Download className='size-4' strokeWidth={2.2} />
      {label}
    </button>
  )
}

function IconButton({ v, label, children }: { v: Variant; label: string; children: ReactNode }) {
  return (
    <button
      type='button'
      aria-label={label}
      className={cn(
        'sr-btn-lift grid size-12 place-items-center rounded-full transition-transform duration-300',
        `glass-${v}`,
        v === 'c' ? 'text-[var(--page)]' : 'text-[var(--ink)]'
      )}
    >
      {children}
    </button>
  )
}

// LinkedIn and GitHub marks drawn inline: lucide no longer ships brand icons
function LinkedInMark() {
  return (
    <svg viewBox='0 0 24 24' className='size-[18px]' fill='currentColor' aria-hidden>
      <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v6.35h-4v-5.63c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.73h-4v-11Z' />
    </svg>
  )
}

function GitHubMark() {
  return (
    <svg viewBox='0 0 24 24' className='size-[18px]' fill='currentColor' aria-hidden>
      <path d='M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' />
    </svg>
  )
}

/* ------------------------------ Navigation ------------------------------ */

function NavItem({ v, label, current, onHover }: { v: Variant; label: string; current: string; onHover: (label: string) => void }) {
  const dark = v === 'c'
  const active = label === ACTIVE

  return (
    <li>
      <a
        href='#'
        onClick={event => event.preventDefault()}
        onPointerEnter={() => onHover(label)}
        onFocus={() => onHover(label)}
        className={cn(
          'sr-nav-link isolate',
          active ? 'text-[var(--accent)]' : dark ? 'text-[var(--page)]' : 'text-[var(--ink)]'
        )}
      >
        {current === label && (
          <motion.span
            layoutId={`oval-${v}`}
            className={cn('sr-oval', `sr-oval-${v}`)}
            transition={{ type: 'spring', stiffness: 420, damping: 34, mass: 0.8 }}
          />
        )}
        {active && <span aria-hidden className='size-1.5 rounded-full bg-[var(--accent)]' />}
        {label}
      </a>
    </li>
  )
}

function GlassNav({ v }: { v: Variant }) {
  const [hovered, setHovered] = useState< string | null >(null)
  const current = hovered ?? ACTIVE
  const capsule = v !== 'a'

  return (
    <>
      {/* Laptop and iPad landscape: links mirror around the wordmark, Contact on the right edge */}
      <nav
        aria-label='Main'
        className={cn(
          'relative z-20 hidden grid-cols-[1fr_auto_1fr] items-center @4xl:grid',
          capsule ? `glass-${v} rounded-full py-2 pr-2 pl-4` : 'py-1'
        )}
        onPointerLeave={() => setHovered(null)}
      >
        <ul className='flex justify-end gap-1'>
          {NAV_LEFT.map(label => (
            <NavItem key={label} v={v} label={label} current={current} onHover={setHovered} />
          ))}
        </ul>
        <a href='#' onClick={event => event.preventDefault()} className='sr-display px-7 text-[30px] tracking-[-0.045em] text-[var(--accent)]'>
          Abhishek
        </a>
        <div className='flex items-center justify-between gap-4'>
          <ul className='flex gap-1'>
            {NAV_RIGHT.map(label => (
              <NavItem key={label} v={v} label={label} current={current} onHover={setHovered} />
            ))}
          </ul>
          <ArrowButton v={v} label='Contact' />
        </div>
      </nav>

      {/* Below that width the nav folds into a glass pill */}
      <div className={cn('relative z-20 flex items-center justify-between rounded-full py-1.5 pr-1.5 pl-5 @4xl:hidden', `glass-${v}`)}>
        <span className='sr-display text-[24px] tracking-[-0.045em] text-[var(--accent)]'>Abhishek</span>
        <span className={cn('grid size-11 place-items-center rounded-full bg-[var(--accent)] text-white')}>
          <Menu className='size-5' />
        </span>
      </div>
    </>
  )
}

/* ------------------------------ Hero ------------------------------ */

// The heading watches the viewport; each line, hidden below its own mask, follows by variant
const LINE_VARIANTS = {
  hidden: { y: '105%' },
  shown: (delay: number) => ({ y: '0%', transition: { duration: 1.1, delay, ease: EASE } })
}

function NameLine({ text, className, delay }: { text: string; className: string; delay: number }) {
  return (
    <span className={cn('block overflow-hidden pb-[0.04em]', className)}>
      <motion.span className='block' variants={LINE_VARIANTS} custom={delay}>
        {text}
      </motion.span>
    </span>
  )
}

function PortraitPlaceholder({ v, className }: { v: Variant; className?: string }) {
  const dark = v === 'c'
  const id = `sr-portrait-${v}`

  return (
    <svg viewBox='0 0 300 420' className={className} role='img' aria-label='Portrait placeholder'>
      <defs>
        <linearGradient id={id} x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor={dark ? '#5a514b' : '#2b2522'} />
          <stop offset='1' stopColor={dark ? '#3a332f' : '#171412'} />
        </linearGradient>
      </defs>
      <circle cx='150' cy='112' r='64' fill={`url(#${id})`} />
      <path d='M128 168h44v52h-44z' fill={`url(#${id})`} />
      <path d='M20 420c0-120 52-198 130-204 78 6 130 84 130 204Z' fill={`url(#${id})`} />
      <path d='M150 216l-26 70 26 134 26-134Z' fill={dark ? '#26211e' : '#0d0b0a'} opacity='0.6' />
      <text x='150' y='330' textAnchor='middle' fontSize='13' letterSpacing='3' fill='#f6f4f0' opacity='0.55' fontFamily='IBM Plex Mono, monospace'>
        YOUR PHOTO
      </text>
    </svg>
  )
}

function HeroStage({ v }: { v: Variant }) {
  const dark = v === 'c'

  return (
    <CursorZone
      v={v}
      className='px-[4cqw] pt-5 pb-[5cqw] @4xl:pt-6'
      style={{ background: dark ? 'var(--ink)' : 'var(--page)', border: dark ? 'none' : '1px solid rgb(23 20 18 / 0.08)' }}
    >
      {v === 'b' && (
        <>
          <div className='sr-blob -top-24 left-[8%] size-[380px] bg-[#ffb59f] opacity-70' />
          <div className='sr-blob top-[30%] right-[4%] size-[420px] bg-[#ff4829] opacity-25' />
          <div className='sr-blob bottom-[-120px] left-[35%] size-[360px] bg-[#f8dccb] opacity-80' />
        </>
      )}
      {v === 'c' && <div className='sr-blob -top-32 right-[10%] size-[420px] bg-[#ff4829] opacity-20' />}

      <GlassNav v={v} />

      <div className='relative mt-[6cqw] @4xl:mt-[3.5cqw]'>
        <motion.h2
          className='sr-display relative z-0 text-[16.6cqw] tracking-[-0.035em]'
          initial='hidden'
          whileInView='shown'
          viewport={{ once: true, amount: 0.3 }}
        >
          <span className='sr-only'>Abhishek Bichala</span>
          <NameLine text='Abhishek' className='text-[var(--accent)]' delay={0.05} />
          <NameLine text='Bichala' className={dark ? 'text-[var(--page)]' : 'text-[var(--ink)]'} delay={0.2} />
        </motion.h2>

        <PortraitPlaceholder
          v={v}
          className='pointer-events-none absolute right-[2cqw] bottom-[-5cqw] z-10 h-[118%] w-auto @4xl:right-[10cqw]'
        />
      </div>

      <div className='relative z-20 mt-[4cqw] grid max-w-[440px] gap-5'>
        <p className={cn('sr-eyebrow flex flex-wrap gap-x-2', dark ? 'text-[var(--page)]' : 'text-[var(--ink)]')}>
          Senior Software Engineer <span className='text-[var(--accent)]'>/</span> Full Stack <span className='text-[var(--accent)]'>/</span> Freelancer
        </p>
        <p className={cn('text-[22px] leading-[1.15] font-medium @4xl:text-[26px]', dark ? 'text-[var(--page)]' : 'text-[var(--ink)]')}>
          I build software people enjoy using, and help others ship theirs.
        </p>
        <div className='flex flex-wrap gap-3'>
          <ArrowButton v={v} label="Let's talk" />
          <GlassButton v={v} label='View work' />
        </div>
      </div>
    </CursorZone>
  )
}

/* ------------------------------ Controls and phone ------------------------------ */

function ControlsPanel({ v }: { v: Variant }) {
  const dark = v === 'c'

  return (
    <CursorZone
      v={v}
      className='flex flex-col justify-between gap-8 p-6 @lg:p-8'
      style={{
        background: dark ? 'var(--ink)' : v === 'b' ? 'linear-gradient(135deg, #f8dccb, #f6f4f0 55%, #ffd2c4)' : 'var(--paper)'
      }}
    >
      <div className='grid gap-6'>
        <p className={cn('sr-eyebrow', dark ? 'text-[var(--page)]/60' : 'text-[var(--muted)]')}>Buttons, hover them</p>
        <div className='flex flex-wrap gap-3'>
          <ArrowButton v={v} label='Contact' />
          <GlassButton v={v} label='Freelance' />
          <SolidButton label='Résumé' />
        </div>
        <div className='flex flex-wrap gap-3'>
          <IconButton v={v} label='Email'>
            <Mail className='size-[18px]' />
          </IconButton>
          <IconButton v={v} label='Phone'>
            <Phone className='size-[18px]' />
          </IconButton>
          <IconButton v={v} label='LinkedIn'>
            <LinkedInMark />
          </IconButton>
          <IconButton v={v} label='GitHub'>
            <GitHubMark />
          </IconButton>
        </div>
      </div>

      <div className='grid gap-3'>
        <p className={cn('sr-eyebrow', dark ? 'text-[var(--page)]/60' : 'text-[var(--muted)]')}>Type</p>
        <p className={cn('sr-display text-[44px]', dark ? 'text-[var(--page)]' : 'text-[var(--ink)]')}>Inter Black</p>
        <p className={cn('text-[17px] leading-relaxed', dark ? 'text-[var(--page)]/75' : 'text-[var(--muted)]')}>
          Figtree for reading. Calm, warm, and easy on long paragraphs about the work.
        </p>
        <p className='sr-mono text-[14px] text-[var(--accent)]'>{'// IBM Plex Mono for code & details'}</p>
      </div>
    </CursorZone>
  )
}

function PhonePreview({ v }: { v: Variant }) {
  const [open, setOpen] = useState(false)
  const dark = v === 'c'
  const text = dark ? 'text-[var(--page)]' : 'text-[var(--ink)]'

  return (
    <div className='sr-phone relative mx-auto' style={{ background: dark ? 'var(--ink)' : 'var(--page)' }}>
      {v === 'b' && <div className='sr-blob -top-10 -left-10 size-[220px] bg-[#ffb59f] opacity-70' />}

      <div className='relative h-full p-[5cqw]'>
        <div className={cn('relative z-20 flex items-center justify-between rounded-full py-1 pr-1 pl-[5cqw]', `glass-${v}`)}>
          <span className='sr-display text-[7.5cqw] tracking-[-0.045em] text-[var(--accent)]'>Abhishek</span>
          <button
            type='button'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(value => !value)}
            className='grid size-11 cursor-pointer place-items-center rounded-full bg-[var(--accent)] text-white'
          >
            {open ? <X className='size-5' /> : <Menu className='size-5' />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.ul
              className={cn('absolute inset-x-[5cqw] top-[22cqw] z-10 grid gap-1 rounded-[26px] p-3', `glass-${v}`)}
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
            >
              {[...NAV_LEFT, ...NAV_RIGHT, 'Contact'].map(label => (
                <li key={label}>
                  <a
                    href='#'
                    onClick={event => event.preventDefault()}
                    className={cn(
                      'flex min-h-11 items-center justify-between rounded-full px-4 text-[15px] font-medium tracking-[0.06em] uppercase',
                      label === ACTIVE ? 'text-[var(--accent)]' : text
                    )}
                  >
                    {label}
                    <ArrowUpRight className='size-4 opacity-50' />
                  </a>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <h3 className='sr-display mt-[12cqw] text-[16.6cqw] tracking-[-0.035em]'>
          <span className='block text-[var(--accent)]'>Abhishek</span>
          <span className={cn('block', text)}>Bichala</span>
        </h3>
        <p className={cn('sr-eyebrow mt-[6cqw] text-[10px]', text)}>Senior Software Engineer</p>
        <p className={cn('mt-[3cqw] text-[16px] leading-[1.2] font-medium', text)}>I build software people enjoy using.</p>
        <PortraitPlaceholder v={v} className='absolute right-[5cqw] bottom-0 h-[44%] w-auto' />
      </div>
    </div>
  )
}

/* ------------------------------ Page ------------------------------ */

const SWATCHES = [
  { name: 'Accent', hex: '#FF4829', use: 'First name, CTAs, cursor' },
  { name: 'Ink', hex: '#171412', use: 'Last name, text' },
  { name: 'Page', hex: '#F6F4F0', use: 'Background' },
  { name: 'Paper', hex: '#EFE9DF', use: 'Cards, panels' },
  { name: 'Muted', hex: '#77716E', use: 'Secondary text' }
]

export default function StylesPage() {
  return (
    <MotionConfig reducedMotion='user'>
      <main className='sr-root min-h-screen pb-24'>
        {/* The lens the Molten Glass material refracts through */}
        <svg width='0' height='0' aria-hidden className='absolute'>
          <filter id='sr-liquid' x='0' y='0' width='100%' height='100%'>
            <feTurbulence type='fractalNoise' baseFrequency='0.008 0.014' numOctaves='2' seed='7' result='noise' />
            <feGaussianBlur in='noise' stdDeviation='2' result='soft' />
            <feDisplacementMap in='SourceGraphic' in2='soft' scale='40' xChannelSelector='R' yChannelSelector='G' />
          </filter>
        </svg>

        <header className='mx-auto grid max-w-[1320px] gap-8 px-4 pt-14 pb-10 md:px-8'>
          <p className='sr-eyebrow text-[var(--muted)]'>Portfolio · style review</p>
          <h1 className='sr-display text-[clamp(44px,9vw,120px)] tracking-[-0.035em]'>
            <span className='text-[var(--accent)]'>Three</span> directions
          </h1>
          <p className='max-w-[620px] text-[18px] leading-relaxed text-[var(--muted)]'>
            Same palette and type, three takes on the liquid glass. Move your mouse over each stage to try its cursor, hover the
            nav to see the oval glide, and open the phone menu.
          </p>

          <ul className='grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5'>
            {SWATCHES.map(swatch => (
              <li key={swatch.hex} className='rounded-2xl border border-[rgb(23_20_18/0.08)] bg-white/50 p-3'>
                <span className='block h-14 rounded-xl border border-[rgb(23_20_18/0.08)]' style={{ background: swatch.hex }} />
                <span className='mt-3 block text-[14px] font-semibold'>{swatch.name}</span>
                <span className='sr-mono block text-[12px] text-[var(--muted)]'>{swatch.hex}</span>
                <span className='block text-[12px] text-[var(--muted)]'>{swatch.use}</span>
              </li>
            ))}
          </ul>
        </header>

        {DIRECTIONS.map((direction, index) => (
          <section key={direction.v} aria-labelledby={`dir-${direction.v}`} className='mx-auto grid max-w-[1320px] gap-6 px-4 pt-16 md:px-8'>
            <div className='grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:items-end'>
              <div>
                <p className='sr-eyebrow text-[var(--accent)]'>Direction {String.fromCharCode(65 + index)}</p>
                <h2 id={`dir-${direction.v}`} className='sr-display mt-2 text-[clamp(36px,6vw,72px)] tracking-[-0.03em]'>
                  {direction.name}
                </h2>
                <p className='mt-3 max-w-[560px] text-[17px] leading-relaxed text-[var(--muted)]'>{direction.tagline}</p>
              </div>
              <ul className='grid gap-2 text-[15px]'>
                {direction.notes.map(note => (
                  <li key={note} className='flex gap-3'>
                    <span aria-hidden className='mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]' />
                    {note}
                  </li>
                ))}
              </ul>
            </div>

            <HeroStage v={direction.v} />

            <div className='grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto]'>
              <ControlsPanel v={direction.v} />
              <PhonePreview v={direction.v} />
            </div>
          </section>
        ))}
      </main>
    </MotionConfig>
  )
}
