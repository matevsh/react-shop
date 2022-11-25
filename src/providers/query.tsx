import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';

type Props = {
	children: ReactNode;
};

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			retry: false,
		},
	},
});

export const QueryProvider = ({ children }: Props) => {
	return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
