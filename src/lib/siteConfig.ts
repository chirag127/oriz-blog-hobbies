export interface OrizSiteConfig {
  slug: string
  name: string
  origin: string
  tagline: string
  description?: string
}

export const SITE_CONFIG: OrizSiteConfig = {
  slug: 'hobbies',
  name: 'The Bench',
  origin: 'https://hobbies-blog.oriz.in',
  tagline: 'Hobbies & gear worth the bench space',
  description: 'Honest starter guides and gear notes for film, keyboards, woodworking, and more — by Chirag Singhal.',
}
