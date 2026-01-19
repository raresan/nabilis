'use client'

import { useEffect } from 'react'

const ScrollRestoration = () => {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
    window.scrollTo(0, 0)
  }, [])

  return null
}

export default ScrollRestoration
