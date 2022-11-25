import { CartCtx } from '../providers/cart';
import type { ProductT } from '../schemas/product';
import { useContext } from 'react';

export const useCart = () => {
	const cart = useContext(CartCtx);

	const addItem = (product: ProductT | undefined | null, quantity = 1) => {
		if (!product) return;
		console.log(typeof cart.products, Array.isArray(cart.products));
		console.log(cart.products);

		const currentItem = cart.products.findIndex((item) => item.product.id === product.id);

		if (currentItem !== -1) {
			const newCart = [...cart.products];
			newCart[currentItem].quantity += quantity;

			return cart.setCart(newCart);
		}

		cart.setCart([
			...cart.products,
			{
				quantity,
				product,
			},
		]);

		console.log(cart.products);
	};

	return {
		addItem,
		products: cart.products,
	};
};
