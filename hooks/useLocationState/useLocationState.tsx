import { useRouter } from 'next/router'
import React, { useContext, useMemo } from 'react'
import { ProjectName, PROJECTS } from '../../data/projects'
import { keys } from '../../utils/general'

type LocationStateContextValue = {
  currentProjectName: ProjectName | null
}

const LocationStateContext = React.createContext<LocationStateContextValue>(
  null!
)

function LocationStateProvider({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  const router = useRouter()

  const currentProjectName = useMemo(() => {
    return (
      keys(PROJECTS).find((key) => PROJECTS[key].route === router.pathname) ??
      null
    )
  }, [router.pathname])

  return (
    <LocationStateContext.Provider value={{ currentProjectName }}>
      {children}
    </LocationStateContext.Provider>
  )
}

function useLocationState(): LocationStateContextValue {
  return useContext(LocationStateContext)
}

export { useLocationState, LocationStateProvider }
