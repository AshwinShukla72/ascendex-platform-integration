import { z } from 'zod';
import { validIntervals, validPlatforms } from '../../../constants.js';

export const symbolSchema = z
	.string()
	.min(1, { message: 'Symbol length too small' })
	.max(10, { message: 'Symbol length too long' })
	.regex(/^[A-Z]+(\/[A-Z]+)?$/, { message: 'Symbol must be uppercase letters only' });

export const marketDataSchema = z.object({
	platform: z.enum(validPlatforms, { message: `Only platforms ${validPlatforms.join(', ')} are available` }),
	symbol: z.string().optional(),
	symbols: z.array(symbolSchema).optional(),
	interval: z.enum(validIntervals, { message: `Interval must be one of ${validIntervals.join(', ')}` }).optional(),
});
