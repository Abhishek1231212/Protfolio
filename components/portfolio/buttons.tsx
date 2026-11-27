import Link from 'next/link'
import type { CSSProperties, ReactNode } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type Tone = 'light' | 'dark'

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href)

function SmartLink({ href, className, style, children, label }: { href: string; className: string; style?: CSSProperties; children: ReactNode; label?: string }) {
  if (isExternal(href)) {
    const newTab = href.startsWith('http')

    return (
      <a href={href} className={className} style={style} aria-label={label} target={newTab ? '_blank' : undefined} rel={newTab ? 'noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <Link href={href} className={className} style={style} aria-label={label}>
      {children}
    </Link>
  )
}

/** The signature button: a glass pill with an orange arrow disc; ink floods out of the disc on hover */
export function ArrowButton({ href, label, tone = 'light', className }: { href: string; label: string; tone?: Tone; className?: string }) {
  const dark = tone === 'dark'

  return (
    <SmartLink
      href={href}
      className={cn('btn btn-flood', dark ? 'glass-dark btn-outline-light text-page' : 'glass btn-outline text-ink', className)}
      style={{ '--flood': dark ? 'var(--color-ember)' : 'var(--color-ink)' } as CSSProperties}
    >
      {label}
      <span className='btn-disc' style={dark ? { background: 'var(--color-page)', color: 'var(--color-ink)' } : undefined}>
        <ArrowUpRight strokeWidth={2.2} aria-hidden />
        <ArrowUpRight strokeWidth={2.2} aria-hidden />
      </span>
    </SmartLink>
  )
}

export function GlassButton({ href, label, tone = 'light', icon, className }: { href: string; label: string; tone?: Tone; icon?: ReactNode; className?: string }) {
  return (
    <SmartLink
      href={href}
      className={cn('btn btn-plain lift', tone === 'dark' ? 'glass-dark text-page' : 'glass text-ink', className)}
    >
      {icon}
      {label}
    </SmartLink>
  )
}

export function IconButton({ href, label, tone = 'light', children }: { href: string; label: string; tone?: Tone; children: ReactNode }) {
  return (
    <SmartLink
      href={href}
      label={label}
      className={cn(
        'focus-ring lift grid size-12 shrink-0 place-items-center rounded-full transition-transform duration-300',
        tone === 'dark' ? 'glass-dark text-page' : 'glass text-ink'
      )}
    >
      {children}
    </SmartLink>
  )
}

/* Brand marks drawn inline: lucide no longer ships brand icons */
export type Brand = 'linkedin' | 'github' | 'instagram' | 'youtube' | 'x' | 'whatsapp'

export function BrandIcon({ name, className = 'size-[18px]' }: { name: Brand; className?: string }) {
  const paths: Record< Brand, ReactNode > = {
    linkedin: (
      <path d='M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11H3v-11Zm6.5 0h3.8v1.6h.06c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.77 2.65 4.77 6.1v6.35h-4v-5.63c0-1.34-.03-3.07-1.87-3.07-1.88 0-2.17 1.46-2.17 2.97v5.73h-4v-11Z' />
    ),
    github: (
      <path d='M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z' />
    ),
    instagram: (
      <path d='M12 7.3a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm4.9-8.98a1.1 1.1 0 1 0 0 2.2 1.1 1.1 0 0 0 0-2.2ZM12 3c-2.44 0-2.75.01-3.71.05-.96.05-1.62.2-2.19.42a4.4 4.4 0 0 0-1.6 1.04 4.4 4.4 0 0 0-1.03 1.6c-.23.57-.38 1.22-.42 2.18C3.01 9.25 3 9.56 3 12s.01 2.75.05 3.71c.05.96.2 1.62.42 2.19.23.6.54 1.1 1.04 1.6.5.5 1 .8 1.6 1.03.57.23 1.22.38 2.18.42.96.04 1.27.05 3.71.05s2.75-.01 3.71-.05c.96-.05 1.62-.2 2.19-.42a4.6 4.6 0 0 0 2.63-2.63c.23-.57.38-1.22.42-2.18.04-.96.05-1.27.05-3.71s-.01-2.75-.05-3.71c-.05-.96-.2-1.62-.42-2.19a4.4 4.4 0 0 0-1.04-1.6 4.4 4.4 0 0 0-1.6-1.03c-.57-.23-1.22-.38-2.18-.42C14.75 3.01 14.44 3 12 3Zm0 1.62c2.4 0 2.69.01 3.64.05.88.04 1.35.19 1.67.31.42.16.72.36 1.03.67.32.31.51.61.67 1.03.12.32.27.8.31 1.67.04.95.05 1.24.05 3.64s-.01 2.69-.05 3.64c-.04.88-.19 1.35-.31 1.67-.16.42-.36.72-.67 1.03-.31.32-.61.51-1.03.67-.32.12-.8.27-1.67.31-.95.04-1.24.05-3.64.05s-2.69-.01-3.64-.05c-.88-.04-1.35-.19-1.67-.31a2.8 2.8 0 0 1-1.03-.67 2.8 2.8 0 0 1-.67-1.03c-.12-.32-.27-.8-.31-1.67-.04-.95-.05-1.24-.05-3.64s.01-2.69.05-3.64c.04-.88.19-1.35.31-1.67.16-.42.36-.72.67-1.03.31-.32.61-.51 1.03-.67.32-.12.8-.27 1.67-.31.95-.04 1.24-.05 3.64-.05Z' />
    ),
    youtube: (
      <path d='M21.6 7.2a2.5 2.5 0 0 0-1.77-1.77C18.27 5 12 5 12 5s-6.27 0-7.83.43A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.77 1.77C5.73 19 12 19 12 19s6.27 0 7.83-.43a2.5 2.5 0 0 0 1.77-1.77A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z' />
    ),
    x: <path d='M17.75 3h3.07l-6.7 7.66L22 21h-6.17l-4.83-6.32L5.47 21H2.4l7.17-8.2L2 3h6.33l4.37 5.78L17.75 3Zm-1.08 16.2h1.7L7.4 4.73H5.58L16.67 19.2Z' />,
    whatsapp: (
      <path d='M12.04 2a9.9 9.9 0 0 0-8.5 14.97L2 22l5.17-1.5A9.92 9.92 0 1 0 12.04 2Zm0 18.1a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.07.89.9-2.99-.2-.31a8.2 8.2 0 1 1 6.86 3.74Zm4.5-6.14c-.25-.12-1.46-.72-1.69-.8-.23-.09-.39-.13-.56.12-.16.25-.64.8-.78.96-.15.17-.29.19-.54.06a6.7 6.7 0 0 1-1.98-1.22 7.4 7.4 0 0 1-1.37-1.71c-.14-.25 0-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.85-.2-.49-.4-.42-.56-.43h-.48a.92.92 0 0 0-.66.31 2.78 2.78 0 0 0-.87 2.07 4.83 4.83 0 0 0 1.01 2.57 11.06 11.06 0 0 0 4.24 3.74c.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.46-.6 1.66-1.17.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29Z' />
    )
  }

  return (
    <svg viewBox='0 0 24 24' className={className} fill='currentColor' aria-hidden>
      {paths[name]}
    </svg>
  )
}
