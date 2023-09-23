import jwt from "jsonwebtoken";
import "dotenv/config";
const secretKey = process.env.jwttoken;

export const validateToken = (req, res, next) => {
  const token = req.headers['authorization'].split(' ')[1];
  console.log(token);

  console.log(secretKey);

  if (!token) {
    return res.status(401).json({ message: 'Token not provided' });
  }

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }

    req.user = decoded;
    next();
  });
}

