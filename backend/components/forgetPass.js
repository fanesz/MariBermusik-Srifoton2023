import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_forgetPass = db.table("forgetPass");
const db_user = db.table("user");
import { generateRandomString } from "../utils/utils.js";
import sendMail from "../config/mailer.js";

export const sendVerificationCode = async (req, res) => {
  try { // body: { email }
    const userInput = req.body;

    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    if (!userData) {
      return res.send({ status: false });
    }

    const userDataForgetPass = (await db_forgetPass.all()).find(u => u.value.email === userInput.email);
    if (userDataForgetPass) {
      await db_forgetPass.delete(userDataForgetPass.id);
    }

    const verificationCode = generateRandomString(50);
    await db_forgetPass.set(verificationCode, { email: userInput.email });

    sendMail(userInput.email, `${process.env.BASE_URL}resetpassword/${verificationCode}`, 'sendVerificationCode');

    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const validatorVerificationCode = async (req, res) => {
  try { // params: { id }
    const verificationCodeData = await db_forgetPass.get(req.query.id);
    if (!verificationCodeData) {
      return res.send({ status: false });
    }
    res.send({ status: true, email: verificationCodeData.email });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const resetPassword = async (req, res) => {
  try { // body: { email, newPassword }
    const email = req.body.email;
    const newPassword = req.body.newPassword;
    const userData = (await db_user.all()).find(u => u.value.email === email);
    if (!userData) {
      return res.send({ status: false });
    }
    await db_user.set(userData.id, { ...userData.value, password: newPassword });

    const verificationCodeData = (await db_forgetPass.all()).find(u => u.value.email === email);
    await db_forgetPass.delete(verificationCodeData.id);
    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }

}

