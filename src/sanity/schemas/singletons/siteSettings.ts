import { defineField, defineType } from 'sanity'
import { CogIcon } from '@sanity/icons'

import { PageType } from '@/sanity/types/enums'

import type { ISanityContact } from '@/sanity/schemas/objects/contact'
import type { ISanityMetadata } from '@/sanity/schemas/objects/metadata'

export default defineType({
  name: PageType.SiteSettings,
  title: 'Configurações Gerais',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'titlePrefix',
      title: 'Prefixo de todas as páginas',
      type: 'string',
      description:
        'O texto que será exibido antes do título da página e será aplicado em todas as páginas.',
    }),
    defineField({
      name: 'contact',
      title: 'Contato',
      type: 'contact',
      description: 'Somente WhatsApp obrigatório.',
    }),
    defineField({
      name: 'metadata',
      title: 'Metadados',
      type: 'metadata',
      description:
        'Use como metadado padrão. Qualquer metadado especificado nas páginas irão sobreescrever este.',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Contato e Metadados',
      }
    },
  },
})

export interface ISanitySiteSettings {
  titlePrefix: string
  contact: ISanityContact
  metadata?: ISanityMetadata
}
