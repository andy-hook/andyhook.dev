import { ImagePath } from './images'

export type Author =
  | 'brett'
  | 'michael'
  | 'jo'
  | 'ze'
  | 'ben'
  | 'andrew'
  | 'yohan'

type AuthorDetails = {
  avatar: ImagePath
  name: string
  title: string
  company: string
  testimonial: string
}

export const RECOMMENDATIONS: Record<Author, AuthorDetails> = {
  michael: {
    avatar: 'avatars/michael.jpg',
    name: 'Michael Allan',
    title: 'Head of Design',
    company: 'Brandwatch',
    testimonial:
      "Andy is hands down one of the most talented people I've worked with in the web industry. It's rare to see a talent in design matched so equally by competency in development. He is someone I trust. I can give him the information he needs to deliver a project and I know it will be done to the highest quality possible",
  },
  brett: {
    avatar: 'avatars/brett.jpg',
    name: 'Brett Sun',
    title: 'Chief Technology Officer',
    company: 'Aragon One',
    testimonial:
      'I have seldom met an individual who personifies the senior UI/UX engineer as well as Andy. He not only drives to personally deliver to the highest of standards, but goes the distance to improve the work of everyone around him. He produces well-crafted, precise, and polished interfaces, but more importantly as a senior engineer, demonstrates a strong ability to pass on his own strengths to others to help them mature in their own right.',
  },
  jo: {
    avatar: 'avatars/jo.jpg',
    name: 'Jo Petty',
    title: 'Documentation Lead',
    company: 'Unity Technologies',
    testimonial:
      "Andy is one of the most creative and talented people I've had the pleasure of working with. Collaborating with him on the Brandwatch website was a rewarding experience: he strived for perfection, had a very detail-orientated approach to design, and was constantly trying new and better techniques.",
  },
  ben: {
    avatar: 'avatars/ben.jpg',
    name: 'Ben Browning',
    title: 'UI/UX Developer',
    company: 'Bright Interactive',
    testimonial:
      'Andy is a rare find in UI development. He is equally brilliant at creative visual design as he is with the technical aspect of engineering a modern web app. Whatever task he is working on he will go above and beyond to deliver at a very high quality level.',
  },
  ze: {
    avatar: 'avatars/ze.jpg',
    name: 'Zé Meirinhos',
    title: 'Javascript Developer',
    company: 'Bright Interactive',
    testimonial:
      'Andy is inspiring, supportive, curious, always looking to expand his skills, and generally a great person to be around with. Working in a team he understands the importance of clear goals and how to best achieve the team’s aims. His attention to detail makes everything he touches look incredibly polished, and affirms his elegant simplicity.',
  },
  andrew: {
    avatar: 'avatars/andrew.jpg',
    name: 'Andrew Khan',
    title: 'Lead Software Architect',
    company: 'Opia',
    testimonial:
      'Andy has a tremendous understanding of front-end on the web and was often a source of knowledge for me in areas such as web performance, animation and technology. His front-end implementations have always taken into consideration my requirements as a developer, allowing our code to integrate effectively. This has always resulted in a faster, better experience for the end user.',
  },
  yohan: {
    avatar: 'avatars/yohan.jpg',
    name: 'Yohan Fernando',
    title: 'Senior Software Engineer',
    company: 'Brandwatch',
    testimonial:
      'Andy has an unparalleled thirst for knowledge which keeps him always on top of his game, self-motivated and not only positively contribute to projects, but guide & motivates other team members too. His ability to absorb the brief and come up with unique and artistic designs whilst conforming to constraints of web is phenomenal.',
  },
}
