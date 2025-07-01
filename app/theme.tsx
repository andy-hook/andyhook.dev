'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

import { ProjectId } from '@/types';
import { getProjectById } from '@/data';

import { cx } from '@/cva.config';
import { getThemeColorValues } from '@/theme';

/* -------------------------------------------------------------------------------------------------
 * Theme
 * -----------------------------------------------------------------------------------------------*/

type ThemeElement = React.ComponentRef<'div'>;

interface ThemeProps extends React.ComponentPropsWithoutRef<'div'> {}

const Theme = React.forwardRef<ThemeElement, ThemeProps>((props, forwardedRef) => {
  const { className, ...themeProps } = props;
  const pathname = usePathname();

  const colorVariables = React.useMemo(() => {
    const parsedPathname = pathname.replace('/', '') as ProjectId;
    const projectId = getProjectById(parsedPathname)?.id;

    return getThemeColorValues(projectId);
  }, [pathname]);

  return (
    <div
      {...themeProps}
      className={cx('selection:bg-slate-light-4 selection:text-slate-light-12', className)}
      style={colorVariables}
      ref={forwardedRef}
    />
  );
});

Theme.displayName = 'Theme';

/* -----------------------------------------------------------------------------------------------*/

export { Theme };
