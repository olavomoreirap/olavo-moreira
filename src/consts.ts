import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Olavo Moreira',
  description:
    'Estudos e resumos feitos por mim, enquanto realizo algum curso por aí.',
  href: 'https://astro-erudite.vercel.app',
  author: 'jktrn',
  locale: 'en-US',
  featuredPostCount: 2,
  postsPerPage: 3,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/blog',
    label: 'blog',
  },
  {
    href: '/authors',
    label: 'authors',
  },
  {
    href: '/about',
    label: 'about',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://github.com/olavomoreirap',
    label: 'GitHub',
  },
  {
    href: 'https://twitter.com/zenoniwnl',
    label: 'Twitter',
  },
  {
    href: 'mailto:olavomoreiracontato@gmail.com',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
