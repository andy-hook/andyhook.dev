import {
  Experience,
  Person,
  Testimonial,
  Project,
  SocialLink,
  Data,
  TestimonialId,
  PersonId,
  ProjectId,
  SocialName,
} from './types';

// Company logos
import { ScrollMark } from '@/components/logos/scroll-mark';
import { WorkosMark } from '@/components/logos/workos-mark';
import { ModulzMark } from '@/components/logos/modulz-mark';
import { AragonMark } from '@/components/logos/aragon-mark';
import { BrightMark } from '@/components/logos/bright-mark';
import { BrandwatchMark } from '@/components/logos/brandwatch-mark';
import { TjcMark } from '@/components/logos/tjc-mark';
import { FreelanceMark } from '@/components/logos/freelance-mark';

// Social icons
import { DribbbleIcon } from '@/components/icons/dribbble-icon';
import { GithubIcon } from '@/components/icons/github-icon';
import { InstagramIcon } from '@/components/icons/instagram-icon';
import { TwitterIcon } from '@/components/icons/twitter-icon';
import { LinkedinIcon } from '@/components/icons/linkedin-icon';
import {
  adriGarciaAvatarImage,
  andrewKhanAvatarImage,
  benBrowningAvatarImage,
  benoitGrelardAvatarImage,
  brettSunAvatarImage,
  jennaSmithAvatarImage,
  michaelAllanAvatarImage,
  pedroDuarteAvatarImage,
  patyDavilaAvatarImage,
  pierreBerterAvatarImage,
  vladMorozAvatarImage,
  zeMeirinhosAvatarImage,
  alastairBirdAvatarImage,
  radixThumbImage,
  aragonThumbSmallImage,
  aragonHeroImage,
  aragonThumbImage,
  blocksThumbImage,
  blocksThumbSmallImage,
  blocksHeroImage,
  dashThumbImage,
  dashThumbSmallImage,
  dashHeroImage,
  radixThumbSmallImage,
} from './images';

export const experience: Experience[] = [
  {
    year: '2024',
    logoAsset: ScrollMark,
    title: 'Senior Software Engineer',
    company: 'Scroll AI',
    tenure: 'Present',
    description:
      'All-in-one transcription, translation, summaries and archiving. Tailor made for journalists and writers.',
    link: 'https://scroll.ai',
  },
  {
    year: '2022',
    logoAsset: WorkosMark,
    title: 'Software Engineer',
    company: 'WorkOS',
    tenure: 'Mar 2022 – May 2024',
    description:
      'WorkOS acquired Modulz in March 2022. After acquisition I continued to maintain Radix Primitives, building new components and shipping the stable 1.0 release. I would later transition to a horizontal UI team where I led projects to re-architect the dashboard and support the roll out of User Management.',
    link: 'https://workos.com',
  },
  {
    year: '2021',
    logoAsset: ModulzMark,
    title: 'Senior Product Engineer',
    company: 'Modulz',
    tenure: 'Apr 2021 – Mar 2022',
    description:
      'Core maintainer of Radix Primitives, an accessibility focused toolkit of headless UI components. I collaborated closely with the team to scope, shape, research and implement WAI-ARIA compliant accessibility patterns and DX centric component APIs.',
    link: 'https://modulz.app',
  },
  {
    year: '2020',
    logoAsset: AragonMark,
    title: 'Senior UI Engineer',
    company: 'Aragon',
    tenure: 'May 2020 – Jan 2021',
    description:
      'Using Ethereum technology to build censorship resistant tools for organisation and collaboration on the blockchain. Shipped and maintained high-quality interfaces for the Aragon dashboard, upgrade and token conversion tools as well as a rewards program to incentivise staking in automated liquidity pools.',
    link: 'https://aragon.org',
  },
  {
    year: '2018',
    logoAsset: BrightMark,
    title: 'UI Engineer',
    company: 'Bright Interactive',
    tenure: 'Sep 2018 – Jan 2021',
    description:
      'Built the user interface for a next-generation digital asset management product. Focused on crafting a front end that is intuitive, reliable and extremely fast. Dash was built as an Angular SPA with Typescript, RxJS and supported by a micro-service back end running on Amazon Web Services.',
    link: 'https://builtbybright.com',
  },
  {
    year: '2016',
    logoAsset: BrandwatchMark,
    title: 'Senior Front-End Developer',
    company: 'Brandwatch',
    tenure: 'Apr 2016 – May 2018',
    description:
      'Mentored on scalable CSS architecture, system focused UX, interaction, animation and browser performance. Ensured the team scoped and implemented with a component driven mindset for consistency, scalability, and fast iteration.',
    link: 'https://brandwatch.com',
  },
  {
    year: '2012',
    logoAsset: TjcMark,
    title: 'Front-End Developer',
    company: 'Jamieson Consultancy',
    tenure: 'Jan 2012 – Jan 2016',
    description:
      'Design and development of modular front end component libraries with a focus on user experience, progressive enhancement and the latest HTML, CSS, and JavaScript technologies. Building ecommerce solutions for a variety of retail clients.',
    link: 'https://tjcuk.co.uk',
  },
  {
    year: '2009',
    logoAsset: FreelanceMark,
    title: 'Digital Designer',
    company: 'Freelance',
    tenure: 'Jul 2009 – Feb 2012',
    description:
      'Worked directly with a variety of clients on a range of creative web projects and campaigns, from visual conception through to delivery of completed assets and deployed front end code.',
    link: 'https://andyhook.dev',
  },
];

export const people: Person[] = [
  {
    id: 'vlad',
    name: 'Vlad Moroz',
    avatar: vladMorozAvatarImage,
    bio: 'https://x.com/vladyslavmoroz',
  },
  {
    id: 'benoit',
    name: 'Benoît Grélard',
    avatar: benoitGrelardAvatarImage,
    bio: 'https://x.com/benoitgrelard',
  },
  {
    id: 'brett',
    name: 'Brett Sun',
    avatar: brettSunAvatarImage,
    bio: 'https://x.com/sohkai',
  },
  {
    id: 'andrew',
    name: 'Andrew Khan',
    avatar: andrewKhanAvatarImage,
    bio: 'https://www.linkedin.com/in/andrewkhan1',
  },
  {
    id: 'ze',
    name: 'Zé Meirinhos',
    avatar: zeMeirinhosAvatarImage,
    bio: 'https://www.linkedin.com/in/zmeirinhos',
  },
  {
    id: 'michael',
    name: 'Michael Allan',
    avatar: michaelAllanAvatarImage,
    bio: 'https://www.linkedin.com/in/mikeyallan',
  },
  {
    id: 'ben',
    name: 'Ben Browning',
    avatar: benBrowningAvatarImage,
    bio: 'https://www.linkedin.com/in/ben-browning-55110580',
  },
  {
    id: 'jenna',
    name: 'Jenna Smith',
    avatar: jennaSmithAvatarImage,
    bio: 'https://x.com/jjenzz',
  },
  {
    id: 'pedro',
    name: 'Pedro Duarte',
    avatar: pedroDuarteAvatarImage,
    bio: 'https://x.com/peduarte',
  },
  {
    id: 'adri',
    name: 'Adri García',
    avatar: adriGarciaAvatarImage,
    bio: 'https://x.com/owisixseven',
  },
  {
    id: 'paty',
    name: 'Patricia Davila',
    avatar: patyDavilaAvatarImage,
    bio: 'https://x.com/dizzypaty',
  },
  {
    id: 'pierre',
    name: 'Pierre Bertet',
    avatar: pierreBerterAvatarImage,
    bio: 'https://x.com/bpierre',
  },
  {
    id: 'alastair',
    name: 'Alastair Bird',
    avatar: alastairBirdAvatarImage,
    bio: 'https://www.linkedin.com/in/alastair-bird/',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'vlad',
    name: getPersonById('vlad')!.name,
    avatar: getPersonById('vlad')!.avatar,
    bio: getPersonById('vlad')!.bio,
    role: 'UI Lead',
    company: 'WorkOS',
    full: 'Full quote here.',
    excerpt:
      'Andy is one of the best engineers I have ever worked with. He is thorough, has a great eye for design detail, incredible intuition for simplicity, and holds himself and his team to the highest of standards.',
  },
  {
    id: 'benoit',
    name: getPersonById('benoit')!.name,
    avatar: getPersonById('benoit')!.avatar,
    bio: getPersonById('benoit')!.bio,
    role: 'Co-creator of Radix',
    company: 'WorkOS',
    full: 'Andy has great design-sense and attention to detail, which makes him a key contributor in any environment dealing with user interfaces. He truly cares about what the end user experience will be, considering all paths, not just the happy, but errors, network and edge cases as well.',
    excerpt:
      'Whether researching and developing accessible components for Radix UI, writing documentation, or tackling large architecture changes to the WorkOS dashboard, Andy has always applied the same amount of rigour to his work.',
  },
  {
    id: 'brett',
    name: getPersonById('brett')!.name,
    avatar: getPersonById('brett')!.avatar,
    bio: getPersonById('brett')!.bio,
    role: 'CTO',
    company: 'Aragon',
    full: 'Andy not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him. He produces well-crafted, precise, and polished interfaces, but more importantly as a senior engineer, demonstrates a strong ability to pass on his own strengths to others.',
    excerpt:
      'I have seldom met an individual who personifies the senior UI/UX engineer as well as Andy. He not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him.',
  },
  {
    id: 'andrew',
    name: getPersonById('andrew')!.name,
    avatar: getPersonById('andrew')!.avatar,
    bio: getPersonById('andrew')!.bio,
    role: 'Lead Architect',
    company: 'Opia',
    full: 'Full quote here.',
    excerpt:
      'Andy has a tremendous understanding of front-end on the web and was often a source of knowledge for me in areas such as web performance, animation and technology.',
  },
  {
    id: 'ze',
    name: getPersonById('ze')!.name,
    avatar: getPersonById('ze')!.avatar,
    bio: getPersonById('ze')!.bio,
    role: 'Sr Developer',
    company: 'Bright',
    full: 'Andy is brilliant to work with, as dedicated to well polished detail as he is to the broader sweep of creative design. I have enjoyed working with someone so innovative who has collaborated with me and the wider team on finding efficient constructive solutions.',
    excerpt:
      "Andy is inspiring, supportive, curious, always looking to expand his skills, and generally a great person to be around. Working in a team he understands the importance of clear goals and how to best achieve the team's aims.",
  },
  {
    id: 'michael',
    name: getPersonById('michael')!.name,
    avatar: getPersonById('michael')!.avatar,
    bio: getPersonById('michael')!.bio,
    role: 'Head of Design',
    company: 'Brandwatch',
    full: 'Full quote here.',
    excerpt:
      "It's rare to see a talent in design matched so equally by competency in development. He is someone I trust. I can give him the information he needs to deliver a project and I know it will be done to the highest quality possible.",
  },
  {
    id: 'ben',
    name: getPersonById('ben')!.name,
    avatar: getPersonById('ben')!.avatar,
    bio: getPersonById('ben')!.bio,
    role: 'UX Engineer',
    company: 'Bright',
    full: 'Andy is equally brilliant at creative visual design as he is with the technical side of engineering a modern web app. Whatever task he is working on he will go above and beyond to deliver at a very high quality level. As a fellow UI developer I have learnt a lot from working with him.',
    excerpt:
      'Andy is a rare find in UI development. He is equally brilliant at creative visual design as he is with the technical aspect of engineering a modern web app.',
  },
];

export const projects: Project[] = [
  {
    id: 'radix',
    title: 'Radix',
    subtitle: "The world's most popular headless library",
    externalUrl: 'https://www.radix-ui.com',
    role: 'Senior UI Engineer',
    tenure: 'April 2021 – May 2024',
    technologies: [],
    intro: '',
    thumbnail: radixThumbImage,
    thumbnailSmall: radixThumbSmallImage,
    heroImage: aragonHeroImage,
    testimonial: getTestimonialById('benoit')!,
    team: [
      { ...getPersonById('benoit')!, role: 'Engineer' },
      { ...getPersonById('jenna')!, role: 'Engineer' },
      { ...getPersonById('vlad')!, role: 'Product Designer' },
      { ...getPersonById('pedro')!, role: 'Developer Advocate' },
    ],
    additionalTeam: 2,
  },
  {
    id: 'aragon',
    title: 'Aragon',
    subtitle: 'Collaboration without borders',
    role: 'Senior UI Engineer',
    tenure: 'May 2020 – Jan 2021',
    technologies: [
      'React',
      'TypeScript',
      'Ethers.js',
      'Next',
      'Styled Components',
      'Jest & Testing Library',
    ],
    intro:
      'Aragon is an open source software project built on Ethereum technology to empower the creation and management of decentralized organizations, the project empowers users to freely organize and collaborate without borders or intermediaries, creating global and bureaucracy-free organizations and communities.',
    thumbnail: aragonThumbImage,
    thumbnailSmall: aragonThumbSmallImage,
    heroImage: aragonHeroImage,
    testimonial: getTestimonialById('brett')!,
    team: [
      { ...getPersonById('pierre')!, role: 'Engineer' },
      { ...getPersonById('paty')!, role: 'Product Designer' },
      { ...getPersonById('adri')!, role: 'Brand Designer' },
    ],
    additionalTeam: 4,
  },
  {
    id: 'blocks',
    title: 'Blocks',
    subtitle: 'Ethereum inside your browser',
    role: 'Front-End Developer',
    tenure: 'Apr 2020',
    technologies: [
      'React',
      'TypeScript',
      'Ethers.js',
      'Next',
      'Styled Components',
      'Jest & Testing Library',
    ],
    intro:
      'Blocks is a minimal Ethereum explorer initially built for a technical assessment. After putting together the initial concept I decided to continue extending it as an excuse to try new techniques as well as further familiarise myself with decentralised applications. It features a block overview, transaction list, light / dark themes and shuffle function.',
    thumbnail: blocksThumbImage,
    thumbnailSmall: blocksThumbSmallImage,
    heroImage: blocksHeroImage,
    testimonial: getTestimonialById('ben')!,
    team: [],
    additionalTeam: 0,
  },
  {
    id: 'dash',
    title: 'Dash',
    subtitle: 'Modern digital asset management',
    role: 'UI Engineer',
    tenure: 'Sep 2018 – May 2020',
    technologies: ['Angular', 'TypeScript', 'Sass (SCSS)', 'Storybook', 'Karma & Jasmine'],
    intro:
      'Bright was originally founded as a software development agency in 1999, but more recently has found success and traction by transitioning into a SaaS led, customer centric product company best known for delivering high-quality digital asset management software, exceptional customer support and expert training services.',
    thumbnail: dashThumbImage,
    thumbnailSmall: dashThumbSmallImage,
    heroImage: dashHeroImage,
    testimonial: getTestimonialById('ze')!,
    team: [
      { ...getPersonById('ze')!, role: 'Engineer' },
      { ...getPersonById('alastair')!, role: 'UX Engineer' },
      { ...getPersonById('ben')!, role: 'UX Engineer' },
    ],
    additionalTeam: 4,
  },
];

export const social: Record<SocialName, SocialLink> = {
  dribbble: {
    name: 'Dribbble',
    icon: DribbbleIcon,
    url: 'https://dribbble.com/andyhook',
  },
  github: {
    name: 'GitHub',
    icon: GithubIcon,
    url: 'https://github.com/andy-hook',
  },
  instagram: {
    name: 'Instagram',
    icon: InstagramIcon,
    url: 'https://www.instagram.com/andyhooky',
  },
  twitter: {
    name: 'Twitter',
    icon: TwitterIcon,
    url: 'https://twitter.com/Andy_Hook',
  },
  linkedin: {
    name: 'LinkedIn',
    icon: LinkedinIcon,
    url: 'https://www.linkedin.com/in/andrew-hook/',
  },
};

// Export the complete data structure
export const data: Data = {
  experience,
  people,
  testimonials,
  projects,
  social,
};

// Utility functions
export function getTestimonialById(id: TestimonialId) {
  return testimonials.find((testimonial) => testimonial.id === id);
}

export function getPersonById(id: PersonId) {
  return people.find((person) => person.id === id);
}

export function getProjectById(id: ProjectId) {
  return projects.find((project) => project.id === id);
}
