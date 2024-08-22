import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import config from '../../config.js';
import 'dotenv/config';

export default routes => {
	const app = express();

	app.use(express.json());
	app.use(compression());
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));
	app.use(helmet());
	app.use(cors(config.corsConfig));
	app.use(morgan('dev'));

	app.use((err, req, res, next) => {
		res.status(500).json({ error: true, message: err.message });
	});

	return app;
};
