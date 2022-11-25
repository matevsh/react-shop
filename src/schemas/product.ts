import { z } from 'zod';

export const productSchema = z.object({
	id: z.number(),
	title: z.string(),
	price: z.number(),
	description: z.string(),
	category: z.string(),
	image: z.string().url(),
	rating: z.object({
		rate: z.number(),
		count: z.number(),
	}),
});

export type ProductT = z.infer<typeof productSchema>;

export const productsSchema = z.array(productSchema);

export type ProductsT = z.infer<typeof productsSchema>;
