import * as React from 'react';

import { Work } from './work';
import { Experience } from './experience';
import { Testimonials } from './testimonials';
import { RouterTransition } from '../router';

export default function Home() {
  return (
    <div>
      <Work className="pb-12 md:pb-14 lg:pb-18 xl:pb-24" />

      <RouterTransition multiplier={10}>
        <Experience id="experience" className="py-12 md:py-14 lg:py-18 xl:py-24" />
      </RouterTransition>

      <RouterTransition multiplier={10}>
        <Testimonials id="testimonials" className="py-12 md:py-14 lg:py-18 xl:py-24" />
      </RouterTransition>
    </div>
  );
}
