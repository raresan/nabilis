import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'

const aboutQuery = groq`
  *[_type == "${PageType.About}"][0] {
    title,
    content,
  }
`

export default aboutQuery
