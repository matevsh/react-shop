import ProductCard from '../components/card/ProductCard';
import { SimpleGrid, Title } from '@mantine/core';
import { useProducts } from '../queries/products';
import { useSearchParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatError } from '../utills/formatError';

const Home = () => {
	const [searchParams] = useSearchParams();

	const { data, isError, isLoading, error } = useProducts(searchParams.get('category') ?? '');

	return (
		<Error isError={isError} message={formatError(error)}>
			<Loading isLoading={isLoading}>
				<Title color={'white'} p={'1rem'} transform={'capitalize'}>
					{searchParams.get('category')}
				</Title>
				<SimpleGrid
					cols={3}
					breakpoints={[
						{ maxWidth: 980, cols: 3, spacing: 'md' },
						{ maxWidth: 755, cols: 2, spacing: 'sm' },
						{ maxWidth: 500, cols: 1, spacing: 'sm' },
					]}
				>
					{data?.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})}
				</SimpleGrid>
			</Loading>
		</Error>
	);
};

export default Home;
