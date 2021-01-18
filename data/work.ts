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
  heroImage: ImageData
  thumbnailImage: ImageData
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
    heroImage: {
      src: '/test.png',
      width: 1000,
      height: 500,
    },
    thumbnailImage: {
      src: '/test.png',
      width: 565,
      height: 382,
    },
  },
  bright: {
    route: '/bright',
    title: 'Bright',
    description: 'Realise your brand potential',
    role: 'UI Engineer',
    company: 'Bright',
    location: 'Brighton, UK',
    tenure: 'Sep 2018 – May 2020',
    technologies: [
      'Angular',
      'TypeScript',
      'NgRx',
      'Playground',
      'Karma / Jasmine',
    ],
    heroImage: {
      src: '/test.png',
      width: 1000,
      height: 500,
    },
    thumbnailImage: {
      src: '/test.png',
      width: 565,
      height: 597,
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
    heroImage: {
      src: '/test.png',
      width: 1000,
      height: 500,
    },
    thumbnailImage: {
      src: '/test.png',
      width: 565,
      height: 703,
    },
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
    heroImage: {
      src: '/test.png',
      width: 1000,
      height: 500,
    },
    thumbnailImage: {
      src: '/test.png',
      width: 565,
      height: 533,
    },
  },
}
