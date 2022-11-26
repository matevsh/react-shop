import { Flex, Rating, Card, Badge, Button, Group, Text, Title, NumberInput, Modal, Center } from '@mantine/core';
import type { ProductT } from '../../schemas/product';
import { Link, useNavigate } from 'react-router-dom';
import { useStyles } from './styles';
import { useQuantity } from '../../hooks/useQuantity';
import { useState } from 'react';
import { useCart } from '../../hooks/useCart';
import { useMediaQuery } from '@mantine/hooks';

type Props = {
	product: ProductT;
};

const ProductCard = ({ product: { title, category, description, rating, price, image, id }, product }: Props) => {
	const { classes } = useStyles();

	const { changeQuantity, quantity } = useQuantity({});
	const [modalIsVisible, setModalIsVisible] = useState(false);
	const navigate = useNavigate();
	const { addItem } = useCart();

	const largeScreen = useMediaQuery('(min-width: 900px)');

	const addProductHandler = () => {
		setModalIsVisible(true);
		addItem(product, quantity);
	};

	const onCloseModal = () => {
		setModalIsVisible(false);
		changeQuantity(1);
	};

	return (
		<>
			<Modal onClose={onCloseModal} opened={modalIsVisible} title={'You add item to cart'}>
				<Center mb={16}>
					<Text>
						You add{' '}
						<Text
							component={'span'}
							variant="gradient"
							fw={700}
							color={'white'}
							gradient={{ from: '#74C0FC', to: '#38D9A9', deg: 135 }}
						>
							{title}
						</Text>{' '}
						<Text c={'dimmed'} component={'span'}>
							({quantity})
						</Text>
					</Text>
				</Center>
				<Group>
					<Button onClick={() => navigate('/cart')} sx={{ flex: '1 1 auto' }}>
						Go to cart
					</Button>
					<Button onClick={onCloseModal} sx={{ flex: '1 1 auto' }}>
						Continue shopping
					</Button>
				</Group>
			</Modal>
			<Card shadow="sm" p="lg" radius="md" withBorder>
				<Card.Section>
					<Link to={`/product/${id}`} className={classes.cardHeader}>
						<img
							src={image}
							style={{
								height: '160px',
							}}
							alt={`${title} image`}
						/>
					</Link>
				</Card.Section>

				<Link to={`/product/${id}`} className={classes.link}>
					<Group position="apart" mt="md" mb="xs" spacing={8}>
						<Text weight={500} lineClamp={1} c={'white'}>
							{title}
						</Text>
						<Badge color="indigo" variant="light" my={8}>
							{category}
						</Badge>
					</Group>

					<Text size="sm" color="dimmed" lineClamp={3}>
						{description}
					</Text>
				</Link>

				<Flex align={'center'} justify={'space-between'} mt={'xs'}>
					<Rating value={rating.rate} fractions={2} readOnly mt={4} />

					<Title order={2} align={'right'} c={'white'}>
						{price.toFixed(2)}zł
					</Title>
				</Flex>

				<Flex align={'center'} gap={4}>
					<Button
						variant="light"
						color="indigo"
						fullWidth
						mt="sm"
						radius="md"
						size={largeScreen ? 'xs' : 'lg'}
						sx={{ flex: '7' }}
						onClick={addProductHandler}
					>
						Buy
					</Button>
					<NumberInput
						defaultValue={1}
						value={quantity}
						size={largeScreen ? 'xs' : 'lg'}
						min={0}
						max={99}
						mt={12}
						sx={{ flex: '2', minWidth: largeScreen ? '50px' : '75px' }}
						onChange={(x) => changeQuantity(x)}
					/>
				</Flex>
			</Card>
		</>
	);
};

export default ProductCard;
