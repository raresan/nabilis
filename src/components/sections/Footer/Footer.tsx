'use client'

import { motion } from 'motion/react'

import { fadeUp } from '@/motion/animations'

import s from './Footer.module.scss'

const Footer = () => {
  return (
    <footer className={s.footer} id='contato'>
      <motion.p
        className={s.copyright}
        initial='hidden'
        whileInView='visible'
        variants={fadeUp()}
        viewport={{ once: true }}
      >
        © 2025 Nabilis - Portfólio de Thainá Alonso
      </motion.p>
    </footer>
  )
}

export default Footer
