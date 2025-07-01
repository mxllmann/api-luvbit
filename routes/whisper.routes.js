import { Router } from 'express';
import { postWhisper, getWhisper } from '../controllers/whisper.controller.js';

const router = Router();

router.post('/', postWhisper);
router.get('/:id', getWhisper);

export default router;
