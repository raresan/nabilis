'use client'

import { motion } from 'motion/react'

import { fadeUp } from '@/motion/animations'
import useBreakpoint from '@/hooks/useBreakpoint'

import Project from './Project'

import type { IGallery } from './GalleryTypes'

import s from './Gallery.module.scss'

const Gallery = ({ projects }: IGallery) => {
  const isDesktop = useBreakpoint('desktop', 'above')

  return (
    <section className={s.gallery} id='portfolio'>
      <motion.h2
        className={s.title}
        initial='hidden'
        whileInView='visible'
        variants={fadeUp()}
        viewport={{ once: true }}
      >
        Portfólio
      </motion.h2>

      <div className={s.grid}>
        {projects?.map((project, index) => (
          <Project
            key={index}
            {...project}
            animationDelay={isDesktop ? (index % 3) * 0.2 : 0}
          />
        ))}
      </div>
    </section>
  )
}

export default Gallery
