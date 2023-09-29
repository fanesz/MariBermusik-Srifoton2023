import express from "express";

import {
  sendVerificationCode,
  validatorVerificationCode,
  resetPassword
} from "../components/forgetPass.js";

const router = express.Router();

router.post("/", sendVerificationCode);
router.get("/", validatorVerificationCode);
router.post("/newPassword", resetPassword)

export default router;