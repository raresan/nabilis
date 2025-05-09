import { groq } from 'next-sanity'

const contactQuery = groq`
  contact {
    whatsapp,
    behance,
    mail,
  }
`

export default contactQuery
