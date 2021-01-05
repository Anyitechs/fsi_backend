import express from 'express';
import { resetBVN } from '../controllers/resetBVNController.js';

const router = express.Router();
router.post('/reset', resetBVN);

export default router;