import * as React from 'react';
import ScrollContent from '../_components/content/scroll';
import * as Project from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('scroll');
const project = getProjectById('scroll');

export default function ScrollPage() {
  return (
    <Project.Root project={project}>
      <Project.Header project={project}>
        <Project.Hero project={project} />
      </Project.Header>

      <ScrollContent />
    </Project.Root>
  );
}
