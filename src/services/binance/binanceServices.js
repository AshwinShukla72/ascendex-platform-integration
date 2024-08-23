import config from '../../config.js';
import { fetchDataHelper } from '../helper/index.js';

export const binance = () => {
	const {
		platformApisBasePath: { binanceAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			const { interval, symbol } = req.query;
			const data = await fetchDataHelper(`${binanceAPI}klines`, { interval, symbol }, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ ...data });
		},
		currentPrice: async (req, res) => {
			const { symbol } = req.query;
			const query = symbol.indexOf(',') !== -1 ? { symbols: symbol } : { symbol };
			const data = await fetchDataHelper(`${binanceAPI}ticker/price`, query, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ ...data });
		},
		orderBook: async (req, res) => {
			const { symbol } = req.query;
			const data = await fetchDataHelper(`${binanceAPI}depth`, { symbol }, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ ...data });
		},
	};
};
