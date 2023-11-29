import { z } from 'astro:content';

export const pages = z.object({
  blocks: z.array(z.string()),

  title: z.string(),
  tags: z.array(z.string()),
  image: z.string().optional(),
});