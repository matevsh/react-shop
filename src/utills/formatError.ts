import { ZodError } from 'zod';
import { fromZodError } from 'zod-validation-error';

export const formatError = (error: unknown) => {
	if (error instanceof ZodError) return fromZodError(error).message;
	if (error instanceof Error) return error.message;
	return '';
};
