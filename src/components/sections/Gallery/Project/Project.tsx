'use client'

import { useEffect, useState } from 'react'
import { motion } from 'motion/react'

import { scaleUp } from '@/motion/animations'
import NextImage from '@/components/core/NextImage'
import ProjectModal from '../ProjectModal'

import type { IProject } from './ProjectTypes'

import s from './Project.module.scss'

const Project = ({
  title = 'Titulo',
  description = 'Descrição',
  thumbnail,
  media,
  animationDelay = 0,
}: IProject) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isModalOpen])

  return (
    <>
      <motion.button
        type="button"
        className={s.project}
        onClick={() => setIsModalOpen(true)}
        initial="hidden"
        whileInView="visible"
        variants={scaleUp({ scale: 0.91, delay: animationDelay })}
        viewport={{ once: true }}
      >
        <div className={s.imageWrapper}>
          <NextImage
            image={thumbnail}
            alt={thumbnail?.alt || ''}
            fill
            className={s.image}
          />
        </div>

        <h3 className={s.title}>{title}</h3>

        <span className={s.info}>Clique para ver detalhes</span>
      </motion.button>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        media={media}
        thumbnail={thumbnail}
      />
    </>
  )
}

export default Project
