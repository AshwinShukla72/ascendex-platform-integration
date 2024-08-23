### Crypto Trade Platforms intergration APIs

Design a set of backend APIs to retrieve the orderbook, current price, and candles
from various cryptocurrency exchanges such as Binance, MEXC, Gate.io, KuCoin, and
AscendEX. The APIs should be designed to handle concurrent requests efficiently and return data in a standardized format.

#### Requirements:
1. API Endpoints:
	1. **Orderbook Endpoint** : Design an API endpoint that allows users to fetch the order book (bids and asks) for a given trading pair on any of the mentioned exchanges. Users should be able to specify the trading pair and exchange as query parameters.
	2. **Current Price Endpoint**: Design an API endpoint to fetch the current price of a specified trading pair from any of the exchanges. Users should be able to specify the trading pair and exchange as query parameters.
	3. **Candles Endpoint**: Design an API endpoint that enables users to retrieve candlestick data (OHLCV) for a given trading pair and timeframe on any of the mentioned exchanges. Users should be able to specify the trading pair, exchange, and timeframe (e.g., 1-minute, 5-minute, 1-hour) as query parameters.

2. Exchange Integration:
Integrate the backend with APIs provided by Binance, MEXC, Gate.io, KuCoin, and AscendEX
to fetch the required data. Use the official exchange APIs or reputable third-party libraries if
available. Ensure that the APIs handle errors gracefully and have proper error responses.

3. Data Standardization:
Standardize the data returned by the APIs to maintain consistency across different
exchanges. For example, ensure that the orderbook data, current price, and candlestick data all
have a standard structure, making it easier for users to work with the data.

4. Documentation:
Create comprehensive API documentation that clearly explains how to use each endpoint, the
required parameters, and the expected response format. Include examples to help developers
understand the API's functionality
