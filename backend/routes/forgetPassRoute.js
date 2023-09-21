import express from "express";

import {
  setSendVerificationCode,
  validatorVerificationCode,
  resetPassword
} from "../components/forgetPass.js";

const router = express.Router();

router.post("/", setSendVerificationCode);
router.get("/", validatorVerificationCode);
router.post("/newPassword", resetPassword)

export default router;