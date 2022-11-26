import { Flex, Text, Stack, Center, CloseButton, NumberInput, Divider } from '@mantine/core';
import { CartProductT } from '../../providers/cart';
import { useCart } from '../../hooks/useCart';
import { Link } from 'react-router-dom';

type Props = {
	item: CartProductT;
};

const CartProduct = ({ item: { product, quantity } }: Props) => {
	const { setQuantity, deleteProduct } = useCart();

	return (
		<>
			<Flex pr={8}>
				<Center sx={{ flex: 1, borderRadius: 8 }} p={16} bg={'white'} m={16}>
					<img src={product.image} alt={product.title} style={{ width: '100%' }} />
				</Center>
				<Stack sx={{ flex: 4 }} my={8} pb={16} spacing={0}>
					<Flex align={'center'} justify={'space-between'}>
						<Text>{(quantity * product.price).toFixed(2)} zł</Text>
						<CloseButton size={'xl'} onClick={() => deleteProduct(product.id)} />
					</Flex>
					<Text fz={'xl'} fw={700} c={'white'} pr={30}>
						<Link to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
							<Text c={'white'}>{product.title}</Text>
						</Link>
					</Text>
					<Flex justify={'space-between'} align={'center'} mt={32} gap={8}>
						<Text>Quantity</Text>
						<NumberInput
							defaultValue={1}
							min={1}
							max={99}
							value={quantity}
							onChange={(x) => {
								if (!x || x < 1) return setQuantity(product.id, 1);
								if (x > 99) return setQuantity(product.id, 99);
								setQuantity(product.id, x);
							}}
						/>
					</Flex>
				</Stack>
			</Flex>
			<Divider />
		</>
	);
};

export default CartProduct;
