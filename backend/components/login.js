import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_loggedUser = db.table("loggedUser");
const db_user = db.table("user");
import { generateRandomString } from "../utils/utils.js";


export const getLoginUser = async (req, res) => {
  try { // -
    const users = await db_loggedUser.all();
    res.json({ status: true, data: users })
  } catch (err) {
    console.log(err);
    res.json({ status: false })
  }
}

export const setLogin = async (req, res) => {
  try { // body: { email, password }
    const userInput = req.body;
    const loginID = generateRandomString(80);
    const userData = (await db_user.all()).filter(u => u.value.email === userInput.email)[0];
    if (!userData) {
      return res.json({ status: false, message: "Wrong Email!" });
    }
    if (userData.value.password !== userInput.password) {
      return res.json({ status: false, message: "Wrong Password!" });
    }
    await db_loggedUser.set(loginID, { id: userData.id, email: userInput.email });
    res.json({ status: true, loginID: loginID });
  } catch (error) {
    console.log(error);
    res.json({ status: false });  
  }
}

export const setLogout = async (req, res) => {
  try { // params: { loginID }
    await db_loggedUser.delete(req.query.loginID);
    res.json({ status: true });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}

export const isLogin = async (req, res) => {
  try { // params: { loginID }
    const userData = await db_loggedUser.get(req.query.loginID);
    res.json({ status: userData ? true : false });
  } catch (error) {
    console.log(error);
    res.json({ status: false });
  }
}
