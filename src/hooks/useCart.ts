import { CartCtx } from '../providers/cart';
import type { ProductT } from '../schemas/product';
import type { CartProductT } from '../providers/cart';
import { useContext } from 'react';

const currentItemIndex = (products: CartProductT[], id: number) =>
	products.findIndex(({ product }) => product.id === id);

const updateQuantity = (cartProducts: CartProductT[], productId: number, newQuantity: number) => {
	if (newQuantity <= 0) {
		return cartProducts.filter((item) => item.product.id !== productId);
	}

	return cartProducts.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item));
};

export const useCart = () => {
	const { setCart, products } = useContext(CartCtx);

	const setQuantity = (productId: number, newQuantity: number) => {
		setCart((items) => updateQuantity(items, productId, newQuantity));
	};

	const addItem = (product: ProductT | undefined | null, quantity = 1) => {
		if (!product) return;

		const currentIndex = currentItemIndex(products, product.id);

		if (currentIndex !== -1) {
			return setQuantity(products[currentIndex].product.id, products[currentIndex].quantity + quantity);
		}

		setCart([
			...products,
			{
				quantity,
				product,
			},
		]);
	};

	const clearCart = () => setCart([]);

	const deleteProduct = (productId: number) => {
		setQuantity(productId, 0);
	};

	const totalPrice = () => {
		return products.reduce((prev, curr) => prev + curr.quantity * curr.product.price, 0);
	};

	return {
		addItem,
		setQuantity,
		products,
		clearCart,
		deleteProduct,
		totalPrice,
	};
};
