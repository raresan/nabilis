import { ISwap } from './SwapTypes'

import s from './Swap.module.scss'

const Swap = ({ children }: ISwap) => {
  return (
    <span className={s.swap}>
      <span className={s.wrapper}>
        <span className={s.topText}>{children}</span>
        <span className={s.bottomText}>{children}</span>
      </span>
    </span>
  )
}

export default Swap
