import { createImage } from '../services/image.service.js';

export const postImage = async (req, res) => {
  try {
    const image = await createImage(req.body);
    res.status(201).json({ id: image._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

