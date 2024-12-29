import clsx from 'clsx'
import { FaTimes } from 'react-icons/fa'

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
  console.log(media)

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

          <div className={s.mediaWrapper}>
            <div className={s.media}>
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
              {media?.map((item, index) => (
                <div key={index} className={s.mediaItem}>
                  <Media data={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
