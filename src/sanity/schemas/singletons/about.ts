import { defineField, defineType } from 'sanity'
import { UserIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: PageType.About,
  title: 'Sobre Mim',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'text',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Título e conteúdo',
      }
    },
  },
})

export interface ISanityAbout {
  title: string
  content: string
}
