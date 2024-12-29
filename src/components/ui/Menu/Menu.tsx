'use client'

import Link from 'next/link'
import clsx from 'clsx'
import { Splash } from 'next/font/google'

import s from './Menu.module.scss'

const splash = Splash({ weight: '400', subsets: ['latin'], display: 'swap' })

const Menu = () => {
  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    const target = event.currentTarget.href.split('#')[1]
    const element = document.getElementById(target)

    console.log(target, element)

    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const onClickLogo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className={s.header}>
      <Link href="/" onClick={onClickLogo}>
        <h1 className={clsx(s.logo, splash.className)}>guik.tattoo</h1>
      </Link>

      <nav>
        <ul className={clsx(s.menu)}>
          <li className={clsx(s.menuItem)}>
            <Link href="/#sobre-mim" onClick={onClick}>
              Sobre Mim
            </Link>
          </li>

          <li className={clsx(s.menuItem)}>
            <Link href="/#tattoos" onClick={onClick}>
              Tattoos
            </Link>
          </li>

          <li className={clsx(s.menuItem)}>
            <Link href="/#contato" onClick={onClick}>
              Contato
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
