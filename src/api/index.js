import { Router } from 'express';
import ascendex from './ascendex/index.js'
const router = new Router();

router.use('/ascendex', ascendex)

export default router