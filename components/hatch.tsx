import * as React from 'react';
import { cx } from '@/cva.config';
import { getColorSlateDark, getColorSlateLight } from '@/theme';

/* -------------------------------------------------------------------------------------------------
 * Hatch
 * -----------------------------------------------------------------------------------------------*/

type HatchElement = React.ComponentRef<'div'>;

interface HatchProps extends React.ComponentPropsWithoutRef<'div'> {
  orientation?: 'horizontal' | 'vertical';
  contrast?: 'low' | 'normal';
  scheme?: 'light' | 'dark';
  space?: number;
  width?: number;
}

const Hatch = React.forwardRef<HatchElement, HatchProps>(
  (
    {
      orientation = 'horizontal',
      contrast = 'normal',
      scheme = 'dark',
      space = 18,
      width = 1,
      ...props
    },
    forwardedRef,
  ) => {
    const vertical = orientation === 'vertical';
    const hatchColor = getHatchColor(scheme, contrast);

    return (
      <div ref={forwardedRef} {...props} className={cx('relative', props.className)}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(${vertical ? '-45deg' : '45deg'}, transparent, transparent ${space}px, ${hatchColor} ${space}px, ${hatchColor} ${space + width}px)`,
          }}
        />
      </div>
    );
  },
);

Hatch.displayName = 'Hatch';

/* ---------------------------------------------------------------------------------------------- */

const getHatchColor = (scheme: 'light' | 'dark', contrast: 'low' | 'normal') => {
  if (scheme === 'light') return contrast === 'low' ? getColorSlateLight(4) : getColorSlateLight(6);
  return contrast === 'low' ? getColorSlateDark(2) : getColorSlateDark(3);
};

export { Hatch };
