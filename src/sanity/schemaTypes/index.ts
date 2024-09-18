import { type SchemaTypeDefinition } from 'sanity'

import siteSettings from '@/sanity/schemas/singletons/siteSettings'
import hero from '@/sanity/schemas/singletons/hero'
import about from '@/sanity/schemas/singletons/about'
import project from '@/sanity/schemas/documents/project'
import media from '@/sanity/schemas/objects/media'
import contact from '@/sanity/schemas/objects/contact'
import metadata from '@/sanity/schemas/objects/metadata'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, hero, about, project, media, contact, metadata],
}
