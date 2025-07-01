import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import whisperRoutes from './routes/whisper.routes.js'
import imageRoutes from './routes/image.routes.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use('/whisper', whisperRoutes);
app.use('/image', imageRoutes);

// Conexão
connectDB().then(() => {
  app.listen(3001, () => console.log('Server on http://localhost:3001'));
});