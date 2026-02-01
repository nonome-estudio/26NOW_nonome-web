import { defineCollection, z } from 'astro:content';

const localizedText = z.object({
  es: z.string(),
  en: z.string().optional()
});

const baseCardSchema = z.object({
  id: z.string(),
  order: z.number().int(),
  title: localizedText,
  description: localizedText,
  image: z.string(),
  imageWidth: z.number().int().optional(),
  imageHeight: z.number().int().optional()
});

export const collections = {
  architecture: defineCollection({
    type: 'content',
    schema: baseCardSchema
  }),
  services: defineCollection({
    type: 'content',
    schema: baseCardSchema
  }),
  cases: defineCollection({
    type: 'content',
    schema: baseCardSchema
  })
};
