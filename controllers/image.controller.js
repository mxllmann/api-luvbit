import { createImage, fetchAllImages } from '../services/image.service.js';
import { encrypt, decrypt } from '../utils/cryptoUtils.js';

export const postImage = async (req, res) => {
  try {
    const { name, data } = req.body;
    const { data: encryptedData, iv: dataIv } = encrypt(data);
    const { data: encryptedName, iv: nameIv } = encrypt(name);
    const createdAtRaw = new Date().toISOString();
  const { data: encryptedCreatedAt, iv: createdAtIv } = encrypt(createdAtRaw);


    const image = await createImage({
      name: encryptedName,
      data: encryptedData,
      iv: dataIv,
      ivName: nameIv,
      createdAt: encryptedCreatedAt,
      ivCreatedAt: createdAtIv
    });


    res.status(201).json({ id: image._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getAllImages = async (req, res) => {
  try {
    const encryptedImages = await fetchAllImages();

    const decryptedImages = encryptedImages.map(image => ({
      ...image.toObject(),
      data: decrypt(image.data, image.iv),
      name: decrypt(image.name, image.ivName),
      createdAt: decrypt(image.createdAt, image.ivCreatedAt)
    }));


    res.json(decryptedImages);
  } catch (err) {
    console.error('❌ Erro ao buscar imagens:', err);
    res.status(500).json({ error: err.message });
  }
};

