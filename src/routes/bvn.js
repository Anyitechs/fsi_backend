import express from 'express';
import { resetBVN, verifyBVN } from '../controllers/bvnController';

const router = express.Router();
router.get('/reset', resetBVN);
router.post('/verify', verifyBVN);

export default router;