export type WorkName = 'aragon' | 'bright' | 'brandwatch' | 'blocks'

type ImageData = {
  src: string
  width: number
  height: number
}

type WorkDetails = {
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

const work: Record<WorkName, WorkDetails> = {
  aragon: {
    title: 'Aragon',
    description: 'This is a description',
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
    title: 'Bright',
    description: 'This is a description',
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
    title: 'Brandwatch',
    description: 'This is a description',
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
    title: 'Blocks',
    description: 'This is a description',
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

export default work
