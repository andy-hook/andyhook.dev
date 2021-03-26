import { SocialIcon } from './icons'

export type SocialNetworkName =
  | 'twitter'
  | 'instagram'
  | 'linkedin'
  | 'dribbble'
  | 'github'

type SocialInfo = {
  title: string
  icon: SocialIcon
  url: string
}

export const META = {
  email: 'hello@andyhook.dev',
  url: 'https://andyhook.dev',
  socialAlias: {
    twitter: 'Andy_Hook',
    instagram: 'andyhooky',
    linkedin: 'andrew-hook',
    dribbble: 'andyhook',
    github: 'andy-hook',
  },
}

export const SOCIAL_NETWORK_INFO: Record<SocialNetworkName, SocialInfo> = {
  twitter: {
    title: 'Twitter',
    icon: 'twitter',
    url: `https://twitter.com/${META.socialAlias.twitter}`,
  },
  instagram: {
    title: 'Instagram',
    icon: 'instagram',
    url: `https://instagram.com/${META.socialAlias.instagram}`,
  },
  linkedin: {
    title: 'Linkedin',
    icon: 'linkedin',
    url: `https://www.linkedin.com/in/${META.socialAlias.linkedin}`,
  },
  dribbble: {
    title: 'Dribbble',
    icon: 'dribbble',
    url: `https://dribbble.com/${META.socialAlias.dribbble}`,
  },
  github: {
    title: 'Github',
    icon: 'github',
    url: `https://github.com/${META.socialAlias.github}`,
  },
}
