import { getProjectMetadata } from '../_components/metadata';
import { RouterImage, RouterTransition } from '@/app/router';
import * as Project from '../_components/project';
import { artifacts, getProjectById } from '@/data';
import { cx } from '@/cva.config';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import * as Chip from '@/components/chip';
import * as ArtifactGrid from './_components/artifact-grid';

export const metadata = getProjectMetadata('artifacts');
const project = getProjectById('artifacts');

export default function ArtifactsPage() {
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
        <RouterTransition
          multiplier={15}
          className={cx(
            '[--gap:20px]',
            'md:[--gap:30px]',
            'lg:[--gap:40px]',
            'xl:[--gap:50px]',
            'widest:[--gap:70px]',
            'z-10 relative bg-slate-12 p-4 md:p-12 lg:p-16 2xl:p-[6vw] overflow-hidden',
          )}
        >
          <ArtifactGrid.Root>
            {artifacts.map(({ name, year, src }, index) => (
              <ArtifactGrid.Item
                key={`${name}-${year}`}
                width={src.src.width}
                height={src.src.height}
              >
                <Chip.Root className="bottom-6 right-6">
                  <Chip.Text>
                    {name} · {year}
                  </Chip.Text>
                  <Chip.Icon side="right">
                    <InformationCircleIcon />
                  </Chip.Icon>
                </Chip.Root>
                <RouterImage
                  image={src}
                  fill
                  quality={90}
                  sizes="35vw"
                  loading={index < 4 ? 'eager' : undefined}
                  className="absolute inset-0"
                />
              </ArtifactGrid.Item>
            ))}
          </ArtifactGrid.Root>
        </RouterTransition>
      </Project.Header>
    </Project.Root>
  );
}
