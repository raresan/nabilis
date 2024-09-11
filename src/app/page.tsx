import Image from 'next/image'
import styles from './page.module.css'

import { client } from '@/sanity/lib/client'

import Menu from '@/components/ui/Menu'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'

import heroQuery from '@/sanity/queries/singletons/homePage'

export default async function Home() {
  let heroData = await client.fetch(heroQuery)

  return (
    <>
      <Menu />
      <Hero data={heroData} />
      <About />
      <Gallery />
      <Footer />
    </>
  )
}
