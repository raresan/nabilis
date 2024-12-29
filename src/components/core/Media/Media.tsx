import clsx from 'clsx'
import ReactPlayer from 'react-player'

import NextImage from '@/components/core/NextImage'

import type { IMedia } from './MediaTypes'

import s from './Media.module.scss'

const Media = ({ data, className }: IMedia) => {
  if (!data) return null

  switch (data?.type) {
    case 'image':
      return !!data?.image ? (
        <NextImage
          alt={data?.image?.alt || ''}
          className={clsx(s.image, className)}
          fill
          image={data.image}
          loading="lazy"
        />
      ) : null

    case 'video':
      return !!data?.video?.asset ? (
        <div className={clsx(s.video, className)}>
          <ReactPlayer
            url={data.video.asset}
            playing
            loop
            playsinline
            muted
            volume={0}
            width="100%"
            height="100%"
          />
        </div>
      ) : null

    default:
      return null
  }
}

export default Media
