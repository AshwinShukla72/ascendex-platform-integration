// Load Env variables
import 'dotenv/config';
import http from 'node:http';
import api from './api/index.js';
import config from './config.js';
import express from './services/express/index.js';
// Create custom express server
const app = express(api);
// Create server from standard library
const server = http.createServer(app);

// Start server
setImmediate(() => {
	server.listen(config.apiRoot, () => {
		console.log(`Express server listening on http:localhost:${config.apiRoot}`);
	});
});
