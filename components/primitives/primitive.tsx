import * as React from 'react';
import { useRender } from '@base-ui/react/use-render';
import type { useRender as UseRender } from '@base-ui/react/use-render';

const NODES = [
  'a',
  'button',
  'div',
  'form',
  'h2',
  'h3',
  'img',
  'input',
  'label',
  'li',
  'nav',
  'ol',
  'p',
  'span',
  'svg',
  'ul',
] as const;

type PrimitivePropsWithRef<E extends React.ElementType> = React.ComponentPropsWithRef<E> & {
  render?: UseRender.RenderProp;
};

interface PrimitiveForwardRefComponent<E extends React.ElementType>
  extends React.ForwardRefExoticComponent<PrimitivePropsWithRef<E>> {}

type Primitives = { [E in (typeof NODES)[number]]: PrimitiveForwardRefComponent<E> };

/* -------------------------------------------------------------------------------------------------
 * Primitive
 * -----------------------------------------------------------------------------------------------*/

export const Primitive = NODES.reduce((primitive, node) => {
  const Node = React.forwardRef((props: PrimitivePropsWithRef<typeof node>, forwardedRef: any) => {
    const { render, ...primitiveProps } = props;

    return useRender({
      defaultTagName: node,
      render,
      ref: forwardedRef,
      props: primitiveProps,
    });
  });

  Node.displayName = `Primitive.${node}`;

  return { ...primitive, [node]: Node };
}, {} as Primitives);
