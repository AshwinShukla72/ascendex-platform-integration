import config from '../../config.js';
import { fetchDataHelper } from '../helper/index.js';

export const ascendex = () => {
	const {
		platformApisBasePath: { ascendexAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			let data = await fetchDataHelper(`${ascendexAPI}klines`, req, res);
		},
		currentPrice: async (req, res) => {
			let data = await fetchDataHelper(`${ascendexAPI}ticker/price`, req, res);
		},
		orderBook: async (req, res) => {
			let data = await fetchDataHelper(`${ascendexAPI}depth`, req, res);
		},
	};
};
