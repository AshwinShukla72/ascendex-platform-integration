import axios from 'axios';
import config from '../../config.js';

export const ascendex = () => {
	const {
		platformApisBasePath: { ascendexAPI },
	} = config;
	return {
		klineData: (req, res) => fetchData(`${ascendexAPI}klines`, req, res),
		currentPrice: (req, res) => fetchData(`${ascendexAPI}ticker/price`, req, res),
		orderBook: (req, res) => fetchData(`${ascendexAPI}depth`, req, res),
	};
};
