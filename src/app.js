import 'dotenv/config';
import http from "node:http"
import express from "./services/express/index.js";
import api from './api/index.js'
import config from './config.js'
const app = express(api)
const server = http.createServer(app);

setImmediate(() => {
  server.listen(config.apiRoot, () => {
    console.log(`Express server listening on http:localhost:${config.apiRoot}`);
  });
});
