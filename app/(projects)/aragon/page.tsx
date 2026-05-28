import * as React from 'react';
import AragonContent from '../_components/content/aragon';
import * as Project from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('aragon');
const project = getProjectById('aragon');

export default function AragonPage() {
  return (
    <Project.Root projectId={project.id} testimonial={project.testimonial}>
      <Project.Header
        title={project.title}
        subtitle={project.subtitle}
        team={project.team}
        additionalTeam={project.additionalTeam}
        role={project.role}
        tenure={project.tenure}
      >
        <Project.Hero
          heroImage={project.heroImage}
          technologies={project.technologies}
          intro={project.intro}
        />
      </Project.Header>

      <AragonContent />
    </Project.Root>
  );
}
