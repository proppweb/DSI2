import { z, defineCollection, reference } from 'astro:content';

const principles = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        number: z.number(),
        tags: z.array(z.string()),
        video: z.string().optional(),
        videoThumbnail: z.string().optional(),
        img: z.string().optional(),
        lang: z.string(),
        subtitle: z.string().optional(),
        icon: z.string().optional(),
    })
});

const challenges = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        video: z.string().optional(),
        thumbnail: image().optional(),
        coverAlt: z.string().optional(),
        lang: z.string(),
        challengesNumber: z.number(),
    })
});

const projects = defineCollection({
    type: 'content',
    schema: ({ image }) => z.object({
        title: z.string(),
        subtitle: z.string(),
        partners: z.string(),
        design: z.string(),
        principals: z.string().optional(),
        team: z.string().optional(),
        cover: image().optional(),
        thumbnail: image().optional(),
        coverAlt: z.string().optional(),
        principlesPosts: z.array(reference('principles')),
        type: z.string(),
        lang: z.string(),
        projectNumber: z.number(),
    })
});

export const collections = {
    principles,
    challenges,
    projects,
};
