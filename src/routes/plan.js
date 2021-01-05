import express from 'express';
import { getPlans } from '../controllers/planController.js';

const router = express.Router();
router.get('/', getPlans);

export default router;