// IMPORTAÇÃO JÁ PRESENTE
import { encrypt, decrypt } from '../utils/cryptoUtils.js';
import {createWhisper, getWhisperById} from '../services/whisper.service.js'

export const postWhisper = async (req, res) => {
  try {
    const { creator, text, photo, ...rest } = req.body;

    const { data: encryptedText, iv: textIv } = encrypt(text);
    const { data: encryptedCreator, iv: creatorIv } = encrypt(creator || '');
    const { data: encryptedPhoto, iv: photoIv } = encrypt(photo || '');
    const { data: encryptedCreatedAt, iv: createdAtIv } = encrypt(new Date().toISOString());


      const whisper = await createWhisper({
      ...rest,
      creator: encryptedCreator,
      text: encryptedText,
      photo: encryptedPhoto,
      ivText: textIv,
      ivCreator: creatorIv,
      ivPhoto: photoIv,
      createdAt: encryptedCreatedAt,
      ivCreatedAt: createdAtIv
    });


    res.status(201).json({ id: whisper._id });
  } catch (err) {
    console.error('❌ Erro ao criar whisper:', err);
    res.status(400).json({ error: err.message });
  }
};

export const getWhisper = async (req, res) => {
  try {
    const whisper = await getWhisperById(req.params.id);
    if (!whisper) return res.status(404).json({ error: 'Whisper not found' });

    const decryptedText = decrypt(whisper.text, whisper.ivText);
    const decryptedCreator = decrypt(whisper.creator, whisper.ivCreator);
    const decryptedPhoto = decrypt(whisper.photo, whisper.ivPhoto);
    const decryptedCreatedAt = decrypt(whisper.createdAt, whisper.ivCreatedAt);


    res.json({
      ...whisper.toObject(),
      text: decryptedText,
      creator: decryptedCreator,
      photo: decryptedPhoto,
      createdAt: decryptedCreatedAt
    });

  } catch (err) {
    console.error('❌ Erro ao buscar whisper:', err);
    res.status(400).json({ error: err.message });
  }
};
