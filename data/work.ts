export type WorkName = 'aragon' | 'bright' | 'brandwatch' | 'blocks'

type ImageData = {
  src: string
  width: number
  height: number
}

type WorkDetails = {
  route: string
  title: string
  description: string
  role: string
  company: string
  location: string
  tenure: string
  technologies: string[]
  intro: string
  heroImage: ImageData
  thumbnailImage: ImageData
  thumbnailImageSmall: ImageData
  disabled?: boolean
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
    description: 'Collaboration without borders',
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
      src: '/images/aragon-hero.png',
      width: 3136,
      height: 1435,
    },
    thumbnailImage: {
      src: '/images/aragon-thumb.png',
      width: 1986,
      height: 1451,
    },
    thumbnailImageSmall: {
      src: '/images/aragon-thumb-small.png',
      width: 1985,
      height: 1304,
    },
  },
  bright: {
    route: '/bright',
    title: 'Bright Interactive',
    description: 'Realise your brand potential',
    role: 'UI Engineer',
    company: 'Bright Interactive',
    location: 'Brighton, UK',
    tenure: 'Sep 2018 – May 2020',
    technologies: [
      'Angular',
      'TypeScript',
      'NgRx',
      'Playground',
      'Karma / Jasmine',
    ],
    intro:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In luctus leo vitae posuere varius. Donec massa neque, rutrum vestibulum pulvinar sed, laoreet sit amet ipsum. Integer in lorem sed orci tincidunt pulvinar nec fringilla orci. Nullam urna quam, tincidunt eu enim ut, condimentum vehicula tortor.',
    heroImage: {
      src: '/images/bright-hero.png',
      width: 3136,
      height: 1435,
    },
    thumbnailImage: {
      src: '/images/bright-thumb.png',
      width: 1986,
      height: 2131,
    },
    thumbnailImageSmall: {
      src: '/images/bright-thumb-small.png',
      width: 1985,
      height: 1304,
    },
  },
  brandwatch: {
    route: '/brandwatch',
    title: 'Brandwatch',
    description: 'Understand your customers',
    role: 'Senior Front-End Developer',
    company: 'Brandwatch',
    location: 'Brighton, UK',
    tenure: 'Apr 2016 – May 2018',
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP', 'GSAP'],
    intro:
      'Brandwatch is the world’s leading digital consumer intelligence company, allowing users to analyze and utilize conversations from across the web and social media. Enabling brands and companies to understand consumer insights, trends, influencers, and brand perception.',
    heroImage: {
      src: '/images/brandwatch-hero.png',
      width: 3136,
      height: 1435,
    },
    thumbnailImage: {
      src: '/images/brandwatch-thumb.png',
      width: 1986,
      height: 2489,
    },
    thumbnailImageSmall: {
      src: '/images/brandwatch-thumb-small.png',
      width: 1985,
      height: 1304,
    },
    disabled: true,
  },
  blocks: {
    route: '/blocks',
    title: 'Blocks',
    description: 'Ethereum inside your browser',
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
      src: '/images/blocks-hero.png',
      width: 3136,
      height: 1435,
    },
    thumbnailImage: {
      src: '/images/blocks-thumb.png',
      width: 1986,
      height: 1889,
    },
    thumbnailImageSmall: {
      src: '/images/blocks-thumb-small.png',
      width: 1985,
      height: 1304,
    },
    disabled: true,
  },
}
