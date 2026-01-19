'use client'

import { motion } from 'motion/react'

import { fadeUp } from '@/motion/animations'
import useBreakpoint from '@/hooks/useBreakpoint'

import Parallax from '@/components/ui/Parallax'
import Project from './Project'

import cloud1 from '@/assets/images/work-cloud-1.png'
import cloud2 from '@/assets/images/work-cloud-2.png'
import cloud3 from '@/assets/images/work-cloud-3.png'
import rays from '@/assets/images/rays.png'

import type { IGallery } from './GalleryTypes'

import s from './Gallery.module.scss'

const Gallery = ({ projects }: IGallery) => {
  const isDesktop = useBreakpoint('desktop', 'above')

  return (
    <section className={s.gallery} id='portfolio'>
      <Parallax
        rays={{ image: rays, className: s.rays }}
        clouds={[
          { image: cloud1, className: s.cloudTop, parallaxMultiplier: 1 },
          { image: cloud2, className: s.cloudBottomFront, parallaxMultiplier: 2 },
          { image: cloud3, className: s.cloudBottomBack, parallaxMultiplier: 4 },
        ]}
      />

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
