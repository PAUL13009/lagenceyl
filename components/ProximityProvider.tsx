'use client'

import { createContext, useContext, useRef, ReactNode, MutableRefObject } from 'react'

const ProximityContext = createContext<MutableRefObject<HTMLElement | null> | null>(null)

export function ProximityProvider({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLElement>(null)

  return (
    <ProximityContext.Provider value={containerRef}>
      {children}
    </ProximityContext.Provider>
  )
}

export function useProximityContainer() {
  return useContext(ProximityContext)
}

