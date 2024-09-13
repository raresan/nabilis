import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'

import imageQuery from '@/sanity/queries/partials/image'
import mediaQuery from '@/sanity/queries/objects/media'

const projectQuery = groq`
  *[_type == "${PageType.Project}"] {
    title,
    description,
    ${imageQuery('thumbnail')},
    ${mediaQuery('media')},
  }[]
`

export default projectQuery
