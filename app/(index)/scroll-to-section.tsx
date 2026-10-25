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
    const isTransition = prevSectionId.current !== sectionId;
    prevSectionId.current = sectionId;
    if (!isScrollPath) return;

    const section = document.getElementById(sectionId);
    if (!section) return;

    const behavior = isTransition ? 'smooth' : 'instant';
    section.scrollIntoView({ behavior });

    const url = new URL(window.location.href);
    url.pathname = '/';
    window.history.replaceState(null, '', url);
  }, [sectionId, isScrollPath]);

  return null;
}
