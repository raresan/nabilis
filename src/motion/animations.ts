type TFadeUp = {
  y?: string
  delay?: number
}

export const fadeUp = ({ y = '40%', delay = 0 }: TFadeUp = {}) => ({
  hidden: { opacity: 0, y },
  visible: {
    opacity: 1,
    y: '0%',
    transition: { duration: 0.6, ease: 'easeOut', delay },
  },
})

type TScaleUp = {
  scale?: number
  delay?: number
}

export const scaleUp = ({ scale = 0.5, delay = 0 }: TScaleUp = {}) => ({
  hidden: { opacity: 0, scale },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: 'easeOut', delay },
  },
})
