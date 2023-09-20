import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_loggedUser = db.table("loggedUser");
import { generateRandomString } from "../utils/utils.js";

export const setLogin = async (req, res) => {
  try {
    const userInput = req.body;
    const loginID = generateRandomString(80);
    await db_loggedUser.set(loginID, userInput);
    res.send({ status: true, loginID: loginID });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const setLogout = async (req, res) => {
  try {
    const loginID = req.body.loginID;
    await db_loggedUser.delete(loginID);
    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const isLogin = async (req, res) => {
  try {
    const userInput = req.body;
    const userData = await db_loggedUser.get(userInput.loginID);
    res.send({ status: userData ? true : false });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}
