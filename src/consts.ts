export type Site = {
  TITLE: string
  DESCRIPTION: string
  EMAIL: string
  NUM_POSTS_ON_HOMEPAGE: number
  POSTS_PER_PAGE: number
  SITEURL: string
}

export type Link = {
  href: string
  label: string
}

export const SITE: Site = {
  TITLE: 'Ciel Park',
  DESCRIPTION:
    'is a UX developer creating user-centered solutions that drive growth & engagement',
  EMAIL: 'cielcpark@gmail.com',
  NUM_POSTS_ON_HOMEPAGE: 4,
  POSTS_PER_PAGE: 3,
  SITEURL: 'https://astro-erudite.vercel.app',
}

export const NAV_LINKS: Link[] = [
  { href: '/work', label: 'work' },
  { href: '/about', label: 'about' },
  { href: '/tags', label: 'tags' },
]

export const SOCIAL_LINKS: Link[] = [
  { href: 'https://github.com/cielcp', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/parkciel', label: 'LinkedIn' },
  { href: 'cielcpark@gmail.com', label: 'Email' },
]
