import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_loggedUser = db.table("loggedUser");
const db_user = db.table("user");
import { generateRandomString } from "../utils/utils.js";

export const setLogin = async (req, res) => {
  try { // body: { email, password }
    const userInput = req.body;
    const loginID = generateRandomString(80);
    const userData = (await db_user.all()).filter(u => u.value.email === userInput.email)[0];
    if (!userData) {
      return res.send({ status: false, message: "Wrong Email!" });
    }
    if (userData.value.password !== userInput.password) {
      return res.send({ status: false, message: "Wrong Password!" });
    }
    await db_loggedUser.set(loginID, { id: userData.id, email: userInput.email });
    res.send({ status: true, loginID: loginID });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const setLogout = async (req, res) => {
  try { // body: { loginID }
    const loginID = req.body.loginID;
    await db_loggedUser.delete(loginID);
    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const isLogin = async (req, res) => {
  try { // body: { loginID }
    const userInput = req.body;
    const userData = await db_loggedUser.get(userInput.loginID);
    res.send({ status: userData ? true : false });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}
