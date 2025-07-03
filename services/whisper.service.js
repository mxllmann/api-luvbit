import Whisper from '../models/whisper.model.js';

export const createWhisper = async (data) => {
  if (data.photo) {
    // remove o prefixo "data:image/...;base64,"
    const base64 = data.photo.split(',')[1] || '';
    const bufferSize = Buffer.from(base64, 'base64').length;
    if (bufferSize > 15 * 1024 * 1024) {
      throw new Error('Imagem muito grande (máx. 15 MB)');
    }
  }
  return await Whisper.create(data);
};

export const getWhisperById = async (id) => {
  return await Whisper.findById(id);
};
