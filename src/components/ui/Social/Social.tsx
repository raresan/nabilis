'use client'

import { FaBehance, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
import { motion } from 'motion/react'

import type { ISocial } from '@/components/ui/Social/SocialTypes'
import { fadeUp, scaleUp } from '@/motion/animations'
import Swap from '@/components/ui/Swap'

import s from './Social.module.scss'

const Social = ({ data, animationDelay = 0 }: ISocial) => {
  const { whatsapp, behance, mail } = data || {}

  return (
    <div className={s.wrapper}>
      <motion.h2
        initial='hidden'
        whileInView='visible'
        variants={fadeUp({ delay: animationDelay })}
        viewport={{ once: true }}
      >
        Entre em contato
      </motion.h2>

      <div className={s.social}>
        {whatsapp && (
          <motion.a
            href={`https://wa.me/${whatsapp}`}
            className={s.socialItem}
            target='_blank'
            initial='hidden'
            whileInView='visible'
            variants={scaleUp({ delay: animationDelay + 0.2 })}
            viewport={{ once: true }}
          >
            <Swap>
              <FaWhatsapp />
            </Swap>
          </motion.a>
        )}

        {behance && (
          <motion.a
            href={behance}
            className={s.socialItem}
            target='_blank'
            initial='hidden'
            whileInView='visible'
            variants={scaleUp({ delay: animationDelay + 0.4 })}
            viewport={{ once: true }}
          >
            <Swap>
              <FaBehance />
            </Swap>
          </motion.a>
        )}

        {mail && (
          <motion.a
            href={`mailto:${mail}`}
            className={s.socialItem}
            target='_blank'
            initial='hidden'
            whileInView='visible'
            variants={scaleUp({ delay: animationDelay + 0.6 })}
            viewport={{ once: true }}
          >
            <Swap>
              <MdOutlineMailOutline />
            </Swap>
          </motion.a>
        )}
      </div>
    </div>
  )
}

export default Social
