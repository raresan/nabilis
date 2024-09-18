import { groq } from 'next-sanity'

const contactQuery = groq`
  contact {
    whatsapp,
    instagram,
    mail,
  },
`

export default contactQuery
