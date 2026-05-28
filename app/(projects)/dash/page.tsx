import * as React from 'react';
import DashContent from '../_components/content/dash';
import * as Project from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('dash');
const project = getProjectById('dash');

export default function DashPage() {
  return (
    <Project.Root project={project}>
      <Project.Header project={project}>
        <Project.Hero project={project} />
      </Project.Header>

      <DashContent />
    </Project.Root>
  );
}
