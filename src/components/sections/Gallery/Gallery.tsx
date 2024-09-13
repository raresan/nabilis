// import clsx from 'clsx'

// import type { IGallery } from '@/components/sections/Gallery/GalleryTypes'

import s from '@/components/sections/Gallery/Gallery.module.scss'

import type { IGallery } from './GalleryTypes'

const Gallery = ({ projects }: IGallery) => {
  return (
    <section className={s.gallery}>
      <h2>Galeria de tattoos</h2>

      <div className={s.grid}>
        {projects?.map(({ title = 'Titulo', description = 'Descrição' }) => {
          return (
            <div className={s.grid__item}>
              {title}
              {description}
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Gallery
