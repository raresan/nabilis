import NextImage from '@/components/core/NextImage'

import type { IAbout } from './AboutTypes'

import s from '@/components/sections/About/About.module.scss'

const About = ({ data }: IAbout) => {
  const { title = 'Título', content = 'Conteúdo', photo } = data || {}

  return (
    <section className={s.about}>
      <div className={s.text}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.content}>{content}</p>
      </div>

      <div className={s.imageWrapper}>
        <NextImage
          image={photo}
          alt={photo?.alt || ''}
          fill
          className={s.image}
        />
      </div>
    </section>
  )
}

export default About
