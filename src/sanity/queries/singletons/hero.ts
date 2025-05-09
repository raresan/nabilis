import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'

const heroQuery = groq`
  *[_type == "${PageType.Hero}"][0] {
    title,
    subtitle,
    buttonText,
  }
`

export default heroQuery
