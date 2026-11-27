import Image from 'next/image'
import { cn } from '@/lib/utils'
import { PROFILE } from './data'

/**
 * The cut-out portrait. Until PROFILE.portrait points at a real image in public/, a drawn stand-in holds its place
 * with the same proportions (1072×1336).
 */
export function Portrait({ className, priority = false }: { className?: string; priority?: boolean }) {
  if (PROFILE.portrait) {
    return (
      <Image
        src={PROFILE.portrait}
        alt={PROFILE.portraitAlt}
        width={PROFILE.portraitWidth}
        height={PROFILE.portraitHeight}
        priority={priority}
        className={cn('h-full w-auto object-contain object-bottom', className)}
      />
    )
  }

  return (
    <svg viewBox='0 0 1072 1336' className={cn('h-full w-auto', className)} role='img' aria-label='Portrait placeholder'>
      <defs>
        <linearGradient id='portrait-coat' x1='0' y1='0' x2='0' y2='1'>
          <stop offset='0' stopColor='#2b2522' />
          <stop offset='1' stopColor='#171412' />
        </linearGradient>
        <linearGradient id='portrait-skin' x1='0' y1='0' x2='1' y2='1'>
          <stop offset='0' stopColor='#3a312c' />
          <stop offset='1' stopColor='#221c19' />
        </linearGradient>
        <radialGradient id='portrait-rim' cx='0.3' cy='0.2' r='0.8'>
          <stop offset='0' stopColor='#ff4829' stopOpacity='0.35' />
          <stop offset='1' stopColor='#ff4829' stopOpacity='0' />
        </radialGradient>
      </defs>
      {/* Head and neck */}
      <ellipse cx='560' cy='330' rx='175' ry='205' fill='url(#portrait-skin)' />
      <path d='M470 500h170v150H470z' fill='url(#portrait-skin)' />
      {/* Coat and shoulders */}
      <path d='M60 1336c0-330 140-600 470-640 50 0 90 0 130 6 290 50 412 300 412 634Z' fill='url(#portrait-coat)' />
      {/* Collar */}
      <path d='M450 630l105 120 105-120 60 70-165 250-165-250Z' fill='#0d0b0a' opacity='0.75' />
      <path d='M60 1336c0-330 140-600 470-640 50 0 90 0 130 6 290 50 412 300 412 634Z' fill='url(#portrait-rim)' />
      <text x='560' y='1120' textAnchor='middle' fontSize='34' letterSpacing='10' fill='#f6f4f0' opacity='0.5' fontFamily='IBM Plex Mono, monospace'>
        YOUR PHOTO
      </text>
    </svg>
  )
}
