import { useRouter } from 'next/router'
import React, {
  useContext,
  useCallback,
  useMemo,
  useEffect,
  useState,
} from 'react'

type LoadPercentageContextValue = {
  percentLoaded: number

  addToPendingListByKey: (key: string) => void
  addToLoadedListByKey: (key: string) => void
}

const LoadPercentageContext = React.createContext<LoadPercentageContextValue>(
  null!
)

function LoadPercentageBaseProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const [loadedList, setLoadedList] = useState<string[]>([])
  const [pendingList, setPendingList] = useState<string[]>([])

  const totalCount = pendingList.length
  const totalLoaded = loadedList.length

  const percentLoaded = useMemo(() => {
    return totalCount > 0 ? Math.floor((100 / totalCount) * totalLoaded) : 0
  }, [totalCount, totalLoaded])

  const addToPendingListByKey = useCallback((key: string) => {
    setPendingList((prevList) => {
      return prevList.includes(key) ? prevList : [...prevList, key]
    })
  }, [])

  const addToLoadedListByKey = useCallback((key: string) => {
    setLoadedList((prevList) => {
      return prevList.includes(key) ? prevList : [...prevList, key]
    })
  }, [])

  return (
    <LoadPercentageContext.Provider
      value={{ addToPendingListByKey, addToLoadedListByKey, percentLoaded }}
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

  // Reset all context state when navigating between routes
  return (
    <LoadPercentageBaseProvider key={router.pathname}>
      {children}
    </LoadPercentageBaseProvider>
  )
}

function useLoadPercentage(): number {
  const { percentLoaded } = useContext(LoadPercentageContext)

  return percentLoaded
}

function useTrackLoading(key: string): { trackLoaded: () => void } {
  const { addToPendingListByKey, addToLoadedListByKey } = useContext(
    LoadPercentageContext
  )

  const trackLoaded = useCallback(() => {
    addToLoadedListByKey(key)
  }, [addToLoadedListByKey, key])

  useEffect(() => {
    addToPendingListByKey(key)
  }, [addToPendingListByKey, key])

  return { trackLoaded }
}

export { LoadPercentageProvider, useLoadPercentage, useTrackLoading }
