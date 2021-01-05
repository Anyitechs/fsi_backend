import express from 'express';
import planRoutes from './plan.js';
import resetRoute from './resetBVN.js';

const router = express.Router();
router.use('/plans/', planRoutes);
router.use('/bvn', resetRoute);

export default router;