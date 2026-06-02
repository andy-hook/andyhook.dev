'use client';

import * as React from 'react';
import { cx } from '@/cva.config';
import { MouseHover } from '@/components/primitives/mouse-hover';
import * as Chip from '@/components/chip';
import { InformationCircleIcon } from '@heroicons/react/16/solid';
import { AnimatePresence, motion } from 'motion/react';

const GRID_PRECISION = 40;

/* -------------------------------------------------------------------------------------------------
 * ArtifactGrid
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridElement = React.ComponentRef<'ul'>;

interface ArtifactGridProps extends React.ComponentPropsWithoutRef<'ul'> {}

export const ArtifactGrid = React.forwardRef<ArtifactGridElement, ArtifactGridProps>(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <ul
        {...props}
        className={cx(
          'grid-cols-[repeat(auto-fill,_minmax(100%,_1fr))]',
          'sm:grid-cols-[repeat(auto-fill,_minmax(50%,_1fr))]',
          'wide:grid-cols-[repeat(auto-fill,_minmax(33%,_1fr))]',
          'grid m-[calc(-1_*_var(--gap)_/_2)]',
          className,
        )}
        ref={forwardedRef}
      >
        {children}
      </ul>
    );
  },
);

ArtifactGrid.displayName = 'ArtifactGrid';

/* -------------------------------------------------------------------------------------------------
 * ArtifactGridItem
 * -----------------------------------------------------------------------------------------------*/

type ArtifactGridItemElement = React.ComponentRef<'li'>;

interface ArtifactGridItemProps extends React.ComponentPropsWithoutRef<'li'> {
  width: number;
  height: number;
  label: string;
}

export const ArtifactGridItem = React.forwardRef<ArtifactGridItemElement, ArtifactGridItemProps>(
  ({ children, className, width, height, label, ...props }, forwardedRef) => {
    const [hovered, setHovered] = React.useState(false);

    return (
      <li
        {...props}
        style={
          {
            ['--width']: width,
            ['--height']: height,
            gridRow: `span calc(var(--height) / var(--width) * ${GRID_PRECISION})`,
            ...props.style,
          } as React.CSSProperties
        }
        className={cx('relative aspect-[var(--width)_/_var(--height)]', className)}
        ref={forwardedRef}
      >
        <MouseHover onValueChange={setHovered} asChild>
          <div className="absolute shadow-md bg-white" style={{ inset: 'calc(var(--gap) / 2)' }}>
            <div className={cx('absolute', 'inset-[6vw]', 'sm:inset-[3vw]', 'wide:inset-[1.5vw]')}>
              <AnimatePresence>
                {hovered && (
                  <Chip.Root className="top-6 right-6" asChild>
                    <motion.div
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={{
                        hidden: { y: -2, opacity: 0 },
                        visible: { y: 0, opacity: 1 },
                      }}
                      transition={{
                        type: 'spring',
                        stiffness: 500,
                        damping: 25,
                        mass: 0.25,
                      }}
                    >
                      <Chip.Text>{label}</Chip.Text>
                      <Chip.Icon side="right">
                        <InformationCircleIcon />
                      </Chip.Icon>
                    </motion.div>
                  </Chip.Root>
                )}
              </AnimatePresence>

              {children}
            </div>
          </div>
        </MouseHover>
      </li>
    );
  },
);

ArtifactGridItem.displayName = 'ArtifactGridItem';

/* -----------------------------------------------------------------------------------------------*/

export const Root = ArtifactGrid;
export const Item = ArtifactGridItem;
