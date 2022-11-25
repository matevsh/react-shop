import { Outlet } from 'react-router-dom';
import MainHeader from '../components/header/Header';
import { Container } from '@mantine/core';

function Layout() {
	return (
		<>
			<Container>
				<MainHeader />
				<Outlet />
			</Container>
		</>
	);
}

export default Layout;
