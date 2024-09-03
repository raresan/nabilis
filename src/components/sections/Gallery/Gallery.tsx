// import clsx from 'clsx'

// import type { IGallery } from '@/components/sections/Gallery/GalleryTypes'

import s from '@/components/sections/Gallery/Gallery.module.scss'

const Gallery = () => {
  return (
    <section className={s.gallery}>
      <h2>Galeria de tattoos</h2>

      <div className={s.grid}>
        <div className={s.grid__item}>1</div>
        <div className={s.grid__item}>2</div>
        <div className={s.grid__item}>3</div>
        <div className={s.grid__item}>4</div>
        <div className={s.grid__item}>5</div>
        <div className={s.grid__item}>6</div>
        <div className={s.grid__item}>7</div>
        <div className={s.grid__item}>8</div>
        <div className={s.grid__item}>9</div>
      </div>
    </section>
  )
}

export default Gallery
