import { z, defineCollection } from 'astro:content'

const caseStudiesCollection = defineCollection({
  type: 'data',
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      shortDescription: z.string(),
      category: z.enum([
        'Services',
        'Real Estate',
        'Entertainment',
        'Book',
        'Ecommerce',
        'Food',
        'Startup',
        'Social App',
        'Health',
      ]),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      date: z.string(),
      featured: z.boolean(),
      stack: z.array(z.enum(['security'])),
      hero: z.object({
        tagline: z.string(),
        headline: z.string(),
        keyPoints: z.optional(z.array(
          z.object({
            label: z.string(),
            text: z.string(),
            icon: z.optional(z.enum(['stack', 'bulb', 'puzzle'])),
          })),
        ),
        keyPoints2: z.optional(z.array(
          z.object({
            label: z.string(),
            text: z.string(),
            icon: z.optional(z.enum(['stack', 'bulb', 'puzzle'])),
          })),
        ),
        keyPoints3: z.optional(z.array(
          z.object({
            label: z.string(),
            text: z.string(),
            icon: z.optional(z.string()),
          })),
        ),
        keyPoints4: z.optional(z.array(
          z.object({
            label: z.string(),
            text: z.string(),
            icon: z.optional(z.enum(['stack', 'bulb', 'puzzle'])),
          })),
        ),
      }),
      about: z.object({
        tagline: z.string(),
        text: z.string(),
        text2: z.optional(z.string()), // Hacer text2 opcional
        text3: z.optional(z.string()), // Hacer text3 opcional
      }),
      statsSection: z.object({
        tagline: z.string(),
        headline: z.string(),
        text: z.string(),
        action: z.object({
          label: z.string(),
          href: z.string(),
        }),
        stats: z.array(
          z.object({
            label: z.string(),
            value: z.string(),
          }),
        ),
      }),
      featuresSection: z.object({
        tagline: z.string(),
        headline: z.string(),
        text: z.string(),
        features: z.array(
          z.object({
            tagline: z.string(),
            headline: z.string(),
            text: z.string(),
            image: z.object({
              src: image(),
              alt: z.string(),
            }),
          }),
        ),
      }),
    }),
})

export const collections = {
  caseStudies: caseStudiesCollection,
}
