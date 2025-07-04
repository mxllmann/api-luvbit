import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import whisperRoutes from './routes/whisper.routes.js'
import imageRoutes from './routes/image.routes.js'
import emailRoutes from './routes/email.routes.js'
import bodyParser from 'body-parser';
// import spotifyRoutes from './routes/spotify.routes.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: '15mb' }));
app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));

app.use('/whisper', whisperRoutes);
app.use('/image', imageRoutes);
app.use('/email', emailRoutes);
// app.use('/spotify', spotifyRoutes);

app.use((err, req, res, next) => {
  if (err.type === 'entity.too.large') {
    return res.status(413).json({
      error: 'Payload muito grande. Máximo permitido: 15 MB.',
    });
  }
  next(err);
});

const PORT = process.env.PORT;

// Conexão
connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server on http://localhost:${PORT}`));
});