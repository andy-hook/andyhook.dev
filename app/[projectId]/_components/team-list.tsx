'use client';

import * as React from 'react';
import { cx } from '@/cva.config';

import { Tooltip } from '@/components/tooltip';
import { motion } from 'motion/react';
import { MouseHover } from '@/components/primitives/mouse-hover';
import { useComposedRefs } from '@/components/utils/compose-refs';
import { RouterImage, RouterLink } from '@/app/router';
import { ImageWithMetadata } from '@/types';
import { FocusRing } from '@/components/focus-ring';

/* -------------------------------------------------------------------------------------------------
 * TeamList
 * -----------------------------------------------------------------------------------------------*/

type TeamListElement = React.ComponentRef<typeof motion.ul>;

interface TeamListProps extends React.ComponentPropsWithoutRef<typeof motion.ul> {
  team: { avatar: ImageWithMetadata; name: string; role: string; bio: string }[];
  additionalCount: number;
}

export const TeamList = React.forwardRef<TeamListElement, TeamListProps>(
  ({ className, team, additionalCount, ...props }, forwardedRef) => {
    const ref = React.useRef<TeamListElement>(null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    const [expanded, setExpanded] = React.useState(false);

    return (
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
          {team.map((member, i) => (
            <TeamListItem
              key={member.name}
              teamCount={team.length}
              memberIndex={i}
              content={
                <div className="font-body text-sm">
                  <div className="font-semibold text-slate-light-12 capsize mb-3">
                    {member.name}
                  </div>
                  <div className="font-medium text-slate-light-10 capsize">{member.role}</div>
                </div>
              }
            >
              <RouterLink
                href={member.bio}
                className="size-9 bg-slate-6 rounded-full overflow-hidden border-4 border-slate-1 relative block"
              >
                <RouterImage image={member.avatar} quality={90} sizes="50px" />
              </RouterLink>
            </TeamListItem>
          ))}
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
            <div className="size-9 z-0 bg-slate-4 rounded-full overflow-hidden border-4 border-slate-1 relative flex items-center justify-center text-body text-slate-10 text-xs font-bold cursor-default">
              +{additionalCount}
            </div>
          </motion.li>
        </motion.ul>
      </MouseHover>
    );
  },
);

TeamList.displayName = 'TeamList';

/* -----------------------------------------------------------------------------------------------*/

type TeamListItemElement = React.ComponentRef<typeof motion.li>;

interface TeamListItemProps
  extends Omit<React.ComponentPropsWithoutRef<typeof motion.li>, 'content'> {
  content: React.ReactNode;
  children: React.ReactNode;
  teamCount: number;
  memberIndex: number;
}

const TeamListItem = React.forwardRef<TeamListItemElement, TeamListItemProps>(
  ({ content, children, teamCount, memberIndex, ...itemProps }, forwardedRef) => {
    const [active, setActive] = React.useState(false);

    const expandedOffset = -(teamCount - 1 - memberIndex) * 12 - 36;

    return (
      <motion.li
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
        {...itemProps}
        style={{ zIndex: active ? teamCount : teamCount - memberIndex, ...itemProps.style }}
        ref={forwardedRef}
      >
        <Tooltip content={content}>
          <MouseHover
            asChild
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onValueChange={setActive}
          >
            <FocusRing className="outline-offset-0 focus-visible:outline-offset-0.5">
              {children}
            </FocusRing>
          </MouseHover>
        </Tooltip>
      </motion.li>
    );
  },
);

TeamListItem.displayName = 'TeamListItem';
