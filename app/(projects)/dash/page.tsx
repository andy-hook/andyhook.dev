import * as React from 'react';
import DashContent from '../_components/content/dash';
import { Project } from '../_components/project';
import { getProjectMetadata } from '../_components/metadata';

export const metadata = getProjectMetadata('dash');

export default function DashPage() {
  return (
    <Project projectId="dash">
      <DashContent />
    </Project>
  );
}
