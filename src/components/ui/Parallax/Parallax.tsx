'use client'

import { MouseEvent, useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import clsx from 'clsx'

import type { IParallax } from './ParallaxTypes'

import s from './Parallax.module.scss'

const Parallax = ({ clouds, rays, className, zIndex }: IParallax) => {
  const [mouseX, setMouseX] = useState(0)

  const onMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 2
    setMouseX(x)
  }

  return (
    <div
      className={clsx(s.parallax, className)}
      style={zIndex ? { zIndex } : undefined}
      onMouseMove={onMouseMove}
    >
      {rays && (
        <motion.div
          className={clsx(s.item, s.rays, rays.className)}
          animate={{ x: `${-50 + mouseX * -1}%` }}
          transition={{ type: 'spring', stiffness: 250, damping: 45 }}
        >
          <Image src={rays.image} alt="Rays" />
        </motion.div>
      )}

      {clouds.map((cloud, index) => {
        const multiplier = cloud.parallaxMultiplier ?? Math.pow(2, index)

        return (
          <motion.div
            key={index}
            className={clsx(s.item, cloud.className)}
            animate={{ x: `${-50 + mouseX * multiplier}%` }}
            transition={{
              type: 'spring',
              stiffness: 300 - index * 50,
              damping: 50 - index * 5,
            }}
          >
            <Image src={cloud.image} alt={cloud.alt ?? 'Cloud'} />
          </motion.div>
        )
      })}
    </div>
  )
}

export default Parallax
