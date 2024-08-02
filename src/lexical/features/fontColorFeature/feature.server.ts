import { createServerFeature } from '@payloadcms/richtext-lexical'
import { FontColorFeatureClient } from './feature.client'
import { Field, TextField } from 'payload'

// const urlField: TextField = {
//   name: 'fontColor',
//   type: 'text',
//   required: true,
// }

export const FontColorFeature = createServerFeature({
  feature: {
    ClientFeature: FontColorFeatureClient,

    // generateSchemaMap: () => {
    //   const schemaMap = new Map<string, Field[]>()

    //   const fields = [urlField]
    //   schemaMap.set('fields', fields)

    //   return schemaMap
    // },
  },
  key: 'fontColor',
})
