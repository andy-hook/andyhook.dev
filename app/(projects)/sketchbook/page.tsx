import * as React from 'react';
import { getProjectMetadata } from '../_components/metadata';
import { RouterImage } from '@/app/router';
import { aragonComponentsImage } from '@/images';
import { Gutter } from '@/components/gutter';

export const metadata = getProjectMetadata('aragon');

export default function SketchbookPage() {
  return (
    <Gutter size="small" className="grid grid-cols-5 gap-5">
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
      <RouterImage image={aragonComponentsImage} className="w-full" quality={90} sizes="100vw" />
    </Gutter>
  );
}
