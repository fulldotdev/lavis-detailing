import { z } from 'astro:content'

const settingsSchema = z.object({
  colors: z.object({
    base: z.string(),
    brand: z.string(),
    accent: z.string(),
    scheme: z.string(),
    texture: z.string(),
    contrast: z.boolean(),
  }),
})
// typography: z.object({
//   font: z.string(),
//   size: z.string(),
//   lineHeight: z.string(),
//   letterSpacing: z.string(),
// }),
// layout: z.object({
//   maxWidth: z.string(),
//   width: z.string(),
//   padding: z.string(),
//   margin: z.string(),
// }),
