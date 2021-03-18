import { ImageProperties } from './images'

export type WorkName = 'aragon' | 'bright' | 'brandwatch' | 'blocks'

type WorkDetails = {
  route: string
  title: string
  subtitle: string
  excerpt: string
  role: string
  company: string
  location: string
  tenure: string
  technologies: string[]
  intro: string
  previewImage: ImageProperties
  heroImage: ImageProperties
  thumbnailImage: ImageProperties
  thumbnailImageSmall: ImageProperties
  disabled?: true
}

export const WORK_ORDER: WorkName[] = [
  'bright',
  'aragon',
  'blocks',
  'brandwatch',
]

export const WORK: Record<WorkName, WorkDetails> = {
  aragon: {
    route: '/aragon',
    title: 'Aragon',
    subtitle: 'Collaboration without borders',
    excerpt: 'Furthering Aragons mission to revolutionise governance',
    role: 'Senior UI Engineer',
    company: 'Aragon',
    location: 'Remote',
    tenure: 'May 2020 – Jan 2021',
    technologies: [
      'React',
      'TypeScript',
      'Ethers.js',
      'Web3.js',
      'Next.js',
      'React Spring',
      'Styled Components',
      'Jest & Testing Library',
    ],
    intro:
      'Aragon is an open source software project built on Ethereum technology to empower the creation and management of decentralized organizations, the project empowers users to freely organize and collaborate without borders or intermediaries, creating global and bureaucracy-free organizations and communities.',
    previewImage: {
      imagePath: 'aragon-social-preview.jpg',
      alt:
        'Mockup of the Aragon company upgrade website shown on a tablet device',
    },
    heroImage: {
      imagePath: 'aragon-hero.jpg',
      alt:
        'Mockup of the Aragon company upgrade website shown on a tablet device',
    },
    thumbnailImage: {
      imagePath: 'aragon-thumb.jpg',
      alt:
        'Mockup of the Aragon company upgrade website shown on a tablet device',
    },
    thumbnailImageSmall: {
      imagePath: 'aragon-thumb-small.jpg',
      alt:
        'Mockup of the Aragon company upgrade website shown on a tablet device',
    },
  },
  bright: {
    route: '/bright',
    title: 'Bright Interactive',
    subtitle: 'Realise your brand potential',
    excerpt:
      'Evolving and elevating the user interface of Dash, a streamlined digital asset management product from Bright',
    role: 'UI Engineer',
    company: 'Bright Interactive',
    location: 'Brighton, UK',
    tenure: 'Sep 2018 – May 2020',
    technologies: [
      'Angular 9+',
      'TypeScript',
      'NgRx',
      'Sass (scss)',
      'Storybook',
      'Karma & Jasmine',
    ],
    intro:
      'Bright was originally founded as a software development agency in 1999, but more recently has found success and traction by transitioning into a SaaS led, customer centric product company best known for delivering high-quality digital asset management software, exceptional customer support and expert training services.',
    previewImage: {
      imagePath: 'bright-social-preview.jpg',
      alt: 'Mockup of the Dash management software shown on a laptop screen',
    },
    heroImage: {
      imagePath: 'bright-hero.jpg',
      alt: 'Mockup of the Dash management software shown on a laptop screen',
    },
    thumbnailImage: {
      imagePath: 'bright-thumb.jpg',
      alt: 'Mockup of asset management software shown on a laptop screen',
    },
    thumbnailImageSmall: {
      imagePath: 'bright-thumb-small.jpg',
      alt: 'Mockup of asset management software shown on a laptop screen',
    },
  },
  brandwatch: {
    route: '/brandwatch',
    title: 'Brandwatch',
    subtitle: 'Understand your customers',
    excerpt: '',
    role: 'Senior Front-End Developer',
    company: 'Brandwatch',
    location: 'Brighton, UK',
    tenure: 'Apr 2016 – May 2018',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'GSAP'],
    intro:
      'Brandwatch is the world’s leading digital consumer intelligence company, allowing users to analyze and utilize conversations from across the web and social media. Enabling brands and companies to understand consumer insights, trends, influencers, and brand perception.',
    previewImage: {
      imagePath: 'brandwatch-social-preview.jpg',
      alt:
        'Mockup of the Brandwatch company website shown on both a tablet and smartphone',
    },
    heroImage: {
      imagePath: 'brandwatch-hero.jpg',
      alt:
        'Mockup of the Brandwatch company website shown on both a tablet and smartphone',
    },
    thumbnailImage: {
      imagePath: 'brandwatch-thumb.jpg',
      alt:
        'Mockup of the Brandwatch company website shown on both a tablet and smartphone',
    },
    thumbnailImageSmall: {
      imagePath: 'brandwatch-thumb-small.jpg',
      alt:
        'Mockup of the Brandwatch company website shown on both a tablet and smartphone',
    },
    disabled: true,
  },
  blocks: {
    route: '/blocks',
    title: 'Blocks',
    subtitle: 'Blockchain in your browser',
    excerpt: '',
    role: 'Front-End Developer',
    company: 'Side Project',
    location: 'Remote',
    tenure: 'Apr 2020',
    technologies: [
      'React',
      'TypeScript',
      'Ethers.js',
      'React Spring',
      'Gatsby',
      'Styled Components',
      'Jest / Testing Library',
    ],
    intro:
      'Blocks is a minimal Ethereum explorer initially built for a technical assessment. After putting together the initial concept I decided to continue extending it as an excuse to try new techniques as well as further familiarise myself with decentralised applications. It features a block overview, transaction list, light / dark themes and shuffle function.',
    previewImage: {
      imagePath: 'blocks-social-preview.jpg',
      alt:
        'Mockup of an ethereum block viewing application shown on a tablet device',
    },
    heroImage: {
      imagePath: 'blocks-hero.jpg',
      alt:
        'Mockup of an ethereum block viewing application shown on a tablet device',
    },
    thumbnailImage: {
      imagePath: 'blocks-thumb.jpg',
      alt:
        'Mockup of an ethereum block viewing application shown on a tablet device',
    },
    thumbnailImageSmall: {
      imagePath: 'blocks-thumb-small.jpg',
      alt:
        'Mockup of an ethereum block viewing application shown on a tablet device',
    },
  },
}
