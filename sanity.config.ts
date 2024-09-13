'use client'

/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\app\admin\[[...tool]]\page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schemaTypes'
import { structure } from '@/sanity/structure'
import { PageType } from '@/sanity/types/enums'

const singletonsList: string[] = [PageType.Hero, PageType.About]

export default defineConfig({
  basePath: '/admin',
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schemaTypes' folder
  schema,

  document: {
    // Hide + icon for creating a new document in singletons
    // Also hide document from "+ Create" button
    newDocumentOptions: (prev) => {
      return prev.filter(
        (document) => !singletonsList.includes(document.templateId),
      )
    },
    actions: (prev, { schemaType }) => {
      if (singletonsList.includes(schemaType)) {
        return prev.filter((prevAction) => prevAction.action == 'publish')
      }
      return prev
    },
  },

  plugins: [
    structureTool({ structure }),
    // Vision is for querying with GROQ from inside the Studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
