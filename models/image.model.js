// models/image.model.js
import mongoose from 'mongoose';

const ImageSchema = new mongoose.Schema({
  name: { type: String, required: true },       // nome amigável (ex: "Flor 1", "Estrela Pixel")
  data: { type: String, required: true },        // base64 (ex: data:image/png;base64,...)
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Image', ImageSchema);
