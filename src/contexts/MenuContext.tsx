'use client'

import { createContext, useContext, useRef } from 'react'

type MenuContextType = {
  menuRef: React.RefObject<HTMLElement>
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)

export const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const menuRef = useRef<HTMLElement>(null)

  return (
    <MenuContext.Provider value={{ menuRef }}>{children}</MenuContext.Provider>
  )
}

export const useMenuContext = () => {
  const context = useContext(MenuContext)

  if (!context)
    throw new Error('useMenuContext must be used within MenuProvider')

  return context
}
