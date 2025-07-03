import { createWhisper, getWhisperById } from '../services/whisper.service.js';
import { encrypt, decrypt } from '../utils/cryptoUtils.js';

export const postWhisper = async (req, res) => {
  try {
    const { creator, text, ...rest } = req.body;
    const { data: encryptedText, iv } = encrypt(text);

    const whisper = await createWhisper({
      ...rest,
      creator,
      text: encryptedText,
      iv
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

    const decryptedText = decrypt(whisper.text, whisper.iv);

    const result = {
      ...whisper.toObject(),
      text: decryptedText
    };

    res.json(result);
  } catch (err) {
    console.error('❌ Erro ao buscar whisper:', err);
    res.status(400).json({ error: err.message });
  }
};

