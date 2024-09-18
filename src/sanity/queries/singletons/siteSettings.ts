import { groq } from 'next-sanity'

import { PageType } from '@/sanity/types/enums'

import contactQuery from '@/sanity/queries/objects/contact'
import metadataQuery from '@/sanity/queries/objects/metadata'

const siteSettingsQuery = groq`
  *[_type == "${PageType.SiteSettings}"][0] {
    titlePrefix,
    ${contactQuery},
    ${metadataQuery},
  }
`

export default siteSettingsQuery
