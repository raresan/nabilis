import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contato',
  type: 'object',
  fields: [
    defineField({
      name: 'whatsapp',
      title: 'WhatsApp',
      description:
        'Insira no formato <CodigoDoPais><DDD><Numero> sem parênteses, traços ou o sinal de +. Somente números. Exemplo: 5511912345678',
      type: 'string',
      validation: (Rule) => Rule.required().regex(/^\d{1,4}\d{1,12}$/),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    }),
    defineField({
      name: 'mail',
      title: 'E-mail',
      type: 'email',
    }),
  ],
})

export interface ISanityContact {
  whatsapp: string
  instagram?: string
  mail?: string
}
