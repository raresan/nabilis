import { client } from '@/sanity/lib/client'

import Menu from '@/components/ui/Menu'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Gallery from '@/components/sections/Gallery'
import Footer from '@/components/sections/Footer'

import siteSettingsQuery from '@/sanity/queries/singletons/siteSettings'
import heroQuery from '@/sanity/queries/singletons/hero'
import aboutQuery from '@/sanity/queries/singletons/about'
import projectQuery from '@/sanity/queries/documents/project'

export default async function Home() {
  const [siteSettingsData, heroData, aboutData, projectData] =
    await Promise.all([
      client.fetch(siteSettingsQuery),
      client.fetch(heroQuery),
      client.fetch(aboutQuery),
      client.fetch(projectQuery),
    ])

  return (
    <>
      <Menu />
      <Hero data={heroData} />
      <About data={aboutData} />
      <Gallery projects={projectData} />
      <Footer />
    </>
  )
}
