import MantineProvider from './mantine';
import { ReactNode } from 'react';
import { QueryProvider } from './query';
import { CartProvider } from './cart';

type Props = {
	children: ReactNode;
};

const MainProvider = ({ children }: Props) => {
	return (
		<MantineProvider>
			<CartProvider>
				<QueryProvider>{children}</QueryProvider>
			</CartProvider>
		</MantineProvider>
	);
};

export default MainProvider;
