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
        <ArtifactGrid>
          <ArtifactGridItem image={sketchbookCoupleImage} />
          <ArtifactGridItem image={sketchbookScarfImage} />
          <ArtifactGridItem image={sketchbookMaleStudyImage} />
          <ArtifactGridItem image={sketchbookMapImage} />
          <ArtifactGridItem image={sketchbookFacesImage} />
          <ArtifactGridItem image={sketchbookAnglesImage} />
          <ArtifactGridItem image={sketchbookTreeMarkImage} />
          <ArtifactGridItem image={sketchbookRasputinImage} />
          <ArtifactGridItem image={sketchbookFemaleStudyImage} />
          <ArtifactGridItem image={sketchbookTattooImage} />
          <ArtifactGridItem image={sketchbookHeadspaceImage} />
          <ArtifactGridItem image={sketchbookSuitImage} />
          <ArtifactGridItem image={sketchbookSnowmanImage} />
        </ArtifactGrid>
      </Project.Header>
    </Project.Root>
  );
}

/* -----------------------------------------------------------------------------------------------*/

type ArtifactGridElement = React.ComponentRef<typeof RouterTransition>;

interface ArtifactGridProps extends Omit<
  React.ComponentPropsWithoutRef<typeof RouterTransition>,
  'multiplier'
> {
  children: React.ReactNode;
}

const ArtifactGrid = React.forwardRef<ArtifactGridElement, ArtifactGridProps>(
  ({ children, ...props }, forwardedRef) => {
    return (
      <RouterTransition
        {...props}
        multiplier={15}
        className={cx(
          '[--gap:20px]',
          'md:[--gap:30px]',
          'lg:[--gap:40px]',
          'xl:[--gap:50px]',
          'widest:[--gap:70px]',
          'z-10 relative bg-slate-12 p-[calc(var(--gap))] overflow-hidden',
          props.className,
        )}
        ref={forwardedRef}
      >
        <div
          className={cx(
            'grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))]',
            'sm:grid-cols-[repeat(auto-fill,_minmax(50%,_1fr))]',
            'wide:grid-cols-[repeat(auto-fill,_minmax(33%,_1fr))]',
            'grid m-[calc(-1_*_var(--gap)_/_2)]',
          )}
        >
          {children}
        </div>
      </RouterTransition>
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
        className={cx('relative aspect-[var(--width)_/_var(--height)]', props.className)}
        ref={forwardedRef}
      >
        <div className="absolute shadow-md bg-white" style={{ inset: 'calc(var(--gap) / 2)' }}>
          <RouterImage
            image={image}
            fill
            quality={90}
            sizes="35vw"
            className={cx('absolute', 'inset-[6vw]', 'sm:inset-[3vw]', 'wide:inset-[1.5vw]')}
          />
        </div>
      </div>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';
