import { queryFetcher } from '../utills/fetcher';
import { useQuery } from '@tanstack/react-query';
import { productSchema } from '../schemas/product';

const BASE_URL = 'https://fakestoreapi.com';

export const useProduct = (id: string | undefined) => {
	const url = `${BASE_URL}/products/${id}`;

	return useQuery({
		queryKey: ['product', id],
		queryFn: () => (id ? queryFetcher(url, productSchema) : null),
	});
};
