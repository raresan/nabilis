'use client'

import { motion } from 'motion/react'

import NextImage from '@/components/core/NextImage'

import { fadeUp } from '@/motion/animations'

import type { IAbout } from './AboutTypes'

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
      </div>
    </section>
  )
}

export default About
