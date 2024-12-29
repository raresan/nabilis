import { useMenuContext } from '@/contexts/MenuContext'

const useScrollToSection = () => {
  const { menuRef } = useMenuContext()

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (!element || !menuRef.current) return

    const menuHeight = menuRef.current.offsetHeight
    const elementPosition = element.getBoundingClientRect().top + window.scrollY
    const offsetPosition = elementPosition - menuHeight

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    })
  }

  return { scrollToSection }
}

export default useScrollToSection
