import { Explore } from '@/components/portfolio/explore'
import { HomeHero } from '@/components/portfolio/home-hero'
import { SiteFooter } from '@/components/portfolio/site-footer'
import { TechStack } from '@/components/portfolio/tech-stack'

export default function HomePage() {
  return (
    <>
      <main>
        <HomeHero />
        <div className='mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12'>
          <TechStack
            title={
              <>
                Tech <span className='text-ember'>stack</span>
              </>
            }
            intro='Six years of building with Java, Spring Boot, Kafka and React, grouped the way I use them day to day.'
          />
        </div>
        <Explore />
      </main>
      <SiteFooter />
    </>
  )
}
