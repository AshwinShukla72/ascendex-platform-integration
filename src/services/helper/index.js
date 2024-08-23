import axios from 'axios';
// Axios fetchDataHelper
export const fetchDataHelper = async (url, query, res) => {
	const functionName = 'fetchDataHelper';
	try {
		console.log('Url -->', url);
		console.log('Query -->', query);
		const apiConfig = {
			url, //: `${url}?${new URLSearchParams(query).toString()}`,
			method: 'GET',
			params: { ...query },
		};
		// console.log('Request Config -->', apiConfig);
		const response = await axios(apiConfig);
		if (!response.data || response.data.length === 0) {
			return { error: true, message: 'Data not found' };
		}
		return { success: true, data: response.data };
	} catch (error) {
		console.error(`Error in ${functionName} -->`, error.response?.data || error.message);
		return error.response?.data || { error: true, message: error.message || 'Something went wrong' };
	}
};
// export const standardResponseFormatter = (success, data = null, message = '') => ({ success, data, message });
