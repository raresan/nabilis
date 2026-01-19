'use client'

import Link from 'next/link'
import { motion } from 'motion/react'

import useScrollToSection from '@/hooks/useScrollToSection'

import { fadeUp } from '@/motion/animations'

import Swap from '@/components/ui/Swap'
import Parallax from '@/components/ui/Parallax'
import Stars from './Stars'

import cloud1 from '@/assets/images/hero-cloud-1.png'
import cloud2 from '@/assets/images/hero-cloud-2.png'
import cloud3 from '@/assets/images/hero-cloud-3.png'
import rays from '@/assets/images/rays.png'

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
      <Parallax
        rays={{ image: rays, className: s.rays }}
        clouds={[
          { image: cloud1, className: s.cloudFront, parallaxMultiplier: 1 },
          { image: cloud2, className: s.cloudMiddle, parallaxMultiplier: 2 },
          { image: cloud3, className: s.cloudBack, parallaxMultiplier: 4 },
        ]}
      />

      <Stars />

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
