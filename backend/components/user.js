import { QuickDB } from "quick.db";
import { generateUUID } from "../utils/utils.js";
const db = new QuickDB();
const db_user = db.table("user");
const db_loggedUser = db.table("loggedUser");

export const getUser = async (req, res) => {
  try {
    const users = await db_user.all() || {};
    res.json({ status: true, data: users });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const getUserByLoginID = async (req, res) => {
  try { // body: { loginID }
    const loggedUser = await db_loggedUser.get(req.body.loginID);
    const user = await db_user.get(loggedUser.id);
    res.json({ status: true, data: user });
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
    await db_user.set(generateUUID(), {
      email: userInput.email,
      password: userInput.password,
      username: userInput.username,
      akses: "user"
    });
    res.json({ status: true })
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const updateUsername = async (req, res) => {
  try { // body: { email, username }
    const userInput = req.body;
    const userData = await db_user.all();
    if (userData.find(u => u.value.username === userInput.username)) {
      return res.json({ status: false });
    }
    const userDataToUpdate = userData.find(u => u.value.email === userInput.email);
    await db_user.set(`${userDataToUpdate.id}.username`, userInput.username);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}
