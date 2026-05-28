import * as React from 'react';
import AragonContent from '../_components/content/aragon';
import * as Project from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('aragon');
const project = getProjectById('aragon');

export default function AragonPage() {
  return (
    <Project.Root project={project}>
      <Project.Header project={project}>
        <Project.Hero project={project} />
      </Project.Header>

      <AragonContent />
    </Project.Root>
  );
}
