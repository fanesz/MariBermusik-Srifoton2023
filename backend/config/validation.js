import jwt from "jsonwebtoken";
import "dotenv/config";
const secretKey = process.env.jwttoken;

export const validateToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];

  if (!token) {
    return res.status(401).json({ status: false, message: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ status: false, message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
}

