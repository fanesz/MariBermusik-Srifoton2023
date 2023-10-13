import { v4 as uuidv4 } from 'uuid';
import fs from "fs";
import path from 'path';

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

export const saveImage = (base64Data, outputPath) => {
  try {
    const base64Image = base64Data.split(';base64,').pop();
    const imageBuffer = Buffer.from(base64Image, 'base64');

    const directoryPath = './image/user';

    if (!fs.existsSync(directoryPath)) {
      fs.mkdirSync(directoryPath, { recursive: true });
    }
    const filePath = path.join(directoryPath, outputPath + '.webp');
    fs.writeFile(filePath, imageBuffer, (err) => {
      if (err) {
        console.error(err);
        return false;
      } else {
        return true;
      }
    });
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};

export const getImage = (UUID) => {
  try {
    const image = fs.readFileSync('./image/user/' + UUID + '.webp');
    if (!image) return false;
    const base64Image = new Buffer.from(image).toString('base64');
    const imageData = `data:image/jpeg;base64,${base64Image}`;
    return imageData;
  } catch (err) {
  }
};