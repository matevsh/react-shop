import MainProvider from './providers';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: 'product/:id',
				element: <ProductPage />,
			},
			{
				path: 'cart',
				element: <CartPage />,
			},
		],
	},
]);

const App = () => {
	return (
		<MainProvider>
			<RouterProvider router={router} />
		</MainProvider>
	);
};

export default App;
