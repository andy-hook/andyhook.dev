import * as React from 'react';
import BlocksContent from '../_components/content/blocks';
import * as Project from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('blocks');
const project = getProjectById('blocks');

export default function BlocksPage() {
  return (
    <Project.Root project={project}>
      <Project.Header project={project}>
        <Project.Hero project={project} />
      </Project.Header>

      <BlocksContent />
    </Project.Root>
  );
}
