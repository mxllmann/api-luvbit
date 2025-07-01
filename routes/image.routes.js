import { Router } from 'express';
import { postImage, getAllImages } from '../controllers/image.controller.js';

const router = Router();

router.post('/', postImage);
router.get('/', getAllImages);

export default router;
