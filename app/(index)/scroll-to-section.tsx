'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';
import { scrollPaths } from '@/scroll-paths';

export function ScrollToSection() {
  const pathname = usePathname();
  const sectionId = pathname.slice(1);
  const isScrollPath = Object.values(scrollPaths).includes(sectionId);
  const prevSectionId = React.useRef(sectionId);

  React.useEffect(() => {
    if (!isScrollPath) return;

    const isTransition = prevSectionId.current !== sectionId;
    const behavior = isTransition ? 'smooth' : 'instant';
    document.getElementById(sectionId)?.scrollIntoView({ behavior });
    prevSectionId.current = sectionId;
  }, [sectionId, isScrollPath]);

  return null;
}
