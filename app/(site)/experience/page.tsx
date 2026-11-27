import type { Metadata } from 'next'
import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { ArrowButton } from '@/components/portfolio/buttons'
import { EDUCATION, EXPERIENCE, PROJECTS } from '@/components/portfolio/data'
import { PageHeader, Reveal } from '@/components/portfolio/reveal'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { TechStack } from '@/components/portfolio/tech-stack'
import { Timeline } from '@/components/portfolio/timeline'

export const metadata: Metadata = {
  title: 'Experience — Abhishek Bichala',
  description: 'Six years at Oracle, Grid Dynamics and EPAM building event-driven Java, Spring Boot and React systems.'
}

const SUMMARY = [
  { value: '6+', label: 'Years' },
  { value: `${EXPERIENCE.length}`, label: 'Companies' },
  { value: '~100', label: 'APIs at Oracle' }
]

export default function ExperiencePage() {
  return (
    <>
      <main id='main'>
        <div className='relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12'>
          <div aria-hidden className='blob -top-24 right-[6%] size-[460px] bg-ember-soft opacity-50' />
          <PageHeader
            index='02'
            eyebrow='Experience'
            title={['Six years', 'of shipping']}
            intro="From finance systems to e-commerce payments to enterprise marketing automation. Here's where I've worked and what I built there."
          />

          <section aria-labelledby='roles-title' className='grid gap-12 border-t border-ink/15 py-16 lg:grid-cols-[300px_minmax(0,1fr)] lg:gap-20 lg:py-24'>
            <div className='lg:sticky lg:top-32 lg:self-start'>
              <Reveal className='grid gap-8'>
                <h2 id='roles-title' className='eyebrow text-ember'>
                  Where I&apos;ve worked
                </h2>
                <dl className='grid grid-cols-3 gap-4 lg:grid-cols-1 lg:gap-6'>
                  {SUMMARY.map(item => (
                    <div key={item.label} className='grid gap-1'>
                      <dt className='order-2 text-[13px] font-semibold tracking-[0.14em] text-stone uppercase'>{item.label}</dt>
                      <dd className='display order-1 text-[clamp(40px,5vw,64px)]'>{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <div className='hidden lg:block'>
                  <ArrowButton href='/contact' label='Work with me' />
                </div>
              </Reveal>
            </div>

            <Timeline />
          </section>

          <section aria-label='Project and education' className='grid gap-5 border-t border-ink/15 py-16 md:grid-cols-2 lg:py-24'>
            {PROJECTS.map(project => (
              <Reveal key={project.title}>
                <a
                  href={project.href}
                  target='_blank'
                  rel='noreferrer'
                  data-cursor='GitHub'
                  className='group focus-ring relative grid h-full content-start gap-5 overflow-hidden rounded-[32px] bg-ink p-7 text-page sm:p-9'
                >
                  <div aria-hidden className='blob -top-24 -right-16 size-[280px] bg-ember opacity-35 transition-opacity duration-500 group-hover:opacity-60' />
                  <div className='relative flex items-start justify-between gap-6'>
                    <p className='eyebrow text-ember'>Side project</p>
                    <ArrowUpRight className='size-6 transition-transform duration-500 group-hover:rotate-45' />
                  </div>
                  <h2 className='display relative text-[clamp(32px,4vw,52px)]'>{project.title}</h2>
                  <p className='relative max-w-[460px] text-[17px] leading-relaxed text-page/70'>{project.text}</p>
                  <ul className='relative flex flex-wrap gap-2'>
                    {project.stack.map(tech => (
                      <li key={tech} className='glass-dark rounded-full px-3.5 py-1.5 text-[13px] font-medium'>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </a>
              </Reveal>
            ))}

            <Reveal delay={0.1}>
              <div className='relative grid h-full content-start gap-5 overflow-hidden rounded-[32px] bg-paper p-7 sm:p-9'>
                <div className='flex items-start justify-between gap-6'>
                  <p className='eyebrow text-stone'>Education</p>
                  <GraduationCap className='size-6 text-ember' />
                </div>
                <h2 className='display text-[clamp(32px,4vw,52px)]'>{EDUCATION.degree}</h2>
                <p className='text-[17px] leading-relaxed text-ink/80'>{EDUCATION.school}</p>
                <p className='flex flex-wrap gap-3 text-[15px] font-semibold'>
                  <span className='glass rounded-full px-3.5 py-1.5'>{EDUCATION.period}</span>
                  <span className='glass rounded-full px-3.5 py-1.5 text-ember'>{EDUCATION.note}</span>
                </p>
              </div>
            </Reveal>
          </section>

          <TechStack
            eyebrow='Technical skills'
            title={
              <>
                The <span className='text-ember'>toolbox</span>
              </>
            }
          />
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
