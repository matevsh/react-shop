import { useProduct } from '../queries/product';
import { useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { formatError } from '../utills/formatError';
import { useCart } from '../hooks/useCart';
import {
	Image,
	Stack,
	Flex,
	Title,
	Divider,
	Rating,
	Text,
	Badge,
	NumberInput,
	Button,
	SimpleGrid,
	Center,
} from '@mantine/core';
import { useQuantity } from '../hooks/useQuantity';
import { showNotification } from '@mantine/notifications';

const ProductPage = () => {
	const { id } = useParams();

	const { isLoading, data, isError, error } = useProduct(id);
	const { quantity, changeQuantity } = useQuantity({});

	const { addItem } = useCart();

	const addToCartHandler = () => {
		addItem(data, quantity);
		showNotification({
			title: 'Added item to your cart',
			message: `Product ${data?.title} was added to your cart.`,
			autoClose: 5000,
		});
	};

	return (
		<Error isError={isError} message={formatError(error)}>
			<Loading isLoading={isLoading}>
				<SimpleGrid
					cols={2}
					pt={32}
					breakpoints={[
						{ maxWidth: 'sm', cols: 2, spacing: 'sm' },
						{ maxWidth: 'xs', cols: 1, spacing: 'sm' },
					]}
				>
					<Center bg={'white'}>
						<Image
							src={data?.image}
							p={16}
							bg={'white'}
							m={16}
							radius={8}
							fit={'cover'}
							alt={`${data?.title} image`}
						/>
					</Center>
					<Stack pt={8} pb={32} px={16}>
						<Title>{data?.title}</Title>
						<Flex align={'center'}>
							<Divider w={'30%'} size={'xl'} />
							<Badge color="indigo" variant="light" ml={'auto'}>
								{data?.category}
							</Badge>
						</Flex>
						<Text fw={700} sx={{ fontSize: '2rem' }}>
							{data?.price && (quantity * data.price).toFixed(2)} zł
						</Text>
						<Flex align={'center'} gap={8}>
							<Rating value={data?.rating.rate} fractions={2} readOnly />
							<Text fw={700}>{data?.rating.count} Reviews</Text>
						</Flex>
						<Text c={'dimmed'}>{data?.description}</Text>

						<Flex justify={'space-between'} align={'center'} mt={32} gap={8}>
							<Text>Quantity</Text>
							<NumberInput
								defaultValue={1}
								min={1}
								max={99}
								value={quantity}
								onChange={(x) => changeQuantity(x)}
							/>
						</Flex>

						<Button variant="light" color="indigo" radius="md" onClick={addToCartHandler}>
							Dodaj {quantity}
						</Button>
					</Stack>
				</SimpleGrid>
			</Loading>
		</Error>
	);
};

export default ProductPage;
