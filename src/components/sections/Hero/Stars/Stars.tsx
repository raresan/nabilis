'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

import { fadeUp } from '@/motion/animations'

import star1 from '@/assets/images/star-1.png'
import star2 from '@/assets/images/star-2.png'
import star3 from '@/assets/images/star-3.png'

import s from './Stars.module.scss'

const Stars = () => {
  return (
    <div className={s.stars}>
      {/* Left side */}
      <Image src={star1} alt="Star" className={s.star} />
      <Image src={star2} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star2} alt="Star" className={s.star} />
      <Image src={star2} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star1} alt="Star" className={s.star} />

      {/* Right side */}
      <Image src={star1} alt="Star" className={s.star} />
      <Image src={star2} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star1} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star2} alt="Star" className={s.star} />
      <Image src={star3} alt="Star" className={s.star} />
      <Image src={star1} alt="Star" className={s.star} />
    </div>

  )
}

export default Stars
