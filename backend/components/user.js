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

export const getUserByParam = async (req, res) => {
  try { // params: { loginID / username / UUID }
    const params = req.query;
    if (params.loginID) {
      const loggedUser = await db_loggedUser.get(params.loginID);
      const user = await db_user.get(loggedUser.id);
      return res.json({ status: true, data: { UUID: loggedUser.id, user: user } });
    } else if (params.username) {
      const user = (await db_user.all()).find(u => u.value.username === params.username);
      if (user?.id) {
        return res.json({ status: true, data: user });
      }
    } else if (params.UUID) {
      const user = await db_user.get(params.UUID);
      return res.json({ status: true, data: user });
    }
    res.json({ status: false });
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
      img: "",
      akses: "user",
      createdAt: new Date(),
    });
    res.json({ status: true })
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const updateUser = async (req, res) => {
  try { // body: { email, username, terimaEmail, img }
    const userInput = req.body;
    const userData = await db_user.all();
    const userDataToUpdate = userData.find(u => u.value.email === userInput.email);

    if (userData.find(u => u.value.username === userInput.username && u.value.email !== userDataToUpdate.value.email)) {
      return res.json({ status: false, message: 'Username already Exist!' });
    };
    await db_user.set(`${userDataToUpdate.id}.username`, userInput.username);
    await db_user.set(`${userDataToUpdate.id}.terimaEmail`, userInput.terimaEmail);
    await db_user.set(`${userDataToUpdate.id}.img`, userInput.img);

    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}
