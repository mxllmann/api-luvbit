// import express from 'express';
// import { searchTrack } from '../services/spotify.service.js';

// const router = express.Router();

// router.get('/search', async (req, res) => {
//   try {
//     const { q } = req.query;

//     if (!q) return res.status(400).json({ error: 'Query string (q) is required' });

//     const tracks = await searchTrack(q);

//     const formattedTracks = tracks.map((track) => ({
//       trackName: track.name,
//       artist: track.artists.map((a) => a.name).join(', '),
//       previewUrl: track.preview_url,
//       spotifyId: track.id,
//       albumCover: track.album.images[0]?.url || null
//     }));

//     res.json(formattedTracks);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Failed to search tracks on Spotify' });
//   }
// });

// export default router;
