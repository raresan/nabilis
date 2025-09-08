'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import useScrollToSection from '@/hooks/useScrollToSection'

import { fadeUp } from '@/motion/animations'

import Swap from '@/components/ui/Swap'
import Parallax from './Parallax'

import type { IHero } from './HeroTypes'

import s from './Hero.module.scss'

const Hero = ({ data }: IHero) => {
  const {
    title = 'Título',
    subtitle = 'Subtítulo',
    buttonText = 'Botão',
  } = data || {}
  const { scrollToSection } = useScrollToSection()

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.href.split('#')[1]
    scrollToSection(target)
  }

  return (
    <main className={s.hero} id='home'>
      <Parallax />

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

        <motion.h2
          className={s.subtitle}
          initial='hidden'
          whileInView='visible'
          variants={fadeUp({ delay: 0.2 })}
          viewport={{ once: true }}
        >
          {subtitle}
        </motion.h2>

        <motion.div
          initial='hidden'
          whileInView='visible'
          variants={fadeUp({ delay: 0.4 })}
          viewport={{ once: true }}
        >
          <Link href='/#portfolio' className={s.link} onClick={handleClick}>
            <Swap absolute>{buttonText}</Swap>
          </Link>
        </motion.div>
      </div>
    </main>
  )
}

export default Hero
