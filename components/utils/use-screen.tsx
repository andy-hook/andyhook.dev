import * as React from 'react';

import { screens } from '@/theme';

type ScreenKey = keyof typeof screens;

export function useScreen(targets: { min?: ScreenKey; max?: ScreenKey }) {
  const query = React.useMemo(() => {
    const min = targets.min ? `(min-width: ${screens[targets.min]}px)` : '';
    const max = targets.max ? `(max-width: ${screens[targets.max] - 1}px)` : '';

    return [min, max].filter((string) => string).join(' and ');
  }, [targets]);

  const subscribe = React.useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(query);

      matchMedia.addEventListener('change', callback);
      return () => {
        matchMedia.removeEventListener('change', callback);
      };
    },
    [query],
  );

  const getSnapshot = () => {
    return window.matchMedia(query).matches;
  };

  const getServerSnapshot = () => {
    // matchMedia is not available on the server
    return false;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
