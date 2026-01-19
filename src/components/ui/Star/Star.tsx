import Image from 'next/image'
import clsx from 'clsx'

import type { IStar } from './StarTypes'

import s from './Star.module.scss'

const Star = ({ src, className, delay = 0 }: IStar) => {
  return (
    <Image
      src={src}
      alt="Star"
      className={clsx(s.star, className)}
      style={{ animationDelay: `${delay}s` }}
    />
  )
}

export default Star
