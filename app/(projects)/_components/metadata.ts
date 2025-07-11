import { projects } from '@/data';
import { ProjectId } from '@/types';

function getProjectMetadata(projectId: ProjectId) {
  const project = projects.find((project) => project.id === projectId);

  if (!project) return {};

  return {
    title: `Andy Hook – ${project.title}`,
    description: project.subtitle,
  };
}

export { getProjectMetadata };
