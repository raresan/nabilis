import NextImage from '@/components/core/NextImage'

import type { IAbout } from './AboutTypes'

import s from '@/components/sections/About/About.module.scss'

const About = ({ data }: IAbout) => {
  const { title = 'Título', content = 'Conteúdo', photo } = data || {}

  console.log(photo)

  return (
    <section className={s.about}>
      <div className={s.text}>
        <h2 className={s.title}>{title}</h2>
        <p className={s.content}>{content}</p>
      </div>

      <div className={s.image}>
        <NextImage image={photo} alt={photo?.alt || ''} fill />
      </div>
    </section>
  )
}

export default About
