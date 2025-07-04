import { Router } from 'express';
import { postImage, getAllImages } from '../controllers/image.controller.js';
import { verifyToken } from '../middlewares/verifyToken.js' // <-- novo

const router = Router();

router.post('/', verifyToken, postImage); // <-- protegido
router.get('/', getAllImages);            // <-- público

export default router;
