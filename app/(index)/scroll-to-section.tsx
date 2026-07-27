'use client';

import * as React from 'react';
import { usePathname } from 'next/navigation';

const sectionIds: Record<string, string> = {
  '/experience': 'experience',
  '/testimonials': 'testimonials',
};

export function ScrollToSection() {
  const pathname = usePathname();
  const sectionId = sectionIds[pathname];
  const prevSectionId = React.useRef(sectionId);

  React.useEffect(() => {
    if (!sectionId) return;

    const isTransition = prevSectionId.current !== sectionId;
    const behavior = isTransition ? 'smooth' : 'instant';
    document.getElementById(sectionId)?.scrollIntoView({ behavior });
    prevSectionId.current = sectionId;
  }, [sectionId]);

  return null;
}
