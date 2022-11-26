import { useCart } from '../hooks/useCart';
import { Divider, Grid, Title } from '@mantine/core';
import CartProducts from '../components/cart/CartProducts';
import CartSummary from '../components/cart/CartSummary';

const CartPage = () => {
	const cart = useCart();

	return (
		<Grid pt={32} gutter={'xl'}>
			<Grid.Col span={12} sm={8} order={2} orderSm={1}>
				<Title mx={16} mb={16}>
					Your cart
				</Title>
				<Divider size={'lg'} w={'60%'} mb={8} />
				<CartProducts items={cart.products} />
			</Grid.Col>
			<Grid.Col span={12} sm={4} order={1} orderSm={2}>
				<CartSummary />
			</Grid.Col>
		</Grid>
	);
};

export default CartPage;
