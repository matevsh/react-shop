import { Center, Loader } from '@mantine/core';
import { ReactNode } from 'react';

type Props = {
	isLoading: boolean;
	children: ReactNode;
};

const Loading = ({ isLoading, children }: Props) => {
	return isLoading ? (
		<Center pt={32}>
			<Loader color="indigo" size="xl" />
		</Center>
	) : (
		<>{children}</>
	);
};

export default Loading;
