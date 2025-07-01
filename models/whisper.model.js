import mongoose from "mongoose";

const WhisperSchema = new mongoose.Schema({
  creator: String,
  text: { type: String, required: true },
  photo: String,
  color: String,
  createdAt: { type: Date, default: Date.now }
});

const Whisper = mongoose.model('Whisper', WhisperSchema);
export default Whisper;