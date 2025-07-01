import * as React from 'react';

import { Work } from './work';
import { Experience } from './experience';
import { Testimonials } from './testimonials';
import { RouterTransition } from '../router';

export default function Home() {
  return (
    <div className="space-y-24 md:space-y-28 lg:space-y-36 xl:space-y-48">
      <Work />

      <RouterTransition multiplier={10}>
        <Experience />
      </RouterTransition>

      <RouterTransition multiplier={10}>
        <Testimonials />
      </RouterTransition>
    </div>
  );
}
