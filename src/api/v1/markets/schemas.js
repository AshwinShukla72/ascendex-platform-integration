import { z } from 'zod';
import { validPlatforms } from '../../../constants.js';

export const marketDataSchema = z.object({
	platform: z.enum(validPlatforms, { message: `Only platforms ${validPlatforms.join(', ')} are available` }),
	symbol: z
		.string()
		.min(1, { message: 'Symbol length to small' })
		.max(10, { message: 'Symbol length too long' })
		.regex(/^[A-Z]+$/, { message: 'Symbol must be uppercase letters only' }),
});
