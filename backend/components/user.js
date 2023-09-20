import Database from "../config/database.js";
const db_user = new Database("user");

export const getUser = async (req, res) => {
  try {
    const users = await db_user.get();
    res.json(users);
  } catch (error) {
    res.json(error);
  }
}

export const createUser = async (req, res) => {
  try {
    const user = req.body;
    const newUser = await db_user.set(user);
    res.json(newUser);
  } catch (error) {
    res.json(error);
  }
}
