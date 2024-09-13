import Image from 'next/image'
import styles from './page.module.css'

import { client } from '@/sanity/lib/client'

import Menu from '@/components/ui/Menu'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'

import heroQuery from '@/sanity/queries/singletons/hero'
import aboutQuery from '@/sanity/queries/singletons/about'

export default async function Home() {
  const [heroData, aboutData] = await Promise.all([
    client.fetch(heroQuery),
    client.fetch(aboutQuery),
  ])

  return (
    <>
      <Menu />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Gallery />
      <Footer />
    </>
  )
}
