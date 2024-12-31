'use client'

import { motion } from 'motion/react'

import type { IFooter } from '@/components/sections/Footer/FooterTypes'
import { fadeUp } from '@/motion/animations'

import s from './Footer.module.scss'

import Social from '@/components/ui/Social'

const Footer = ({ social }: IFooter) => {
  return (
    <footer className={s.footer} id="contato">
      <Social data={social} />

      <motion.p
        className={s.copyright}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp()}
        viewport={{ once: true }}
      >
        © 2025 guik.tattoo
      </motion.p>
    </footer>
  )
}

export default Footer
