import { type SchemaTypeDefinition } from 'sanity'

import hero from '@/sanity/schemas/singletons/hero'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero],
}
