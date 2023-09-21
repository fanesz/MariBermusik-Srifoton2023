import { QuickDB } from "quick.db";
import { generateUUID } from "../utils/utils.js";
const db = new QuickDB();
const db_user = db.table("user");

export const getUser = async (req, res) => {
  try {
    const users = await db_user.get() || {};
    res.json({ status: true, data: users });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const createUser = async (req, res) => {
  try { // body: { email, password, username }
    const userInput = req.body;
    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    if (userData) {
      res.json({ status: false });
      return;
    }
    await db_user.set(generateUUID(), userInput);
    res.json({ status: true })
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const updateUsername = async (req, res) => {
  try { // body: { email, username }
    const userInput = req.body;
    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    await db_user.set(`${userData.id}.username`, userInput.username);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}
