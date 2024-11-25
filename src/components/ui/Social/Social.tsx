import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { MdOutlineMailOutline } from 'react-icons/md'
// import clsx from 'clsx'

import type { ISocial } from '@/components/ui/Social/SocialTypes'

import s from '@/components/ui/Social/Social.module.scss'

const Social = ({ data, type }: ISocial) => {
  const { whatsapp, instagram, mail } = data || {}

  return (
    <div className={s.wrapper}>
      <h2>Faça seu orçamento</h2>

      <div className={s.social}>
        {whatsapp && (
          <a href={whatsapp} className={s.socialItem} target="_blank">
            <FaWhatsapp />
          </a>
        )}

        {instagram && (
          <a href={instagram} className={s.socialItem} target="_blank">
            <FaInstagram />
          </a>
        )}

        {mail && (
          <a href={mail} className={s.socialItem} target="_blank">
            <MdOutlineMailOutline />
          </a>
        )}
      </div>
    </div>
  )
}

export default Social
