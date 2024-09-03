// import clsx from 'clsx'

// import type { IFooter } from '@/components/sections/Footer/FooterTypes'

import s from '@/components/sections/Footer/Footer.module.scss'

import Social from '@/components/ui/Social'

const Footer = () => {
  return (
    <footer className={s.footer}>
      <Social />
      <p className={s.copyright}>© 2024 guik.tattoo</p>
    </footer>
  )
}

export default Footer
