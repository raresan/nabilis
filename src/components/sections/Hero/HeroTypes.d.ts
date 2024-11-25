import type { ISanityHero } from '@/sanity/schemas/singletons/hero'
import type { ISanitySiteSettingsSocial } from '@/sanity/schemas/singletons/siteSettings'
import type { ISanityContact } from '@/sanity/schemas/objects/contact'

export interface IHero {
  data: ISanityHero
  social: ISanityContact
}
