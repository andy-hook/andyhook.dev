import * as React from 'react';
import { notFound } from 'next/navigation';
import { UserIcon, CalendarIcon } from '@heroicons/react/16/solid';

import { projects } from '@/data';

import { Container } from '@/components/container';
import { Line } from '@/components/line';
import { Hatch } from '@/components/hatch';
import { Quote } from '@/components/quote';
import { Gutter } from '@/components/gutter';
import { Author } from '@/components/author';
import { WorkItem } from '@/components/work-item';
import { TeamList } from './_components/team-list';

import * as HoverGroup from '@/components/primitives/hover-group';

import AragonContent from './_components/content/aragon';
import BlocksContent from './_components/content/blocks';
import DashContent from './_components/content/dash';
import RadixContent from './_components/content/radix';
import { RouterImage, RouterTransition } from '../router';
import { Metadata } from 'next';

export async function generateMetadata(props: {
  params: Promise<{ projectId: string }>;
}): Promise<Metadata> {
  const { projectId } = await props.params;
  const project = projects.find((project) => project.id === projectId);

  if (!project) return {};

  return {
    title: `Andy Hook – ${project.title}`,
    description: project.subtitle,
  };
}

const projectContent: Record<string, React.ComponentType> = {
  aragon: AragonContent,
  blocks: BlocksContent,
  dash: DashContent,
  radix: RadixContent,
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    projectId: project.id,
  }));
}

export default async function ProjectPage(props: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await props.params;
  const project = projects
    .filter((project) => !project.externalUrl)
    .find((project) => project.id === projectId);

  if (!project) notFound();

  // Get the appropriate content component for this project
  const Content = projectContent[projectId];

  const projectMeta = [
    [
      UserIcon,
      <>
        <span className="sr-only">Role: </span>
        {project.role}
      </>,
    ],
    [
      CalendarIcon,
      <>
        <span className="sr-only">Tenure: </span>
        {project.tenure}
      </>,
    ],
  ] as const;

  const moreProjects = projects.filter((project) => project.id !== projectId);

  const renderedTeam = project.team.map(({ avatar, name, role }) => ({
    avatar,
    description: `${name} – ${role}`,
  }));

  return (
    <div className="space-y-20 lg:space-y-24 xl:space-y-32">
      <section>
        <Gutter>
          <Container className="mb-12 md:mb-14 lg:mb-16 xl:mb-20">
            <h1 className="flex flex-col items-start gap-5 sm:gap-[0.55em] font-display relative z-10 md:pl-7 xl:pl-10 font-normal tracking-tighter text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
              <div className="relative">
                <RouterTransition multiplier={4}>
                  <Line
                    className="hidden md:block absolute -left-[100vw] -right-24 bottom-0"
                    solid
                    contrast="low"
                  />
                  <div className="relative capsize text-slate-12">{project.title}</div>
                </RouterTransition>
              </div>

              <RouterTransition multiplier={6} className="relative">
                <div className="capsize md:leading-tight text-balance">
                  <div className="font-light text-transparent bg-gradient-to-br from-slate-11 via-slate-9 to-slate-8 bg-clip-text">
                    {project.subtitle}
                  </div>
                </div>

                <Line
                  orientation="vertical"
                  className="absolute left-0 -top-28 -bottom-44 hidden md:block"
                  solid
                  contrast="low"
                />
              </RouterTransition>
            </h1>
          </Container>
        </Gutter>
        <Gutter collapse>
          <Container>
            <RouterTransition multiplier={10}>
              <div className="flex justify-between items-center px-5 md:px-7 xl:px-10 py-5 lg:py-6 border-t md:border-x border-slate-3 rounded-t-3xl bg-gradient-to-br from-slate-3/10 to-slate-2/20 shadow-slate-1 shadow-2xl relative">
                <Hatch
                  className="absolute left-0 top-0 bottom-0 hidden md:block md:w-7 xl:w-10"
                  orientation="vertical"
                />

                <ul className="flex-col sm:flex-row flex gap-3 sm:gap-9 lg:gap-12">
                  {projectMeta.map(([Icon, text], i) => (
                    <li className="flex items-center gap-3 sm:gap-4" key={i}>
                      <div className="p-1.5 sm:p-2 rounded-full border border-slate-7 bg-gradient-to-br from-slate-3">
                        <Icon className="text-slate-12 size-3 sm:size-4" />
                      </div>
                      <div className="font-body text-sm sm:text-base lg:text-lg font-normal text-slate-11 capsize">
                        {text}
                      </div>
                    </li>
                  ))}
                </ul>

                {renderedTeam.length > 0 ? (
                  <TeamList
                    team={project.team}
                    className="hidden md:flex"
                    additionalCount={project.additionalTeam}
                  />
                ) : null}
              </div>
            </RouterTransition>
          </Container>
        </Gutter>

        <RouterTransition multiplier={10} className="relative z-10">
          <Gutter size="small">
            <div className="mx-auto relative z-10">
              <div className="rounded-3xl overflow-hidden shadow-slate-1 shadow-2xl">
                <RouterImage
                  image={project.heroImage}
                  quality={90}
                  fill
                  className="aspect-[50/35] md:aspect-[448/205]"
                  priority
                  sizes="100vw"
                />
              </div>
            </div>
          </Gutter>

          <Gutter collapse>
            <Container width="wide">
              <div className="px-5 md:px-7 xl:px-10 py-8 md:py-9 lg:py-12 xl:py-16 border-b md:border-x border-slate-3 rounded-b-3xl bg-gradient-to-br from-slate-3/10 to-slate-2/20 shadow-slate-1 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
                  <div className="relative">
                    <Line
                      className="absolute -left-5 md:-left-7 xl:-left-10 top-0 w-5 md:w-7 xl:w-10"
                      solid
                    />
                    <Line
                      className="absolute -left-5 md:-left-7 xl:-left-10 bottom-0 w-5 md:w-7 xl:w-10"
                      solid
                    />
                    <Line orientation="vertical" className="absolute left-0 -top-16 -bottom-12" />
                    <Hatch className="absolute -left-5 xl:-left-10 w-5 md:-left-7 md:w-7 xl:w-10 top-0 bottom-0" />

                    <ul className="font-body text-sm sm:text-base lg:text-xl font-normal text-slate-11 flex flex-col gap-4 sm:gap-5 lg:gap-6 row-start-2 lg:row-start-auto">
                      {project.technologies.map((technology) => (
                        <li key={technology} className="capsize">
                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <p className="col-span-2 font-body font-medium text-slate-12 text-base sm:text-lg leading-relaxed md:leading-relaxed xl:leading-relaxed md:text-xl lg:text-2xl xl:text-[26px] lg:leading-relaxed capsize text-pretty row-start-1 lg:row-start-auto">
                    {project.intro}
                  </p>
                </div>
              </div>
            </Container>
          </Gutter>
        </RouterTransition>
      </section>

      <Content />

      <section>
        <RouterTransition multiplier={10}>
          <Gutter>
            <Container>
              <figure className="gap-9 sm:gap-14 lg:gap-8 xl:gap-10 md:px-7 xl:px-10 relative grid grid-cols-1 lg:grid-cols-3 items-start">
                <Line className="absolute -left-24 top-0 w-1/4" solid contrast="low" />
                <Line
                  orientation="vertical"
                  className="hidden md:block absolute left-0 md:left-7 xl:left-10 -top-10 h-44"
                />
                <Hatch className="hidden wide:block absolute -left-6 md:left-0 top-0 w-6 md:w-7 xl:w-10 h-36" />

                <Quote className="font-body text-lg sm:leading-relaxed sm:text-xl lg:text-2xl xl:text-3xl text-slate-12 leading-relaxed lg:leading-relaxed xl:leading-relaxed capsize font-medium text-pretty lg:col-span-2 lg:col-start-2">
                  {project.testimonial.full}
                </Quote>

                <figcaption className="lg:row-start-1 relative">
                  <Author
                    name={project.testimonial.name}
                    role={project.testimonial.role}
                    company={project.testimonial.company}
                    avatar={project.testimonial.avatar}
                    size="large"
                  />
                </figcaption>
              </figure>
            </Container>
          </Gutter>
        </RouterTransition>
      </section>

      <section>
        <RouterTransition multiplier={10}>
          <Gutter collapse>
            <Container width="wide">
              <div className="p-5 md:p-7 xl:p-10 border-y sm:border-x rounded-3xl relative border-slate-3 from-slate-3/25 to-slate-2/50 bg-gradient-to-br shadow-slate-1 shadow-2xl">
                <Line
                  className="absolute top-5 md:top-7 xl:top-10 -left-[100vw] -right-[100vw]"
                  solid
                  contrast="low"
                />
                <Line
                  className="absolute bottom-5 md:bottom-7 xl:bottom-10 -left-[100vw] -right-[100vw]"
                  contrast="low"
                  solid
                />

                <HoverGroup.Root>
                  <ul
                    className="grid sm:grid-cols-3 gap-8 sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10"
                    aria-label="More projects"
                  >
                    {moreProjects.map((project, i) => {
                      const firstItem = i === 0;
                      const lastItem = i === moreProjects.length - 1;

                      return (
                        <li key={project.id} className="relative">
                          <div className="hidden sm:block">
                            {!firstItem && (
                              <Line
                                orientation="vertical"
                                className="absolute left-0 -top-8 -bottom-8 md:-top-10 md:-bottom-10 lg:-top-12 lg:-bottom-12"
                              />
                            )}
                            {!lastItem && (
                              <Line
                                orientation="vertical"
                                className="absolute right-0 -top-8 -bottom-8 md:-top-10 md:-bottom-10 lg:-top-12 lg:-bottom-12"
                              />
                            )}
                          </div>

                          <div className="sm:hidden">
                            {!firstItem && <Line className="absolute -left-7 -right-7 top-0" />}
                            {!lastItem && <Line className="absolute -left-7 -right-7 bottom-0" />}
                          </div>

                          <WorkItem size="small" project={project} />
                        </li>
                      );
                    })}
                  </ul>
                </HoverGroup.Root>
              </div>
            </Container>
          </Gutter>
        </RouterTransition>
      </section>
    </div>
  );
}
