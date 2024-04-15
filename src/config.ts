import type { Site, Contact, SocialObjects } from './types'

export const SITE: Site = {
  website: 'https://national50.com', // replace this with your deployed domain
  author: 'Atid Yarok',
  description:
    "Crator is a digital agency with a focus on creative, interactive and innovative design and development. Our team of designers, developers and strategists work together to create customized solutions that are unique to each client's needs.",
  title: 'National 50',
  ogImage: 'crator-og.png',
}

export const CONTACT: Contact = {
  address: {
    street: '3385 OVERLAND AVENUE, 1st. FLOOR',
    city: 'Los Angeles',
    state: 'CA',
    zip: '90034',
  },
  phone: '+1-310-838-2329',
  email: 'contact@national50.com',
}

export const SOCIALS: SocialObjects = [
  {
    name: 'instagram',
    href: '#',
    label: 'Instagram',
    ariaLabel: 'Follow on Instagram',
  },
  {
    name: 'facebook',
    href: '#',
    label: 'Facebook',
    ariaLabel: 'Follow on Facebook',
  },
  {
    name: 'x',
    href: '#',
    label: 'Twitter / X',
    ariaLabel: 'Follow on X',
  },
]
