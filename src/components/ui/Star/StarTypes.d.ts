import type { StaticImageData } from 'next/image'

export interface IStar {
  /** Star image source */
  src: StaticImageData
  /** Custom CSS class for positioning */
  className?: string
  /** Animation delay in seconds */
  delay?: number
}
