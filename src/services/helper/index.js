// Axios fetchDataHelper
export const fetchDataHelper = async (url, req, res) => {
	const functionName = 'fetchDataHelper';
	try {
		const apiConfig = {
			url: url,
			method: 'GET',
			params: req.query,
		};
		console.log('Request Config -->', apiConfig);
		const data = await axios(apiConfig);
		if (!data || data.length === 0) {
			return res.status(404).json({ error: true, message: 'Data not found' });
		}
		return res.status(200).json({ success: true, data });
	} catch (error) {
		console.error(`Error in ${functionName} -->`, error);
		return res.status(500).json({ error: true, message: error.message || 'Something went wrong' });
	}
};

// export const standardResponseFormatter = (success, data = null, message = '') => ({ success, data, message });
