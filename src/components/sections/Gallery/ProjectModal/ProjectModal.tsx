import { FaTimes } from 'react-icons/fa'
import { motion, useMotionValue, animate } from 'motion/react'
import { useEffect, useRef } from 'react'
import clsx from 'clsx'

import useIsTouchDevice from '@/hooks/useIsTouchDevice'
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
  const mediaWrapperRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)
  const isTouch = useIsTouchDevice()
  const x = useMotionValue(0)

  const getConstraints = () => {
    if (!mediaWrapperRef.current || !mediaRef.current)
      return { left: 0, right: 0 }

    const containerWidth = mediaWrapperRef.current.clientWidth
    const contentWidth = mediaRef.current.scrollWidth

    return {
      left: -(contentWidth - containerWidth + 32),
      right: 0,
    }
  }

  useEffect(() => {
    if (!isOpen) return

    x.set(0)
    const handleResize = () => {
      const { left } = getConstraints()
      const current = x.get()
      animate(x, Math.max(left, Math.min(0, current)), { type: 'spring' })
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  return (
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

          <div className={s.mediaWrapper} ref={mediaWrapperRef}>
            <motion.div
              ref={mediaRef}
              className={s.media}
              {...(!isTouch && {
                drag: 'x',
                dragDirectionLock: true,
                dragConstraints: getConstraints(),
                dragElastic: 0.1,
                dragMomentum: true,
                style: { x },
                whileDrag: { cursor: 'grabbing' },
              })}
            >
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
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
