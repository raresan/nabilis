import Image from 'next/image'
import styles from './page.module.css'

import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}
