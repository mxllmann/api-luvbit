import { Router } from 'express';
import { sendWhisperByEmail } from '../controllers/email.controller.js';

const router = Router();

router.post('/send', sendWhisperByEmail);

export default router;
