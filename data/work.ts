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
  thumbnailImageSmall: ImageData
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
  },
}
