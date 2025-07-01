import Image from '../models/image.model.js';

export const createImage = async (data) => {
  return await Image.create(data);
};
