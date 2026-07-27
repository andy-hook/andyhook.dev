import * as React from 'react';

import { Work } from './work';
import { Experience } from './experience';
import { Testimonials } from './testimonials';
import { SideProjects } from './side-projects';
import { ScrollToSection } from './scroll-to-section';

export default function Home() {
  return (
    <div>
      <Work className="pb-12 md:pb-14 lg:pb-18 xl:pb-20 xxl:pb-24" />
      <Experience id="experience" className="py-12 md:py-14 xl:py-20 xxl:py-24" />
      <Testimonials id="testimonials" className="py-12 md:py-14 xl:py-20 xxl:py-24" />
      <SideProjects id="side-projects" className="py-12 md:py-14 xl:py-20 xxl:pt-24" />
      <ScrollToSection />
    </div>
  );
}
