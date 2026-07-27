'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { getProjectByPathname } from '@/data';

import { cx } from '@/cva.config';
import { getThemeColorValues } from '@/theme';
import { Primitive } from '@/components/primitives/primitive';

/* -------------------------------------------------------------------------------------------------
 * Theme
 * -----------------------------------------------------------------------------------------------*/

type ThemeElement = React.ComponentRef<typeof Primitive.div>;

interface ThemeProps extends React.ComponentPropsWithoutRef<typeof Primitive.div> {}

const Theme = React.forwardRef<ThemeElement, ThemeProps>((props, forwardedRef) => {
  const { className, ...themeProps } = props;
  const pathname = usePathname();

  const colorVariables = React.useMemo(() => {
    const projectId = getProjectByPathname(pathname)?.id;
    return getThemeColorValues(projectId);
  }, [pathname]);

  return (
    <Primitive.div
      {...themeProps}
      ref={forwardedRef}
      className={cx(
        'selection:bg-slate-light-4 selection:text-slate-light-12 bg-slate-2 antialiased',
        className,
      )}
      style={colorVariables}
    />
  );
});

Theme.displayName = 'Theme';

/* -----------------------------------------------------------------------------------------------*/

export { Theme };
