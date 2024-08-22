import { Router } from 'express';
import { getCurrentPrice, getKlineData, getOrderBooksData } from './controller.js';
import { marketDataSchema } from './schemas.js';
import { validate } from './validators.js';

const router = new Router();

router.use(validate(marketDataSchema));

router.get('/klines', getKlineData);
router.get('/order-book', getOrderBooksData);
router.get('/current-price', getCurrentPrice);

export default router;
