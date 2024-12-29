// import clsx from 'clsx'

import type { IFooter } from '@/components/sections/Footer/FooterTypes'

import s from './Footer.module.scss'

import Social from '@/components/ui/Social'

const Footer = ({ social }: IFooter) => {
  return (
    <footer className={s.footer} id="contato">
      <Social data={social} />

      <p className={s.copyright}>© 2025 guik.tattoo</p>
    </footer>
  )
}

export default Footer
