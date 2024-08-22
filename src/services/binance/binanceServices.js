import axios from 'axios';
import config from '../../config.js';

export const binance = () => {
	const {
		platformApisBasePath: { binanceAPI },
	} = config;
	return {
		klineData: (req, res) => fetchData(`${binanceAPI}klines`, req, res),
		currentPrice: (req, res) => fetchData(`${binanceAPI}ticker/price`, req, res),
		orderBook: (req, res) => fetchData(`${binanceAPI}depth`, req, res),
	};
};
