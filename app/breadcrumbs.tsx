'use client';

import * as React from 'react';
import { cx } from '@/cva.config';

import { FocusRing } from '@/components/focus-ring';
import { RouterLink } from './router';
import { ArrowLeftIcon } from '@heroicons/react/16/solid';
import { usePathname } from 'next/navigation';
import { getProjectByPathname } from '@/data';

/* -------------------------------------------------------------------------------------------------
 * Breadcrumbs
 * -----------------------------------------------------------------------------------------------*/

type BreadcrumbsElement = React.ComponentRef<'div'>;

interface BreadcrumbsProps extends React.ComponentPropsWithoutRef<'div'> {}

export const Breadcrumbs = React.forwardRef<BreadcrumbsElement, BreadcrumbsProps>(
  ({ className, ...props }, forwardedRef) => {
    const pathname = usePathname();
    const knownProject = getProjectByPathname(pathname);
    const isRootPath = pathname === '/';

    return (
      <div
        ref={forwardedRef}
        {...props}
        className={cx('flex items-center transition-transform', className)}
      >
        <FocusRing className="outline-offset-0 focus-visible:outline-offset-1">
          <RouterLink
            href="/"
            className={cx('text-slate-12 p-2 -m-2 rounded-md flex items-center relative')}
          >
            {!isRootPath && (
              <div className="h-full left-0 top-0 absolute flex items-center ml-2" aria-hidden>
                <ArrowLeftIcon className={cx('size-4 mr-2.5 text-slate-9 absolute')} />{' '}
              </div>
            )}
            <span
              className={cx(
                'font-body text-base tracking-tight font-bold capsize',
                !isRootPath && 'ml-7',
              )}
            >
              Andy Hook
            </span>
          </RouterLink>
        </FocusRing>

        {knownProject && (
          <span className="text-slate-9 font-body font-medium text-base capsize">
            <span className="ml-3 mr-2.5">/</span>
            {knownProject.title}
          </span>
        )}
      </div>
    );
  },
);

Breadcrumbs.displayName = 'Breadcrumbs';
