'use client'

import { motion } from 'motion/react'
import Image from 'next/image'

import NextImage from '@/components/core/NextImage'

import { fadeUp } from '@/motion/animations'

import type { IAbout } from './AboutTypes'

import cloudBottom from '@/assets/images/about-cloud-bottom.png'
import cloudLeft from '@/assets/images/about-cloud-left.png'

import s from './About.module.scss'

const About = ({ data }: IAbout) => {
  const { title = 'Título', content = 'Conteúdo', photo } = data || {}

  return (
    <section className={s.about} id="sobre-mim">
      <div className={s.text}>
        <motion.h2
          className={s.title}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp()}
          viewport={{ once: true }}
        >
          {title}
        </motion.h2>

        <motion.p
          className={s.content}
          initial="hidden"
          whileInView="visible"
          variants={fadeUp({ delay: 0.4, y: '0%' })}
          viewport={{ once: true }}
        >
          {content}
        </motion.p>
      </div>

      <div className={s.imageWrapper}>
        <NextImage
          image={photo}
          alt={photo?.alt || ''}
          fill
          className={s.image}
        />

        <Image src={cloudBottom} alt="Cloud bottom" className={s.cloudBottom} />
        <Image src={cloudBottom} alt="Cloud top" className={s.cloudTop} />
        <Image src={cloudLeft} alt="Cloud left" className={s.cloudLeft} />
      </div>
    </section>
  )
}

export default About
