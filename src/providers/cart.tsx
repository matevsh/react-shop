import { createContext, ReactNode } from 'react';
import { ProductT } from '../schemas/product';
import { useLocalStorage } from '@mantine/hooks';

export type CartProductT = {
	quantity: number;
	product: ProductT;
};

type CartCtxT = {
	products: CartProductT[];
	setCart: (val: CartProductT[] | ((prevState: CartProductT[]) => CartProductT[])) => void;
};

export const CartCtx = createContext<CartCtxT>({ products: [], setCart: () => {} });

type Props = {
	children: ReactNode;
};

export const CartProvider = ({ children }: Props) => {
	const [cart, setCart] = useLocalStorage<CartProductT[]>({ key: 'cart', defaultValue: [] });

	return (
		<CartCtx.Provider
			value={{
				products: cart,
				setCart,
			}}
		>
			{children}
		</CartCtx.Provider>
	);
};

export default CartProvider;
