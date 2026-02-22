import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    title_en: z.string().optional(),
    date: z.date(),
    category: z.enum(["物理笔记", "国际象棋", "随笔"]),
    description: z.string(),
    description_en: z.string().optional(),
    pdf: z.string().optional(),
  }),
});

export const collections = { blog };
