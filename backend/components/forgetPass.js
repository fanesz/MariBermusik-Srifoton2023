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
    await db_forgetPass.set(verificationCode, { email: userInput.email, verificationCode: verificationCode });

    sendMail(userInput.email, verificationCode, 'sendVerificationCode');

    res.send({ status: true });
  } catch (error) {
    console.log(error);
    res.send({ status: false });
  }
}

