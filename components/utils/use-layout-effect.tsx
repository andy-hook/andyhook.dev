import * as React from 'react';

export const useLayoutEffect =
  typeof document !== 'undefined' ? React.useLayoutEffect : React.useEffect;
