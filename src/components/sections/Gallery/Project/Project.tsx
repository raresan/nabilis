import NextImage from '@/components/core/NextImage'

import type { IProject } from './ProjectTypes'

import s from './Project.module.scss'

const Project = ({
  title = 'Titulo',
  description = 'Descrição',
  thumbnail,
  media,
}: IProject) => {
  return (
    <button type="button" className={s.project}>
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
  )
}

export default Project
