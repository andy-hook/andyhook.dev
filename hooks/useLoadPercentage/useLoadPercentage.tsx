import { useRouter } from 'next/router'
import React, { useState, useContext, useCallback, useMemo } from 'react'

type LoadPercentageContextValue = {
  percentLoaded: number
  incrementTotalCount: () => void
  incrementTotalLoaded: () => void
}

const LoadPercentageContext = React.createContext<LoadPercentageContextValue>(
  null!
)

function LoadPercentageBaseProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [totalPending, setTotalPending] = useState(0)
  const [totalLoaded, setTotalLoaded] = useState(0)

  const percentLoaded = useMemo(
    () =>
      totalPending > 0 ? Math.floor((100 / totalPending) * totalLoaded) : 0,
    [totalPending, totalLoaded]
  )

  const incrementTotalCount = useCallback(
    () => setTotalPending((prevCount) => prevCount + 1),
    []
  )

  const incrementTotalLoaded = useCallback(
    () => setTotalLoaded((prevCount) => prevCount + 1),
    []
  )

  return (
    <LoadPercentageContext.Provider
      value={{ incrementTotalCount, incrementTotalLoaded, percentLoaded }}
    >
      {children}
    </LoadPercentageContext.Provider>
  )
}

function LoadPercentageProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const router = useRouter()

  return (
    <LoadPercentageBaseProvider key={router.pathname}>
      {children}
    </LoadPercentageBaseProvider>
  )
}

function useLoadPercentage(): {
  percentLoaded: number
  incrementTotalLoaded: () => void
  incrementTotalCount: () => void
} {
  const {
    incrementTotalCount,
    incrementTotalLoaded,
    percentLoaded,
  } = useContext(LoadPercentageContext)

  return {
    incrementTotalCount,
    incrementTotalLoaded,
    percentLoaded,
  }
}

export { LoadPercentageProvider, useLoadPercentage }
