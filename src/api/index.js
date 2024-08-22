import { Router } from 'express';
import marketRoutes from './v1/markets/index.js';
const router = new Router();

router.use('/v1/markets', marketRoutes);

export default router;
