import { Center, Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons';
import { ReactNode } from 'react';

type Props = {
	isError: boolean;
	message: string;
	children: ReactNode;
};

const Error = ({ isError, message, children }: Props) => {
	return isError ? (
		<Center pt={32}>
			<Alert icon={<IconAlertCircle size={16} />} color="red">
				{message}
			</Alert>
		</Center>
	) : (
		<>{children}</>
	);
};

export default Error;
