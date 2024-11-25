// import clsx from 'clsx'

// import type { IHero } from '@/components/sections/Hero/HeroTypes'

import s from '@/components/sections/Hero/Hero.module.scss'

import Social from '@/components/ui/Social'

import type { IHero } from './HeroTypes'

const Hero = ({ data, social }: IHero) => {
  const { title = 'Título', buttonText = 'Botão' } = data || {}

  return (
    <>
      <main className={s.hero}>
        <video autoPlay loop muted className={s.video}>
          <source src="/videos/tattoo.mp4" type="video/mp4" />
        </video>

        <div className={s.content}>
          <h1 className={s.title}>{title}</h1>

          <button className={s.button}>{buttonText}</button>
        </div>

        <aside className={s.social}>
          <Social data={social} />
        </aside>
      </main>
    </>
  )
}

export default Hero
