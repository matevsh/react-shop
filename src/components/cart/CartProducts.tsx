import { CartProductT } from '../../providers/cart';
import { Stack, Center } from '@mantine/core';
import CartProduct from './CartProduct';

type Props = {
	items: CartProductT[];
};

const CartProducts = ({ items }: Props) => {
	return (
		<Stack>
			{!items.length && (
				<Center>
					<h1>Twój koszyk jest pusty</h1>
				</Center>
			)}
			{items.map((item) => (
				<CartProduct item={item} key={item.product.id} />
			))}
		</Stack>
	);
};

export default CartProducts;
