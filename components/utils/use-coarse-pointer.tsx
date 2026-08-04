'use client';

import * as React from 'react';

export function useCoarsePointer() {
  const subscribe = React.useCallback((callback: () => void) => {
    const matchMedia = window.matchMedia('(pointer: coarse)');

    matchMedia.addEventListener('change', callback);
    return () => matchMedia.removeEventListener('change', callback);
  }, []);

  const getSnapshot = () => {
    return window.matchMedia('(pointer: coarse)').matches;
  };

  const getServerSnapshot = () => {
    // matchMedia is not available on the server
    return false;
  };

  return React.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
