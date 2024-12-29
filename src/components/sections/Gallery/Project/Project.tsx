'use client'

import { useEffect, useState } from 'react'

import NextImage from '@/components/core/NextImage'
import ProjectModal from '../ProjectModal'

import type { IProject } from './ProjectTypes'

import s from './Project.module.scss'

const Project = ({
  title = 'Titulo',
  description = 'Descrição',
  thumbnail,
  media,
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
      <button
        type="button"
        className={s.project}
        onClick={() => setIsModalOpen(true)}
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
      </button>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        description={description}
        media={media}
      />
    </>
  )
}

export default Project
