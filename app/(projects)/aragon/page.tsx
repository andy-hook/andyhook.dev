import * as React from 'react';
import AragonContent from '../_components/content/aragon';
import { Project } from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';

export const metadata = getProjectMetadata('aragon');

export default function AragonPage() {
  return (
    <Project projectId="aragon">
      <AragonContent />
    </Project>
  );
}
