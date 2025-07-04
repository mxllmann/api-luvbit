// middlewares/verifyToken.js
export const verifyToken = (req, res, next) => {
  const token = req.header('luvbit-api-token');

  if (!token) {
    return res.status(401).json({ error: 'Token ausente' });
  }

  if (token !== process.env.IMAGE_UPLOAD_TOKEN) {
    return res.status(403).json({ error: 'Token inválido' });
  }

  next();
};
