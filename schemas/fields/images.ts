import { z } from 'astro:content'
import { image } from './image.ts'

export const images = z.array(image)
