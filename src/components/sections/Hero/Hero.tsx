// import clsx from 'clsx'

// import type { IHero } from '@/components/sections/Hero/HeroTypes'

import s from '@/components/sections/Hero/Hero.module.scss'

import Social from '@/components/ui/Social'

import type { IHero } from './HeroTypes'

const Hero = ({ data }: IHero) => {
  const { title = 'Título', buttonText = 'Botão' } = data || {}

  return (
    <>
      <main className={s.hero}>
        <h1>{title}</h1>

        <button>{buttonText}</button>

        <aside className={s.social}>
          <Social />
        </aside>
      </main>
    </>
  )
}

export default Hero
