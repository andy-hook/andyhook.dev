import * as React from 'react';
import { getProjectMetadata } from '../_components/metadata';
import { RouterImage } from '@/app/router';
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
  sketchbookSuitImage,
  sketchbookTattooImage,
  sketchbookTreeMarkAlternImage,
  sketchbookTreeMarkImage,
} from '@/images';
import { Gutter } from '@/components/gutter';
import { StaticImageWithMetadata } from '@/types';
import * as Project from '../_components/project';
import { getProjectById } from '@/data';

export const metadata = getProjectMetadata('aragon');
const project = getProjectById('sketchbook');

export default function SketchbookPage() {
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
        <Gutter size="small">
          <section
            style={
              {
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(700px, 1fr))',
                ['--precision']: 40,
                ['--gap']: '30px',
                margin: 'calc(-1 * var(--gap) / 2)',
              } as React.CSSProperties
            }
          >
            <GridItem image={sketchbookScarfImage} />
            <GridItem image={sketchbookMaleStudyImage} />
            <GridItem image={sketchbookCoupleImage} />
            <GridItem image={sketchbookMapImage} />
            <GridItem image={sketchbookTreeMarkImage} />
            <GridItem image={sketchbookFacesImage} />
            <GridItem image={sketchbookRasputinImage} />
            <GridItem image={sketchbookFemaleStudyImage} />
            <GridItem image={sketchbookTreeMarkAlternImage} />
            <GridItem image={sketchbookTattooImage} />
            <GridItem image={sketchbookHeadspaceImage} />
            <GridItem image={sketchbookSuitImage} />
            <GridItem image={sketchbookAnglesImage} />
          </section>
        </Gutter>
      </Project.Header>
    </Project.Root>
  );
}

function GridItem({ image }: { image: StaticImageWithMetadata }) {
  return (
    <div
      style={
        {
          ['--width']: image.src.width,
          ['--height']: image.src.height,
          aspectRatio: 'var(--width) / var(--height)',
          gridRow: `span calc(var(--height) / var(--width) * var(--precision))`,
          position: 'relative',
        } as React.CSSProperties
      }
    >
      <RouterImage
        image={image}
        fill
        style={{ position: 'absolute', inset: 'calc(var(--gap) / 2)' }}
        quality={90}
        sizes="25vw"
      />
    </div>
  );
}
