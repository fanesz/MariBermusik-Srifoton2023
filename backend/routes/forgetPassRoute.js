import express from "express";

import {
  setSendVerificationCode
} from "../components/forgetPass.js";

const router = express.Router();

router.post("/", setSendVerificationCode);
// router.post("/", isLogin);

export default router;