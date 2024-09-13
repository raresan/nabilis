import { groq } from 'next-sanity'

import imageQuery from '@/sanity/queries/partials/image'

const mediaQuery = (propName: string) => groq`
  ${propName} {
    type,
    type == 'image' => {
      ${imageQuery('image')},
    },
    type == 'video' => {
      "video": {
        "asset": video.asset->url,
      }
    },
  }
`

export default mediaQuery
