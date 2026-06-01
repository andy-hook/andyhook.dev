import * as React from 'react';
import { getProjectMetadata } from '../_components/metadata';
import { RouterImage, RouterTransition } from '@/app/router';
import { StaticImageWithMetadata } from '@/types';
import * as Project from '../_components/project';
import { artifacts, getProjectById } from '@/data';
import { cx } from '@/cva.config';
import { InformationCircleIcon } from '@heroicons/react/16/solid';

const GRID_PRECISION = 40;

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
        <ArtifactGrid>
          {artifacts.map(({ name, year, src }, index) => (
            <ArtifactGridItem
              key={src.src.src}
              eager={index < 4}
              image={src}
              name={name}
              year={year}
            />
          ))}
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
          'z-10 relative bg-slate-12 p-4 md:p-12 lg:p-16 2xl:p-[6vw] overflow-hidden',
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
  eager?: boolean;
  name: string;
  year: string;
}

const ArtifactGridItem = React.forwardRef<ArtifactGridItemElement, ArtifactGridItemProps>(
  ({ image, eager, name, year, ...props }, forwardedRef) => {
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
          <div className={cx('absolute', 'inset-[6vw]', 'sm:inset-[3vw]', 'wide:inset-[1.5vw]')}>
            <div
              className={cx(
                'bg-slate-2 absolute text-slate-12 z-10 font-body font-semibold text-sm py-2 pl-3 pr-2.5 rounded-full flex items-center gap-1.5',
                'bottom-6 right-6',
              )}
            >
              <span className="capsize">
                {name} · {year}
              </span>
              <InformationCircleIcon className="size-4 text-slate-10" />
            </div>
            <RouterImage
              image={image}
              fill
              quality={90}
              sizes="35vw"
              loading={eager ? 'eager' : undefined}
              className="absolute inset-0"
            />
          </div>
        </div>
      </div>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';
