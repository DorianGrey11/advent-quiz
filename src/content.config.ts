import {defineCollection, z} from 'astro:content';
import {glob} from 'astro/loaders';

const questions = defineCollection({
    loader: glob({pattern: '**/*.yaml', base: "./src/data/questions"}),
    schema: ({image}) =>
        z.object({
            number: z.number(),
            question: z.string(),
            a: z.string(),
            b: z.string(),
            c: z.string(),
            d: z.string(),
            correct: z.string(),
            english: z.object({
                question: z.string(),
                a: z.string(),
                b: z.string(),
                c: z.string(),
                d: z.string(),
            }),
            links: z.object({
                question: z.object({label: z.string(), url: z.string()}).optional(),
                a: z.object({label: z.string(), url: z.string()}).optional(),
                b: z.object({label: z.string(), url: z.string()}).optional(),
                c: z.object({label: z.string(), url: z.string()}).optional(),
                d: z.object({label: z.string(), url: z.string()}).optional(),
            }).optional(),
        }),
});

export const collections = {
    questions,
};