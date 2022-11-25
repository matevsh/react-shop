import MainProvider from './providers';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';

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
