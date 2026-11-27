import Link from 'next/link'
import { Mail } from 'lucide-react'
import { ArrowButton, BrandIcon, IconButton } from './buttons'
import { BackToTop } from './back-to-top'
import { CONTACT, NAV, PROFILE } from './data'
import { MaskLines } from './reveal'

/** Every page ends on the same invitation, on ink, with the full name set large one last time */
export function SiteFooter({ showCta = true }: { showCta?: boolean }) {
  return (
    <footer className='relative overflow-hidden bg-ink text-page'>
      <div aria-hidden className='blob -top-40 right-[5%] size-[520px] bg-ember opacity-25' />
      <div aria-hidden className='blob bottom-[-200px] left-[-120px] size-[460px] bg-ember-soft opacity-15' />

      <div className='relative mx-auto max-w-[1440px] px-5 pt-20 pb-10 sm:px-8 lg:px-12 lg:pt-28'>
        {showCta && (
          <div className='grid gap-10 border-b border-page/15 pb-16 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end lg:pb-24'>
            <div>
              <p className='eyebrow text-ember'>Have something in mind?</p>
              <MaskLines
                as='h2'
                lines={["Let's build", 'it together']}
                className='mt-5 text-[clamp(44px,9vw,132px)]'
                lineClassNames={['text-page', 'text-ember']}
              />
            </div>
            <div className='flex flex-wrap gap-3'>
              <ArrowButton href={NAV.cta.href} label='Get in touch' tone='dark' />
              <ArrowButton href='/freelance' label='Get a quote' tone='dark' />
            </div>
          </div>
        )}

        <div className='grid gap-10 pt-12 md:grid-cols-[1.3fr_1fr_1fr]'>
          <div className='grid content-start gap-4'>
            <p className='display text-[34px] tracking-[-0.045em] text-ember'>{PROFILE.first}</p>
            <p className='max-w-[320px] text-[15px] leading-relaxed text-page/65'>
              {PROFILE.role} in {PROFILE.location}. Building reliable software by day, helping people ship by night.
            </p>
          </div>

          <nav aria-label='Footer' className='grid content-start gap-2'>
            <p className='eyebrow mb-2 text-page/45'>Pages</p>
            {[...NAV.left, ...NAV.right, NAV.cta].map(link => (
              <Link key={link.href} href={link.href} className='focus-ring w-fit rounded py-1 text-[16px] text-page/85 transition-colors hover:text-ember'>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='grid content-start gap-4'>
            <p className='eyebrow text-page/45'>Elsewhere</p>
            <div className='flex flex-wrap gap-3'>
              <IconButton href={`mailto:${CONTACT.email}`} label='Email' tone='dark'>
                <Mail className='size-[18px]' />
              </IconButton>
              {CONTACT.socials.map(social => (
                <IconButton key={social.label} href={social.href} label={social.label} tone='dark'>
                  <BrandIcon name={social.icon} />
                </IconButton>
              ))}
            </div>
          </div>
        </div>

        <div className='mt-16 flex flex-col items-start justify-between gap-6 border-t border-page/15 pt-8 text-[13px] text-page/50 sm:flex-row sm:items-center'>
          <p>
            © {new Date().getFullYear()} {PROFILE.first} {PROFILE.last}. Designed and built in Hyderabad.
          </p>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
