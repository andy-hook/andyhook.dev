import * as React from 'react';
import { cva, cx } from '@/cva.config';
import { RouterImage } from '@/app/router';
import { ImageWithMetadata } from '@/types';

const authorAvatar = cva({
  base: 'bg-slate-5 rounded-full overflow-hidden flex-shrink-0',
  variants: {
    size: {
      normal: 'size-7 sm:size-9',
      large: 'size-9 lg:size-11',
    },
  },
});

const authorHeading = cva({
  base: 'font-body font-semibold capsize text-slate-12 w-full',
  variants: {
    size: {
      normal: 'text-xs sm:text-sm mb-2',
      large: 'text-sm mb-2 lg:text-lg lg:mb-3',
    },
  },
});

const authorText = cva({
  base: 'font-body text-slate-10 font-medium capsize',
  variants: {
    size: {
      normal: 'text-xs sm:text-sm',
      large: 'text-sm lg:text-base',
    },
  },
});

type AuthorElement = React.ComponentRef<'div'>;

interface AuthorProps extends React.ComponentPropsWithoutRef<'div'> {
  name: string;
  company: string;
  role: string;
  avatar: ImageWithMetadata;
  size?: 'normal' | 'large';
}

export const Author = React.forwardRef<AuthorElement, AuthorProps>(
  ({ className, avatar, company, role, name, size = 'normal', ...props }, forwardedRef) => {
    return (
      <div
        className={cx('flex items-center gap-3 sm:gap-4', className)}
        {...props}
        ref={forwardedRef}
      >
        <div className={authorAvatar({ size })}>
          <RouterImage image={avatar} quality={90} sizes="50px" />
        </div>
        <dl className="flex flex-wrap">
          <dt className="sr-only">Name</dt>
          <dd className={authorHeading({ size })}>{name}</dd>
          <dt className="sr-only">Role</dt>
          <dd className={authorText({ size })}>{role}</dd>
          <dt className="sr-only">Company</dt>
          <dd className={authorText({ size })}>
            <span aria-hidden className="mx-1">
              –
            </span>
            {company}
          </dd>
        </dl>
      </div>
    );
  },
);

Author.displayName = 'Author';
