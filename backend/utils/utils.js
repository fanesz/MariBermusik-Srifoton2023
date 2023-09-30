import { v4 as uuidv4 } from 'uuid';

export const generateUUID = () => {
  return uuidv4();
}

export const generateRandomString = (len) => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
  let code = "";
  for (let i = 0; i < len; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
