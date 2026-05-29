import * as React from 'react';
import { getProjectMetadata } from '../_components/metadata';
import { RouterImage, RouterTransition } from '@/app/router';
import {
  sketchbookAnglesImage,
  sketchbookCoupleImage,
  sketchbookFacesImage,
  sketchbookFemaleStudyImage,
  sketchbookHeadspaceImage,
  sketchbookMaleStudyImage,
  sketchbookMapImage,
  sketchbookRasputinImage,
  sketchbookScarfImage,
  sketchbookSnowmanImage,
  sketchbookSpaceshipImage,
  sketchbookSuitImage,
  sketchbookTattooImage,
  sketchbookTreeMarkAlternImage,
  sketchbookTreeMarkImage,
} from '@/images';
import { StaticImageWithMetadata } from '@/types';
import * as Project from '../_components/project';
import { getProjectById } from '@/data';
import { cx } from '@/cva.config';

const GRID_PRECISION = 40;

export const metadata = getProjectMetadata('aragon');
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
        <RouterTransition multiplier={15} className="z-10 relative bg-slate-12 p-20 ">
          <ArtifactGrid>
            <ArtifactGridItem image={sketchbookScarfImage} />
            <ArtifactGridItem image={sketchbookMaleStudyImage} />
            <ArtifactGridItem image={sketchbookCoupleImage} />
            <ArtifactGridItem image={sketchbookMapImage} />
            <ArtifactGridItem image={sketchbookTreeMarkImage} />
            <ArtifactGridItem image={sketchbookFacesImage} />
            <ArtifactGridItem image={sketchbookRasputinImage} />
            <ArtifactGridItem image={sketchbookFemaleStudyImage} />
            <ArtifactGridItem image={sketchbookTreeMarkAlternImage} />
            <ArtifactGridItem image={sketchbookTattooImage} />
            <ArtifactGridItem image={sketchbookHeadspaceImage} />
            <ArtifactGridItem image={sketchbookSuitImage} />
            <ArtifactGridItem image={sketchbookAnglesImage} />
            <ArtifactGridItem image={sketchbookSnowmanImage} />
            <ArtifactGridItem image={sketchbookSpaceshipImage} />
          </ArtifactGrid>
        </RouterTransition>
      </Project.Header>
    </Project.Root>
  );
}

/* -----------------------------------------------------------------------------------------------*/

type ArtifactGridElement = React.ComponentRef<'div'>;

interface ArtifactGridProps extends React.ComponentPropsWithoutRef<'div'> {}

const ArtifactGrid = React.forwardRef<ArtifactGridElement, ArtifactGridProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        className={cx(
          'grid m-[calc(-1_*_var(--gap)_/_2)] grid-cols-[repeat(auto-fill,_minmax(700px,_1fr))] [--gap:60px]',
          props.className,
        )}
        ref={forwardedRef}
      >
        {children}
      </div>
    );
  },
);

ArtifactGrid.displayName = 'ArtifactGrid';

/* -----------------------------------------------------------------------------------------------*/

type ArtifactGridItemElement = React.ComponentRef<'div'>;

interface ArtifactGridItemProps extends React.ComponentPropsWithoutRef<'div'> {
  image: StaticImageWithMetadata;
}

const ArtifactGridItem = React.forwardRef<ArtifactGridItemElement, ArtifactGridItemProps>(
  ({ image, ...props }, forwardedRef) => {
    return (
      <div
        {...props}
        style={
          {
            ['--width']: image.src.width,
            ['--height']: image.src.height,
            gridRow: `span calc(var(--height) / var(--width) * ${GRID_PRECISION})`,
            ...props.style,
          } as React.CSSProperties
        }
        className={cx('relative aspect-[var(--width)_/_var(--height)] grid-row', props.className)}
        ref={forwardedRef}
      >
        <div className="absolute shadow-md bg-white" style={{ inset: 'calc(var(--gap) / 2)' }}>
          <RouterImage image={image} fill quality={90} sizes="25vw" className="absolute inset-12" />
        </div>
      </div>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';
