import Whisper from '../models/whisper.model.js';

export const createWhisper = async (data) => {
  return await Whisper.create(data);
};

export const getWhisperById = async (id) => {
  return await Whisper.findById(id);
};
