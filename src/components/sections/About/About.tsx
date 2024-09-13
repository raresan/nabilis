// import clsx from 'clsx'

// import type { IAbout } from '@/components/sections/About/AboutTypes'

import s from '@/components/sections/About/About.module.scss'

import type { IAbout } from './AboutTypes'

const About = ({ data }: IAbout) => {
  const { title = 'Título', content = 'Conteúdo' } = data || {}

  return (
    <section className={s.about}>
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  )
}

export default About
