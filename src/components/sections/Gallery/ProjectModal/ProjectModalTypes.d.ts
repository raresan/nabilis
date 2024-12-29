import type { ISanityProject } from '@/sanity/schemas/documents/project'

export interface IProjectModal extends ISanityProject {
  isOpen: boolean
  onClose: () => void
}
