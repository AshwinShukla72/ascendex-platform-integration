import config from '../../config.js';
import { fetchDataHelper } from '../helper/index.js';

export const ascendex = () => {
	const {
		platformApisBasePath: { ascendexAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			const data = await fetchDataHelper(`${ascendexAPI}klines`, req, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ success: true, data: data });
		},
		currentPrice: async (req, res) => {
			const data = await fetchDataHelper(`${ascendexAPI}ticker/price`, req, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ success: true, data: data });
		},
		orderBook: async (req, res) => {
			const data = await fetchDataHelper(`${ascendexAPI}depth`, req, res);
			if (!data || data?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ success: true, data: data });
		},
	};
};
