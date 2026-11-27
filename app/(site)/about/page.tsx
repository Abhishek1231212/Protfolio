import type { Metadata } from 'next'
import { ArrowButton } from '@/components/portfolio/buttons'
import { ABOUT } from '@/components/portfolio/data'
import { Portrait } from '@/components/portfolio/portrait'
import { CountUp, PageHeader, Reveal, WordReveal } from '@/components/portfolio/reveal'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { TechStack } from '@/components/portfolio/tech-stack'

export const metadata: Metadata = {
  title: 'About — Abhishek Bichala',
  description: 'Senior Software Engineer in Hyderabad. Who I am, how I work, and what I care about.'
}

export default function AboutPage() {
  return (
    <>
      <main id='main'>
        <div className='relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12'>
          <div aria-hidden className='blob -top-20 right-[10%] size-[420px] bg-ember-soft opacity-50' />
          <PageHeader
            index='01'
            eyebrow='About me'
            title={['Nice to', 'meet you']}
            intro='A little about who I am, how I like to work, and why I still enjoy this job after six years.'
          />

          {/* The statement lights up as you read it */}
          <section
            aria-labelledby='in-short-title'
            className='grid gap-6 border-t border-ink/15 py-16 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:py-24'
          >
            <Reveal className='flex items-start gap-3 lg:pt-2'>
              <span aria-hidden className='font-serif text-[56px] leading-[0.6] text-ember italic'>
                &ldquo;
              </span>
              <h2 id='in-short-title' className='eyebrow text-ember'>
                In short
              </h2>
            </Reveal>
            <WordReveal
              text={ABOUT.statement}
              className='max-w-[980px] font-serif text-[clamp(24px,2.7vw,38px)] leading-[1.3] tracking-[-0.005em] text-ink'
            />
          </section>

          <section aria-labelledby='story-title' className='grid gap-12 border-t border-ink/15 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-20 lg:py-24'>
            <div className='grid content-start gap-8'>
              <Reveal>
                <h2 id='story-title' className='eyebrow text-ember'>
                  The longer version
                </h2>
              </Reveal>
              {ABOUT.story.map((paragraph, index) => (
                <Reveal key={paragraph} delay={index * 0.08}>
                  <p className='font-serif text-[clamp(21px,1.9vw,27px)] leading-[1.45] text-ink/85'>{paragraph}</p>
                </Reveal>
              ))}
              <Reveal delay={0.2} className='flex flex-wrap gap-3 pt-2'>
                <ArrowButton href='/experience' label='See my experience' />
                <ArrowButton href='/contact' label='Say hello' />
              </Reveal>
            </div>

            {/* Personal details, as a paper card with the portrait peeking over it */}
            <Reveal className='lg:sticky lg:top-28 lg:self-start'>
              <div className='relative overflow-hidden rounded-[32px] bg-paper p-6 sm:p-8'>
                <div aria-hidden className='blob -right-20 -bottom-24 size-[300px] bg-ember opacity-20' />
                <div className='relative mb-6 flex items-end justify-between gap-4'>
                  <h2 className='eyebrow text-stone'>Personal details</h2>
                  <div className='-mb-6 h-[150px] sm:h-[180px]'>
                    <Portrait />
                  </div>
                </div>
                <dl className='relative grid border-t border-ink/15'>
                  {ABOUT.details.map(detail => (
                    <div key={detail.label} className='grid grid-cols-[120px_1fr] gap-4 border-b border-ink/10 py-3.5 sm:grid-cols-[140px_1fr]'>
                      <dt className='text-[13px] font-semibold tracking-[0.12em] text-stone uppercase'>{detail.label}</dt>
                      <dd className='text-[16px] font-medium text-ink'>{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          </section>

          <section aria-label='In numbers' className='grid grid-cols-2 gap-x-6 gap-y-12 border-t border-ink/15 py-16 lg:grid-cols-4 lg:py-24'>
            {ABOUT.stats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 0.08} className='grid content-start gap-3'>
                <CountUp value={stat.value} suffix={stat.suffix} className='display text-[clamp(56px,8vw,112px)] text-ember' />
                <p className='max-w-[220px] text-[15px] leading-snug text-stone'>{stat.label}</p>
              </Reveal>
            ))}
          </section>

          <section aria-labelledby='values-title' className='border-t border-ink/15 py-16 lg:py-24'>
            <Reveal>
              <h2 id='values-title' className='display text-[clamp(40px,6vw,84px)]'>
                How I <span className='text-ember'>work</span>
              </h2>
            </Reveal>
            <ul className='mt-12 grid gap-5 md:grid-cols-3'>
              {ABOUT.values.map((value, index) => (
                <Reveal
                  key={value.title}
                  as='li'
                  delay={index * 0.1}
                  className='group grid h-full content-start gap-5 rounded-[28px] border border-ink/10 bg-white/40 p-7 transition-colors duration-500 hover:bg-ink hover:text-page'
                >
                  <span className='font-mono text-[13px] text-ember'>0{index + 1}</span>
                  <h3 className='text-[26px] leading-tight font-semibold tracking-[-0.01em]'>{value.title}</h3>
                  <p className='text-[16px] leading-relaxed text-stone transition-colors duration-500 group-hover:text-page/70'>{value.text}</p>
                </Reveal>
              ))}
            </ul>
          </section>

          <TechStack
            eyebrow='Tools I use'
            title={
              <>
                What I <span className='text-ember'>build with</span>
              </>
            }
          />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
