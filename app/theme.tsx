'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { getProjectByPathname } from '@/data';

import { cx } from '@/cva.config';
import { getThemeColorValues } from '@/theme';
import { Slot } from '@/components/primitives/slot';

/* -------------------------------------------------------------------------------------------------
 * Theme
 * -----------------------------------------------------------------------------------------------*/

type ThemeElement = React.ComponentRef<'div'>;

interface ThemeProps extends React.ComponentPropsWithoutRef<'div'> {
  asChild?: boolean;
}

const Theme = React.forwardRef<ThemeElement, ThemeProps>((props, forwardedRef) => {
  const { className, asChild, ...themeProps } = props;
  const pathname = usePathname();

  const colorVariables = React.useMemo(() => {
    const projectId = getProjectByPathname(pathname)?.id;
    return getThemeColorValues(projectId);
  }, [pathname]);

  const Component = asChild ? Slot : 'div';

  return (
    <Component
      {...themeProps}
      className={cx(
        'selection:bg-slate-light-4 selection:text-slate-light-12 bg-slate-2 antialiased',
        className,
      )}
      style={colorVariables}
      ref={forwardedRef}
    />
  );
});

Theme.displayName = 'Theme';

/* -----------------------------------------------------------------------------------------------*/

export { Theme };
