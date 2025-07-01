'use client';

import * as React from 'react';
import { cx } from '@/cva.config';

import { social } from '@/data';
import { motion } from 'motion/react';
import { getColorSlateDark, getColorSlateLight } from '@/theme';
import { MouseHover } from './primitives/mouse-hover';
import { Spinner } from './spinner';
import { FocusRing } from './focus-ring';

type SocialLinkElement = React.ComponentRef<typeof motion.a>;

interface SocialLinkProps extends React.ComponentPropsWithoutRef<typeof motion.a> {
  platform: keyof typeof social;
  scheme?: 'light' | 'dark';
  size?: 'small' | 'large';
}

export const SocialLink = React.forwardRef<SocialLinkElement, SocialLinkProps>(
  (props, forwardedRef) => {
    const { platform: platformProp, scheme = 'dark', size = 'large', ...linkProps } = props;

    const [hovered, setHovered] = React.useState(false);

    const platform = social[platformProp];
    const Icon = platform.icon;

    const isLightScheme = scheme === 'light';
    const isLarge = size === 'large';

    return (
      <FocusRing className="outline-offset-0 focus-visible:outline-offset-2" scheme={scheme}>
        <MouseHover onValueChange={setHovered} asChild>
          <motion.a
            {...linkProps}
            className={cx('relative p-2.5 sm:p-3 block rounded-full', props.className)}
            href={platform.url}
            ref={forwardedRef}
            target="_blank"
            rel="noopener noreferrer"
            initial="hidden"
            animate={hovered ? 'visible' : 'hidden'}
            aria-label={`View ${platform.name} profile`}
          >
            <motion.div
              variants={{
                visible: {
                  color: isLightScheme ? getColorSlateLight(12) : getColorSlateDark(12),
                  scale: 1.1,
                },
                hidden: {
                  color: isLightScheme ? getColorSlateLight(9) : getColorSlateDark(9),
                  scale: 1,
                },
              }}
            >
              <Icon className={cx('size-4 sm:size-5', isLarge && 'lg:size-7')} />
            </motion.div>

            <Spinner
              variant={platformProp}
              scheme={scheme}
              visible={hovered}
              className="absolute top-0 left-0"
              width="100%"
              height="100%"
            />
          </motion.a>
        </MouseHover>
      </FocusRing>
    );
  },
);

SocialLink.displayName = 'SocialLink';
