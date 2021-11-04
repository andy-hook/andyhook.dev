import { ImageProperties } from './images'
import { Author } from './recommendations'

export type ProjectName = 'aragon' | 'bright' | 'brandwatch' | 'blocks'

type ProjectImageProperties = ImageProperties & {
  color: string
}

type ProjectDetails = {
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
  heroImage: ProjectImageProperties
  thumbnailImage: ProjectImageProperties
  thumbnailImageSmall: ProjectImageProperties
  disabled?: true
  recommendation: Author
}

export const PROJECT_ORDER: ProjectName[] = [
  'bright',
  'aragon',
  'blocks',
  'brandwatch',
]

export const PROJECTS: Record<ProjectName, ProjectDetails> = {
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
    recommendation: 'brett',
    intro:
      'Aragon is an open source software project built on Ethereum technology to empower the creation and management of decentralized organizations, the project empowers users to freely organize and collaborate without borders or intermediaries, creating global and bureaucracy-free organizations and communities.',
    previewImage: {
      imagePath: 'aragon-social-preview.jpg',
      alt:
        'A large array of Aragon user interface components arranged in an offset grid',
    },
    heroImage: {
      imagePath: 'aragon-hero.jpg',
      alt: 'Mockup of the Aragon upgrade website shown on a tablet device',
      color: '#029ac6',
    },
    thumbnailImage: {
      imagePath: 'aragon-thumb.jpg',
      alt: 'Mockup of the Aragon upgrade website shown on a tablet device',
      color: '#029ac6',
    },
    thumbnailImageSmall: {
      imagePath: 'aragon-thumb-small.jpg',
      alt: 'Mockup of the Aragon upgrade website shown on a tablet device',
      color: '#029ac6',
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
    recommendation: 'ze',
    intro:
      'Bright was originally founded as a software development agency in 1999, but more recently has found success and traction by transitioning into a SaaS led, customer centric product company best known for delivering high-quality digital asset management software, exceptional customer support and expert training services.',
    previewImage: {
      imagePath: 'bright-social-preview.jpg',
      alt: 'Multiple tablet devices showing screens of the Dash product',
    },
    heroImage: {
      imagePath: 'bright-hero.jpg',
      alt: 'Mockup of the Dash management software shown on a laptop screen',
      color: '#6e02b2',
    },
    thumbnailImage: {
      imagePath: 'bright-thumb.jpg',
      alt: 'Mockup of asset management software shown on a laptop screen',
      color: '#6e02b2',
    },
    thumbnailImageSmall: {
      imagePath: 'bright-thumb-small.jpg',
      alt: 'Mockup of asset management software shown on a laptop screen',
      color: '#6e02b2',
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
    recommendation: 'jo',
    intro:
      'Brandwatch is the world’s leading digital consumer intelligence company, allowing users to analyze and utilize conversations from across the web and social media. Enabling brands and companies to understand consumer insights, trends, influencers, and brand perception.',
    previewImage: {
      imagePath: 'brandwatch-social-preview.jpg',
      alt:
        'Mockup of the Brandwatch website shown on both a tablet and smartphone',
    },
    heroImage: {
      imagePath: 'brandwatch-hero.jpg',
      alt:
        'Mockup of the Brandwatch website shown on both a tablet and smartphone',
      color: '#702a7b',
    },
    thumbnailImage: {
      imagePath: 'brandwatch-thumb.jpg',
      alt:
        'Mockup of the Brandwatch website shown on both a tablet and smartphone',
      color: '#702a7b',
    },
    thumbnailImageSmall: {
      imagePath: 'brandwatch-thumb-small.jpg',
      alt:
        'Mockup of the Brandwatch website shown on both a tablet and smartphone',
      color: '#702a7b',
    },
    disabled: true,
  },
  blocks: {
    route: '/blocks',
    title: 'Blocks',
    subtitle: 'Explore Ethereum in your browser',
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
    recommendation: 'yohan',
    intro:
      'Blocks is a minimal Ethereum explorer initially built for a technical assessment. After putting together the initial concept I decided to continue extending it as an excuse to try new techniques as well as further familiarise myself with decentralised applications. It features a block overview, transaction list, light / dark themes and shuffle function.',
    previewImage: {
      imagePath: 'blocks-social-preview.jpg',
      alt:
        'Multiple tablet devices showing screens from the Blocks application',
    },
    heroImage: {
      imagePath: 'blocks-hero.jpg',
      alt: 'Mockup of the Blocks application shown on a tablet device',
      color: '#191d21',
    },
    thumbnailImage: {
      imagePath: 'blocks-thumb.jpg',
      alt: 'Mockup of the Blocks application shown on a tablet device',
      color: '#191d21',
    },
    thumbnailImageSmall: {
      imagePath: 'blocks-thumb-small.jpg',
      alt: 'Mockup of the Blocks application shown on a tablet device',
      color: '#191d21',
    },
  },
}
