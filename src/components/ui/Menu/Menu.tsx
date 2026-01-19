'use client'

import { useState, useEffect } from 'react'
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
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  const { menuRef } = useMenuContext()
  const { scrollToSection } = useScrollToSection()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const onClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    const target = event.currentTarget.href.split('#')[1]
    setIsOpen(false)
    scrollToSection(target)
  }

  const onClickLogo = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    setIsOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      ref={menuRef}
      className={clsx(s.header, isScrolled && s.scrolled, isOpen && s.open)}
    >
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

        {/* Desktop nav */}
        <nav className={s.desktopNav}>
          <ul className={s.menu}>
            <li className={s.menuItem}>
              <Link href='/#home' onClick={onClick}>
                <Swap>Home</Swap>
              </Link>
            </li>

            <li className={s.menuItem}>
              <Link href='/#sobre-mim' onClick={onClick}>
                <Swap>Sobre Mim</Swap>
              </Link>
            </li>

            <li className={s.menuItem}>
              <Link href='/#portfolio' onClick={onClick}>
                <Swap>Portfólio</Swap>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className={s.desktopSocial}>
        <Social data={social} animationDelay={0.5} />
      </div>

      {/* Burger Icon - Mobile only */}
      <button
        type='button'
        className={clsx(s.burger, isOpen && s.burgerOpen)}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
      >
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
        <span className={s.burgerLine} />
      </button>

      {/* Mobile drawer */}
      <div className={clsx(s.drawer, isOpen && s.drawerOpen)}>
        <nav>
          <ul className={s.mobileMenu}>
            <li className={s.mobileMenuItem}>
              <Link href='/#home' onClick={onClick}>
                Home
              </Link>
            </li>

            <li className={s.mobileMenuItem}>
              <Link href='/#sobre-mim' onClick={onClick}>
                Sobre Mim
              </Link>
            </li>

            <li className={s.mobileMenuItem}>
              <Link href='/#portfolio' onClick={onClick}>
                Portfólio
              </Link>
            </li>
          </ul>
        </nav>

        <div className={s.mobileSocial}>
          <Social data={social} />
        </div>
      </div>
    </header>
  )
}

export default Menu
