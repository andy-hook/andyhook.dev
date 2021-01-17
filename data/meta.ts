const meta = {
  email: 'hello@andyhook.dev',
  url: 'https://andyhook.dev',
  social: {
    twitter: 'Andy_Hook',
    instagram: 'andyhooky',
    linkedin: 'andrew-hook',
    dribbble: 'andyhook',
    github: 'andy-hook',
  },
}

export type SocialNetworks = keyof typeof meta.social

export default meta
