import { z } from 'zod'

export const buttonContent = z.object({
  label: z.string().nullable(),
  href: z.string().nullable(),
})
