import { createWhisper, getWhisperById } from '../services/whisper.service.js';

export const postWhisper = async (req, res) => {
  try {
    const whisper = await createWhisper(req.body);
    res.status(201).json({ id: whisper._id });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getWhisper = async (req, res) => {
  try {
    const whisper = await getWhisperById(req.params.id);
    if (!whisper) return res.status(404).json({ error: 'Whisper not found' });
    res.json(whisper);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
