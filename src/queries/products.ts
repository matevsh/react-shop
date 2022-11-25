import { queryFetcher } from '../utills/fetcher';
import { useQuery } from '@tanstack/react-query';
import { productsSchema } from '../schemas/product';

const BASE_URL = 'https://fakestoreapi.com';

export const useProducts = (category = '') => {
	const url = `${BASE_URL}/products/${category ? `category/${category}` : ''}`;

	return useQuery({
		queryKey: ['products', category],
		queryFn: () => queryFetcher(url, productsSchema),
	});
};
