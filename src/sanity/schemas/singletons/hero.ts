import { defineField, defineType } from 'sanity'
import { SparkleIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: PageType.Hero,
  title: 'Banner Principal',
  type: 'document',
  icon: SparkleIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtítulo',
      type: 'string',
    }),
    defineField({
      name: 'buttonText',
      title: 'Texto do botão',
      type: 'string',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Título, subtítulo e botão',
      }
    },
  },
})

export interface ISanityHero {
  title: string
  subtitle: string
  buttonText: string
}
