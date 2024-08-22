import config from '../../config.js';
import { fetchDataHelper } from '../helper/index.js';

export const binance = () => {
	const {
		platformApisBasePath: { binanceAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			let data = await fetchDataHelper(`${binanceAPI}klines`, req, res);
      if (!data || data?.length === 0) {
        return res.status(404).json({ error: true, message: "Data not found"})
      }
		},
		currentPrice: async (req, res) => {
			let data = await fetchDataHelper(`${binanceAPI}ticker/price`, req, res);
      if (!data || data?.length === 0) {
        return res.status(404).json({ error: true, message: "Data not found"})
      }
		},
		orderBook: async (req, res) => {
			let data = await fetchDataHelper(`${binanceAPI}depth`, req, res);
      if (!data || data?.length === 0) {
        return res.status(404).json({ error: true, message: "Data not found"})
      }
		},
	};
};
