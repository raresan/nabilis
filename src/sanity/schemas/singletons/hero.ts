import { defineField, defineType } from 'sanity'
// import { MenuIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

export default defineType({
  name: PageType.Hero,
  title: 'Banner Principal',
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
      name: 'buttonText',
      title: 'Texto do botão',
      // placeholder: 'Padrão: Home',
      type: 'string',
    }),
  ],
})

export interface ISanityHero {
  title: string
  buttonText: string
}
