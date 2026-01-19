import type { StaticImageData } from 'next/image'

export interface ICloudConfig {
  /** Cloud image */
  image: StaticImageData
  /** Custom CSS class for positioning */
  className?: string
  /** Parallax effect multiplier (default: 1) */
  parallaxMultiplier?: number
  /** Alt text for accessibility */
  alt?: string
}

export interface IRaysConfig {
  /** Rays image */
  image: StaticImageData
  /** Custom CSS class */
  className?: string
}

export interface IParallax {
  /** Array of cloud configurations */
  clouds: ICloudConfig[]
  /** Optional light rays configuration */
  rays?: IRaysConfig
  /** CSS class for the main container */
  className?: string
  /** Base z-index for the container */
  zIndex?: number
}
