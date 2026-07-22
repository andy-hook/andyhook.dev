import * as React from 'react';

import { Work } from './work';
import { Experience } from './experience';
import { Testimonials } from './testimonials';
import { RouteTransition } from '@/components/route-transition';
import { SideProjects } from './side-projects';

export default function Home() {
  return (
    <div>
      <Work className="pb-12 md:pb-14 lg:pb-18 xl:pb-20 xxl:pb-24" />

      <RouteTransition multiplier={10}>
        <Experience id="experience" className="py-12 md:py-14 lg:py-18 xl:py-20 xxl:py-24" />
      </RouteTransition>

      <RouteTransition multiplier={10}>
        <Testimonials id="testimonials" className="py-12 md:py-14 lg:py-18 xl:py-20 xxl:py-24" />
      </RouteTransition>

      <RouteTransition multiplier={10}>
        <SideProjects id="side-projects" className="py-12 md:py-14 lg:py-18 xl:py-20 xxl:pt-24" />
      </RouteTransition>
    </div>
  );
}
