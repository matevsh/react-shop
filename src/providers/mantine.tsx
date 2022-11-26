import { MantineProvider as Mantine } from '@mantine/core';
import { NotificationsProvider } from '@mantine/notifications';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const MantineProvider = ({ children }: Props) => {
	return (
		<Mantine withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
			<NotificationsProvider>{children}</NotificationsProvider>
		</Mantine>
	);
};

export default MantineProvider;
