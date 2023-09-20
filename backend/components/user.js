import { QuickDB } from "quick.db";
import { generateUUID } from "../utils/utils.js";
const db = new QuickDB();
const db_user = db.table("user");

export const getUser = async (req, res) => {
  try {
    const users = await db_user.get();
    if (users === null) await db_user.set([]);
    res.json(users);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
}

export const createUser = async (req, res) => {
  try {
    const userInput = req.body;
    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    if (userData) {
      res.json({ status: false, message: "Email sudah dipakai!" });
      return;
    }
    await db_user.set(generateUUID(), userInput);
    res.json({ status: true, message: "Akun berhasil dibuat!" })
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
}

export const updateUsername = async (req, res) => {
  try {
    const userInput = req.body;
    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    console.log(userData);
    await db_user.set(`${userData.id}.username`, userInput.username);
    res.json({ status: true, message: "Akun berhasil diupdate!" });
  } catch (error) {
    console.log(error);
    res.json({ status: false, message: error });
  }
}
