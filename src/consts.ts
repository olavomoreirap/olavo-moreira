import type { BlogCategory, IconMap, SocialLink, Site } from '@/types'

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
    href: '/trilhas',
    label: 'trilhas',
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

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    id: 'java-inicial',
    label: 'Java Inicial',
    description: 'Fundamentos da linguagem, POO e colecoes para base solida.',
    icon: 'lucide:coffee',
    accent: 'from-amber-500/20 via-orange-500/10 to-transparent',
  },
  {
    id: 'spring-boot',
    label: 'Spring Boot',
    description: 'APIs, dados, testes e deploy em producao.',
    icon: 'lucide:leaf',
    accent: 'from-emerald-500/20 via-green-500/10 to-transparent',
  },
]
