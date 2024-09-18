import { defineField, defineType } from 'sanity'
import { EditIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

import type { ISanityImage } from '@/sanity/types/image'
import type { ISanityMedia } from '@/sanity/schemas/objects/media'

export default defineType({
  name: PageType.Project,
  title: 'Tattoos',
  type: 'document',
  icon: EditIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Miniatura',
      type: 'image',
      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Mídia',
      type: 'array',
      of: [{ type: 'media' }],
      // validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
      }
    },
  },
})

export interface ISanityProject {
  title: string
  description: string
  thumbnail: ISanityImage
  media: ISanityMedia
}
