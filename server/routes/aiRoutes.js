import express from 'express';
const router = express.Router();

import { chatAIHandler } from '../controllers/aiController.js';

router.post('/chat', chatAIHandler);

export default router;

