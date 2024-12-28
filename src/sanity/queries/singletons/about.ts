import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'

import imageQuery from '@/sanity/queries/partials/image'

const aboutQuery = groq`
  *[_type == "${PageType.About}"][0] {
    title,
    content,
    ${imageQuery('photo')},
  }
`

export default aboutQuery
