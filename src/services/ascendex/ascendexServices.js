import axios from 'axios';
import config from '../../config.js';

export const ascendex = () => {
	const {
		platformApisBasePath: { ascendexAPI },
	} = config;
	return {
		klineData: async (req, res) => {
			try {
				const apiConfig = {
					url: `${ascendexAPI}barhist`,
					method: 'GET',
					data: { query: req.query },
				};
				const data = await axios(apiConfig);
				if (!data || data?.length === 0) {
					return res.status(404).json({ error: true, message: 'Data not found' });
				}
				return res.status(200).json({ success: true, data });
			} catch (error) {
				console.log(`Error in ${functionName} -->`, console.log(error));
				return res.status(500).json({ error: true, message: error.message || 'Somthing Went Wrong' });
			}
		},
		currentPrice: async (req, res) => {
			try {
				const apiConfig = {
					url: `${ascendexAPI}trades`,
					method: 'GET',
					data: { query: req.query },
				};
				const data = await axios(apiConfig);
				if (!data || data?.length === 0) {
					return res.status(404).json({ error: true, message: 'Data not found' });
				}
				return res.status(200).json({ success: true, data });
			} catch (error) {
				console.log(`Error in ${functionName} -->`, console.log(error));
				return res.status(500).json({ error: true, message: error.message || 'Somthing Went Wrong' });
			}
		},
		orderBook: async (req, res) => {
			try {
				const apiConfig = {
					url: `${ascendexAPI}depth`,
					method: 'GET',
					data: { query: req.query },
				};
				const data = await axios(apiConfig);
				if (!data || data?.length === 0) {
					return res.status(404).json({ error: true, message: 'Data not found' });
				}
				return res.status(200).json({ success: true, data });
			} catch (error) {
				console.log(`Error in ${functionName} -->`, console.log(error));
				return res.status(500).json({ error: true, message: error.message || 'Somthing Went Wrong' });
			}
		},
	};
};
