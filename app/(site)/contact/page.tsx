import type { Metadata } from 'next'
import { ArrowUpRight, Clock, Mail, MapPin, Phone } from 'lucide-react'
import { BrandIcon } from '@/components/portfolio/buttons'
import { CopyEmail } from '@/components/portfolio/copy-email'
import { CONTACT, PROFILE } from '@/components/portfolio/data'
import { PageHeader, Reveal } from '@/components/portfolio/reveal'
import { SiteFooter } from '@/components/portfolio/site-footer'

export const metadata: Metadata = {
  title: 'Contact — Abhishek Bichala',
  description: 'Email, phone, WhatsApp and social links for Abhishek Bichala.'
}

const METHODS = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: <Mail className='size-5' /> },
  { label: 'Phone', value: CONTACT.phone, href: CONTACT.phoneHref, icon: <Phone className='size-5' /> },
  { label: 'WhatsApp', value: 'Message me', href: CONTACT.whatsappHref, icon: <BrandIcon name='whatsapp' className='size-5' /> }
]

export default function ContactPage() {
  return (
    <>
      <main id='main'>
        <div className='relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12'>
          <div aria-hidden className='blob -top-24 right-[8%] size-[480px] bg-ember-soft opacity-55' />
          <PageHeader
            index='04'
            eyebrow='Contact'
            title={["Let's", 'talk']}
            intro="Have a project, a question, or just want to say hi? Pick whichever way suits you and I'll get back to you as soon as I can."
          />

          {/* The email, set large, since it is the main way in */}
          <section aria-label='Email' className='border-t border-ink/15 py-14 lg:py-20'>
            <Reveal className='grid gap-6'>
              <p className='eyebrow text-stone'>Write to me</p>
              <a
                href={`mailto:${CONTACT.email}`}
                data-cursor='Write'
                className='focus-ring group w-fit rounded-xl text-[clamp(28px,6.2vw,96px)] leading-[1] font-semibold tracking-[-0.03em] break-all text-ink transition-colors hover:text-ember'
              >
                {CONTACT.email}
                <span aria-hidden className='mt-2 block h-[3px] origin-left scale-x-0 bg-ember transition-transform duration-500 group-hover:scale-x-100' />
              </a>
              <div className='flex flex-wrap gap-3'>
                <CopyEmail email={CONTACT.email} />
              </div>
            </Reveal>
          </section>

          <section aria-label='Other ways to reach me' className='grid gap-5 border-t border-ink/15 py-14 md:grid-cols-3 lg:py-20'>
            {METHODS.map((method, index) => (
              <Reveal key={method.label} delay={index * 0.08}>
                <a
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noreferrer' : undefined}
                  className='glass focus-ring group flex h-full flex-col gap-10 rounded-[28px] p-6 transition-transform duration-500 hover:-translate-y-1.5 sm:p-7'
                >
                  <div className='flex items-start justify-between'>
                    <span className='grid size-12 place-items-center rounded-full bg-ember text-white'>{method.icon}</span>
                    <ArrowUpRight className='size-5 text-stone transition-transform duration-500 group-hover:rotate-45 group-hover:text-ember' />
                  </div>
                  <div>
                    <p className='eyebrow text-stone'>{method.label}</p>
                    <p className='mt-2 text-[20px] font-semibold break-words text-ink'>{method.value}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </section>

          <section aria-labelledby='socials-title' className='grid gap-12 border-t border-ink/15 py-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:gap-20 lg:py-20'>
            <div>
              <Reveal>
                <h2 id='socials-title' className='display text-[clamp(40px,6vw,84px)]'>
                  Find me <span className='text-ember'>online</span>
                </h2>
              </Reveal>
              <ul className='mt-10 border-t border-ink/15'>
                {CONTACT.socials.map((social, index) => (
                  <Reveal key={social.label} as='li' delay={index * 0.06} className='border-b border-ink/15'>
                    <a
                      href={social.href}
                      target='_blank'
                      rel='noreferrer'
                      className='focus-ring group relative isolate grid grid-cols-[auto_1fr_auto] items-center gap-5 overflow-hidden px-2 py-5 sm:px-4'
                    >
                      <span aria-hidden className='absolute inset-0 -z-10 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100' />
                      <span className='grid size-11 place-items-center rounded-full border border-ink/15 transition-colors duration-500 group-hover:border-ember group-hover:bg-ember group-hover:text-white'>
                        <BrandIcon name={social.icon} />
                      </span>
                      <span className='grid'>
                        <span className='text-[22px] font-semibold transition-colors duration-500 group-hover:text-page sm:text-[26px]'>{social.label}</span>
                        <span className='text-[14px] text-stone transition-colors duration-500 group-hover:text-page/60'>{social.handle}</span>
                      </span>
                      <ArrowUpRight className='size-5 transition-all duration-500 group-hover:rotate-45 group-hover:text-ember' />
                    </a>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={0.1} className='lg:sticky lg:top-32 lg:self-start'>
              <div className='relative grid gap-6 overflow-hidden rounded-[32px] bg-ink p-7 text-page sm:p-9'>
                <div aria-hidden className='blob -top-20 -right-16 size-[260px] bg-ember opacity-35' />
                <p className='relative flex items-center gap-2.5 text-[12px] font-semibold tracking-[0.18em] uppercase'>
                  <span className='live-dot relative size-2 rounded-full bg-ember text-ember' />
                  {PROFILE.availability}
                </p>
                <ul className='relative grid gap-4 text-[17px]'>
                  <li className='flex items-center gap-3'>
                    <MapPin className='size-5 text-ember' /> {PROFILE.location}
                  </li>
                  <li className='flex items-center gap-3'>
                    <Clock className='size-5 text-ember' /> India Standard Time (UTC+5:30)
                  </li>
                </ul>
                <p className='relative text-[15px] leading-relaxed text-page/65'>
                  For freelance work, a short note on what you need, your timeline and a rough budget helps me reply with a useful quote.
                </p>
              </div>
            </Reveal>
          </section>
        </div>
      </main>
      <SiteFooter showCta={false} />
    </>
  )
}
