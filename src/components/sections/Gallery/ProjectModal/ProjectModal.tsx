'use client'

import { createPortal } from 'react-dom'
import { FaTimes } from 'react-icons/fa'
import { motion } from 'motion/react'
import clsx from 'clsx'

import Media from '@/components/core/Media'

import type { IProjectModal } from './ProjectModalTypes'

import s from './ProjectModal.module.scss'
import { fadeUp } from '@/motion/animations'

const ProjectModal = ({
  title = 'Titulo',
  description = 'Descrição',
  media,
  isOpen,
  onClose,
}: IProjectModal) => {
  if (typeof window === 'undefined') return null

  return createPortal(
    <div className={clsx(s.modal, isOpen && s.open)}>
      <div className={s.overlay} onClick={onClose} />
      <div className={s.container}>
        <button type="button" className={s.close} onClick={onClose}>
          <FaTimes className={s.closeIcon} />
        </button>

        <div className={s.content}>
          <div className={s.text}>
            <motion.h1
              className={s.title}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              variants={fadeUp()}
            >
              {title}
            </motion.h1>

            <motion.p
              className={s.description}
              initial="hidden"
              animate={isOpen ? 'visible' : 'hidden'}
              variants={fadeUp({ delay: 0.4, y: '0%' })}
            >
              {description}
            </motion.p>
          </div>

          <div className={s.mediaWrapper}>
            <div className={s.media}>
              {media?.map((item, index) => (
                <motion.div
                  key={`${index}-${Math.random()}`}
                  className={s.mediaItem}
                  initial="hidden"
                  animate={isOpen ? 'visible' : 'hidden'}
                  variants={fadeUp({ y: '15%', delay: 0.8 + index * 0.1 })}
                >
                  <Media data={item} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  )
}

export default ProjectModal
