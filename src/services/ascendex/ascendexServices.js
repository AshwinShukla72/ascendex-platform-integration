import config from '../../config.js';
import { fetchDataHelper } from '../helper/index.js';

export const ascendex = () => {
	const {
		platformApisBasePath: { ascendexAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			const { interval, symbol } = req.query;
			const response = await fetchDataHelper(`${ascendexAPI}barhist`, { interval, symbol }, res);
			if (!response || response?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			const requiredData = response?.data?.data;
			return res.status(200).json({ success: true, data: requiredData });
		},
		currentPrice: async (req, res) => {
			const { symbol } = req.query
			const response= await fetchDataHelper(`${ascendexAPI}trades`, { symbol }, res);
			if (!response || response?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ success: true, data: response?.data?.data });
		},
		orderBook: async (req, res) => {
			const { symbol } = req.query
			const response= await fetchDataHelper(`${ascendexAPI}trades`, { symbol }, res);
			if (!response || response?.length === 0) {
				return res.status(404).json({ error: true, message: 'Data not found' });
			}
			return res.status(200).json({ success: true, data: response?.data?.data });
		},
	};
};
