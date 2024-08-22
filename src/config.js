import { AllowedHeaders } from './constants.js';
const config = {
	corsConfig: {
		credentials: true,
		allowedHeaders: AllowedHeaders,
	},
	apiRoot: process.env.PORT || 9001
};

export default config 
