import { defineField, defineType, ImageRule } from 'sanity'
import { UserIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'
import { ISanityImage } from '@/sanity/types/image'
import { imageField } from '@/sanity/lib/fields'

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
    imageField({
      name: 'photo',
      title: 'Foto',
      validation: (Rule: ImageRule) => Rule.required(),
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
  photo: ISanityImage
}
