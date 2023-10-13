import "dotenv/config";
const secretKey = process.env.API_KEY;

export const validateToken = (req, res, next) => {
  const apiKey = req.headers['api-key'];

  if (!apiKey || !secretKey) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  next();
}  
