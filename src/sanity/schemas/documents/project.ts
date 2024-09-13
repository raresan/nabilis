import { defineField, defineType } from 'sanity'
// import { MenuIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

import type { ISanityImage } from '@/sanity/types/image'
import type { ISanityMedia } from '@/sanity/schemas/objects/media'

export default defineType({
  name: PageType.Project,
  title: 'Tattoos',
  type: 'document',
  // icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      // placeholder: 'Padrão: Home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Descrição',
      type: 'text',
      // placeholder: 'Padrão: Home',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'thumbnail',
      title: 'Miniatura',
      type: 'image',
      // placeholder: 'Padrão: Home',

      // validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'media',
      title: 'Mídia',
      type: 'array',
      of: [{ type: 'media' }],
      // description:
      //   'O texto que será exibido no logo do menu em todas as páginas. Máximo: 7 caracteres.',
      // validation: (Rule) => Rule.max(7).warning('Deve ter até 7 caracteres'),

      // validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title,
        subtitle: description,
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
