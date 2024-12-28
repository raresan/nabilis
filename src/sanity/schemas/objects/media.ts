import { defineField, defineType } from 'sanity'

import type { ISanityImage } from '@/sanity/types/image'

export default defineType({
  name: 'media',
  title: 'Imagem ou Vídeo',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Tipo',
      type: 'string',
      options: {
        layout: 'radio',
        list: ['image', 'video'],
        direction: 'horizontal',
      },
      initialValue: 'image',
    }),
    defineField({
      name: 'image',
      title: 'Imagem',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Texto alternativo',
          type: 'string',
          validation: (Rule) => Rule.warning('Preencha este campo').required(),
        },
      ],
      hidden: ({ parent }: any) => parent?.type !== 'image',
    }),
    defineField({
      name: 'video',
      type: 'file',
      options: { accept: '.mp4' },
      hidden: ({ parent }) => parent?.type !== 'video',
    }),
  ],
  preview: {
    select: {
      alt: 'image.alt',
      type: 'type',
      image: 'image',
    },
    prepare: ({ alt, type, image }) => ({
      title: alt,
      subtitle: type,
      media: image,
    }),
  },
})

export interface ISanityMediaVideo {
  asset: string
}

export interface ISanityMedia {
  type: 'image' | 'video'
  image?: ISanityImage
  video?: ISanityMediaVideo
}
