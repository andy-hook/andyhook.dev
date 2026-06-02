import {
  Experience,
  Person,
  Testimonial,
  Project,
  SocialLink,
  TestimonialId,
  PersonId,
  ProjectId,
  SocialName,
  Artifact,
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
  scrollThumbImage,
  scrollThumbSmallImage,
  scrollHeroImage,
  itamarRavidAvatarImage,
  benGadAvatarImage,
  elikEizenbergAvatarImage,
  henryOswaldAvatarImage,
  sketchbookThumbImage,
  sketchbookThumbSmallImage,
  sketchbookAnglesImage,
  sketchbookCoupleImage,
  sketchbookFacesImage,
  sketchbookFemaleStudyImage,
  sketchbookHeadspaceImage,
  sketchbookMaleStudyImage,
  sketchbookMapImage,
  sketchbookRasputinImage,
  sketchbookScarfImage,
  sketchbookSnowmanImage,
  sketchbookSuitImage,
  sketchbookTattooImage,
  sketchbookTreeMarkImage,
  sketchbookSandsTimeImage,
  sketchbookPatchWorkImage,
  sketchbookOrcImage,
} from './images';

export const experience: Experience[] = [
  {
    year: '2024',
    logoAsset: ScrollMark,
    title: 'Senior Software Engineer',
    company: 'Scroll AI',
    tenure: 'Sept 2024 – June 2026',
    description:
      'I worked across nearly every user surface of the product, including rich-text editing, CRDT-based collaboration, chat rendering, sharing and permissions, authentication and entitlements, browser extensions, spreadsheet autofill interfaces, billing, and more.',
    link: 'https://scroll.ai',
  },
  {
    year: '2022',
    logoAsset: WorkosMark,
    title: 'Software Engineer',
    company: 'WorkOS',
    tenure: 'Mar 2022 – May 2024',
    description:
      'Acquired in March 2022. I continued as maintainer of Radix UI, shipping the stable v1 release which grew to eco-system dominance (130m monthly). I later joined a horizontal product team, leading the dashboard re-architecture and supporting the rollout of User Management.',
    link: 'https://workos.com',
  },
  {
    year: '2021',
    logoAsset: ModulzMark,
    title: 'Senior Product Engineer',
    company: 'Modulz',
    tenure: 'Apr 2021 – Mar 2022',
    description:
      'Core maintainer of Radix UI, a popular headless UI library used by millions of developers. Worked closely with the team to scope, shape, research and implement WAI-ARIA compliant accessible UI patterns and DX centric component APIs.',
    link: 'https://modulz.app',
  },
  {
    year: '2020',
    logoAsset: AragonMark,
    title: 'Senior UI Engineer',
    company: 'Aragon',
    tenure: 'May 2020 – Jan 2021',
    description:
      'Built censorship resistant tools for organisation and collaboration on the Ethereum blockchain. Shipped and maintained high-quality interfaces for the dashboard, upgrade and token conversion tools as well as a rewards program to incentivise staking in automated liquidity pools.',
    link: 'https://aragon.org',
  },
  {
    year: '2018',
    logoAsset: BrightMark,
    title: 'UX Engineer',
    company: 'Bright Interactive',
    tenure: 'Sep 2018 – Jan 2021',
    description:
      'Built the user interface of the Dash digital asset management platform. Crafted a front-end that is intuitive, reliable and extremely fast. Dash was built as an Angular SPA with Typescript, RxJS and supported by a micro-service back-end running on AWS.',
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
    bio: 'https://www.linkedin.com/in/jennasmith',
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
  {
    id: 'itamar',
    name: 'Itamar Ravid',
    avatar: itamarRavidAvatarImage,
    bio: 'https://www.linkedin.com/in/iravid/',
  },
  {
    id: 'ben-g',
    name: 'Ben Gad',
    avatar: benGadAvatarImage,
    bio: 'https://www.linkedin.com/in/bengad/',
  },
  {
    id: 'elik',
    name: 'Elik Eizenberg',
    avatar: elikEizenbergAvatarImage,
    bio: 'https://www.linkedin.com/in/elikeizenberg/',
  },
  {
    id: 'henry',
    name: 'Henry Oswald',
    avatar: henryOswaldAvatarImage,
    bio: 'https://www.linkedin.com/in/henryoswald/',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 'vlad',
    name: getPersonById('vlad').name,
    avatar: getPersonById('vlad').avatar,
    bio: getPersonById('vlad').bio,
    role: 'Co-founder',
    company: 'paper.design',
    full: 'Full quote here.',
    excerpt:
      'Andy is one of the best engineers I have ever worked with. He is thorough, has a great eye for design detail, incredible intuition for simplicity, and holds himself and his team to the highest of standards.',
  },
  {
    id: 'benoit',
    name: getPersonById('benoit').name,
    avatar: getPersonById('benoit').avatar,
    bio: getPersonById('benoit').bio,
    role: 'Co-creator of Radix',
    company: 'Raycast',
    full: 'Andy has great design-sense and attention to detail, which makes him a key contributor in any environment dealing with user interfaces. He truly cares about what the end user experience will be, considering all paths, not just the happy, but errors, network and edge cases as well.',
    excerpt:
      'Whether researching and developing accessible components for Radix UI, writing documentation, or tackling large architecture changes to the WorkOS dashboard, Andy has always applied the same amount of rigour to his work.',
  },
  {
    id: 'brett',
    name: getPersonById('brett').name,
    avatar: getPersonById('brett').avatar,
    bio: getPersonById('brett').bio,
    role: 'CTO',
    company: 'Aragon',
    full: 'Andy not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him. He produces well-crafted, precise, and polished interfaces, but more importantly as a senior engineer, demonstrates a strong ability to pass on his own strengths to others.',
    excerpt:
      'I have seldom met an individual who personifies the senior UI/UX engineer as well as Andy. He not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him.',
  },
  {
    id: 'andrew',
    name: getPersonById('andrew').name,
    avatar: getPersonById('andrew').avatar,
    bio: getPersonById('andrew').bio,
    role: 'Lead Architect',
    company: 'Opia',
    full: 'Full quote here.',
    excerpt:
      'Andy has a tremendous understanding of front-end on the web and was often a source of knowledge for me in areas such as web performance, animation and technology.',
  },
  {
    id: 'ze',
    name: getPersonById('ze').name,
    avatar: getPersonById('ze').avatar,
    bio: getPersonById('ze').bio,
    role: 'Sr Developer',
    company: 'Bright',
    full: 'Andy is brilliant to work with, as dedicated to well polished detail as he is to the broader sweep of creative design. I have enjoyed working with someone so innovative who has collaborated with me and the wider team on finding efficient constructive solutions.',
    excerpt:
      "Andy is inspiring, supportive, curious, always looking to expand his skills, and generally a great person to be around. Working in a team he understands the importance of clear goals and how to best achieve the team's aims.",
  },
  {
    id: 'michael',
    name: getPersonById('michael').name,
    avatar: getPersonById('michael').avatar,
    bio: getPersonById('michael').bio,
    role: 'Head of Design',
    company: 'Brandwatch',
    full: 'Full quote here.',
    excerpt:
      "It's rare to see a talent in design matched so equally by competency in development. He is someone I trust. I can give him the information he needs to deliver a project and I know it will be done to the highest quality possible.",
  },
  {
    id: 'ben',
    name: getPersonById('ben').name,
    avatar: getPersonById('ben').avatar,
    bio: getPersonById('ben').bio,
    role: 'UX Engineer',
    company: 'Bright',
    full: 'Andy is equally brilliant at creative visual design as he is with the technical side of engineering a modern web app. Whatever task he is working on he will go above and beyond to deliver at a very high quality level. As a fellow UI developer I have learnt a lot from working with him.',
    excerpt:
      'Andy is a rare find in UI development. He is equally brilliant at creative visual design as he is with the technical aspect of engineering a modern web app.',
  },
  {
    id: 'elik',
    name: getPersonById('elik').name,
    avatar: getPersonById('elik').avatar,
    bio: getPersonById('elik').bio,
    role: 'CEO & Founder',
    company: 'Scroll AI',
    full: "Andy is self-reliant, smart, and technically very strong. He doesn't just build what is asked, but thinks through what users are trying to do, where the product might feel confusing, and how to make the final experience simpler, clearer, and more useful.",
    excerpt: 'TBC',
  },
];

export const projects: Project[] = [
  {
    id: 'radix',
    type: 'professional',
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
    testimonial: getTestimonialById('benoit'),
    team: [
      { ...getPersonById('benoit'), role: 'Engineer' },
      { ...getPersonById('jenna'), role: 'Engineer' },
      { ...getPersonById('vlad'), role: 'Product Designer' },
      { ...getPersonById('pedro'), role: 'Developer Advocate' },
    ],
    additionalTeam: 2,
  },
  {
    id: 'scroll',
    type: 'professional',
    title: 'Scroll',
    subtitle: 'Powerful knowledge agents',
    role: 'Software Engineer',
    tenure: 'Sept 2024 – June 2026',
    technologies: [
      'React',
      'Typescript',
      'Next.js',
      'Zero Sync',
      'ProseMirror',
      'tRPC',
      'Temporal',
    ],
    intro:
      'Scroll transforms your company’s knowledge into powerful domain experts. Connect your organizational documents, spreadsheets, videos, and internal resources and deploy powerful knowledge agents across your product surfaces. Scroll delivers instant, reliable answers and streamlines workflows.',
    thumbnail: scrollThumbImage,
    thumbnailSmall: scrollThumbSmallImage,
    heroImage: scrollHeroImage,
    testimonial: getTestimonialById('elik'),
    team: [
      { ...getPersonById('elik'), role: 'Lead Product' },
      { ...getPersonById('itamar'), role: 'Lead Engineer' },
      { ...getPersonById('ben-g'), role: 'Product Designer' },
      { ...getPersonById('jenna'), role: 'Software Engineer' },
      { ...getPersonById('henry'), role: 'Software Engineer' },
    ],
    additionalTeam: 2,
  },
  {
    id: 'aragon',
    type: 'professional',
    title: 'Aragon',
    subtitle: 'Collaboration without borders',
    role: 'Senior UI Engineer',
    tenure: 'May 2020 – Jan 2021',
    technologies: [
      'React',
      'TypeScript',
      'Ethers.js',
      'Styled Components',
      'Next.js',
      'Jest & Testing Library',
    ],
    intro:
      'Aragon is an open source software project built on Ethereum technology to empower the creation and management of decentralized organizations, the project empowers users to freely organize and collaborate without borders or intermediaries, creating global and bureaucracy-free organizations and communities.',
    thumbnail: aragonThumbImage,
    thumbnailSmall: aragonThumbSmallImage,
    heroImage: aragonHeroImage,
    testimonial: getTestimonialById('brett'),
    team: [
      { ...getPersonById('pierre'), role: 'Engineer' },
      { ...getPersonById('paty'), role: 'Product Designer' },
      { ...getPersonById('adri'), role: 'Brand Designer' },
    ],
    additionalTeam: 4,
  },
  {
    id: 'dash',
    type: 'professional',
    title: 'Dash',
    subtitle: 'Modern digital asset management',
    role: 'UI Engineer',
    tenure: 'Sep 2018 – May 2020',
    technologies: ['Angular', 'TypeScript', 'Sass', 'Auth0', 'Storybook', 'Karma & Jasmine'],
    intro:
      'Bright was originally founded as a software development agency in 1999, but more recently has found success and traction by transitioning into a SaaS led, customer centric product company best known for delivering high-quality digital asset management software, exceptional customer support and expert training services.',
    thumbnail: dashThumbImage,
    thumbnailSmall: dashThumbSmallImage,
    heroImage: dashHeroImage,
    testimonial: getTestimonialById('ze'),
    team: [
      { ...getPersonById('ze'), role: 'Engineer' },
      { ...getPersonById('alastair'), role: 'UX Engineer' },
      { ...getPersonById('ben'), role: 'UX Engineer' },
    ],
    additionalTeam: 4,
  },
  {
    id: 'artifacts',
    type: 'personal',
    title: 'Artifacts',
    subtitle: 'Assorted art studies from the archive',
    role: 'Fine Art Studies & Illustration',
    tenure: '2004 - 2022',
    thumbnail: sketchbookThumbImage,
    thumbnailSmall: sketchbookThumbSmallImage,
    testimonial: getTestimonialById('ze'),
  },
  {
    id: 'blocks',
    type: 'personal',
    title: 'Blocks',
    subtitle: 'Ethereum inside your browser',
    role: 'Front-End Developer',
    tenure: 'Apr 2020',
    technologies: [
      'React',
      'TypeScript',
      'Styled Components',
      'Ethers.js',
      'Next.js',
      'Jest & Testing Library',
    ],
    intro:
      'Blocks is a minimal Ethereum explorer initially built for a technical assessment. After putting together the initial concept I decided to continue extending it as an excuse to try new techniques as well as further familiarise myself with decentralised applications. It features a block overview, transaction list, light / dark themes and shuffle function.',
    thumbnail: blocksThumbImage,
    thumbnailSmall: blocksThumbSmallImage,
    heroImage: blocksHeroImage,
    testimonial: getTestimonialById('ben'),
  },
];

export const selectedProjects = [
  getProjectById('radix'),
  getProjectById('scroll'),
  getProjectById('aragon'),
  getProjectById('dash'),
] as const;

export const sideProjects = [getProjectById('artifacts'), getProjectById('blocks')] as const;

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

export const artifacts: Artifact[] = [
  { name: 'Snow day', year: '2022', src: sketchbookCoupleImage },
  { name: 'Midnight', year: '2016', src: sketchbookScarfImage },
  { name: 'Male study', year: '2018', src: sketchbookMaleStudyImage },
  { name: 'Suit', year: '2012', src: sketchbookSuitImage },
  { name: 'Faces', year: '2010', src: sketchbookFacesImage },
  { name: 'Angles', year: '2013', src: sketchbookAnglesImage },
  { name: 'Ashtree', year: '2013', src: sketchbookTreeMarkImage },
  { name: 'Rasputin', year: '2006', src: sketchbookRasputinImage },
  { name: 'Female study', year: '2018', src: sketchbookFemaleStudyImage },
  { name: 'Energy', year: '2015', src: sketchbookTattooImage },
  { name: 'Headspace', year: '2016', src: sketchbookHeadspaceImage },
  { name: 'Here be dragons', year: '2010', src: sketchbookMapImage },
  { name: 'Snowman', year: '2012', src: sketchbookSnowmanImage },
  { name: 'Sands of time', year: '2005', src: sketchbookSandsTimeImage },
  { name: 'Patch work of a man', year: '2004', src: sketchbookPatchWorkImage },
  { name: 'Orc', year: '2004', src: sketchbookOrcImage },
];

// Utility functions
export function getTestimonialById(id: TestimonialId) {
  return testimonials.find((testimonial) => testimonial.id === id)!;
}

export function getPersonById(id: PersonId) {
  return people.find((person) => person.id === id)!;
}

export function getProjectById(id: ProjectId) {
  return projects.find((project) => project.id === id)!;
}

export function getProjectByPathname(pathname: string) {
  const parsedPathname = pathname.replace('/', '');
  return projects.find((project) => project.id === parsedPathname);
}
