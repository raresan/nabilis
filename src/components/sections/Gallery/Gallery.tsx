import Project from './Project'

import type { IGallery } from './GalleryTypes'

import s from './Gallery.module.scss'

const Gallery = ({ projects }: IGallery) => {
  return (
    <section className={s.gallery} id="tattoos">
      <h2 className={s.title}>Galeria de tattoos</h2>

      <div className={s.grid}>
        {projects?.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
    </section>
  )
}

export default Gallery
