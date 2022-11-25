import { queryFetcher } from '../utills/fetcher';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';

const categoriesSchema = z.array(z.string());

const BASE_URL = 'https://fakestoreapi.com';

export const useCategories = () => {
	return useQuery({
		queryKey: ['categories'],
		queryFn: () => queryFetcher(`${BASE_URL}/products/categories`, categoriesSchema),
	});
};
