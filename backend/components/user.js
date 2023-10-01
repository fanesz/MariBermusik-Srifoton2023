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
  try { // params: { loginID }
    const loggedUser = await db_loggedUser.get(req.query.loginID);
    const user = await db_user.get(loggedUser.id);
    res.json({ status: true, data: { UUID: loggedUser.id, user: user } });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}


export const getUUIDByUsername = async (req, res) => {
  try { // params: { username }
    const user = (await db_user.all()).find(u => u.value.username === req.query.username);
    res.json({ status: true, data: user.id });
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
      terimaEmail: userInput.terimaEmail,
      akses: "user"
    });
    res.json({ status: true })
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const updateUser = async (req, res) => {
  try { // body: { email, username, terimaEmail }
    const userInput = req.body;
    const userData = await db_user.all();
    const userDataToUpdate = userData.find(u => u.value.email === userInput.email);

    if (userData.find(u => u.value.username === userInput.username && u.value.email !== userDataToUpdate.value.email)) {
      return res.json({ status: false, message: 'Username already Exist!' });
    };
    await db_user.set(`${userDataToUpdate.id}.username`, userInput.username);
    await db_user.set(`${userDataToUpdate.id}.terimaEmail`, userInput.terimaEmail);

    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}
