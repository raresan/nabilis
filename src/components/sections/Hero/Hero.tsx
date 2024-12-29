'use client'

import Link from 'next/link'

import Social from '@/components/ui/Social'

import type { IHero } from './HeroTypes'

import s from './Hero.module.scss'

const Hero = ({ data, social }: IHero) => {
  const { title = 'Título', buttonText = 'Botão' } = data || {}

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const target = event.currentTarget.href.split('#')[1]
    const element = document.getElementById(target)

    console.log(target, element)

    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <main className={s.hero}>
      <video autoPlay loop muted className={s.video}>
        <source src="/videos/tattoo.mp4" type="video/mp4" />
      </video>

      <div className={s.content}>
        <h1 className={s.title}>{title}</h1>

        <Link href="/#tattoos" className={s.link} onClick={onClick}>
          {buttonText}
        </Link>
      </div>

      <aside className={s.social}>
        <Social data={social} />
      </aside>
    </main>
  )
}

export default Hero
