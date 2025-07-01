import * as React from 'react';

import { Tooltip } from '@/components/tooltip';
import { ExternalLink } from '@/components/external-link';
import { ExternalFavicon } from '@/components/external-favicon';

type TooltipLinkElement = React.ComponentRef<typeof ExternalLink>;

interface TooltipLinkProps extends React.ComponentPropsWithoutRef<typeof ExternalLink> {
  href: string;
}

export const TooltipLink = React.forwardRef<TooltipLinkElement, TooltipLinkProps>(
  (props, forwardedRef) => {
    const parsedUrl = React.useMemo(
      () => props.href.replace(/^(?:https?:\/\/)?(?:www\.)?|\/$/g, ''),
      [props.href],
    );

    return (
      <Tooltip
        content={
          <div className="font-body font-medium text-sm text-slate-light-11 flex items-center gap-2">
            <div className="relative bg-slate-light-5 rounded-full overflow-hidden">
              <ExternalFavicon
                image={{ src: props.href, alt: 'favicon', color: null }}
                className="size-3"
                fill
              />
            </div>
            <div className="capsize">
              <div className="truncate max-w-64">{parsedUrl}</div>
            </div>
          </div>
        }
      >
        <ExternalLink {...props} ref={forwardedRef} />
      </Tooltip>
    );
  },
);

TooltipLink.displayName = 'TooltipLink';
