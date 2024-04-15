import type { CollectionEntry } from 'astro:content'

export type CaseStudy = CollectionEntry<'caseStudies'>

export type Site = {
  website: string
  author: string
  description: string
  title: string
  ogImage: string
}

export type Contact = {
  address: {
    street: string
    city: string
    state: string
    zip: string
  }
  phone: string
  fax: string
  email: string
}

export type SocialObjects = {
  name: SocialMedia
  href: string
  label: string
  ariaLabel: string
}[]

export type SocialMedia =
  | 'github'
  | 'dribbble'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'mail'
  | 'twitter'
  | 'x'
