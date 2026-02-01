import { defineCollection, z } from 'astro:content';

const localizedText = z.object({
  es: z.string(),
  en: z.string().optional()
});

const contentBlockSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('text'),
    markdown: z.string()
  }),
  z.object({
    type: z.literal('image'),
    src: z.string(),
    alt: z.string().optional(),
    caption: localizedText.optional()
  }),
  // Self-hosted video (e.g. /public/videos/*.mp4)
  z.object({
    type: z.literal('video'),
    src: z.string(),
    poster: z.string().optional(),
    caption: localizedText.optional()
  }),
  // Embedded video (YouTube/Vimeo/other iframe)
  z.object({
    type: z.literal('embed'),
    url: z.string(),
    provider: z.enum(['youtube', 'vimeo', 'generic']).optional(),
    title: z.string().optional(),
    caption: localizedText.optional()
  }),
  // Future: custom interactive blocks (IFC viewer, Three.js, etc.)
  z.object({
    type: z.literal('widget'),
    name: z.enum(['ifcViewer', 'threejs', 'iframe']),
    props: z.record(z.unknown()).optional(),
    caption: localizedText.optional()
  })
]);

const baseCardSchema = z.object({
  id: z.string(),
  order: z.number().int(),
  title: localizedText,
  description: localizedText,
  image: z.string(),

  // common
  tags: z.array(z.string()).default([]),

  // optional structured content blocks (keep Markdown body available too)
  content: z.array(contentBlockSchema).optional()
});

const architectureSchema = baseCardSchema.extend({
  year: z.number().int().optional(),
  location: localizedText.optional(),
  awards: z.array(z.string()).default([])
});

export const collections = {
  architecture: defineCollection({
    type: 'content',
    schema: architectureSchema
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
