// import clsx from 'clsx'

// import type { IHero } from '@/components/sections/Hero/HeroTypes'

import s from '@/components/sections/Hero/Hero.module.scss'

import Social from '@/components/ui/Social'

const Hero = () => {
  return (
    <>
      <main className={s.hero}>
        <h1>Banner com vídeo de fundo</h1>

        <aside className={s.social}>
          <Social />
        </aside>
      </main>
    </>
  )
}

export default Hero
