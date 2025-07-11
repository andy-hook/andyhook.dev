import * as React from 'react';
import BlocksContent from '../_components/content/blocks';
import { Project } from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';

export const metadata = getProjectMetadata('blocks');

export default function AragonPage() {
  return (
    <Project projectId="blocks">
      <BlocksContent />
    </Project>
  );
}
