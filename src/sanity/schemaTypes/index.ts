import { type SchemaTypeDefinition } from 'sanity'

import hero from '@/sanity/schemas/singletons/hero'
import about from '@/sanity/schemas/singletons/about'
import project from '@/sanity/schemas/documents/project'
import media from '@/sanity/schemas/objects/media'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about, project, media],
}
