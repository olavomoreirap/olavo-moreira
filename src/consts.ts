import type { BlogCategory, IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Olavo Moreira',
  description:
    'Backend Developer Java & Spring Boot. Estudos, trilhas e projetos sobre o ecossistema Java.',
  href: 'https://olavo-moreira.vercel.app',
  author: 'Olavo Moreira',
  locale: 'pt-BR',
  featuredPostCount: 2,
  postsPerPage: 3,
}

/** Card de compartilhamento (Open Graph) das páginas sem imagem própria. */
export const DEFAULT_OG_IMAGE = '/static/1200x630.png'

/** Fonte única dos dados de contato (docs/adr/0002 e 0006). */
export const CONTACT = {
  email: 'olavomoreiracontato@gmail.com',
  linkedin: 'https://linkedin.com/in/olavomoreira',
  github: 'https://github.com/olavomoreirap',
  /** Defina como '/cv-olavo-moreira.pdf' quando o arquivo existir em public/. */
  cvHref: null as string | null,
} as const

export const NAV_LINKS: SocialLink[] = [
  { href: '/blog', label: 'blog' },
  { href: '/trilhas', label: 'trilhas' },
  { href: '/about', label: 'sobre' },
]

export const SOCIAL_LINKS: SocialLink[] = [
  { href: CONTACT.github, label: 'GitHub' },
  { href: CONTACT.linkedin, label: 'LinkedIn' },
  { href: `mailto:${CONTACT.email}`, label: 'Email' },
  { href: '/rss.xml', label: 'RSS' },
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
    description: 'Fundamentos da linguagem, POO e coleções para uma base sólida.',
    icon: 'lucide:coffee',
  },
  {
    id: 'spring-boot',
    label: 'Spring Boot',
    description: 'APIs, dados, testes e deploy em produção.',
    icon: 'lucide:leaf',
  },
]
