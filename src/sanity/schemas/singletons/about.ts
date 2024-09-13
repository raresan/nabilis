import { defineField, defineType } from 'sanity'
// import { MenuIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: PageType.About,
  title: 'Sobre Mim',
  type: 'document',
  // icon: MenuIcon,
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      // description:
      //   'O texto que será exibido no logo do menu em todas as páginas. Máximo: 7 caracteres.',
      // validation: (Rule) => Rule.max(7).warning('Deve ter até 7 caracteres'),
    }),
    defineField({
      name: 'content',
      title: 'Conteúdo',
      type: 'string',
      // placeholder: 'Padrão: Home',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
    prepare({ title }) {
      return {
        title,
        subtitle: 'Título e conteúdo',
      }
    },
  },
})

export interface ISanityAbout {
  title: string
  content: string
}
