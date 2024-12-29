import { motion, useMotionValue, animate } from 'framer-motion'
import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useRef } from 'react'

import useBreakpoint from '@/hooks/useBreakpoint'

import Media from '@/components/core/Media'

import type { IProjectModal } from './ProjectModalTypes'

import s from './ProjectModal.module.scss'

const ProjectModal = ({
  title = 'Titulo',
  description = 'Descrição',
  media,
  isOpen,
  onClose,
}: IProjectModal) => {
  const mediaWrapperRef = useRef<HTMLDivElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  const isDesktop = useBreakpoint('desktop', 'above')

  const x = useMotionValue(0)

  const updateDragConstraints = () => {
    const mediaWrapper = mediaWrapperRef.current
    const media = mediaRef.current

    if (!mediaWrapper || !media) return

    const containerWidth = mediaWrapper.clientWidth
    const wrapperWidth = media.scrollWidth
    const currentX = x.get()
    const maxDrag = 0
    const minDrag = -(wrapperWidth - containerWidth)

    const constrainedX = Math.max(minDrag, Math.min(maxDrag, currentX))
    x.set(constrainedX)
  }

  useEffect(() => {
    if (isOpen) {
      x.set(0)
      updateDragConstraints()

      const handleResize = () => {
        requestAnimationFrame(updateDragConstraints)
      }

      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isOpen]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleDragEnd = () => {
    const mediaWrapper = mediaWrapperRef.current
    const media = mediaRef.current

    if (!mediaWrapper || !media) return

    const containerWidth = mediaWrapper.clientWidth
    const wrapperWidth = media.scrollWidth
    const maxDrag = 0
    const minDrag = -(wrapperWidth - containerWidth)

    const currentX = x.get()
    const velocity = x.getVelocity()

    const normalizedVelocity = velocity * 0.3

    let targetX = currentX + normalizedVelocity

    targetX = Math.max(minDrag, Math.min(maxDrag, targetX))

    animate(x, targetX, {
      type: 'spring',
      damping: 30,
      stiffness: 200,
      restDelta: 0.5,
    })
  }

  return (
    <div className={clsx(s.modal, isOpen && s.open)}>
      <div className={s.overlay} onClick={onClose} />

      <div className={s.container}>
        <button type="button" className={s.close} onClick={onClose}>
          <FaTimes className={s.closeIcon} />
        </button>

        <div className={s.content}>
          <div className={s.text}>
            <h1 className={s.title}>{title}</h1>
            <p className={s.description}>{description}</p>
          </div>

          <div className={s.mediaWrapper} ref={mediaWrapperRef}>
            <motion.div
              ref={mediaRef}
              className={s.media}
              {...(isDesktop
                ? {
                    drag: 'x',
                    dragDirectionLock: true,
                    dragElastic: 0.1,
                    dragConstraints: {
                      left: mediaWrapperRef.current
                        ? -(mediaRef.current?.scrollWidth || 0) +
                          (mediaWrapperRef.current?.clientWidth || 0)
                        : 0,
                      right: 0,
                    },
                    dragMomentum: true,
                    dragTransition: {
                      power: 0.5,
                      timeConstant: 250,
                    },
                    style: { x },
                    onDragEnd: handleDragEnd,
                    whileDrag: { cursor: 'grabbing' },
                    onResize: updateDragConstraints,
                  }
                : {
                    style: { touchAction: 'pan-x' },
                  })}
            >
              {[...Array(6)].map(() =>
                media?.map((item, index) => (
                  <div
                    key={`${index}-${Math.random()}`}
                    className={s.mediaItem}
                  >
                    <Media data={item} />
                  </div>
                )),
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
