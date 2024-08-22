import { ascendex } from '../../../services/ascendex/ascendexServices.js';
import { binance } from '../../../services/binance/binanceServices.js';

const platformServices = {
	binance,
	ascendex,
};
export const getKlineData = async (req, res) => {
	const functionName = 'getKlineData';
	try {
		const service = platformServices[req.query.platform];
		return await service.klineData(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};

export const getCurrentPrice = async (req, res) => {
	const functionName = 'getCurrentPrice';
	try {
		const service = platformServices[req.query.platform];
		return await service.currentPrice(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};

export const getOrderBooksData = async (req, res) => {
	const functionName = 'getOrderBooksData';
	try {
		const service = platformServices[req.query.platform];
		return await service.orderBook(req, res);
	} catch (error) {
		console.log(`Error in ${functionName} ->`, console.log(error));
		return res.status(500).json({ error: true, message: 'Something went wrong' });
	}
};
