'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import Social from '@/components/ui/Social'
import useScrollToSection from '@/hooks/useScrollToSection'
import { fadeUp } from '@/motion/animations'
import Swap from '@/components/ui/Swap'

import type { IHero } from './HeroTypes'

import s from './Hero.module.scss'

const Hero = ({ data, social }: IHero) => {
  const { title = 'Título', buttonText = 'Botão' } = data || {}
  const { scrollToSection } = useScrollToSection()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.href.split('#')[1]
    scrollToSection(target)
  }

  return (
    <main className={s.hero}>
      <video autoPlay loop muted className={s.video}>
        <source src='/videos/stars.mp4' type='video/mp4' />
      </video>

      <div className={s.content}>
        <motion.h1
          className={s.title}
          initial='hidden'
          whileInView='visible'
          variants={fadeUp()}
          viewport={{ once: true }}
        >
          {title}
        </motion.h1>

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={fadeUp({ delay: 0.2 })}
          viewport={{ once: true }}
        >
          <Link href='/#tattoos' className={s.link} onClick={handleClick}>
            <Swap absolute>{buttonText}</Swap>
          </Link>
        </motion.div>
      </div>

      <aside className={s.social}>
        <Social data={social} animationDelay={0.5} />
      </aside>
    </main>
  )
}

export default Hero
