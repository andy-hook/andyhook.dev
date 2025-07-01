'use client';

import React from 'react';
import { createContext } from './create-context';

type DeviceContextValue = { isMobile: boolean };

const [DeviceProviderImpl, useDevice] = createContext<DeviceContextValue>('DeviceContext');

interface DeviceProviderProps extends React.PropsWithChildren {
  userAgent: string | null;
}

const DeviceProvider: React.FC<DeviceProviderProps> = (props) => {
  const { children, userAgent } = props;

  if (userAgent === null) {
    throw new Error('DeviceProvider must be provided with a valid userAgent.');
  }

  return (
    <DeviceProviderImpl
      isMobile={/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)}
    >
      {children}
    </DeviceProviderImpl>
  );
};

export { useDevice, DeviceProvider };
