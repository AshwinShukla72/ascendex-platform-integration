import { Router } from 'express';
import markets from './v1/markets/index.js';
const router = new Router();

router.use('/v1/markets', markets);

export default router;
