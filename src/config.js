import { AllowedHeaders } from './constants.js';
const config = {
	corsConfig: {
		credentials: true,
		allowedHeaders: AllowedHeaders,
	},
	apiRoot: process.env.PORT || 9001,
	platformApisBasePath: {
		ascendexAPI: 'https://ascendex.com/api/pro/v1/',
		binanceAPI: 'https://api.binance.com/api/v3/',
	},
};

export default config;
