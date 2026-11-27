import type { Metadata } from 'next'
import { ArrowButton, GlassButton } from '@/components/portfolio/buttons'
import { PROCESS, SERVICES } from '@/components/portfolio/data'
import { PageHeader, Reveal } from '@/components/portfolio/reveal'
import { ServiceCard } from '@/components/portfolio/service-card'
import { SiteFooter } from '@/components/portfolio/site-footer'

export const metadata: Metadata = {
  title: 'Freelance — Abhishek Bichala',
  description: 'Software projects, interview preparation, website and app design, content creation and UGC ads.'
}

export default function FreelancePage() {
  return (
    <>
      <main id='main'>
        <div className='relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12'>
          <div aria-hidden className='blob -top-24 right-[8%] size-[460px] bg-ember-soft opacity-55' />
          <PageHeader
            index='03'
            eyebrow='Freelance'
            title={["Let's make", 'something']}
            intro='Beyond my day job I take on a few projects at a time, across engineering, design and content. Tell me what you have in mind and I will come back with a clear quote.'
          />

          <section aria-labelledby='services-title' className='border-t border-ink/15 py-16 lg:py-24'>
            <div className='flex flex-wrap items-end justify-between gap-6'>
              <Reveal>
                <h2 id='services-title' className='display text-[clamp(40px,6vw,84px)]'>
                  What I <span className='text-ember'>offer</span>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <ArrowButton href='/contact' label='Get a quote' />
              </Reveal>
            </div>

            <ul className='mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3'>
              {SERVICES.map((service, index) => (
                <ServiceCard key={service.title} {...service} index={index} />
              ))}
            </ul>
          </section>

          <section aria-labelledby='process-title' className='border-t border-ink/15 py-16 lg:py-24'>
            <Reveal>
              <h2 id='process-title' className='display text-[clamp(40px,6vw,84px)]'>
                How it <span className='text-ember'>works</span>
              </h2>
            </Reveal>
            <ol className='mt-12 grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4'>
              {PROCESS.map((step, index) => (
                <Reveal key={step.step} as='li' delay={index * 0.1} className='grid content-start gap-4 border-t-2 border-ink pt-6'>
                  <span className='display text-[64px] text-ember'>{step.step}</span>
                  <h3 className='text-[26px] font-semibold tracking-[-0.01em]'>{step.title}</h3>
                  <p className='text-[16px] leading-relaxed text-stone'>{step.text}</p>
                </Reveal>
              ))}
            </ol>
          </section>

          <Reveal className='pb-24'>
            <section
              aria-labelledby='quote-title'
              className='relative isolate overflow-hidden rounded-[36px] border border-ink/10 px-6 py-14 text-center sm:px-12 lg:py-20'
            >
              <div aria-hidden className='blob -top-28 left-[10%] -z-10 size-[360px] bg-ember-soft opacity-70' />
              <div aria-hidden className='blob -right-10 -bottom-32 -z-10 size-[380px] bg-ember opacity-30' />
              <p className='eyebrow text-ember'>No prices, no packages</p>
              <h2 id='quote-title' className='display mx-auto mt-5 max-w-[900px] text-[clamp(40px,6.4vw,96px)]'>
                Every project is different
              </h2>
              <p className='mx-auto mt-6 max-w-[560px] text-[18px] leading-relaxed text-stone'>
                Share a few lines about what you need, your timeline and budget range, and I will reply with a scope and a quote.
              </p>
              <div className='mt-9 flex flex-wrap justify-center gap-3'>
                <ArrowButton href='/contact' label='Get a quote' />
                <GlassButton href='/experience' label='See my experience' />
              </div>
            </section>
          </Reveal>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
