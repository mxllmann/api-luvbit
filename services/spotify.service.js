// import axios from 'axios';
// import dotenv from 'dotenv';
// dotenv.config();

// let cachedToken = null;
// let tokenExpiresAt = null;

// export async function getSpotifyToken() {
//   if (cachedToken && Date.now() < tokenExpiresAt) return cachedToken;

//   const res = await axios.post(
//     'https://accounts.spotify.com/api/token',
//     new URLSearchParams({ grant_type: 'client_credentials' }),
//     {
//       headers: {
//         Authorization:
//           'Basic ' +
//           Buffer.from(
//             `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
//           ).toString('base64'),
//         'Content-Type': 'application/x-www-form-urlencoded'
//       }
//     }
//   );

//   cachedToken = res.data.access_token;
//   tokenExpiresAt = Date.now() + res.data.expires_in * 1000;
//   return cachedToken;
// }

// export async function searchTrack(query) {
//   const token = await getSpotifyToken();
//   const res = await axios.get(`https://api.spotify.com/v1/search`, {
//     headers: { Authorization: `Bearer ${token}` },
//     params: {
//       q: query,
//       type: 'track',
//       limit: 5
//     }
//   });

//   return res.data.tracks.items;
// }
