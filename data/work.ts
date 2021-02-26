import { ImageProperties } from './images'

export type WorkName = 'aragon' | 'bright' | 'brandwatch' | 'blocks'

type WorkDetails = {
  route?: string
  title: string
  subtitle: string
  excerpt: string
  role: string
  company: string
  location: string
  tenure: string
  technologies: string[]
  intro: string
  heroImage: ImageProperties
  thumbnailImage: ImageProperties
  thumbnailImageSmall: ImageProperties
}

export const WORK_ORDER: WorkName[] = [
  'bright',
  'aragon',
  'blocks',
  'brandwatch',
]

export const WORK: Record<WorkName, WorkDetails> = {
  aragon: {
    title: 'Aragon',
    subtitle: 'Collaboration without borders',
    excerpt: '',
    role: 'Senior UI Engineer',
    company: 'Aragon',
    location: 'Remote',
    tenure: 'May 2020 – Jan 2021',
    technologies: [
      'React',
      'TypeScript',
      'Next',
      'Styled Components',
      'Ethers',
      'Jest / Testing Library',
    ],
    intro:
      'Aragon is an open source software project that allows for the creation and management of decentralized organizations, the project empowers users to freely organize and collaborate without borders or intermediaries, creating global and bureaucracy-free organizations and communities.',
    heroImage: {
      imagePath: 'aragon-hero.png',
    },
    thumbnailImage: {
      imagePath: 'aragon-thumb.png',
    },
    thumbnailImageSmall: {
      imagePath: 'aragon-thumb-small.png',
    },
  },
  bright: {
    route: '/bright',
    title: 'Bright Interactive',
    subtitle: 'Realise your brand potential',
    excerpt:
      'In 2018 I joined the Bright team to evolve and elevate the user interface of Dash, a new streamlined digital asset management product that the team were busy preparing to ship as an MVP.',
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
    heroImage: {
      imagePath: 'bright-hero.png',
    },
    thumbnailImage: {
      imagePath: 'bright-thumb.png',
    },
    thumbnailImageSmall: {
      imagePath: 'bright-thumb-small.png',
    },
  },
  brandwatch: {
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
    heroImage: {
      imagePath: 'brandwatch-hero.png',
    },
    thumbnailImage: {
      imagePath: 'brandwatch-thumb.png',
    },
    thumbnailImageSmall: {
      imagePath: 'brandwatch-thumb-small.png',
    },
  },
  blocks: {
    route: 'https://blocks.andyhook.dev',
    title: 'Blocks',
    subtitle: 'Ethereum inside your browser',
    excerpt: '',
    role: 'Front-End Developer',
    company: 'Side Project',
    location: 'Remote',
    tenure: 'Apr 2020',
    technologies: [
      'React',
      'TypeScript',
      'React Spring',
      'Gatsby',
      'Styled Components',
      'Jest / Testing Library',
    ],
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus leo vitae posuere varius. Donec massa neque, rutrum vestibulum pulvinar sed, laoreet sit amet ipsum. Integer in lorem sed orci tincidunt pulvinar nec fringilla orci. Nullam urna quam, tincidunt eu enim ut, condimentum vehicula tortor.',
    heroImage: {
      imagePath: 'blocks-hero.png',
    },
    thumbnailImage: {
      imagePath: 'blocks-thumb.png',
    },
    thumbnailImageSmall: {
      imagePath: 'blocks-thumb-small.png',
    },
  },
}
