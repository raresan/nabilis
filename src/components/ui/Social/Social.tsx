// import clsx from 'clsx'

// import type { ISocial } from '@/components/ui/Social/SocialTypes'

import s from '@/components/ui/Social/Social.module.scss'

const Social = () => {
  return (
    <div className={s.wrapper}>
      <h2>Faça seu orçamento</h2>

      <div className={s.social}>
        <div className={s.social__item}>1</div>
        <div className={s.social__item}>2</div>
        <div className={s.social__item}>3</div>
        <div className={s.social__item}>4</div>
      </div>
    </div>
  )
}

export default Social
