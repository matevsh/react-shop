import { MantineProvider as Mantine } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const MantineProvider = ({ children }: Props) => {
	return (
		<Mantine
			withGlobalStyles
			withNormalizeCSS
			theme={{ colorScheme: 'dark' }}
		>
			{children}
		</Mantine>
	);
};

export default MantineProvider;
