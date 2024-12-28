import { defineField } from 'sanity'

export const altWarningMessage =
  'Texto alternativo deve ser informado para melhorar a acessibilidade e o SEO do site.'

export const imageField = ({
  name = 'image',
  title = 'Image',
  description = '',
  group = '',
  hidden,
}: any) =>
  defineField({
    name,
    title,
    type: 'image',
    description,
    group,
    options: { hotspot: true },
    fields: [
      {
        name: 'alt',
        title: 'Texto alternativo',
        type: 'string',
        validation: (Rule) => Rule.warning(altWarningMessage).required(),
      },
    ],
    hidden,
  })
