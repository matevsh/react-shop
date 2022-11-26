import { useState } from 'react';

export const useQuantity = ({ min = 0, max = 99, initial = 1 }) => {
	const [quantity, setQuantity] = useState(initial);

	return {
		changeQuantity: (value: number | undefined) => {
			if (!value || value < min) return setQuantity(1);
			if (value > max) return setQuantity(99);
			setQuantity(value);
		},
		quantity,
	};
};
