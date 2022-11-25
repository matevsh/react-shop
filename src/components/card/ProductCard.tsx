import { Flex, Rating, Card, Badge, Button, Group, Text, Title } from '@mantine/core';
import type { ProductT } from '../../schemas/product';

type Props = {
	product: ProductT;
};

const ProductCard = ({ product: { title, category, description, rating, price, image } }: Props) => {
	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Card.Section
				sx={{
					background: 'white',
					display: 'flex',
					justifyContent: 'center',
					padding: '8px',
				}}
			>
				<img
					src={image}
					style={{
						height: '160px',
					}}
					alt="product image"
				/>
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Text weight={500} lineClamp={1}>
					{title}
				</Text>
				<Badge color="indigo" variant="light" ml={'auto'}>
					{category}
				</Badge>
			</Group>

			<Text size="sm" color="dimmed" lineClamp={3}>
				{description}
			</Text>

			<Flex align={'center'} justify={'space-between'} mt={'xs'}>
				<Rating value={rating.rate} fractions={2} readOnly mt={4} />

				<Title order={2} align={'right'}>
					{price.toFixed(2)}zł
				</Title>
			</Flex>

			<Button variant="light" color="blue" fullWidth mt="sm" radius="md">
				Buy
			</Button>
		</Card>
	);
};

export default ProductCard;
