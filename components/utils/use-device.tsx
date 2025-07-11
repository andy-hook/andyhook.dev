'use client';

import React from 'react';
import { createContext } from './create-context';

type DeviceContextValue = { isMobile: boolean };

const [DeviceProviderImpl, useDevice] = createContext<DeviceContextValue>('DeviceContext');

interface DeviceProviderProps extends React.PropsWithChildren {}

const DeviceProvider: React.FC<DeviceProviderProps> = (props) => {
  const { children } = props;
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    setIsMobile(
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    );
  }, []);

  return <DeviceProviderImpl isMobile={isMobile}>{children}</DeviceProviderImpl>;
};

export { useDevice, DeviceProvider };
