import mongoose from "mongoose";

const WhisperSchema = new mongoose.Schema({
  creator: { type: String }, 
  ivCreator: { type: String }, 
  text: { type: String, required: true }, 
  ivText: { type: String }, 
  photo:  {type: String, required: true },
  ivPhoto: { type: String, required: true },
  createdAt: { type: String },       // agora criptografado
  ivCreatedAt: { type: String }

});

const Whisper = mongoose.model('Whisper', WhisperSchema);
export default Whisper;