'use client';
import * as React from 'react';

/* -------------------------------------------------------------------------------------------------
 * createContext
 * -----------------------------------------------------------------------------------------------
 * This is a modified version of the createContext function from the Radix UI library.
 * The original version is available here:
 * https://github.com/radix-ui/primitives/blob/main/packages/react/context/src/createContext.tsx
 *
 * It has been modified to memoize handlers so that consumers don't need to wrap them
 * manually in a useCallback hook.
 *
 * @example
 * const [Provider, useContext] = createContext<MyContextType>('MyComponent');
 *
 * const MyComponent = ({ children }) => {
 *   const [checked, setChecked] = React.useState(false);
 *   return (
 *     <Provider checked={checked} onCheckedChange={setChecked}>
 *       {children}
 *     </Provider>
 *   );
 * };
 *
 * const MyConsumer = () => {
 *   const context = useContext();
 *   return (
 *     <input type="checkbox" checked={context.checked} onChange={context.onCheckedChange} />
 *   );
 * };
 * -----------------------------------------------------------------------------------------------*/

const createContext = <ContextValueType extends Record<string, unknown>>(
  rootComponentName: string,
  defaultContext?: ContextValueType,
) => {
  type ProviderValue = {
    props: ContextValueType;
    propsRef: React.RefObject<ContextValueType>;
  };
  const defaultProviderValue = defaultContext
    ? { props: defaultContext, propsRef: { current: defaultContext } }
    : undefined;

  const Context = React.createContext<ProviderValue | undefined>(defaultProviderValue);

  const Provider = ({ children, ...props }: ContextValueType & { children: React.ReactNode }) => {
    const propsRef = React.useRef(props);
    propsRef.current = props;

    const value = React.useMemo(
      () => ({ props, propsRef }),
      // only re-memoize when non-handler props change.
      // handler props are plucked from the ref instead,
      // similar to how React.useEffectEvent works.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      Object.entries(props).flatMap(([prop, value]) => (prop.startsWith('on') ? [] : [value])),
    ) as unknown as ProviderValue;

    return React.createElement(Context.Provider, { value }, children);
  };

  const useContext = () => {
    const context = React.useContext(Context);
    if (!context) throw new Error(`Missing \`${rootComponentName}\``);
    return new Proxy({} as ContextValueType, {
      get: (_, prop) => {
        if (typeof prop !== 'string') return;
        // handler props are plucked from the ref similar to how React.useEffectEvent works
        if (prop.startsWith('on')) return context.propsRef.current?.[prop];
        return context.props?.[prop];
      },
    });
  };

  Provider.displayName = rootComponentName + 'Provider';
  return [Provider, useContext] as const;
};

/* ---------------------------------------------------------------------------------------------- */

export { createContext };
