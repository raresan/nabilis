'use client'

import Link from 'next/link'
import clsx from 'clsx'

import useScrollToSection from '@/hooks/useScrollToSection'
import { useMenuContext } from '@/contexts/MenuContext'
import Swap from '@/components/ui/Swap'

import s from './Menu.module.scss'

const Menu = () => {
  const { menuRef } = useMenuContext()
  const { scrollToSection } = useScrollToSection()

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.href.split('#')[1]
    scrollToSection(target)
  }

  const onClickLogo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header ref={menuRef} className={s.header}>
      <Link href="/" onClick={onClickLogo}>
        <h1 className={clsx(s.logo)}>guik.tattoo</h1>
      </Link>

      <nav>
        <ul className={clsx(s.menu)}>
          <li className={clsx(s.menuItem)}>
            <Link href="/#sobre-mim" onClick={onClick}>
              <Swap>Sobre Mim</Swap>
            </Link>
          </li>

          <li className={clsx(s.menuItem)}>
            <Link href="/#tattoos" onClick={onClick}>
              <Swap>Tattoos</Swap>
            </Link>
          </li>

          <li className={clsx(s.menuItem)}>
            <Link href="/#contato" onClick={onClick}>
              <Swap>Contato</Swap>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Menu
