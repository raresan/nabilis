import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Splash } from 'next/font/google'

// import type { IMenu } from '@/components/ui/Menu/MenuTypes'

import s from '@/components/ui/Menu/Menu.module.scss'

const splash = Splash({ weight: '400', subsets: ['latin'] })

const Menu = () => {
  return (
    <header className={s.header}>
      <Link href="/">
        <h1 className={clsx(s.logo, splash.className)}>guik.tattoo</h1>
      </Link>

      <nav>
        <ul className={clsx(s.menu)}>
          <li className={clsx(s.menu__item)}>
            <Link href="/#about">Sobre Mim</Link>
          </li>
          <li className={clsx(s.menu__item)}>
            <Link href="/#gallery">Tattoos</Link>
          </li>
          <li className={clsx(s.menu__item)}>
            <Link href="/#contact">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
