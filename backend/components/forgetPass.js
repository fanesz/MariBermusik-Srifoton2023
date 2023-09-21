import { QuickDB } from "quick.db";
const db = new QuickDB();
const db_forgetPass = db.table("forgetPass");
const db_user = db.table("user");
import { generateRandomString } from "../utils/utils.js";
import sendMail from "../utils/mailer.js";

export const setSendVerificationCode = async (req, res) => {
  try {
    const userInput = req.body;

    const userData = (await db_user.all()).find(u => u.value.email === userInput.email);
    if (!userData) {
      res.send({ status: false });
      return;
    }

    const userDataForgetPass = (await db_forgetPass.all()).find(u => u.value.email === userInput.email);
    if (userDataForgetPass) {
      await db_forgetPass.delete(userDataForgetPass.id);
    }

    const verificationCode = generateRandomString(16);
    await db_forgetPass.set(verificationCode, { email: userInput.email });

    sendMail(userInput.email, verificationCode, 'sendVerificationCode');

    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const validatorVerificationCode = async (req, res) => {
  try {
    const verificationCode = req.query.id;
    const verificationCodeData = await db_forgetPass.get(verificationCode);
    if (verificationCodeData) {
      res.send({ status: true, email: verificationCodeData.email });
    } else {
      res.send({ status: false });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

export const resetPassword = async (req, res) => {
  try {
    const email = req.body.email;
    const newPassword = req.body.newPassword;
    const userData = (await db_user.all()).find(u => u.value.email === email);
    if (!userData) {
      res.send({ status: false });
      return;
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

