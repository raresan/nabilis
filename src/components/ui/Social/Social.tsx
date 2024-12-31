'use client'

import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { motion } from 'motion/react'

import type { ISocial } from '@/components/ui/Social/SocialTypes'
import { fadeUp, scaleUp } from '@/motion/animations'

import s from './Social.module.scss'

const Social = ({ data, animationDelay = 0 }: ISocial) => {
  const { whatsapp, instagram, mail } = data || {}

  return (
    <div className={s.wrapper}>
      <motion.h2
        className={s.title}
        initial="hidden"
        whileInView="visible"
        variants={fadeUp({ delay: animationDelay })}
        viewport={{ once: true }}
      >
        Faça seu orçamento
      </motion.h2>

      <div className={s.social}>
        {whatsapp && (
          <motion.a
            href={`https://wa.me/${whatsapp}`}
            className={s.socialItem}
            target="_blank"
            initial="hidden"
            whileInView="visible"
            variants={scaleUp({ delay: animationDelay + 0.2 })}
            viewport={{ once: true }}
          >
            <FaWhatsapp />
          </motion.a>
        )}

        {instagram && (
          <motion.a
            href={instagram}
            className={s.socialItem}
            target="_blank"
            initial="hidden"
            whileInView="visible"
            variants={scaleUp({ delay: animationDelay + 0.4 })}
            viewport={{ once: true }}
          >
            <FaInstagram />
          </motion.a>
        )}

        {mail && (
          <motion.a
            href={`mailto:${mail}`}
            className={s.socialItem}
            target="_blank"
            initial="hidden"
            whileInView="visible"
            variants={scaleUp({ delay: animationDelay + 0.6 })}
            viewport={{ once: true }}
          >
            <MdOutlineMailOutline />
          </motion.a>
        )}
      </div>
    </div>
  )
}

export default Social
