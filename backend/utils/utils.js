import { v4 as uuidv4 } from 'uuid';


export const generateUUID = () => {
  return uuidv4();
}

export const generateLoginID = () => {
  const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let code = "";
  for (let i = 0; i < 80; i++) {
    code += chars[Math.floor(Math.random() * chars.length)];
  }
  return code;
}
