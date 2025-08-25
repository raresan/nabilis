'use client'

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'

import useScrollToSection from '@/hooks/useScrollToSection'

import { useMenuContext } from '@/contexts/MenuContext'

import Swap from '@/components/ui/Swap'
import Social from '@/components/ui/Social'

import type { IMenu } from './MenuTypes'

import s from './Menu.module.scss'

const Menu = ({ social }: IMenu) => {
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
      <div className={s.left}>
        <Link href='/' onClick={onClickLogo} className={s.logo}>
          <Image
            src='/images/logo.png'
            alt='Nabilis Logo'
            width={150}
            height={60}
            className={s.logoImage}
          />
        </Link>

        <nav>
          <ul className={clsx(s.menu)}>
            <li className={clsx(s.menuItem)}>
              <Link href='/#home' onClick={onClick}>
                <Swap>Home</Swap>
              </Link>
            </li>

            <li className={clsx(s.menuItem)}>
              <Link href='/#sobre-mim' onClick={onClick}>
                <Swap>Sobre Mim</Swap>
              </Link>
            </li>

            <li className={clsx(s.menuItem)}>
              <Link href='/#portfolio' onClick={onClick}>
                <Swap>Portfólio</Swap>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <Social data={social} animationDelay={0.5} />
    </header>
  )
}

export default Menu
