import { type SchemaTypeDefinition } from 'sanity'

import hero from '@/sanity/schemas/singletons/hero'
import about from '@/sanity/schemas/singletons/about'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero, about],
}
