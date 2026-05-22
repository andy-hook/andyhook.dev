import * as React from 'react';
import ScrollContent from '../_components/content/scroll';
import { Project } from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';

export const metadata = getProjectMetadata('scroll');

export default function ScrollPage() {
  return (
    <Project projectId="scroll">
      <ScrollContent />
    </Project>
  );
}
