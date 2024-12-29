import { motion, useMotionValue, animate } from 'framer-motion'
import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'
import { useEffect, useRef } from 'react'
import useIsTouchDevice from '@/hooks/useIsTouchDevice'
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
            <h1 className={s.title}>{title}</h1>
            <p className={s.description}>{description}</p>
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
