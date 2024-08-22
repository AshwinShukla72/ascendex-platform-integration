import bodyParser from 'body-parser';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import swaggerUI from 'swagger-ui-express';
// import config from '../../config.js';
import swaggerDoc from '../swagger/swagger-output.json' assert { type: 'json' };
import 'dotenv/config';

export default routes => {
	const app = express();

	app.use(express.json());
	app.use(compression());
	
	app.use(cookieParser());
	app.use(express.urlencoded({ extended: true }));
	
  app.use(helmet());
  app.use(cors())
	// app.use(cors(config.corsConfig));
	app.use(morgan('dev'));
  app.get('/health-check', (req, res) => {
    return res.status(200).json({ success: true, message: 'Server working fine'})
  })
	app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDoc));
	app.use((err, req, res, next) => {
		res.status(500).json({ error: true, message: err.message });
	});
	return app;
};
