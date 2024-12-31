import { useState, useEffect } from 'react'

const useIsTouchDevice = () => {
  const [isTouch, setIsTouch] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkTouch = () => {
      const hasTouch = Boolean(
        'ontouchstart' in window ||
          (window.DocumentTouch && document instanceof window.DocumentTouch) ||
          navigator.maxTouchPoints > 0 ||
          // @ts-ignore - IE/Edge
          navigator.msMaxTouchPoints > 0 ||
          // iPadOS
          (window.matchMedia &&
            window.matchMedia('(pointer: coarse)').matches) ||
          window.matchMedia('(hover: none) and (pointer: coarse)').matches ||
          /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent,
          ),
      )

      setIsTouch(hasTouch)
    }

    checkTouch()

    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)')
    const handleMediaChange = () => checkTouch()

    const events = ['orientationchange', 'resize']
    events.forEach((event) => window.addEventListener(event, checkTouch))
    mediaQuery.addEventListener('change', handleMediaChange)

    return () => {
      events.forEach((event) => window.removeEventListener(event, checkTouch))
      mediaQuery.removeEventListener('change', handleMediaChange)
    }
  }, [])

  return isTouch
}

export default useIsTouchDevice

declare global {
  interface WindowEventMap {
    orientationchange: Event
  }

  interface Window {
    DocumentTouch: any
  }
}
