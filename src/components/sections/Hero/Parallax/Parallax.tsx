'use client'

import { MouseEvent, useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import clsx from 'clsx'

import cloud1 from '@/assets/images/cloud-1.png'
import cloud2 from '@/assets/images/cloud-2.png'
import cloud3 from '@/assets/images/cloud-3.png'
import rays from '@/assets/images/rays.png'

import s from './Parallax.module.scss'

const Parallax = () => {
  const [mouseX, setMouseX] = useState(0)

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    // Normalize mouse position to a value between -1 and 1
    // This makes the parallax effect responsive across different screen sizes
    // clientX / innerWidth = 0 to 1, then -0.5 centers it, *2 amplifies to -1 to 1
    const x = (event.clientX / window.innerWidth - 0.5) * 2

    setMouseX(x)
  }

  return (
    <div className={s.items} onMouseMove={onMouseMove}>
      <motion.div
        className={clsx(s.item, s.rays)}
        animate={{ x: `${-50 + mouseX * -1}%` }}
        transition={{ type: 'spring', stiffness: 250, damping: 45 }}
      >
        <Image src={rays} alt="Rays" />
      </motion.div>

      {/* Foreground layer - moves least (closest to viewer) */}
      <motion.div
        className={clsx(s.item, s.front)}
        animate={{ x: `${-50 + mouseX}%` }} // -50% centers the image, mouseX adds parallax movement
        transition={{ type: 'spring', stiffness: 300, damping: 50 }}
      >
        <Image src={cloud1} alt="Cloud" />
      </motion.div>

      {/* Middle layer - moves 2x more than foreground */}
      <motion.div
        className={clsx(s.item, s.middle)}
        animate={{ x: `${-50 + mouseX * 2}%` }}
        transition={{ type: 'spring', stiffness: 250, damping: 45 }}
      >
        <Image src={cloud2} alt="Cloud" />
      </motion.div>

      {/* Background layer - moves 4x more (farthest from viewer) */}
      <motion.div
        className={clsx(s.item, s.back)}
        animate={{ x: `${-50 + mouseX * 4}%` }}
        transition={{ type: 'spring', stiffness: 200, damping: 40 }}
      >
        <Image src={cloud3} alt="Cloud" />
      </motion.div>
    </div>
  )
}

export default Parallax
