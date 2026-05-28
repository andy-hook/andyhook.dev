import * as React from 'react';
import { getProjectMetadata } from '../_components/metadata';
import { RouterImage } from '@/app/router';
import { aragonComponentsImage } from '@/images';
import { Gutter } from '@/components/gutter';

export const metadata = getProjectMetadata('aragon');

export default function SketchbookPage() {
  return (
    <Gutter size="small">
      {/* <section className="grid grid-cols-3 gap-5">
        <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
        <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
        <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
        <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
        <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
        
      </section> */}

      <section
        style={
          {
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(700px, 1fr))',
            ['--precision']: 50,
            ['--gap']: '30px',
            margin: 'calc(-1 * var(--gap) / 2)',
          } as React.CSSProperties
        }
      >
        <GridItem width={500} height={250} />

        <GridItem width={500} height={800} />

        <GridItem width={340} height={400} />

        <GridItem width={500} height={250} />

        <GridItem width={500} height={600} />

        <GridItem width={500} height={250} />
      </section>

      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
    </Gutter>
  );
}

function GridItem({ width, height }: { width: number; height: number }) {
  return (
    <div
      style={
        {
          aspectRatio: 'var(--width) / var(--height)',
          gridRow: 'span calc(var(--height) / var(--width) * var(--precision))',
          ['--width']: width,
          ['--height']: height,
          position: 'relative',
        } as React.CSSProperties
      }
    >
      <div
        style={{ position: 'absolute', inset: 'calc(var(--gap) / 2)', backgroundColor: 'red' }}
      ></div>
    </div>
  );
}
