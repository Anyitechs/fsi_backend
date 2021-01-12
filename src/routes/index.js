import express from 'express';
import planRoutes from './plan';
import bvnRoutes from './bvn';

const router = express.Router();
router.use('/plans/', planRoutes);
router.use('/bvn', bvnRoutes);

export default router;