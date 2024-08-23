import { ascendex } from '../../../services/ascendex/ascendexServices.js';
import { binance } from '../../../services/binance/binanceServices.js';

const platformServices = {
	binance,
	ascendex,
};
export const getKlineData = async (req, res) => {
	const functionName = 'getKlineData';
	try {
		// #swagger.tags = ['markets']
		// #swagger.summary = 'Get kline data from various platforms'
		// #swagger.description = 'API to fetch kline data from various platforms'
		const service = platformServices[req.query.platform];
		const { symbol, interval } = req.query;
		return await service().klineData(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};

export const getCurrentPrice = async (req, res) => {
	const functionName = 'getCurrentPrice';
	try {
		// #swagger.tags = ['markets']
		// #swagger.summary = 'Get current price of trade pairs for various platforms'
		// #swagger.description = 'API to fetch current price of trade pairs for various platforms'
		const service = platformServices[req.query.platform];
		const { symbol, interval } = req.query;
		return await service().currentPrice(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};

export const getOrderBooksData = async (req, res) => {
	const functionName = 'getOrderBooksData';
	try {
		// #swagger.tags = ['markets']
		// #swagger.summary = 'Get order books data from various platforms'
		// #swagger.description = 'API to fetch order books data from various platforms'
		const service = platformServices[req.query.platform];
		const { symbol, interval } = req.query;
		return await service().orderBook(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};
