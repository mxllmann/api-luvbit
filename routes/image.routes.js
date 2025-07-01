import { Router } from 'express';
import { postImage } from '../controllers/image.controller.js';

const router = Router();

router.post('/', postImage);

export default router;
