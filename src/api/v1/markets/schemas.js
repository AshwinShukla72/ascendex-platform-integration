import { z } from 'zod';
import { validIntervals, validPlatforms } from '../../../constants.js';

export const marketDataSchema = z.object({
	platform: z.enum(validPlatforms, { message: `Only platforms ${validPlatforms.join(', ')} are available` }),
	symbol: z.string().min(1, { message: 'Symbol length to small' }).max(10, { message: 'Symbol length too long' }),
	interval: z.enum(validIntervals, { message: `Interval must be one of ${validIntervals.join(', ')}` }).optional(),
});
