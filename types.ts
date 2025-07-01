import { StaticImageData } from 'next/image';
import { ComponentType } from 'react';

type LogoComponent = ComponentType<React.SVGProps<SVGSVGElement>>;

export interface ImageWithMetadata {
  src: string | StaticImageData;
  alt: string;
  color: string | null;
}

export type ProjectId = 'radix' | 'aragon' | 'blocks' | 'dash';

export type PersonId =
  | 'vlad'
  | 'benoit'
  | 'brett'
  | 'andrew'
  | 'ze'
  | 'michael'
  | 'ben'
  | 'jenna'
  | 'pedro'
  | 'adri'
  | 'paty'
  | 'pierre'
  | 'alastair';

export type TestimonialId = PersonId;

export type SocialName = 'dribbble' | 'github' | 'instagram' | 'twitter' | 'linkedin';

export interface Experience {
  year: string;
  logoAsset: LogoComponent;
  title: string;
  company: string;
  tenure: string;
  description: string;
  link: string;
}

export interface Person {
  id: PersonId;
  name: string;
  avatar: ImageWithMetadata;
  bio: string;
}

export interface Testimonial extends Person {
  id: TestimonialId;
  role: string;
  company: string;
  full: string;
  excerpt: string;
}

export interface TeamMember extends Person {
  role: string;
}

export interface Project {
  id: ProjectId;
  title: string;
  subtitle: string;
  role: string;
  tenure: string;
  technologies: string[];
  intro: string;
  thumbnail: ImageWithMetadata;
  thumbnailSmall: ImageWithMetadata;
  heroImage: ImageWithMetadata;
  testimonial: Testimonial;
  team: TeamMember[];
  additionalTeam: number;
  externalUrl?: string;
}

export interface SocialLink {
  name: string;
  icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  url: string;
}

export interface Data {
  experience: Experience[];
  people: Person[];
  testimonials: Testimonial[];
  projects: Project[];
  social: Record<string, SocialLink>;
}
