'use client';

import * as React from 'react';
import { cx } from '@/cva.config';

import { motion } from 'motion/react';
import { MouseHover } from '@/components/primitives/mouse-hover';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { Link } from '@/components/link';
import { MediaImage } from '@/components/media-image';
import { ImageWithMetadata } from '@/types';
import { FocusRing } from '@/components/focus-ring';
import * as Tooltip from '@/components/tooltip';

/* -------------------------------------------------------------------------------------------------
 * TeamList
 * -----------------------------------------------------------------------------------------------*/

const tooltipHandle = Tooltip.createHandle<TeamMember>();

type TeamMember = {
  avatar: ImageWithMetadata;
  name: string;
  role: string;
  bio: string;
};

type TeamListElement = React.ComponentRef<typeof motion.ul>;

interface TeamListProps extends React.ComponentPropsWithoutRef<typeof motion.ul> {
  team: TeamMember[];
  additionalCount: number;
}

export const TeamList = React.forwardRef<TeamListElement, TeamListProps>(
  ({ className, team, additionalCount, ...props }, forwardedRef) => {
    const ref = React.useRef<TeamListElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [expanded, setExpanded] = React.useState(false);

    return (
      <>
        <MouseHover
          asChild
          onValueChange={(hovered) => {
            const hasFocus = ref.current?.contains(document.activeElement);
            setExpanded(hasFocus || hovered);
          }}
        >
          <motion.ul
            {...props}
            className={cx('-m-6 flex -space-x-3 p-6', className)}
            ref={composedRefs}
            onFocus={() => setExpanded(true)}
            onBlur={() => setExpanded(false)}
            animate={expanded ? 'expanded' : 'initial'}
          >
            {team.map((member, i) => {
              const expandedOffset = -(team.length - 1 - i) * 6 - 24;

              return (
                <motion.li
                  key={member.name}
                  transition={{
                    type: 'spring',
                    stiffness: 1000,
                    damping: 100,
                    mass: 1,
                  }}
                  variants={{
                    initial: { x: 0 },
                    expanded: {
                      x: expandedOffset,
                    },
                  }}
                  style={{ zIndex: team.length - i }}
                >
                  <Tooltip.Trigger handle={tooltipHandle} id={member.name} payload={member}>
                    <FocusRing className="outline-offset-0 focus-visible:outline-offset-0.5 block">
                      <Link
                        href={member.bio}
                        aria-label={`${member.name}, ${member.role}`}
                        className="size-9 rounded-full relative block after:content-[''] after:absolute after:inset-0"
                      >
                        <div className="rounded-full overflow-hidden relative border-4 border-slate-2">
                          <MediaImage image={member.avatar} sizes="50px" />
                        </div>
                      </Link>
                    </FocusRing>
                  </Tooltip.Trigger>
                </motion.li>
              );
            })}
            <motion.li
              className="!-ml-9"
              variants={{
                initial: {
                  opacity: 0,
                  scale: 0,
                },
                expanded: {
                  opacity: 1,
                  scale: 1,
                },
              }}
            >
              <div className="size-9 z-0 bg-slate-4 rounded-full overflow-hidden border-4 border-slate-2 relative flex items-center justify-center text-body text-slate-10 text-xs font-bold cursor-default">
                +{additionalCount}
              </div>
            </motion.li>
          </motion.ul>
        </MouseHover>

        <Tooltip.Root handle={tooltipHandle} disableHoverablePopup>
          {({ payload }) => (
            <Tooltip.Content>
              <Tooltip.Viewport className="font-body text-sm">
                <div className="font-semibold text-slate-light-12 capsize mb-3 whitespace-nowrap">
                  {payload?.name}
                </div>
                <div className="font-medium text-slate-light-10 capsize whitespace-nowrap">
                  {payload?.role}
                </div>
              </Tooltip.Viewport>
            </Tooltip.Content>
          )}
        </Tooltip.Root>
      </>
    );
  },
);

TeamList.displayName = 'TeamList';
